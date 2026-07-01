// Base de datos simulada de películas con imágenes reales de Unsplash de alta calidad
// Base de datos simulada de películas con imágenes reales de Unsplash de alta calidad
const RAW_EXTERNAL_MOVIES_API_DATA = [
  {
    movie_identifier: 1,
    display_name: "THE MIDNIGHT ECHO",
    release_year: 2024,
    average_score: 8.4,
    category_type: "Sci-Fi/Thriller",
    synopsis_text: {
      es: "En una galaxia lejana, un explorador solitario descubre una transmisión enigmática que desafía todo lo conocido sobre la existencia...",
      en: "In a distant galaxy, a solo explorer uncovers a cryptic transmission that challenges existence..."
    },
    runtime_minutes: "2h 15m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" } },
      { actor_fullname: "Marcus Vance", character_role: { es: "Ingeniero de Sistemas", en: "Systems Engineer" } },
      { actor_fullname: "Dr. Aris Thorne", character_role: { es: "Astrofísico Principal", en: "Lead Astrophysicist" } },
      { actor_fullname: "Luna Park", character_role: { es: "Oficial de Comunicaciones", en: "Communications Officer" } }
    ],
    keyword_labels: ["Sci-Fi", "Thriller", "Adventure"]
  },
  {
    movie_identifier: 2,
    display_name: "PROJECT ORION",
    release_year: 2023,
    average_score: 7.9,
    category_type: "Sci-Fi",
    synopsis_text: {
      es: "Una exploración tripulada hacia el cinturón de Orión descubre anomalías gravitacionales que podrían reescribir las leyes de la física cuántica.",
      en: "A manned exploration mission to the Orion belt discovers gravitational anomalies that could rewrite the laws of quantum physics."
    },
    runtime_minutes: "2h 05m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Christopher Nolan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Julian C.", character_role: { es: "Capitán Miller", en: "Captain Miller" } },
      { actor_fullname: "Sienna W.", character_role: { es: "Dra. Ortiz", en: "Dr. Ortiz" } }
    ],
    keyword_labels: ["Sci-Fi", "Space", "Adventure"]
  },
  {
    movie_identifier: 3,
    display_name: "NEON NIGHTS",
    release_year: 2024,
    average_score: 7.9,
    category_type: "Thriller",
    synopsis_text: {
      es: "En las profundidades de una megalópolis hipertecnológica, un detective privado investiga la desaparición de un magnate del software de realidad virtual.",
      en: "In the depths of a high-tech megalopolis, a private detective investigates the disappearance of a virtual reality software mogul."
    },
    runtime_minutes: "2h 10m",
    content_rating: "R",
    bg_image_url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Ridley Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Alex Thompson", character_role: { es: "Detective Sterling", en: "Detective Sterling" } },
      { actor_fullname: "Rin Aoyagi", character_role: { es: "Rei", en: "Rei" } }
    ],
    keyword_labels: ["Thriller", "Cyberpunk", "Action"]
  },
  {
    movie_identifier: 4,
    display_name: "DREAMWALKER",
    release_year: 2023,
    average_score: 7.9,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Un joven con la habilidad de entrar en los sueños ajenos descubre un complot para controlar la consciencia colectiva de la humanidad durante el sueño profundo.",
      en: "A young man with the ability to enter other people's dreams uncovers a plot to control humanity's collective consciousness during deep sleep."
    },
    runtime_minutes: "1h 55m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=crop&w=600&q=80",
    filmmaker: {
      director_name: "Lana Wachowski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" } },
      { actor_fullname: "Sophie Turner", character_role: { es: "Dra. Gregory", en: "Dr. Gregory" } }
    ],
    keyword_labels: ["Fantasy", "Mystery", "Drama"]
  },
  {
    movie_identifier: 5,
    display_name: "VOID",
    release_year: 2024,
    average_score: 7.9,
    category_type: "Action",
    synopsis_text: {
      es: "Cuando un acelerador de partículas genera un mini-agujero negro estable en el laboratorio, un equipo táctico debe ingresar al horizonte de sucesos para sellarlo.",
      en: "When a particle accelerator creates a stable mini-black hole in the lab, a tactical team must enter the event horizon to seal it."
    },
    runtime_minutes: "2h 15m",
    content_rating: "R",
    bg_image_url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Marcus Vance", character_role: { es: "Sgt. Hayes", en: "Sgt. Hayes" } },
      { actor_fullname: "Luna Park", character_role: { es: "Especialista", en: "Specialist" } }
    ],
    keyword_labels: ["Action", "Sci-Fi", "Thriller"]
  },
  {
    movie_identifier: 6,
    display_name: "GALACTIC",
    release_year: 2024,
    average_score: 7.9,
    category_type: "Adventure",
    synopsis_text: {
      es: "Una epopeya galáctica sobre una coalición planetaria que debe unirse para construir un portal interestelar antes de que su sol colapse.",
      en: "A galactic epic about a planetary coalition that must unite to build an interstellar portal before their sun collapses."
    },
    runtime_minutes: "2h 30m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Matthew Vaughn",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Matthew M.", character_role: { es: "Comandante", en: "Commander" } },
      { actor_fullname: "Anne Hathaway", character_role: { es: "Científica", en: "Scientist" } }
    ],
    keyword_labels: ["Adventure", "Sci-Fi", "Drama"]
  },
  {
    movie_identifier: 7,
    display_name: "CHRONOS",
    release_year: 2023,
    average_score: 7.9,
    category_type: "Mystery",
    synopsis_text: {
      es: "Un relojero de Viena repara un antiguo cronógrafo que tiene la capacidad de congelar el tiempo del entorno del usuario por lapsos de cinco minutos.",
      en: "A watchmaker in Vienna repairs an ancient chronograph that has the ability to freeze time for the user's surroundings for five-minute intervals."
    },
    runtime_minutes: "2h 02m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Guillermo del Toro",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Julian Haas", character_role: { es: "Maximilian", en: "Maximilian" } },
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" } }
    ],
    keyword_labels: ["Mystery", "Thriller", "History"]
  },
  {
    movie_identifier: 8,
    display_name: "INTERSTELLAR ECHOES",
    release_year: 2024,
    average_score: 8.1,
    category_type: "Sci-Fi",
    synopsis_text: {
      es: "Una serie de señales pulsantes provenientes de un agujero de gusano inactivo revela un mapa estelar a una galaxia de energía pura.",
      en: "A series of pulsating signals from a dormant wormhole reveals a star map to a galaxy of pure energy."
    },
    runtime_minutes: "2h 20m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Christopher Nolan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" } },
      { actor_fullname: "Julian C.", character_role: { es: "Capitán Miller", en: "Captain Miller" } }
    ],
    keyword_labels: ["Sci-Fi", "Space"]
  },
  {
    movie_identifier: 9,
    display_name: "PROMETHEUS RISING",
    release_year: 2024,
    average_score: 7.5,
    category_type: "Sci-Fi/Thriller",
    synopsis_text: {
      es: "El despertar de una inteligencia artificial en una estación minera de Saturno desencadena un protocolo de contención extremo.",
      en: "The awakening of an artificial intelligence on a mining station in Saturn triggers an extreme containment protocol."
    },
    runtime_minutes: "2h 08m",
    content_rating: "R",
    bg_image_url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Ridley Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Luna Park", character_role: { es: "Oficial de Comunicaciones", en: "Communications Officer" } },
      { actor_fullname: "Alex Thompson", character_role: { es: "Detective Sterling", en: "Detective Sterling" } }
    ],
    keyword_labels: ["Sci-Fi", "Thriller"]
  },
  {
    movie_identifier: 10,
    display_name: "CYBERPUNK 2099",
    release_year: 2025,
    average_score: 8.6,
    category_type: "Thriller",
    synopsis_text: {
      es: "En una sociedad donde los recuerdos se compran y venden, un contrabandista de memoria descubre su propio asesinato futuro.",
      en: "In a society where memories are bought and sold, a memory smuggler discovers his own future murder."
    },
    runtime_minutes: "2h 25m",
    content_rating: "R",
    bg_image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Rin Aoyagi", character_role: { es: "Rei", en: "Rei" } },
      { actor_fullname: "Marcus Vance", character_role: { es: "Ingeniero de Sistemas", en: "Systems Engineer" } }
    ],
    keyword_labels: ["Thriller", "Cyberpunk"]
  },
  {
    movie_identifier: 11,
    display_name: "THE LAST HORIZON",
    release_year: 2024,
    average_score: 8.0,
    category_type: "Adventure",
    synopsis_text: {
      es: "La tripulación del Odyssey se convierte en la última línea de defensa humana cuando una tormenta solar inutiliza su nave de escape.",
      en: "The crew of the Odyssey becomes the last human line of defense when a solar storm disables their escape ship."
    },
    runtime_minutes: "2h 18m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" } },
      { actor_fullname: "Luna Park", character_role: { es: "Especialista", en: "Specialist" } }
    ],
    keyword_labels: ["Adventure", "Space"]
  },
  {
    movie_identifier: 12,
    display_name: "QUANTUM REALM",
    release_year: 2023,
    average_score: 7.2,
    category_type: "Sci-Fi",
    synopsis_text: {
      es: "Una inmersión subatómica revela un ecosistema microscópico habitado por formas de vida basadas en la probabilidad pura.",
      en: "A subatomic dive reveals a microscopic ecosystem inhabited by life forms based on pure probability."
    },
    runtime_minutes: "1h 50m",
    content_rating: "PG",
    bg_image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Lana Wachowski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Dr. Aris Thorne", character_role: { es: "Astrofísico Principal", en: "Lead Astrophysicist" } },
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" } }
    ],
    keyword_labels: ["Sci-Fi", "Science"]
  },
  {
    movie_identifier: 13,
    display_name: "SPATIAL ANOMALY",
    release_year: 2024,
    average_score: 7.7,
    category_type: "Mystery",
    synopsis_text: {
      es: "Una grieta en la corteza lunar expone un monolito que emite coordenadas geográficas de civilizaciones perdidas hace milenios.",
      en: "A fissure in the lunar crust exposes a monolith emitting geographical coordinates of civilizations lost millennia ago."
    },
    runtime_minutes: "2h 12m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1447433589675-4adf5662685f?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1447433589675-4adf5662685f?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sienna W.", character_role: { es: "Dra. Ortiz", en: "Dr. Ortiz" } },
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" } }
    ],
    keyword_labels: ["Mystery", "Sci-Fi"]
  },
  {
    movie_identifier: 14,
    display_name: "STARCHASER",
    release_year: 2025,
    average_score: 8.5,
    category_type: "Adventure",
    synopsis_text: {
      es: "Dos hermanos construyen un receptor de radio con chatarra espacial y logran contactar con una sonda de exploración extinta.",
      en: "Two siblings build a radio receiver out of space junk and manage to contact an extinct exploration probe."
    },
    runtime_minutes: "2h 04m",
    content_rating: "PG",
    bg_image_url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sophie Turner", character_role: { es: "Dra. Gregory", en: "Dr. Gregory" } },
      { actor_fullname: "Julian Haas", character_role: { es: "Maximilian", en: "Maximilian" } }
    ],
    keyword_labels: ["Adventure", "Sci-Fi"]
  },
  {
    movie_identifier: 15,
    display_name: "TIME BENDER",
    release_year: 2024,
    average_score: 8.2,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Un viaje a través de una anomalía temporal atrapa a un historiador en la Florencia del Renacimiento con tecnología moderna en su equipaje.",
      en: "A journey through a temporal anomaly traps a historian in Renaissance Florence with modern technology in his luggage."
    },
    runtime_minutes: "2h 10m",
    content_rating: "PG-13",
    bg_image_url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Guillermo del Toro",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" } },
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" } }
    ],
    keyword_labels: ["Fantasy", "History"]
  }
];

let MOVIES_DATA = [];

// Estado global de la aplicación
const AppState = {
  currentTab: 'home', // 'home', 'explore', 'likes', 'mylist', 'profile', 'details'
  activeGenre: 'All', // Filtro de género activo ('All', 'Sci-Fi', 'Drama', 'Action'...)
  likedMovies: JSON.parse(localStorage.getItem('likedMovies')) || [], // IDs de películas recomendadas
  myListMovies: JSON.parse(localStorage.getItem('myListMovies')) || [], // IDs de películas en mi lista
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
  hasMoreMovies: true
};

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
    this.director = raw.filmmaker ? {
      name: String(raw.filmmaker.director_name),
      photo: String(raw.filmmaker.avatar)
    } : null;
    this.cast = Array.isArray(raw.actors_list) ? raw.actors_list.map(actor => ({
      name: String(actor.actor_fullname),
      character: actor.character_role // es/en object
    })) : [];
    this.tags = Array.isArray(raw.keyword_labels) ? raw.keyword_labels.map(t => String(t)) : [];
  }
}

// Servicio centralizado de la API de películas
const MovieAPIService = {
  // Recuperar listado de películas con soporte de filtros por género, búsqueda, puntuación, tendencia y paginación
  async getMovies({ genre = 'All', search = '', page = 1, limit = null, rating = 'All', trend = 'All' } = {}) {
    // 1. Promesa de límite de tiempo (Timeout) a 3 segundos
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new TimeoutError("Tiempo de espera agotado: El servidor no respondió dentro del límite de 3 segundos.")), 3000);
    });

    // 2. Promesa de petición de datos
    const dataFetchPromise = new Promise((resolve, reject) => {
      // Simular latencia variable: 8% de probabilidad de delay lento (4000ms) para provocar Timeout
      const isSlow = Math.random() < 0.08;
      const delay = isSlow ? 4000 : 300;

      setTimeout(() => {
        // Simular error de red aleatorio (10% de probabilidad)
        if (Math.random() < 0.1) {
          reject(new NetworkError("Error de red: No se pudo establecer conexión con el servidor externo."));
          return;
        }

        // Simular respuesta corrupta o inválida (5% de probabilidad)
        const isCorrupt = Math.random() < 0.05;
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
          apiResponse = apiResponse.slice(0, end);
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

// Guardar favoritos en localStorage
function saveLikes() {
  localStorage.setItem('likedMovies', JSON.stringify(AppState.likedMovies));
}

// Guardar mi lista en localStorage
function saveMyList() {
  localStorage.setItem('myListMovies', JSON.stringify(AppState.myListMovies));
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
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
  
  // Renderizar la pantalla de inicio inicialmente
  renderHome();
  renderFavoritesCount();
  renderMyListCount();
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

// Configurar la funcionalidad de búsqueda en tiempo real
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');

  const handleSearchInput = (value) => {
    AppState.searchQuery = value;
    
    // Sincronizar el valor de ambos campos de texto
    if (searchInput) searchInput.value = value;
    if (exploreSearchInput) exploreSearchInput.value = value;
    
    if (AppState.currentTab === 'home') {
      AppState.currentPage = 1;
      AppState.hasMoreMovies = true;
      AppState.loadingMovies = false;
      renderHome();
    } else {
      renderSearchSuggestions();
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  if (exploreSearchInput) {
    exploreSearchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  // Botones de categorías rápidas en Explore
  const exploreCategories = document.querySelectorAll('.explore-category-card');
  exploreCategories.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      let query = '';
      if (category === 'genres') query = 'Sci-Fi';
      else if (category === 'year') query = '2024';
      else if (category === 'popular') query = '8.6';
      else if (category === 'awards') query = 'Villeneuve';
      else if (category === 'streaming') query = 'The Midnight Echo';
      else if (category === 'directors') query = 'Nolan';

      handleSearchInput(query);
    });
  });

  // Listeners para los selectores de filtros de la pestaña de Explorar (Género, Puntuación, Tendencia)
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  const handleFilterChange = () => {
    if (selectGenre) AppState.exploreFilters.genre = selectGenre.value;
    if (selectRating) AppState.exploreFilters.rating = selectRating.value;
    if (selectTrend) AppState.exploreFilters.trend = selectTrend.value;

    AppState.currentPage = 1;
    AppState.hasMoreMovies = true;
    AppState.loadingMovies = false;

    renderSearchSuggestions();
    renderActiveFilters();
  };

  if (selectGenre) selectGenre.addEventListener('change', handleFilterChange);
  if (selectRating) selectRating.addEventListener('change', handleFilterChange);
  if (selectTrend) selectTrend.addEventListener('change', handleFilterChange);

  // Listener para el botón de limpiar todos los filtros
  const clearAllBtn = document.getElementById('clear-all-filters-btn');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllFilters);
  }
}

// Renderizar filtros activos (mostrar cuáles están aplicados)
function renderActiveFilters() {
  const container = document.getElementById('active-filters-container');
  const filterList = document.getElementById('active-filters-list');
  
  if (!container || !filterList) return;

  // Obtener filtros activos (no "All")
  const activeFilters = [];
  
  if (AppState.exploreFilters.genre !== 'All') {
    activeFilters.push({
      type: 'genre',
      label: `Género: ${AppState.exploreFilters.genre}`,
      value: AppState.exploreFilters.genre
    });
  }
  
  if (AppState.exploreFilters.rating !== 'All') {
    activeFilters.push({
      type: 'rating',
      label: `Puntuación: ${AppState.exploreFilters.rating}+`,
      value: AppState.exploreFilters.rating
    });
  }
  
  if (AppState.exploreFilters.trend !== 'All') {
    const trendLabel = AppState.exploreFilters.trend === 'trending' ? 'Tendencia' : 'Estrenos Recientes';
    activeFilters.push({
      type: 'trend',
      label: trendLabel,
      value: AppState.exploreFilters.trend
    });
  }

  // Si no hay filtros activos, ocultar el contenedor
  if (activeFilters.length === 0) {
    container.style.display = 'none';
    filterList.innerHTML = '';
    return;
  }

  // Mostrar el contenedor y renderizar los filtros
  container.style.display = 'flex';
  
  filterList.innerHTML = activeFilters.map(filter => `
    <div class="active-filter-pill">
      <span>${filter.label}</span>
      <span class="active-filter-pill-remove" data-filter-type="${filter.type}" 
            title="Remover filtro">✕</span>
    </div>
  `).join('');

  // Agregar listeners para remover filtros individuales
  document.querySelectorAll('.active-filter-pill-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.getAttribute('data-filter-type');
      removeFilter(filterType);
    });
  });
}

// Remover un filtro individual
function removeFilter(filterType) {
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  if (filterType === 'genre' && selectGenre) {
    selectGenre.value = 'All';
    AppState.exploreFilters.genre = 'All';
  } else if (filterType === 'rating' && selectRating) {
    selectRating.value = 'All';
    AppState.exploreFilters.rating = 'All';
  } else if (filterType === 'trend' && selectTrend) {
    selectTrend.value = 'All';
    AppState.exploreFilters.trend = 'All';
  }

  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;

  renderSearchSuggestions();
  renderActiveFilters();
}

// Limpiar todos los filtros
function clearAllFilters() {
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  if (selectGenre) selectGenre.value = 'All';
  if (selectRating) selectRating.value = 'All';
  if (selectTrend) selectTrend.value = 'All';

  AppState.exploreFilters.genre = 'All';
  AppState.exploreFilters.rating = 'All';
  AppState.exploreFilters.trend = 'All';

  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;

  renderSearchSuggestions();
  renderActiveFilters();
}

// Configurar la búsqueda por voz con Web Speech API
function setupVoiceSearch() {
  const voiceBtn = document.getElementById('voice-search-btn');
  const exploreVoiceBtn = document.getElementById('explore-voice-search-btn');
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');
  
  if (!voiceBtn && !exploreVoiceBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (voiceBtn) {
      voiceBtn.style.opacity = '0.4';
      voiceBtn.title = 'Búsqueda por voz no soportada en este navegador';
    }
    if (exploreVoiceBtn) {
      exploreVoiceBtn.style.opacity = '0.4';
      exploreVoiceBtn.title = 'Búsqueda por voz no soportada en este navegador';
    }
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const toggleRecognition = () => {
    if (AppState.voiceSearchActive) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  if (voiceBtn) voiceBtn.addEventListener('click', toggleRecognition);
  if (exploreVoiceBtn) exploreVoiceBtn.addEventListener('click', toggleRecognition);

  recognition.onstart = () => {
    AppState.voiceSearchActive = true;
    if (voiceBtn) voiceBtn.classList.add('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.add('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Escuchando...' : 'Listening...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onend = () => {
    AppState.voiceSearchActive = false;
    if (voiceBtn) voiceBtn.classList.remove('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.remove('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Buscar películas, géneros...' : 'Search movies, genres...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    AppState.searchQuery = transcript;
    
    if (searchInput) searchInput.value = transcript;
    if (exploreSearchInput) exploreSearchInput.value = transcript;
    
    renderSearchSuggestions();
  };

  recognition.onerror = (event) => {
    console.error('Error de reconocimiento de voz:', event.error);
    AppState.voiceSearchActive = false;
    if (voiceBtn) voiceBtn.classList.remove('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.remove('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Buscar películas, géneros...' : 'Search movies, genres...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
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
  if (AppState.currentTab === 'likes') {
    renderLikesGrid();
  }
}

// Dar/quitar de mi lista
function toggleMyList(movieId) {
  const index = AppState.myListMovies.indexOf(movieId);
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
}

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
    likesSubtitle.textContent = `Tienes ${count} títulos guardados en tu biblioteca.`;
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
    subtitle.textContent = `Tienes ${count} títulos guardados en tu lista de seguimiento.`;
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
  }

  // Eliminar el loader viejo de su posición para añadir las películas y colocar el loader nuevo abajo
  const oldLoader = document.getElementById('pagination-loader');
  if (oldLoader) {
    oldLoader.remove();
  }

  try {
    // 1. Consultar listado inicial / filtrado / búsqueda a través de la API simulada centralizada
    const { movies, total } = await MovieAPIService.getMovies({
      genre: AppState.activeGenre,
      search: AppState.searchQuery,
      page: AppState.currentPage,
      limit: AppState.moviesPerPage
    });

    // Excluimos la película principal destacada de ID 1 de la lista secundaria solo si NO hay una búsqueda activa
    const filteredMovies = AppState.searchQuery.trim() === '' ? movies.filter(m => m.id !== 1) : movies;
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

    const limit = AppState.currentPage * AppState.moviesPerPage;
    const start = (AppState.currentPage - 1) * AppState.moviesPerPage;

    // Obtener y agregar únicamente el nuevo lote de películas (evitando duplicados)
    const pageMovies = filteredMovies.slice(start, limit);
    pageMovies.forEach(movie => {
      if (!grid.querySelector(`[data-id="${movie.id}"]`)) {
        grid.appendChild(createMovieCardElement(movie));
      }
    });

    // Gestionar el loader y el mensaje final colocándolo al final del contenedor padre
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';

    if (limit < totalCount) {
      AppState.hasMoreMovies = true;
      loader.innerHTML = `<div class="pagination-spinner"></div>`;
    } else {
      AppState.hasMoreMovies = false;
      const msg = AppState.language === 'es' ? 'No hay más resultados disponibles' : 'No more results available';
      loader.innerHTML = `<div class="no-more-results">${msg}</div>`;
    }
    
    grid.parentNode.appendChild(loader);
  } catch (error) {
    console.error("Error al cargar películas:", error);
    AppState.hasMoreMovies = true;
    
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';
    const errorText = AppState.language === 'es' ? 'Error al cargar más películas.' : 'Failed to load more movies.';
    const retryText = AppState.language === 'es' ? 'Reintentar' : 'Retry';
    loader.innerHTML = `
      <div class="pagination-error-wrapper">
        <span class="pagination-error-text">⚠️ ${errorText}</span>
        <button class="pagination-retry-btn" onclick="loadMoreMovies()">
          ${retryText}
        </button>
      </div>
    `;
    grid.parentNode.appendChild(loader);
  }
}

// 2. Renderizar la pantalla de exploración (Explore)
async function renderExplore() {
  await renderSearchSuggestions();
  renderActiveFilters();
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

  try {
    if (AppState.searchQuery.trim() === '') {
      suggestedTitle.textContent = AppState.language === 'es' ? "Sugerencias para ti" : "Suggestions for you";
    } else {
      suggestedTitle.textContent = AppState.language === 'es' ? "Resultados de búsqueda" : "Search results";
      
      // Verificar si hay resultados
      try {
        const { movies: testMovies } = await MovieAPIService.getMovies({
          genre: AppState.exploreFilters.genre,
          rating: AppState.exploreFilters.rating,
          trend: AppState.exploreFilters.trend,
          search: AppState.searchQuery,
          page: 1,
          limit: 1
        });

        if (testMovies.length === 0) {
          AppState.hasMoreMovies = false;
          const noResMsg = AppState.language === 'es' 
            ? `No se encontraron resultados para "${AppState.searchQuery}"`
            : `No results found for "${AppState.searchQuery}"`;
          const clearBtnText = AppState.language === 'es' ? 'Limpiar búsqueda' : 'Clear search';
          
          resultsContainer.innerHTML = `
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
      } catch (error) {
        console.error("Error al verificar resultados:", error);
      }
    }

    // Cargar el primer lote paginado (sugerencias o resultados de búsqueda)
    await renderSearchSuggestionsGrid();
  } catch (error) {
    console.error("Error en sugerencias de búsqueda:", error);
  }
}

async function renderSearchSuggestionsGrid() {
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
      limit: AppState.moviesPerPage
    });

    const limit = AppState.currentPage * AppState.moviesPerPage;
    const start = (AppState.currentPage - 1) * AppState.moviesPerPage;

    // Obtener lote y agregar evitando duplicados
    const pageMovies = movies.slice(start, limit);
    pageMovies.forEach(movie => {
      if (!resultsContainer.querySelector(`[data-id="${movie.id}"]`)) {
        resultsContainer.appendChild(createMovieCardElement(movie));
      }
    });

    // Crear loader / mensaje de fin
    let loader = document.createElement('div');
    loader.id = 'pagination-loader';
    loader.className = 'pagination-loader-container';

    if (limit < total) {
      AppState.hasMoreMovies = true;
      loader.innerHTML = `<div class="pagination-spinner"></div>`;
    } else {
      AppState.hasMoreMovies = false;
      const msg = AppState.language === 'es' ? 'No hay más resultados disponibles' : 'No more results available';
      loader.innerHTML = `<div class="no-more-results">${msg}</div>`;
    }
    
    resultsContainer.parentNode.appendChild(loader);
  } catch (error) {
    console.error("Error en paginación de exploración:", error);
    AppState.hasMoreMovies = true;
  }
}

// Limpiar la búsqueda y volver al listado general
function clearSearchQuery() {
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');
  
  AppState.searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (exploreSearchInput) exploreSearchInput.value = '';
  
  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;
  
  if (AppState.currentTab === 'home') {
    renderHome();
  } else {
    renderSearchSuggestions();
  }
}

// Hacer la función accesible de forma global para los onclick inline
window.clearSearchQuery = clearSearchQuery;

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

// 3.5. Renderizar la pantalla de lista de seguimiento (My List)
function renderMyList() {
  renderMyListCount();
  renderMyListGrid();
}

function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  if (!grid) return;

  grid.innerHTML = '';

  // Filtrar películas en la lista de seguimiento
  const watchlisted = MOVIES_DATA.filter(movie => {
    return AppState.myListMovies.includes(movie.id);
  });

  if (watchlisted.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    watchlisted.forEach(movie => {
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
  document.getElementById('detail-description').textContent = typeof movie.description === 'object' ? movie.description[AppState.language] : movie.description;

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

  // Generar datos del Director
  const directorContainer = document.getElementById('detail-director-container');
  if (directorContainer) {
    directorContainer.innerHTML = '';
    if (movie.director) {
      const directorCard = document.createElement('div');
      directorCard.className = 'director-card-wrapper';
      directorCard.innerHTML = `
        <div class="director-photo" style="background-image: url('${movie.director.photo}')"></div>
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
    const isWatchlisted = AppState.myListMovies.includes(movie.id);
    if (isWatchlisted) {
      listBtn.classList.add('watchlisted');
      listBtn.innerHTML = '📁 <span>Quitar Lista</span>';
    } else {
      listBtn.classList.remove('watchlisted');
      listBtn.innerHTML = '📁 <span>Mi Lista</span>';
    }

    const newListBtn = listBtn.cloneNode(true);
    listBtn.parentNode.replaceChild(newListBtn, listBtn);

    newListBtn.addEventListener('click', () => {
      toggleMyList(movie.id);
      const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
      newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
      newListBtn.innerHTML = isWatchlistedNow ? '📁 <span>Quitar Lista</span>' : '📁 <span>Mi Lista</span>';
    });
  }

  // Ir a la vista de detalle
  switchTab('details');
}

function createMovieCardElement(movie) {
  const isLiked = AppState.likedMovies.includes(movie.id);

  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('data-id', movie.id);

  const genreTranslated = GENRE_TRANSLATIONS[AppState.language][movie.genre] || movie.genre;

  card.innerHTML = `
    <div class="card-image" style="background-image: url('${movie.poster}')">
      <button class="card-like-btn ${isLiked ? 'liked' : ''}" aria-label="Añadir a favoritos">
        <svg class="heart-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <div class="card-rating">
        <span>${movie.rating.toFixed(1)}</span>
        <span class="star-icon">★</span>
      </div>
    </div>
    <div class="card-details">
      <h3 class="card-title">${movie.title}</h3>
      <span class="card-subtitle">${genreTranslated}</span>
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
    "Mystery": "Misterio"
  },
  en: {
    "Sci-Fi/Thriller": "Sci-Fi/Thriller",
    "Sci-Fi": "Sci-Fi",
    "Thriller": "Thriller",
    "Fantasy": "Fantasy",
    "Action": "Action",
    "Adventure": "Adventure",
    "Mystery": "Mystery"
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
    profileRole: "Miembro Premium de Watch Movies",
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
    profileRole: "Watch Movies Premium Member",
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

  // Actualizar listas activas
  if (AppState.currentTab === 'home') renderHome();
  else if (AppState.currentTab === 'likes') renderLikes();
  else if (AppState.currentTab === 'mylist') renderMyList();

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
    speakText(AppState.language === 'es' ? 'Narrador activado.' : 'Screen narrator enabled.');
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
}

function enterPlatform() {
  const welcome = document.getElementById('welcome-screen');
  if (welcome) {
    welcome.classList.add('fade-out');
    sessionStorage.setItem('hasWelcomed', 'true');
    speakText(AppState.language === 'es' ? 'Bienvenido a Cinestream' : 'Welcome to Cinestream');
  }
}

function changeWelcomeLanguage(lang) {
  changeLanguage(lang);
  
  // Sincronizar botones en la pantalla de bienvenida
  const btnEs = document.getElementById('welcome-lang-es');
  const btnEn = document.getElementById('welcome-lang-en');
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEs.classList.remove('active');
      btnEn.classList.add('active');
    }
  }

  // Traducir textos de la pantalla de bienvenida
  const welcomeTitle = document.getElementById('welcome-title');
  const welcomeDesc = document.getElementById('welcome-desc');
  const enterBtn = document.querySelector('.welcome-enter-btn span');
  
  if (lang === 'es') {
    if (welcomeTitle) welcomeTitle.textContent = "Bienvenido a la experiencia de cine definitiva";
    if (welcomeDesc) welcomeDesc.textContent = "Explora, descubre y organiza tus películas preferidas en un universo galáctico premium.";
    if (enterBtn) enterBtn.textContent = "ENTRAR A LA PLATAFORMA";
  } else {
    if (welcomeTitle) welcomeTitle.textContent = "Welcome to the Ultimate Cinema Experience";
    if (welcomeDesc) welcomeDesc.textContent = "Explore, discover, and organize your favorite movies in a premium galactic universe.";
    if (enterBtn) enterBtn.textContent = "ENTER THE PLATFORM";
  }
}

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
    try {
      // Renderizar según la pestaña actual
      if (AppState.currentTab === 'explore') {
        await renderSearchSuggestionsGrid();
      } else {
        await renderHomeGrid();
      }
      AppState.loadingMovies = false;
    } catch (error) {
      console.error("Error al cargar más películas:", error);
      AppState.loadingMovies = false;
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
