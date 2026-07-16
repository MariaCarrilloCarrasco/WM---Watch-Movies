const AppState = {
  currentTab: 'home', // 'home', 'explore', 'likes', 'mylist', 'profile', 'details'
  activeGenre: 'All', // Filtro de género activo ('All', 'Sci-Fi', 'Drama', 'Action'...)
  likedMovies: JSON.parse(localStorage.getItem('likedMovies')) || [], // IDs de películas recomendadas
  myListMovies: (JSON.parse(localStorage.getItem('myListMovies')) || []).map(Number), // IDs de películas en mi lista
  selectedMovie: null, // Película cargada en la sección Details
  searchQuery: '',
  voiceSearchActive: false,
  language: localStorage.getItem('appLanguage') || 'es',
  
  // Filtros avanzados para la sección de Exploración
  exploreFilters: {
    genre: 'All',
    rating: 'All',
    trend: 'All'
  },
  
  // Paginación y fuente de datos actualizada (Scroll Infinito)
  currentPage: 1,
  moviesPerPage: 4,
  loadingMovies: false,
  hasMoreMovies: true,
  exploreRequestToken: 0,

  // Puntuaciones y Comentarios de usuarios
  userRatings: JSON.parse(localStorage.getItem('userRatings')) || {},
  userReviews: JSON.parse(localStorage.getItem('userReviews')) || {}
};

// Acción pendiente que se ejecutará tras autenticación (si el usuario intentó una acción privada)
AppState.postLoginAction = null;

// Cargar asignaciones personales desde localStorage
AppState.movieAssignments = JSON.parse(localStorage.getItem('movieAssignments') || '{}');
// Valoraciones de usuario: { movieId: numericRating }
AppState.userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');

// Playlist y Planificación de películas favoritas
AppState.playlistOrder = JSON.parse(localStorage.getItem('playlistOrder') || '[]');
AppState.playlistSchedule = JSON.parse(localStorage.getItem('playlistSchedule') || '{}');

// =================================================================
// MODELOS Y EXCEPCIONES CENTRALIZADOS (API Y CONTROL DE ERRORES)
// =================================================================

// Clases de errores personalizadas
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

class InvalidResponseError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidResponseError";
  }
}

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}

// Modelo de película interno consciente (evita exponer campos raw externos como movie_identifier, category_type, etc.)
class MovieModel {
  constructor(raw) {
    if (!raw || !raw.movie_identifier || !raw.display_name) {
      throw new InvalidResponseError("Error de integridad de datos: El payload de la API externa no contiene los identificadores necesarios.");
    }
    this.id = Number(raw.movie_identifier);
    this.title = String(raw.display_name);
    this.year = Number(raw.release_year);
    this.rating = Number(raw.average_score);
    this.genre = String(raw.category_type);
    this.description = raw.synopsis_text; // es/en object
    this.duration = String(raw.runtime_minutes);
    this.ageRating = String(raw.content_rating);
    this.backdrop = String(raw.bg_image_url);
    this.poster = String(raw.cover_image_url);
    this.videoSrc = String(raw.videoSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
    this.director = raw.filmmaker ? {
      name: String(raw.filmmaker.director_name),
      photo: String(raw.filmmaker.avatar)
    } : null;
    this.cast = Array.isArray(raw.actors_list) ? raw.actors_list.map(actor => ({
      name: String(actor.actor_fullname),
      character: actor.character_role, characterDesc: actor.character_desc
    })) : [];
    this.tags = Array.isArray(raw.keyword_labels) ? raw.keyword_labels.map(t => String(t)) : [];
  }
}

// Servicio centralizado de la API de películas
const MovieAPIService = {
  // Recuperar listado de películas con soporte de filtros por género, búsqueda, puntuación, tendencia y paginación
  async getMovies({ genre = 'All', search = '', page = 1, limit = null, rating = 'All', trend = 'All', year = 'All', awards = false, streaming = 'All', director = 'All', reliableMode = false } = {}) {
    // 1. Promesa de límite de tiempo (Timeout) a 3 segundos
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new TimeoutError("Tiempo de espera agotado: El servidor no respondió dentro del límite de 3 segundos.")), 3000);
    });

    // 2. Promesa de petición de datos
    const dataFetchPromise = new Promise((resolve, reject) => {
      // Simular latencia variable: 8% de probabilidad de delay lento (4000ms) para provocar Timeout
      const isSlow = reliableMode ? false : Math.random() < 0.08;
      const delay = isSlow ? 4000 : 300;

      setTimeout(() => {
        // Simular error de red aleatorio (10% de probabilidad)
        if (!reliableMode && Math.random() < 0.1) {
          reject(new NetworkError("Error de red: No se pudo establecer conexión con el servidor externo."));
          return;
        }

        // Simular respuesta corrupta o inválida (5% de probabilidad)
        const isCorrupt = reliableMode ? false : Math.random() < 0.05;
        let apiResponse = [...RAW_EXTERNAL_MOVIES_API_DATA];

        if (isCorrupt) {
          // Eliminamos campos clave para simular datos corruptos que dispararán InvalidResponseError
          apiResponse = apiResponse.map(m => {
            const copy = {...m};
            delete copy.display_name;
            return copy;
          });
        }

        // --- FILTRADO Y BÚSQUEDA SOBRE LA ESTRUCTURA RAW EXTERNA DE LA API ---
        if (search.trim() !== '') {
          const query = search.toLowerCase().trim();
          apiResponse = apiResponse.filter(movie => 
            (movie.display_name && movie.display_name.toLowerCase().includes(query)) ||
            (movie.category_type && movie.category_type.toLowerCase().includes(query)) ||
            (movie.keyword_labels && movie.keyword_labels.some(tag => tag.toLowerCase().includes(query)))
          );
        }

        // Filtrado por género
        if (genre !== 'All') {
          apiResponse = apiResponse.filter(movie => movie.category_type && movie.category_type.includes(genre));
        }

        if (year !== 'All') {
          apiResponse = apiResponse.filter(movie => movie.release_year == year);
        }

        if (awards === true) {
          apiResponse = apiResponse.filter(movie => movie.rating_score >= 8.5 || (movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes('award') || t.toLowerCase().includes('oscar'))));
        }

        if (streaming !== 'All') {
          const plat = streaming.toLowerCase();
          apiResponse = apiResponse.filter(movie => movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes(plat)));
        }

        if (director !== 'All') {
          const dir = director.toLowerCase();
          apiResponse = apiResponse.filter(movie => {
            const hasDirTag = movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes(dir));
            const hasCastMatch = movie.actors_list && movie.actors_list.some(a => a.actor_fullname && a.actor_fullname.toLowerCase().includes(dir));
            return hasDirTag || hasCastMatch;
          });
        }

        // Filtrado por puntuación (rating)
        if (rating !== 'All') {
          const minRating = parseFloat(rating);
          apiResponse = apiResponse.filter(movie => movie.average_score && movie.average_score >= minRating);
        }

        // Filtrado por tendencia (trend)
        if (trend === 'trending') {
          // Más Vistas / Tendencia: películas con puntuación de 8.0 o más
          apiResponse = apiResponse.filter(movie => movie.average_score && movie.average_score >= 8.0);
        } else if (trend === 'recent') {
          // Estrenos Recientes: año 2024 o 2025
          apiResponse = apiResponse.filter(movie => movie.release_year && movie.release_year >= 2024);
        }

        const total = apiResponse.length;

        // Paginación incremental sobre datos raw
        if (limit !== null) {
          const start = (page - 1) * limit;
          const end = start + limit;
          apiResponse = apiResponse.slice(start, end);
        }

        // --- TRANSFORMACIÓN Y MAPEADO AL MODELO CONSCIENTE ---
        try {
          const mappedMovies = apiResponse.map(raw => new MovieModel(raw));
          resolve({
            movies: mappedMovies,
            total: total
          });
        } catch (err) {
          reject(new InvalidResponseError("Respuesta inválida: Los datos recibidos de la API están incompletos o corruptos."));
        }
      }, delay);
    });

    // Combinamos las promesas mediante Promise.race para asegurar la gestión de timeouts
    return Promise.race([dataFetchPromise, timeoutPromise]);
  },

  // Recuperar película por ID
  async getMovieById(id) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new TimeoutError("Tiempo de espera agotado.")), 3000);
    });

    const detailFetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const rawMovie = RAW_EXTERNAL_MOVIES_API_DATA.find(m => m.movie_identifier === Number(id));
        if (!rawMovie) {
          resolve(null);
          return;
        }
        try {
          resolve(new MovieModel(rawMovie));
        } catch (err) {
          reject(new InvalidResponseError("Error al mapear detalles de la película."));
        }
      }, 100);
    });

    return Promise.race([detailFetchPromise, timeoutPromise]);
  }
};

// Guardar favoritos en localStorage delegando al Servicio Centralizado
function saveLikes() {
  if (typeof FavoritesService !== 'undefined' && FavoritesService.save) {
    FavoritesService.save();
  } else {
    localStorage.setItem('likedMovies', JSON.stringify(AppState.likedMovies));
  }
}

// Guardar mi lista en localStorage
function saveMyList() {
  if (AppState.user && AppState.user.name) {
    localStorage.setItem(`myListMovies_${AppState.user.name}`, JSON.stringify(AppState.myListMovies));
  }
  localStorage.setItem('myListMovies', JSON.stringify(AppState.myListMovies));
}

function saveMovieAssignments() {
  try {
    const name = AppState.user ? AppState.user.name : null;
    const storageKey = name ? `movieAssignments_${name}` : 'movieAssignments';
    localStorage.setItem(storageKey, JSON.stringify(AppState.movieAssignments || {}));
  } catch (e) {
    console.error('Error saving movie assignments:', e);
  }
}

// Guardar o eliminar una asignación local para una película
function setMovieAssignment(movieId, noteOrObj, imageUrl) {
  const key = String(movieId);
  const note = (typeof noteOrObj === 'object') ? (noteOrObj.note || '') : (noteOrObj || '');
  const image = (typeof noteOrObj === 'object') ? (noteOrObj.image || '') : (imageUrl || '');

  const hasNote = note && String(note).trim() !== '';
  const hasImage = image && String(image).trim() !== '';

  if (!hasNote && !hasImage) {
    if (AppState.movieAssignments && AppState.movieAssignments[key]) delete AppState.movieAssignments[key];
  } else {
    AppState.movieAssignments = AppState.movieAssignments || {};
    AppState.movieAssignments[key] = { note: hasNote ? String(note).trim() : '', image: hasImage ? String(image).trim() : '' };
  }

  saveMovieAssignments();
}

function getMovieAssignment(movieId) {
  const raw = AppState.movieAssignments && AppState.movieAssignments[String(movieId)];
  if (!raw) return { note: '', image: '' };
  if (typeof raw === 'string') return { note: raw, image: '' };
  return { note: raw.note || '', image: raw.image || '' };
}

// Inicializar variables de estado acopladas al usuario conectado
function initUserScopedState() {
  const name = AppState.user ? AppState.user.name : 'María Carrillo';
  
  // Cargar colecciones personales del usuario
  AppState.likedMovies = JSON.parse(localStorage.getItem(`likedMovies_${name}`)) || JSON.parse(localStorage.getItem('likedMovies')) || [];
  AppState.myListMovies = (JSON.parse(localStorage.getItem(`myListMovies_${name}`)) || JSON.parse(localStorage.getItem('myListMovies')) || []).map(Number);
  AppState.userRatings = JSON.parse(localStorage.getItem(`userRatings_${name}`)) || JSON.parse(localStorage.getItem('userRatings')) || {};
  AppState.userReviews = JSON.parse(localStorage.getItem(`userReviews_${name}`)) || JSON.parse(localStorage.getItem('userReviews')) || {};
  AppState.playlistOrder = JSON.parse(localStorage.getItem(`playlistOrder_${name}`)) || JSON.parse(localStorage.getItem('playlistOrder')) || [];
  AppState.playlistSchedule = JSON.parse(localStorage.getItem(`playlistSchedule_${name}`)) || JSON.parse(localStorage.getItem('playlistSchedule')) || {};
  
  if (typeof window.loadWomLists === 'function') {
    window.loadWomLists();
  }
}
window.initUserScopedState = initUserScopedState;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  // Cargar configuración dinámica de textos desde app.config.json si está disponible
  fetch('app.config.json')
    .then(resp => resp.json())
    .then(cfg => {
      window.AppConfig = cfg || {};
      AppState.language = (cfg && cfg.defaultLanguage) ? cfg.defaultLanguage : AppState.language;
    }).catch(() => { window.AppConfig = null; });

  // Helper internacionalización simple
  window.t = function(key) {
    try {
      const lang = AppState.language || 'es';
      if (window.AppConfig && window.AppConfig.texts && window.AppConfig.texts[lang] && window.AppConfig.texts[lang][key]) {
        return window.AppConfig.texts[lang][key];
      }
      return key;
    } catch (e) { return key; }
  };
  // Mapear de forma segura la base de datos cruda de la API al modelo consciente al iniciar
  try {
    MOVIES_DATA = RAW_EXTERNAL_MOVIES_API_DATA.map(raw => new MovieModel(raw));
  } catch (e) {
    console.error("Error al mapear la API de películas al modelo consciente:", e);
  }

  setupNavigation();
  setupGenreFilters();
  setupSearch();
  setupVoiceSearch();
  setupMovieClicks();
  setupInfiniteScroll();
  setupPlaylistListeners();
  
  // Estado de autenticación (consultar localStorage y sessionStorage según "recordarme")
  try {
    const storedLocal = localStorage.getItem('wm_user');
    const storedSession = sessionStorage.getItem('wm_user');
    AppState.user = storedLocal ? JSON.parse(storedLocal) : (storedSession ? JSON.parse(storedSession) : null);
  } catch (e) {
    console.error('Error leyendo estado de autenticación:', e);
    AppState.user = null;
  }
  // Asegurar que al cargar la app haya una vista activa (evita que todo quede oculto)
  // Si handleRouting no activó una vista, forzamos 'home'
  try {
    if (!AppState.currentTab) {
      // Si hay un hash de detalle, handleRouting ya lo habrá gestionado; en caso contrario, navegar a home
      if (!window.location.hash || (!window.location.hash.startsWith('#movie-') && !window.location.hash.startsWith('#person/'))) {
        switchTab('home');
      }
    }
  } catch (e) {
    console.warn('No pude forzar la vista inicial:', e);
  }
  initUserScopedState();
  
  // Renderizar la pantalla de inicio inicialmente
  renderHome();
  renderFavoritesCount();
  renderMyListCount();

  // Manejar enrutamiento inicial y cambios de hash
  handleRouting();
  window.addEventListener('hashchange', handleRouting);
  
  if (AppState.user) {
    const profileNameEl = document.querySelector('.profile-username');
    if (profileNameEl) {
      profileNameEl.textContent = AppState.user.name;
    }
  }
  
  refreshHeaderAuthState();
  
  if (typeof setupWelcomeAuthListeners === 'function') {
    setupWelcomeAuthListeners();
  }
});

function handleFakeLogin() {
  const email = document.getElementById('login-email') ? document.getElementById('login-email').value.trim() : '';
  const pass = document.getElementById('login-password') ? document.getElementById('login-password').value : '';
  const remember = document.getElementById('login-remember') ? document.getElementById('login-remember').checked : false;

  if (!email) { showAuthError(AppState.language === 'es' ? 'Introduce un correo válido.' : 'Enter a valid email.'); return; }
  if (!pass || pass.length < 6) { showAuthError(AppState.language === 'es' ? 'La contraseña debe tener al menos 6 caracteres.' : 'Password must be at least 6 characters.'); return; }

  try {
    // Simular verificación; fallar si email contiene 'invalid'
    if (email.toLowerCase().includes('invalid')) throw new Error('invalid_credentials');

    AppState.user = { email: email, name: email.split('@')[0] };
    saveAuthenticatedUser(AppState.user, remember);
    refreshHeaderAuthState();
    initUserScopedState();
    refreshProfileView();
  } catch (e) {
    console.error('Error during login processing', e);
    showAuthError(AppState.language === 'es' ? 'Error al iniciar sesión.' : 'Login error.');
    return;
  }

    // Ejecutar acción pendiente si existe
    if (AppState.postLoginAction && typeof AppState.postLoginAction === 'function') {
      try { AppState.postLoginAction(); } catch (e) { console.error('Error ejecutando acción pendiente post-login', e); }
      AppState.postLoginAction = null;
    }

    // Mostrar confirmación y navegar home
    const toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.textContent = AppState.language === 'es' ? 'Autenticado con éxito.' : 'Authenticated successfully.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
    // Ejecutar acción pendiente o redirigir al destino protegido si corresponde
    if (AppState.postLoginAction && typeof AppState.postLoginAction === 'function') {
      try { AppState.postLoginAction(); } catch (e) { console.error('Error ejecutando acción pendiente post-login', e); }
      AppState.postLoginAction = null;
    }
    if (AppState.intendedAction && typeof AppState.intendedAction === 'function') {
      const act = AppState.intendedAction; AppState.intendedAction = null; act();
        } else if (AppState.intendedTarget) {
      const target = AppState.intendedTarget; AppState.intendedTarget = null; switchTab(target);
    } else {
      switchTab('home');
    }
  
}


function handleLogout() {
  AppState.user = null;
  localStorage.removeItem('wm_user');
  sessionStorage.removeItem('wm_user');
  initUserScopedState();
  
  // Limpiar contadores de la interfaz
  renderFavoritesCount();
  renderMyListCount();
  
  refreshHeaderAuthState();
  switchTab('home');
}

function refreshHeaderAuthState() {
  const registerBtn = document.getElementById('header-register-btn');
  const logoutBtn = document.getElementById('header-logout-btn');
  const profileLogo = document.querySelector('.logo-profile-btn');
  if (AppState.user) {
    if (registerBtn) registerBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    if (profileLogo) profileLogo.title = AppState.user.email;
  } else {
    if (registerBtn) registerBtn.style.display = 'inline-flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (profileLogo) profileLogo.title = 'Perfil';
  }
  refreshTopMenuVisibility();
}

// Mostrar/ocultar menú superior según contexto (por ejemplo, oculto en welcome-screen)
function refreshTopMenuVisibility() {
  const header = document.querySelector('.app-header');
  const welcome = document.getElementById('welcome-screen');
  if (!header) return;
  // Si el welcome-screen está visible (overlay), ocultar header para enfoque de onboarding
  if (welcome && welcome.offsetParent !== null) {
    header.style.display = 'none';
    return;
  }
  // Mostrar header en el resto de contextos
  header.style.display = '';
}
window.refreshTopMenuVisibility = refreshTopMenuVisibility;

// Persistencia de usuario autenticado: admite "recordarme" (localStorage) o sesión (sessionStorage)
function saveAuthenticatedUser(userObj, remember = false) {
  try {
    if (remember) {
      localStorage.setItem('wm_user', JSON.stringify(userObj));
      sessionStorage.removeItem('wm_user');
    } else {
      sessionStorage.setItem('wm_user', JSON.stringify(userObj));
      localStorage.removeItem('wm_user');
    }
  } catch (e) {
    console.error('Error saving authenticated user:', e);
  }
}

function showAuthError(message) {
  // Reutiliza el modal de servicio si existe
  try {
    const existing = document.getElementById('auth-error-modal');
    if (existing) existing.remove();
    const isEs = AppState.language === 'es';
    const modal = document.createElement('div');
    modal.id = 'auth-error-modal';
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
      <div class="modal-content" style="max-width:420px; width:90%; background:#0f172a; padding:20px; border-radius:12px; text-align:center; border:2px solid #f59e0b;">
        <div style="font-size:36px; margin-bottom:8px;">⚠️</div>
        <h3 style="margin:0 0 8px 0; font-size:18px; font-weight:800; color:#f59e0b;">${isEs ? 'Error de Autenticación' : 'Authentication Error'}</h3>
        <p style="color:var(--text-secondary); font-size:13px; margin-bottom:16px;">${message}</p>
        <div style="display:flex; gap:8px; justify-content:center;">
          <button class="detail-btn detail-btn-primary" id="auth-error-ok">${isEs ? 'Entendido' : 'OK'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const ok = modal.querySelector('#auth-error-ok');
    if (ok) ok.addEventListener('click', () => modal.remove());
  } catch (e) {
    alert(message);
  }
}

// Generar URL única por vista con token corto para compartir
function viewUrl(viewName, params) {
  const base = window.location.href.split('#')[0];
  const search = params ? `?${new URLSearchParams(params).toString()}` : '';
  const hash = `#${viewName}${search}`;
  try {
    const payload = `${viewName}|${JSON.stringify(params||{})}|${Date.now()}`;
    const uid = btoa(unescape(encodeURIComponent(payload))).replace(/=+$/, '').slice(0, 12);
    return `${base}${hash}${search ? '&' : (hash.includes('?') ? '&' : '?')}v=${uid}`;
  } catch (e) {
    return base + hash;
  }
}
window.viewUrl = viewUrl;

// Inicializar Firebase Auth si la configuración está presente en app.config.json
function initFirebaseAuth() {
  if (!window.AppConfig || !window.AppConfig.firebase || !window.AppConfig.firebase.enabled) return;
  try {
    const cfg = window.AppConfig.firebase.config;
    // Cargar SDK dinámicamente si no está presente
    if (typeof firebase === 'undefined') {
      const s1 = document.createElement('script');
      s1.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';
      document.head.appendChild(s1);
      const s2 = document.createElement('script');
      s2.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js';
      document.head.appendChild(s2);
      s2.onload = () => { tryInit(); };
    } else {
      tryInit();
    }

    function tryInit() {
      try {
        if (!firebase.apps.length) firebase.initializeApp(cfg);
        const auth = firebase.auth();

        // Re-map AuthService methods to Firebase where appropriate
        AuthService.register = async function({ name, email, password, remember = false }) {
          const userCred = await auth.createUserWithEmailAndPassword(email, password);
          await userCred.user.updateProfile({ displayName: name });
          const userObj = { email: userCred.user.email, name: userCred.user.displayName };
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          refreshHeaderAuthState();
          return userObj;
        };

        AuthService.login = async function({ email, password, remember = false }) {
          const userCred = await auth.signInWithEmailAndPassword(email, password);
          const userObj = { email: userCred.user.email, name: userCred.user.displayName || userCred.user.email.split('@')[0] };
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          refreshHeaderAuthState();
          return userObj;
        };

        AuthService.loginWithProvider = async function(providerName, remember = true) {
          let provider = null;
          if (providerName.toLowerCase() === 'google') provider = new firebase.auth.GoogleAuthProvider();
          else if (providerName.toLowerCase() === 'github') provider = new firebase.auth.GithubAuthProvider();
          else return Promise.reject(new Error('unsupported_provider'));
          const result = await auth.signInWithPopup(provider);
          const u = result.user;
          const userObj = { email: u.email, name: u.displayName || u.email.split('@')[0], provider: providerName };
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          refreshHeaderAuthState();
          return userObj;
        };

        AuthService.logout = async function() {
          await auth.signOut();
          AppState.user = null;
          localStorage.removeItem('wm_user');
          sessionStorage.removeItem('wm_user');
          refreshHeaderAuthState();
          switchTab('home');
        };
      } catch (e) { console.error('Firebase init error', e); }
    }
  } catch (e) { console.error('initFirebaseAuth error', e); }
}
window.initFirebaseAuth = initFirebaseAuth;

// ----- IndexedDB local DB helper para datos locales y autenticación simulada -----
const LocalDB = (function(){
  const DB_NAME = (window.AppConfig && window.AppConfig.localDb && window.AppConfig.localDb.name) || 'wm_local_db';
  const VERSION = 1;
  let db = null;

  function open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, VERSION);
      req.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains('users')) {
          const store = db.createObjectStore('users', { keyPath: 'email' });
          store.createIndex('by_email', 'email', { unique: true });
        }
      };
      req.onsuccess = (e) => { db = e.target.result; resolve(db); };
      req.onerror = (e) => reject(e.target.error);
    });
  }

  async function seedDefault() {
    try {
      await open();
      const tx = db.transaction('users', 'readwrite');
      const users = tx.objectStore('users');
      // Añadir usuario de prueba si no existe
      const getReq = users.get('maria.carrillo@gmail.com');
      getReq.onsuccess = () => {
        if (!getReq.result) {
          users.add({ email: 'maria.carrillo@gmail.com', name: 'María Carrillo', password: 'password123' });
        }
      };
      return new Promise((res, rej) => { tx.oncomplete = () => res(true); tx.onerror = (e) => rej(e.target.error); });
    } catch (e) { console.error('LocalDB seed error', e); }
  }

  function getUser(email) {
    return new Promise(async (resolve, reject) => {
      try {
        await open();
        const tx = db.transaction('users', 'readonly');
        const users = tx.objectStore('users');
        const req = users.get(String(email).toLowerCase());
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      } catch (e) { reject(e); }
    });
  }

  function addUser(obj) {
    return new Promise(async (resolve, reject) => {
      try {
        await open();
        const tx = db.transaction('users', 'readwrite');
        const users = tx.objectStore('users');
        const req = users.add(obj);
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
      } catch (e) { reject(e); }
    });
  }

  return { open, seedDefault, getUser, addUser };
})();
window.LocalDB = LocalDB;

// Re-mapeo de AuthService a LocalDB si está habilitado en configuración
function initLocalDbAuth() {
  if (!window.AppConfig || !window.AppConfig.localDb || !window.AppConfig.localDb.enabled) return;
  LocalDB.seedDefault().then(() => {
    // Overwrite AuthService methods to use LocalDB
    AuthService.register = async function({ name, email, password, remember = false }) {
      const existing = await LocalDB.getUser(email);
      if (existing) throw new Error('email_exists');
      await LocalDB.addUser({ email: String(email).toLowerCase(), name: name || email.split('@')[0], password });
      const userObj = { email: String(email).toLowerCase(), name: name || email.split('@')[0] };
      saveAuthenticatedUser(userObj, remember);
      AppState.user = userObj;
      refreshHeaderAuthState();
      return userObj;
    };

    AuthService.login = async function({ email, password, remember = false }) {
      const u = await LocalDB.getUser(email);
      if (!u) throw new Error('invalid_credentials');
      if (u.password !== password) throw new Error('invalid_credentials');
      const userObj = { email: u.email, name: u.name };
      saveAuthenticatedUser(userObj, remember);
      AppState.user = userObj;
      refreshHeaderAuthState();
      return userObj;
    };

    AuthService.loginWithProvider = async function(providerName, remember = true) {
      // Simular provider: devolver el usuario seed
      const u = await LocalDB.getUser('maria.carrillo@gmail.com');
      if (!u) throw new Error('provider_error');
      const userObj = { email: u.email, name: u.name, provider: providerName };
      saveAuthenticatedUser(userObj, remember);
      AppState.user = userObj;
      refreshHeaderAuthState();
      return userObj;
    };

    AuthService.logout = function() {
      AppState.user = null;
      localStorage.removeItem('wm_user');
      sessionStorage.removeItem('wm_user');
      refreshHeaderAuthState();
      switchTab('home');
    };
  }).catch(e => console.error('initLocalDbAuth error', e));
}
window.initLocalDbAuth = initLocalDbAuth;

function openRegister() {
  // Simple: navegar a la vista profile donde está el formulario
  switchTab('profile');
  const loginEmail = document.getElementById('login-email');
  if (loginEmail) loginEmail.focus();
}

// Configurar los manejadores de eventos del menú de navegación (Responsivo y Consistente)


// Cambiar de vista con animaciones suaves
// Rutas protegidas que requieren autenticación
const PROTECTED_TABS = ['likes', 'mylist', 'profile'];



// Configurar los filtros de género (con pill buttons)


// Configurar la funcionalidad de búsqueda en tiempo real


// Renderizar filtros activos (mostrar cuáles están aplicados)


// Remover un filtro individual


// Limpiar todos los filtros


// Configurar la búsqueda por voz con Web Speech API


// Configurar clicks en tarjetas de película para ver detalles


// Servicio Centralizado para gestionar favoritos (Likes)
const FavoritesService = {
  add(movieId) {
    try {
      let movie = MOVIES_DATA.find(m => m.id === movieId);
      if (!movie && typeof SERIES_DATA !== 'undefined') movie = SERIES_DATA.find(m => m.id === movieId);
      if (!movie && typeof MUSIC_DATA !== 'undefined') movie = MUSIC_DATA.find(m => (m.movie_identifier || m.id) === movieId);
      if (!movie) {
        throw new Error(AppState.language === 'es' ? "ID de película inválido." : "Invalid movie ID.");
      }

      if (!AppState.likedMovies.includes(movieId)) {
        AppState.likedMovies.push(movieId);
        this.save();
        if (typeof initPlaylist === 'function') {
          initPlaylist();
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error al añadir a favoritos:", error);
      throw error;
    }
  },
  
  remove(movieId) {
    try {
      const index = AppState.likedMovies.indexOf(movieId);
      if (index !== -1) {
        AppState.likedMovies.splice(index, 1);
        this.save();
        
        // REGLA: Al eliminar de favoritos, se remueve automáticamente la puntuación personal
        delete AppState.userRatings[movieId];
        this.saveRatings();
        
        if (typeof initPlaylist === 'function') {
          initPlaylist();
        }
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
      throw error;
    }
  },
  
  toggle(movieId) {
    const isLiked = AppState.likedMovies.includes(movieId);
    if (isLiked) {
      this.remove(movieId);
    } else {
      this.add(movieId);
    }
  },
  
  setRating(movieId, score) {
    try {
      let movie = MOVIES_DATA.find(m => m.id === movieId);
      if (!movie && typeof SERIES_DATA !== 'undefined') movie = SERIES_DATA.find(m => m.id === movieId);
      if (!movie && typeof MUSIC_DATA !== 'undefined') movie = MUSIC_DATA.find(m => (m.movie_identifier || m.id) === movieId);
      if (!movie) {
        throw new Error(AppState.language === 'es' ? "ID de película inválido." : "Invalid movie ID.");
      }
      
      if (score === '' || score === null || score === undefined) {
        delete AppState.userRatings[movieId];
      } else {
        const val = parseInt(score);
        if (isNaN(val) || val < 1 || val > 10) {
          throw new Error(AppState.language === 'es' 
            ? "La puntuación debe ser un número entero entre 1 y 10." 
            : "The rating must be an integer between 1 and 10.");
        }
        AppState.userRatings[movieId] = val;
        
        // REGLA: Si se establece una puntuación, la película se añade automáticamente a favoritos si no lo estaba
        if (!AppState.likedMovies.includes(movieId)) {
          this.add(movieId);
        }
      }
      this.saveRatings();
      return true;
    } catch (error) {
      console.error("Error al establecer la puntuación:", error);
      throw error;
    }
  },
  
  save() {
    localStorage.setItem('likedMovies', JSON.stringify(AppState.likedMovies));
  },
  
  load() {
    return JSON.parse(localStorage.getItem('likedMovies')) || [];
  },
  
  saveRatings() {
    localStorage.setItem('userRatings', JSON.stringify(AppState.userRatings));
  },
  
  loadRatings() {
    return JSON.parse(localStorage.getItem('userRatings')) || {};
  }
  ,
  // Recuperar favoritos como objetos MovieModel ordenados por la puntuación del usuario (desc), luego por la puntuación global
  getFavorites() {
    const favIds = Array.isArray(AppState.likedMovies) ? AppState.likedMovies.slice() : [];
    const movies = MOVIES_DATA.filter(m => favIds.includes(m.id));
    movies.sort((a, b) => {
      const ra = (AppState.userRatings && AppState.userRatings[String(a.id)]) != null ? Number(AppState.userRatings[String(a.id)]) : Number(a.rating);
      const rb = (AppState.userRatings && AppState.userRatings[String(b.id)]) != null ? Number(AppState.userRatings[String(b.id)]) : Number(b.rating);
      return rb - ra;
    });
    return movies;
  }
};
window.FavoritesService = FavoritesService;

// Exponer helper global para recuperar favoritos (útil para tests/servicios)
window.getUserFavorites = () => FavoritesService.getFavorites();

// Servicio de Autenticación (abstracción BaaS simulada)
const AuthService = {
  // Simula registro con BaaS
  register({ name, email, password, remember = false }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (!email || !password) return reject(new Error('missing_credentials'));
          if (password.length < 6) return reject(new Error('weak_password'));
          if (String(email).toLowerCase().includes('exists')) return reject(new Error('email_exists'));

          const userObj = { email: String(email).toLowerCase(), name: String(name || email.split('@')[0]) };
          // Persistir según remember flag
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          resolve(userObj);
        } catch (e) {
          reject(e);
        }
      }, 700);
    });
  },

  // Simula login con BaaS
  login({ email, password, remember = false }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (!email || !password) return reject(new Error('missing_credentials'));
          if (String(email).toLowerCase().includes('invalid')) return reject(new Error('invalid_credentials'));
          const userObj = { email: String(email).toLowerCase(), name: String((email.split('@')[0]) || 'User') };
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          resolve(userObj);
        } catch (e) {
          reject(e);
        }
      }, 600);
    });
  },

  // Simula login con proveedor externo (delegar a flujo existente)
  loginWithProvider(providerName, remember = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const enteredName = providerName === 'Google' ? 'María Carrillo (Google)' : 'María Carrillo (GitHub)';
          const enteredEmail = providerName === 'Google' ? 'maria.carrillo@gmail.com' : 'maria.carrillo@github.com';
          const providerMeta = { provider: providerName, timestamp: new Date().toISOString() };
          const userObj = { email: enteredEmail, name: enteredName, provider: providerMeta };
          saveAuthenticatedUser(userObj, remember);
          AppState.user = userObj;
          resolve(userObj);
        } catch (e) {
          reject(e);
        }
      }, 900);
    });
  },

  logout() {
    // Cerrar sesión localmente
    AppState.user = null;
    try { localStorage.removeItem('wm_user'); } catch(e) {}
    try { sessionStorage.removeItem('wm_user'); } catch(e) {}
    refreshHeaderAuthState();
    switchTab('home');
  }
};
window.AuthService = AuthService;

// Dar/quitar de favoritos delegando al Servicio Centralizado


// Dar/quitar de mi lista


// Actualizar contadores de favoritos en la UI
function renderFavoritesCount() {
  const count = AppState.likedMovies.length;
  const likesBadges = document.querySelectorAll('.likes-badge');
  likesBadges.forEach(badge => {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });

  const likesSubtitle = document.querySelector('.likes-subtitle');
  if (likesSubtitle) {
    const isEs = AppState.language === 'es';
    likesSubtitle.textContent = isEs
      ? `Tienes ${count} títulos guardados en tu biblioteca.`
      : `You have ${count} titles saved in your library.`;
  }
}

// Actualizar contadores de mi lista en la UI
function renderMyListCount() {
  const count = AppState.myListMovies.length;
  const listBadges = document.querySelectorAll('.mylist-badge');
  listBadges.forEach(badge => {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });

  const subtitle = document.getElementById('mylist-subtitle-text');
  if (subtitle) {
    const isEs = AppState.language === 'es';
    subtitle.textContent = isEs
      ? `Tienes ${count} títulos guardados en tu lista de seguimiento.`
      : `You have ${count} titles saved in your watchlist.`;
  }
}

// --- RENDERIZADORES DE VISTAS ---

function renderHome() {
  // Resetear paginación cada vez que cargamos el Inicio o cambiamos de género
  AppState.currentPage = 1;
  AppState.loadingMovies = false;
  AppState.hasMoreMovies = true;

  const heroSection = document.querySelector('.hero-banner');
  const continueSection = document.getElementById('home-continue-section');
  const mainMovie = MOVIES_DATA.find(m => m.id === 1); // The Midnight Echo

  if (AppState.searchQuery.trim() !== '') {
    // Si hay una búsqueda activa, ocultamos el Banner y Continue Watching para centrar la atención en los resultados
    if (heroSection) heroSection.style.display = 'none';
    if (continueSection) continueSection.style.display = 'none';
  } else {
    // Si no hay búsqueda activa, volvemos a mostrarlos
    if (heroSection) heroSection.style.display = 'block';
    if (continueSection) continueSection.style.display = 'block';

    if (heroSection && mainMovie) {
      heroSection.style.backgroundImage = `linear-gradient(to top, var(--bg-color) 10%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.7) 100%), url('${mainMovie.backdrop}')`;
      
      // Traducir dinámicamente textos de banner principal
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) heroTitle.textContent = mainMovie.title;

      const heroDesc = document.querySelector('.hero-description');
      if (heroDesc) {
        heroDesc.textContent = typeof mainMovie.description === 'object' ? mainMovie.description[AppState.language] : mainMovie.description;
      }

      const heroMeta = document.querySelector('.hero-meta');
      if (heroMeta) {
        // Re-render de metadatos del banner destacado
        const genreText = GENRE_TRANSLATIONS[AppState.language][mainMovie.genre] || mainMovie.genre;
        heroMeta.innerHTML = `
          <span class="star-rating">★ 8.4<span class="score-base">/10</span></span>
          <span>•</span>
          <span>${genreText}</span>
          <span>•</span>
          <span>2h 15m</span>
        `;
      }
    }
  }

  renderHomeGrid();
}

async function renderHomeGrid() {
  const grid = document.getElementById('home-movies-grid');
  if (!grid) return;

  // Si es la primera página, limpiamos la grilla para refrescar el contenido
  if (AppState.currentPage === 1) {
    grid.innerHTML = '';
    renderHomeInitialLoadingState(grid);
  }

  // Eliminar el loader viejo de su posición para añadir las películas y colocar el loader nuevo abajo
  const oldLoader = document.getElementById('pagination-loader');
  if (oldLoader) {
    oldLoader.remove();
  }

  AppState.loadingMovies = true;

  try {
    // 1. Consultar listado inicial / filtrado / búsqueda a través de la API simulada centralizada
    const { movies, total } = await MovieAPIService.getMovies({
      genre: AppState.activeGenre,
      search: AppState.searchQuery,
      page: AppState.currentPage,
      limit: AppState.moviesPerPage,
      reliableMode: true
    });

    // Excluimos la película principal destacada de ID 1 de la lista secundaria solo si NO hay una búsqueda activa
    const displayedMovies = AppState.searchQuery.trim() === '' ? movies.filter(m => m.id !== 1) : movies;
    const totalCount = AppState.searchQuery.trim() === ''
      ? total - (MOVIES_DATA.some(m => m.id === 1 && m.genre.includes(AppState.activeGenre)) ? 1 : 0)
      : total;

    // Si la búsqueda no devolvió coincidencias
    if (totalCount === 0) {
      AppState.hasMoreMovies = false;
      const noResMsg = AppState.language === 'es'
        ? `No se encontraron coincidencias para "${AppState.searchQuery}"`
        : `No matches found for "${AppState.searchQuery}"`;
      const clearBtnText = AppState.language === 'es' ? 'Limpiar búsqueda' : 'Clear search';
      
      grid.innerHTML = `
        <div class="search-empty-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 16px; text-align: center; width: 100%;">
          <span style="font-size: 48px; margin-bottom: 16px;">🔍</span>
          <h4 style="color: var(--text-primary); margin-bottom: 8px; font-size: 16px; font-weight: 700;">${noResMsg}</h4>
          <button class="pagination-retry-btn" onclick="clearSearchQuery()" style="margin-top: 12px;">
            ${clearBtnText}
          </button>
        </div>
      `;
      return;
    }

    if (AppState.currentPage === 1) {
      grid.innerHTML = '';
    }

    // Insertar los resultados paginados directamente, la API ya devuelve el corte correcto
    displayedMovies.forEach(movie => {
      if (!grid.querySelector(`[data-id="${movie.id}"]`)) {
        grid.appendChild(createMovieCardElement(movie));
      }
    });

    // Gestionar el loader y el mensaje final colocándolo al final del contenedor padre
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';

    const hasMore = AppState.currentPage * AppState.moviesPerPage < totalCount;
    if (hasMore) {
      AppState.hasMoreMovies = true;
      loader.innerHTML = `<div class="pagination-spinner"></div>`;
    } else {
      AppState.hasMoreMovies = false;
      const msg = AppState.language === 'es' ? 'Has llegado al final: no hay más películas por cargar.' : 'You reached the end: there are no more movies to load.';
      loader.innerHTML = `<div class="no-more-results">${msg}</div>`;
    }
    
    grid.parentNode.appendChild(loader);
  } catch (error) {
    console.error("Error al cargar películas:", error);
    if (AppState.currentPage > 1) {
      AppState.currentPage = Math.max(1, AppState.currentPage - 1);
    }
    AppState.hasMoreMovies = true;
    
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';
    const errorText = AppState.language === 'es' ? 'No pudimos cargar las películas en este momento.' : 'We could not load movies at this time.';
    const recoveryText = AppState.language === 'es' ? 'Recuperar resultados' : 'Recover results';
    const retryText = AppState.language === 'es' ? 'Reintentar carga' : 'Retry load';
    loader.innerHTML = `
      <div class="pagination-error-wrapper">
        <span class="pagination-error-text">⚠️ ${errorText}</span>
        <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
          <button class="pagination-retry-btn" onclick="recoverCurrentViewData()">${recoveryText}</button>
          <button class="pagination-retry-btn" onclick="retryCurrentLoad()">${retryText}</button>
        </div>
      </div>
    `;
    grid.parentNode.appendChild(loader);
  } finally {
    AppState.loadingMovies = false;
  }
}

function renderHomeInitialLoadingState(grid) {
  if (!grid) return;
  grid.innerHTML = `
    <div class="explore-initial-loading" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 16px; text-align: center; width: 100%; gap: 12px;">
      <div class="pagination-spinner"></div>
      <p style="color: var(--text-secondary); font-size: 14px; font-weight: 600;">${AppState.language === 'es' ? 'Cargando películas...' : 'Loading movies...'}</p>
    </div>
  `;
}

// 2. Renderizar la pantalla de exploración (Explore)
async function renderExplore() {
  await renderSearchSuggestions();
  renderActiveFilters();
}

function hasActiveExploreFilters() {
  return AppState.exploreFilters.genre !== 'All' ||
         AppState.exploreFilters.rating !== 'All' ||
         AppState.exploreFilters.trend !== 'All';
}

function renderExploreInitialLoadingState(resultsContainer) {
  if (!resultsContainer) return;
  const loadingText = AppState.language === 'es' ? 'Cargando resultados...' : 'Loading results...';
  resultsContainer.innerHTML = `
    <div class="explore-initial-loading" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 16px; text-align: center; width: 100%; gap: 12px;">
      <div class="pagination-spinner"></div>
      <p style="color: var(--text-secondary); font-size: 14px; font-weight: 600;">${loadingText}</p>
    </div>
  `;
}

async function renderSearchSuggestions() {
  const resultsContainer = document.getElementById('explore-search-results');
  const suggestedTitle = document.getElementById('suggested-title');
  if (!resultsContainer) return;

  // Resetear paginación al buscar/abrir
  AppState.currentPage = 1;
  AppState.loadingMovies = false;
  AppState.hasMoreMovies = true;

  resultsContainer.innerHTML = '';

  const oldLoader = document.getElementById('pagination-loader');
  if (oldLoader) {
    oldLoader.remove();
  }

  renderExploreInitialLoadingState(resultsContainer);

  // Invalidar respuestas en vuelo para evitar inconsistencias de UI
  AppState.exploreRequestToken += 1;
  AppState.loadingMovies = true;
  const currentToken = AppState.exploreRequestToken;

  try {
    if (AppState.searchQuery.trim() === '') {
      suggestedTitle.textContent = AppState.language === 'es' ? "Sugerencias para ti" : "Suggestions for you";
    } else {
      suggestedTitle.textContent = AppState.language === 'es' ? "Resultados de búsqueda" : "Search results";
    }

    // Cargar el primer lote paginado (sugerencias o resultados de búsqueda)
    await renderSearchSuggestionsGrid(currentToken, false);
  } catch (error) {
    console.error("Error en sugerencias de búsqueda:", error);
  } finally {
    AppState.loadingMovies = false;
  }
}

async function renderSearchSuggestionsGrid(requestToken = AppState.exploreRequestToken, isIncremental = false) {
  const resultsContainer = document.getElementById('explore-search-results');
  if (!resultsContainer) return;

  // Si es la primera página, limpiamos el contenedor
  if (AppState.currentPage === 1) {
    resultsContainer.innerHTML = '';
  }

  const oldLoader = document.getElementById('pagination-loader');
  if (oldLoader) {
    oldLoader.remove();
  }

  try {
    const { movies, total } = await MovieAPIService.getMovies({
      genre: AppState.exploreFilters.genre,
      rating: AppState.exploreFilters.rating,
      trend: AppState.exploreFilters.trend,
      search: AppState.searchQuery,
      page: AppState.currentPage,
      limit: AppState.moviesPerPage,
      reliableMode: true
    });

    // Ignorar respuestas antiguas si cambió la combinación de filtros/búsqueda
    if (requestToken !== AppState.exploreRequestToken) {
      return;
    }

    if (total === 0) {
      AppState.hasMoreMovies = false;
      const hasQuery = AppState.searchQuery.trim() !== '';
      const hasFilters = hasActiveExploreFilters();
      const noResMsg = AppState.language === 'es'
        ? 'No encontramos resultados para la combinación aplicada.'
        : 'No results found for the selected combination.';
      const actionText = hasQuery
        ? (AppState.language === 'es' ? 'Limpiar búsqueda' : 'Clear search')
        : (AppState.language === 'es' ? 'Limpiar filtros' : 'Clear filters');
      const actionFn = hasQuery ? 'clearSearchQuery()' : 'clearAllFilters()';
      const hintText = hasFilters || hasQuery
        ? (AppState.language === 'es' ? 'Prueba con menos filtros o una búsqueda diferente.' : 'Try fewer filters or a different search.')
        : (AppState.language === 'es' ? 'Vuelve a intentarlo en unos segundos.' : 'Please try again in a few seconds.');

      resultsContainer.innerHTML = `
        <div class="search-empty-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 16px; text-align: center; width: 100%;">
          <span style="font-size: 48px; margin-bottom: 16px;">🔍</span>
          <h4 style="color: var(--text-primary); margin-bottom: 8px; font-size: 16px; font-weight: 700;">${noResMsg}</h4>
          <p style="color: var(--text-secondary); margin-bottom: 10px; font-size: 13px;">${hintText}</p>
          <button class="pagination-retry-btn" onclick="${actionFn}" style="margin-top: 8px;">
            ${actionText}
          </button>
        </div>
      `;
      return;
    }

    // Insertar los resultados paginados directamente, la API ya devuelve el corte correcto.
    movies.forEach(movie => {
      if (!resultsContainer.querySelector(`[data-id="${movie.id}"]`)) {
        resultsContainer.appendChild(createMovieCardElement(movie));
      }
    });

    // Crear loader / mensaje de fin
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';

    const hasMore = AppState.currentPage * AppState.moviesPerPage < total;
    if (hasMore) {
      AppState.hasMoreMovies = true;
      loader.innerHTML = `<div class="pagination-spinner"></div>`;
    } else {
      AppState.hasMoreMovies = false;
      const msg = AppState.language === 'es' ? 'Has llegado al final: no hay más películas por cargar.' : 'You reached the end: there are no more movies to load.';
      loader.innerHTML = `<div class="no-more-results">${msg}</div>`;
    }
    
    resultsContainer.parentNode.appendChild(loader);
  } catch (error) {
    console.error("Error en paginación de exploración:", error);
    AppState.hasMoreMovies = false;

    const errorText = AppState.language === 'es' ? 'No pudimos recuperar los resultados de exploración.' : 'We could not recover explore results.';
    const recoveryText = AppState.language === 'es' ? 'Recuperar resultados' : 'Recover results';
    const retryText = AppState.language === 'es' ? 'Reintentar carga' : 'Retry load';

    if (isIncremental && AppState.currentPage > 1) {
      AppState.hasMoreMovies = true;
      AppState.currentPage = Math.max(1, AppState.currentPage - 1);
      let loader = document.getElementById('pagination-loader');
      if (!loader) {
        loader = document.createElement('div');
        loader.id = 'pagination-loader';
        loader.className = 'pagination-loader-container';
        resultsContainer.parentNode.appendChild(loader);
      }
      loader.innerHTML = `
        <div class="pagination-error-wrapper">
          <span class="pagination-error-text">⚠️ ${errorText}</span>
          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
            <button class="pagination-retry-btn" onclick="recoverCurrentViewData()">${recoveryText}</button>
            <button class="pagination-retry-btn" onclick="retryCurrentLoad()">${retryText}</button>
          </div>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div class="search-empty-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 16px; text-align: center; width: 100%;">
        <span style="font-size: 40px; margin-bottom: 12px;">⚠️</span>
        <h4 style="color: var(--text-primary); margin-bottom: 8px; font-size: 16px; font-weight: 700;">${errorText}</h4>
        <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:8px;">
          <button class="pagination-retry-btn" onclick="recoverCurrentViewData()">${recoveryText}</button>
          <button class="pagination-retry-btn" onclick="retryCurrentLoad()">${retryText}</button>
        </div>
      </div>
    `;
  } finally {
    AppState.loadingMovies = false;
  }
}

// Limpiar la búsqueda y volver al listado general


function recoverCurrentViewData() {
  AppState.currentPage = 1;
  AppState.loadingMovies = false;
  AppState.hasMoreMovies = true;

  if (AppState.currentTab === 'explore') {
    renderSearchSuggestions();
  } else {
    renderHomeGrid();
  }
}

function retryCurrentLoad() {
  AppState.loadingMovies = false;
  AppState.hasMoreMovies = true;

  if (AppState.currentTab === 'explore') {
    if (AppState.currentPage <= 1) {
      renderSearchSuggestions();
    } else {
      loadMoreMovies();
    }
  } else {
    if (AppState.currentPage <= 1) {
      renderHomeGrid();
    } else {
      loadMoreMovies();
    }
  }
}

// Hacer la función accesible de forma global para los onclick inline
window.clearSearchQuery = clearSearchQuery;
window.clearAllFilters = clearAllFilters;
window.renderSearchSuggestions = renderSearchSuggestions;
window.recoverCurrentViewData = recoverCurrentViewData;
window.retryCurrentLoad = retryCurrentLoad;

// 3. Renderizar la pantalla de favoritos (Likes)
function renderLikes() {
  const likesContainer = document.getElementById('view-likes');
  if (!likesContainer) return;
  
  // 1. Mostrar estado de carga temporal en la biblioteca de favoritos
  let loader = document.getElementById('likes-view-loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'likes-view-loader';
    loader.className = 'likes-view-loader-overlay';
    loader.style.cssText = 'position: absolute; top:0; left:0; width:100%; height:100%; background: var(--bg-color); z-index: 100; display:flex; align-items:center; justify-content:center; flex-direction:column; min-height: 300px;';
    const loadingMsg = AppState.language === 'es' ? 'Cargando tus películas favoritas...' : 'Loading your favorite movies...';
    loader.innerHTML = `
      <div class="pagination-spinner" style="width: 40px; height: 40px; border-width: 4px; border-top-color: var(--accent-cyan); animation: pag-spin 0.8s linear infinite;"></div>
      <p style="margin-top: 16px; font-weight: 600; color: var(--text-secondary); font-size: 14px; letter-spacing: 0.5px;">${loadingMsg}</p>
    `;
    likesContainer.appendChild(loader);
  } else {
    loader.style.display = 'flex';
  }

  // Ocultar cuadrícula y panel de playlist mientras carga
  const grid = document.getElementById('likes-movies-grid');
  if (grid) grid.style.opacity = '0';
  const playlistBar = document.querySelector('.playlist-bar-wrapper');
  if (playlistBar) playlistBar.style.opacity = '0';
  const playlistContainer = document.getElementById('likes-playlist-container');
  if (playlistContainer) playlistContainer.style.opacity = '0';

  // Simular fallo aleatorio de red/servicio del 15% para el requerimiento
  const shouldFail = Math.random() < 0.15;

  // Recuperar favoritas de forma simulada asíncrona
  setTimeout(() => {
    // Ocultar loader
    if (loader) loader.style.display = 'none';

    if (shouldFail) {
      const errorMsg = AppState.language === 'es'
        ? 'No se pudo conectar con el servicio de colección de favoritas para recuperar los datos.'
        : 'Could not connect to the favorites collection service to retrieve the data.';
      if (typeof window.showServiceErrorModal === 'function') {
        window.showServiceErrorModal(errorMsg, () => {
          renderLikes();
        });
      } else {
        alert('⚠️ ' + errorMsg);
      }
      return;
    }

    if (grid) grid.style.opacity = '1';
    if (playlistBar) playlistBar.style.opacity = '1';
    if (playlistContainer) playlistContainer.style.opacity = '1';

    try {
      renderFavoritesCount();
      renderLikesGrid();
      initPlaylist();
      
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
    } catch (error) {
      console.error("Error al recuperar las películas favoritas:", error);
      const isEs = AppState.language === 'es';
      alert(isEs ? '⚠️ Error al recuperar tu colección de favoritas.' : '⚠️ Error recovering your favorite collection.');
    }
  }, 400);
}

window.isItemLiked = function(id) {
  if (!AppState.likedMovies) return false;
  return AppState.likedMovies.findIndex(l => Number(l) === Number(id)) !== -1;
};

function renderLikesGrid() {
  const container = document.getElementById('likes-movies-grid');
  const emptyState = document.getElementById('likes-empty-state');
  if (!container) return;

  container.innerHTML = '';

  if (!AppState.likedMovies || AppState.likedMovies.length === 0) {
    container.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  // Agrupar por categorías
  const categories = {};
  
  AppState.likedMovies.forEach(id => {
    let item = typeof window.findGlobalItemById === 'function' ? window.findGlobalItemById(id) : null;
    if (!item && typeof MOVIES_DATA !== 'undefined') item = MOVIES_DATA.find(m => m.id === id);
    if (!item && typeof SERIES_DATA !== 'undefined') item = SERIES_DATA.find(m => m.id === id);
    
    if (item) {
      if (item.genre && AppState.activeGenre !== 'All' && item.genre !== AppState.activeGenre && !item.category_type) return;
      
      const cat = item.category_type || (item.genre ? 'Películas' : 'Otros');
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(item);
    }
  });

  const cats = Object.keys(categories);
  if (cats.length === 0) {
    container.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  container.style.display = 'block'; // Block to stack categories
  if (emptyState) emptyState.style.display = 'none';
  
  cats.forEach(cat => {
    const section = document.createElement('div');
    section.style.marginBottom = '30px';
    
    const title = document.createElement('h3');
    title.textContent = cat;
    title.style.color = 'white';
    title.style.borderBottom = '1px solid #444';
    title.style.paddingBottom = '10px';
    title.style.marginBottom = '15px';
    title.style.textTransform = 'capitalize';
    section.appendChild(title);
    
    const grid = document.createElement('div');
    grid.className = 'movies-grid';
    
    categories[cat].forEach(item => {
      // Usar lógica universal para renderizar tarjetas estilo WOM
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.style.cursor = 'pointer';
      card.onclick = () => window.openWomDetailsModal ? window.openWomDetailsModal('${item.movie_identifier || item.id}') : null;
      card.setAttribute('data-id', item.movie_identifier || item.id);
      
      let fallbackText = item.display_name || item.title || '';
      let fallbackSub1 = item.release_year || item.date || item.runtime_minutes || '';
      let fallbackSub2 = (item.filmmaker && item.filmmaker.director_name) ? item.filmmaker.director_name : (item.location || '');
      let finalFallbackText = fallbackText;
      if (fallbackSub1 && fallbackSub1 !== 'Por confirmar' && fallbackSub1 !== 'Por definir') finalFallbackText += '\n' + fallbackSub1;
      if (fallbackSub2) finalFallbackText += '\n' + fallbackSub2;
      
      let fallbackImg = `https://placehold.co/600x900/1e1e2f/ffffff?text=${encodeURIComponent(finalFallbackText)}`;
      let imgUrl = item.cover_image_url || item.image || fallbackImg;

      // Botón remover de likes
      let currentId = item.movie_identifier || item.id;
      let isLiked = window.isItemLiked(currentId);

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${imgUrl}" alt="${item.display_name || item.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'">
          <div class="card-overlay">
            <button class="card-like-btn" title="Me gusta" onclick="if(typeof toggleWomLike==='function'){toggleWomLike('${item.movie_identifier || item.id}', this);} event.stopPropagation(); window.renderLikesGrid();" style="background: rgba(0,0,0,0.6); border-radius: 50%; padding: 8px;">
              <svg viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2" style="width: 20px; height: 20px;">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.display_name || item.title}</h3>
          <div class="card-info">
            <span>${item.release_year || item.year || ''}</span>
            <span>${item.category_type || item.genre || ''}</span>
          </div>
          <button onclick="if(typeof window.openWomPlaylistModal==='function') window.openWomPlaylistModal('${item.movie_identifier || item.id}'); event.stopPropagation();" style="background: var(--accent-purple); color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">+ Añadir a mi lista</button>
        </div>
      `;
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// 3.5. Renderizar la pantalla de lista de seguimiento (My List)
function renderMyList() {
  renderMyListCount();
  renderMyListGrid();
}

function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  const headerActions = document.getElementById('playlist-header-actions');
  const playText = document.getElementById('playlist-play-text');
  if (!grid) return;

  grid.innerHTML = '';
  
  if (playText) {
    playText.textContent = AppState.language === 'es' ? 'Reproducir Todo' : 'Play All';
  }

  // Ordenar películas en la lista de seguimiento según el orden en que se añadieron
  // (myListMovies guarda los IDs en orden de inserción)
  const watchlisted = [];
  AppState.myListMovies.forEach(id => {
    const movie = MOVIES_DATA.find(m => Number(m.id) === Number(id));
    if (movie) watchlisted.push(movie);
  });

  if (watchlisted.length === 0) {
    grid.style.display = 'none';
    if (headerActions) headerActions.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = 'flex';
    if (headerActions) headerActions.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    watchlisted.forEach((movie, index) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      
      const thumbUrl = movie.backdrop || movie.poster || 'https://via.placeholder.com/48x48?text=No+Image';
      const year = movie.year || '2024';
      const genre = movie.genre || 'Cine';
      
      item.innerHTML = `
        <div class="playlist-index">${index + 1}</div>
        <div class="playlist-thumb" style="background-image: url('${thumbUrl}')"></div>
        <div class="playlist-details">
          <div class="playlist-title">${movie.title}</div>
          <div class="playlist-meta">${year} • ${genre}</div>
        </div>
        <div class="playlist-actions">
          <button class="playlist-play-btn" title="${AppState.language === 'es' ? 'Reproducir' : 'Play'}">
            ▶
          </button>
          <button class="playlist-remove-btn" title="${AppState.language === 'es' ? 'Quitar de la lista' : 'Remove from list'}">
            ✕
          </button>
        </div>
      `;

      // Clic en la carátula o detalles abre la ficha
      item.querySelector('.playlist-thumb').addEventListener('click', () => showMovieDetails(movie));
      item.querySelector('.playlist-details').addEventListener('click', () => showMovieDetails(movie));

      // Clic en Play reproduce el trailer (simulado abriendo ficha y haciendo clic en trailer)
      item.querySelector('.playlist-play-btn').addEventListener('click', () => {
        showMovieDetails(movie);
        setTimeout(() => {
          const trailerBtn = document.getElementById('detail-trailer-btn');
          if (trailerBtn) trailerBtn.click();
        }, 300);
      });

      // Clic en eliminar quita de la lista y recarga
      item.querySelector('.playlist-remove-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMyList(movie.id);
      });

      grid.appendChild(item);
    });
  }
}

// Reproducción automática de toda la lista (Abre la primera y simula)
window.playAllMyList = function() {
  if (AppState.myListMovies && AppState.myListMovies.length > 0) {
    const firstId = AppState.myListMovies[0];
    const movie = MOVIES_DATA.find(m => m.id === firstId);
    if (movie) {
      showMovieDetails(movie);
      setTimeout(() => {
        const trailerBtn = document.getElementById('detail-trailer-btn');
        if (trailerBtn) trailerBtn.click();
      }, 500);
    }
  }
};


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

  // Mostrar indicador de carga en la vista de detalles
  const detailsView = document.getElementById('view-details');
  if (detailsView) {
    let loader = document.getElementById('detail-view-loader');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'detail-view-loader';
      loader.className = 'detail-view-loader-overlay';
      loader.style.cssText = 'position: absolute; top:0; left:0; width:100%; height:100%; background: var(--bg-color); z-index: 1000; display:flex; align-items:center; justify-content:center; flex-direction:column;';
      const loadingMsg = AppState.language === 'es' ? 'Cargando detalles de la película...' : 'Loading movie details...';
      loader.innerHTML = `
        <div class="pagination-spinner" style="width: 48px; height: 48px; border-width: 4px; border-top-color: var(--accent-cyan); animation: pag-spin 0.8s linear infinite;"></div>
        <p style="margin-top: 16px; font-weight: 600; color: var(--text-secondary); font-size: 14px; letter-spacing: 0.5px;">${loadingMsg}</p>
      `;
      detailsView.appendChild(loader);
    } else {
      loader.style.display = 'flex';
    }
  }

  // Cambiar a la pestaña de detalles para que se vea el loader
  switchTab('details');

  // Simular la recuperación asíncrona de datos desde el servicio
  const shouldFailDetail = Math.random() < 0.15;

  setTimeout(() => {
    // Ocultar loader
    const loader = document.getElementById('detail-view-loader');
    if (loader) {
      loader.style.display = 'none';
    }

    if (shouldFailDetail) {
      const isEs = AppState.language === 'es';
      const errorMsg = isEs
        ? 'El servidor no respondió a tiempo al intentar descargar la ficha detallada de la película.'
        : 'The server did not respond in time when trying to download the detailed movie sheet.';
      if (typeof window.showServiceErrorModal === 'function') {
        window.showServiceErrorModal(errorMsg, () => {
          showMovieDetails(movie);
        });
      } else {
        alert('⚠️ ' + errorMsg);
      }
      switchTab('home');
      return;
    }

    try {
      if (!movie) {
        throw new Error("No movie data provided.");
      }

      // Actualizar fondo de pantalla del detalle
      const detailBackdrop = document.getElementById('detail-backdrop');
      if (detailBackdrop) {
        detailBackdrop.style.backgroundImage = `linear-gradient(to top, var(--bg-color) 15%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.6) 100%), url('${movie.backdrop}')`;
      }

      // Detalles de título y meta
      document.getElementById('detail-title').textContent = movie.title;
      document.getElementById('detail-year').textContent = movie.year;
      const genreEl = document.getElementById('detail-genre');
      if (genreEl) {
        genreEl.textContent = GENRE_TRANSLATIONS[AppState.language][movie.genre] || movie.genre;
      }
      document.getElementById('detail-age').textContent = movie.ageRating;
      document.getElementById('detail-duration').textContent = movie.duration;
      document.getElementById('detail-score').textContent = movie.rating;
      document.getElementById('detail-description').textContent = typeof movie.description === 'object' ? movie.description[AppState.language] : movie.description;
      // Mostrar duración debajo de la descripción (accesible y visible)
      const durationUnder = document.getElementById('detail-duration-under');
      if (durationUnder) {
        durationUnder.textContent = `${AppState.language === 'es' ? 'Duración' : 'Duration'}: ${movie.duration}`;
      }

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
      if (tagsContainer && Array.isArray(movie.tags)) {
        tagsContainer.innerHTML = '';
        movie.tags.forEach(tag => {
          const span = document.createElement('span');
          span.className = 'detail-tag';
          span.textContent = tag;
          tagsContainer.appendChild(span);
        });
      }

      // Generar datos del Director (usar foto de PERSON_PROFILE_DATA si existe)
      const directorContainer = document.getElementById('detail-director-container');
      if (directorContainer) {
        directorContainer.innerHTML = '';
        if (movie.director) {
          const normalizedDirector = movie.director.name.toLowerCase().trim();
          const profile = PERSON_PROFILE_DATA[normalizedDirector] || null;
          let photo = profile && profile.photo ? profile.photo : movie.director.photo;
          if (!photo || photo.includes('unsplash.com')) {
            photo = "ai_cast/actor_male_two_1783254193629.png";
          }

          const directorCard = document.createElement('div');
          directorCard.className = 'director-card-wrapper';
          directorCard.style.cursor = 'pointer';
          directorCard.addEventListener('click', () => {
            window.location.hash = '#person/' + encodeURIComponent(movie.director.name.replace(/\s+/g, '-'));
          });
          directorCard.innerHTML = `
            <div class="director-photo" style="background-image: url('${photo}')"></div>
            <div class="director-info">
              <span class="director-name">${movie.director.name}</span>
              <span class="director-role">${AppState.language === 'es' ? 'Director de Cine' : 'Film Director'}</span>
            </div>
          `;
          directorContainer.appendChild(directorCard);
        }
      }

      // Generar lista de actores (Cast)
      const castContainer = document.getElementById('detail-cast-list');
      if (castContainer && Array.isArray(movie.cast)) {
        castContainer.innerHTML = '';
        movie.cast.forEach((actor, index) => {
          const actorCard = document.createElement('div');
          actorCard.className = 'actor-card';
          actorCard.style.cursor = 'pointer';
          actorCard.addEventListener('click', () => {
            window.location.hash = '#person/' + encodeURIComponent(actor.name.replace(/\s+/g, '-'));
          });

          // Preferir foto desde PERSON_PROFILE_DATA si está disponible
          const normalizedActor = actor.name.toLowerCase().trim();
          const actorProfile = PERSON_PROFILE_DATA[normalizedActor] || null;
          let avatarUrl = actorProfile && actorProfile.photo ? actorProfile.photo : '';
          if (!avatarUrl || avatarUrl.includes('ui-avatars') || avatarUrl.includes('unsplash')) {
            const aiImages = [
              "ai_cast/actor_female_one_1783254168757.png",
              "ai_cast/actor_male_one_1783254179999.png",
              "ai_cast/actor_male_two_1783254193629.png",
              "ai_cast/actor_female_two_1783254205060.png"
            ];
            const charCodeSum = actor.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const isFemale = /elena|luna|sienna|rin|sophie|anne/i.test(actor.name);
            const isMale = /marcus|aris|julian|alex|edward|matthew|christoph/i.test(actor.name);
            
            if (isFemale) {
              avatarUrl = aiImages[charCodeSum % 2 === 0 ? 0 : 3];
            } else if (isMale) {
              avatarUrl = aiImages[charCodeSum % 2 === 0 ? 1 : 2];
            } else {
              avatarUrl = aiImages[charCodeSum % 4];
            }
          }

          actorCard.innerHTML = `
            <div class="actor-photo" style="background-image: url('${avatarUrl}')"></div>
            <div class="actor-info">
              <span class="actor-name">${actor.name}</span>
              <span class="actor-char">${typeof actor.character === 'object' ? actor.character[AppState.language] : actor.character}</span>
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

      // Botón de copiado directo de enlace
      const shareActionBtn = document.getElementById('detail-share-action-btn');
      if (shareActionBtn) {
        shareActionBtn.onclick = () => {
          if (typeof window.copyMovieShareLink === 'function') {
            window.copyMovieShareLink();
          }
        };
      }

      const trailerBtn = document.getElementById('detail-trailer-btn');
      if (trailerBtn) {
        trailerBtn.onclick = () => {
          if (typeof window.openTrailerModal === 'function') {
            window.openTrailerModal(movie);
          }
        };
      }

      const detailHash = `#movie-${movie.id}`;
      if (window.location.hash !== detailHash) {
        history.replaceState(null, '', `${window.location.pathname}${detailHash}`);
      }

      // Establecer la URL de compartición de la película en el estado del detalle
      window.currentMovieShareUrl = `${window.location.origin}${window.location.pathname}${detailHash}`;

      const copyMovieShareLink = () => {
        const url = window.currentMovieShareUrl;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            alert('Enlace copiado al portapapeles');
          }).catch(() => {
            prompt('Copiar enlace manualmente:', url);
          });
        } else {
          prompt('Copiar enlace manualmente:', url);
        }
      };

      const shareMovie = (channel) => {
        const url = encodeURIComponent(window.currentMovieShareUrl);
        const title = encodeURIComponent(movie.title);
        let shareUrl = '';

        switch (channel) {
          case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
            break;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
          case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
          case 'discord':
            shareUrl = `https://discord.com/channels/@me`;
            break;
          default:
            return;
        }

        if (channel === 'discord') {
          alert('Abre Discord y comparte el enlace manualmente: ' + window.currentMovieShareUrl);
        } else {
          window.open(shareUrl, '_blank');
        }
      };

      window.copyMovieShareLink = copyMovieShareLink;
      window.shareMovie = shareMovie;

      // Añadir control de asignación personal en la vista de detalles
      const assignmentContainerId = 'detail-assignment-container';
      let assignmentContainer = document.getElementById(assignmentContainerId);
      if (!assignmentContainer) {
        assignmentContainer = document.createElement('div');
        assignmentContainer.id = assignmentContainerId;
        assignmentContainer.className = 'detail-assignment-container';
        const detailActions = document.getElementById('detail-actions-row') || document.getElementById('detail-buttons-row');
        if (detailActions) {
          detailActions.parentNode.insertBefore(assignmentContainer, detailActions.nextSibling);
        } else if (document.getElementById('view-details')) {
          document.getElementById('view-details').appendChild(assignmentContainer);
        }
      }

      const existingAssignment = getMovieAssignment(movie.id);
      assignmentContainer.innerHTML = `
        <div style="display:flex; gap:8px; align-items:center; margin-top:12px;">
          <input id="movie-assignment-input" aria-label="Asignación personal" placeholder="${AppState.language === 'es' ? 'Añadir nota personal a esta película...' : 'Add a personal note to this movie...'}" style="flex:1; padding:8px; border-radius:8px; border:1px solid var(--border-color);" value="${existingAssignment.note || ''}">
          <input id="movie-assignment-image" aria-label="Imagen asignada" placeholder="${AppState.language === 'es' ? 'URL de imagen (opcional)' : 'Image URL (optional)'}" style="width:220px; padding:8px; border-radius:8px; border:1px solid var(--border-color);" value="${existingAssignment.image || ''}">
          <button id="movie-assignment-save" class="btn-small">${AppState.language === 'es' ? 'Guardar' : 'Save'}</button>
        </div>
      `;

      const assignmentInput = document.getElementById('movie-assignment-input');
      const assignmentSaveBtn = document.getElementById('movie-assignment-save');
      if (assignmentSaveBtn && assignmentInput) {
        assignmentSaveBtn.addEventListener('click', () => {
          // Proteger guardados personales: requiere autenticación
          if (!AppState.user) {
            AppState.postLoginAction = () => assignmentSaveBtn.click();
            showAuthError(AppState.language === 'es' ? 'Debes iniciar sesión para guardar cambios personales.' : 'You must sign in to save personal changes.');
            openRegister();
            return;
          }

          const imgInput = document.getElementById('movie-assignment-image');
          const noteVal = assignmentInput.value || '';
          const imgVal = imgInput ? imgInput.value || '' : '';
          setMovieAssignment(movie.id, noteVal, imgVal);
          const msg = AppState.language === 'es' ? 'Asignación guardada.' : 'Assignment saved.';
          // Notificación ligera
          const n = document.createElement('div');
          n.className = 'toast-notice';
          n.textContent = msg;
          document.body.appendChild(n);
          setTimeout(() => n.remove(), 1600);
        });
      }

      const listBtn = document.getElementById('detail-list-btn');
      if (listBtn) {
        const isWatchlisted = AppState.myListMovies.includes(movie.id);
        const isEs = AppState.language === 'es';
        if (isWatchlisted) {
          listBtn.classList.add('watchlisted');
          listBtn.innerHTML = `📁 <span>${isEs ? 'Quitar Lista' : 'Remove List'}</span>`;
        } else {
          listBtn.classList.remove('watchlisted');
          listBtn.innerHTML = `📁 <span>${isEs ? 'Mi Lista' : 'My List'}</span>`;
        }

        const newListBtn = listBtn.cloneNode(true);
        listBtn.parentNode.replaceChild(newListBtn, listBtn);

        newListBtn.addEventListener('click', () => {
          // Directamente añade/quita de la lista por defecto
          toggleMyList(movie.id);
          const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
          const isEsNow = AppState.language === 'es';
          newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
          const label = isWatchlistedNow 
            ? (isEsNow ? 'Quitar Lista' : 'Remove List') 
            : (isEsNow ? 'Mi Lista' : 'My List');
          newListBtn.innerHTML = `📁 <span>${label}</span>`;
          
          // Si el usuario quiere guardar en otra lista personalizada, podríamos añadir otro botón aquí o en el perfil, 
          // pero restauramos la experiencia directa a "Mi Lista" según pidió.
        });
      }

      // Render del rating de usuario en detalles y control para cambiarlo
      function renderDetailUserRating(movie) {
        const containerId = 'detail-user-rating';
        let container = document.getElementById(containerId);
        if (!container) {
          container = document.createElement('div');
          container.id = containerId;
          container.className = 'detail-user-rating-container';
          const detailMeta = document.getElementById('detail-meta-row') || document.getElementById('detail-meta');
          if (detailMeta) detailMeta.appendChild(container);
          else if (document.getElementById('view-details')) document.getElementById('view-details').appendChild(container);
        }

        const userRating = getUserRating(movie.id);
        const displayValue = userRating !== null ? userRating.toFixed(1) : movie.rating.toFixed(1);

        container.innerHTML = `
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="detail-score">${displayValue} <span class="star-icon">★</span></div>
            <div style="display:flex; gap:6px; align-items:center;">
              <input id="detail-rating-input" type="number" min="0" max="10" step="0.1" value="${userRating !== null ? userRating : ''}" placeholder="e.g. 8.5" style="width:72px; padding:6px; border-radius:6px; border:1px solid var(--border-color);">
              <button id="detail-rating-save" class="btn-small">${AppState.language === 'es' ? 'Valorar' : 'Rate'}</button>
            </div>
          </div>
        `;

        const input = document.getElementById('detail-rating-input');
        const saveBtn = document.getElementById('detail-rating-save');
        if (saveBtn && input) {
          saveBtn.addEventListener('click', () => {
            const val = input.value;
            if (!val) {
              setUserRating(movie.id, null);
              alert(AppState.language === 'es' ? 'Valoración eliminada.' : 'Rating removed.');
              return;
            }
            const num = Number(val);
            if (isNaN(num) || num < 0 || num > 10) {
              alert(AppState.language === 'es' ? 'Introduce una puntuación válida entre 0 y 10.' : 'Please enter a valid score between 0 and 10.');
              return;
            }
            setUserRating(movie.id, num);
            alert(AppState.language === 'es' ? 'Valoración guardada.' : 'Rating saved.');
          });
        }
      }

      // Ejecutar render de rating en detalle actual
      renderDetailUserRating(movie);

      // --- Lógica del Sistema de Valoraciones y Comentarios ---
      const isEsVal = AppState.language === 'es';
      
      // 1. Cargar puntuación guardada previamente
      const savedScore = AppState.userRatings[movie.id] || '';
      const scoreInput = document.getElementById('user-movie-score');
      if (scoreInput) {
        scoreInput.value = savedScore;
      }
      
      const scoreLabel = document.getElementById('user-current-score-label');
      if (scoreLabel) {
        if (savedScore) {
          scoreLabel.style.display = 'block';
          scoreLabel.textContent = isEsVal
            ? `Tu puntuación actual es: ${savedScore}/10 (Puedes modificarla introduciendo un nuevo valor)`
            : `Your current score is: ${savedScore}/10 (You can modify it by entering a new value)`;
        } else {
          scoreLabel.style.display = 'none';
        }
      }
      
      // 2. Botón Guardar Puntuación
      const saveScoreBtn = document.getElementById('save-score-btn');
      if (saveScoreBtn && scoreInput) {
        const newSaveScoreBtn = saveScoreBtn.cloneNode(true);
        saveScoreBtn.parentNode.replaceChild(newSaveScoreBtn, saveScoreBtn);
        
        newSaveScoreBtn.addEventListener('click', () => {
            // Proteger acción de puntuación: usuario debe estar autenticado
            if (!AppState.user) {
              AppState.postLoginAction = () => newSaveScoreBtn.click();
              openRegister();
              return;
            }
          const val = parseInt(scoreInput.value);
          if (isNaN(val) || val < 1 || val > 10) {
            alert(isEsVal ? 'La puntuación debe ser un número entre 1 y 10.' : 'The score must be a number between 1 and 10.');
            return;
          }
          
          try {
            FavoritesService.setRating(movie.id, val);
            
            const detailLikeBtn = document.getElementById('detail-like-btn');
            if (detailLikeBtn) {
              const isLiked = AppState.likedMovies.includes(movie.id);
              detailLikeBtn.classList.toggle('liked', isLiked);
              detailLikeBtn.innerHTML = isLiked ? '❤️' : '🤍';
            }
            
            if (scoreLabel) {
              scoreLabel.style.display = 'block';
              scoreLabel.textContent = isEsVal
                ? `Tu puntuación actual es: ${val}/10 (Guardada con éxito)`
                : `Your current score is: ${val}/10 (Saved successfully)`;
            }
            
            renderReviewsList(movie);

            const playlistContainer = document.getElementById('likes-playlist-container');
            if (playlistContainer && playlistContainer.style.display !== 'none') {
              renderPlaylistItems();
            }
          } catch (err) {
            console.error("Error al guardar puntuación desde detalles:", err);
            if (typeof window.showServiceErrorModal === 'function') {
              window.showServiceErrorModal(err.message, () => {
                // Reintentar click
                newSaveScoreBtn.click();
              });
            } else {
              alert('⚠️ ' + err.message);
            }
          }
        });
      }
      
      // 3. Botón Publicar Comentario
      const submitCommentBtn = document.getElementById('submit-comment-btn');
      const commentInput = document.getElementById('user-movie-comment');
      if (submitCommentBtn && commentInput) {
        const newSubmitCommentBtn = submitCommentBtn.cloneNode(true);
        submitCommentBtn.parentNode.replaceChild(newSubmitCommentBtn, submitCommentBtn);
        
        newSubmitCommentBtn.addEventListener('click', () => {
            // Proteger comentarios (solo usuarios autenticados pueden publicar)
            if (!AppState.user) {
              AppState.postLoginAction = () => newSubmitCommentBtn.click();
              showAuthError(isEsVal ? 'Debes iniciar sesión para publicar comentarios.' : 'You must sign in to post comments.');
              openRegister();
              return;
            }

            if (!commentText) {
              alert(isEsVal ? 'Por favor, escribe un comentario antes de publicar.' : 'Please write a comment before publishing.');
              return;
            }
          
          const currentScore = parseInt(scoreInput.value) || 10;
          
          const newReview = {
            name: "María Carrillo (Tú)",
            score: currentScore,
            comment: commentText,
            date: new Date().toISOString().split('T')[0]
          };
          
          if (!AppState.userReviews[movie.id]) {
            AppState.userReviews[movie.id] = [];
          }
          AppState.userReviews[movie.id].unshift(newReview); // Mostrar primero los nuevos
          localStorage.setItem('userReviews', JSON.stringify(AppState.userReviews));
          
          commentInput.value = '';
          
          // Refrescar listado
          renderReviewsList(movie);
        });
      }
      
      // 4. Renderizar el listado inicial de valoraciones de la comunidad
      renderReviewsList(movie);
    } catch (error) {
      console.error("Error al cargar la ficha detallada de la película:", error);
      const isEs = AppState.language === 'es';
      const errorTitle = isEs ? 'Error de Carga' : 'Load Error';
      const errorMsg = isEs ? 'No pudimos recuperar la ficha detallada de la película.' : 'We could not recover the movie details.';
      alert(`⚠️ ${errorTitle}: ${errorMsg}`);
      switchTab('home');
    }
  }, 500);
}

function createMovieCardElement(movie) {
  const isLiked = AppState.likedMovies.includes(movie.id);

  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('data-id', movie.id);

  const genreTranslated = GENRE_TRANSLATIONS[AppState.language][movie.genre] || movie.genre;
  const synopsis = movie.description?.[AppState.language] || '';
  const shortSynopsis = synopsis.length > 80 ? synopsis.substring(0, 77) + '...' : synopsis;

  card.innerHTML = `
    <div class="card-image" style="background-image: url('${movie.poster}')">
      <button class="card-like-btn ${isLiked ? 'liked' : ''}" aria-label="Añadir a favoritos">
        <svg class="heart-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <div class="card-rating" data-avg="${movie.rating}">
        <span>${getUserRating(movie.id) !== null ? getUserRating(movie.id).toFixed(1) : movie.rating.toFixed(1)}</span>
        <span class="star-icon">★</span>
      </div>
    </div>
    <div class="card-details">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta">
        <span class="card-genre">${genreTranslated}</span>
        <span class="card-year">• ${movie.year}</span>
      </div>
      <p class="card-synopsis-summary">${shortSynopsis}</p>
    </div>
  `;

  return card;
}

const GENRE_TRANSLATIONS = {
  es: {
    "Sci-Fi/Thriller": "Ciencia Ficción/Thriller",
    "Sci-Fi": "Ciencia Ficción",
    "Thriller": "Thriller",
    "Fantasy": "Fantasía",
    "Action": "Acción",
    "Adventure": "Aventura",
    "Mystery": "Misterio",
    "Animation": "Animación",
    "Romance": "Romance",
    "Comedy": "Comedia",
    "Drama": "Drama",
    "Social": "Social",
    "Tech": "Tecnología",
    "Live Action": "Live Action",
    "Musical": "Musical"
  },
  en: {
    "Sci-Fi/Thriller": "Sci-Fi/Thriller",
    "Sci-Fi": "Sci-Fi",
    "Thriller": "Thriller",
    "Fantasy": "Fantasy",
    "Action": "Action",
    "Adventure": "Adventure",
    "Mystery": "Mystery",
    "Animation": "Animation",
    "Romance": "Romance",
    "Comedy": "Comedy",
    "Drama": "Drama",
    "Social": "Social",
    "Tech": "Tech",
    "Live Action": "Live Action",
    "Musical": "Musical"
  }
};

const TRANSLATIONS = {
  es: {
    home: "Inicio",
    explore: "Explore",
    likes: "Likes",
    mylist: "My List",
    profile: "Perfil",
    continueWatching: "CONTINUAR VIENDO",
    recommended: "RECOMENDADO PARA TI",
    all: "Todos",
    scifi: "Ciencia Ficción",
    drama: "Drama",
    action: "Acción",
    searchPlaceholder: "Buscar películas, géneros...",
    noResults: "No se encontraron resultados para",
    emptyLikesTitle: "Aún no tienes favoritos",
    emptyLikesDesc: "Explora películas y pulsa el corazón de favoritos en cualquiera de ellas para guardarla aquí.",
    emptyListTitle: "Tu lista de seguimiento está vacía",
    emptyListDesc: "Explora películas y pulsa \"+ Mi Lista\" en la pantalla de detalles de cualquiera de ellas para guardarla aquí.",
    detailTrailer: "Ver Tráiler",
    detailSave: "Guardar",
    detailMyList: "Mi Lista",
    detailRemoveList: "Quitar Lista",
    detailTickets: "Entradas",
    detailSynopsis: "Sinopsis",
    detailCast: "Reparto",
    profileWelcome: "Bienvenido",
    profileSubtitle: "Accede a tu biblioteca y listas de seguimiento",
    profileUser: "María Carrillo",
    profileRole: "Social Developer & Miembro Premium de Watch Movies",
    loginSubmit: "Iniciar Sesión",
    loginEmail: "Correo Electrónico",
    loginPassword: "Contraseña",
    loginForgot: "¿Olvidaste tu contraseña?",
    loginOr: "O continuar con",
    loginRegister: "¿No tienes una cuenta? Regístrate Ahora",
    accessibilityTitle: "Panel de Accesibilidad",
    accessibilityLang: "Idioma",
    accessibilityNarrator: "Narrador de Voz",
    accessibilityBraille: "Modo Braille",
    accessibilitySignLang: "Lenguaje de Señas (Dactilología)",
    accessibilityExplainFlow: "Narrar Diagrama de Flujo",
    accessibilitySpeechIntro: "Panel de accesibilidad abierto.",
    accessibilityFlowNarration: "Explicación del diagrama de flujo de usuario: El usuario inicia en la pantalla principal Home, donde puede ver el banner destacado de Midnight Echo y secciones de continuar viendo o recomendadas. Puede navegar al menú Explore para buscar películas escribiendo o por voz. Al pulsar sobre cualquier película, se abre la vista Detalle con la sinopsis, reparto, opción de ver tráiler, comprar entradas, o guardarla pulsando en favoritos (Likes) o agregándola a Mi Lista (My List). Todas las películas guardadas se listan de forma dinámica en sus respectivas vistas dedicadas."
  },
  en: {
    home: "Home",
    explore: "Explore",
    likes: "Likes",
    mylist: "My List",
    profile: "Profile",
    continueWatching: "CONTINUE WATCHING",
    recommended: "RECOMMENDED FOR YOU",
    all: "All",
    scifi: "Sci-Fi",
    drama: "Drama",
    action: "Action",
    searchPlaceholder: "Search movies, genres...",
    noResults: "No results found for",
    emptyLikesTitle: "No favorites yet",
    emptyLikesDesc: "Explore movies and press the heart icon on any of them to save it here.",
    emptyListTitle: "Your watchlist is empty",
    emptyListDesc: "Explore movies and press \"+ My List\" on the details screen of any movie to save it here.",
    detailTrailer: "Watch Trailer",
    detailSave: "Save",
    detailMyList: "My List",
    detailRemoveList: "Remove List",
    detailTickets: "Tickets",
    detailSynopsis: "Synopsis",
    detailCast: "Cast",
    profileWelcome: "Welcome",
    profileSubtitle: "Access your library and watchlists",
    profileUser: "María Carrillo",
    profileRole: "Social Developer & Watch Movies Premium Member",
    loginSubmit: "Log In",
    loginEmail: "Email Address",
    loginPassword: "Password",
    loginForgot: "Forgot password?",
    loginOr: "Or continue with",
    loginRegister: "Don't have an account? Register Now",
    accessibilityTitle: "Accessibility Panel",
    accessibilityLang: "Language",
    accessibilityNarrator: "Screen Narrator",
    accessibilityBraille: "Braille Mode",
    accessibilitySignLang: "Sign Language (Fingerspelling)",
    accessibilityExplainFlow: "Narrate User Flow",
    accessibilitySpeechIntro: "Accessibility panel opened.",
    accessibilityFlowNarration: "User Flow Diagram Explanation: The user starts in the Home screen, featuring the Midnight Echo banner, continue watching, and recommended sections. They can navigate to the Explore menu to search for movies using text or voice. Clicking on any movie card opens the Details view displaying synopsis, cast, option to watch trailer, buy tickets, or save it by liking it (Likes) or adding it to My List. All saved movies are dynamically listed in their respective dedicated views."
  }
};

const BRAILLE_MAP = {
  'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
  'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠕',
  'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠽', 'y': '⠽', 'z': '⠵',
  '0': '⠚', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊',
  ' ': ' ', '.': '⠲', ',': '⠂', '!': '⠮', '?': '⠹', '-': '⠤'
};

const SIGN_LANG_SVGS = {
  a: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 70 V45 A10 10 0 0 1 50 45 V70 M50 70 V48 A10 10 0 0 1 70 48 V70 M30 70 H70 V90 H30 Z M20 60 L35 75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  b: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 80 V20 A8 8 0 0 1 46 20 V80 M46 80 V20 A8 8 0 0 1 62 20 V80 M62 80 V20 A8 8 0 0 1 78 20 V80 H30 M22 55 L38 65" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  c: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M70 30 C50 15 30 35 30 50 C30 65 50 85 70 70" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  d: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 80 V20 A8 8 0 0 1 46 20 V80 M46 80 V55 H78 V80 H30 M22 65 L38 75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  e: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 75 V45 H70 V75 H30 M30 55 H70 M30 65 H70" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  f: `<svg viewBox="0 0 100 100" class="sign-svg"><circle cx="40" cy="40" r="15" stroke="currentColor" stroke-width="6" fill="none"/><path d="M55 40 V15 A8 8 0 0 1 71 15 V80 M71 80 V15 A8 8 0 0 1 87 15 V80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  g: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M20 50 H75 M20 65 H65" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  h: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M20 40 H80 M20 55 H80 M20 70 H50" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  i: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 80 V55 H62 V80 H30 M62 80 V30 A8 8 0 0 1 78 30 V80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  j: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M62 40 V75 C62 85 45 85 45 75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  k: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 80 V25 M30 50 L70 20 M30 50 L70 80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  l: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 20 V70 H80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  m: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 75 V35 A8 8 0 0 1 45 35 V75 M45 75 V35 A8 8 0 0 1 60 35 V75 M60 75 V35 A8 8 0 0 1 75 35 V75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  n: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 75 V35 A8 8 0 0 1 45 35 V75 M45 75 V35 A8 8 0 0 1 60 35 V75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  o: `<svg viewBox="0 0 100 100" class="sign-svg"><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="6" fill="none"/></svg>`,
  p: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 20 V80 M30 20 H65 A20 20 0 0 1 65 60 H30" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  q: `<svg viewBox="0 0 100 100" class="sign-svg"><circle cx="50" cy="50" r="25" stroke="currentColor" stroke-width="6" fill="none"/><path d="M68 68 L85 85" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  r: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 80 V20 H60 A15 15 0 0 1 60 50 H30 M50 50 L75 80" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  s: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M70 35 C70 25 30 25 30 45 C30 65 70 65 70 75 C70 85 30 85 30 75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  t: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M50 20 V80 M20 35 H80" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  u: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 20 V65 C30 75 70 75 70 65 V20" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  v: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M25 20 L50 80 L75 20" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  w: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M20 20 L35 80 L50 25 L65 80 L80 20" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  x: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M25 25 L75 75 M75 25 L25 75" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  y: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M30 20 V50 C30 65 70 65 70 50 V20 M50 62 V85" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  z: `<svg viewBox="0 0 100 100" class="sign-svg"><path d="M25 25 H75 L25 75 H75" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

// Extender AppState
AppState.language = localStorage.getItem('appLanguage') || 'es';
AppState.narratorActive = false;
AppState.brailleActive = false;

// Inicializar traducción al cargar
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage(AppState.language);
  setupNarratorHoverListeners();
});

// Abrir/Cerrar Panel de Accesibilidad
function toggleAccessibilityPanel() {
  const panel = document.getElementById('accessibility-panel');
  if (panel) {
    panel.classList.toggle('active');
    if (panel.classList.contains('active')) {
      speakText(AppState.language === 'es' ? TRANSLATIONS.es.accessibilitySpeechIntro : TRANSLATIONS.en.accessibilitySpeechIntro);
    }
  }
}

// Cambiar Idioma global
function changeLanguage(lang) {
  AppState.language = lang;
  localStorage.setItem('appLanguage', lang);
  
  // Actualizar botones de lenguaje
  const btnEs = document.getElementById('lang-btn-es');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEs.classList.remove('active');
      btnEn.classList.add('active');
    }
  }

  const dict = TRANSLATIONS[lang];
  
  // Traducir pestañas de barra lateral y móvil
  document.querySelectorAll('[data-tab="home"] span').forEach(el => el.textContent = dict.home);
  document.querySelectorAll('[data-tab="explore"] span').forEach(el => el.textContent = dict.explore);
  document.querySelectorAll('[data-tab="likes"] span').forEach(el => el.textContent = dict.likes);
  document.querySelectorAll('[data-tab="mylist"] span').forEach(el => el.textContent = dict.mylist);
  document.querySelectorAll('[data-tab="profile"] span').forEach(el => el.textContent = dict.profile);
  
  // Encabezados
  const titles = document.querySelectorAll('.section-title-mockup');
  if (titles[0]) titles[0].textContent = dict.continueWatching;
  if (titles[1]) titles[1].textContent = dict.recommended;

  // Sugeridos título en Explore
  const suggested = document.getElementById('suggested-title');
  if (suggested) suggested.textContent = lang === 'es' ? 'Sugeridas para ti' : 'Suggested for you';

  // Traducir selectores de filtro en Explore
  const genreLabel = document.querySelector('label[for="explore-filter-genre"]');
  if (genreLabel) genreLabel.textContent = lang === 'es' ? 'Género' : 'Genre';
  
  const ratingLabel = document.querySelector('label[for="explore-filter-rating"]');
  if (ratingLabel) ratingLabel.textContent = lang === 'es' ? 'Puntuación' : 'Rating';

  const trendLabel = document.querySelector('label[for="explore-filter-trend"]');
  if (trendLabel) trendLabel.textContent = lang === 'es' ? 'Tendencia' : 'Trend';

  // Opciones de Género select
  const genreSelect = document.getElementById('explore-filter-genre');
  if (genreSelect) {
    genreSelect.options[0].text = lang === 'es' ? 'Todos' : 'All';
    genreSelect.options[1].text = lang === 'es' ? 'Ciencia Ficción' : 'Sci-Fi';
    genreSelect.options[2].text = lang === 'es' ? 'Thriller' : 'Thriller';
    genreSelect.options[3].text = lang === 'es' ? 'Fantasía' : 'Fantasy';
    genreSelect.options[4].text = lang === 'es' ? 'Acción' : 'Action';
    genreSelect.options[5].text = lang === 'es' ? 'Aventura' : 'Adventure';
    genreSelect.options[6].text = lang === 'es' ? 'Misterio' : 'Mystery';
    genreSelect.options[7].text = lang === 'es' ? 'Animación' : 'Animation';
    genreSelect.options[8].text = lang === 'es' ? 'Romance' : 'Romance';
    genreSelect.options[9].text = lang === 'es' ? 'Comedia' : 'Comedy';
    genreSelect.options[10].text = lang === 'es' ? 'Social' : 'Social';
    genreSelect.options[11].text = lang === 'es' ? 'Tecnología' : 'Tech';
    genreSelect.options[12].text = 'Live Action';
  }

  // Opciones de Puntuación select
  const ratingSelect = document.getElementById('explore-filter-rating');
  if (ratingSelect) {
    ratingSelect.options[0].text = lang === 'es' ? 'Cualquiera' : 'Any';
    ratingSelect.options[1].text = lang === 'es' ? '★ 8.5 o más' : '★ 8.5 or higher';
    ratingSelect.options[2].text = lang === 'es' ? '★ 8.0 o más' : '★ 8.0 or higher';
    ratingSelect.options[3].text = lang === 'es' ? '★ 7.5 o más' : '★ 7.5 or higher';
  }

  // Opciones de Tendencia select
  const trendSelect = document.getElementById('explore-filter-trend');
  if (trendSelect) {
    trendSelect.options[0].text = lang === 'es' ? 'Todos' : 'All';
    trendSelect.options[1].text = lang === 'es' ? 'Más Vistas (Tendencia)' : 'Trending (Popular)';
    trendSelect.options[2].text = lang === 'es' ? 'Estrenos Recientes' : 'Recent Releases';
  }

  // Detail buttons
  const detailTrailer = document.querySelector('#detail-trailer-btn span');
  if (detailTrailer) detailTrailer.textContent = dict.detailTrailer;
  const detailSave = document.querySelector('#detail-like-btn span');
  if (detailSave) detailSave.textContent = dict.detailSave;
  const detailMyList = document.querySelector('#detail-list-btn span');
  if (detailMyList) {
    if (AppState.selectedMovie) {
      const isListed = AppState.myListMovies.includes(AppState.selectedMovie.id);
      detailMyList.textContent = isListed ? dict.detailRemoveList : dict.detailMyList;
    } else {
      detailMyList.textContent = dict.detailMyList;
    }
  }
  const detailTickets = document.querySelector('#detail-ticket-btn span');
  if (detailTickets) detailTickets.textContent = dict.detailTickets;

  // Actualizar género y descripción de película seleccionada
  const detailGenre = document.getElementById('detail-genre');
  if (detailGenre && AppState.selectedMovie) {
    detailGenre.textContent = GENRE_TRANSLATIONS[lang][AppState.selectedMovie.genre] || AppState.selectedMovie.genre;
  }
  const detailDesc = document.getElementById('detail-description');
  if (detailDesc && AppState.selectedMovie) {
    detailDesc.textContent = typeof AppState.selectedMovie.description === 'object' 
      ? AppState.selectedMovie.description[lang] 
      : AppState.selectedMovie.description;
  }

  // Traducir sección de valoraciones y comentarios
  const reviewsTitle = document.getElementById('reviews-section-title');
  if (reviewsTitle) reviewsTitle.textContent = lang === 'es' ? 'Valoraciones y Críticas' : 'Ratings and Reviews';
  
  const ratingBoxTitle = document.getElementById('user-rating-box-title');
  if (ratingBoxTitle) ratingBoxTitle.textContent = lang === 'es' ? 'Tu Puntuación (1-10)' : 'Your Rating (1-10)';
  
  const saveScoreBtn = document.getElementById('save-score-btn');
  if (saveScoreBtn) saveScoreBtn.textContent = lang === 'es' ? 'Guardar Puntuación' : 'Save Rating';
  
  const addCommentTitle = document.getElementById('add-comment-title');
  if (addCommentTitle) addCommentTitle.textContent = lang === 'es' ? 'Añadir un Comentario' : 'Add a Comment';
  
  const commentInput = document.getElementById('user-movie-comment');
  if (commentInput) {
    commentInput.placeholder = lang === 'es' 
      ? 'Escribe tu crítica o comentario sobre la película...' 
      : 'Write your review or comment about the movie...';
  }
  
  const submitCommentBtn = document.getElementById('submit-comment-btn');
  if (submitCommentBtn) submitCommentBtn.textContent = lang === 'es' ? 'Publicar Comentario' : 'Post Comment';
  
  const communityReviewsTitle = document.getElementById('community-reviews-title');
  if (communityReviewsTitle) communityReviewsTitle.textContent = lang === 'es' ? 'Comentarios de la Comunidad' : 'Community Reviews';

  // Si hay una película seleccionada, volver a renderizar comentarios para traducirlos
  if (AppState.selectedMovie) {
    renderReviewsList(AppState.selectedMovie);
    
    // Actualizar la etiqueta de puntuación actual si existe
    const savedScore = AppState.userRatings[AppState.selectedMovie.id] || '';
    const scoreLabel = document.getElementById('user-current-score-label');
    if (scoreLabel && savedScore) {
      scoreLabel.textContent = lang === 'es'
        ? `Tu puntuación actual es: ${savedScore}/10 (Puedes modificarla introduciendo un nuevo valor)`
        : `Your current score is: ${savedScore}/10 (You can modify it by entering a new value)`;
    }
  }

  // Traducir panel de Playlist y Planificación
  const playlistToggleBtn = document.getElementById('toggle-playlist-mode-btn');
  const playlistContainer = document.getElementById('likes-playlist-container');
  if (playlistToggleBtn && playlistContainer) {
    const isHidden = playlistContainer.style.display === 'none';
    if (isHidden) {
      playlistToggleBtn.innerHTML = `<span>📋</span> <span>${lang === 'es' ? 'Ver Playlist y Planificador' : 'View Playlist & Scheduler'}</span>`;
    } else {
      playlistToggleBtn.innerHTML = `<span>📋</span> <span>${lang === 'es' ? 'Ocultar Playlist' : 'Hide Playlist'}</span>`;
    }
  }

  const playlistPanelTitle = document.getElementById('playlist-panel-title');
  if (playlistPanelTitle) {
    playlistPanelTitle.textContent = lang === 'es' ? 'Lista de Reproducción y Planificación' : 'Playlist and Scheduler';
  }
  const playlistPanelDesc = document.getElementById('playlist-panel-desc');
  if (playlistPanelDesc) {
    playlistPanelDesc.textContent = lang === 'es'
      ? 'Organiza el orden, planifica cuándo ver tus favoritas y reprodúcelas consecutivamente.'
      : 'Organize the order, schedule when to watch your favorites, and play them sequentially.';
  }
  const playlistItemsTitle = document.getElementById('playlist-items-title');
  if (playlistItemsTitle) {
    playlistItemsTitle.textContent = lang === 'es' ? 'Películas en la Playlist' : 'Movies in Playlist';
  }
  const playlistPlayBtn = document.getElementById('playlist-play-btn');
  if (playlistPlayBtn) {
    playlistPlayBtn.textContent = lang === 'es' ? '▶ Iniciar' : '▶ Play';
  }
  const playlistPauseBtn = document.getElementById('playlist-pause-btn');
  if (playlistPauseBtn) {
    playlistPauseBtn.textContent = lang === 'es' ? '⏸ Pausar' : '⏸ Pause';
  }
  const playlistNextBtn = document.getElementById('playlist-next-btn');
  if (playlistNextBtn) {
    playlistNextBtn.textContent = lang === 'es' ? '⏭ Siguiente' : '⏭ Next';
  }

  if (playlistContainer && playlistContainer.style.display !== 'none') {
    renderPlaylistItems();
  }

  // Reparto y Sinopsis
  const synTitle = document.querySelectorAll('.detail-section-title')[0];
  if (synTitle) synTitle.textContent = dict.detailSynopsis;
  const castTitle = document.querySelectorAll('.detail-section-title')[1];
  if (castTitle) castTitle.textContent = dict.detailCast;

  // Login profile view translations
  const profileRole = document.querySelector('.profile-role');
  if (profileRole) profileRole.textContent = dict.profileRole;
  const loginTitle = document.querySelector('.login-title');
  if (loginTitle) loginTitle.textContent = dict.profileWelcome;
  const loginSubtitle = document.querySelector('.login-subtitle');
  if (loginSubtitle) loginSubtitle.textContent = dict.profileSubtitle;
  const emailLabel = document.querySelector('label[for="login-email"]');
  if (emailLabel) emailLabel.textContent = dict.loginEmail;
  const passLabel = document.querySelector('label[for="login-password"]');
  if (passLabel) passLabel.textContent = dict.loginPassword;
  const forgotPass = document.querySelector('.forgot-password');
  if (forgotPass) forgotPass.textContent = dict.loginForgot;
  const submitBtn = document.querySelector('.login-submit-btn');
  if (submitBtn) submitBtn.textContent = dict.loginSubmit;
  const separator = document.querySelector('.social-login-separator');
  if (separator) separator.textContent = dict.loginOr;
  const registerWrap = document.querySelector('.register-link-wrapper');
  if (registerWrap) {
    registerWrap.innerHTML = lang === 'es' ? 
      `¿No tienes una cuenta? <a href="#" class="register-link" onclick="alert('Registro simulado.')">Regístrate Ahora</a>` :
      `Don't have an account? <a href="#" class="register-link" onclick="alert('Registration simulated.')">Register Now</a>`;
  }

  // Search input placeholder
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = dict.searchPlaceholder;

  // Traducir vista de My List
  const mylistTitle = document.querySelector('#view-mylist .explore-section-title');
  if (mylistTitle) {
    mylistTitle.textContent = lang === 'es' ? 'Mi Lista' : 'My List';
  }
  const mylistEmptyTitle = document.querySelector('#mylist-empty-state .empty-state-title');
  if (mylistEmptyTitle) {
    mylistEmptyTitle.textContent = dict.emptyListTitle;
  }
  const mylistEmptyDesc = document.querySelector('#mylist-empty-state .empty-state-desc');
  if (mylistEmptyDesc) {
    mylistEmptyDesc.textContent = dict.emptyListDesc;
  }
  renderMyListCount();

  // Actualizar listas activas
  if (AppState.currentTab === 'home') renderHome();
  else if (AppState.currentTab === 'likes') renderLikes();
  else if (AppState.currentTab === 'mylist') renderMyList();

  // Re-renderizar filtros activos si están en pantalla
  renderActiveFilters();

  // Actualizar botón del banner destacado
  if (typeof window.updateMainMyListBtn === 'function') {
    window.updateMainMyListBtn();
  }

  // Si Braille está activo, volver a aplicar
  if (AppState.brailleActive) {
    applyBrailleTranslation(true);
  }
}

// Convertidor Braille
function textToBraille(text) {
  return text.toLowerCase().split('').map(char => BRAILLE_MAP[char] || char).join('');
}

function applyBrailleTranslation(enable) {
  const elements = document.querySelectorAll('.hero-title, .section-title-mockup, .card-title, .explore-section-title, .detail-title, .detail-desc-text, .profile-username, .sidebar-profile-name, .sidebar-app-title, .login-title, .login-subtitle, p, h2, h3');
  elements.forEach(el => {
    if (enable) {
      if (!el.hasAttribute('data-original-text')) {
        el.setAttribute('data-original-text', el.textContent);
      }
      el.textContent = textToBraille(el.getAttribute('data-original-text'));
    } else {
      if (el.hasAttribute('data-original-text')) {
        el.textContent = el.getAttribute('data-original-text');
      }
    }
  });
}

// Modificar toggleBrailleMode
function toggleBrailleMode(checked) {
  AppState.brailleActive = checked;
  applyBrailleTranslation(checked);
}

// Narrador de Voz (Screen Reader)
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Detener narraciones anteriores
    const utterance = new SpeechSynthesisUtterance(text);
    const langCode = AppState.language === 'es' ? 'es-ES' : 'en-US';
    utterance.lang = langCode;
    
    // Asignar voz adecuada
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(langCode));
    if (voice) utterance.voice = voice;
    
    window.speechSynthesis.speak(utterance);
  }
}

function toggleNarratorMode(checked) {
  AppState.narratorActive = checked;
  if (checked) {
    const msg = AppState.language === 'es'
      ? 'Narrador activado. Hola María Carrillo, social developer. Bienvenido a Watch Movies, la plataforma de cine definitiva.'
      : 'Screen narrator enabled. Hello María Carrillo, social developer. Welcome to Watch Movies, the ultimate cinema experience.';
    speakText(msg);
  } else {
    window.speechSynthesis.cancel();
  }
}

function setupNarratorHoverListeners() {
  document.addEventListener('mouseover', (e) => {
    if (!AppState.narratorActive) return;
    
    // Buscar si el elemento es interactivo o tiene texto importante
    const target = e.target.closest('button, a, .movie-card, .sidebar-menu-btn, .continue-card, h2, h3, h1');
    if (target) {
      // Evitar repetir narración del mismo elemento repetidamente
      if (target.hasAttribute('data-last-spoken') && Date.now() - parseInt(target.getAttribute('data-last-spoken')) < 2000) {
        return;
      }
      target.setAttribute('data-last-spoken', Date.now());

      let textToSpeak = '';
      if (target.tagName === 'BUTTON' || target.classList.contains('sidebar-menu-btn') || target.classList.contains('nav-btn')) {
        textToSpeak = (AppState.language === 'es' ? 'Botón: ' : 'Button: ') + target.textContent.trim();
      } else if (target.classList.contains('movie-card')) {
        const title = target.querySelector('.card-title')?.textContent || '';
        const genre = target.querySelector('.card-subtitle')?.textContent || '';
        textToSpeak = (AppState.language === 'es' ? 'Película: ' : 'Movie: ') + title + '. ' + (AppState.language === 'es' ? 'Género: ' : 'Genre: ') + genre;
      } else {
        textToSpeak = target.textContent.trim();
      }

      if (textToSpeak) speakText(textToSpeak);
    }
  });
}

// Narrar Diagrama de Flujo de Usuario
function narrateUserFlow() {
  const dict = TRANSLATIONS[AppState.language];
  speakText(dict.accessibilityFlowNarration);
}

// Modal del Lenguaje de Señas (Dactilología)
function openSignLangModal() {
  const modal = document.getElementById('sign-lang-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('sign-lang-input').focus();
    renderSignLangAlphabet();
    updateSignLangOutput('');
  }
}

function closeSignLangModal() {
  const modal = document.getElementById('sign-lang-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function updateSignLangOutput(val) {
  const container = document.getElementById('sign-lang-output');
  if (!container) return;
  container.innerHTML = '';
  
  if (!val.trim()) {
    container.innerHTML = `<span style="color: var(--text-secondary); font-size: 14px;">El deletreo en señas aparecerá aquí...</span>`;
    return;
  }

  const cleanVal = val.toLowerCase().replace(/[^a-z]/g, '');
  if (!cleanVal) return;

  for (let i = 0; i < cleanVal.length; i++) {
    const char = cleanVal[i];
    const svgContent = SIGN_LANG_SVGS[char];
    if (svgContent) {
      const card = document.createElement('div');
      card.className = 'sign-card';
      card.innerHTML = `
        ${svgContent}
        <span class="sign-letter">${char}</span>
      `;
      container.appendChild(card);
    }
  }
}

function renderSignLangAlphabet() {
  const grid = document.getElementById('sign-lang-alphabet-grid');
  if (!grid || grid.children.length > 0) return; // Ya renderizado

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  alphabet.forEach(char => {
    const svgContent = SIGN_LANG_SVGS[char];
    if (svgContent) {
      const item = document.createElement('div');
      item.className = 'alphabet-item';
      item.innerHTML = `
        ${svgContent}
        <span class="sign-letter">${char}</span>
      `;
      grid.appendChild(item);
    }
  });
}

// =================================================================
// LÓGICA DE LA PANTALLA DE BIENVENIDA (SPLASH SCREEN)
// =================================================================

// Comprobar si ya se mostró la pantalla de bienvenida en esta sesión
if (sessionStorage.getItem('hasWelcomed') === 'true') {
  const welcome = document.getElementById('welcome-screen');
  if (welcome) welcome.style.display = 'none';
  
  // Recuperar nombre del localStorage al recargar
  const savedName = localStorage.getItem('loggedInUser');
  if (savedName) {
    const profileNameEl = document.querySelector('.profile-username');
    if (profileNameEl) {
      profileNameEl.textContent = savedName;
    }
  }
}

let currentAuthMode = 'login'; // 'login' o 'register'

function setupWelcomeAuthListeners() {
  const loginTrigger = document.getElementById('welcome-login-trigger');
  const registerTrigger = document.getElementById('welcome-register-trigger');
  const formWrapper = document.getElementById('welcome-auth-form-wrapper');
  const buttonsContainer = document.getElementById('welcome-auth-buttons');
  const toggleLink = document.getElementById('welcome-auth-toggle-link');
  
  if (loginTrigger) {
    loginTrigger.addEventListener('click', () => {
      currentAuthMode = 'login';
      if (buttonsContainer) buttonsContainer.style.display = 'none';
      if (formWrapper) formWrapper.style.display = 'block';
      updateWelcomeAuthUI();
    });
  }
  
  if (registerTrigger) {
    registerTrigger.addEventListener('click', () => {
      currentAuthMode = 'register';
      if (buttonsContainer) buttonsContainer.style.display = 'none';
      if (formWrapper) formWrapper.style.display = 'block';
      updateWelcomeAuthUI();
    });
  }
  
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentAuthMode = currentAuthMode === 'login' ? 'register' : 'login';
      updateWelcomeAuthUI();
    });
  }
}

function changeWelcomeLanguage(lang) {
  AppState.language = lang;
  
  // Update button visual states
  document.querySelectorAll('.welcome-lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`welcome-lang-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Update texts
  const titleEl = document.getElementById('welcome-title');
  const descEl = document.getElementById('welcome-desc');
  const loginTrigger = document.querySelector('#welcome-login-trigger span');
  const registerTrigger = document.querySelector('#welcome-register-trigger span');
  const guestTrigger = document.querySelector('#welcome-enter-btn-guest span');
  
  if (lang === 'en') {
    if (titleEl) titleEl.textContent = 'Welcome to the ultimate cinema experience';
    if (descEl) descEl.textContent = 'Explore, discover and organize your favorite movies in a premium galactic universe.';
    if (loginTrigger) loginTrigger.textContent = 'LOG IN';
    if (registerTrigger) registerTrigger.textContent = 'SIGN UP';
    if (guestTrigger) guestTrigger.textContent = 'Enter as guest';
  } else {
    if (titleEl) titleEl.textContent = 'Bienvenido a la experiencia de cine definitiva';
    if (descEl) descEl.textContent = 'Explora, descubre y organiza tus películas preferidas en un universo galáctico premium.';
    if (loginTrigger) loginTrigger.textContent = 'INICIAR SESIÓN';
    if (registerTrigger) registerTrigger.textContent = 'REGISTRARSE';
    if (guestTrigger) guestTrigger.textContent = 'Entrar como invitado';
  }
  
  if (typeof updateWelcomeAuthUI === 'function') {
    updateWelcomeAuthUI();
  }
}

window.changeWelcomeLanguage = changeWelcomeLanguage;

function updateWelcomeAuthUI() {
  const isEs = AppState.language === 'es';
  const nameGroup = document.getElementById('welcome-form-name-group');
  const formTitle = document.getElementById('welcome-form-title');
  const formSubtitle = document.getElementById('welcome-form-subtitle');
  const submitText = document.getElementById('welcome-auth-submit-text');
  const toggleLink = document.getElementById('welcome-auth-toggle-link');
  
  const nameInput = document.getElementById('welcome-auth-name');
  const emailInput = document.getElementById('welcome-auth-email');
  const passwordInput = document.getElementById('welcome-auth-password');
  
  const labelName = document.getElementById('welcome-label-name');
  const labelEmail = document.getElementById('welcome-label-email');
  const labelPassword = document.getElementById('welcome-label-password');

  if (labelName) labelName.textContent = isEs ? 'Nombre Completo' : 'Full Name';
  if (labelEmail) labelEmail.textContent = isEs ? 'Correo Electrónico' : 'Email Address';
  if (labelPassword) labelPassword.textContent = isEs ? 'Contraseña' : 'Password';

  if (currentAuthMode === 'login') {
    if (nameGroup) nameGroup.style.display = 'none';
    if (nameInput) nameInput.required = false;
    
    if (formTitle) formTitle.textContent = isEs ? 'Iniciar Sesión' : 'Log In';
    if (formSubtitle) formSubtitle.textContent = isEs ? 'Accede a tu cuenta para guardar tu actividad' : 'Access your account to save your activity';
    if (submitText) submitText.textContent = isEs ? 'Entrar' : 'Enter';
    if (toggleLink) toggleLink.textContent = isEs ? '¿No tienes cuenta? Regístrate aquí' : "Don't have an account? Sign up here";
    
    // Rellenar por defecto con credenciales de María
    if (emailInput && !emailInput.value) emailInput.value = 'maria.carrillo@movies.com';
    if (passwordInput && !passwordInput.value) passwordInput.value = '12345678';
  } else {
    if (nameGroup) nameGroup.style.display = 'block';
    if (nameInput) nameInput.required = true;
    
    if (formTitle) formTitle.textContent = isEs ? 'Crear Cuenta' : 'Create Account';
    if (formSubtitle) formSubtitle.textContent = isEs ? 'Regístrate para acceder a tu área personal' : 'Sign up to access your personal area';
    if (submitText) submitText.textContent = isEs ? 'Registrarse' : 'Sign Up';
    if (toggleLink) toggleLink.textContent = isEs ? '¿Ya tienes cuenta? Inicia sesión aquí' : 'Already have an account? Log in here';
    
    if (emailInput && emailInput.value === 'maria.carrillo@movies.com') emailInput.value = '';
    if (passwordInput && passwordInput.value === '12345678') passwordInput.value = '';
  }
}

function submitWelcomeAuth() {
  const isEs = AppState.language === 'es';
  const nameInput = document.getElementById('welcome-auth-name');
  const emailInput = document.getElementById('welcome-auth-email');
  const passwordInput = document.getElementById('welcome-auth-password');
  
  const enteredEmail = emailInput ? emailInput.value.trim() : '';
  const enteredPassword = passwordInput ? passwordInput.value : '';
  let enteredName = 'María Carrillo';
  let msg = '';

  // 1. Validar campos obligatorios
  if (!enteredEmail) {
    alert(isEs ? 'El correo electrónico es obligatorio.' : 'Email address is required.');
    return;
  }
  
  if (!enteredPassword) {
    alert(isEs ? 'La contraseña es obligatoria.' : 'Password is required.');
    return;
  }
  
  if (enteredPassword.length < 6) {
    alert(isEs ? 'La contraseña debe tener al menos 6 caracteres.' : 'The password must be at least 6 characters.');
    return;
  }

  if (currentAuthMode === 'register') {
    if (!nameInput || !nameInput.value.trim()) {
      alert(isEs ? 'El nombre completo es obligatorio para registrarse.' : 'Full name is required to register.');
      return;
    }
    enteredName = nameInput.value.trim();
    if (enteredName.length < 2) {
      alert(isEs ? 'El nombre completo debe tener al menos 2 caracteres.' : 'The full name must be at least 2 characters.');
      return;
    }
  } else {
    if (enteredEmail.toLowerCase().includes('maria.carrillo')) {
      enteredName = 'María Carrillo';
    } else {
      enteredName = enteredEmail.split('@')[0];
      enteredName = enteredName.charAt(0).toUpperCase() + enteredName.slice(1);
    }
  }

  // 2. Validar formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(enteredEmail)) {
    alert(isEs ? 'El formato del correo electrónico es inválido.' : 'Invalid email address format.');
    return;
  }

  // 3. Autenticación exitosa
  try {
    localStorage.setItem('loggedInUser', enteredName);
    
    AppState.user = {
      email: enteredEmail,
      name: enteredName
    };
    localStorage.setItem('wm_user', JSON.stringify(AppState.user));
    
    const profileNameEl = document.querySelector('.profile-username');
    if (profileNameEl) {
      profileNameEl.textContent = enteredName;
    }
    
    refreshHeaderAuthState();
    initUserScopedState();
    
    renderHome();
    renderFavoritesCount();
    renderMyListCount();
    
    // Toast de éxito
    const toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.textContent = isEs ? 'Autenticado con éxito.' : 'Authenticated successfully.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
    
    enterPlatform(enteredName);
    
    // Si tenía un destino o acción protegida, redirigir
    if (AppState.intendedAction) {
      const action = AppState.intendedAction;
      AppState.intendedAction = null;
      action();
    } else if (AppState.intendedTarget) {
      const remember = document.getElementById('welcome-auth-remember') ? document.getElementById('welcome-auth-remember').checked : false;

      // Usar AuthService para registro/login
      if (currentAuthMode === 'register') {
        AuthService.register({ name: enteredName, email: enteredEmail, password: enteredPassword, remember })
          .then(user => {
            try {
              refreshHeaderAuthState();
              initUserScopedState();
              refreshProfileView();
              const toast = document.createElement('div');
              toast.className = 'toast-notice';
              toast.textContent = isEs ? 'Registro exitoso. Bienvenido.' : 'Sign up successful. Welcome.';
              document.body.appendChild(toast);
              setTimeout(() => toast.remove(), 1800);

              if (AppState.postLoginAction && typeof AppState.postLoginAction === 'function') { try { AppState.postLoginAction(); } catch(e){console.error(e);} AppState.postLoginAction = null; }
              if (AppState.intendedTarget) { const t = AppState.intendedTarget; AppState.intendedTarget = null; switchTab(t); } else { switchTab('home'); }
            } catch (e) {
              console.error('Error post-register:', e);
            }
          })
          .catch(err => {
            console.error('Register error:', err);
            if (err.message === 'email_exists') showAuthError(isEs ? 'El correo ya está registrado.' : 'Email already registered.');
            else if (err.message === 'weak_password') showAuthError(isEs ? 'La contraseña es demasiado débil.' : 'Password is too weak.');
            else showAuthError(isEs ? 'No se pudo completar el registro.' : 'Could not complete sign up.');
          });
        return;
      }

      // Login
      AuthService.login({ email: enteredEmail, password: enteredPassword, remember })
        .then(user => {
          try {
            refreshHeaderAuthState();
            initUserScopedState();
            refreshProfileView();
            const toast = document.createElement('div');
            toast.className = 'toast-notice';
            toast.textContent = isEs ? 'Autenticado con éxito.' : 'Authenticated successfully.';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 1600);

            if (AppState.postLoginAction && typeof AppState.postLoginAction === 'function') { try { AppState.postLoginAction(); } catch(e){console.error(e);} AppState.postLoginAction = null; }
            if (AppState.intendedTarget) { const t = AppState.intendedTarget; AppState.intendedTarget = null; switchTab(t); } else { switchTab('home'); }
          } catch (e) {
            console.error('Error post-login:', e);
          }
        })
        .catch(err => {
          console.error('Login error:', err);
          if (err.message === 'invalid_credentials') showAuthError(isEs ? 'Correo o contraseña incorrectos.' : 'Incorrect email or password.');
          else showAuthError(isEs ? 'Error procesando inicio de sesión.' : 'Error processing login.');
        });
      const actualName = enteredName || (AppState.user && AppState.user.name) || 'User';
      msg = isEs
        ? `Hola ${actualName}, bienvenido a Watch Movies, la plataforma de cine definitiva.`
        : `Hello ${actualName}. Welcome to Watch Movies, the ultimate cinema experience.`;
    }
    
    speakText(msg);
  } catch (e) {
    console.error('Error during authentication success logic:', e);
  }
  
  // Traducir textos de la pantalla de bienvenida
  try {
    const welcomeDesc = document.getElementById('welcome-desc');
    const loginTriggerText = document.getElementById('welcome-login-trigger');
    const registerTriggerText = document.getElementById('welcome-register-trigger');

    if (lang === 'es') {
      if (welcomeTitle) welcomeTitle.textContent = "Bienvenido a la experiencia de cine definitiva";
      if (welcomeDesc) welcomeDesc.textContent = "Explora, descubre y organiza tus películas preferidas en un universo galáctico premium.";
      if (loginTriggerText) loginTriggerText.textContent = "INICIAR SESIÓN";
      if (registerTriggerText) registerTriggerText.textContent = "REGISTRARSE";
    } else {
      if (welcomeTitle) welcomeTitle.textContent = "Welcome to the Ultimate Cinema Experience";
      if (welcomeDesc) welcomeDesc.textContent = "Explore, discover, and organize your favorite movies in a premium galactic universe.";
      if (loginTriggerText) loginTriggerText.textContent = "LOG IN";
      if (registerTriggerText) registerTriggerText.textContent = "SIGN UP";
    }
  } catch (e) {
    console.error('Error translating welcome screen:', e);
  }

  // Actualizar textos del formulario si está visible
  updateWelcomeAuthUI();
}

window.setupWelcomeAuthListeners = setupWelcomeAuthListeners;

// Mejora UX: cuando la vista de perfil se muestra, actualizar nombre y estado
function refreshProfileView() {
  const profileNameEl = document.querySelector('.profile-username');
  if (profileNameEl && AppState.user) profileNameEl.textContent = AppState.user.name;
  refreshHeaderAuthState();
}
window.refreshProfileView = refreshProfileView;
window.updateWelcomeAuthUI = updateWelcomeAuthUI;
window.submitWelcomeAuth = submitWelcomeAuth;
window.enterPlatform = enterPlatform;

// =================================================================
// LÓGICA DE PAGINACIÓN / SCROLL INFINITO (FUENTE ACTUALIZADA)
// =================================================================

function loadMoreMovies() {
  if (AppState.loadingMovies || !AppState.hasMoreMovies) return;

  AppState.loadingMovies = true;

  // Mostrar el spinner de carga
  const loader = document.getElementById('pagination-loader');
  if (loader) {
    loader.style.display = 'flex';
    loader.innerHTML = `<div class="pagination-spinner"></div>`;
  }

  // Avanzamos de manera tentativa
  AppState.currentPage++;

  // Simular consulta a través de la API externa
  setTimeout(async () => {
    const shouldFailScroll = Math.random() < 0.15;
    try {
      if (shouldFailScroll) {
        throw new Error("Simulated pagination error");
      }

      // Renderizar según la pestaña actual
      if (AppState.currentTab === 'explore') {
        const resultsContainer = document.getElementById('explore-search-results');
        if (resultsContainer) {
          const loader = document.getElementById('pagination-loader');
          if (!loader) {
            const extraLoader = document.createElement('div');
            extraLoader.id = 'pagination-loader';
            extraLoader.className = 'pagination-loader-container';
            extraLoader.innerHTML = `<div class="pagination-spinner"></div>`;
            resultsContainer.parentNode.appendChild(extraLoader);
          }
        }
        await renderSearchSuggestionsGrid(AppState.exploreRequestToken, true);
      } else {
        await renderHomeGrid();
      }
    } catch (error) {
      console.error("Error al cargar más películas:", error);
      if (AppState.currentPage > 1) {
        AppState.currentPage = Math.max(1, AppState.currentPage - 1);
      }

      const isEs = AppState.language === 'es';
      const errorMsg = isEs
        ? 'No se pudo recuperar la siguiente página de películas desde el servidor.'
        : 'Could not retrieve the next page of movies from the server.';

      if (typeof window.showServiceErrorModal === 'function') {
        window.showServiceErrorModal(errorMsg, () => {
          loadMoreMovies();
        });
      } else {
        alert('⚠️ ' + errorMsg);
      }
    } finally {
      AppState.loadingMovies = false;
      const loader = document.getElementById('pagination-loader');
      if (loader) loader.style.display = 'none';
    }
  }, 800);
}

function setupInfiniteScroll() {
  window.addEventListener('scroll', () => {
    // Activar scroll infinito en Home y en Explore
    if (AppState.currentTab !== 'home' && AppState.currentTab !== 'explore') return;
    if (!AppState.hasMoreMovies || AppState.loadingMovies) return;

    // Detectar si el usuario está llegando al final de la página (con margen de 120px)
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 120) {
      loadMoreMovies();
    }
  });
}


function closePersonModal(triggerBack = true) {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  const modal = document.getElementById('person-modal');
  if (modal) {
    modal.remove();
  }
  if (triggerBack && window.location.hash.startsWith('#person/')) {
    // Si el usuario cierra el modal manualmente, limpiamos el hash
    window.location.hash = '';
  }
}

function showEntityNotFoundModal(entityType, entityName) {
  const isEs = AppState.language === 'es';
  const title = isEs ? 'No encontrado' : 'Not found';
  const description = isEs
    ? `No se encontró ${entityType} para “${entityName}”. Comprueba la URL o regresa a la pantalla principal.`
    : `No ${entityType} found for “${entityName}”. Check the URL or return to the main screen.`;

  const oldModal = document.getElementById('person-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'person-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePersonModal();
    }
  });

  modal.innerHTML = `
    <div class="modal-content modal-message-content">
      <button class="modal-close" onclick="closePersonModal()">×</button>
      <div class="modal-message-icon">⚠️</div>
      <h3>${title}</h3>
      <p class="modal-message-text">${description}</p>
      <button class="modal-button" onclick="closePersonModal()">${isEs ? 'Cerrar' : 'Close'}</button>
    </div>
  `;
document.body.appendChild(modal);
}

function showPersonDetails(personName) {
  const isEs = AppState.language === 'es';
  const normalizedPerson = personName.toLowerCase().trim();
  
  // Encontrar todas las películas en las que dirige o actúa
  const directedMovies = MOVIES_DATA.filter(m => m.director && m.director.name.toLowerCase() === normalizedPerson);
  const actedMovies = MOVIES_DATA.filter(m => m.cast.some(actor => actor.name.toLowerCase() === normalizedPerson));
  const allAssociatedMovies = [...new Set([...directedMovies, ...actedMovies])];
  
  const profile = PERSON_PROFILE_DATA[normalizedPerson];

  try {
    const role = directedMovies.length > 0 ? 'director' : actedMovies.length > 0 ? 'actor' : 'profile';
    const roleLabel = role === 'director'
      ? (isEs ? 'Director de Cine' : 'Film Director')
      : role === 'actor'
        ? (isEs ? 'Actor / Actriz' : 'Actor / Actress')
        : (isEs ? 'Profesional del Cine' : 'Film Professional');

    let photoUrl = profile?.photo || '';
    if (!photoUrl || photoUrl.includes('unsplash.com') || photoUrl.includes('ui-avatars')) {
      const aiImages = [
        "ai_cast/actor_female_one_1783254168757.png",
        "ai_cast/actor_male_one_1783254179999.png",
        "ai_cast/actor_male_two_1783254193629.png",
        "ai_cast/actor_female_two_1783254205060.png"
      ];
      const charCodeSum = normalizedPerson.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const isFemale = /elena|luna|sienna|rin|sophie|anne/i.test(normalizedPerson);
      const isMale = /marcus|aris|julian|alex|edward|matthew|christoph/i.test(normalizedPerson);
      
      if (isFemale) {
        photoUrl = aiImages[charCodeSum % 2 === 0 ? 0 : 3];
      } else if (isMale) {
        photoUrl = aiImages[charCodeSum % 2 === 0 ? 1 : 2];
      } else {
        photoUrl = aiImages[charCodeSum % 4];
      }
    }

  let currentCharacterDesc = '';
  if (window.AppState && AppState.selectedMovie && AppState.selectedMovie.cast) {
    const actorInMovie = AppState.selectedMovie.cast.find(a => a.name.toLowerCase() === normalizedPerson);
    if (actorInMovie) {
      const charName = actorInMovie.character?.[AppState.language] || 'este personaje';
      const charDesc = actorInMovie.characterDesc?.[AppState.language] || '';
      if (charName || charDesc) {
        const intro = isEs
          ? `En la película ${AppState.selectedMovie.title}, interpreta a ${charName}. `
          : `In the movie ${AppState.selectedMovie.title}, plays ${charName}. `;
        currentCharacterDesc = intro + charDesc;
      }
    }
  }
  const nationality = profile?.nationality || (isEs ? 'Desconocida' : 'Unknown');
  const birthDate = profile?.birthDate || (isEs ? 'No disponible' : 'Not available');
  const biography = profile?.biography?.[AppState.language] || (isEs ? 'Biografía no disponible.' : 'Biography not available.');
  const qualities = profile?.qualities?.[AppState.language] || (isEs ? 'Cualidades no especificadas.' : 'Qualities not specified.');
  const projectsListText = allAssociatedMovies.length > 0 ? (isEs ? ` Además, ha participado en: ${allAssociatedMovies.map(m => m.title).join(', ')}.` : ` Also, has participated in: ${allAssociatedMovies.map(m => m.title).join(', ')}.`) : '';
  const textToRead = (currentCharacterDesc || `${biography}. ${qualities}`) + projectsListText;
  const videoSrc = profile?.videoSrc || '';
  const videoText = profile?.videoText?.[AppState.language] || (isEs ? 'Esta historia de vida se presenta con interpretación en lengua de signos, narración y subtítulos.' : 'This life story is presented with sign language interpretation, narration, and subtitles.');
  const videoSubtitles = profile?.videoSubtitles?.[AppState.language] || (isEs ? 'Subtítulos no disponibles.' : 'Subtitles not available.');

  const notableProjects = allAssociatedMovies.map(movie => movie.title).slice(0, 5);
  const notableProjectsHtml = notableProjects.length > 0
    ? notableProjects.map(project => `<li>${project}</li>`).join('')
    : `<li>${isEs ? 'No hay proyectos destacados disponibles.' : 'No highlighted projects available.'}</li>`;

  const oldModal = document.getElementById('person-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'person-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePersonModal();
    }
  });

  modal.innerHTML = `
    <div class="modal-content person-modal-content">
      <button class="modal-close" onclick="closePersonModal()">×</button>
      <div class="person-modal-header">
        <div class="person-modal-photo" style="background-image: url('${photoUrl}')"></div>
        <div class="person-modal-info">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <h3 class="person-modal-name" style="margin: 0;">${personName}</h3>
            <button id="person-header-tts-btn" style="background: rgba(255,255,255,0.15); border: none; font-size: 0.9em; cursor: pointer; padding: 4px 10px; border-radius: 6px; color: #fff; display: flex; align-items: center; gap: 4px; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'" title="${isEs ? 'Leer descripción' : 'Read description'}"><span style="font-size: 1.2em;">🔊</span> ${isEs ? 'Escuchar info' : 'Listen'}</button>
          </div>
          <span class="person-modal-role">${roleLabel}</span>
        </div>
      </div>
      <div class="person-modal-details">
        <div class="person-profile-row">
          <span class="person-profile-label">${isEs ? 'Nacionalidad' : 'Nationality'}</span>
          <span>${nationality}</span>
        </div>
        <div class="person-profile-row">
          <span class="person-profile-label">${isEs ? 'Fecha de nacimiento' : 'Birth Date'}</span>
          <span>${birthDate}</span>
        </div>
        <div class="person-profile-row person-biography-row">
          <span class="person-profile-label">${isEs ? 'Biografía' : 'Biography'}</span>
          <span>${biography}</span>
        </div>
        <div class="person-profile-row person-qualities-row">
          <span class="person-profile-label">${isEs ? 'Cualidades' : 'Qualities'}</span>
          <span>${qualities}</span>
        </div>
      </div>
      <div class="person-video-card">
        <h4 class="person-modal-section-title">${isEs ? 'Historia de vida' : 'Life story'}</h4>
        ${videoSrc ? `<video controls class="person-story-video" aria-label="${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for ${personName}">
          <source src="${videoSrc}" type="video/mp4">
          ${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}
        </video>` : `<div style="padding: 20px; background: #1e293b; color: #94a3b8; border-radius: 8px; text-align: center; margin-bottom: 10px;">${isEs ? '🎥 [Vídeo en lengua de signos no disponible por el momento]' : '🎥 [Sign language video currently unavailable]'}</div>`}
        <div class="person-video-caption">${videoText}</div>
        <div class="person-video-subtitles">
          <strong>${isEs ? 'Subtítulos:' : 'Subtitles:'}</strong>
          <p>${videoSubtitles}</p>
        </div>
      </div>
      <h4 class="person-modal-section-title">${isEs ? 'Proyectos destacados' : 'Highlighted projects'}</h4>
      <ul class="person-project-list">${notableProjectsHtml}</ul>
      <h4 class="person-modal-section-title">${isEs ? 'Filmografía' : 'Filmography'}</h4>
      <div class="person-movies-grid" id="person-movies-grid"></div>
    </div>
  `;

  document.body.appendChild(modal);

  const headerTtsBtn = document.getElementById('person-header-tts-btn');
  if (headerTtsBtn) {
    headerTtsBtn.onclick = (e) => {
      e.stopPropagation();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      if (!textToRead) return;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = AppState.language === 'es' ? 'es-ES' : 'en-US';
      window.speechSynthesis.speak(utterance);
    };
  }

  const grid = document.getElementById('person-movies-grid');
  if (grid) {
    if (allAssociatedMovies.length > 0) {
      allAssociatedMovies.forEach(movie => {
        const card = createMovieCardElement(movie);
        const actorInfo = movie.cast.find(a => a.name.toLowerCase() === normalizedPerson);
        if (actorInfo) {
          const descEl = document.createElement('div');
          descEl.className = 'person-character-desc';
          descEl.innerHTML = `<strong>${isEs ? 'Personaje' : 'Character'}:</strong> ${actorInfo.character?.[AppState.language] || ''}<br><div style="display:flex; align-items:flex-start; gap:8px; margin-top:4px;"><small style="flex:1;">${actorInfo.characterDesc?.[AppState.language] || ''}</small></div>`;
          descEl.style.marginTop = '10px';
          descEl.style.padding = '10px';
          descEl.style.background = 'rgba(0,0,0,0.4)';
          descEl.style.borderRadius = '6px';
          descEl.style.fontSize = '0.85em';
          descEl.style.color = '#cbd5e1';
          
          const ttsButton = document.createElement('button');
          ttsButton.innerHTML = '🔊';
          ttsButton.title = isEs ? 'Escuchar descripción' : 'Listen to description';
          ttsButton.style.background = 'rgba(255,255,255,0.1)';
          ttsButton.style.border = 'none';
          ttsButton.style.borderRadius = '4px';
          ttsButton.style.cursor = 'pointer';
          ttsButton.style.padding = '4px 6px';
          ttsButton.style.fontSize = '1em';
          ttsButton.style.color = '#fff';
          
          ttsButton.onclick = (e) => {
            e.stopPropagation();
            const textToRead = actorInfo.characterDesc?.[AppState.language] || '';
            if (!textToRead) return;
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(textToRead);
            utterance.lang = AppState.language === 'es' ? 'es-ES' : 'en-US';
            window.speechSynthesis.speak(utterance);
          };
          
          descEl.querySelector('div').appendChild(ttsButton);
          card.appendChild(descEl);
        }
        grid.appendChild(card);
      });
    } else {
      grid.innerHTML = `<div class="person-no-filmography">${isEs ? 'No hay filmografía disponible para esta persona.' : 'No filmography available for this person.'}</div>`;
    }
  }
  } catch (error) {
    console.error("Error al mostrar detalles de persona:", error);
    showEntityNotFoundModal(isEs ? 'persona' : 'person', personName);
  }
}

function handleRouting() {
  const hash = window.location.hash;
  const isEs = AppState.language === 'es';

  if (hash.startsWith('#person/')) {
    const personName = decodeURIComponent(hash.substring(8)).replace(/-/g, ' ');
    const normalizedPerson = personName.toLowerCase().trim();
    const hasPerson = PERSON_PROFILE_DATA[normalizedPerson] || MOVIES_DATA.some(m => m.director && m.director.name.toLowerCase() === normalizedPerson) || MOVIES_DATA.some(m => m.cast.some(actor => actor.name.toLowerCase() === normalizedPerson));
    if (hasPerson) {
      showPersonDetails(personName);
    } else {
      showEntityNotFoundModal(isEs ? 'persona' : 'person', personName);
    }
    return;
  }

  if (hash.startsWith('#movie-')) {
    const movieIdStr = hash.replace('#movie-', '');
    const movieId = Number(movieIdStr);
    const movie = MOVIES_DATA.find(m => m.id === movieId);
    if (movie) {
      closePersonModal(false);
      showMovieDetails(movie);
      return;
    }
    showEntityNotFoundModal(isEs ? 'película' : 'movie', movieIdStr);
    return;
  }

  closePersonModal(false);
  if (AppState.currentTab === 'details') {
    switchTab('home');
  }
}

window.closePersonModal = closePersonModal;
window.handleRouting = handleRouting;
window.showPersonDetails = showPersonDetails;

// =================================================================
// LÓGICA DE REPRODUCTOR DE TRÁILER MODAL INTEGRADO
// =================================================================

function openTrailerModal(movie) {
  const isEs = AppState.language === 'es';
  if (!movie) return;

  
  const oldModal = document.getElementById('trailer-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'trailer-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  
  // Cerrar al hacer click fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTrailerModal();
    }
  });

  const searchQuery = encodeURIComponent(`${movie.title} official trailer`);
  const youtubeEmbedUrl = `https://www.youtube.com/embed?listType=search&list=${searchQuery}&autoplay=1`;

  modal.innerHTML = `
    <div class="modal-content trailer-modal-content" style="max-width: 800px; width: 90%; background: #000; padding: 0; border-radius: var(--border-radius-lg); overflow: hidden; position: relative;">
      <button class="modal-close" onclick="closeTrailerModal()" style="position: absolute; right: 16px; top: 16px; z-index: 10; background: rgba(0,0,0,0.5); color: #fff; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: none; font-size: 20px; cursor: pointer;">×</button>
      <div style="position: relative; padding-top: 56.25%;">
        <iframe src="${youtubeEmbedUrl}" title="Trailer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style="padding: 16px; background: #0f172a; color: #fff; display: flex; flex-direction: column; gap: 12px;">
        <div>
          <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700;">${movie.title}</h3>
          <p style="margin: 0; font-size: 13px; color: #94a3b8;">${isEs ? 'Tráiler Oficial' : 'Official Trailer'}</p>
        </div>
        <button id="trailer-fallback-tts-btn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); font-size: 0.9em; cursor: pointer; padding: 8px 12px; border-radius: 6px; color: #cbd5e1; display: flex; align-items: center; gap: 8px; transition: background 0.2s; align-self: flex-start;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
          <span style="font-size: 1.2em;">🔊</span> 
          <span>${isEs ? '¿No puedes ver el tráiler? Escuchar descripción de la película' : 'Cannot see the video? Listen to movie description'}</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const fallbackBtn = document.getElementById('trailer-fallback-tts-btn');
    fallbackBtn.onclick = (e) => {
      e.stopPropagation();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      const descText = typeof movie.description === 'object' ? movie.description[AppState.language] : movie.description;
      if (!descText) return;
      
      // Ocultar iframe para mostrar nuestro "video" narrado
      const iframe = modal.querySelector('iframe');
      if (iframe) iframe.style.display = 'none';

      // Limpiar contenedor previo si existe
      let oldVideo = document.getElementById('narrator-video-container');
      if (oldVideo) oldVideo.remove();

      const container = iframe ? iframe.parentNode : modal.querySelector('.trailer-modal-content > div:nth-child(2)');
      
      const videoContainer = document.createElement('div');
      videoContainer.id = 'narrator-video-container';
      videoContainer.style.position = 'absolute';
      videoContainer.style.top = '0';
      videoContainer.style.left = '0';
      videoContainer.style.width = '100%';
      videoContainer.style.height = '100%';
      videoContainer.style.background = `black url('${movie.backdrop || movie.poster}') center/cover no-repeat`;
      videoContainer.style.display = 'flex';
      videoContainer.style.flexDirection = 'column';
      videoContainer.style.justifyContent = 'flex-end';
      videoContainer.style.alignItems = 'center';
      videoContainer.style.overflow = 'hidden';
      videoContainer.style.animation = 'pan-image 20s linear infinite alternate';
      
      if (!document.getElementById('narrator-styles')) {
        const style = document.createElement('style');
        style.id = 'narrator-styles';
        style.textContent = `
          @keyframes pan-image {
            0% { background-size: 100%; background-position: center; }
            100% { background-size: 120%; background-position: top; }
          }
        `;
        document.head.appendChild(style);
      }

      const gradientOverlay = document.createElement('div');
      gradientOverlay.style.position = 'absolute';
      gradientOverlay.style.bottom = '0';
      gradientOverlay.style.left = '0';
      gradientOverlay.style.width = '100%';
      gradientOverlay.style.height = '70%';
      gradientOverlay.style.background = 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)';
      videoContainer.appendChild(gradientOverlay);

      const subtitleBox = document.createElement('div');
      subtitleBox.style.position = 'relative';
      subtitleBox.style.zIndex = '2';
      subtitleBox.style.color = '#fff';
      subtitleBox.style.fontSize = 'clamp(16px, 3vw, 24px)';
      subtitleBox.style.fontWeight = '500';
      subtitleBox.style.textAlign = 'center';
      subtitleBox.style.textShadow = '0 2px 6px rgba(0,0,0,0.9)';
      subtitleBox.style.padding = '20px 40px';
      subtitleBox.style.marginBottom = '20px';
      subtitleBox.style.lineHeight = '1.5';
      subtitleBox.style.maxWidth = '95%';
      
      const words = descText.split(' ');
      subtitleBox.innerHTML = words.map((w,i) => `<span id="narrator-word-${i}" style="transition: color 0.2s, transform 0.1s;">${w}</span>`).join(' ');
      videoContainer.appendChild(subtitleBox);
      
      if (container) container.appendChild(videoContainer);

      const utterance = new SpeechSynthesisUtterance(descText);
      utterance.lang = AppState.language === 'es' ? 'es-ES' : 'en-US';
      utterance.rate = 0.95;

      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          const charIndex = event.charIndex;
          let currentLen = 0;
          for(let i=0; i<words.length; i++) {
            if (charIndex >= currentLen && charIndex <= currentLen + words[i].length) {
              const spans = subtitleBox.querySelectorAll('span');
              spans.forEach(s => {
                 s.style.color = 'rgba(255,255,255,0.4)';
                 s.style.transform = 'scale(1)';
              });
              if (spans[i]) {
                spans[i].style.color = 'var(--accent-purple, #a855f7)';
                spans[i].style.transform = 'scale(1.1)';
                spans[i].style.display = 'inline-block';
              }
              break;
            }
            currentLen += words[i].length + 1;
          }
        }
      };

      utterance.onend = () => {
        const spans = subtitleBox.querySelectorAll('span');
        spans.forEach(s => {
           s.style.color = '#fff';
           s.style.transform = 'scale(1)';
        });
      };

      window.speechSynthesis.speak(utterance);
      
      // Update button text to indicate it's playing
      fallbackBtn.innerHTML = `<span style="font-size: 1.2em;">🎬</span> <span>${AppState.language === 'es' ? 'Reproduciendo vídeo narrado...' : 'Playing narrated video...'}</span>`;
    };
}

function closeTrailerModal() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  const modal = document.getElementById('trailer-modal');
  if (modal) {
    const player = document.getElementById('trailer-video-player');
    if (player) player.pause();
    modal.remove();
  }
}

window.openTrailerModal = openTrailerModal;
window.closeTrailerModal = closeTrailerModal;

// Base de datos de valoraciones simuladas de la comunidad
const MOCK_REVIEWS = {
  1: [
    { name: "Carlos Mendoza", score: 9, comment: { es: "Una obra maestra de la ciencia ficción moderna. Los efectos visuales son espectaculares.", en: "A masterpiece of modern sci-fi. The visual effects are spectacular." }, date: "2026-05-12" },
    { name: "Elena Rostova", score: 8, comment: { es: "La atmósfera es opresiva y magnífica. Me recordó a Alien y Blade Runner.", en: "The atmosphere is heavy and magnificent. Reminded me of Alien and Blade Runner." }, date: "2026-05-10" }
  ],
  2: [
    { name: "John Connor", score: 8, comment: { es: "Nolan lo ha vuelto a hacer. Compleja pero fascinante.", en: "Nolan did it again. Complex but fascinating." }, date: "2025-11-04" }
  ],
  3: [
    { name: "Alice Smith", score: 7, comment: { es: "Un thriller cyberpunk entretenido con buena música.", en: "An entertaining cyberpunk thriller with a great soundtrack." }, date: "2026-01-15" }
  ]
};

function renderReviewsList(movie) {
  const container = document.getElementById('detail-reviews-list');
  if (!container) return;
  
  container.innerHTML = '';
  const isEs = AppState.language === 'es';
  
  // Obtener comentarios predeterminados de otras personas
  const mockList = MOCK_REVIEWS[movie.id] || [
    { name: "Lucas Rojas", score: 7, comment: { es: "Buena película, cumple con entretener y tiene buena fotografía.", en: "Good movie, delivers entertainment and has good cinematography." }, date: "2026-02-15" },
    { name: "Ana Valenzuela", score: 9, comment: { es: "Me encantó el ritmo de la narrativa y la actuación principal.", en: "Loved the pacing of the narrative and the main acting." }, date: "2026-01-20" }
  ];
  
  // Obtener comentarios añadidos por el usuario
  const userList = AppState.userReviews[movie.id] || [];
  
  // Combinar ambas listas (los del usuario primero)
  const combined = [
    ...userList,
    ...mockList.map(r => ({
      name: r.name,
      score: r.score,
      comment: typeof r.comment === 'object' ? r.comment[AppState.language] : r.comment,
      date: r.date
    }))
  ];
  
  combined.forEach(rev => {
    const avatarChar = rev.name.charAt(0).toUpperCase();
    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <div class="review-header">
        <div class="review-author-info">
          <div class="review-author-avatar">${avatarChar}</div>
          <span class="review-author-name">${rev.name}</span>
        </div>
        <span class="review-score-badge">★ ${rev.score}/10</span>
      </div>
      <p class="review-comment">${rev.comment}</p>
      <div class="review-date">${rev.date}</div>
    `;
    container.appendChild(item);
  });
}

window.renderReviewsList = renderReviewsList;

// =================================================================
// LÓGICA DE PLAYLIST (LISTA DE REPRODUCCIÓN) Y PLANIFICACIÓN
// =================================================================

let playlistPlayingIndex = -1;
let playlistIsPaused = false;

function initPlaylist() {
  const likedIds = AppState.likedMovies;
  
  // Filtrar elementos de la playlist que ya no estén en favoritos
  AppState.playlistOrder = AppState.playlistOrder.filter(id => likedIds.includes(id));
  
  // Añadir nuevos elementos favoritos al final de la playlist
  likedIds.forEach(id => {
    if (!AppState.playlistOrder.includes(id)) {
      AppState.playlistOrder.push(id);
    }
  });
  
  localStorage.setItem('playlistOrder', JSON.stringify(AppState.playlistOrder));
}

function renderPlaylistItems() {
  const container = document.getElementById('playlist-items-list');
  if (!container) return;

  container.innerHTML = '';
  const isEs = AppState.language === 'es';

  if (AppState.playlistOrder.length === 0) {
    container.innerHTML = `
      <p style="font-size: 13px; color: var(--text-secondary); text-align: center; margin: 12px 0;">
        ${isEs ? 'No hay películas en tu playlist. Añade favoritos primero.' : 'No movies in your playlist. Add favorites first.'}
      </p>
    `;
    return;
  }

  AppState.playlistOrder.forEach((movieId, index) => {
    const movie = MOVIES_DATA.find(m => m.id === movieId);
    if (!movie) return;

    const existingPlan = AppState.playlistSchedule[movie.id] || '';
    const userRating = AppState.userRatings[movie.id];
      
    const item = document.createElement('div');
    item.className = 'playlist-item-row';
    item.style.cssText = 'display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 12px 16px; border-radius: var(--border-radius-md); gap: 12px; flex-wrap: wrap;';

    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px; flex: 1; flex-wrap: wrap;">
        <div style="width: 40px; height: 60px; background-image: url('${movie.poster}'); background-size: cover; background-position: center; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);"></div>
        <div style="flex: 1; min-width: 140px;">
          <div style="font-weight: 600; font-size: 14px; color: var(--text-primary);">${movie.title}</div>
          <div style="font-size: 11px; color: var(--text-secondary);">${GENRE_TRANSLATIONS[AppState.language][movie.genre] || movie.genre}</div>
        </div>
        
        <!-- Selector de Puntuación Personal Directo -->
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 9px; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">${isEs ? 'Puntuación' : 'Rating'}</label>
          <select class="playlist-item-score-select" data-id="${movie.id}" style="background: rgba(11,12,16,0.6); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 12px; outline: none; font-weight: bold; width: 90px; cursor: pointer;">
            <option value="">${isEs ? 'Sin valorar' : 'Unrated'}</option>
            <option value="1" ${userRating === 1 ? 'selected' : ''}>★ 1</option>
            <option value="2" ${userRating === 2 ? 'selected' : ''}>★ 2</option>
            <option value="3" ${userRating === 3 ? 'selected' : ''}>★ 3</option>
            <option value="4" ${userRating === 4 ? 'selected' : ''}>★ 4</option>
            <option value="5" ${userRating === 5 ? 'selected' : ''}>★ 5</option>
            <option value="6" ${userRating === 6 ? 'selected' : ''}>★ 6</option>
            <option value="7" ${userRating === 7 ? 'selected' : ''}>★ 7</option>
            <option value="8" ${userRating === 8 ? 'selected' : ''}>★ 8</option>
            <option value="9" ${userRating === 9 ? 'selected' : ''}>★ 9</option>
            <option value="10" ${userRating === 10 ? 'selected' : ''}>★ 10</option>
          </select>
        </div>

        <!-- Planificador de fecha/hora -->
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 9px; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">${isEs ? 'Planificar ver' : 'Schedule watch'}</label>
          <input type="datetime-local" class="playlist-item-date" data-id="${movie.id}" value="${existingPlan}" style="background: rgba(11,12,16,0.6); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 12px; outline: none; transition: border-color 0.3s;">
        </div>
      </div>
      
      <!-- Botones de Ordenamiento -->
      <div style="display: flex; gap: 6px;">
        <button class="btn-order-up" data-id="${movie.id}" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 4px; width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: background 0.2s;">▲</button>
        <button class="btn-order-down" data-id="${movie.id}" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; border-radius: 4px; width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: background 0.2s;">▼</button>
      </div>
    `;

    // Manejar cambios en el planificador
    const dateInput = item.querySelector('.playlist-item-date');
    if (dateInput) {
      dateInput.addEventListener('change', (e) => {
        AppState.playlistSchedule[movie.id] = e.target.value;
        localStorage.setItem('playlistSchedule', JSON.stringify(AppState.playlistSchedule));
      });
      dateInput.addEventListener('focus', () => {
        dateInput.style.borderColor = 'var(--accent-cyan)';
      });
      dateInput.addEventListener('blur', () => {
        dateInput.style.borderColor = 'rgba(255,255,255,0.2)';
      });
    }

    // Manejar cambios en el selector de puntuación
    const scoreSelect = item.querySelector('.playlist-item-score-select');
    if (scoreSelect) {
      scoreSelect.addEventListener('change', (e) => {
        try {
          const val = e.target.value ? parseInt(e.target.value) : '';
          
          FavoritesService.setRating(movie.id, val);
          
          // Actualizar de forma consciente la vista de detalles si está abierta para esa película
          if (AppState.selectedMovie && AppState.selectedMovie.id === movie.id) {
            const detailInput = document.getElementById('user-movie-score');
            if (detailInput) detailInput.value = val;
            const scoreLabel = document.getElementById('user-current-score-label');
            if (scoreLabel) {
              if (val) {
                scoreLabel.style.display = 'block';
                scoreLabel.textContent = isEs
                  ? `Tu puntuación actual es: ${val}/10 (Guardada con éxito)`
                  : `Your current score is: ${val}/10 (Saved successfully)`;
              } else {
                scoreLabel.style.display = 'none';
              }
            }
            // Refrescar comentarios en la vista de detalles
            renderReviewsList(movie);
          }
          
          // Emitir un aviso toast de confirmación silencioso
          const toast = document.createElement('div');
          toast.className = 'toast-notice';
          toast.textContent = isEs ? 'Puntuación actualizada con éxito.' : 'Rating updated successfully.';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 1500);

        } catch (err) {
          console.error("Error al guardar la puntuación desde la playlist:", err);
          alert(isEs ? '⚠️ Error al guardar la puntuación de la película.' : '⚠️ Error saving movie rating.');
          // Revertir a valor anterior
          scoreSelect.value = AppState.userRatings[movie.id] || '';
        }
      });
    }

    // Botón Subir Orden
    const upBtn = item.querySelector('.btn-order-up');
    if (upBtn) {
      upBtn.addEventListener('click', () => {
        if (index > 0) {
          // Intercambiar elementos
          const temp = AppState.playlistOrder[index];
          AppState.playlistOrder[index] = AppState.playlistOrder[index - 1];
          AppState.playlistOrder[index - 1] = temp;
          localStorage.setItem('playlistOrder', JSON.stringify(AppState.playlistOrder));
          renderPlaylistItems();
          
          // Si estamos reproduciendo, actualizar índice para evitar saltos raros
          if (playlistPlayingIndex === index) {
            playlistPlayingIndex = index - 1;
          } else if (playlistPlayingIndex === index - 1) {
            playlistPlayingIndex = index;
          }
        }
      });
      upBtn.addEventListener('mouseenter', () => {
        upBtn.style.background = 'rgba(255,255,255,0.15)';
      });
      upBtn.addEventListener('mouseleave', () => {
        upBtn.style.background = 'rgba(255,255,255,0.06)';
      });
    }

    // Botón Bajar Orden
    const downBtn = item.querySelector('.btn-order-down');
    if (downBtn) {
      downBtn.addEventListener('click', () => {
        if (index < AppState.playlistOrder.length - 1) {
          // Intercambiar elementos
          const temp = AppState.playlistOrder[index];
          AppState.playlistOrder[index] = AppState.playlistOrder[index + 1];
          AppState.playlistOrder[index + 1] = temp;
          localStorage.setItem('playlistOrder', JSON.stringify(AppState.playlistOrder));
          renderPlaylistItems();
          
          // Si estamos reproduciendo, actualizar índice
          if (playlistPlayingIndex === index) {
            playlistPlayingIndex = index + 1;
          } else if (playlistPlayingIndex === index + 1) {
            playlistPlayingIndex = index;
          }
        }
      });
      downBtn.addEventListener('mouseenter', () => {
        downBtn.style.background = 'rgba(255,255,255,0.15)';
      });
      downBtn.addEventListener('mouseleave', () => {
        downBtn.style.background = 'rgba(255,255,255,0.06)';
      });
    }

    container.appendChild(item);
  });
}

function startPlaylistPlayback() {
  const isEs = AppState.language === 'es';
  if (AppState.playlistOrder.length === 0) {
    alert(isEs ? 'No hay películas en tu playlist.' : 'No movies in your playlist.');
    return;
  }

  const player = document.getElementById('playlist-video-player');
  if (!player) return;

  if (playlistIsPaused && playlistPlayingIndex !== -1) {
    // Reanudar
    player.play();
    playlistIsPaused = false;
    const currentMovie = MOVIES_DATA.find(m => m.id === AppState.playlistOrder[playlistPlayingIndex]);
    if (currentMovie) {
      document.getElementById('playlist-status-text').textContent = isEs
        ? `Reproduciendo: ${currentMovie.title} (${playlistPlayingIndex + 1} de ${AppState.playlistOrder.length})`
        : `Playing: ${currentMovie.title} (${playlistPlayingIndex + 1} of ${AppState.playlistOrder.length})`;
    }
  } else {
    // Iniciar desde la primera película
    playPlaylistMovie(0);
  }
}

function pausePlaylistPlayback() {
  const player = document.getElementById('playlist-video-player');
  if (player && !player.paused) {
    player.pause();
    playlistIsPaused = true;
    const isEs = AppState.language === 'es';
    const currentMovie = MOVIES_DATA.find(m => m.id === AppState.playlistOrder[playlistPlayingIndex]);
    if (currentMovie) {
      document.getElementById('playlist-status-text').textContent = isEs
        ? `Pausado: ${currentMovie.title}`
        : `Paused: ${currentMovie.title}`;
    }
  }
}

function nextPlaylistPlayback() {
  if (playlistPlayingIndex !== -1) {
    playPlaylistMovie(playlistPlayingIndex + 1);
  }
}

function playPlaylistMovie(index) {
  const isEs = AppState.language === 'es';
  const player = document.getElementById('playlist-video-player');
  const wrapper = document.getElementById('playlist-video-wrapper');
  const statusText = document.getElementById('playlist-status-text');

  if (!player || !wrapper || !statusText) return;

  if (index >= AppState.playlistOrder.length || index < 0) {
    // Finalizar reproducción
    player.pause();
    wrapper.style.display = 'none';
    statusText.textContent = isEs ? 'Reproducción terminada' : 'Playback finished';
    playlistPlayingIndex = -1;
    playlistIsPaused = false;
    return;
  }

  playlistPlayingIndex = index;
  playlistIsPaused = false;

  const movie = MOVIES_DATA.find(m => m.id === AppState.playlistOrder[index]);
  if (movie) {
    wrapper.style.display = 'block';
    player.src = movie.videoSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
    player.load();
    player.play().catch(err => console.log("Auto-play blocked, waiting for click", err));
    
    statusText.textContent = isEs
      ? `Reproduciendo: ${movie.title} (${index + 1} de ${AppState.playlistOrder.length})`
      : `Playing: ${movie.title} (${index + 1} of ${AppState.playlistOrder.length})`;

    // Avanzar automáticamente cuando termine
    player.onended = () => {
      playPlaylistMovie(index + 1);
    };
  }
}

function setupPlaylistListeners() {
  const toggleBtn = document.getElementById('toggle-playlist-mode-btn');
  const playlistContainer = document.getElementById('likes-playlist-container');
  if (toggleBtn && playlistContainer) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = playlistContainer.style.display === 'none';
      const isEs = AppState.language === 'es';
      if (isHidden) {
        playlistContainer.style.display = 'block';
        initPlaylist();
        renderPlaylistItems();
        toggleBtn.innerHTML = `<span>📋</span> <span>${isEs ? 'Ocultar Playlist' : 'Hide Playlist'}</span>`;
      } else {
        playlistContainer.style.display = 'none';
        // Pausar si se oculta
        const player = document.getElementById('playlist-video-player');
        if (player) player.pause();
        const wrapper = document.getElementById('playlist-video-wrapper');
        if (wrapper) wrapper.style.display = 'none';
        document.getElementById('playlist-status-text').textContent = isEs ? 'Reproducción detenida' : 'Playback stopped';
        playlistPlayingIndex = -1;
        playlistIsPaused = false;
        toggleBtn.innerHTML = `<span>📋</span> <span>${isEs ? 'Ver Playlist y Planificador' : 'View Playlist & Scheduler'}</span>`;
      }
    });
  }

  const playBtn = document.getElementById('playlist-play-btn');
  const pauseBtn = document.getElementById('playlist-pause-btn');
  const nextBtn = document.getElementById('playlist-next-btn');

  if (playBtn) {
    playBtn.addEventListener('click', () => startPlaylistPlayback());
  }
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => pausePlaylistPlayback());
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => nextPlaylistPlayback());
  }
}

window.initPlaylist = initPlaylist;
window.renderPlaylistItems = renderPlaylistItems;
window.startPlaylistPlayback = startPlaylistPlayback;
window.pausePlaylistPlayback = pausePlaylistPlayback;
window.nextPlaylistPlayback = nextPlaylistPlayback;
window.playPlaylistMovie = playPlaylistMovie;
window.setupPlaylistListeners = setupPlaylistListeners;

// Modal de Error de Servicio Comprensible y Reintento
function showServiceErrorModal(message, retryCallback) {
  const oldModal = document.getElementById('service-error-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'service-error-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';

  const isEs = AppState.language === 'es';

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 420px; width: 90%; background: #0f172a; padding: 28px; border-radius: var(--border-radius-lg); text-align: center; border: 2px solid #ef4444; box-shadow: 0 0 25px rgba(239, 68, 68, 0.25); animation: modalFadeIn 0.3s ease-out;">
      <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
      <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 20px; font-weight: 800; color: #ef4444;">
        ${isEs ? 'Error de Servicio' : 'Service Error'}
      </h3>
      <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 24px;">
        ${message}
      </p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="detail-btn detail-btn-primary" id="error-retry-btn" style="background: #ef4444; border-color: #ef4444; color: #fff;">
          ${isEs ? 'Reintentar' : 'Retry'}
        </button>
        <button class="detail-btn" onclick="document.getElementById('service-error-modal').remove()" style="background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); color: var(--text-secondary);">
          ${isEs ? 'Cancelar' : 'Cancel'}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const retryBtn = modal.querySelector('#error-retry-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      modal.remove();
      if (typeof retryCallback === 'function') {
        retryCallback();
      }
    });
  }
}

window.showServiceErrorModal = showServiceErrorModal;

// Autenticación con Proveedores Externos (Google y GitHub)
function loginWithExternalProvider(providerName) {
  const isEs = AppState.language === 'es';
  
  // Mostrar cargador de redirección externo simulado
  const formWrapper = document.getElementById('welcome-auth-form-wrapper');
  if (formWrapper) {
    formWrapper.innerHTML = `
      <div style="text-align: center; padding: 32px 16px;">
        <div class="pagination-spinner" style="width: 40px; height: 40px; border-width: 4px; border-top-color: var(--accent-cyan); animation: pag-spin 0.8s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 20px; font-weight: 600; color: #fff; font-size: 14px; letter-spacing: 0.5px;">
          ${isEs ? `Conectando con ${providerName}...` : `Connecting to ${providerName}...`}
        </p>
      </div>
    `;
  }
  
  setTimeout(() => {
    // Usar AuthService.loginWithProvider para centralizar
    AuthService.loginWithProvider(providerName, document.getElementById('welcome-auth-remember') ? document.getElementById('welcome-auth-remember').checked : true)
      .then(user => {
        try {
          const enteredName = user.name;
          const isEs = AppState.language === 'es';
          const profileNameEl = document.querySelector('.profile-username');
          if (profileNameEl) profileNameEl.textContent = enteredName;
          refreshHeaderAuthState();
          initUserScopedState();
          refreshProfileView();
          renderHome(); renderFavoritesCount(); renderMyListCount();
          const toast = document.createElement('div'); toast.className = 'toast-notice'; toast.textContent = isEs ? `Autenticado con éxito usando ${providerName}.` : `Authenticated successfully using ${providerName}.`; document.body.appendChild(toast); setTimeout(() => toast.remove(), 2000);
          enterPlatform(enteredName);
          if (AppState.postLoginAction && typeof AppState.postLoginAction === 'function') { try { AppState.postLoginAction(); } catch (e) { console.error(e); } AppState.postLoginAction = null; }
          if (AppState.intendedAction) { const action = AppState.intendedAction; AppState.intendedAction = null; action(); } else if (AppState.intendedTarget) { const target = AppState.intendedTarget; AppState.intendedTarget = null; switchTab(target); }
        } catch (e) {
          console.error('Error post external login:', e);
          showAuthError(isEs ? 'Error tras autenticar con el proveedor externo.' : 'Error after external provider authentication.');
        }
      })
      .catch(err => {
        console.error('External login failed:', err);
        showAuthError(isEs ? `No se pudo autenticar con ${providerName}.` : `Could not authenticate with ${providerName}.`);
      });
  }, 1200);
}

window.loginWithExternalProvider = loginWithExternalProvider;

// =================================================================
// LÓGICA DE MONÓLOGOS & TEATRO (NUEVAS SECCIONES WOM!)
// =================================================================

function renderMonologos() {
  const grid = document.getElementById('monologos-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  const isEs = AppState.language === 'es';
  
  MONOLOGISTAS_DATA.forEach(mono => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => showMonologistaDetails(mono.id));
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${mono.image}" alt="${mono.name}" class="card-img" style="height: 280px; object-fit: cover; width: 100%;">
        <div class="card-gradient"></div>
        <div class="card-rating">🎤</div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${mono.name}</h3>
        <p class="card-meta" style="color: var(--accent-cyan); font-weight: 700; font-size: 12px; margin-bottom: 6px;">${mono.style}</p>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 0;">
          ${mono.bio}
        </p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderTeatro() {
  const grid = document.getElementById('teatro-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  const isEs = AppState.language === 'es';
  
  TEATRO_DATA.forEach(co => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => showTeatroDetails(co.id));
    
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${co.image}" alt="${co.name}" class="card-img" style="height: 280px; object-fit: cover; width: 100%;">
        <div class="card-gradient"></div>
        <div class="card-rating">🎭</div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${co.name}</h3>
        <p class="card-meta" style="color: var(--accent-cyan); font-weight: 700; font-size: 12px; margin-bottom: 6px;">${co.specialty}</p>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 0;">
          ${co.description}
        </p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function showMonologistaDetails(id) {
  const mono = MONOLOGISTAS_DATA.find(m => m.id === id);
  if (!mono) return;
  
  const isEs = AppState.language === 'es';
  const modal = document.getElementById('show-details-modal');
  const content = document.getElementById('show-details-content');
  if (!modal || !content) return;
  
  let showsHTML = '';
  mono.shows.forEach(show => {
    showsHTML += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 16px; border-radius: var(--border-radius-md); margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
          <h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #fff;">${show.title}</h4>
          <span style="font-size: 11px; background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan); padding: 2px 8px; border-radius: 4px; font-weight: bold;">${show.time}</span>
        </div>
        <p style="margin: 0; font-size: 12px; color: var(--text-secondary); line-height: 1.4;">${show.desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; flex-wrap: wrap; gap: 8px; font-size: 11px; color: var(--accent-cyan); font-weight: 600;">
          <span>📅 ${show.date}</span>
          <span>📍 ${show.place}</span>
        </div>
        <button class="detail-btn detail-btn-primary" style="margin-top: 10px; width: 100%; padding: 8px; font-size: 12px;" onclick="buyTicketAction('${show.title.replace(/'/g, "\\'")}', '${show.date}')">
          ${isEs ? '🎫 Comprar Entrada' : '🎫 Buy Ticket'}
        </button>
      </div>
    `;
  });
  
  content.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap;">
      <img src="${mono.image}" alt="${mono.name}" style="width: 140px; height: 180px; object-fit: cover; border-radius: var(--border-radius-md); border: 1px solid rgba(255,255,255,0.1);">
      <div style="flex: 1; min-width: 200px;">
        <h3 style="margin-top: 0; margin-bottom: 4px; font-size: 22px; font-weight: 800; color: #fff;">${mono.name}</h3>
        <span style="font-size: 12px; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${mono.style}</span>
        <p style="margin-top: 12px; margin-bottom: 0; font-size: 13px; color: var(--text-secondary); line-height: 1.5;">${mono.bio}</p>
      </div>
    </div>
    
    <h4 style="font-size: 14px; font-weight: 800; text-transform: uppercase; color: #fff; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; margin-bottom: 16px;">
      ${isEs ? 'Próximas Sesiones / Eventos' : 'Upcoming Sessions / Events'}
    </h4>
    
    <div style="display: flex; flex-direction: column;">
      ${showsHTML}
    </div>
  `;
  
  modal.style.display = 'flex';
}

function showTeatroDetails(id) {
  const co = TEATRO_DATA.find(c => c.id === id);
  if (!co) return;
  
  const isEs = AppState.language === 'es';
  const modal = document.getElementById('show-details-modal');
  const content = document.getElementById('show-details-content');
  if (!modal || !content) return;
  
  let showsHTML = '';
  co.shows.forEach(show => {
    showsHTML += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 16px; border-radius: var(--border-radius-md); margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
          <h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #fff;">${show.title}</h4>
          <span style="font-size: 11px; background: rgba(6, 182, 212, 0.1); color: var(--accent-cyan); padding: 2px 8px; border-radius: 4px; font-weight: bold;">${show.time}</span>
        </div>
        <p style="margin: 0; font-size: 12px; color: var(--text-secondary); line-height: 1.4;">${show.desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; flex-wrap: wrap; gap: 8px; font-size: 11px; color: var(--accent-cyan); font-weight: 600;">
          <span>📅 ${show.date}</span>
          <span>📍 ${show.place}</span>
        </div>
        <button class="detail-btn detail-btn-primary" style="margin-top: 10px; width: 100%; padding: 8px; font-size: 12px;" onclick="buyTicketAction('${show.title.replace(/'/g, "\\'")}', '${show.date}')">
          ${isEs ? '🎫 Comprar Entrada' : '🎫 Buy Ticket'}
        </button>
      </div>
    `;
  });
  
  content.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap;">
      <img src="${co.image}" alt="${co.name}" style="width: 140px; height: 180px; object-fit: cover; border-radius: var(--border-radius-md); border: 1px solid rgba(255,255,255,0.1);">
      <div style="flex: 1; min-width: 200px;">
        <h3 style="margin-top: 0; margin-bottom: 4px; font-size: 22px; font-weight: 800; color: #fff;">${co.name}</h3>
        <span style="font-size: 12px; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${co.specialty}</span>
        <p style="margin-top: 12px; margin-bottom: 0; font-size: 13px; color: var(--text-secondary); line-height: 1.5;">${co.description}</p>
      </div>
    </div>
    
    <h4 style="font-size: 14px; font-weight: 800; text-transform: uppercase; color: #fff; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; margin-bottom: 16px;">
      ${isEs ? 'Próximas Funciones / Obras' : 'Upcoming Plays / Shows'}
    </h4>
    
    <div style="display: flex; flex-direction: column;">
      ${showsHTML}
    </div>
  `;
  
  modal.style.display = 'flex';
}

// Acción de Compra de Entrada con Protección de Ruta / Autenticación
function buyTicketAction(showTitle, showDate) {
  const isEs = AppState.language === 'es';
  
  if (!AppState.user) {
    // Guardar la acción como acción pendiente tras autenticación
    AppState.intendedAction = () => {
      buyTicketAction(showTitle, showDate);
    };
    
    // Solicitar autenticación
    const welcome = document.getElementById('welcome-screen');
    if (welcome) {
      welcome.classList.remove('fade-out');
      welcome.style.display = 'flex';
      
      currentAuthMode = 'login';
      const buttonsContainer = document.getElementById('welcome-auth-buttons');
      const formWrapper = document.getElementById('welcome-auth-form-wrapper');
      if (buttonsContainer) buttonsContainer.style.display = 'none';
      if (formWrapper) formWrapper.style.display = 'block';
      updateWelcomeAuthUI();
      
      alert(isEs 
        ? 'Por favor, inicia sesión o regístrate para comprar las entradas de forma segura.' 
        : 'Please log in or sign up to buy tickets securely.');
    }
    
    // Ocultar modal de detalles temporalmente
    const modal = document.getElementById('show-details-modal');
    if (modal) modal.style.display = 'none';
    return;
  }
  
  // Si está autenticado, redirigir al link de compra
  const mockLink = `https://wom-entradas.com/checkout?show=${encodeURIComponent(showTitle)}&date=${showDate}&user=${encodeURIComponent(AppState.user.name)}`;
  
  const confirmMsg = isEs
    ? `¿Deseas abrir la pasarela de pago para comprar entradas de "${showTitle}" del día ${showDate}?`
    : `Would you like to open the payment gateway to buy tickets for "${showTitle}" on ${showDate}?`;
    
  if (confirm(confirmMsg)) {
    window.open(mockLink, '_blank');
  }
}

window.renderMonologos = renderMonologos;
window.renderTeatro = renderTeatro;
window.showMonologistaDetails = showMonologistaDetails;
window.showTeatroDetails = showTeatroDetails;
window.buyTicketAction = buyTicketAction;
window.handleLogout = handleLogout;

function getUserRating(movieId) {
  return (AppState.userRatings && AppState.userRatings[movieId] !== undefined) ? AppState.userRatings[movieId] : null;
}

function enterPlatform(name) {
  const welcome = document.getElementById('welcome-screen');
  if (welcome) {
    welcome.style.display = 'none';
  }
}

window.getUserRating = getUserRating;
window.enterPlatform = enterPlatform;

// ======== PROFILE AUTH ========
function setupProfileAuth() {
  const form = document.getElementById('profile-auth-form');
  const toggleLink = document.getElementById('profile-toggle-auth-link');
  const nameGroup = document.getElementById('profile-name-group');
  const submitBtn = document.getElementById('profile-submit-btn');
  const authTitle = document.getElementById('profile-auth-title');
  const authSubtitle = document.getElementById('profile-auth-subtitle');
  const logoutBtn = document.getElementById('profile-logout-btn');
  
  let mode = 'login';
  
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      const isEs = AppState.language === 'es';
      if (mode === 'login') {
        mode = 'register';
        nameGroup.style.display = 'block';
        submitBtn.textContent = isEs ? 'Registrarse' : 'Sign Up';
        authTitle.textContent = isEs ? 'Crear una cuenta' : 'Create an Account';
        authSubtitle.textContent = isEs ? 'Regístrate para guardar películas' : 'Sign up to save movies';
        toggleLink.textContent = isEs ? 'Inicia sesión' : 'Log in';
        toggleLink.parentElement.childNodes[0].nodeValue = isEs ? '¿Ya tienes una cuenta? ' : 'Already have an account? ';
      } else {
        mode = 'login';
        nameGroup.style.display = 'none';
        submitBtn.textContent = isEs ? 'Iniciar Sesión' : 'Log In';
        authTitle.textContent = isEs ? 'Bienvenido' : 'Welcome';
        authSubtitle.textContent = isEs ? 'Accede a tu biblioteca' : 'Access your library';
        toggleLink.textContent = isEs ? 'Regístrate Ahora' : 'Register Now';
        toggleLink.parentElement.childNodes[0].nodeValue = isEs ? '¿No tienes una cuenta? ' : 'Don\'t have an account? ';
      }
    });
  }
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isEs = AppState.language === 'es';
      const email = document.getElementById('profile-email').value;
      const password = document.getElementById('profile-password').value;
      
      try {
        if (mode === 'register') {
          const name = document.getElementById('profile-name').value;
          if (!name) return alert(isEs ? 'El nombre es obligatorio' : 'Name is required');
          await AuthService.register({ name, email, password });
          alert(isEs ? '¡Registro completado!' : 'Registration successful!');
        } else {
          await AuthService.login({ email, password });
        }
        if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI();
        refreshHeaderAuthState();
      } catch (err) {
        alert((isEs ? 'Error: ' : 'Error: ') + (err.message === 'email_exists' ? (isEs ? 'El correo ya existe' : 'Email already exists') : (err.message === 'invalid_credentials' ? (isEs ? 'Credenciales incorrectas' : 'Invalid credentials') : err.message)));
      }
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (AuthService.logout) AuthService.logout();
      if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI();
      refreshHeaderAuthState();
    });
  }
}

window.refreshProfileUI = function() {
  const profileAuthContainer = document.getElementById('profile-auth-container');
  const profileLoggedInContainer = document.getElementById('profile-logged-in-container');
  const profileUsername = document.querySelector('.profile-username');
  
  if (AppState.user) {
    if (profileAuthContainer) profileAuthContainer.style.display = 'none';
    if (profileLoggedInContainer) profileLoggedInContainer.style.display = 'block';
    if (profileUsername) profileUsername.textContent = AppState.user.name || AppState.user.email;
  } else {
    if (profileAuthContainer) profileAuthContainer.style.display = 'block';
    if (profileLoggedInContainer) profileLoggedInContainer.style.display = 'none';
    if (profileUsername) profileUsername.textContent = 'Invitado';
  }
};

// Call setup once
document.addEventListener('DOMContentLoaded', () => {
  setupProfileAuth();
  setTimeout(() => { if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI(); }, 100);
});

// ======== CUSTOM LISTS ========
window.loadWomLists = function() {
  if (AppState.user) {
    const saved = localStorage.getItem('womLists_' + AppState.user.email);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        AppState.womLists = parsed;
      } else {
        // Migrate old object format
        AppState.womLists = [
          { id: 'wom_songs', name: 'Lista de Canciones', items: parsed.canciones || [] },
          { id: 'wom_series', name: 'Lista de Series', items: parsed.series || [] },
          { id: 'wom_books', name: 'Lista de Libros', items: parsed.libros || [] },
          { id: 'wom_plans', name: 'Mis Planes', items: parsed.eventos || [] }
        ];
      }
    } else {
      AppState.womLists = [
        { id: 'wom_songs', name: 'Lista de Canciones', items: [] },
        { id: 'wom_series', name: 'Lista de Series', items: [] },
        { id: 'wom_books', name: 'Lista de Libros', items: [] },
        { id: 'wom_plans', name: 'Mis Planes', items: [] }
      ];
    }
  } else {
    AppState.womLists = [
      { id: 'wom_songs', name: 'Lista de Canciones', items: [] },
      { id: 'wom_series', name: 'Lista de Series', items: [] },
      { id: 'wom_books', name: 'Lista de Libros', items: [] },
      { id: 'wom_plans', name: 'Mis Planes', items: [] }
    ];
  }
};

window.saveWomLists = function() {
  if (AppState.user) {
    localStorage.setItem('womLists_' + AppState.user.email, JSON.stringify(AppState.womLists));
  } else {
    localStorage.setItem('womLists_guest', JSON.stringify(AppState.womLists));
  }
};

window.loadCustomLists = function() {
  if (AppState.user) {
    const saved = localStorage.getItem('customLists_' + AppState.user.email);
    if (saved) {
      AppState.customLists = JSON.parse(saved);
    } else {
      AppState.customLists = [{ id: 'default', name: AppState.language === 'es' ? 'Mi Lista' : 'My List', movies: AppState.myListMovies || [] }];
    }
  } else {
    AppState.customLists = [{ id: 'default', name: AppState.language === 'es' ? 'Mi Lista' : 'My List', movies: AppState.myListMovies || [] }];
  }
  
  // Migrar listas antiguas de WOM a customLists
  const oldWomLists = localStorage.getItem('wom_lists');
  if (oldWomLists) {
    try {
      const womData = JSON.parse(oldWomLists);
      if (Array.isArray(womData)) {
        womData.forEach(wList => {
          if (!AppState.customLists.find(c => c.id === wList.id)) {
            AppState.customLists.push({
              id: wList.id,
              name: wList.name,
              movies: wList.items || [] // Convertimos de items a movies
            });
          }
        });
      }
      localStorage.removeItem('wom_lists'); // Borrar para evitar doble migración
      window.saveCustomLists();
    } catch(e) {
      console.error("Error migrating wom_lists", e);
    }
  }
};

window.saveCustomLists = function() {
  if (AppState.user) {
    localStorage.setItem('customLists_' + AppState.user.email, JSON.stringify(AppState.customLists));
  } else {
    localStorage.setItem('customLists_guest', JSON.stringify(AppState.customLists));
  }
  
  // Sync default list back to myListMovies
  const defaultList = AppState.customLists.find(l => l.id === 'default');
  if (defaultList) {
    AppState.myListMovies = defaultList.movies;
    localStorage.setItem('myListMovies', JSON.stringify(AppState.myListMovies));
    if (typeof renderMyListCount === 'function') renderMyListCount();
  }
};

window.openAddToListModal = function(movieId) {
  const modal = document.getElementById('list-selection-modal');
  const container = document.getElementById('list-selection-container');
  if (!modal || !container) return;
  
  if (!AppState.user) {
    alert(AppState.language === 'es' ? 'Regístrate o inicia sesión para usar listas personalizadas.' : 'Sign in to use custom lists.');
    openRegister();
    return;
  }
  
  window.loadCustomLists();
  container.innerHTML = '';
  
  AppState.customLists.forEach(list => {
    const isChecked = list.movies.includes(movieId);
    const row = document.createElement('label');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '12px';
    row.style.padding = '10px';
    row.style.background = 'rgba(255,255,255,0.05)';
    row.style.borderRadius = '8px';
    row.style.cursor = 'pointer';
    row.style.border = '1px solid rgba(255,255,255,0.1)';
    row.style.transition = 'background 0.2s';
    row.onmouseover = () => row.style.background = 'rgba(255,255,255,0.1)';
    row.onmouseout = () => row.style.background = 'rgba(255,255,255,0.05)';
    
    row.innerHTML = `
      <input type="checkbox" style="width: 18px; height: 18px;" ${isChecked ? 'checked' : ''}>
      <span style="color: #fff; font-size: 15px;">${list.name}</span>
    `;
    
    row.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        if (!list.movies.includes(movieId)) list.movies.push(movieId);
      } else {
        list.movies = list.movies.filter(id => id !== movieId);
      }
      window.saveCustomLists();
    });
    
    container.appendChild(row);
  });
  
  modal.style.display = 'flex';
};

// Sobrescribir renderMyList
window.renderMyList = function() {
  if (typeof renderMyListCount === 'function') renderMyListCount();
  
  const container = document.getElementById('custom-lists-container');
  const emptyState = document.getElementById('mylist-empty-state');
  if (!container) {
    if (typeof renderMyListGrid === 'function') renderMyListGrid();
    return;
  }
  
  window.loadCustomLists();
  container.innerHTML = '';
  
  if (!AppState.customLists || AppState.customLists.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    return;
  } else {
    if (emptyState) emptyState.style.display = 'none';
  }
  
  AppState.customLists.forEach(list => {
    const listSection = document.createElement('div');
    listSection.style.marginBottom = '32px';
    
    const listHeader = document.createElement('div');
    listHeader.style.display = 'flex';
    listHeader.style.justifyContent = 'space-between';
    listHeader.style.alignItems = 'center';
    listHeader.style.marginBottom = '12px';
    listHeader.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    listHeader.style.paddingBottom = '8px';
    
    listHeader.innerHTML = `
      <h3 style="font-size: 20px; color: #fff; margin: 0;">${list.name} <span style="font-size: 14px; color: #94a3b8; font-weight: normal;">(${list.movies.length})</span></h3>
      ${list.id !== 'default' ? `<button class="delete-list-btn" style="background: transparent; color: #ef4444; border: none; cursor: pointer; font-size: 14px;">${AppState.language === 'es' ? 'Eliminar' : 'Delete'}</button>` : ''}
    `;
    
    if (list.id !== 'default') {
      listHeader.querySelector('.delete-list-btn').onclick = () => {
        if (confirm(AppState.language === 'es' ? `¿Seguro que deseas eliminar la lista "${list.name}"?` : `Are you sure you want to delete "${list.name}"?`)) {
          AppState.customLists = AppState.customLists.filter(l => l.id !== list.id);
          window.saveCustomLists();
          window.renderMyList();
        }
      };
    }
    
    listSection.appendChild(listHeader);
    
    if (list.movies.length === 0) {
      const moviesGrid = document.createElement('div');
      moviesGrid.className = 'movies-grid';
      moviesGrid.innerHTML = `<p style="color: #94a3b8; font-size: 14px; grid-column: 1 / -1;">${AppState.language === 'es' ? 'Esta lista está vacía.' : 'This list is empty.'}</p>`;
      listSection.appendChild(moviesGrid);
    } else {
      // Agrupar los elementos por categoría
      const categories = {};
      list.movies.forEach(movieId => {
        let item = typeof window.findGlobalItemById === 'function' ? window.findGlobalItemById(movieId) : null;
        if (!item && typeof MOVIES_DATA !== 'undefined') item = MOVIES_DATA.find(m => m.id === movieId);
        if (!item && typeof SERIES_DATA !== 'undefined') item = SERIES_DATA.find(m => m.id === movieId);
        
        if (item) {
          const cat = item.category_type || (item.genre ? 'Películas' : 'Otros');
          if (!categories[cat]) categories[cat] = [];
          categories[cat].push(item);
        }
      });
      
      const cats = Object.keys(categories);
      cats.forEach(cat => {
        const catSection = document.createElement('div');
        catSection.style.marginBottom = '20px';
        
        const catTitle = document.createElement('h4');
        catTitle.textContent = cat;
        catTitle.style.color = '#ccc';
        catTitle.style.fontSize = '16px';
        catTitle.style.marginBottom = '10px';
        catTitle.style.textTransform = 'capitalize';
        catTitle.style.borderBottom = '1px solid #333';
        catTitle.style.paddingBottom = '5px';
        catSection.appendChild(catTitle);
        
        const catGrid = document.createElement('div');
        catGrid.className = 'movies-grid';
        
        categories[cat].forEach(item => {
          const card = document.createElement('div');
          card.className = 'movie-card';
          card.style.cursor = 'pointer';
          card.onclick = () => window.openWomDetailsModal ? window.openWomDetailsModal(item.movie_identifier || item.id) : null;
          card.setAttribute('data-id', item.movie_identifier || item.id);
          
          let fallbackText = item.display_name || item.title || '';
          let fallbackSub1 = item.release_year || item.date || item.runtime_minutes || '';
          let fallbackSub2 = (item.filmmaker && item.filmmaker.director_name) ? item.filmmaker.director_name : (item.location || '');
          let finalFallbackText = fallbackText;
          if (fallbackSub1 && fallbackSub1 !== 'Por confirmar' && fallbackSub1 !== 'Por definir') finalFallbackText += '\n' + fallbackSub1;
          if (fallbackSub2) finalFallbackText += '\n' + fallbackSub2;
          
          let fallbackImg = `https://placehold.co/600x900/1e1e2f/ffffff?text=${encodeURIComponent(finalFallbackText)}`;
          let imgUrl = item.cover_image_url || item.image || fallbackImg;
    
          let isLiked = window.isItemLiked(item.movie_identifier || item.id);
          let heartFill = isLiked ? '#ef4444' : 'none';
          let heartStroke = isLiked ? '#ef4444' : 'white';
          
          card.innerHTML = `
            <div class="card-image-wrapper">
              <img src="${imgUrl}" alt="${item.display_name || item.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'">
              <div class="card-overlay">
                <button class="card-like-btn" title="Me gusta" onclick="if(typeof toggleWomLike==='function'){toggleWomLike('${item.movie_identifier || item.id}', this);} event.stopPropagation(); if(typeof window.renderMyList==='function'){window.renderMyList();}" style="background: rgba(0,0,0,0.6); border-radius: 50%; padding: 8px;">
                  <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="${heartStroke}" stroke-width="2" style="width: 20px; height: 20px;">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">${item.display_name || item.title}</h3>
              <div class="card-info">
                <span>${item.release_year || item.year || ''}</span>
                <span>${item.category_type || item.genre || ''}</span>
              </div>
              <button onclick="if(typeof window.openWomPlaylistModal==='function') window.openWomPlaylistModal('${item.movie_identifier || item.id}'); event.stopPropagation();" style="background: var(--accent-purple); color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">+ Añadir a mi lista</button>
              <button onclick="
                const currentList = AppState.customLists.find(l => l.id === '${list.id}');
                if (currentList) {
                  currentList.movies = currentList.movies.filter(id => Number(id) !== Number('${item.movie_identifier || item.id}'));
                  window.saveCustomLists();
                  window.renderMyList();
                }
                event.stopPropagation();
              " style="background: #e74c3c; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">${AppState.language === 'es' ? 'Eliminar de esta lista' : 'Remove'}</button>
            </div>
          `;
          catGrid.appendChild(card);
        });
        
        catSection.appendChild(catGrid);
        listSection.appendChild(catSection);
      });
    }
    container.appendChild(listSection);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const createListBtn = document.getElementById('create-custom-list-btn');
  if (createListBtn) {
    createListBtn.onclick = () => {
      if (!AppState.user) {
        alert(AppState.language === 'es' ? 'Regístrate o inicia sesión para crear listas personalizadas.' : 'Sign in to create custom lists.');
        openRegister();
        return;
      }
      const name = prompt(AppState.language === 'es' ? 'Nombre de la nueva lista:' : 'New list name:');
      if (name && name.trim()) {
        window.loadCustomLists();
        AppState.customLists.push({ id: 'list_' + Date.now(), name: name.trim(), movies: [] });
        window.saveCustomLists();
        window.renderMyList();
      }
    };
  }
});

function findGlobalItemById(id) {
  const allArrays = [
    typeof MOVIES_DATA !== 'undefined' ? MOVIES_DATA : [],
    typeof SERIES_DATA !== 'undefined' ? SERIES_DATA : [],
    typeof MUSIC_DATA !== 'undefined' ? MUSIC_DATA : [],
    typeof THEATER_DATA !== 'undefined' ? THEATER_DATA : [],
    typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : [],
    typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : [],
    typeof EXTERNAL_PLANS_DATA !== 'undefined' ? EXTERNAL_PLANS_DATA : [],
    typeof QUEDADAS_DATA !== 'undefined' ? QUEDADAS_DATA : [],
    typeof CONCERTS_DATA !== 'undefined' ? CONCERTS_DATA : [],
    typeof MONOLOGUES_DATA !== 'undefined' ? MONOLOGUES_DATA : []
  ];
  let customItems = [];
  try {
    const saved = localStorage.getItem('wom_custom_items');
    if(saved) customItems = JSON.parse(saved);
  } catch(e) {}
  allArrays.push(customItems);

  for (let arr of allArrays) {
    const found = arr.find(item => Number(item.id || item.movie_identifier) === Number(id));
    if (found) return found;
  }
  return null;
}

window.moveItemInPlaylist = function(playlistId, index, direction) {
  const pl = AppState.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  if (direction === -1 && index > 0) {
    const temp = pl.items[index];
    pl.items[index] = pl.items[index - 1];
    pl.items[index - 1] = temp;
  } else if (direction === 1 && index < pl.items.length - 1) {
    const temp = pl.items[index];
    pl.items[index] = pl.items[index + 1];
    pl.items[index + 1] = temp;
  }
  
  if (pl.id === 'default') {
    AppState.myListMovies = pl.items;
    if(typeof saveMyList === 'function') saveMyList();
  }
  localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
  renderMyListGrid();
};

window.removeItemFromPlaylistList = function(playlistId, index) {
  const pl = AppState.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  pl.items.splice(index, 1);
  if (pl.id === 'default') {
    AppState.myListMovies = pl.items;
    if(typeof saveMyList === 'function') saveMyList();
  }
  localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
  renderMyListGrid();
};

function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  const headerActions = document.getElementById('playlist-header-actions');
  if (!grid) return;

  grid.innerHTML = '';
  grid.style.display = 'block'; 
  
  if (headerActions) headerActions.style.display = 'none';
  if (emptyState) emptyState.style.display = 'none';

  let hasItems = false;

  AppState.playlists.forEach(pl => {
    if (pl.items && pl.items.length > 0) {
      hasItems = true;
      const plSection = document.createElement('div');
      plSection.style.marginBottom = '30px';
      
      const plTitle = document.createElement('h3');
      plTitle.textContent = pl.name;
      plTitle.style.color = 'white';
      plTitle.style.borderBottom = '1px solid #333';
      plTitle.style.paddingBottom = '10px';
      plSection.appendChild(plTitle);

      const listContainer = document.createElement('div');
      listContainer.style.display = 'flex';
      listContainer.style.flexDirection = 'column';
      listContainer.style.gap = '10px';

      pl.items.forEach((itemId, idx) => {
        const itemObj = findGlobalItemById(itemId);
        if (!itemObj) return;

        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.background = '#2a2a3c';
        row.style.padding = '10px';
        row.style.borderRadius = '8px';
        row.style.justifyContent = 'space-between';

        const leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.style.gap = '15px';

        const thumbUrl = itemObj.cover_image_url || itemObj.backdrop || itemObj.poster || 'https://via.placeholder.com/48x48?text=No+Image';
        const img = document.createElement('img');
        img.src = thumbUrl;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        
        const info = document.createElement('div');
        const tSpan = document.createElement('div');
        tSpan.textContent = itemObj.display_name || itemObj.title;
        tSpan.style.color = 'white';
        tSpan.style.fontWeight = 'bold';
        
        const subSpan = document.createElement('div');
        subSpan.textContent = itemObj.category_type || itemObj.genre || 'Desconocido';
        subSpan.style.color = '#888';
        subSpan.style.fontSize = '12px';
        
        info.appendChild(tSpan);
        info.appendChild(subSpan);
        
        leftSide.appendChild(img);
        leftSide.appendChild(info);

        const actions = document.createElement('div');
        actions.style.display = 'flex';
        actions.style.gap = '10px';

        const upBtn = document.createElement('button');
        upBtn.innerHTML = '⬆️';
        upBtn.style.background = 'transparent';
        upBtn.style.border = 'none';
        upBtn.style.cursor = idx > 0 ? 'pointer' : 'default';
        upBtn.style.opacity = idx > 0 ? '1' : '0.3';
        upBtn.onclick = () => moveItemInPlaylist(pl.id, idx, -1);

        const downBtn = document.createElement('button');
        downBtn.innerHTML = '⬇️';
        downBtn.style.background = 'transparent';
        downBtn.style.border = 'none';
        downBtn.style.cursor = idx < pl.items.length - 1 ? 'pointer' : 'default';
        downBtn.style.opacity = idx < pl.items.length - 1 ? '1' : '0.3';
        downBtn.onclick = () => moveItemInPlaylist(pl.id, idx, 1);

        const delBtn = document.createElement('button');
        delBtn.innerHTML = '✕';
        delBtn.style.background = 'transparent';
        delBtn.style.color = 'white';
        delBtn.style.border = 'none';
        delBtn.style.cursor = 'pointer';
        delBtn.onclick = () => removeItemFromPlaylistList(pl.id, idx);

        actions.appendChild(upBtn);
        actions.appendChild(downBtn);
        actions.appendChild(delBtn);

        row.appendChild(leftSide);
        row.appendChild(actions);

        listContainer.appendChild(row);
      });

      plSection.appendChild(listContainer);
      grid.appendChild(plSection);
    }
  });

  if (!hasItems) {
    if (emptyState) emptyState.style.display = 'block';
  }
}
