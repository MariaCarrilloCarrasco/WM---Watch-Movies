function setupMovieClicks() {
  document.addEventListener('click', (e) => {
    const movieCard = e.target.closest('.movie-card');
    if (!movieCard) return;

    // Verificar si se pulsó el corazón de la tarjeta
    const likeBtn = e.target.closest('.card-like-btn');
    const movieId = parseInt(movieCard.getAttribute('data-id'));

    if (likeBtn) {
      e.stopPropagation(); // Evitar que abra el detalle
      toggleLikeMovie(movieId);
      // Recargar la cuadrícula correspondiente para actualizar el estado del botón de favoritos
      if (AppState.currentTab === 'home') renderHomeGrid();
      else if (AppState.currentTab === 'explore') renderExplore();
      else if (AppState.currentTab === 'likes') renderLikes();
    } else {
      // Cargar los detalles de la película
      const movie = MOVIES_DATA.find(m => m.id === movieId);
      if (movie) {
        showMovieDetails(movie);
        if (typeof window.closePersonModal === 'function') {
          window.closePersonModal(false);
        }
      }
    }
  });

  // Configurar click en el banner principal destacado
  const heroPlayBtn = document.querySelector('.hero-play-btn');
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
      const mainMovie = MOVIES_DATA.find(m => m.id === 1); // The Midnight Echo
      if (mainMovie) showMovieDetails(mainMovie);
    });
  }

  // Configurar click en el botón "+ MY LIST" del banner destacado
  const heroMyListBtn = document.getElementById('hero-like-main');
  if (heroMyListBtn) {
    const updateMainMyListBtn = () => {
      const isListed = AppState.myListMovies.includes(1);
      const isEs = AppState.language === 'es';
      heroMyListBtn.textContent = isListed 
        ? (isEs ? '✓ EN MI LISTA' : '✓ IN MY LIST')
        : (isEs ? '+ MI LISTA' : '+ MY LIST');
    };
    
    // Ejecutar al inicio
    updateMainMyListBtn();
    
    heroMyListBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMyList(1);
      updateMainMyListBtn();
    });
    
    // Guardar referencia para actualizar cuando cambie el idioma o el estado
    window.updateMainMyListBtn = updateMainMyListBtn;
  }
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Botón especial para el perfil (que muestra el logo)
  const profileBrandBtn = document.querySelector('.logo-profile-btn');
  if (profileBrandBtn) {
    profileBrandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('profile');
    });
  }

  // Volver a Home desde el título
  const appTitle = document.querySelector('.app-title');
  if (appTitle) {
    appTitle.addEventListener('click', () => {
      switchTab('home');
    });
  }
}

function switchTab(tabName) {
  // Comprobar si la ruta es protegida y el usuario no está autenticado
  if (PROTECTED_TABS.includes(tabName) && !AppState.user) {
    // Almacenar el destino deseado
    AppState.intendedTarget = tabName;
    
    // Solicitar autenticación abriendo el panel de login
    const welcome = document.getElementById('welcome-screen');
    if (welcome) {
      welcome.classList.remove('fade-out');
      welcome.style.display = 'flex';
      
      // Mostrar directamente el formulario de acceso
      currentAuthMode = 'login';
      const buttonsContainer = document.getElementById('welcome-auth-buttons');
      const formWrapper = document.getElementById('welcome-auth-form-wrapper');
      if (buttonsContainer) buttonsContainer.style.display = 'none';
      if (formWrapper) formWrapper.style.display = 'block';
      updateWelcomeAuthUI();
      
      const isEs = AppState.language === 'es';
      alert(isEs 
        ? 'Esta sección es de acceso privado. Por favor, inicia sesión o regístrate para continuar.' 
        : 'This section is private. Please log in or sign up to continue.');
    }
    return;
  }

  if (AppState.currentTab === tabName && tabName !== 'details') return;

  if (tabName !== 'details' && window.location.hash.startsWith('#movie-')) {
    history.replaceState(null, '', window.location.pathname);
  }

  AppState.currentTab = tabName;

  // Ocultar el loader de paginación al cambiar de sección
  const loader = document.getElementById('pagination-loader');
  if (loader) loader.style.display = 'none';

  // Actualizar estado activo en la barra de navegación
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Ocultar todas las secciones
  const views = document.querySelectorAll('.app-view');
  views.forEach(view => {
    view.classList.remove('active');
  });

  // Mostrar la sección correspondiente
  const targetView = document.getElementById(`view-${tabName}`);
  if (targetView) {
    targetView.classList.add('active');
    // Scroll hacia el inicio al cambiar de pestaña
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Renderizar los datos de la sección correspondiente
  if (tabName === 'home') {
    renderHome();
  } else if (tabName === 'explore') {
    renderExplore();
  } else if (tabName === 'likes') {
    renderLikes();
  } else if (tabName === 'mylist') {
    renderMyList();
  } else if (tabName === 'profile') {
    renderProfile();
  } else if (tabName === 'monologos') {
    if (typeof renderMonologos === 'function') renderMonologos();
  } else if (tabName === 'teatro') {
    if (typeof renderTeatro === 'function') renderTeatro();
  } else if (tabName === 'wom') {
    if (typeof renderWomView === 'function') renderWomView();
  }
}

function setupGenreFilters() {
  // Los filtros están presentes tanto en la pestaña Home como en Likes
  const setupFilterListeners = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.addEventListener('click', (e) => {
      const pill = e.target.closest('.genre-pill');
      if (!pill) return;

      // Quitar clase activa a las demás pills del mismo contenedor
      container.querySelectorAll('.genre-pill').forEach(btn => {
        btn.classList.remove('active');
      });

      pill.classList.add('active');
      AppState.activeGenre = pill.getAttribute('data-genre');

      if (AppState.currentTab === 'home') {
        AppState.currentPage = 1;
        AppState.hasMoreMovies = true;
        AppState.loadingMovies = false;
        renderHomeGrid();
      } else if (AppState.currentTab === 'likes') {
        renderLikesGrid();
      }
    });
  };

  setupFilterListeners('home-genre-filters');
  setupFilterListeners('likes-genre-filters');
}

function toggleLikeMovie(movieId) {
  // Protegido: requiere autenticación
  if (!AppState.user) {
    AppState.postLoginAction = () => toggleLikeMovie(movieId);
    openRegister();
    return;
  }
  try {
    FavoritesService.toggle(movieId);
    renderFavoritesCount();
    
    if (AppState.currentTab === 'likes') {
      renderLikesGrid();
      
      const playlistContainer = document.getElementById('likes-playlist-container');
      const toggleBtn = document.getElementById('toggle-playlist-mode-btn');
      if (AppState.likedMovies.length === 0) {
        if (toggleBtn) toggleBtn.style.display = 'none';
        if (playlistContainer) playlistContainer.style.display = 'none';
      } else {
        if (toggleBtn) toggleBtn.style.display = 'flex';
        if (playlistContainer && playlistContainer.style.display !== 'none') {
          renderPlaylistItems();
        }
      }
    }
  } catch (error) {
    console.error("Error en toggleLikeMovie:", error);
    if (typeof window.showServiceErrorModal === 'function') {
      window.showServiceErrorModal(error.message, () => {
        toggleLikeMovie(movieId);
      });
    } else {
      alert('⚠️ ' + error.message);
    }
  }
}

function toggleMyList(movieId) {
  movieId = Number(movieId);

  const index = AppState.myListMovies.findIndex(id => Number(id) === movieId);
  if (index === -1) {
    AppState.myListMovies.push(movieId);
  } else {
    AppState.myListMovies.splice(index, 1);
  }
  saveMyList();
  renderMyListCount();
  if (AppState.currentTab === 'mylist') {
    renderMyListGrid();
  }
  if (movieId === 1 && typeof window.updateMainMyListBtn === 'function') {
    window.updateMainMyListBtn();
  }
}

