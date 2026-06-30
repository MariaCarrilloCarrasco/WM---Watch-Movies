// Base de datos simulada de películas con imágenes reales de Unsplash de alta calidad
const MOVIES_DATA = [
  {
    id: 1,
    title: "The Midnight Echo",
    year: 2024,
    rating: 8.4,
    genre: "Thriller",
    description: "Una misión de exploración espacial pierde el contacto con la Tierra tras detectar un misterioso eco sónico proveniente del sector inexplorado de la galaxia. La tripulación deberá enfrentarse a sus peores temores mientras el eco resuena cada vez más fuerte en sus propias mentes.",
    duration: "2h 15m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Elena Rostova", character: "Comandante de Vuelo" },
      { name: "Marcus Vance", character: "Ingeniero de Sistemas" },
      { name: "Dr. Aris Thorne", character: "Astrofísico Principal" },
      { name: "Luna Park", character: "Oficial de Comunicaciones" }
    ],
    tags: ["Sci-Fi", "Adventure", "Drama"]
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    description: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, recibe la tarea inversa de plantar una idea en la mente de un director ejecutivo.",
    duration: "2h 28m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Leonardo DiCaprio", character: "Cobb" },
      { name: "Joseph Gordon-Levitt", character: "Arthur" },
      { name: "Elliot Page", character: "Ariadne" },
      { name: "Tom Hardy", character: "Eames" }
    ],
    tags: ["Sci-Fi", "Action", "Thriller"]
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    description: "El envejecido patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo.",
    duration: "2h 55m",
    ageRating: "R",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Marlon Brando", character: "Vito Corleone" },
      { name: "Al Pacino", character: "Michael Corleone" },
      { name: "James Caan", character: "Sonny Corleone" },
      { name: "Diane Keaton", character: "Kay Adams" }
    ],
    tags: ["Crime", "Drama"]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Drama",
    description: "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.",
    duration: "2h 34m",
    ageRating: "R",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "John Travolta", character: "Vincent Vega" },
      { name: "Samuel L. Jackson", character: "Jules Winnfield" },
      { name: "Uma Thurman", character: "Mia Wallace" },
      { name: "Bruce Willis", character: "Butch Coolidge" }
    ],
    tags: ["Crime", "Drama", "Cult"]
  },
  {
    id: 5,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    description: "Cuando la amenaza conocida como el Joker causa estragos y caos en la gente de Gotham, Batman debe aceptar una de las mayores pruebas psicológicas y físicas para luchar contra la injusticia.",
    duration: "2h 32m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Christian Bale", character: "Bruce Wayne" },
      { name: "Heath Ledger", character: "Joker" },
      { name: "Aaron Eckhart", character: "Harvey Dent" },
      { name: "Maggie Gyllenhaal", character: "Rachel Dawes" }
    ],
    tags: ["Action", "Crime", "Drama"]
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Sci-Fi",
    description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.",
    duration: "2h 49m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Matthew McConaughey", character: "Cooper" },
      { name: "Anne Hathaway", character: "Brand" },
      { name: "Jessica Chastain", character: "Murph" },
      { name: "Michael Caine", character: "Profesor Brand" }
    ],
    tags: ["Sci-Fi", "Adventure", "Drama"]
  },
  {
    id: 7,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    description: "Un oficinista insomne y un desapegado fabricante de jabón forman un club de lucha clandestino que evoluciona hacia algo mucho más grande.",
    duration: "2h 19m",
    ageRating: "R",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Edward Norton", character: "El Narrador" },
      { name: "Brad Pitt", character: "Tyler Durden" },
      { name: "Helena Bonham Carter", character: "Marla Singer" },
      { name: "Jared Leto", character: "Angel Face" }
    ],
    tags: ["Drama", "Thriller"]
  },
  {
    id: 8,
    title: "Silent Sky",
    year: 2023,
    rating: 8.4,
    genre: "Drama",
    description: "Un astrónomo pionero a principios del siglo XX lucha por el reconocimiento de sus descubrimientos científicos en un mundo dominado por hombres.",
    duration: "2h 02m",
    ageRating: "PG",
    backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Sarah Jenkins", character: "Henrietta Leavitt" },
      { name: "Thomas Sterling", character: "Peter Shaw" },
      { name: "Emily Watson", character: "Annie Cannon" }
    ],
    tags: ["Drama", "Biography", "History"]
  },
  {
    id: 9,
    title: "Iron Valley",
    year: 2022,
    rating: 7.2,
    genre: "Action",
    description: "En una ciudad industrial al borde del colapso económico, un ex-soldado se ve obligado a liderar una milicia local para defender su vecindario de una corporación militar privada.",
    duration: "1h 58m",
    ageRating: "R",
    backdrop: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Damian Cross", character: "Frank Vance" },
      { name: "Sienna Miller", character: "Clara Ortiz" },
      { name: "Ray Stevenson", character: "General Sterling" }
    ],
    tags: ["Action", "Thriller"]
  },
  {
    id: 10,
    title: "Neon Streets",
    year: 2024,
    rating: 9.0,
    genre: "Action",
    description: "Un hácker de bajo nivel en un Tokio futurista descubre un chip de datos que contiene pruebas de corrupción gubernamental a gran escala, convirtiéndose en el blanco número uno del sindicato corporativo.",
    duration: "2h 10m",
    ageRating: "R",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Kenji Sato", character: "Hiro" },
      { name: "Rin Aoyagi", character: "Rei" },
      { name: "Takeshi Kitano", character: "Boss Kuroda" }
    ],
    tags: ["Action", "Sci-Fi", "Cyberpunk"]
  },
  {
    id: 11,
    title: "The Lost Key",
    year: 2021,
    rating: 6.8,
    genre: "Drama",
    description: "Un cerrajero jubilado con principios de Alzheimer encuentra una llave antigua en su caja de seguridad que abre una puerta que no recuerda haber construido jamás.",
    duration: "1h 45m",
    ageRating: "PG",
    backdrop: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Arthur Pendelton", character: "Edward" },
      { name: "Sophie Turner", character: "Grace" },
      { name: "Charles Dance", character: "Dr. Gregory" }
    ],
    tags: ["Drama", "Mystery"]
  },
  {
    id: 12,
    title: "Blue Horizon",
    year: 2020,
    rating: 8.1,
    genre: "Action",
    description: "Un grupo de buceadores de aguas profundas descubre los restos de un submarino de la Guerra Fría que alberga una tecnología que podría alterar el equilibrio de poder mundial.",
    duration: "2h 05m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Jack Mercer", character: "Cole" },
      { name: "Nadia Belov", character: "Elena" },
      { name: "David Oyelowo", character: "Captain Vance" }
    ],
    tags: ["Action", "Adventure", "Mystery"]
  },
  {
    id: 13,
    title: "Legacy Born",
    year: 2023,
    rating: 7.5,
    genre: "Drama",
    description: "Un joven pianista en Viena descubre un diario secreto de su abuelo que revela que una famosa composición atribuida a otro artista fue en realidad escrita por él bajo amenaza.",
    duration: "2h 12m",
    ageRating: "PG-13",
    backdrop: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    cast: [
      { name: "Julian Haas", character: "Maximilian" },
      { name: "Katarina Witt", character: "Anna" },
      { name: "Christoph Waltz", character: "Herr Weber" }
    ],
    tags: ["Drama", "Music", "History"]
  }
];

// Estado global de la aplicación
const AppState = {
  currentTab: 'home', // 'home', 'explore', 'likes', 'profile', 'details'
  activeGenre: 'All', // Filtro de género activo ('All', 'Sci-Fi', 'Drama', 'Action'...)
  likedMovies: JSON.parse(localStorage.getItem('likedMovies')) || [], // IDs de películas recomendadas
  selectedMovie: null, // Película cargada en la sección Details
  searchQuery: '',
  voiceSearchActive: false
};

// Guardar favoritos en localStorage
function saveLikes() {
  localStorage.setItem('likedMovies', JSON.stringify(AppState.likedMovies));
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupGenreFilters();
  setupSearch();
  setupVoiceSearch();
  setupMovieClicks();
  
  // Renderizar la pantalla de inicio inicialmente
  renderHome();
  renderFavoritesCount();
});

// Configurar los manejadores de eventos del menú de navegación (Responsivo y Consistente)
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

// Cambiar de vista con animaciones suaves
function switchTab(tabName) {
  if (AppState.currentTab === tabName && tabName !== 'details') return;

  AppState.currentTab = tabName;

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
  } else if (tabName === 'profile') {
    renderProfile();
  }
}

// Configurar los filtros de género (con pill buttons)
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
        renderHomeGrid();
      } else if (AppState.currentTab === 'likes') {
        renderLikesGrid();
      }
    });
  };

  setupFilterListeners('home-genre-filters');
  setupFilterListeners('likes-genre-filters');
}

// Configurar la funcionalidad de búsqueda en tiempo real
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      renderSearchSuggestions();
    });
  }

  // Botones de categorías rápidas en Explore
  const exploreCategories = document.querySelectorAll('.explore-category-card');
  exploreCategories.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        let query = '';
        if (category === 'genres') query = 'Sci-Fi';
        else if (category === 'year') query = '2024';
        else if (category === 'popular') query = '9.0';
        else if (category === 'awards') query = 'Godfather';
        else if (category === 'streaming') query = 'The Midnight Echo';
        else if (category === 'directors') query = 'Nolan';

        searchInput.value = query;
        AppState.searchQuery = query;
        renderSearchSuggestions();
      }
    });
  });
}

// Configurar la búsqueda por voz con Web Speech API
function setupVoiceSearch() {
  const voiceBtn = document.getElementById('voice-search-btn');
  const searchInput = document.getElementById('search-input');
  
  if (!voiceBtn || !searchInput) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    // Si el navegador no soporta búsqueda por voz, ocultamos el micrófono o lo deshabilitamos
    voiceBtn.style.opacity = '0.4';
    voiceBtn.title = 'Búsqueda por voz no soportada en este navegador';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  voiceBtn.addEventListener('click', () => {
    if (AppState.voiceSearchActive) {
      recognition.stop();
    } else {
      recognition.start();
    }
  });

  recognition.onstart = () => {
    AppState.voiceSearchActive = true;
    voiceBtn.classList.add('listening');
    searchInput.placeholder = 'Escuchando...';
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onend = () => {
    AppState.voiceSearchActive = false;
    voiceBtn.classList.remove('listening');
    searchInput.placeholder = 'Buscar películas, actores, directores...';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    AppState.searchQuery = transcript;
    renderSearchSuggestions();
  };

  recognition.onerror = (event) => {
    console.error('Error de reconocimiento de voz:', event.error);
    AppState.voiceSearchActive = false;
    voiceBtn.classList.remove('listening');
    searchInput.placeholder = 'Buscar películas, actores, directores...';
  };
}

// Configurar clicks en tarjetas de película para ver detalles
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
}

// Dar/quitar de favoritos
function toggleLikeMovie(movieId) {
  const index = AppState.likedMovies.indexOf(movieId);
  if (index === -1) {
    AppState.likedMovies.push(movieId);
  } else {
    AppState.likedMovies.splice(index, 1);
  }
  saveLikes();
  renderFavoritesCount();
}

// Actualizar contadores de favoritos en la UI
function renderFavoritesCount() {
  const count = AppState.likedMovies.length;
  // Actualizar indicador del menú
  const likesBadge = document.querySelector('.likes-badge');
  if (likesBadge) {
    if (count > 0) {
      likesBadge.textContent = count;
      likesBadge.style.display = 'block';
    } else {
      likesBadge.style.display = 'none';
    }
  }

  // Actualizar subtítulo en la vista Likes
  const likesSubtitle = document.querySelector('.likes-subtitle');
  if (likesSubtitle) {
    likesSubtitle.textContent = `Tienes ${count} títulos guardados en tu biblioteca.`;
  }
}

// --- RENDERIZADORES DE VISTAS ---

// 1. Renderizar la pantalla de inicio (Home)
function renderHome() {
  // Asegurarnos de que el banner destacado tenga la imagen correcta de la versión tablet (horizontal)
  const heroSection = document.querySelector('.hero-banner');
  const mainMovie = MOVIES_DATA.find(m => m.id === 1); // The Midnight Echo
  
  if (heroSection && mainMovie) {
    heroSection.style.backgroundImage = `linear-gradient(to top, var(--bg-color) 10%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.7) 100%), url('${mainMovie.backdrop}')`;
  }

  renderHomeGrid();
}

function renderHomeGrid() {
  const grid = document.getElementById('home-movies-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Filtrar películas (excluimos la primera película que es la principal destacada)
  const filtered = MOVIES_DATA.filter(movie => {
    if (movie.id === 1) return false; // Omitir The Midnight Echo de la lista secundaria para no duplicar en Home
    if (AppState.activeGenre === 'All') return true;
    return movie.genre === AppState.activeGenre;
  });

  filtered.forEach(movie => {
    grid.appendChild(createMovieCardElement(movie));
  });
}

// 2. Renderizar la pantalla de exploración (Explore)
function renderExplore() {
  renderSearchSuggestions();
}

function renderSearchSuggestions() {
  const resultsContainer = document.getElementById('explore-search-results');
  const suggestedTitle = document.getElementById('suggested-title');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';

  let moviesToRender = [];
  if (AppState.searchQuery.trim() === '') {
    // Si no hay búsqueda, mostramos películas sugeridas por defecto (ej. las primeras 3)
    suggestedTitle.textContent = "Sugerencias para ti";
    moviesToRender = MOVIES_DATA.slice(1, 7); // Excluimos la principal
  } else {
    suggestedTitle.textContent = "Resultados de búsqueda";
    const query = AppState.searchQuery.toLowerCase();
    moviesToRender = MOVIES_DATA.filter(movie => {
      const matchTitle = movie.title.toLowerCase().includes(query);
      const matchGenre = movie.genre.toLowerCase().includes(query);
      const matchCast = movie.cast.some(c => c.name.toLowerCase().includes(query));
      return matchTitle || matchGenre || matchCast;
    });

    if (moviesToRender.length === 0) {
      resultsContainer.innerHTML = `<div class="no-results">No se encontraron resultados para "${AppState.searchQuery}"</div>`;
      return;
    }
  }

  moviesToRender.forEach(movie => {
    resultsContainer.appendChild(createMovieCardElement(movie));
  });
}

// 3. Renderizar la pantalla de favoritos (Likes)
function renderLikes() {
  renderFavoritesCount();
  renderLikesGrid();
}

function renderLikesGrid() {
  const grid = document.getElementById('likes-movies-grid');
  const emptyState = document.getElementById('likes-empty-state');
  if (!grid) return;

  grid.innerHTML = '';

  // Filtrar películas marcadas con favoritos
  const liked = MOVIES_DATA.filter(movie => {
    const isLiked = AppState.likedMovies.includes(movie.id);
    if (!isLiked) return false;
    if (AppState.activeGenre === 'All') return true;
    return movie.genre === AppState.activeGenre;
  });

  if (liked.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    liked.forEach(movie => {
      grid.appendChild(createMovieCardElement(movie));
    });
  }
}

// 4. Renderizar la pantalla de Perfil (Profile)
function renderProfile() {
  const profileContainer = document.getElementById('view-profile');
  if (!profileContainer) return;
  // La maquetación de perfil/login está pre-renderizada en HTML. 
  // Aquí podemos gestionar alguna lógica si el usuario ya está conectado.
}

// 5. Cargar e ir a los detalles de una película
function showMovieDetails(movie) {
  AppState.selectedMovie = movie;

  // Actualizar fondo de pantalla del detalle
  const detailBackdrop = document.getElementById('detail-backdrop');
  if (detailBackdrop) {
    detailBackdrop.style.backgroundImage = `linear-gradient(to top, var(--bg-color) 15%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.6) 100%), url('${movie.backdrop}')`;
  }

  // Detalles de título y meta
  document.getElementById('detail-title').textContent = movie.title;
  document.getElementById('detail-year').textContent = movie.year;
  document.getElementById('detail-age').textContent = movie.ageRating;
  document.getElementById('detail-duration').textContent = movie.duration;
  document.getElementById('detail-score').textContent = movie.rating;
  document.getElementById('detail-description').textContent = movie.description;

  // Actualizar botón de favorito en detalles
  const detailLikeBtn = document.getElementById('detail-like-btn');
  if (detailLikeBtn) {
    const isLiked = AppState.likedMovies.includes(movie.id);
    if (isLiked) {
      detailLikeBtn.classList.add('liked');
      detailLikeBtn.innerHTML = '❤️'; // Icono corazón relleno
    } else {
      detailLikeBtn.classList.remove('liked');
      detailLikeBtn.innerHTML = '🤍'; // Icono corazón vacío
    }

    // Configurar el click en el botón de favoritos de la pantalla de detalle
    // Eliminar event listeners anteriores
    const newLikeBtn = detailLikeBtn.cloneNode(true);
    detailLikeBtn.parentNode.replaceChild(newLikeBtn, detailLikeBtn);
    
    newLikeBtn.addEventListener('click', () => {
      toggleLikeMovie(movie.id);
      const isLikedNow = AppState.likedMovies.includes(movie.id);
      newLikeBtn.classList.toggle('liked', isLikedNow);
      newLikeBtn.innerHTML = isLikedNow ? '❤️' : '🤍';
    });
  }

  // Generar etiquetas de género
  const tagsContainer = document.getElementById('detail-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    movie.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'detail-tag';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  // Generar lista de actores (Cast)
  const castContainer = document.getElementById('detail-cast-list');
  if (castContainer) {
    castContainer.innerHTML = '';
    movie.cast.forEach((actor, index) => {
      const actorCard = document.createElement('div');
      actorCard.className = 'actor-card';

      // Usamos retratos aleatorios pero estéticos de Unsplash basados en su nombre
      const imageIndex = 40 + index + movie.id;
      const avatarUrl = `https://images.unsplash.com/photo-${1500000000000 + imageIndex * 100000}?auto=format&fit=crop&w=150&h=150&q=80`;

      actorCard.innerHTML = `
        <div class="actor-photo" style="background-image: url('${avatarUrl}')"></div>
        <div class="actor-info">
          <span class="actor-name">${actor.name}</span>
          <span class="actor-char">${actor.character}</span>
        </div>
      `;
      castContainer.appendChild(actorCard);
    });
  }

  // Configurar botón Volver (Back arrow)
  const backBtn = document.getElementById('detail-back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      // Regresar a la pestaña anterior
      switchTab(AppState.currentTab === 'details' ? 'home' : AppState.currentTab);
    };
  }

  // Botón comprar entradas / trailer con alertas de interacción
  const ticketBtn = document.getElementById('detail-ticket-btn');
  if (ticketBtn) {
    ticketBtn.onclick = () => {
      alert(`🎟️ ¡Reserva de entradas para "${movie.title}" iniciada! Selecciona tu cine favorito.`);
    };
  }

  const trailerBtn = document.getElementById('detail-trailer-btn');
  if (trailerBtn) {
    trailerBtn.onclick = () => {
      alert(`▶️ Reproduciendo tráiler oficial de "${movie.title}"...`);
    };
  }

  const listBtn = document.getElementById('detail-list-btn');
  if (listBtn) {
    listBtn.onclick = () => {
      alert(`📁 "${movie.title}" ha sido guardada en tu lista de seguimiento.`);
    };
  }

  // Ir a la vista de detalle
  switchTab('details');
}

// Auxiliar para crear el nodo HTML de una tarjeta de película
function createMovieCardElement(movie) {
  const isLiked = AppState.likedMovies.includes(movie.id);

  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('data-id', movie.id);

  card.innerHTML = `
    <div class="card-image" style="background-image: url('${movie.poster}')">
      <button class="card-like-btn ${isLiked ? 'liked' : ''}" aria-label="Añadir a favoritos">
        <svg class="heart-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <div class="card-rating">
        <span class="star-icon">★</span>
        <span>${movie.rating}</span>
      </div>
    </div>
    <div class="card-details">
      <h3 class="card-title">${movie.title}</h3>
      <span class="card-subtitle">${movie.year} • ${movie.genre}</span>
    </div>
  `;

  return card;
}
