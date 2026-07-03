import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('wm_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [language, setLanguage] = useState('es'); // 'es' or 'en'
  const [currentTab, setCurrentTab] = useState('home');
  const [activeGenre, setActiveGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  
  // User-scoped lists (initialized based on logged in user)
  const getUserKey = () => user ? user.name : 'María Carrillo';
  
  const [likedMovies, setLikedMovies] = useState([]);
  const [myListMovies, setMyListMovies] = useState([]);
  const [userRatings, setUserRatings] = useState({});
  const [userReviews, setUserReviews] = useState({});
  
  // Intended targets (routing guard memory)
  const [intendedTarget, setIntendedTarget] = useState(null);
  const [intendedAction, setIntendedAction] = useState(null);
  
  // Service error modal state
  const [serviceError, setServiceError] = useState(null); // { message, retryCallback }
  const [likesLoading, setLikesLoading] = useState(false);

  // Sync user-scoped states when user changes
  useEffect(() => {
    const name = getUserKey();
    const loadedLikes = JSON.parse(localStorage.getItem(`likedMovies_${name}`)) || JSON.parse(localStorage.getItem('likedMovies')) || [];
    const loadedMyList = JSON.parse(localStorage.getItem(`myListMovies_${name}`)) || JSON.parse(localStorage.getItem('myListMovies')) || [];
    const loadedRatings = JSON.parse(localStorage.getItem(`userRatings_${name}`)) || JSON.parse(localStorage.getItem('userRatings')) || {};
    const loadedReviews = JSON.parse(localStorage.getItem(`userReviews_${name}`)) || JSON.parse(localStorage.getItem('userReviews')) || {};
    
    setLikedMovies(loadedLikes);
    setMyListMovies(loadedMyList);
    setUserRatings(loadedRatings);
    setUserReviews(loadedReviews);
  }, [user]);

  // Persist likedMovies
  const persistLikes = (newLikes) => {
    setLikedMovies(newLikes);
    localStorage.setItem(`likedMovies_${getUserKey()}`, JSON.stringify(newLikes));
  };

  // Persist myListMovies
  const persistMyList = (newMyList) => {
    setMyListMovies(newMyList);
    localStorage.setItem(`myListMovies_${getUserKey()}`, JSON.stringify(newMyList));
  };

  // Persist ratings
  const persistRatings = (newRatings) => {
    setUserRatings(newRatings);
    localStorage.setItem(`userRatings_${getUserKey()}`, JSON.stringify(newRatings));
  };

  // Persist reviews
  const persistReviews = (newReviews) => {
    setUserReviews(newReviews);
    localStorage.setItem(`userReviews_${getUserKey()}`, JSON.stringify(newReviews));
  };

  // 15% random failure service helper
  const executeServiceAction = (actionCallback, errorMsg, retryCallback) => {
    const isFailure = Math.random() < 0.15;
    if (isFailure) {
      setServiceError({
        message: errorMsg[language] || errorMsg.es,
        retryCallback: () => {
          setServiceError(null);
          executeServiceAction(actionCallback, errorMsg, retryCallback);
        }
      });
    } else {
      actionCallback();
    }
  };

  // Tab switching router with Route Guards
  const switchTab = (tabName) => {
    const PROTECTED_TABS = ['likes', 'mylist', 'profile'];
    if (PROTECTED_TABS.includes(tabName) && !user) {
      setIntendedTarget(tabName);
      // Open login modal / redirect
      setCurrentTab('home');
      const welcomeEl = document.getElementById('welcome-screen');
      if (welcomeEl) {
        welcomeEl.style.display = 'flex';
        welcomeEl.classList.remove('fade-out');
      }
      alert(language === 'es' 
        ? 'Esta sección es de acceso privado. Por favor, inicia sesión o regístrate para continuar.' 
        : 'This section is private. Please log in or sign up to continue.');
      return;
    }

    if (tabName === 'likes') {
      // Simulate asynchronous loading
      setLikesLoading(true);
      executeServiceAction(
        () => {
          setTimeout(() => {
            setLikesLoading(false);
            setCurrentTab('likes');
          }, 400);
        },
        {
          es: 'No se pudo recuperar la lista de películas favoritas. Por favor, inténtelo de nuevo.',
          en: 'Could not retrieve the favorite movies list. Please try again.'
        },
        () => switchTab('likes')
      );
    } else {
      setCurrentTab(tabName);
    }
  };

  // Favorites logic rules: Alta & Baja Directa
  const toggleLike = (movieId) => {
    let nextLikes;
    if (likedMovies.includes(movieId)) {
      nextLikes = likedMovies.filter(id => id !== movieId);
      // Baja Directa: Delete rating
      const nextRatings = { ...userRatings };
      delete nextRatings[movieId];
      persistRatings(nextRatings);
    } else {
      nextLikes = [...likedMovies, movieId];
    }
    persistLikes(nextLikes);
  };

  const toggleMyList = (movieId) => {
    let nextMyList;
    if (myListMovies.includes(movieId)) {
      nextMyList = myListMovies.filter(id => id !== movieId);
    } else {
      nextMyList = [...myListMovies, movieId];
    }
    persistMyList(nextMyList);
  };

  const setRating = (movieId, score) => {
    const nextRatings = { ...userRatings };
    if (score === null || score === undefined || score === '' || isNaN(score)) {
      delete nextRatings[movieId];
      persistRatings(nextRatings);
      return;
    }

    const val = parseInt(score);
    if (val < 1 || val > 10) return;

    nextRatings[movieId] = val;
    persistRatings(nextRatings);

    // Alta Directa: Auto-add to likes
    if (!likedMovies.includes(movieId)) {
      persistLikes([...likedMovies, movieId]);
    }
  };

  const addReview = (movieId, commentText, ratingScore) => {
    const scoreVal = parseInt(ratingScore) || 10;
    const newReview = {
      name: user ? `${user.name} (Tú)` : 'María Carrillo (Tú)',
      score: scoreVal,
      comment: commentText,
      date: new Date().toISOString().split('T')[0]
    };

    const nextReviews = { ...userReviews };
    if (!nextReviews[movieId]) {
      nextReviews[movieId] = [];
    }
    nextReviews[movieId] = [newReview, ...nextReviews[movieId]];
    persistReviews(nextReviews);
  };

  const loginUser = (email, name, remember) => {
    const newUser = { email, name };
    setUser(newUser);
    if (remember) {
      localStorage.setItem('wm_user', JSON.stringify(newUser));
    } else {
      sessionStorage.setItem('wm_user', JSON.stringify(newUser));
    }
    
    // Check for redirection callbacks
    if (intendedAction) {
      const act = intendedAction;
      setIntendedAction(null);
      act(newUser);
    } else if (intendedTarget) {
      const target = intendedTarget;
      setIntendedTarget(null);
      switchTab(target);
    } else {
      setCurrentTab('home');
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('wm_user');
    sessionStorage.removeItem('wm_user');
    // Clear state
    setLikedMovies([]);
    setMyListMovies([]);
    setUserRatings({});
    setUserReviews({});
    setCurrentTab('home');
  };

  return (
    <AppContext.Provider value={{
      user,
      language,
      currentTab,
      activeGenre,
      selectedMovie,
      selectedPerson,
      likedMovies,
      myListMovies,
      userRatings,
      userReviews,
      serviceError,
      likesLoading,
      intendedAction,
      intendedTarget,
      setLanguage,
      setCurrentTab,
      setActiveGenre,
      setSelectedMovie,
      setSelectedPerson,
      setServiceError,
      setLikesLoading,
      setIntendedAction,
      setIntendedTarget,
      switchTab,
      toggleLike,
      toggleMyList,
      setRating,
      addReview,
      loginUser,
      logoutUser,
      executeServiceAction
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
