// Base de datos simulada de películas con imágenes reales de Unsplash de alta calidad
// Base de datos simulada de películas con imágenes reales de Unsplash de alta calidad
const RAW_EXTERNAL_MOVIES_API_DATA = [
  {
    movie_identifier: 1,
    display_name: "Interstellar",
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
    cover_image_url: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
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
    display_name: "Inception",
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
    cover_image_url: "https://m.media-amazon.com/images/I/81mUTY45VyL._SL1500_.jpg",
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
    display_name: "The Matrix",
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
    cover_image_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
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
    display_name: "The Dark Knight",
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
    cover_image_url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
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

const PERSON_PROFILE_DATA = {
  "elena rostova": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "marcus vance": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "dr. aris thorne": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "luna park": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian c.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "sienna w.": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "alex thompson": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "rin aoyagi": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "edward norton": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "sophie turner": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "matthew m.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "anne hathaway": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian haas": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "christoph waltz": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "denis villeneuve": {
    nationality: "Canadiense",
    birthDate: "03 de octubre de 1967",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Denis Villeneuve es un director canadiense reconocido por su enfoque visual y narrativo único, creando historias extensas y personajes profundos.",
      en: "Denis Villeneuve is a Canadian director known for his unique visual and narrative style, creating expansive stories and deep characters."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Esta historia de vida se presenta con interpretación en lengua de signos, narración y subtítulos para mayor accesibilidad.",
      en: "This life story is presented with sign language interpretation, narration, and subtitles for enhanced accessibility."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nDenis Villeneuve, director canadiense, revela cómo sus experiencias forman su voz artística.",
      en: "00:00:00.000 --> 00:00:07.000\nDenis Villeneuve, Canadian director, reveals how his experiences shape his artistic voice."
    }
  },
  "christopher nolan": {
    nationality: "Británico",
    birthDate: "30 de julio de 1970",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Christopher Nolan es conocido por su capacidad de combinar ciencia ficción con emoción humana, creando universos narrativos complejos.",
      en: "Christopher Nolan is known for his ability to combine science fiction with human emotion, creating complex narrative universes."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "El relato muestra su carrera en lengua de signos, con un narrador que contextualiza su trayectoria.",
      en: "The story shows his career in sign language, with a narrator contextualizing his trajectory."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nChristopher Nolan ha transformado el cine de ciencia ficción con un enfoque íntimo y cerebral.",
      en: "00:00:00.000 --> 00:00:07.000\nChristopher Nolan has transformed science fiction cinema with an intimate and cerebral approach."
    }
  },
  "ridley scott": {
    nationality: "Británico",
    birthDate: "30 de noviembre de 1937",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Ridley Scott ha llevado el cine a un nivel épico, con mundos visualmente impresionantes y tono oscuro.",
      en: "Ridley Scott has taken cinema to an epic level, with visually stunning worlds and dark tone."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Una narración accesible acompaña la interpretación en lengua de signos para explicar sus proyectos más destacados.",
      en: "An accessible narration accompanies the sign language interpretation to explain his most notable projects."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nRidley Scott es un cineasta de gran influencia, creador de paisajes visuales inolvidables.",
      en: "00:00:00.000 --> 00:00:07.000\nRidley Scott is an influential filmmaker, creator of unforgettable visual landscapes."
    }
  },
  "lana wachowski": {
    nationality: "Estadounidense",
    birthDate: "21 de junio de 1965",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Lana Wachowski ha creado historias que mezclan tecnología y conciencia humana con intensidad visual.",
      en: "Lana Wachowski has created stories mixing technology and human consciousness with visual intensity."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "El video combina la narrativa con subtítulos y una interpretación en lengua de signos." ,
      en: "The video combines narration with subtitles and sign language interpretation."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nLana Wachowski es una voz creativa que explora identidad y realidad en cada película.",
      en: "00:00:00.000 --> 00:00:07.000\nLana Wachowski is a creative voice exploring identity and reality in every film."
    }
  },
  "james cameron": {
    nationality: "Canadiense",
    birthDate: "16 de agosto de 1954",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "James Cameron es uno de los directores más influyentes del cine de aventuras y ciencia ficción moderna.",
      en: "James Cameron is one of the most influential directors in modern adventure and science fiction cinema."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su biografía se transmite con claridad para personas sordas y oyentes gracias a los subtítulos." ,
      en: "His biography is delivered clearly for deaf and hearing viewers thanks to subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nJames Cameron redefine el cine de acción y ciencia ficción con ambición tecnológica.",
      en: "00:00:00.000 --> 00:00:07.000\nJames Cameron redefines action and science fiction cinema with technological ambition."
    }
  },
  "steven spielberg": {
    nationality: "Estadounidense",
    birthDate: "18 de diciembre de 1946",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Steven Spielberg es un pionero del cine contemporáneo, conocido por su capacidad para contar historias emotivas y accesibles.",
      en: "Steven Spielberg is a pioneer of contemporary cinema, known for telling emotional and accessible stories."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Una narración clara y un intérprete en lengua de signos acompañan su historia de vida.",
      en: "Clear narration and a sign language interpreter accompany his life story."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nSteven Spielberg ha conectado generaciones con historias humanas e inolvidables.",
      en: "00:00:00.000 --> 00:00:07.000\nSteven Spielberg has connected generations with unforgettable human stories."
    }
  },
  "elena rostova": {
    nationality: "Rusa",
    birthDate: "12 de abril de 1990",
    biography: {
      es: "Elena Rostova es una actriz emergente con papeles destacados en cine de ciencia ficción y acción.",
      en: "Elena Rostova is an emerging actress with prominent roles in science fiction and action films."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su historia de vida se cuenta con subtítulos y lenguaje de señas para reforzar la accesibilidad.",
      en: "Her life story is told with subtitles and sign language to reinforce accessibility."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nElena Rostova trae energía y determinación a cada papel protagónico.",
      en: "00:00:00.000 --> 00:00:07.000\nElena Rostova brings energy and determination to every leading role."
    }
  },
  "marcus vance": {
    nationality: "Británico",
    birthDate: "05 de noviembre de 1988",
    biography: {
      es: "Marcus Vance es un actor versátil especializado en personajes de acción y ciencia ficción.",
      en: "Marcus Vance is a versatile actor specializing in action and science fiction characters."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Se narra su trayectoria con apoyo en lengua de signos y subtítulos.",
      en: "His career is narrated with sign language support and subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nMarcus Vance se ha hecho un nombre con personajes intensos y físicos.",
      en: "00:00:00.000 --> 00:00:07.000\nMarcus Vance has made a name for himself with intense, physical characters."
    }
  },
  "luna park": {
    nationality: "Canadiense",
    birthDate: "20 de septiembre de 1992",
    biography: {
      es: "Luna Park es una actriz con presencia magnética y un talento claro para el drama emocional.",
      en: "Luna Park is an actress with magnetic presence and a clear talent for emotional drama."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Una voz narradora guía la historia de Luna mientras se proyecta en lengua de signos.",
      en: "A narrator guides Luna's story while it is presented in sign language."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nLuna Park interpreta personajes intensos con sutileza y fuerza emocional.",
      en: "00:00:00.000 --> 00:00:07.000\nLuna Park portrays intense characters with subtlety and emotional strength."
    }
  },
  "christoph waltz": {
    nationality: "Austriaco",
    birthDate: "04 de octubre de 1956",
    biography: {
      es: "Christoph Waltz es un actor prestigioso conocido por sus interpretaciones complejas y carismáticas.",
      en: "Christoph Waltz is a distinguished actor known for his complex and charismatic performances."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su trayectoria se ilustra con una lectura accesible y una intérprete en lengua de signos.",
      en: "His career is illustrated with accessible narration and sign language interpretation."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nChristoph Waltz equilibra inteligencia y presencia en cada personaje.",
      en: "00:00:00.000 --> 00:00:07.000\nChristoph Waltz balances intelligence and presence in every character."
    }
  },
  "julian c.": {
    nationality: "Británico",
    birthDate: "15 de mayo de 1985",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Julian C. es un actor conocido por papeles heroicos en cine espacial.",
      en: "Julian C. is an actor known for heroic roles in space cinema."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Una narración accesible presenta su trayectoria, acompañada de lengua de signos.",
      en: "An accessible narration presents his career, accompanied by sign language."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nJulian C. aporta energía y carisma a sus papeles.",
      en: "00:00:00.000 --> 00:00:07.000\nJulian C. brings energy and charisma to his roles."
    }
  },
  "sienna w.": {
    nationality: "Británica",
    birthDate: "02 de febrero de 1992",
    photo: "https://images.unsplash.com/photo-1541534401786-3e8b2f3a1bfc?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Sienna W. destaca por su versatilidad dramática en papeles científicos.",
      en: "Sienna W. stands out for her dramatic versatility in scientific roles."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su historia combina interpretación en lengua de signos y subtítulos.",
      en: "Her story combines sign language interpretation and subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nSienna W. ha mostrado rango y fuerza en papeles intensos.",
      en: "00:00:00.000 --> 00:00:07.000\nSienna W. has shown range and strength in intense roles."
    }
  },
  "alex thompson": {
    nationality: "Estadounidense",
    birthDate: "11 de noviembre de 1987",
    photo: "https://images.unsplash.com/photo-1545996124-1d1b3df6bff1?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Alex Thompson es un actor de carácter con papeles memorables en thrillers.",
      en: "Alex Thompson is a character actor with memorable roles in thrillers."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Narración y lengua de signos describen su carrera y proyectos.",
      en: "Narration and sign language describe his career and projects."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nAlex Thompson es reconocido por su presencia en pantalla.",
      en: "00:00:00.000 --> 00:00:07.000\nAlex Thompson is recognized for his on-screen presence."
    }
  },
  "rin aoyagi": {
    nationality: "Japonesa",
    birthDate: "09 de septiembre de 1993",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Rin Aoyagi ha brillado en papeles que mezclan delicadeza y fuerza.",
      en: "Rin Aoyagi has shone in roles that mix delicacy and strength."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su biografía incluye interpretación en lengua de signos y subtítulos.",
      en: "Her biography includes sign language interpretation and subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nRin Aoyagi aporta sensibilidad y control emocional a sus personajes.",
      en: "00:00:00.000 --> 00:00:07.000\nRin Aoyagi brings sensitivity and emotional control to her characters."
    }
  },
  "edward norton": {
    nationality: "Estadounidense",
    birthDate: "18 de agosto de 1969",
    photo: "https://images.unsplash.com/photo-1519340333755-dc0c3a4f9b3e?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Edward Norton es un actor y cineasta con interpretaciones intensas y comprometidas.",
      en: "Edward Norton is an actor and filmmaker with intense, committed performances."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Narrador y lengua de signos acompañan su trayectoria profesional.",
      en: "Narration and sign language accompany his professional trajectory."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nEdward Norton es conocido por su versatilidad y compromiso con los personajes.",
      en: "00:00:00.000 --> 00:00:07.000\nEdward Norton is known for his versatility and commitment to characters."
    }
  },
  "sophie turner": {
    nationality: "Británica",
    birthDate: "21 de febrero de 1996",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Sophie Turner es una actriz que ha crecido en papeles protagonistas y dramáticos.",
      en: "Sophie Turner is an actress who has grown into leading and dramatic roles."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Historia presentada con intérprete en lengua de signos y subtítulos.",
      en: "Story presented with sign language interpreter and subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nSophie Turner combina juventud y madurez en sus interpretaciones.",
      en: "00:00:00.000 --> 00:00:07.000\nSophie Turner combines youth and maturity in her performances."
    }
  },
  "julian haas": {
    nationality: "Alemán",
    birthDate: "10 de enero de 1984",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Julian Haas es conocido por su trabajo en cine europeo y personajes intensos.",
      en: "Julian Haas is known for his work in European cinema and intense characters."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Su historia se cuenta con apoyo en lengua de signos y subtítulos.",
      en: "His story is told with sign language support and subtitles."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nJulian Haas aporta matices y complejidad a sus papeles.",
      en: "00:00:00.000 --> 00:00:07.000\nJulian Haas brings nuance and complexity to his roles."
    }
  },
  "matthew m.": {
    nationality: "Británico",
    birthDate: "08 de marzo de 1986",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Matthew M. es un actor de carácter con trayectoria en acción y aventuras.",
      en: "Matthew M. is a character actor with a background in action and adventure."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Narración accesible y lengua de signos acompañan su biografía.",
      en: "Accessible narration and sign language accompany his biography."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nMatthew M. destaca por su físico y presencia en pantalla.",
      en: "00:00:00.000 --> 00:00:07.000\nMatthew M. stands out for his physique and on-screen presence."
    }
  },
  "anne hathaway": {
    nationality: "Estadounidense",
    birthDate: "12 de noviembre de 1982",
    photo: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Anne Hathaway es una actriz reconocida por su versatilidad y presencia en grandes producciones.",
      en: "Anne Hathaway is an actress renowned for her versatility and presence in major productions."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Biografía narrada con subtítulos y acompañamiento en lengua de signos.",
      en: "Biography narrated with subtitles and sign language accompaniment."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\nAnne Hathaway ha interpretado papeles que van del drama al musical con solvencia.",
      en: "00:00:00.000 --> 00:00:07.000\nAnne Hathaway has performed roles ranging from drama to musical with skill."
    }
  }
};

// Base de datos de Monólogos y Comedia
const MONOLOGISTAS_DATA = [
  {
    id: 1,
    name: "Eva Soriano",
    style: "Stand-Up Comedy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    bio: "Cómica y presentadora con un humor directo, picante y lleno de improvisación.",
    shows: [
      { title: "El Pecado de Eva", desc: "Un monólogo donde Eva desmonta los mitos sobre la sociedad y las relaciones modernas.", date: "2026-07-15", time: "21:30", place: "Teatro La Latina, Madrid" },
      { title: "Mala Leche", desc: "Sesión de humor canalla sobre el día a día y las paradojas de cumplir años.", date: "2026-07-22", time: "22:00", place: "Club de la Comedia, Barcelona" }
    ]
  },
  {
    id: 2,
    name: "David Broncano",
    style: "Humor Absurdo & Sarcasmo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Uno de los referentes del humor millennial y absurdo en España.",
    shows: [
      { title: "La Resistencia Show", desc: "Sesión especial en directo donde la comedia física y las preguntas incómodas son protagonistas.", date: "2026-08-05", time: "20:00", place: "Teatro Príncipe Gran Vía, Madrid" }
    ]
  },
  {
    id: 3,
    name: "Valeria Ros",
    style: "Monólogo Anecdótico",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Monologuista incansable especialista en reírse de sus propios desastres vitales.",
    shows: [
      { title: "Mature", desc: "Valeria reflexiona sobre lo que significa ser una mujer madura e independiente en la actualidad.", date: "2026-07-30", time: "21:00", place: "Teatro Alameda, Málaga" }
    ]
  }
];

// Base de datos de Compañías de Teatro
const TEATRO_DATA = [
  {
    id: 1,
    name: "Compañía Nacional de Teatro Clásico",
    specialty: "Clásico & Siglo de Oro",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=400",
    description: "Compañía líder en la difusión y conservación del teatro clásico español.",
    shows: [
      { title: "La Vida es Sueño", desc: "El gran clásico de Calderón de la Barca sobre el destino y el libre albedrío en un montaje vanguardista.", date: "2026-09-10", time: "19:30", place: "Teatro de la Comedia, Madrid" },
      { title: "El Perro del Hortelano", desc: "La divertida comedia de enredos amorosos de Lope de Vega.", date: "2026-09-15", time: "20:00", place: "Teatro Lope de Vega, Sevilla" }
    ]
  },
  {
    id: 2,
    name: "Els Joglars",
    specialty: "Sátira & Contemporáneo",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    description: "Compañía histórica catalana caracterizada por la ácida sátira social y política.",
    shows: [
      { title: "¡Que salga Aristófanes!", desc: "Una reivindicación de la libertad de expresión y la comedia frente a la cultura de la cancelación.", date: "2026-07-28", time: "20:30", place: "Teatro Olympia, Valencia" }
    ]
  },
  {
    id: 3,
    name: "Yllana",
    specialty: "Humor Gestual & Clown",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=400",
    description: "Referentes internacionales de la comedia visual, el mimo y el teatro de humor sin palabras.",
    shows: [
      { title: "The Opera Locos", desc: "Cinco cantantes líricos excéntricos interpretan grandes éxitos de la ópera combinados con comedia slapstick.", date: "2026-08-12", time: "21:00", place: "Teatro Calderón, Valladolid" }
    ]
  }
];

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
      character: actor.character_role // es/en object
    })) : [];
    this.tags = Array.isArray(raw.keyword_labels) ? raw.keyword_labels.map(t => String(t)) : [];
  }
}

// Servicio centralizado de la API de películas
const MovieAPIService = {
  // Recuperar listado de películas con soporte de filtros por género, búsqueda, puntuación, tendencia y paginación
  async getMovies({ genre = 'All', search = '', page = 1, limit = null, rating = 'All', trend = 'All', reliableMode = false } = {}) {
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
  AppState.myListMovies = JSON.parse(localStorage.getItem(`myListMovies_${name}`)) || JSON.parse(localStorage.getItem('myListMovies')) || [];
  AppState.userRatings = JSON.parse(localStorage.getItem(`userRatings_${name}`)) || JSON.parse(localStorage.getItem('userRatings')) || {};
  AppState.userReviews = JSON.parse(localStorage.getItem(`userReviews_${name}`)) || JSON.parse(localStorage.getItem('userReviews')) || {};
  AppState.playlistOrder = JSON.parse(localStorage.getItem(`playlistOrder_${name}`)) || JSON.parse(localStorage.getItem('playlistOrder')) || [];
  AppState.playlistSchedule = JSON.parse(localStorage.getItem(`playlistSchedule_${name}`)) || JSON.parse(localStorage.getItem('playlistSchedule')) || {};
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
// Rutas protegidas que requieren autenticación
const PROTECTED_TABS = ['likes', 'mylist', 'profile'];

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
    renderMonologos();
  } else if (tabName === 'teatro') {
    renderTeatro();
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

  const isEs = AppState.language === 'es';

  // Actualizar los textos de cabecera y botón según el idioma
  const labelEl = container.querySelector('.active-filters-label');
  if (labelEl) {
    labelEl.textContent = isEs ? 'Filtros activos:' : 'Active filters:';
  }
  const clearBtnEl = document.getElementById('clear-all-filters-btn');
  if (clearBtnEl) {
    clearBtnEl.innerHTML = isEs ? '✕ Limpiar todo' : '✕ Clear all';
    clearBtnEl.title = isEs ? 'Limpiar todos los filtros' : 'Clear all filters';
  }

  // Obtener filtros activos (no "All")
  const activeFilters = [];
  
  if (AppState.exploreFilters.genre !== 'All') {
    const genreName = GENRE_TRANSLATIONS[AppState.language][AppState.exploreFilters.genre] || AppState.exploreFilters.genre;
    activeFilters.push({
      type: 'genre',
      label: `${isEs ? 'Género' : 'Genre'}: ${genreName}`,
      value: AppState.exploreFilters.genre
    });
  }
  
  if (AppState.exploreFilters.rating !== 'All') {
    activeFilters.push({
      type: 'rating',
      label: `${isEs ? 'Puntuación' : 'Rating'}: ${AppState.exploreFilters.rating}+`,
      value: AppState.exploreFilters.rating
    });
  }
  
  if (AppState.exploreFilters.trend !== 'All') {
    let trendLabel = '';
    if (AppState.exploreFilters.trend === 'trending') {
      trendLabel = isEs ? 'Tendencia' : 'Trending';
    } else if (AppState.exploreFilters.trend === 'recent') {
      trendLabel = isEs ? 'Estrenos Recientes' : 'Recent Releases';
    }
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
            title="${isEs ? 'Remover filtro' : 'Remove filter'}">✕</span>
    </div>
  `).join('');

  // Agregar listeners para remover filtros individuales
  filterList.querySelectorAll('.active-filter-pill-remove').forEach(btn => {
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

// Servicio Centralizado para gestionar favoritos (Likes)
const FavoritesService = {
  add(movieId) {
    try {
      const movie = MOVIES_DATA.find(m => m.id === movieId);
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
      const movie = MOVIES_DATA.find(m => m.id === movieId);
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

// Dar/quitar de mi lista
function toggleMyList(movieId) {
  // Protegido: requiere autenticación
  if (!AppState.user) {
    AppState.postLoginAction = () => toggleMyList(movieId);
    openRegister();
    return;
  }

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
  if (movieId === 1 && typeof window.updateMainMyListBtn === 'function') {
    window.updateMainMyListBtn();
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
        // Si existe una asignación con imagen, crear un elemento customizado para mayor visibilidad
        const assign = getMovieAssignment(movie.id);
        if (assign && assign.image) {
          const item = document.createElement('div');
          item.className = 'assigned-movie-item';
          item.innerHTML = `
            <div class="assigned-thumb" style="background-image: url('${assign.image}')"></div>
            <div class="assigned-meta">
              <div class="assigned-title">${movie.title}</div>
              <div class="assigned-note">${assign.note || ''}</div>
            </div>
          `;
          item.addEventListener('click', () => showMovieDetails(movie));
          grid.appendChild(item);
        } else {
          grid.appendChild(createMovieCardElement(movie));
        }
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
          toggleMyList(movie.id);
          const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
          const isEsNow = AppState.language === 'es';
          newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
          const label = isWatchlistedNow 
            ? (isEsNow ? 'Quitar Lista' : 'Remove List') 
            : (isEsNow ? 'Mi Lista' : 'My List');
          newListBtn.innerHTML = `📁 <span>${label}</span>`;
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

  const nationality = profile?.nationality || (isEs ? 'Desconocida' : 'Unknown');
  const birthDate = profile?.birthDate || (isEs ? 'No disponible' : 'Not available');
  const biography = profile?.biography?.[AppState.language] || (isEs ? 'Biografía no disponible.' : 'Biography not available.');
  const videoSrc = profile?.videoSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
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
          <h3 class="person-modal-name">${personName}</h3>
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
      </div>
      <div class="person-video-card">
        <h4 class="person-modal-section-title">${isEs ? 'Historia de vida' : 'Life story'}</h4>
        <video controls class="person-story-video" aria-label="${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for ${personName}">
          <source src="${videoSrc}" type="video/mp4">
          ${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}
        </video>
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

  const grid = document.getElementById('person-movies-grid');
  if (grid) {
    if (allAssociatedMovies.length > 0) {
      allAssociatedMovies.forEach(movie => {
        grid.appendChild(createMovieCardElement(movie));
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
      <div style="padding: 16px; background: #0f172a; color: #fff;">
        <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700;">${movie.title}</h3>
        <p style="margin: 0; font-size: 13px; color: #94a3b8;">${isEs ? 'Tráiler Oficial' : 'Official Trailer'}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function closeTrailerModal() {
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
