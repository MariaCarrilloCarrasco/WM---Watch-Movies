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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Interstellar-logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Interstellar-logo.jpg",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Marcus Vance", character_role: { es: "Ingeniero de Sistemas", en: "Systems Engineer" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Dr. Aris Thorne", character_role: { es: "Astrofísico Principal", en: "Lead Astrophysicist" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Luna Park", character_role: { es: "Oficial de Comunicaciones", en: "Communications Officer" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/2bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/2cov/600/900",
    filmmaker: {
      director_name: "Christopher Nolan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Julian C.", character_role: { es: "Capitán Miller", en: "Captain Miller" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Sienna W.", character_role: { es: "Dra. Ortiz", en: "Dr. Ortiz" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/3bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/3cov/600/900",
    filmmaker: {
      director_name: "Ridley Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Alex Thompson", character_role: { es: "Detective Sterling", en: "Detective Sterling" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Rin Aoyagi", character_role: { es: "Rei", en: "Rei" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/4bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/4cov/600/900",
    filmmaker: {
      director_name: "Lana Wachowski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Sophie Turner", character_role: { es: "Dra. Gregory", en: "Dr. Gregory" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/5bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/5cov/600/900",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Marcus Vance", character_role: { es: "Sgt. Hayes", en: "Sgt. Hayes" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Luna Park", character_role: { es: "Especialista", en: "Specialist" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Star_Wars_Galactic_Battlegrounds_Logo.jpg/960px-Star_Wars_Galactic_Battlegrounds_Logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Star_Wars_Galactic_Battlegrounds_Logo.jpg/960px-Star_Wars_Galactic_Battlegrounds_Logo.jpg",
    filmmaker: {
      director_name: "Matthew Vaughn",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Matthew M.", character_role: { es: "Comandante", en: "Commander" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Anne Hathaway", character_role: { es: "Científica", en: "Scientist" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/7bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/7cov/600/900",
    filmmaker: {
      director_name: "Guillermo del Toro",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Julian Haas", character_role: { es: "Maximilian", en: "Maximilian" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/8bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/8cov/600/900",
    filmmaker: {
      director_name: "Christopher Nolan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Julian C.", character_role: { es: "Capitán Miller", en: "Captain Miller" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Noomi_Rapace_PFW_2019.jpg/960px-Noomi_Rapace_PFW_2019.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Noomi_Rapace_PFW_2019.jpg/960px-Noomi_Rapace_PFW_2019.jpg",
    filmmaker: {
      director_name: "Ridley Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Luna Park", character_role: { es: "Oficial de Comunicaciones", en: "Communications Officer" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Alex Thompson", character_role: { es: "Detective Sterling", en: "Detective Sterling" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/%E5%9B%BD%E5%86%85%E3%81%AE%E6%96%B0%E8%A6%8F%E6%84%9F%E6%9F%93%E8%80%85%E3%81%AF%EF%BC%91%EF%BC%95%EF%BC%91%EF%BC%96_%2851008728635%29.jpg/960px-%E5%9B%BD%E5%86%85%E3%81%AE%E6%96%B0%E8%A6%8F%E6%84%9F%E6%9F%93%E8%80%85%E3%81%AF%EF%BC%91%EF%BC%95%EF%BC%91%EF%BC%96_%2851008728635%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/%E5%9B%BD%E5%86%85%E3%81%AE%E6%96%B0%E8%A6%8F%E6%84%9F%E6%9F%93%E8%80%85%E3%81%AF%EF%BC%91%EF%BC%95%EF%BC%91%EF%BC%96_%2851008728635%29.jpg/960px-%E5%9B%BD%E5%86%85%E3%81%AE%E6%96%B0%E8%A6%8F%E6%84%9F%E6%9F%93%E8%80%85%E3%81%AF%EF%BC%91%EF%BC%95%EF%BC%91%EF%BC%96_%2851008728635%29.jpg",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Rin Aoyagi", character_role: { es: "Rei", en: "Rei" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Marcus Vance", character_role: { es: "Ingeniero de Sistemas", en: "Systems Engineer" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2016_RiP_Bring_Me_the_Horizon_-_by_2eight_-_DSC6735.jpg/960px-2016_RiP_Bring_Me_the_Horizon_-_by_2eight_-_DSC6735.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/2016_RiP_Bring_Me_the_Horizon_-_by_2eight_-_DSC6735.jpg/960px-2016_RiP_Bring_Me_the_Horizon_-_by_2eight_-_DSC6735.jpg",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elena Rostova", character_role: { es: "Comandante de Vuelo", en: "Flight Commander" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Luna Park", character_role: { es: "Especialista", en: "Specialist" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lee_De_Forest_with_Audion_tubes.jpg/960px-Lee_De_Forest_with_Audion_tubes.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Lee_De_Forest_with_Audion_tubes.jpg/960px-Lee_De_Forest_with_Audion_tubes.jpg",
    filmmaker: {
      director_name: "Lana Wachowski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Dr. Aris Thorne", character_role: { es: "Astrofísico Principal", en: "Lead Astrophysicist" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Subwavelength_slits.JPG/960px-Subwavelength_slits.JPG",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Subwavelength_slits.JPG/960px-Subwavelength_slits.JPG",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sienna W.", character_role: { es: "Dra. Ortiz", en: "Dr. Ortiz" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://picsum.photos/seed/14bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/14cov/600/900",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sophie Turner", character_role: { es: "Dra. Gregory", en: "Dr. Gregory" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Julian Haas", character_role: { es: "Maximilian", en: "Maximilian" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
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
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/LawrenceBenderIBAug09.jpg/960px-LawrenceBenderIBAug09.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/LawrenceBenderIBAug09.jpg/960px-LawrenceBenderIBAug09.jpg",
    filmmaker: {
      director_name: "Guillermo del Toro",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Christoph Waltz", character_role: { es: "Herr Weber", en: "Herr Weber" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } },
      { actor_fullname: "Edward Norton", character_role: { es: "El Caminante", en: "The Walker" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film's narrative." } }
    ],
    keyword_labels: ["Fantasy", "History"]
  },
  {
    movie_identifier: 16,
    display_name: "ENCANTO MÁGICO",
    release_year: 2025,
    average_score: 8.8,
    category_type: "Animation",
    synopsis_text: {
      es: "Una nueva aventura de animación Disney llena de magia, donde una joven descubre que su familia tiene poderes ocultos.",
      en: "A new Disney animation adventure full of magic, where a young girl discovers her family has hidden powers."
    },
    runtime_minutes: "1h 45m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Disney%27s_Encanto_print_logo.svg/960px-Disney%27s_Encanto_print_logo.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Disney%27s_Encanto_print_logo.svg/960px-Disney%27s_Encanto_print_logo.svg.png",
    filmmaker: {
      director_name: "Byron Howard",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Stephanie Beatriz", character_role: { es: "Mirabel", en: "Mirabel" }, character_desc: { es: "La protagonista que busca su lugar en la familia.", en: "The protagonist looking for her place in the family." } }
    ],
    keyword_labels: ["Disney", "Animation", "Family"]
  },
  {
    movie_identifier: 17,
    display_name: "ECHOES OF EQUALITY",
    release_year: 2024,
    average_score: 9.1,
    category_type: "Social",
    synopsis_text: {
      es: "Un poderoso drama social que explora la lucha por los derechos civiles en la actualidad, conectando a personas de diferentes estratos.",
      en: "A powerful social drama exploring the modern struggle for civil rights, connecting people from different backgrounds."
    },
    runtime_minutes: "2h 05m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2008_10_10_Alice_Krige_01.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2008_10_10_Alice_Krige_01.jpg",
    filmmaker: {
      director_name: "Ava DuVernay",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Viola Davis", character_role: { es: "Sarah", en: "Sarah" }, character_desc: { es: "Líder del movimiento.", en: "Leader of the movement." } }
    ],
    keyword_labels: ["Social", "Drama"]
  },
  {
    movie_identifier: 18,
    display_name: "SILICON HORIZON",
    release_year: 2025,
    average_score: 8.5,
    category_type: "Sci-Fi",
    synopsis_text: {
      es: "Un documental y thriller sobre la evolución de la tecnología, desde los primeros microchips hasta la inteligencia artificial general, y su impacto en la humanidad.",
      en: "A documentary thriller about the evolution of technology, from early microchips to AGI, and its impact on humanity."
    },
    runtime_minutes: "1h 55m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/18bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/18cov/600/900",
    filmmaker: {
      director_name: "Alex Garland",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Oscar Isaac", character_role: { es: "Dr. Alan", en: "Dr. Alan" }, character_desc: { es: "El creador de la nueva IA.", en: "The creator of the new AI." } }
    ],
    keyword_labels: ["Technology", "Sci-Fi"]
  },
  {
    movie_identifier: 19,
    display_name: "TOY ADVENTURE 3D",
    release_year: 2023,
    average_score: 8.7,
    category_type: "Animation",
    synopsis_text: {
      es: "Una emocionante película animada en 3D donde juguetes cobran vida para embarcarse en una aventura épica.",
      en: "An exciting 3D animated film where toys come to life to embark on an epic adventure."
    },
    runtime_minutes: "1h 40m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Toy_Story.svg/960px-Toy_Story.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Toy_Story.svg/960px-Toy_Story.svg.png",
    filmmaker: {
      director_name: "John Lasseter",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tom Hanks", character_role: { es: "Comisario", en: "Sheriff" }, character_desc: { es: "Líder de los juguetes.", en: "Leader of the toys." } }
    ],
    keyword_labels: ["Animation", "3D", "Family"]
  },
  {
    movie_identifier: 20,
    display_name: "TITANIC",
    release_year: 1997,
    average_score: 9.2,
    category_type: "Romance",
    synopsis_text: {
      es: "Una joven aristócrata se enamora de un artista pobre a bordo del lujoso e infortunado R.M.S. Titanic.",
      en: "A young aristocrat falls in love with a poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    runtime_minutes: "3h 14m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/20bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/20cov/600/900",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Leonardo DiCaprio", character_role: { es: "Jack", en: "Jack" }, character_desc: { es: "Un artista apasionado.", en: "A passionate artist." } },
      { actor_fullname: "Kate Winslet", character_role: { es: "Rose", en: "Rose" }, character_desc: { es: "Una joven de alta sociedad.", en: "A high society young woman." } }
    ],
    keyword_labels: ["Romance", "Drama", "Classic"]
  },
  {
    movie_identifier: 21,
    display_name: "EL PIANISTA",
    release_year: 2002,
    average_score: 8.9,
    category_type: "Social",
    synopsis_text: {
      es: "La historia real de un brillante pianista polaco que lucha por sobrevivir a la destrucción del gueto de Varsovia durante la Segunda Guerra Mundial.",
      en: "The true story of a brilliant Polish pianist who struggles to survive the destruction of the Warsaw ghetto during World War II."
    },
    runtime_minutes: "2h 30m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Adrien_Brody_Cannes_2013.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/5/59/Adrien_Brody_Cannes_2013.jpg",
    filmmaker: {
      director_name: "Roman Polanski",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Adrien Brody", character_role: { es: "Wladyslaw Szpilman", en: "Wladyslaw Szpilman" }, character_desc: { es: "Un músico excepcional.", en: "An exceptional musician." } }
    ],
    keyword_labels: ["Drama", "Biography", "War"]
  },
  {
    movie_identifier: 22,
    display_name: "SHERLOCK HOLMES",
    release_year: 2009,
    average_score: 8.1,
    category_type: "Action",
    synopsis_text: {
      es: "El detective Sherlock Holmes y su compañero el Dr. Watson inician una batalla para detener a una nueva némesis que amenaza Inglaterra.",
      en: "Detective Sherlock Holmes and his partner Dr. Watson engage in a battle to stop a new nemesis threatening England."
    },
    runtime_minutes: "2h 08m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Rathbone_as_Holmes_-_F%26R.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Rathbone_as_Holmes_-_F%26R.png",
    filmmaker: {
      director_name: "Guy Ritchie",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Robert Downey Jr.", character_role: { es: "Sherlock", en: "Sherlock" }, character_desc: { es: "El detective brillante.", en: "The brilliant detective." } }
    ],
    keyword_labels: ["Action", "Mystery", "Adventure"]
  },
  {
    movie_identifier: 23,
    display_name: "LOS TRES MOSQUETEROS",
    release_year: 2011,
    average_score: 7.5,
    category_type: "Adventure",
    synopsis_text: {
      es: "El joven D'Artagnan se une a tres legendarios pero ahora caídos en desgracia mosqueteros para derrotar a un hermoso agente doble y su empleador villano.",
      en: "The young D'Artagnan joins three legendary but now down-on-their-luck musketeers to defeat a beautiful double agent and her villainous employer."
    },
    runtime_minutes: "1h 50m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/23bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/23cov/600/900",
    filmmaker: {
      director_name: "Paul W.S. Anderson",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Logan Lerman", character_role: { es: "D'Artagnan", en: "D'Artagnan" }, character_desc: { es: "Un joven y valiente guerrero.", en: "A young and brave warrior." } }
    ],
    keyword_labels: ["Adventure", "Action"]
  },
  {
    movie_identifier: 24,
    display_name: "PIRATAS DEL CARIBE",
    release_year: 2003,
    average_score: 8.5,
    category_type: "Adventure",
    synopsis_text: {
      es: "El herrero Will Turner se une al excéntrico pirata Capitán Jack Sparrow para salvar a la hija del gobernador de las manos de los antiguos aliados piratas de Jack, que ahora son no muertos.",
      en: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save the governor's daughter from Jack's former pirate allies, who are now undead."
    },
    runtime_minutes: "2h 23m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vellido2.jpg/960px-Vellido2.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vellido2.jpg/960px-Vellido2.jpg",
    filmmaker: {
      director_name: "Gore Verbinski",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Johnny Depp", character_role: { es: "Jack Sparrow", en: "Jack Sparrow" }, character_desc: { es: "Un pirata muy peculiar.", en: "A very peculiar pirate." } }
    ],
    keyword_labels: ["Adventure", "Fantasy", "Action"]
  },
  {
    movie_identifier: 25,
    display_name: "PADRE NO HAY MÁS QUE UNO",
    release_year: 2019,
    average_score: 7.2,
    category_type: "Comedy",
    synopsis_text: {
      es: "Javier es un padre de cinco hijos que cree saberlo todo, pero su vida se vuelve un caos cuando su mujer decide irse de viaje y dejarlo al mando de la casa.",
      en: "Javier is a father of five who thinks he knows it all, but his life turns to chaos when his wife decides to go on a trip and leaves him in charge of the house."
    },
    runtime_minutes: "1h 38m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/25bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/25cov/600/900",
    filmmaker: {
      director_name: "Santiago Segura",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Santiago Segura", character_role: { es: "Javier", en: "Javier" }, character_desc: { es: "Un padre abrumado por las responsabilidades del hogar.", en: "A father overwhelmed by household responsibilities." } },
      { actor_fullname: "Toni Acosta", character_role: { es: "Marisa", en: "Marisa" }, character_desc: { es: "La madre que necesita un descanso.", en: "The mother who needs a break." } }
    ],
    keyword_labels: ["Comedy", "Family", "Spanish"]
  },
  {
    movie_identifier: 26,
    display_name: "PARÁSITOS",
    release_year: 2019,
    average_score: 8.5,
    category_type: "Social",
    synopsis_text: {
      es: "Toda la familia de Ki-taek está en el paro y se interesa mucho por el nivel de vida de la riquísima familia Park. Un día, su hijo logra que le recomienden para dar clases particulares de inglés en casa de los Park.",
      en: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
    },
    runtime_minutes: "2h 12m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Parasite_Korean_logo.png/960px-Parasite_Korean_logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Parasite_Korean_logo.png/960px-Parasite_Korean_logo.png",
    filmmaker: {
      director_name: "Bong Joon Ho",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Song Kang-ho", character_role: { es: "Ki-taek", en: "Ki-taek" }, character_desc: { es: "El padre de la familia pobre.", en: "The father of the poor family." } }
    ],
    keyword_labels: ["Social", "Thriller", "Drama"]
  },
  {
    movie_identifier: 27,
    display_name: "ORWELL (1984)",
    release_year: 1984,
    average_score: 7.1,
    category_type: "Social",
    synopsis_text: {
      es: "En una sociedad totalitaria, un hombre cuyo trabajo es reescribir la historia intenta rebelarse enamorándose y pensando en secreto.",
      en: "In a totalitarian society, a man whose daily work is rewriting history tries to rebel by falling in love and maintaining his secret thoughts."
    },
    runtime_minutes: "1h 53m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/960px-George_Orwell_press_photo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/960px-George_Orwell_press_photo.jpg",
    filmmaker: {
      director_name: "Michael Radford",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "John Hurt", character_role: { es: "Winston Smith", en: "Winston Smith" }, character_desc: { es: "Un ciudadano que empieza a dudar del sistema.", en: "A citizen who begins to doubt the system." } }
    ],
    keyword_labels: ["Social", "Sci-Fi", "Dystopia"]
  },
  {
    movie_identifier: 28,
    display_name: "CIUDAD SIN SUEÑO",
    release_year: 2002,
    average_score: 8.6,
    category_type: "Social",
    synopsis_text: {
      es: "Un crudo retrato de las favelas y cómo la criminalidad y la pobreza afectan a los jóvenes que crecen sin oportunidades.",
      en: "A raw portrait of the slums and how crime and poverty affect young people growing up without opportunities."
    },
    runtime_minutes: "2h 10m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/28bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/28cov/600/900",
    filmmaker: {
      director_name: "Fernando Meirelles",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Alexandre Rodrigues", character_role: { es: "Buscapé", en: "Rocket" }, character_desc: { es: "Un joven fotógrafo.", en: "A young photographer." } }
    ],
    keyword_labels: ["Social", "Crime", "Drama"]
  },
  {
    movie_identifier: 29,
    display_name: "EL 47",
    release_year: 2024,
    average_score: 7.5,
    category_type: "Social",
    synopsis_text: {
      es: "Basada en hechos reales, narra la lucha vecinal en Barcelona para conseguir que el autobús número 47 llegara a su barrio.",
      en: "Based on true events, it tells the story of the neighborhood struggle in Barcelona to get the number 47 bus to reach their district."
    },
    runtime_minutes: "1h 45m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Solihull_Station_-_National_Express_West_Midlands_buses_%2811609361284%29.jpg/960px-Solihull_Station_-_National_Express_West_Midlands_buses_%2811609361284%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Solihull_Station_-_National_Express_West_Midlands_buses_%2811609361284%29.jpg/960px-Solihull_Station_-_National_Express_West_Midlands_buses_%2811609361284%29.jpg",
    filmmaker: {
      director_name: "Marcel Barrena",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Eduard Fernández", character_role: { es: "Manolo Vital", en: "Manolo Vital" }, character_desc: { es: "Líder vecinal.", en: "Neighborhood leader." } }
    ],
    keyword_labels: ["Social", "History", "Spanish"]
  },
  {
    movie_identifier: 30,
    display_name: "INTOCABLE",
    release_year: 2011,
    average_score: 8.5,
    category_type: "Social",
    synopsis_text: {
      es: "Un aristócrata tetrapléjico contrata a un joven de un barrio marginal para que sea su cuidador, desarrollando una amistad inquebrantable.",
      en: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
    },
    runtime_minutes: "1h 52m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elenco_los_intocables.jpg/960px-Elenco_los_intocables.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elenco_los_intocables.jpg/960px-Elenco_los_intocables.jpg",
    filmmaker: {
      director_name: "Olivier Nakache",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Omar Sy", character_role: { es: "Driss", en: "Driss" }, character_desc: { es: "El joven cuidador.", en: "The young caregiver." } },
      { actor_fullname: "François Cluzet", character_role: { es: "Philippe", en: "Philippe" }, character_desc: { es: "El aristócrata.", en: "The aristocrat." } }
    ],
    keyword_labels: ["Social", "Comedy", "Drama"]
  },
  {
    movie_identifier: 31,
    display_name: "FORREST GUMP",
    release_year: 1994,
    average_score: 8.8,
    category_type: "Social",
    synopsis_text: {
      es: "Las presidencias de Kennedy y Johnson, la guerra de Vietnam, el Watergate y otros hechos históricos se desarrollan desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.",
      en: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
    },
    runtime_minutes: "2h 22m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Forrest_Gump.svg/960px-Forrest_Gump.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Forrest_Gump.svg/960px-Forrest_Gump.svg.png",
    filmmaker: {
      director_name: "Robert Zemeckis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tom Hanks", character_role: { es: "Forrest Gump", en: "Forrest Gump" }, character_desc: { es: "Un hombre bueno e inocente.", en: "A good and innocent man." } }
    ],
    keyword_labels: ["Social", "Drama", "Romance"]
  },
  {
    movie_identifier: 32,
    display_name: "YO SOY SAM",
    release_year: 2001,
    average_score: 7.6,
    category_type: "Social",
    synopsis_text: {
      es: "Un padre con discapacidad intelectual lucha por recuperar la custodia de su hija de 7 años, demostrando que el amor es lo único que importa.",
      en: "A mentally disabled father fights to regain custody of his 7-year-old daughter, proving that love is all that matters."
    },
    runtime_minutes: "2h 12m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/32bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/32cov/600/900",
    filmmaker: {
      director_name: "Jessie Nelson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sean Penn", character_role: { es: "Sam Dawson", en: "Sam Dawson" }, character_desc: { es: "Un padre dedicado.", en: "A dedicated father." } },
      { actor_fullname: "Dakota Fanning", character_role: { es: "Lucy", en: "Lucy" }, character_desc: { es: "La hija de Sam.", en: "Sam's daughter." } }
    ],
    keyword_labels: ["Social", "Drama", "Family"]
  },
  {
    movie_identifier: 33,
    display_name: "YO, ROBOT",
    release_year: 2004,
    average_score: 7.1,
    category_type: "Tech",
    synopsis_text: {
      es: "En el año 2035, un detective tecnófobo investiga un crimen que podría haber sido perpetrado por un robot, lo que supondría una amenaza a la raza humana.",
      en: "In 2035, a technophobic cop investigates a crime that may have been perpetrated by a robot, which leads to a larger threat to humanity."
    },
    runtime_minutes: "1h 55m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Irobot_head.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Irobot_head.jpg",
    filmmaker: {
      director_name: "Alex Proyas",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Will Smith", character_role: { es: "Del Spooner", en: "Del Spooner" }, character_desc: { es: "Detective de homicidios.", en: "Homicide detective." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Action"]
  },
  {
    movie_identifier: 34,
    display_name: "WALL·E",
    release_year: 2008,
    average_score: 8.4,
    category_type: "Tech",
    synopsis_text: {
      es: "En un futuro lejano, un pequeño robot recolector de basura se embarca en un viaje espacial que decidirá en última instancia el destino de la humanidad.",
      en: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
    },
    runtime_minutes: "1h 38m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/34bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/34cov/600/900",
    filmmaker: {
      director_name: "Andrew Stanton",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ben Burtt", character_role: { es: "WALL·E (voz)", en: "WALL·E (voice)" }, character_desc: { es: "El último robot en la Tierra.", en: "The last robot on Earth." } }
    ],
    keyword_labels: ["Tech", "Animation", "Family"]
  },
  {
    movie_identifier: 35,
    display_name: "HER",
    release_year: 2013,
    average_score: 8.0,
    category_type: "Tech",
    synopsis_text: {
      es: "En un futuro cercano, un escritor solitario desarrolla una relación romántica poco probable con un sistema operativo intuitivo, diseñado para satisfacer todas sus necesidades.",
      en: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need."
    },
    runtime_minutes: "2h 06m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Spike_Jonze_-_Her.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Spike_Jonze_-_Her.jpg",
    filmmaker: {
      director_name: "Spike Jonze",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Joaquin Phoenix", character_role: { es: "Theodore", en: "Theodore" }, character_desc: { es: "Un escritor melancólico.", en: "A melancholic writer." } }
    ],
    keyword_labels: ["Tech", "Romance", "Sci-Fi"]
  },
  {
    movie_identifier: 36,
    display_name: "EX MACHINA",
    release_year: 2014,
    average_score: 7.7,
    category_type: "Tech",
    synopsis_text: {
      es: "Un joven programador es seleccionado para participar en un experimento revolucionario en inteligencia artificial, evaluando las cualidades humanas de una IA humanoide.",
      en: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I."
    },
    runtime_minutes: "1h 48m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/36bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/36cov/600/900",
    filmmaker: {
      director_name: "Alex Garland",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Alicia Vikander", character_role: { es: "Ava", en: "Ava" }, character_desc: { es: "Un robot con inteligencia artificial avanzada.", en: "An advanced A.I. robot." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Thriller"]
  },
  {
    movie_identifier: 37,
    display_name: "THE MATRIX",
    release_year: 1999,
    average_score: 8.7,
    category_type: "Tech",
    synopsis_text: {
      es: "Un hacker informático aprende de misteriosos rebeldes sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
      en: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    runtime_minutes: "2h 16m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/37bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/37cov/600/900",
    filmmaker: {
      director_name: "The Wachowskis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Keanu Reeves", character_role: { es: "Neo", en: "Neo" }, character_desc: { es: "El elegido para liberar a la humanidad.", en: "The chosen one to free humanity." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Action"]
  },
  {
    movie_identifier: 38,
    display_name: "READY PLAYER ONE",
    release_year: 2018,
    average_score: 7.4,
    category_type: "Tech",
    synopsis_text: {
      es: "Cuando el creador de un mundo de realidad virtual llamado OASIS muere, lanza un desafío a todos los usuarios de OASIS para encontrar su huevo de Pascua oculto, que dará al descubridor toda su fortuna y el control de su mundo.",
      en: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world."
    },
    runtime_minutes: "2h 20m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Ready_Player_One_logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Ready_Player_One_logo.png",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tye Sheridan", character_role: { es: "Parzival / Wade", en: "Parzival / Wade" }, character_desc: { es: "Un joven jugador del OASIS.", en: "A young OASIS player." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Adventure"]
  },
  {
    movie_identifier: 39,
    display_name: "INDIANA JONES",
    release_year: 1981,
    average_score: 8.4,
    category_type: "Adventure",
    synopsis_text: {
      es: "El arqueólogo y aventurero Indiana Jones es contratado por el gobierno de EE.UU. para encontrar el Arca de la Alianza antes de que los nazis puedan obtener sus asombrosos poderes.",
      en: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    runtime_minutes: "1h 55m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Indiana_Jones_e_il_quadrante_del_destino_logo.jpg/960px-Indiana_Jones_e_il_quadrante_del_destino_logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Indiana_Jones_e_il_quadrante_del_destino_logo.jpg/960px-Indiana_Jones_e_il_quadrante_del_destino_logo.jpg",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Harrison Ford", character_role: { es: "Indiana Jones", en: "Indiana Jones" }, character_desc: { es: "El icónico arqueólogo.", en: "The iconic archaeologist." } }
    ],
    keyword_labels: ["Adventure", "Action", "Classic"]
  },
  {
    movie_identifier: 40,
    display_name: "NOCHE EN EL MUSEO",
    release_year: 2006,
    average_score: 6.4,
    category_type: "Adventure",
    synopsis_text: {
      es: "Un guardia de seguridad recién contratado en el Museo de Historia Natural descubre que una antigua maldición hace que los animales y exposiciones del museo cobren vida por la noche.",
      en: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc."
    },
    runtime_minutes: "1h 48m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Himno_Nacional_de_Colombia.pdf/page1-960px-Himno_Nacional_de_Colombia.pdf.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Himno_Nacional_de_Colombia.pdf/page1-960px-Himno_Nacional_de_Colombia.pdf.jpg",
    filmmaker: {
      director_name: "Shawn Levy",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ben Stiller", character_role: { es: "Larry Daley", en: "Larry Daley" }, character_desc: { es: "El guardia nocturno.", en: "The night guard." } }
    ],
    keyword_labels: ["Adventure", "Comedy", "Family"]
  },
  {
    movie_identifier: 41,
    display_name: "PIRATAS DEL CARIBE",
    release_year: 2003,
    average_score: 8.0,
    category_type: "Adventure",
    synopsis_text: {
      es: "El herrero Will Turner se une al excéntrico pirata Capitán Jack Sparrow para salvar al amor de su vida de los aliados piratas malditos de Jack.",
      en: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
    },
    runtime_minutes: "2h 23m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vellido2.jpg/960px-Vellido2.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vellido2.jpg/960px-Vellido2.jpg",
    filmmaker: {
      director_name: "Gore Verbinski",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Johnny Depp", character_role: { es: "Jack Sparrow", en: "Jack Sparrow" }, character_desc: { es: "Un pirata excéntrico.", en: "An eccentric pirate." } }
    ],
    keyword_labels: ["Adventure", "Action", "Fantasy"]
  },
  {
    movie_identifier: 42,
    display_name: "HARRY POTTER",
    release_year: 2001,
    average_score: 7.6,
    category_type: "Adventure",
    synopsis_text: {
      es: "Un niño huérfano descubre que es un mago y es enviado al Colegio Hogwarts de Magia y Hechicería, donde descubre la verdad sobre su familia.",
      en: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    runtime_minutes: "2h 32m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Harry_Potter_logo.svg/960px-Harry_Potter_logo.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Harry_Potter_logo.svg/960px-Harry_Potter_logo.svg.png",
    filmmaker: {
      director_name: "Chris Columbus",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Daniel Radcliffe", character_role: { es: "Harry Potter", en: "Harry Potter" }, character_desc: { es: "El niño que sobrevivió.", en: "The boy who lived." } }
    ],
    keyword_labels: ["Adventure", "Fantasy", "Family"]
  },
  {
    movie_identifier: 43,
    display_name: "JUMANJI",
    release_year: 1995,
    average_score: 7.0,
    category_type: "Adventure",
    synopsis_text: {
      es: "Dos niños encuentran y juegan a un juego de mesa mágico que libera a un hombre atrapado en él durante décadas, así como a una serie de peligros de la selva.",
      en: "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game."
    },
    runtime_minutes: "1h 44m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/43bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/43cov/600/900",
    filmmaker: {
      director_name: "Joe Johnston",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Robin Williams", character_role: { es: "Alan Parrish", en: "Alan Parrish" }, character_desc: { es: "Atrapado en el juego.", en: "Trapped in the game." } }
    ],
    keyword_labels: ["Adventure", "Comedy", "Family"]
  },
  {
    movie_identifier: 44,
    display_name: "JURASSIC PARK",
    release_year: 1993,
    average_score: 8.2,
    category_type: "Adventure",
    synopsis_text: {
      es: "Un pragmático paleontólogo visita un parque temático casi completo situado en una isla, lleno de dinosaurios clonados, al que se le encarga proteger a un par de niños después de que se produzca un fallo de seguridad.",
      en: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    },
    runtime_minutes: "2h 07m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/44bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/44cov/600/900",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sam Neill", character_role: { es: "Dr. Alan Grant", en: "Dr. Alan Grant" }, character_desc: { es: "Paleontólogo.", en: "Paleontologist." } }
    ],
    keyword_labels: ["Adventure", "Sci-Fi", "Thriller"]
  },
  {
    movie_identifier: 45,
    display_name: "JURASSIC WORLD",
    release_year: 2015,
    average_score: 7.0,
    category_type: "Adventure",
    synopsis_text: {
      es: "Veintidós años después de los incidentes de Jurassic Park, un nuevo parque temático operativo se sume en el caos cuando un dinosaurio híbrido genéticamente modificado escapa.",
      en: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree."
    },
    runtime_minutes: "2h 04m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/45bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/45cov/600/900",
    filmmaker: {
      director_name: "Colin Trevorrow",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Chris Pratt", character_role: { es: "Owen Grady", en: "Owen Grady" }, character_desc: { es: "Entrenador de Velociraptors.", en: "Velociraptor trainer." } }
    ],
    keyword_labels: ["Adventure", "Action", "Sci-Fi"]
  },
  {
    movie_identifier: 46,
    display_name: "101 DÁLMATAS",
    release_year: 1961,
    average_score: 7.3,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Una camada de cachorros dálmatas es secuestrada por la malvada Cruella de Vil, que quiere hacerse un abrigo con sus pieles.",
      en: "When a litter of Dalmatian puppies are abducted by the minions of Cruella de Vil, the parents must find them before she uses them for a diabolical fashion statement."
    },
    runtime_minutes: "1h 19m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/101_Dalmatians_The_Series_logo.png/960px-101_Dalmatians_The_Series_logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/101_Dalmatians_The_Series_logo.png/960px-101_Dalmatians_The_Series_logo.png",
    filmmaker: {
      director_name: "Clyde Geronimi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Rod Taylor", character_role: { es: "Pongo (voz)", en: "Pongo (voice)" }, character_desc: { es: "El padre de los cachorros.", en: "The father of the puppies." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 47,
    display_name: "VAIANA",
    release_year: 2016,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "En la antigua Polinesia, cuando una terrible maldición incurrida por el semidiós Maui llega a su isla, Vaiana responde a la llamada del Océano para buscar al semidiós y arreglar las cosas.",
      en: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
    },
    runtime_minutes: "1h 47m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/47bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/47cov/600/900",
    filmmaker: {
      director_name: "Ron Clements",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Auli'i Cravalho", character_role: { es: "Vaiana (voz)", en: "Moana (voice)" }, character_desc: { es: "La valiente heroína.", en: "The brave heroine." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Adventure"]
  },
  {
    movie_identifier: 48,
    display_name: "LA SIRENITA",
    release_year: 1989,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Una princesa sirena hace un trato con una bruja del mar para convertirse en humana y ganarse el amor de un príncipe.",
      en: "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love."
    },
    runtime_minutes: "1h 23m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/The_Little_Mermaid_logo.svg/960px-The_Little_Mermaid_logo.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/The_Little_Mermaid_logo.svg/960px-The_Little_Mermaid_logo.svg.png",
    filmmaker: {
      director_name: "John Musker",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jodi Benson", character_role: { es: "Ariel (voz)", en: "Ariel (voice)" }, character_desc: { es: "La princesa sirena.", en: "The mermaid princess." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 49,
    display_name: "LA BELLA Y LA BESTIA",
    release_year: 1991,
    average_score: 8.0,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Un príncipe hechizado en forma de bestia debe ganarse el amor de una joven hermosa antes de que caiga el último pétalo de una rosa encantada.",
      en: "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love."
    },
    runtime_minutes: "1h 24m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Beauty_And_The_Beast_-_Official_Logo.jpg/960px-Beauty_And_The_Beast_-_Official_Logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Beauty_And_The_Beast_-_Official_Logo.jpg/960px-Beauty_And_The_Beast_-_Official_Logo.jpg",
    filmmaker: {
      director_name: "Gary Trousdale",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Paige O'Hara", character_role: { es: "Bella (voz)", en: "Belle (voice)" }, character_desc: { es: "Una joven soñadora.", en: "A young dreamer." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Romance"]
  },
  {
    movie_identifier: 50,
    display_name: "FROZEN",
    release_year: 2013,
    average_score: 7.4,
    category_type: "Fantasy",
    synopsis_text: {
      es: "La princesa Anna se embarca en un viaje épico para encontrar a su hermana Elsa, cuyos poderes de hielo han atrapado su reino en un invierno eterno.",
      en: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
    },
    runtime_minutes: "1h 42m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Frozen_Logo_Black.svg/960px-Frozen_Logo_Black.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Frozen_Logo_Black.svg/960px-Frozen_Logo_Black.svg.png",
    filmmaker: {
      director_name: "Chris Buck",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Idina Menzel", character_role: { es: "Elsa (voz)", en: "Elsa (voice)" }, character_desc: { es: "La reina de las nieves.", en: "The snow queen." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 51,
    display_name: "ENREDADOS",
    release_year: 2010,
    average_score: 7.7,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Rapunzel, una princesa con cabello mágico y larguísimo, ha estado encerrada en una torre toda su vida, hasta que un apuesto ladrón la ayuda a escapar.",
      en: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is."
    },
    runtime_minutes: "1h 40m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/51bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/51cov/600/900",
    filmmaker: {
      director_name: "Nathan Greno",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Mandy Moore", character_role: { es: "Rapunzel (voz)", en: "Rapunzel (voice)" }, character_desc: { es: "La princesa perdida.", en: "The lost princess." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Comedy"]
  },
  {
    movie_identifier: 52,
    display_name: "MULÁN",
    release_year: 1998,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Para salvar a su padre de la muerte en el ejército, una joven doncella china se disfraza de hombre y toma su lugar en la guerra contra los hunos.",
      en: "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process."
    },
    runtime_minutes: "1h 28m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mulan_Logo_Black.svg/960px-Mulan_Logo_Black.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mulan_Logo_Black.svg/960px-Mulan_Logo_Black.svg.png",
    filmmaker: {
      director_name: "Tony Bancroft",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ming-Na Wen", character_role: { es: "Mulán (voz)", en: "Mulan (voice)" }, character_desc: { es: "La heroína guerrera.", en: "The warrior heroine." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Action"]
  },
  {
    movie_identifier: 53,
    display_name: "LA SIRENITA (LIVE ACTION)",
    release_year: 2023,
    average_score: 7.2,
    category_type: "Live Action",
    synopsis_text: {
      es: "Ariel, una joven y hermosa sirena con sed de aventura, hace un trato con la malvada bruja del mar Úrsula para experimentar la vida en la tierra.",
      en: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince."
    },
    runtime_minutes: "2h 15m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/The_Little_Mermaid_logo.svg/960px-The_Little_Mermaid_logo.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/The_Little_Mermaid_logo.svg/960px-The_Little_Mermaid_logo.svg.png",
    filmmaker: {
      director_name: "Rob Marshall",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Halle Bailey", character_role: { es: "Ariel", en: "Ariel" }, character_desc: { es: "La joven princesa sirena.", en: "The young mermaid princess." } }
    ],
    keyword_labels: ["Live Action", "Fantasy", "Romance"]
  },
  {
    movie_identifier: 54,
    display_name: "ALADDIN (LIVE ACTION)",
    release_year: 2019,
    average_score: 6.9,
    category_type: "Live Action",
    synopsis_text: {
      es: "Un joven de la calle de buen corazón y un Gran Visir hambriento de poder compiten por una lámpara mágica que tiene el poder de hacer que sus deseos más profundos se hagan realidad.",
      en: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
    },
    runtime_minutes: "2h 08m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Aladdin_2019_Logo_Black.svg/960px-Aladdin_2019_Logo_Black.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Aladdin_2019_Logo_Black.svg/960px-Aladdin_2019_Logo_Black.svg.png",
    filmmaker: {
      director_name: "Guy Ritchie",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Will Smith", character_role: { es: "El Genio", en: "Genie" }, character_desc: { es: "El genio de la lámpara.", en: "The genie of the lamp." } }
    ],
    keyword_labels: ["Live Action", "Fantasy", "Adventure"]
  },
  {
    movie_identifier: 55,
    display_name: "EL REY LEÓN (LIVE ACTION)",
    release_year: 2019,
    average_score: 6.8,
    category_type: "Live Action",
    synopsis_text: {
      es: "Tras el asesinato de su padre, un joven príncipe león huye de su reino sólo para aprender el verdadero significado de la responsabilidad y la valentía.",
      en: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
    },
    runtime_minutes: "1h 58m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Goyas_2024_-_Mar%C3%ADa_Le%C3%B3n.jpg/960px-Goyas_2024_-_Mar%C3%ADa_Le%C3%B3n.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Goyas_2024_-_Mar%C3%ADa_Le%C3%B3n.jpg/960px-Goyas_2024_-_Mar%C3%ADa_Le%C3%B3n.jpg",
    filmmaker: {
      director_name: "Jon Favreau",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Donald Glover", character_role: { es: "Simba (voz)", en: "Simba (voice)" }, character_desc: { es: "El príncipe león.", en: "The lion prince." } }
    ],
    keyword_labels: ["Live Action", "Adventure", "Family"]
  },
  {
    movie_identifier: 56,
    display_name: "LA BELLA Y LA BESTIA (LIVE ACTION)",
    release_year: 2017,
    average_score: 7.1,
    category_type: "Live Action",
    synopsis_text: {
      es: "Un príncipe arrogante es maldecido a vivir como una bestia aterradora hasta que encuentre el amor verdadero. Curiosamente, su oportunidad llega cuando captura a un relojero despistado, cuya hija hermosa decide tomar su lugar.",
      en: "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner."
    },
    runtime_minutes: "2h 09m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Beauty_And_The_Beast_-_Official_Logo.jpg/960px-Beauty_And_The_Beast_-_Official_Logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Beauty_And_The_Beast_-_Official_Logo.jpg/960px-Beauty_And_The_Beast_-_Official_Logo.jpg",
    filmmaker: {
      director_name: "Bill Condon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Emma Watson", character_role: { es: "Bella", en: "Belle" }, character_desc: { es: "Una joven independiente.", en: "An independent young woman." } }
    ],
    keyword_labels: ["Live Action", "Fantasy", "Romance"]
  },
  {
    movie_identifier: 57,
    display_name: "CENICIENTA (LIVE ACTION)",
    release_year: 2015,
    average_score: 6.9,
    category_type: "Live Action",
    synopsis_text: {
      es: "Cuando su padre fallece inesperadamente, la joven Ella se encuentra a merced de su cruel madrastra y sus hermanastras. Nunca abandona la esperanza, y su vida cambia cuando conoce a un apuesto extraño.",
      en: "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger."
    },
    runtime_minutes: "1h 45m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1950_is_the_Cinderella_year.jpg/960px-1950_is_the_Cinderella_year.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1950_is_the_Cinderella_year.jpg/960px-1950_is_the_Cinderella_year.jpg",
    filmmaker: {
      director_name: "Kenneth Branagh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Lily James", character_role: { es: "Cenicienta", en: "Cinderella" }, character_desc: { es: "La joven bondadosa.", en: "The kind-hearted young woman." } }
    ],
    keyword_labels: ["Live Action", "Fantasy", "Family"]
  },
  {
    movie_identifier: 58,
    display_name: "MULÁN (LIVE ACTION)",
    release_year: 2020,
    average_score: 5.8,
    category_type: "Live Action",
    synopsis_text: {
      es: "Para salvar a su padre enfermo de servir en el Ejército Imperial, una valiente joven se disfraza de hombre para luchar contra los invasores del norte de China.",
      en: "A young Chinese maiden disguises herself as a male warrior in order to save her father."
    },
    runtime_minutes: "1h 55m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mulan_Logo_Black.svg/960px-Mulan_Logo_Black.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mulan_Logo_Black.svg/960px-Mulan_Logo_Black.svg.png",
    filmmaker: {
      director_name: "Niki Caro",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Yifei Liu", character_role: { es: "Mulán", en: "Mulan" }, character_desc: { es: "La guerrera.", en: "The warrior." } }
    ],
    keyword_labels: ["Live Action", "Action", "Adventure"]
  },
  {
    movie_identifier: 59,
    display_name: "CENICIENTA (1950)",
    release_year: 1950,
    average_score: 7.3,
    category_type: "Fantasy",
    synopsis_text: {
      es: "La vida de Cenicienta cambia para siempre cuando su hada madrina aparece y la ayuda a asistir al baile real.",
      en: "When Cinderella's cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother."
    },
    runtime_minutes: "1h 14m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1950_is_the_Cinderella_year.jpg/960px-1950_is_the_Cinderella_year.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1950_is_the_Cinderella_year.jpg/960px-1950_is_the_Cinderella_year.jpg",
    filmmaker: {
      director_name: "Clyde Geronimi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ilene Woods", character_role: { es: "Cenicienta (voz)", en: "Cinderella (voice)" }, character_desc: { es: "La joven bondadosa.", en: "The kind-hearted young woman." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 60,
    display_name: "FANTASÍA 2000",
    release_year: 1999,
    average_score: 7.2,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Una actualización del clásico de Disney con nuevas animaciones espectaculares creadas para acompañar piezas de música clásica.",
      en: "An update of Disney's classic masterpiece with new extraordinary animations set to classical music."
    },
    runtime_minutes: "1h 14m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/60bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/60cov/600/900",
    filmmaker: {
      director_name: "James Algar",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Steve Martin", character_role: { es: "Presentador", en: "Presenter" }, character_desc: { es: "Introductor del segmento.", en: "Segment introducer." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Music"]
  },
  {
    movie_identifier: 61,
    display_name: "HERMANO OSO",
    release_year: 2003,
    average_score: 6.8,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Cuando un joven cazador inuit mata impulsivamente a un oso, es mágicamente transformado en oso para aprender a ver el mundo a través de sus ojos.",
      en: "When a young Inuit hunter needlessly kills a bear, he is magically changed into a bear himself as punishment with a talkative cub being his only guide to change back."
    },
    runtime_minutes: "1h 25m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Yogi_Bear_with_%22don%27t_feed_the_bears%22_message_-_NARA_-_286013.jpg/960px-Yogi_Bear_with_%22don%27t_feed_the_bears%22_message_-_NARA_-_286013.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Yogi_Bear_with_%22don%27t_feed_the_bears%22_message_-_NARA_-_286013.jpg/960px-Yogi_Bear_with_%22don%27t_feed_the_bears%22_message_-_NARA_-_286013.jpg",
    filmmaker: {
      director_name: "Aaron Blaise",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Joaquin Phoenix", character_role: { es: "Kenai (voz)", en: "Kenai (voice)" }, character_desc: { es: "El cazador transformado.", en: "The transformed hunter." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Adventure"]
  },
  {
    movie_identifier: 62,
    display_name: "MÉRIDA (BRAVE)",
    release_year: 2012,
    average_score: 7.1,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Decidida a forjar su propio camino en la vida, la princesa Mérida desafía una costumbre antigua, desatando el caos en su reino.",
      en: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse."
    },
    runtime_minutes: "1h 33m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/62bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/62cov/600/900",
    filmmaker: {
      director_name: "Mark Andrews",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Kelly Macdonald", character_role: { es: "Mérida (voz)", en: "Merida (voice)" }, character_desc: { es: "La valiente princesa.", en: "The brave princess." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Adventure"]
  },
  {
    movie_identifier: 63,
    display_name: "BLANCANIEVES",
    release_year: 1937,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Exiliada por su malvada madrastra, la princesa Blancanieves encuentra refugio en el bosque junto a siete enanitos mineros.",
      en: "Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household."
    },
    runtime_minutes: "1h 23m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Schneewitchen_%281%29.jpg/960px-Schneewitchen_%281%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Schneewitchen_%281%29.jpg/960px-Schneewitchen_%281%29.jpg",
    filmmaker: {
      director_name: "David Hand",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Adriana Caselotti", character_role: { es: "Blancanieves (voz)", en: "Snow White (voice)" }, character_desc: { es: "La primera princesa de Disney.", en: "The first Disney princess." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Classic"]
  },
  {
    movie_identifier: 64,
    display_name: "LA BELLA DURMIENTE",
    release_year: 1959,
    average_score: 7.2,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Maldita por una malvada bruja, la princesa Aurora cae en un sueño profundo del que solo podrá despertar con el beso de amor verdadero.",
      en: "After being snubbed by the royal family, a malevolent fairy places a curse on a princess which only a prince can break, along with the help of three good fairies."
    },
    runtime_minutes: "1h 15m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Skyview_Drive-in_Ad_-_23_June_1959%2C_Santa_Cruz%2C_CA.jpg/960px-Skyview_Drive-in_Ad_-_23_June_1959%2C_Santa_Cruz%2C_CA.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Skyview_Drive-in_Ad_-_23_June_1959%2C_Santa_Cruz%2C_CA.jpg/960px-Skyview_Drive-in_Ad_-_23_June_1959%2C_Santa_Cruz%2C_CA.jpg",
    filmmaker: {
      director_name: "Clyde Geronimi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Mary Costa", character_role: { es: "Princesa Aurora (voz)", en: "Princess Aurora (voice)" }, character_desc: { es: "La bella durmiente.", en: "Sleeping Beauty." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Romance"]
  },
  {
    movie_identifier: 65,
    display_name: "MUFASA: EL REY LEÓN",
    release_year: 2024,
    average_score: 7.5,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Rafiki relata la historia del ascenso de Mufasa de cachorro huérfano a uno de los mayores reyes de las Tierras del Reino.",
      en: "Simba, having become king of the Pride Lands, is determined for his cub to follow in his paw prints while the origins of his late father Mufasa are explored."
    },
    runtime_minutes: "2h 00m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mufasa_The_Lion_King_logo.png/960px-Mufasa_The_Lion_King_logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mufasa_The_Lion_King_logo.png/960px-Mufasa_The_Lion_King_logo.png",
    filmmaker: {
      director_name: "Barry Jenkins",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Aaron Pierre", character_role: { es: "Mufasa (voz)", en: "Mufasa (voice)" }, character_desc: { es: "El joven león.", en: "The young lion." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Adventure"]
  },
  {
    movie_identifier: 66,
    display_name: "LA SIRENITA 2: REGRESO AL MAR",
    release_year: 2000,
    average_score: 5.5,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Para protegerla de la hermana de Úrsula, Ariel prohíbe a su hija Melody acercarse al océano, pero la niña anhela vivir en el mar.",
      en: "To protect her from a sea witch, Ariel's daughter is not allowed in the ocean; but when she becomes 12, she runs away to an adventure under the sea."
    },
    runtime_minutes: "1h 15m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/66bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/66cov/600/900",
    filmmaker: {
      director_name: "Jim Kammerud",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tara Strong", character_role: { es: "Melody (voz)", en: "Melody (voice)" }, character_desc: { es: "La hija de Ariel.", en: "Ariel's daughter." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 67,
    display_name: "POCAHONTAS",
    release_year: 1995,
    average_score: 6.7,
    category_type: "Fantasy",
    synopsis_text: {
      es: "La historia de amor entre la princesa nativa americana Pocahontas y el capitán inglés John Smith durante la colonización de América.",
      en: "An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade seventeenth century Virginia."
    },
    runtime_minutes: "1h 21m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/67bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/67cov/600/900",
    filmmaker: {
      director_name: "Mike Gabriel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Irene Bedard", character_role: { es: "Pocahontas (voz)", en: "Pocahontas (voice)" }, character_desc: { es: "La valiente nativa americana.", en: "The brave Native American." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Romance"]
  },
  {
    movie_identifier: 68,
    display_name: "LA SIRENITA: LOS ORÍGENES DE ARIEL",
    release_year: 2008,
    average_score: 6.2,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Antes de conocer al Príncipe Eric, a Ariel le prohíben la música en el reino, por lo que se rebela con la ayuda de sus amigos.",
      en: "Ariel's mother is killed by a pirate's ship, prompting King Triton to ban music from Atlantica. Ariel, however, secretly loves music and tries to bring it back."
    },
    runtime_minutes: "1h 17m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/68bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/68cov/600/900",
    filmmaker: {
      director_name: "Peggy Holmes",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jodi Benson", character_role: { es: "Ariel (voz)", en: "Ariel (voice)" }, character_desc: { es: "La joven princesa.", en: "The young princess." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 69,
    display_name: "CAMPEONES",
    release_year: 2018,
    average_score: 7.2,
    category_type: "Social",
    synopsis_text: {
      es: "Un entrenador de baloncesto es condenado a realizar servicios sociales entrenando a un equipo de personas con discapacidad intelectual.",
      en: "A basketball coach is sentenced to community service, forced to work with a team of mentally disabled players."
    },
    runtime_minutes: "2h 04m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Premios_Goya_2019_-_Ganadores_Campeones.jpg/960px-Premios_Goya_2019_-_Ganadores_Campeones.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Premios_Goya_2019_-_Ganadores_Campeones.jpg/960px-Premios_Goya_2019_-_Ganadores_Campeones.jpg",
    filmmaker: {
      director_name: "Javier Fesser",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Javier Gutiérrez", character_role: { es: "Marco", en: "Marco" }, character_desc: { es: "El entrenador.", en: "The coach." } }
    ],
    keyword_labels: ["Social", "Comedy", "Drama"]
  },
  {
    movie_identifier: 70,
    display_name: "CAMPEONEX",
    release_year: 2023,
    average_score: 6.5,
    category_type: "Social",
    synopsis_text: {
      es: "El equipo de los Campeones abandona el baloncesto para adentrarse por error en el fascinante mundo del atletismo bajo la tutela de una entrenadora novata.",
      en: "The Champions team leaves basketball to mistakenly enter the fascinating world of track and field under the guidance of a rookie coach."
    },
    runtime_minutes: "2h 04m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/70bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/70cov/600/900",
    filmmaker: {
      director_name: "Javier Fesser",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Elisa Hipólito", character_role: { es: "Cecilia", en: "Cecilia" }, character_desc: { es: "La nueva entrenadora.", en: "The new coach." } }
    ],
    keyword_labels: ["Social", "Comedy", "Sports"]
  },
  {
    movie_identifier: 71,
    display_name: "HACIENDO AMIGOS",
    release_year: 2022,
    average_score: 6.8,
    category_type: "Social",
    synopsis_text: {
      es: "Una historia inspiradora sobre el valor de la amistad, la inclusión y cómo romper las barreras sociales para conectar de verdad.",
      en: "An inspiring story about the value of friendship, inclusion, and how to break social barriers to truly connect."
    },
    runtime_minutes: "1h 50m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/71bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/71cov/600/900",
    filmmaker: {
      director_name: "Director Invitado",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Protagonista", character_role: { es: "Amigo", en: "Friend" }, character_desc: { es: "El nexo del grupo.", en: "The nexus of the group." } }
    ],
    keyword_labels: ["Social", "Friendship", "Drama"]
  },
  {
    movie_identifier: 72,
    display_name: "LA LLAMADA",
    release_year: 2017,
    average_score: 6.5,
    category_type: "Social",
    synopsis_text: {
      es: "María y Susana, dos adolescentes rebeldes, se encuentran en un campamento de verano cristiano. La vida de María cambia cuando se le aparece Dios y le canta canciones de Whitney Houston.",
      en: "Maria and Susana, two rebellious teenagers, are at a Christian summer camp. Maria's life changes when God appears to her and sings Whitney Houston songs."
    },
    runtime_minutes: "1h 48m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_Streetcar_Named_Desire_%281951%29.jpg/960px-A_Streetcar_Named_Desire_%281951%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_Streetcar_Named_Desire_%281951%29.jpg/960px-A_Streetcar_Named_Desire_%281951%29.jpg",
    filmmaker: {
      director_name: "Javier Ambrossi, Javier Calvo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Macarena García", character_role: { es: "María", en: "Maria" }, character_desc: { es: "La joven con la visión.", en: "The young girl with the vision." } }
    ],
    keyword_labels: ["Social", "Musical", "Comedy"]
  },
  {
    movie_identifier: 73,
    display_name: "LLENOS DE GRACIA",
    release_year: 2022,
    average_score: 6.4,
    category_type: "Social",
    synopsis_text: {
      es: "La hermana Marina es enviada a principios de los años noventa a El Parral, un orfanato amenazado de cierre. Allí, decide formar un equipo de fútbol con los niños.",
      en: "Sister Marina is sent to El Parral, an orphanage threatened with closure in the 90s. There, she decides to form a football team with the kids."
    },
    runtime_minutes: "1h 49m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/73bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/73cov/600/900",
    filmmaker: {
      director_name: "Roberto Bueso",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Carmen Machi", character_role: { es: "Marina", en: "Marina" }, character_desc: { es: "La monja poco convencional.", en: "The unconventional nun." } }
    ],
    keyword_labels: ["Social", "Comedy", "Family"]
  },
  {
    movie_identifier: 74,
    display_name: "LOS NIÑOS DEL CORO",
    release_year: 2004,
    average_score: 7.9,
    category_type: "Social",
    synopsis_text: {
      es: "El nuevo profesor de música en un estricto internado para niños con problemas cambia la vida de los alumnos al formar un coro.",
      en: "The new music teacher at a strict boarding school for troubled boys changes the students' lives by forming a choir."
    },
    runtime_minutes: "1h 37m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/T%C3%B6lzer_Knabenchor_Konzertchor_Lederhosen.jpg/960px-T%C3%B6lzer_Knabenchor_Konzertchor_Lederhosen.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/T%C3%B6lzer_Knabenchor_Konzertchor_Lederhosen.jpg/960px-T%C3%B6lzer_Knabenchor_Konzertchor_Lederhosen.jpg",
    filmmaker: {
      director_name: "Christophe Barratier",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Gérard Jugnot", character_role: { es: "Clément Mathieu", en: "Clément Mathieu" }, character_desc: { es: "El profesor de música.", en: "The music teacher." } }
    ],
    keyword_labels: ["Social", "Drama", "Music"]
  },
  {
    movie_identifier: 75,
    display_name: "AMÉLIE",
    release_year: 2001,
    average_score: 8.3,
    category_type: "Social",
    synopsis_text: {
      es: "Amélie es una joven inocente e imaginativa de París que decide ayudar a las personas que la rodean y, en el camino, descubre el amor.",
      en: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love."
    },
    runtime_minutes: "2h 02m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/75bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/75cov/600/900",
    filmmaker: {
      director_name: "Jean-Pierre Jeunet",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Audrey Tautou", character_role: { es: "Amélie Poulain", en: "Amélie Poulain" }, character_desc: { es: "La protagonista.", en: "The protagonist." } }
    ],
    keyword_labels: ["Social", "Comedy", "Romance"]
  },
  {
    movie_identifier: 76,
    display_name: "JOKER",
    release_year: 2019,
    average_score: 8.4,
    category_type: "Action",
    synopsis_text: {
      es: "En Gotham, Arthur Fleck, un comediante ignorado por la sociedad, desciende a la locura y el crimen mientras se transforma en el infame Joker.",
      en: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime."
    },
    runtime_minutes: "2h 02m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Joker_%282019%29_logotype.png/960px-Joker_%282019%29_logotype.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Joker_%282019%29_logotype.png/960px-Joker_%282019%29_logotype.png",
    filmmaker: {
      director_name: "Todd Phillips",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Joaquin Phoenix", character_role: { es: "Arthur Fleck", en: "Arthur Fleck" }, character_desc: { es: "El comediante perturbado.", en: "The troubled comedian." } }
    ],
    keyword_labels: ["Action", "Drama", "Thriller"]
  },
  {
    movie_identifier: 77,
    display_name: "AVES DE PRESA (Y LA FANTABULOSA EMANCIPACIÓN DE HARLEY QUINN)",
    release_year: 2020,
    average_score: 6.1,
    category_type: "Action",
    synopsis_text: {
      es: "Después de separarse del Joker, Harley Quinn se une a otras heroínas para salvar a una niña de las garras de un malvado rey del crimen.",
      en: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord."
    },
    runtime_minutes: "1h 49m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/1/12/BirdsOfPrey2020Logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/1/12/BirdsOfPrey2020Logo.png",
    filmmaker: {
      director_name: "Cathy Yan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Margot Robbie", character_role: { es: "Harley Quinn", en: "Harley Quinn" }, character_desc: { es: "La antiheroína.", en: "The antiheroine." } }
    ],
    keyword_labels: ["Action", "Comedy", "Crime"]
  },
  {
    movie_identifier: 78,
    display_name: "TITANIC",
    release_year: 1997,
    average_score: 7.9,
    category_type: "Romance",
    synopsis_text: {
      es: "Una joven de la alta sociedad y un artista pobre se enamoran en el trágico viaje inaugural del RMS Titanic.",
      en: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    runtime_minutes: "3h 14m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/78bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/78cov/600/900",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Leonardo DiCaprio", character_role: { es: "Jack Dawson", en: "Jack Dawson" }, character_desc: { es: "El joven artista.", en: "The young artist." } }
    ],
    keyword_labels: ["Romance", "Drama", "Classic"]
  },
  {
    movie_identifier: 79,
    display_name: "EL DIARIO DE NOA",
    release_year: 2004,
    average_score: 7.8,
    category_type: "Romance",
    synopsis_text: {
      es: "Un anciano lee a una mujer con demencia la historia de dos jóvenes amantes cuyas diferentes clases sociales amenazan con separarlos.",
      en: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
    },
    runtime_minutes: "2h 03m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Juan_Gabriel_---_Pepsi_Center_---_09.26.14_%28cropped_2%29.jpg/960px-Juan_Gabriel_---_Pepsi_Center_---_09.26.14_%28cropped_2%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Juan_Gabriel_---_Pepsi_Center_---_09.26.14_%28cropped_2%29.jpg/960px-Juan_Gabriel_---_Pepsi_Center_---_09.26.14_%28cropped_2%29.jpg",
    filmmaker: {
      director_name: "Nick Cassavetes",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ryan Gosling", character_role: { es: "Noah Calhoun", en: "Noah Calhoun" }, character_desc: { es: "El joven apasionado.", en: "The passionate young man." } }
    ],
    keyword_labels: ["Romance", "Drama", "Tearjerker"]
  },
  {
    movie_identifier: 80,
    display_name: "ORGULLO Y PREJUICIO",
    release_year: 2005,
    average_score: 7.8,
    category_type: "Romance",
    synopsis_text: {
      es: "La historia de Elizabeth Bennet y el apuesto pero distante señor Darcy, que deben superar sus propios prejuicios para encontrar el amor verdadero.",
      en: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class."
    },
    runtime_minutes: "2h 09m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bust_of_Matthew_Macfadyen_as_Fitzwilliam_Darcy.jpg/960px-Bust_of_Matthew_Macfadyen_as_Fitzwilliam_Darcy.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bust_of_Matthew_Macfadyen_as_Fitzwilliam_Darcy.jpg/960px-Bust_of_Matthew_Macfadyen_as_Fitzwilliam_Darcy.jpg",
    filmmaker: {
      director_name: "Joe Wright",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Keira Knightley", character_role: { es: "Elizabeth Bennet", en: "Elizabeth Bennet" }, character_desc: { es: "La joven de gran ingenio.", en: "The witty young woman." } }
    ],
    keyword_labels: ["Romance", "Drama", "Period"]
  },
  {
    movie_identifier: 81,
    display_name: "NOTTING HILL",
    release_year: 1999,
    average_score: 7.2,
    category_type: "Romance",
    synopsis_text: {
      es: "La vida del propietario de una sencilla librería de Londres cambia para siempre cuando la estrella de cine más famosa del mundo entra en su tienda.",
      en: "The life of a simple bookshop owner changes when he meets the most famous film star in the world."
    },
    runtime_minutes: "2h 04m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Notting_Hill.JPG/960px-Notting_Hill.JPG",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Notting_Hill.JPG/960px-Notting_Hill.JPG",
    filmmaker: {
      director_name: "Roger Michell",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Hugh Grant", character_role: { es: "William Thacker", en: "William Thacker" }, character_desc: { es: "El librero londinense.", en: "The London bookseller." } }
    ],
    keyword_labels: ["Romance", "Comedy", "Classic"]
  },
  {
    movie_identifier: 82,
    display_name: "LA LA LAND",
    release_year: 2016,
    average_score: 8.0,
    category_type: "Musical",
    synopsis_text: {
      es: "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles, pero el éxito pondrá a prueba su relación.",
      en: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    },
    runtime_minutes: "2h 08m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/82bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/82cov/600/900",
    filmmaker: {
      director_name: "Damien Chazelle",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Emma Stone", character_role: { es: "Mia", en: "Mia" }, character_desc: { es: "La aspirante a actriz.", en: "The aspiring actress." } }
    ],
    keyword_labels: ["Romance", "Musical", "Drama"]
  },
  {
    movie_identifier: 83,
    display_name: "RESACÓN EN LAS VEGAS",
    release_year: 2009,
    average_score: 7.7,
    category_type: "Comedy",
    synopsis_text: {
      es: "Tres amigos despiertan de una despedida de soltero en Las Vegas sin recordar nada y sin el novio. Ahora deben desandar sus pasos para encontrarlo.",
      en: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
    },
    runtime_minutes: "1h 40m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/83bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/83cov/600/900",
    filmmaker: {
      director_name: "Todd Phillips",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Bradley Cooper", character_role: { es: "Phil", en: "Phil" }, character_desc: { es: "El líder del grupo.", en: "The leader of the group." } }
    ],
    keyword_labels: ["Comedy", "Adventure", "Party"]
  },
  {
    movie_identifier: 84,
    display_name: "SUPER SALIDOS",
    release_year: 2007,
    average_score: 7.6,
    category_type: "Comedy",
    synopsis_text: {
      es: "Dos amigos inseparables en el instituto deben enfrentar la realidad de ir a universidades separadas mientras intentan comprar alcohol para una gran fiesta.",
      en: "Two co-dependent high school seniors are forced to deal with separation anxiety as their plan to stage a booze-soaked party goes awry."
    },
    runtime_minutes: "1h 53m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Super8_kodachrome_II.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Super8_kodachrome_II.jpg",
    filmmaker: {
      director_name: "Greg Mottola",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jonah Hill", character_role: { es: "Seth", en: "Seth" }, character_desc: { es: "El amigo con grandes planes.", en: "The friend with big plans." } }
    ],
    keyword_labels: ["Comedy", "Teen", "Friendship"]
  },
  {
    movie_identifier: 85,
    display_name: "EL GRAN LEBOWSKI",
    release_year: 1998,
    average_score: 8.1,
    category_type: "Comedy",
    synopsis_text: {
      es: "Jeff 'El Nota' Lebowski, un tipo vago de Los Ángeles, se ve envuelto en un enredo de secuestro y rescate tras ser confundido con un millonario que comparte su nombre.",
      en: "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it."
    },
    runtime_minutes: "1h 57m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/85bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/85cov/600/900",
    filmmaker: {
      director_name: "Joel Coen, Ethan Coen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jeff Bridges", character_role: { es: "El Nota", en: "The Dude" }, character_desc: { es: "El tipo más relajado del mundo.", en: "The most relaxed man in the world." } }
    ],
    keyword_labels: ["Comedy", "Crime", "Classic"]
  },
  {
    movie_identifier: 86,
    display_name: "OCHO APELLIDOS VASCOS",
    release_year: 2014,
    average_score: 6.6,
    category_type: "Comedy",
    synopsis_text: {
      es: "Rafa, un andaluz de pura cepa que nunca ha salido de Sevilla, decide abandonar su tierra natal para seguir a Amaia, una chica vasca, hasta su pueblo.",
      en: "Rafa has never left his native Seville, Andalusia, until he meets a Basque girl named Amaia and decides to follow her to the Basque Country."
    },
    runtime_minutes: "1h 38m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Getaria_-_Puerto_1.JPG/960px-Getaria_-_Puerto_1.JPG",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Getaria_-_Puerto_1.JPG/960px-Getaria_-_Puerto_1.JPG",
    filmmaker: {
      director_name: "Emilio Martínez-Lázaro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Dani Rovira", character_role: { es: "Rafa", en: "Rafa" }, character_desc: { es: "El sevillano enamorado.", en: "The Sevillian in love." } }
    ],
    keyword_labels: ["Comedy", "Romance", "Spanish"]
  },
  {
    movie_identifier: 87,
    display_name: "MENTIROSO COMPULSIVO",
    release_year: 1997,
    average_score: 6.9,
    category_type: "Comedy",
    synopsis_text: {
      es: "Un abogado mentiroso encuentra su vida trastornada cuando, tras un deseo de cumpleaños de su hijo, pierde la capacidad de decir mentiras durante 24 horas.",
      en: "A fast-talking lawyer cannot tell a lie for 24 hours due to his son's birthday wish after he turns his son down for the last time."
    },
    runtime_minutes: "1h 26m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mentirosomentiroso.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mentirosomentiroso.png",
    filmmaker: {
      director_name: "Tom Shadyac",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jim Carrey", character_role: { es: "Fletcher Reede", en: "Fletcher Reede" }, character_desc: { es: "El abogado obligado a ser honesto.", en: "The lawyer forced to be honest." } }
    ],
    keyword_labels: ["Comedy", "Family", "Classic"]
  },
  {
    movie_identifier: 88,
    display_name: "MALÉFICA",
    release_year: 2014,
    average_score: 7.0,
    category_type: "Live Action",
    synopsis_text: {
      es: "La historia nunca antes contada de la villana más icónica de Disney, revelando los eventos que endurecieron su corazón y la llevaron a maldecir a la princesa Aurora.",
      en: "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land."
    },
    runtime_minutes: "1h 37m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/John_Hopkins_in_2013.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/John_Hopkins_in_2013.jpg",
    filmmaker: {
      director_name: "Robert Stromberg",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Angelina Jolie", character_role: { es: "Maléfica", en: "Maleficent" }, character_desc: { es: "La hada protectora del Páramo.", en: "The protector fairy of the Moors." } }
    ],
    keyword_labels: ["Live Action", "Fantasy", "Action"]
  },
  {
    movie_identifier: 89,
    display_name: "MUFASA: EL REY LEÓN (LIVE ACTION)",
    release_year: 2024,
    average_score: 7.5,
    category_type: "Live Action",
    synopsis_text: {
      es: "La historia de origen de Mufasa, desde sus humildes comienzos como cachorro huérfano hasta convertirse en el mayor rey de las Tierras del Reino.",
      en: "Simba, having become king of the Pride Lands, is determined for his cub to follow in his paw prints while the origins of his late father Mufasa are explored."
    },
    runtime_minutes: "2h 00m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mufasa_The_Lion_King_logo.png/960px-Mufasa_The_Lion_King_logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mufasa_The_Lion_King_logo.png/960px-Mufasa_The_Lion_King_logo.png",
    filmmaker: {
      director_name: "Barry Jenkins",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Aaron Pierre", character_role: { es: "Mufasa (voz)", en: "Mufasa (voice)" }, character_desc: { es: "El joven león.", en: "The young lion." } }
    ],
    keyword_labels: ["Live Action", "Adventure", "Drama"]
  },
  {
    movie_identifier: 90,
    display_name: "BLADE RUNNER 2049",
    release_year: 2017,
    average_score: 8.0,
    category_type: "Tech",
    synopsis_text: {
      es: "Un joven blade runner descubre un secreto largamente oculto que podría sumir a la sociedad en el caos, lo que le lleva a buscar a Rick Deckard, un antiguo blade runner desaparecido.",
      en: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
    },
    runtime_minutes: "2h 44m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/90bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/90cov/600/900",
    filmmaker: {
      director_name: "Denis Villeneuve",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ryan Gosling", character_role: { es: "K", en: "K" }, character_desc: { es: "El nuevo blade runner.", en: "The new blade runner." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Mystery"]
  },
  {
    movie_identifier: 91,
    display_name: "TRON: LEGACY",
    release_year: 2010,
    average_score: 6.8,
    category_type: "Tech",
    synopsis_text: {
      es: "El hijo de un diseñador de mundos virtuales busca a su padre desaparecido y acaba inmerso en el mismo mundo digital hiperavanzado donde su padre ha estado atrapado durante 20 años.",
      en: "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed."
    },
    runtime_minutes: "2h 05m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tron_Legacy_Logo.svg/960px-Tron_Legacy_Logo.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tron_Legacy_Logo.svg/960px-Tron_Legacy_Logo.svg.png",
    filmmaker: {
      director_name: "Joseph Kosinski",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Garrett Hedlund", character_role: { es: "Sam Flynn", en: "Sam Flynn" }, character_desc: { es: "El hijo del creador.", en: "The creator's son." } }
    ],
    keyword_labels: ["Tech", "Sci-Fi", "Action"]
  },
  {
    movie_identifier: 92,
    display_name: "GHOST IN THE SHELL",
    release_year: 2017,
    average_score: 6.3,
    category_type: "Tech",
    synopsis_text: {
      es: "En un futuro cercano, una cyborg humana única, la Mayor, lidera el grupo de trabajo de élite Sección 9 para detener a los criminales y extremistas más peligrosos.",
      en: "In the near future, Major Mira Killian is the first of her kind: A human saved from a terrible crash, who is cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals."
    },
    runtime_minutes: "1h 47m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/92bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/92cov/600/900",
    filmmaker: {
      director_name: "Rupert Sanders",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Scarlett Johansson", character_role: { es: "La Mayor", en: "Major" }, character_desc: { es: "La cyborg de élite.", en: "The elite cyborg." } }
    ],
    keyword_labels: ["Tech", "Action", "Sci-Fi"]
  },
  {
    movie_identifier: 93,
    display_name: "MINORITY REPORT",
    release_year: 2002,
    average_score: 7.6,
    category_type: "Tech",
    synopsis_text: {
      es: "En un futuro donde una unidad de policía especial puede arrestar asesinos antes de que cometan sus crímenes, un oficial de esa unidad es acusado de un futuro asesinato.",
      en: "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder."
    },
    runtime_minutes: "2h 25m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lexus_2054_Minority_Report_concept1.jpg/960px-Lexus_2054_Minority_Report_concept1.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lexus_2054_Minority_Report_concept1.jpg/960px-Lexus_2054_Minority_Report_concept1.jpg",
    filmmaker: {
      director_name: "Steven Spielberg",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tom Cruise", character_role: { es: "John Anderton", en: "John Anderton" }, character_desc: { es: "El oficial de PreCrimen.", en: "The PreCrime officer." } }
    ],
    keyword_labels: ["Tech", "Action", "Mystery"]
  },
  {
    movie_identifier: 94,
    display_name: "GHOST",
    release_year: 1990,
    average_score: 7.1,
    category_type: "Romance",
    synopsis_text: {
      es: "Después de ser asesinado, el espíritu de un joven se queda en la Tierra para proteger a su novia de un peligro inminente, con la ayuda de una peculiar médium.",
      en: "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic."
    },
    runtime_minutes: "2h 07m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/NTF_2014_-_Ghost_Rider_%2815614249517%29.jpg/960px-NTF_2014_-_Ghost_Rider_%2815614249517%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/NTF_2014_-_Ghost_Rider_%2815614249517%29.jpg/960px-NTF_2014_-_Ghost_Rider_%2815614249517%29.jpg",
    filmmaker: {
      director_name: "Jerry Zucker",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Patrick Swayze", character_role: { es: "Sam Wheat", en: "Sam Wheat" }, character_desc: { es: "El espíritu enamorado.", en: "The loving spirit." } }
    ],
    keyword_labels: ["Romance", "Fantasy", "Drama"]
  },
  {
    movie_identifier: 95,
    display_name: "LOS MISERABLES",
    release_year: 2012,
    average_score: 7.5,
    category_type: "Musical",
    synopsis_text: {
      es: "En la Francia del siglo XIX, Jean Valjean, que durante décadas ha sido perseguido por el despiadado policía Javert, acepta hacerse cargo de la hija de la trabajadora Fantine.",
      en: "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter."
    },
    runtime_minutes: "2h 38m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/95bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/95cov/600/900",
    filmmaker: {
      director_name: "Tom Hooper",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Hugh Jackman", character_role: { es: "Jean Valjean", en: "Jean Valjean" }, character_desc: { es: "El expresidiario en busca de redención.", en: "The ex-convict seeking redemption." } }
    ],
    keyword_labels: ["Musical", "Drama", "History"]
  },
  {
    movie_identifier: 96,
    display_name: "MARY POPPINS",
    release_year: 1964,
    average_score: 7.8,
    category_type: "Musical",
    synopsis_text: {
      es: "Una niñera mágica llega a Londres para trabajar para un banquero distante y sin amor, usando magia y música para devolver la alegría a su familia.",
      en: "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father."
    },
    runtime_minutes: "2h 19m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mary_Poppins6.jpg/960px-Mary_Poppins6.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mary_Poppins6.jpg/960px-Mary_Poppins6.jpg",
    filmmaker: {
      director_name: "Robert Stevenson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Julie Andrews", character_role: { es: "Mary Poppins", en: "Mary Poppins" }, character_desc: { es: "La niñera mágica.", en: "The magical nanny." } }
    ],
    keyword_labels: ["Musical", "Family", "Classic"]
  },
  {
    movie_identifier: 97,
    display_name: "MAMMA MIA!",
    release_year: 2008,
    average_score: 6.5,
    category_type: "Musical",
    synopsis_text: {
      es: "Una futura novia invita a su boda a tres hombres del pasado de su madre para descubrir quién es su verdadero padre, al ritmo de las canciones de ABBA.",
      en: "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA."
    },
    runtime_minutes: "1h 48m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/97bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/97cov/600/900",
    filmmaker: {
      director_name: "Phyllida Lloyd",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Meryl Streep", character_role: { es: "Donna Sheridan", en: "Donna Sheridan" }, character_desc: { es: "La madre independiente.", en: "The independent mother." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Romance"]
  },
  {
    movie_identifier: 98,
    display_name: "MAMMA MIA! UNA Y OTRA VEZ",
    release_year: 2018,
    average_score: 6.6,
    category_type: "Musical",
    synopsis_text: {
      es: "Mientras Sophie se prepara para la gran reapertura del hotel de su madre, repasa la historia de cómo Donna llegó a la isla mágica.",
      en: "Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past."
    },
    runtime_minutes: "1h 54m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Melissa_Barrera_2023.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Melissa_Barrera_2023.jpg",
    filmmaker: {
      director_name: "Ol Parker",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Amanda Seyfried", character_role: { es: "Sophie Sheridan", en: "Sophie Sheridan" }, character_desc: { es: "La hija de Donna.", en: "Donna's daughter." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Romance"]
  },
  {
    movie_identifier: 99,
    display_name: "DIRTY DANCING",
    release_year: 1987,
    average_score: 7.0,
    category_type: "Musical",
    synopsis_text: {
      es: "Una joven que pasa el verano en un resort vacacional se enamora del rebelde instructor de baile.",
      en: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle."
    },
    runtime_minutes: "1h 40m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_Dirty_Dancing.svg/960px-Logo_Dirty_Dancing.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_Dirty_Dancing.svg/960px-Logo_Dirty_Dancing.svg.png",
    filmmaker: {
      director_name: "Emile Ardolino",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Patrick Swayze", character_role: { es: "Johnny Castle", en: "Johnny Castle" }, character_desc: { es: "El instructor de baile.", en: "The dance instructor." } }
    ],
    keyword_labels: ["Musical", "Romance", "Drama"]
  },
  {
    movie_identifier: 100,
    display_name: "GREASE",
    release_year: 1978,
    average_score: 7.2,
    category_type: "Musical",
    synopsis_text: {
      es: "El chico malo Danny y la buena chica Sandy tienen un romance de verano, pero cuando se reencuentran en el instituto, descubren que son muy diferentes.",
      en: "Good girl Sandy Olsson and greaser Danny Zuko fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?"
    },
    runtime_minutes: "1h 50m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Film_Grease_met_John_Travolta_nog_steeds_succes_lang_rij_wachtenden_voor_bios%2C_Bestanddeelnr_930-0604.jpg/960px-Film_Grease_met_John_Travolta_nog_steeds_succes_lang_rij_wachtenden_voor_bios%2C_Bestanddeelnr_930-0604.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Film_Grease_met_John_Travolta_nog_steeds_succes_lang_rij_wachtenden_voor_bios%2C_Bestanddeelnr_930-0604.jpg/960px-Film_Grease_met_John_Travolta_nog_steeds_succes_lang_rij_wachtenden_voor_bios%2C_Bestanddeelnr_930-0604.jpg",
    filmmaker: {
      director_name: "Randal Kleiser",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "John Travolta", character_role: { es: "Danny Zuko", en: "Danny Zuko" }, character_desc: { es: "El chico malo de la escuela.", en: "The school's bad boy." } }
    ],
    keyword_labels: ["Musical", "Romance", "Classic"]
  },
  {
    movie_identifier: 101,
    display_name: "SCHOOL OF ROCK",
    release_year: 2003,
    average_score: 7.2,
    category_type: "Musical",
    synopsis_text: {
      es: "Un guitarrista expulsado de su banda se hace pasar por profesor sustituto en un estricto colegio privado, donde convierte a sus alumnos en una banda de rock.",
      en: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band."
    },
    runtime_minutes: "1h 49m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/101bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/101cov/600/900",
    filmmaker: {
      director_name: "Richard Linklater",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jack Black", character_role: { es: "Dewey Finn", en: "Dewey Finn" }, character_desc: { es: "El rockero entusiasta.", en: "The enthusiastic rocker." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Family"]
  },
  {
    movie_identifier: 102,
    display_name: "SNOOP DOGG: MAC & DEVIN GO TO HIGH SCHOOL",
    release_year: 2012,
    average_score: 4.5,
    category_type: "Musical",
    synopsis_text: {
      es: "Dos estudiantes de secundaria, uno el mejor de su clase y el otro un holgazán veterano, se unen para crear un discurso de graduación, con mucha música de por medio.",
      en: "A comedy that follows two high school students -- one overachiever struggling to write his valedictorian speech, the other a senior now going on his 15th year of school."
    },
    runtime_minutes: "1h 15m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/102bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/102cov/600/900",
    filmmaker: {
      director_name: "Dylan C. Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Snoop Dogg", character_role: { es: "Mac Johnson", en: "Mac Johnson" }, character_desc: { es: "El estudiante veterano.", en: "The 15th-year senior." } }
    ],
    keyword_labels: ["Comedy", "Musical"]
  },
  {
    movie_identifier: 103,
    display_name: "HIGH SCHOOL MUSICAL",
    release_year: 2006,
    average_score: 5.5,
    category_type: "Musical",
    synopsis_text: {
      es: "Un jugador de baloncesto y una estudiante empollona deciden presentarse juntos al casting del musical de su instituto, dividiendo a la escuela en el proceso.",
      en: "Troy, the popular captain of the basketball team, and Gabriella, the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in the school's musical."
    },
    runtime_minutes: "1h 38m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/High_School_Musical_Text_Logo.png/960px-High_School_Musical_Text_Logo.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/High_School_Musical_Text_Logo.png/960px-High_School_Musical_Text_Logo.png",
    filmmaker: {
      director_name: "Kenny Ortega",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Zac Efron", character_role: { es: "Troy Bolton", en: "Troy Bolton" }, character_desc: { es: "El capitán del equipo de baloncesto.", en: "The basketball team captain." } }
    ],
    keyword_labels: ["Musical", "Romance", "Family"]
  },
  {
    movie_identifier: 104,
    display_name: "CAMP ROCK",
    release_year: 2008,
    average_score: 5.2,
    category_type: "Musical",
    synopsis_text: {
      es: "En un campamento de verano para jóvenes músicos, una adolescente talentosa pero insegura debe encontrar su propia voz con la ayuda de un ídolo del pop exiliado.",
      en: "At a music camp for gifted teens, a popular teen idol overhears a girl singing and sets out to find who the talented voice belongs to."
    },
    runtime_minutes: "1h 34m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/2/20/DemiLovatoJonasBrothersAug10.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/2/20/DemiLovatoJonasBrothersAug10.jpg",
    filmmaker: {
      director_name: "Matthew Diamond",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Demi Lovato", character_role: { es: "Mitchie Torres", en: "Mitchie Torres" }, character_desc: { es: "La joven cantante.", en: "The young singer." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Family"]
  },
  {
    movie_identifier: 105,
    display_name: "BANDSLAM",
    release_year: 2009,
    average_score: 6.3,
    category_type: "Musical",
    synopsis_text: {
      es: "Un adolescente inadaptado se une a la chica popular del instituto para formar una banda de rock y competir en la batalla de bandas local.",
      en: "A new kid in town assembles a fledgling rock band -- together with the school's popular girl -- to compete against the best upcoming indie bands in the area."
    },
    runtime_minutes: "1h 51m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/105bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/105cov/600/900",
    filmmaker: {
      director_name: "Todd Graff",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Vanessa Hudgens", character_role: { es: "Sa5m", en: "Sa5m" }, character_desc: { es: "La guitarrista rebelde.", en: "The rebel guitarist." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Romance"]
  },
  {
    movie_identifier: 106,
    display_name: "AVATAR",
    release_year: 2009,
    average_score: 7.9,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Un marine parapléjico es enviado a la luna Pandora en una misión única, pero se debate entre seguir sus órdenes y proteger el mundo que siente como su hogar.",
      en: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },
    runtime_minutes: "2h 42m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Avatar-Logo-avatar.svg/960px-Avatar-Logo-avatar.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Avatar-Logo-avatar.svg/960px-Avatar-Logo-avatar.svg.png",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sam Worthington", character_role: { es: "Jake Sully", en: "Jake Sully" }, character_desc: { es: "El marine en un nuevo cuerpo.", en: "The marine in a new body." } }
    ],
    keyword_labels: ["Fantasy", "Sci-Fi", "Action"]
  },
  {
    movie_identifier: 107,
    display_name: "AVATAR: EL SENTIDO DEL AGUA",
    release_year: 2022,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Jake Sully vive con su nueva familia en Pandora. Una vez que una amenaza familiar regresa, Jake debe trabajar con Neytiri y el ejército Na'vi para proteger su planeta.",
      en: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
    },
    runtime_minutes: "3h 12m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Estrena_en_catal%C3%A0_d%27Avatar_El_sentit_de_l%27aigua_3.jpg/960px-Estrena_en_catal%C3%A0_d%27Avatar_El_sentit_de_l%27aigua_3.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Estrena_en_catal%C3%A0_d%27Avatar_El_sentit_de_l%27aigua_3.jpg/960px-Estrena_en_catal%C3%A0_d%27Avatar_El_sentit_de_l%27aigua_3.jpg",
    filmmaker: {
      director_name: "James Cameron",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Zoe Saldana", character_role: { es: "Neytiri", en: "Neytiri" }, character_desc: { es: "La guerrera Na'vi.", en: "The Na'vi warrior." } }
    ],
    keyword_labels: ["Fantasy", "Sci-Fi", "Adventure"]
  },
  {
    movie_identifier: 108,
    display_name: "HANNAH MONTANA: LA PELÍCULA",
    release_year: 2009,
    average_score: 4.4,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Miley Stewart lucha por mantener en equilibrio sus días de escuela y su identidad secreta como estrella del pop. Cuando su alter ego amenaza con dominar su vida, viaja a casa para recuperar la perspectiva.",
      en: "As Hannah Montana's popularity begins to take over her life, Miley Stewart, on the urging from her father takes a trip to her hometown of Crowley Corners, Tennessee to get some perspective on what matters in life the most."
    },
    runtime_minutes: "1h 42m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hannah_Montana_The_Movie_Black.svg/960px-Hannah_Montana_The_Movie_Black.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hannah_Montana_The_Movie_Black.svg/960px-Hannah_Montana_The_Movie_Black.svg.png",
    filmmaker: {
      director_name: "Peter Chelsom",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Miley Cyrus", character_role: { es: "Miley Stewart", en: "Miley Stewart" }, character_desc: { es: "La superestrella secreta.", en: "The secret superstar." } }
    ],
    keyword_labels: ["Fantasy", "Musical", "Family"]
  },
  {
    movie_identifier: 109,
    display_name: "LOS MINIONS",
    release_year: 2015,
    average_score: 6.4,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Los Minions, seres amarillos que han existido desde el principio de los tiempos, evolucionan sirviendo a los villanos más despreciables de la historia.",
      en: "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world."
    },
    runtime_minutes: "1h 31m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/109bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/109cov/600/900",
    filmmaker: {
      director_name: "Kyle Balda",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Sandra Bullock", character_role: { es: "Scarlet Overkill", en: "Scarlet Overkill" }, character_desc: { es: "La villana suprema.", en: "The ultimate villain." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Comedy"]
  },
  {
    movie_identifier: 110,
    display_name: "GRU, MI VILLANO FAVORITO",
    release_year: 2010,
    average_score: 7.6,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Un supervillano adopta a tres niñas huérfanas como parte de un plan diabólico para robar la luna, pero descubre que su amor le está cambiando la vida.",
      en: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better."
    },
    runtime_minutes: "1h 35m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Despicable_Me_logo_2.svg/960px-Despicable_Me_logo_2.svg.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Despicable_Me_logo_2.svg/960px-Despicable_Me_logo_2.svg.png",
    filmmaker: {
      director_name: "Pierre Coffin",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Steve Carell", character_role: { es: "Gru", en: "Gru" }, character_desc: { es: "El villano favorito.", en: "The favorite villain." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Comedy"]
  },
  {
    movie_identifier: 111,
    display_name: "MONSTRUOS S.A.",
    release_year: 2001,
    average_score: 8.1,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Para alimentar la ciudad, los monstruos tienen que asustar a los niños para que griten. Sin embargo, los niños son tóxicos para los monstruos, y uno se cuela en su mundo.",
      en: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think."
    },
    runtime_minutes: "1h 32m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dracula1931BelaLugosiColor.png",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dracula1931BelaLugosiColor.png",
    filmmaker: {
      director_name: "Pete Docter",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "John Goodman", character_role: { es: "Sulley", en: "Sulley" }, character_desc: { es: "El monstruo asustador.", en: "The top scarer." } }
    ],
    keyword_labels: ["Fantasy", "Animation", "Family"]
  },
  {
    movie_identifier: 112,
    display_name: "EL MAGO DE OZ",
    release_year: 1939,
    average_score: 8.1,
    category_type: "Musical",
    synopsis_text: {
      es: "Una joven es llevada por un tornado a la mágica tierra de Oz y emprende un viaje con nuevos amigos para ver al Mago que puede ayudarla a regresar a casa.",
      en: "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest to see the Wizard who can help them return home."
    },
    runtime_minutes: "1h 42m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/WIZARD_OF_OZ_ORIGINAL_POSTER_1939.jpg/960px-WIZARD_OF_OZ_ORIGINAL_POSTER_1939.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/WIZARD_OF_OZ_ORIGINAL_POSTER_1939.jpg/960px-WIZARD_OF_OZ_ORIGINAL_POSTER_1939.jpg",
    filmmaker: {
      director_name: "Victor Fleming",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Judy Garland", character_role: { es: "Dorothy", en: "Dorothy" }, character_desc: { es: "La joven de Kansas.", en: "The girl from Kansas." } }
    ],
    keyword_labels: ["Musical", "Fantasy", "Classic"]
  },
  {
    movie_identifier: 113,
    display_name: "WICKED",
    release_year: 2024,
    average_score: 7.9,
    category_type: "Musical",
    synopsis_text: {
      es: "La historia nunca contada de las brujas de Oz. Conoce a una joven incomprendida debido a su inusual piel verde y a otra joven popular y ambiciosa.",
      en: "The untold story of the witches of Oz. Follow a young woman, misunderstood because of her unusual green skin, and a popular young woman, gilded by privilege and ambition."
    },
    runtime_minutes: "2h 40m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/113bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/113cov/600/900",
    filmmaker: {
      director_name: "Jon M. Chu",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Cynthia Erivo", character_role: { es: "Elphaba", en: "Elphaba" }, character_desc: { es: "La bruja verde.", en: "The green witch." } }
    ],
    keyword_labels: ["Musical", "Fantasy", "Drama"]
  },
  {
    movie_identifier: 114,
    display_name: "ELVIS",
    release_year: 2022,
    average_score: 7.3,
    category_type: "Musical",
    synopsis_text: {
      es: "La vida y la música de Elvis Presley a través del prisma de su complicada relación con el coronel Tom Parker, su enigmático mánager.",
      en: "The life of American music icon Elvis Presley, from his childhood to becoming a rock and movie star in the 1950s while maintaining a complex relationship with his manager, Colonel Tom Parker."
    },
    runtime_minutes: "2h 39m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elvis_poster_Eva_Rinaldi_%2852124155624%29.jpg/960px-Elvis_poster_Eva_Rinaldi_%2852124155624%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elvis_poster_Eva_Rinaldi_%2852124155624%29.jpg/960px-Elvis_poster_Eva_Rinaldi_%2852124155624%29.jpg",
    filmmaker: {
      director_name: "Baz Luhrmann",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Austin Butler", character_role: { es: "Elvis Presley", en: "Elvis Presley" }, character_desc: { es: "El rey del rock and roll.", en: "The King of Rock and Roll." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 115,
    display_name: "EXPLOTA EXPLOTA",
    release_year: 2020,
    average_score: 6.2,
    category_type: "Musical",
    synopsis_text: {
      es: "María es una bailarina joven con ansias de libertad a principios de los años 70 en España. Un musical vibrante al ritmo de los grandes éxitos de Raffaella Carrà.",
      en: "María is a young dancer with a desire for freedom in early 1970s Spain. A vibrant musical set to the greatest hits of Raffaella Carrà."
    },
    runtime_minutes: "1h 56m",
    content_rating: "PG",
    bg_image_url: "https://picsum.photos/seed/115bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/115cov/600/900",
    filmmaker: {
      director_name: "Nacho Álvarez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ingrid García Jonsson", character_role: { es: "María", en: "María" }, character_desc: { es: "La bailarina soñadora.", en: "The dreaming dancer." } }
    ],
    keyword_labels: ["Musical", "Comedy", "Romance"]
  },
  {
    movie_identifier: 116,
    display_name: "HA NACIDO UNA ESTRELLA",
    release_year: 2018,
    average_score: 7.6,
    category_type: "Musical",
    synopsis_text: {
      es: "Un músico veterano ayuda a una joven cantante a encontrar la fama, incluso mientras la edad y el alcoholismo hunden su propia carrera.",
      en: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral."
    },
    runtime_minutes: "2h 16m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Invitation_%28255758205%29.jpg/960px-Invitation_%28255758205%29.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Invitation_%28255758205%29.jpg/960px-Invitation_%28255758205%29.jpg",
    filmmaker: {
      director_name: "Bradley Cooper",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Lady Gaga", character_role: { es: "Ally", en: "Ally" }, character_desc: { es: "La talentosa cantante en ascenso.", en: "The rising talented singer." } }
    ],
    keyword_labels: ["Musical", "Romance", "Drama"]
  },
  {
    movie_identifier: 117,
    display_name: "BOHEMIAN RHAPSODY",
    release_year: 2018,
    average_score: 7.9,
    category_type: "Musical",
    synopsis_text: {
      es: "La historia de la legendaria banda de rock británica Queen y su vocalista principal Freddie Mercury, antes de su famosa actuación en el Live Aid.",
      en: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)."
    },
    runtime_minutes: "2h 14m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bohemian_Rhapsody_cast_on_MTV_Movies.jpg/960px-Bohemian_Rhapsody_cast_on_MTV_Movies.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bohemian_Rhapsody_cast_on_MTV_Movies.jpg/960px-Bohemian_Rhapsody_cast_on_MTV_Movies.jpg",
    filmmaker: {
      director_name: "Bryan Singer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Rami Malek", character_role: { es: "Freddie Mercury", en: "Freddie Mercury" }, character_desc: { es: "El icónico vocalista de Queen.", en: "Queen's iconic lead singer." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 118,
    display_name: "ROCKETMAN",
    release_year: 2019,
    average_score: 7.3,
    category_type: "Musical",
    synopsis_text: {
      es: "Una fantasía musical épica sobre la increíble y humana historia de los años revelación del legendario Elton John.",
      en: "A musical fantasy about the fantastical human story of Elton John's breakthrough years."
    },
    runtime_minutes: "2h 01m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/118bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/118cov/600/900",
    filmmaker: {
      director_name: "Dexter Fletcher",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Taron Egerton", character_role: { es: "Elton John", en: "Elton John" }, character_desc: { es: "El legendario músico.", en: "The legendary musician." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 119,
    display_name: "EN LA CUERDA FLOJA",
    release_year: 2005,
    average_score: 7.8,
    category_type: "Musical",
    synopsis_text: {
      es: "Una crónica sobre la vida de la leyenda del country Johnny Cash, desde sus primeros días en una granja de algodón en Arkansas hasta su ascenso a la fama en Memphis.",
      en: "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis, and Carl Perkins."
    },
    runtime_minutes: "2h 16m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/119bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/119cov/600/900",
    filmmaker: {
      director_name: "James Mangold",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Joaquin Phoenix", character_role: { es: "Johnny Cash", en: "Johnny Cash" }, character_desc: { es: "El hombre de negro.", en: "The Man in Black." } }
    ],
    keyword_labels: ["Musical", "Biography", "Romance"]
  },
  {
    movie_identifier: 120,
    display_name: "STRAIGHT OUTTA COMPTON",
    release_year: 2015,
    average_score: 7.8,
    category_type: "Musical",
    synopsis_text: {
      es: "El grupo de rap N.W.A emerge de las duras calles de Compton en Los Ángeles a mediados de la década de 1980 y revoluciona la cultura del hip hop con su música.",
      en: "The rap group N.W.A emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood."
    },
    runtime_minutes: "2h 27m",
    content_rating: "R",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Straight_Outta_Compton_logo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Straight_Outta_Compton_logo.jpg",
    filmmaker: {
      director_name: "F. Gary Gray",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "O'Shea Jackson Jr.", character_role: { es: "Ice Cube", en: "Ice Cube" }, character_desc: { es: "El rapero poeta.", en: "The rapper poet." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 121,
    display_name: "YELLOW SUBMARINE",
    release_year: 1968,
    average_score: 7.4,
    category_type: "Musical",
    synopsis_text: {
      es: "Los Beatles acompañan al Capitán Fred en su submarino amarillo para enfrentarse a los Blue Meanies y liberar Pepperlandia.",
      en: "The Beatles agree to accompany Captain Fred in his Yellow Submarine and go to Pepperland to free it from the music-hating Blue Meanies."
    },
    runtime_minutes: "1h 29m",
    content_rating: "G",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Corgi_Yellow_Submarine.jpg/960px-Corgi_Yellow_Submarine.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Corgi_Yellow_Submarine.jpg/960px-Corgi_Yellow_Submarine.jpg",
    filmmaker: {
      director_name: "George Dunning",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "The Beatles", character_role: { es: "The Beatles", en: "The Beatles" }, character_desc: { es: "Los Fab Four.", en: "The Fab Four." } }
    ],
    keyword_labels: ["Musical", "Animation", "Adventure"]
  },
  {
    movie_identifier: 122,
    display_name: "AMADEUS",
    release_year: 1984,
    average_score: 8.4,
    category_type: "Musical",
    synopsis_text: {
      es: "La vida, el éxito y los problemas de Wolfgang Amadeus Mozart, relatados por Antonio Salieri, el compositor contemporáneo que lo envidiaba profundamente.",
      en: "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him."
    },
    runtime_minutes: "2h 40m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/122bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/122cov/600/900",
    filmmaker: {
      director_name: "Milos Forman",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Tom Hulce", character_role: { es: "Wolfgang Amadeus Mozart", en: "Wolfgang Amadeus Mozart" }, character_desc: { es: "El genio musical.", en: "The musical genius." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 123,
    display_name: "BOB MARLEY: ONE LOVE",
    release_year: 2024,
    average_score: 6.5,
    category_type: "Musical",
    synopsis_text: {
      es: "La historia de cómo Bob Marley superó las adversidades y el viaje detrás de su música revolucionaria.",
      en: "The story of how reggae icon Bob Marley overcame adversity, and the journey behind his revolutionary music."
    },
    runtime_minutes: "1h 47m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/123bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/123cov/600/900",
    filmmaker: {
      director_name: "Reinaldo Marcus Green",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Kingsley Ben-Adir", character_role: { es: "Bob Marley", en: "Bob Marley" }, character_desc: { es: "La leyenda del reggae.", en: "The reggae legend." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 124,
    display_name: "WHITNEY HOUSTON: I WANNA DANCE WITH SOMEBODY",
    release_year: 2022,
    average_score: 6.6,
    category_type: "Musical",
    synopsis_text: {
      es: "Una celebración alegre, emotiva y desgarradora de la vida y la música de Whitney Houston, una de las mejores cantantes de pop de todos los tiempos.",
      en: "A joyous, emotional, heartbreaking celebration of the life and music of Whitney Houston, one of the greatest female R&B pop vocalists of all time."
    },
    runtime_minutes: "2h 24m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/124bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/124cov/600/900",
    filmmaker: {
      director_name: "Kasi Lemmons",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Naomi Ackie", character_role: { es: "Whitney Houston", en: "Whitney Houston" }, character_desc: { es: "La voz legendaria.", en: "The legendary voice." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 125,
    display_name: "DISCO, IBIZA, LOCOMÍA",
    release_year: 2024,
    average_score: 6.0,
    category_type: "Musical",
    synopsis_text: {
      es: "La historia del grupo español Locomía, que con sus abanicos y hombreras gigantes conquistó la escena musical de la Ibiza de los años 80 y dio la vuelta al mundo.",
      en: "The story of the Spanish group Locomía, which, with their huge shoulder pads and fans, conquered the music scene of Ibiza in the 80s and the world."
    },
    runtime_minutes: "1h 44m",
    content_rating: "R",
    bg_image_url: "https://picsum.photos/seed/125bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/125cov/600/900",
    filmmaker: {
      director_name: "Kike Maíllo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Jaime Lorente", character_role: { es: "Xavi Font", en: "Xavi Font" }, character_desc: { es: "El carismático creador del grupo.", en: "The charismatic group creator." } }
    ],
    keyword_labels: ["Musical", "Biography", "Drama"]
  },
  {
    movie_identifier: 126,
    display_name: "BABE, EL CERDITO VALIENTE",
    release_year: 1995,
    average_score: 6.9,
    category_type: "Fantasy",
    synopsis_text: {
      es: "Babe, un cerdito huérfano criado por perros pastores, aprende a pastorear ovejas con un poco de ayuda del granjero Hoggett.",
      en: "Babe, a pig raised by sheepdogs, learns to herd sheep with a little help from Farmer Hoggett."
    },
    runtime_minutes: "1h 31m",
    content_rating: "G",
    bg_image_url: "https://picsum.photos/seed/126bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/126cov/600/900",
    filmmaker: {
      director_name: "Chris Noonan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "James Cromwell", character_role: { es: "Granjero Hoggett", en: "Farmer Hoggett" }, character_desc: { es: "El amable granjero.", en: "The kind farmer." } }
    ],
    keyword_labels: ["Fantasy", "Family", "Comedy"]
  },
  {
    movie_identifier: 127,
    display_name: "MUJERCITAS",
    release_year: 2019,
    average_score: 7.8,
    category_type: "Romance",
    synopsis_text: {
      es: "Jo March reflexiona sobre su vida, contando la historia de ella y de sus hermanas, cuatro jóvenes mujeres decididas a vivir la vida en sus propios términos.",
      en: "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms."
    },
    runtime_minutes: "2h 15m",
    content_rating: "PG",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Little_Women_%281933%29_poster.jpg/960px-Little_Women_%281933%29_poster.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Little_Women_%281933%29_poster.jpg/960px-Little_Women_%281933%29_poster.jpg",
    filmmaker: {
      director_name: "Greta Gerwig",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Saoirse Ronan", character_role: { es: "Jo March", en: "Jo March" }, character_desc: { es: "La escritora independiente.", en: "The independent writer." } }
    ],
    keyword_labels: ["Romance", "Drama", "Family"]
  },
  {
    movie_identifier: 128,
    display_name: "EL DIABLO VISTE DE PRADA",
    release_year: 2006,
    average_score: 6.9,
    category_type: "Romance",
    synopsis_text: {
      es: "Una joven graduada consigue un trabajo como asistente de la exigente editora de una revista de alta costura, un trabajo por el que 'un millón de chicas matarían'.",
      en: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine."
    },
    runtime_minutes: "1h 49m",
    content_rating: "PG-13",
    bg_image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_devil_wears_prada_logotipo.jpg",
    cover_image_url: "https://upload.wikimedia.org/wikipedia/commons/0/0a/The_devil_wears_prada_logotipo.jpg",
    filmmaker: {
      director_name: "David Frankel",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Anne Hathaway", character_role: { es: "Andy Sachs", en: "Andy Sachs" }, character_desc: { es: "La joven asistente.", en: "The young assistant." } }
    ],
    keyword_labels: ["Romance", "Comedy", "Drama"]
  },
  {
    movie_identifier: 129,
    display_name: "EL DIARIO DE NOA",
    release_year: 2004,
    average_score: 7.8,
    category_type: "Romance",
    synopsis_text: {
      es: "Un joven pobre y apasionado se enamora de una joven rica, pero pronto se ven separados por sus diferencias sociales.",
      en: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
    },
    runtime_minutes: "2h 03m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/129bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/129cov/600/900",
    filmmaker: {
      director_name: "Nick Cassavetes",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Ryan Gosling", character_role: { es: "Noah Calhoun", en: "Noah Calhoun" }, character_desc: { es: "El joven enamorado.", en: "The young lover." } }
    ],
    keyword_labels: ["Romance", "Drama"]
  },
  {
    movie_identifier: 130,
    display_name: "CRIADAS Y SEÑORAS",
    release_year: 2011,
    average_score: 8.1,
    category_type: "Social",
    synopsis_text: {
      es: "En el Misisipi de los años 60, una joven escritora decide entrevistar a las criadas negras que trabajan para las familias blancas y destapar el racismo.",
      en: "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work."
    },
    runtime_minutes: "2h 26m",
    content_rating: "PG-13",
    bg_image_url: "https://picsum.photos/seed/130bg/1200/800",
    cover_image_url: "https://picsum.photos/seed/130cov/600/900",
    filmmaker: {
      director_name: "Tate Taylor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [
      { actor_fullname: "Viola Davis", character_role: { es: "Aibileen Clark", en: "Aibileen Clark" }, character_desc: { es: "La criada valiente.", en: "The brave maid." } }
    ],
    keyword_labels: ["Social", "Drama"]
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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
    qualities: {
      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",
      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."
    },
    videoSrc: "",
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

  // Botones de categorías interactivas en Explore
  const exploreCategories = document.querySelectorAll('.explore-category-card');
  const subcatContainer = document.getElementById('explore-subcategories-container');
  const subcatList = document.getElementById('explore-subcategories-list');
  const subcatTitle = document.getElementById('explore-subcategories-title');
  const categoriesGrid = document.getElementById('explore-categories-grid');
  const subcatBack = document.getElementById('explore-subcategories-back');

  if (subcatBack) {
    subcatBack.addEventListener('click', () => {
      subcatContainer.style.display = 'none';
      categoriesGrid.style.display = 'grid';
    });
  }

  function applyExploreFilter(key, value) {
    if (key === 'trend') AppState.exploreFilters.trend = value;
    else if (key === 'genre') AppState.exploreFilters.genre = value;
    else AppState.exploreFilters[key] = value;
    
    // Si la propiedad no existía en el objeto principal de filtros, se añade:
    if (!('year' in AppState.exploreFilters)) {
      AppState.exploreFilters.year = 'All';
      AppState.exploreFilters.awards = false;
      AppState.exploreFilters.streaming = 'All';
      AppState.exploreFilters.director = 'All';
    }
    AppState.exploreFilters[key] = value;
    
    subcatContainer.style.display = 'none';
    categoriesGrid.style.display = 'grid';
    
    renderActiveFilters();
    renderSearchSuggestions();
  }

  exploreCategories.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      subcatList.innerHTML = '';
      
      const isEs = AppState.language === 'es';
      
      if (category === 'popular') {
        applyExploreFilter('trend', 'trending');
        return;
      }
      
      if (category === 'awards') {
        applyExploreFilter('awards', true);
        return;
      }
      
      categoriesGrid.style.display = 'none';
      subcatContainer.style.display = 'block';
      
      let options = [];
      let filterKey = '';
      
      if (category === 'genres') {
        subcatTitle.textContent = isEs ? 'Selecciona un Género' : 'Select a Genre';
        options = ['Action', 'Sci-Fi', 'Drama', 'Adventure', 'Thriller', 'Animation'];
        filterKey = 'genre';
      } else if (category === 'year') {
        subcatTitle.textContent = isEs ? 'Selecciona un Año' : 'Select a Year';
        options = ['2026', '2025', '2024', '2023', '2022', '2021', '2020'];
        filterKey = 'year';
      } else if (category === 'streaming') {
        subcatTitle.textContent = isEs ? 'Plataforma de Streaming' : 'Streaming Platform';
        options = ['Netflix', 'Apple TV+', 'Max', 'Amazon Prime', 'Disney+', 'Hulu'];
        filterKey = 'streaming';
      } else if (category === 'directors') {
        subcatTitle.textContent = isEs ? 'Directores Destacados' : 'Top Directors';
        options = ['Christopher Nolan', 'Denis Villeneuve', 'Ridley Scott', 'Wes Ball', 'Bong Joon-ho'];
        filterKey = 'director';
      }
      
      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.style.padding = '8px 16px';
        btn.style.background = 'rgba(255,255,255,0.1)';
        btn.style.color = '#fff';
        btn.style.border = '1px solid rgba(255,255,255,0.2)';
        btn.style.borderRadius = '20px';
        btn.style.cursor = 'pointer';
        btn.textContent = opt;
        
        btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,0.2)';
        btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,0.1)';
        
        btn.onclick = () => {
          applyExploreFilter(filterKey, opt);
        };
        
        subcatList.appendChild(btn);
      });
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
  } else if (filterType === 'year') {
    AppState.exploreFilters.year = 'All';
  } else if (filterType === 'streaming') {
    AppState.exploreFilters.streaming = 'All';
  } else if (filterType === 'director') {
    AppState.exploreFilters.director = 'All';
  } else if (filterType === 'awards') {
    AppState.exploreFilters.awards = false;
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
    
    const moviesGrid = document.createElement('div');
    moviesGrid.className = 'movies-grid';
    
    if (list.movies.length === 0) {
      moviesGrid.innerHTML = `<p style="color: #94a3b8; font-size: 14px; grid-column: 1 / -1;">${AppState.language === 'es' ? 'Esta lista está vacía.' : 'This list is empty.'}</p>`;
    } else {
      const movies = MOVIES_DATA.filter(m => list.movies.includes(m.id));
      movies.forEach(movie => {
        if (typeof createMovieCardElement === 'function') {
          moviesGrid.appendChild(createMovieCardElement(movie));
        }
      });
    }
    
    listSection.appendChild(moviesGrid);
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
