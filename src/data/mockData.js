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

const PERSON_PROFILE_DATA = {
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

export { RAW_EXTERNAL_MOVIES_API_DATA, PERSON_PROFILE_DATA, MOCK_REVIEWS, MONOLOGISTAS_DATA, TEATRO_DATA };
