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
      avatar: "https://picsum.photos/seed/avatar51/150/150"
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
      avatar: "https://picsum.photos/seed/avatar52/150/150"
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
      avatar: "https://picsum.photos/seed/avatar53/150/150"
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
      avatar: "https://picsum.photos/seed/avatar54/150/150"
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
      avatar: "https://picsum.photos/seed/avatar55/150/150"
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
      avatar: "https://picsum.photos/seed/avatar56/150/150"
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
      avatar: "https://picsum.photos/seed/avatar57/150/150"
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
      avatar: "https://picsum.photos/seed/avatar58/150/150"
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
      avatar: "https://picsum.photos/seed/avatar59/150/150"
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
      avatar: "https://picsum.photos/seed/avatar60/150/150"
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
      avatar: "https://picsum.photos/seed/avatar61/150/150"
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
      avatar: "https://picsum.photos/seed/avatar62/150/150"
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
      avatar: "https://picsum.photos/seed/avatar63/150/150"
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
      avatar: "https://picsum.photos/seed/avatar64/150/150"
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
      avatar: "https://picsum.photos/seed/avatar65/150/150"
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
      avatar: "https://picsum.photos/seed/avatar66/150/150"
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
      avatar: "https://picsum.photos/seed/avatar67/150/150"
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
      avatar: "https://picsum.photos/seed/avatar68/150/150"
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
      avatar: "https://picsum.photos/seed/avatar69/150/150"
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
      avatar: "https://picsum.photos/seed/avatar70/150/150"
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
      avatar: "https://picsum.photos/seed/avatar71/150/150"
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
      avatar: "https://picsum.photos/seed/avatar72/150/150"
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
      avatar: "https://picsum.photos/seed/avatar73/150/150"
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
      avatar: "https://picsum.photos/seed/avatar74/150/150"
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
      avatar: "https://picsum.photos/seed/avatar75/150/150"
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
      avatar: "https://picsum.photos/seed/avatar76/150/150"
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
      avatar: "https://picsum.photos/seed/avatar77/150/150"
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
      avatar: "https://picsum.photos/seed/avatar78/150/150"
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
      avatar: "https://picsum.photos/seed/avatar79/150/150"
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
      avatar: "https://picsum.photos/seed/avatar80/150/150"
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
      avatar: "https://picsum.photos/seed/avatar81/150/150"
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
      avatar: "https://picsum.photos/seed/avatar82/150/150"
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
      avatar: "https://picsum.photos/seed/avatar83/150/150"
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
      avatar: "https://picsum.photos/seed/avatar84/150/150"
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
      avatar: "https://picsum.photos/seed/avatar85/150/150"
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
      avatar: "https://picsum.photos/seed/avatar86/150/150"
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
      avatar: "https://picsum.photos/seed/avatar87/150/150"
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
      avatar: "https://picsum.photos/seed/avatar88/150/150"
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
      avatar: "https://picsum.photos/seed/avatar89/150/150"
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
      avatar: "https://picsum.photos/seed/avatar90/150/150"
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
      avatar: "https://picsum.photos/seed/avatar91/150/150"
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
      avatar: "https://picsum.photos/seed/avatar92/150/150"
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
      avatar: "https://picsum.photos/seed/avatar93/150/150"
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
      avatar: "https://picsum.photos/seed/avatar94/150/150"
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
      avatar: "https://picsum.photos/seed/avatar95/150/150"
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
      avatar: "https://picsum.photos/seed/avatar96/150/150"
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
      avatar: "https://picsum.photos/seed/avatar97/150/150"
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
      avatar: "https://picsum.photos/seed/avatar98/150/150"
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
      avatar: "https://picsum.photos/seed/avatar99/150/150"
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
      avatar: "https://picsum.photos/seed/avatar100/150/150"
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
      avatar: "https://picsum.photos/seed/avatar101/150/150"
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
      avatar: "https://picsum.photos/seed/avatar102/150/150"
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
      avatar: "https://picsum.photos/seed/avatar103/150/150"
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
      avatar: "https://picsum.photos/seed/avatar104/150/150"
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
      avatar: "https://picsum.photos/seed/avatar105/150/150"
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
      avatar: "https://picsum.photos/seed/avatar106/150/150"
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
      avatar: "https://picsum.photos/seed/avatar107/150/150"
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
      avatar: "https://picsum.photos/seed/avatar108/150/150"
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
      avatar: "https://picsum.photos/seed/avatar109/150/150"
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
      avatar: "https://picsum.photos/seed/avatar110/150/150"
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
      avatar: "https://picsum.photos/seed/avatar111/150/150"
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
      avatar: "https://picsum.photos/seed/avatar112/150/150"
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
      avatar: "https://picsum.photos/seed/avatar113/150/150"
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
      avatar: "https://picsum.photos/seed/avatar114/150/150"
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
      avatar: "https://picsum.photos/seed/avatar115/150/150"
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
      avatar: "https://picsum.photos/seed/avatar116/150/150"
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
      avatar: "https://picsum.photos/seed/avatar117/150/150"
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
      avatar: "https://picsum.photos/seed/avatar118/150/150"
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
      avatar: "https://picsum.photos/seed/avatar119/150/150"
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
      avatar: "https://picsum.photos/seed/avatar120/150/150"
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
      avatar: "https://picsum.photos/seed/avatar121/150/150"
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
      avatar: "https://picsum.photos/seed/avatar122/150/150"
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
      avatar: "https://picsum.photos/seed/avatar123/150/150"
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
      avatar: "https://picsum.photos/seed/avatar124/150/150"
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
      avatar: "https://picsum.photos/seed/avatar125/150/150"
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
      avatar: "https://picsum.photos/seed/avatar126/150/150"
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
      avatar: "https://picsum.photos/seed/avatar127/150/150"
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
      avatar: "https://picsum.photos/seed/avatar128/150/150"
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
      avatar: "https://picsum.photos/seed/avatar129/150/150"
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
      avatar: "https://picsum.photos/seed/avatar130/150/150"
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
      avatar: "https://picsum.photos/seed/avatar131/150/150"
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
      avatar: "https://picsum.photos/seed/avatar132/150/150"
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
      avatar: "https://picsum.photos/seed/avatar133/150/150"
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
      avatar: "https://picsum.photos/seed/avatar134/150/150"
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
      avatar: "https://picsum.photos/seed/avatar135/150/150"
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
      avatar: "https://picsum.photos/seed/avatar136/150/150"
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
      avatar: "https://picsum.photos/seed/avatar137/150/150"
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
      avatar: "https://picsum.photos/seed/avatar138/150/150"
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
      avatar: "https://picsum.photos/seed/avatar139/150/150"
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
      avatar: "https://picsum.photos/seed/avatar140/150/150"
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
      avatar: "https://picsum.photos/seed/avatar141/150/150"
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
      avatar: "https://picsum.photos/seed/avatar142/150/150"
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
      avatar: "https://picsum.photos/seed/avatar143/150/150"
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
      avatar: "https://picsum.photos/seed/avatar144/150/150"
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
      avatar: "https://picsum.photos/seed/avatar145/150/150"
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
      avatar: "https://picsum.photos/seed/avatar146/150/150"
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
      avatar: "https://picsum.photos/seed/avatar147/150/150"
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
      avatar: "https://picsum.photos/seed/avatar148/150/150"
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
      avatar: "https://picsum.photos/seed/avatar149/150/150"
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
      avatar: "https://picsum.photos/seed/avatar150/150/150"
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
      avatar: "https://picsum.photos/seed/avatar151/150/150"
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
      avatar: "https://picsum.photos/seed/avatar152/150/150"
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
      avatar: "https://picsum.photos/seed/avatar153/150/150"
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
      avatar: "https://picsum.photos/seed/avatar154/150/150"
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
      avatar: "https://picsum.photos/seed/avatar155/150/150"
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
      avatar: "https://picsum.photos/seed/avatar156/150/150"
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
      avatar: "https://picsum.photos/seed/avatar157/150/150"
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
      avatar: "https://picsum.photos/seed/avatar158/150/150"
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
      avatar: "https://picsum.photos/seed/avatar159/150/150"
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
      avatar: "https://picsum.photos/seed/avatar160/150/150"
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
      avatar: "https://picsum.photos/seed/avatar161/150/150"
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
      avatar: "https://picsum.photos/seed/avatar162/150/150"
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
      avatar: "https://picsum.photos/seed/avatar163/150/150"
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
      avatar: "https://picsum.photos/seed/avatar164/150/150"
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
      avatar: "https://picsum.photos/seed/avatar165/150/150"
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
      avatar: "https://picsum.photos/seed/avatar166/150/150"
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
      avatar: "https://picsum.photos/seed/avatar167/150/150"
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
      avatar: "https://picsum.photos/seed/avatar168/150/150"
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
      avatar: "https://picsum.photos/seed/avatar169/150/150"
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
      avatar: "https://picsum.photos/seed/avatar170/150/150"
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
      avatar: "https://picsum.photos/seed/avatar171/150/150"
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
      avatar: "https://picsum.photos/seed/avatar172/150/150"
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
      avatar: "https://picsum.photos/seed/avatar173/150/150"
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
      avatar: "https://picsum.photos/seed/avatar174/150/150"
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
      avatar: "https://picsum.photos/seed/avatar175/150/150"
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
      avatar: "https://picsum.photos/seed/avatar176/150/150"
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
      avatar: "https://picsum.photos/seed/avatar177/150/150"
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
      avatar: "https://picsum.photos/seed/avatar178/150/150"
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
      avatar: "https://picsum.photos/seed/avatar179/150/150"
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
      avatar: "https://picsum.photos/seed/avatar180/150/150"
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
    photo: "https://picsum.photos/seed/avatar181/150/150",
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
    photo: "https://picsum.photos/seed/avatar182/150/150",
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
    photo: "https://picsum.photos/seed/avatar183/150/150",
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
    photo: "https://picsum.photos/seed/avatar184/150/150",
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
    photo: "https://picsum.photos/seed/avatar185/150/150",
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
    photo: "https://picsum.photos/seed/avatar186/150/150",
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
    photo: "https://picsum.photos/seed/avatar187/150/150",
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
    photo: "https://picsum.photos/seed/avatar188/150/150",
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
    photo: "https://picsum.photos/seed/avatar189/150/150",
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
    photo: "https://picsum.photos/seed/avatar190/150/150",
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
    photo: "https://picsum.photos/seed/avatar191/150/150",
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
    photo: "https://picsum.photos/seed/avatar192/150/150",
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
    photo: "https://picsum.photos/seed/avatar193/150/150",
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
    photo: "https://picsum.photos/seed/avatar194/150/150",
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
    photo: "https://picsum.photos/seed/avatar195/150/150",
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


// Nuevas categorías de WOM!
const CONCERTS_DATA = [
  {
    "movie_identifier": 1001,
    "display_name": "Lola Índigo en Vivo",
    "release_year": 2026,
    "average_score": 9.5,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "La gira más espectacular de Lola Índigo, llena de baile, energía y sus mejores éxitos.",
      "en": "The most spectacular tour by Lola Índigo, full of dance, energy and her greatest hits."
    },
    "runtime_minutes": "2h 30m",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg26/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover1/600/900",
    "filmmaker": {
      "director_name": "Lola Índigo",
      "avatar": "https://picsum.photos/seed/avatar196/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "urbano",
      "reggaeton"
    ],
    "event_details": {
      "fecha": "15 Oct 2026",
      "hora": "21:00",
      "lugar": "WiZink Center, Madrid",
      "precio": "45€ - 80€",
      "web_compra": "https://entradas.wom.com/lolaindigo"
    }
  },
  {
    "movie_identifier": 1002,
    "display_name": "Metrika Live",
    "release_year": 2026,
    "average_score": 8.8,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "Disfruta de la nueva ola del trap con Metrika en un concierto íntimo.",
      "en": "Enjoy the new wave of trap with Metrika in an intimate concert."
    },
    "runtime_minutes": "1h 45m",
    "content_rating": "16+",
    "bg_image_url": "https://picsum.photos/seed/bg27/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2/600/900",
    "filmmaker": {
      "director_name": "Metrika",
      "avatar": "https://picsum.photos/seed/avatar197/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "trap",
      "urbano"
    ],
    "event_details": {
      "fecha": "22 Nov 2026",
      "hora": "22:30",
      "lugar": "Sala La Riviera, Madrid",
      "precio": "25€",
      "web_compra": "https://entradas.wom.com/metrika"
    }
  },
  {
    "movie_identifier": 1003,
    "display_name": "Ana Mena: Bellodrama Tour",
    "release_year": 2026,
    "average_score": 9.2,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "La princesa del pop español presenta su aclamado Bellodrama.",
      "en": "The princess of Spanish pop presents her acclaimed Bellodrama."
    },
    "runtime_minutes": "2h 00m",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg28/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover3/600/900",
    "filmmaker": {
      "director_name": "Ana Mena",
      "avatar": "https://picsum.photos/seed/avatar198/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "pop",
      "urbano"
    ],
    "event_details": {
      "fecha": "05 Dic 2026",
      "hora": "20:30",
      "lugar": "WiZink Center, Madrid",
      "precio": "35€ - 65€",
      "web_compra": "https://entradas.wom.com/anamena"
    }
  },
  {
    "movie_identifier": 1004,
    "display_name": "Becky G & Karol G: Bichota Tour",
    "release_year": 2026,
    "average_score": 9.8,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "Una noche histórica donde las reinas de la música urbana se unen en el escenario.",
      "en": "A historic night where the queens of urban music unite on stage."
    },
    "runtime_minutes": "3h 00m",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg29/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover4/600/900",
    "filmmaker": {
      "director_name": "Becky G, Karol G",
      "avatar": "https://picsum.photos/seed/avatar199/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "reggaeton",
      "urbano"
    ],
    "event_details": {
      "fecha": "18 Sep 2026",
      "hora": "21:00",
      "lugar": "Estadio Santiago Bernabéu, Madrid",
      "precio": "60€ - 150€",
      "web_compra": "https://entradas.wom.com/bichota"
    }
  },
  {
    "movie_identifier": 1005,
    "display_name": "Bad Bunny: Un Verano Sin Ti",
    "release_year": 2026,
    "average_score": 9.9,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "El conejo malo regresa a Madrid para una noche de perreo intenso.",
      "en": "The bad rabbit returns to Madrid for a night of intense perreo."
    },
    "runtime_minutes": "2h 45m",
    "content_rating": "16+",
    "bg_image_url": "https://picsum.photos/seed/bg30/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover5/600/900",
    "filmmaker": {
      "director_name": "Bad Bunny",
      "avatar": "https://picsum.photos/seed/avatar200/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "reggaeton antiguo",
      "trap",
      "urbano"
    ],
    "event_details": {
      "fecha": "10 Jul 2026",
      "hora": "22:00",
      "lugar": "Estadio Cívitas Metropolitano, Madrid",
      "precio": "75€ - 200€",
      "web_compra": "https://entradas.wom.com/badbunny"
    }
  },
  {
    "movie_identifier": 1006,
    "display_name": "L0rna y Luna Ki: Cyberpunk Night",
    "release_year": 2026,
    "average_score": 8.5,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "Una experiencia audiovisual única con el mejor hyperpop y sonidos experimentales.",
      "en": "A unique audiovisual experience with the best hyperpop and experimental sounds."
    },
    "runtime_minutes": "2h 15m",
    "content_rating": "18+",
    "bg_image_url": "https://picsum.photos/seed/bg31/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover6/600/900",
    "filmmaker": {
      "director_name": "L0rna, Luna Ki",
      "avatar": "https://picsum.photos/seed/avatar201/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "otros",
      "trap"
    ],
    "event_details": {
      "fecha": "30 Oct 2026",
      "hora": "23:59",
      "lugar": "Sala Ochoymedio, Madrid",
      "precio": "20€",
      "web_compra": "https://entradas.wom.com/lornalunaki"
    }
  },
  {
    "movie_identifier": 1007,
    "display_name": "Quevedo: Donde Quiero Estar",
    "release_year": 2026,
    "average_score": 9.4,
    "category_type": "Concierto",
    "synopsis_text": {
      "es": "El fenómeno canario trae todos sus hits a la capital.",
      "en": "The Canarian phenomenon brings all his hits to the capital."
    },
    "runtime_minutes": "2h 00m",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg32/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover7/600/900",
    "filmmaker": {
      "director_name": "Quevedo",
      "avatar": "https://picsum.photos/seed/avatar202/150/150"
    },
    "actors_list": [],
    "keyword_labels": [
      "urbano",
      "reggaeton"
    ],
    "event_details": {
      "fecha": "12 Mar 2026",
      "hora": "21:00",
      "lugar": "WiZink Center, Madrid",
      "precio": "40€ - 70€",
      "web_compra": "https://entradas.wom.com/quevedo"
    }
  }
];
const BOOKS_DATA = [
  {
    "movie_identifier": 2001,
    "display_name": "El Código Estelar",
    "release_year": 2023,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una novela de ciencia ficción sobre descifrar mensajes de civilizaciones antiguas.",
      "en": "A sci-fi novel about deciphering messages from ancient civilizations."
    },
    "runtime_minutes": "350 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg33/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover8/600/900",
    "filmmaker": {
      "director_name": "Autor Desconocido",
      "avatar": ""
    },
    "actors_list": [],
    "keyword_labels": [
      "Sci-Fi",
      "Mystery"
    ]
  }
];
const THEATER_DATA = [
  {
    "movie_identifier": 3001,
    "display_name": "Atrapados en el Tiempo",
    "release_year": 2025,
    "average_score": 8.4,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Una obra de teatro inmersiva basada en paradojas temporales.",
      "en": "An immersive theater play based on time paradoxes."
    },
    "runtime_minutes": "1h 45m",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg34/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover9/600/900",
    "filmmaker": {
      "director_name": "Director Teatral",
      "avatar": ""
    },
    "actors_list": [],
    "keyword_labels": [
      "Drama",
      "Sci-Fi"
    ]
  }
];
const EVENTS_DATA = [
  {
    "movie_identifier": 4001,
    "display_name": "Hackathon de Accesibilidad",
    "release_year": 2026,
    "average_score": 9,
    "category_type": "Evento",
    "synopsis_text": {
      "es": "Únete a este evento para diseñar soluciones web accesibles y competir por premios.",
      "en": "Join this event to design accessible web solutions and compete for prizes."
    },
    "runtime_minutes": "24h",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg35/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover10/600/900",
    "filmmaker": {
      "director_name": "Comunidad Tech",
      "avatar": ""
    },
    "actors_list": [],
    "keyword_labels": [
      "TICs",
      "Accesibilidad",
      "Diseño Web"
    ],
    "event_details": {
      "fecha": "10 Ago 2026",
      "hora": "10:00",
      "lugar": "Campus Google, Madrid",
      "precio": "Gratis",
      "web_compra": "https://eventos.wom.com/hackathon"
    }
  },
  {
    "movie_identifier": 4002,
    "display_name": "Tardeo y Cine Clásico",
    "release_year": 2026,
    "average_score": 8.7,
    "category_type": "Evento",
    "synopsis_text": {
      "es": "Disfruta de un tardeo con música en vivo seguido de una proyección de cine clásico al aire libre.",
      "en": "Enjoy an afternoon with live music followed by an open-air classic cinema screening."
    },
    "runtime_minutes": "4h",
    "content_rating": "18+",
    "bg_image_url": "https://picsum.photos/seed/bg36/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover11/600/900",
    "filmmaker": {
      "director_name": "Quedadas Madrid",
      "avatar": ""
    },
    "actors_list": [],
    "keyword_labels": [
      "Quedadas",
      "tardeo",
      "cine"
    ],
    "event_details": {
      "fecha": "20 Ago 2026",
      "hora": "18:00",
      "lugar": "Terraza Matadero, Madrid",
      "precio": "15€",
      "web_compra": "https://eventos.wom.com/tardeocine"
    }
  },
  {
    "movie_identifier": 4003,
    "display_name": "Congreso de Ciberseguridad",
    "release_year": 2026,
    "average_score": 9.3,
    "category_type": "Evento",
    "synopsis_text": {
      "es": "Los mayores expertos en seguridad informática se reúnen para debatir sobre el futuro de las TICs.",
      "en": "Top cybersecurity experts gather to discuss the future of ICTs."
    },
    "runtime_minutes": "8h",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg37/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover12/600/900",
    "filmmaker": {
      "director_name": "Security Group",
      "avatar": ""
    },
    "actors_list": [],
    "keyword_labels": [
      "Seguridad",
      "TICs"
    ],
    "event_details": {
      "fecha": "05 Sep 2026",
      "hora": "09:00",
      "lugar": "IFEMA, Madrid",
      "precio": "120€",
      "web_compra": "https://eventos.wom.com/ciberseguridad"
    }
  }
];



// Nuevos planes de Fever, Luma y Nomdtable
const EXTERNAL_PLANS_DATA = [
  {
    "movie_identifier": 5001,
    "display_name": "Sorolla a través de la luz",
    "release_year": 2026,
    "average_score": 9.6,
    "category_type": "Exposición",
    "synopsis_text": {
      "es": "Una exposición inmersiva sin precedentes en el Palacio Real de Madrid. Descubre las obras maestras del pintor valenciano en una experiencia sensorial con realidad virtual y salas digitales.",
      "en": "An unprecedented immersive exhibition at the Royal Palace of Madrid. Discover the masterpieces of the Valencian painter in a sensory experience."
    },
    "runtime_minutes": "1h 30m",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg38/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover13/600/900",
    "keyword_labels": [
      "Fever",
      "Arte",
      "Inmersivo"
    ],
    "event_details": {
      "fecha": "Hasta el 30 Nov 2026",
      "hora": "10:00 - 20:00",
      "lugar": "Palacio Real, Madrid",
      "precio": "Desde 14€",
      "web_compra": "https://feverup.com/m/sorolla-madrid",
      "plataforma": "Fever"
    }
  },
  {
    "movie_identifier": 5002,
    "display_name": "Dining in the Dark",
    "release_year": 2026,
    "average_score": 8.9,
    "category_type": "Gastronomía",
    "synopsis_text": {
      "es": "¿Alguna vez te has preguntado cómo es comer a oscuras? Agudiza tus sentidos en este misterioso y exclusivo evento gastronómico.",
      "en": "Have you ever wondered what it's like to eat in the dark? Sharpen your senses at this mysterious dining event."
    },
    "runtime_minutes": "2h",
    "content_rating": "18+",
    "bg_image_url": "https://picsum.photos/seed/bg39/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover14/600/900",
    "keyword_labels": [
      "Fever",
      "Gastronomía",
      "Cena"
    ],
    "event_details": {
      "fecha": "Jueves a Domingos",
      "hora": "21:00",
      "lugar": "Restaurante Secreto, Madrid Centro",
      "precio": "49€",
      "web_compra": "https://feverup.com/m/dining-in-the-dark-madrid",
      "plataforma": "Fever"
    }
  },
  {
    "movie_identifier": 5003,
    "display_name": "Madrid Tech Builders Meetup",
    "release_year": 2026,
    "average_score": 9.2,
    "category_type": "Tech Meetup",
    "synopsis_text": {
      "es": "Reunión exclusiva para desarrolladores, founders y diseñadores de producto. Charlas, networking y pizza. Organizado por la comunidad tech de Madrid.",
      "en": "Exclusive meeting for developers, founders and product designers. Talks, networking and pizza."
    },
    "runtime_minutes": "3h",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg40/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover15/600/900",
    "keyword_labels": [
      "Luma",
      "Tech",
      "Networking",
      "TICs"
    ],
    "event_details": {
      "fecha": "12 Oct 2026",
      "hora": "18:30",
      "lugar": "Google for Startups Campus, Madrid",
      "precio": "Gratis",
      "web_compra": "https://lu.ma/madrid-tech-builders",
      "plataforma": "Luma"
    }
  },
  {
    "movie_identifier": 5004,
    "display_name": "Web3 & AI Design Workshop",
    "release_year": 2026,
    "average_score": 9.8,
    "category_type": "Workshop",
    "synopsis_text": {
      "es": "Taller práctico sobre la integración de Inteligencia Artificial en el diseño de interfaces Web3.",
      "en": "Practical workshop on the integration of AI in Web3 interface design."
    },
    "runtime_minutes": "4h",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg41/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover16/600/900",
    "keyword_labels": [
      "Luma",
      "Diseño Web",
      "AI"
    ],
    "event_details": {
      "fecha": "25 Nov 2026",
      "hora": "10:00",
      "lugar": "La Nave, Madrid",
      "precio": "15€",
      "web_compra": "https://lu.ma/web3-ai-design",
      "plataforma": "Luma"
    }
  },
  {
    "movie_identifier": 5005,
    "display_name": "Ruta de Vinos y Quesos por Malasaña",
    "release_year": 2026,
    "average_score": 9.5,
    "category_type": "Tardeo",
    "synopsis_text": {
      "es": "Descubre los mejores locales de Malasaña en esta ruta exclusiva. Incluye degustación de 4 vinos y 4 quesos artesanales.",
      "en": "Discover the best spots in Malasaña on this exclusive route."
    },
    "runtime_minutes": "2.5h",
    "content_rating": "18+",
    "bg_image_url": "https://picsum.photos/seed/bg42/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover17/600/900",
    "keyword_labels": [
      "Nomdtable",
      "Tardeo",
      "Gastronomía"
    ],
    "event_details": {
      "fecha": "Todos los Sábados",
      "hora": "13:00",
      "lugar": "Punto de encuentro: Plaza del Dos de Mayo",
      "precio": "35€",
      "web_compra": "https://nomdtable.com/ruta-vinos-malasana",
      "plataforma": "Nomdtable"
    }
  },
  {
    "movie_identifier": 5006,
    "display_name": "Cena Secreta: The Great Gatsby",
    "release_year": 2026,
    "average_score": 9.1,
    "category_type": "Cena",
    "synopsis_text": {
      "es": "Viaja a los años 20 en una cena inmersiva con actores, música en vivo y coctelería clandestina.",
      "en": "Travel back to the 1920s in an immersive dinner with actors, live music and clandestine cocktails."
    },
    "runtime_minutes": "3h",
    "content_rating": "18+",
    "bg_image_url": "https://picsum.photos/seed/bg43/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover18/600/900",
    "keyword_labels": [
      "Nomdtable",
      "Cena",
      "Inmersivo"
    ],
    "event_details": {
      "fecha": "18 Dic 2026",
      "hora": "21:30",
      "lugar": "Ubicación revelada 24h antes",
      "precio": "65€",
      "web_compra": "https://nomdtable.com/gatsby-dinner",
      "plataforma": "Nomdtable"
    }
  }
];



// Añadir los nuevos libros a la base de datos
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2002,
    "display_name": "Los Incomprendidos",
    "release_year": 2014,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una novela de temática social sobre un grupo de adolescentes que enfrentan los problemas del instituto, la amistad y el primer amor.",
      "en": "A social theme novel about teenagers facing high school problems, friendship, and first love."
    },
    "runtime_minutes": "400 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg44/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover19/600/900",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2003,
    "display_name": "El Futuro Tecnológico",
    "release_year": 2025,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un análisis profundo sobre cómo la inteligencia artificial, Web3 y la computación cuántica redefinirán nuestra sociedad.",
      "en": "A deep analysis on how AI, Web3, and quantum computing will redefine our society."
    },
    "runtime_minutes": "320 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg45/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover20/600/900",
    "filmmaker": {
      "director_name": "Tech Guru",
      "avatar": ""
    },
    "keyword_labels": [
      "Tecnológica",
      "Ensayo"
    ]
  },
  {
    "movie_identifier": 2004,
    "display_name": "Diseño de Interfaces Modernas",
    "release_year": 2026,
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La guía definitiva para entender UX/UI, la teoría del color y la psicología detrás de las aplicaciones más populares.",
      "en": "The ultimate guide to understanding UX/UI, color theory, and psychology behind popular apps."
    },
    "runtime_minutes": "280 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg46/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover21/600/900",
    "filmmaker": {
      "director_name": "Elena UI",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2005,
    "display_name": "Un Verano en París",
    "release_year": 2023,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una novela romántica sobre dos extraños que se cruzan en las calles de París y cambian sus vidas para siempre.",
      "en": "A romantic novel about two strangers who cross paths in the streets of Paris."
    },
    "runtime_minutes": "350 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg47/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover22/600/900",
    "filmmaker": {
      "director_name": "Sarah Romance",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Ficción"
    ]
  },
  {
    "movie_identifier": 2006,
    "display_name": "Versos al Viento",
    "release_year": 2022,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una antología de poesía moderna que explora los sentimientos más profundos de la condición humana.",
      "en": "An anthology of modern poetry exploring the deepest feelings of the human condition."
    },
    "runtime_minutes": "150 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg48/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover23/600/900",
    "filmmaker": {
      "director_name": "Poeta Anónimo",
      "avatar": ""
    },
    "keyword_labels": [
      "Poesía",
      "Arte"
    ]
  },
  {
    "movie_identifier": 2007,
    "display_name": "Dune",
    "release_year": 1965,
    "average_score": 9.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Obra maestra de la ciencia ficción que nos transporta al desértico planeta Arrakis y a las intrigas políticas por la Especia.",
      "en": "Sci-Fi masterpiece transporting us to the desert planet Arrakis and political intrigues."
    },
    "runtime_minutes": "800 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg49/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover24/600/900",
    "filmmaker": {
      "director_name": "Frank Herbert",
      "avatar": ""
    },
    "keyword_labels": [
      "Ciencia Ficción",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2008,
    "display_name": "Harry Potter y la Piedra Filosofal",
    "release_year": 1997,
    "average_score": 9.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El inicio de la saga de fantasía más famosa del mundo. Un joven mago descubre su verdadero destino en Hogwarts.",
      "en": "The beginning of the world's most famous fantasy saga. A young wizard discovers his destiny."
    },
    "runtime_minutes": "300 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg50/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover25/600/900",
    "filmmaker": {
      "director_name": "J.K. Rowling",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Magia"
    ]
  }
]));



// Añadir más libros sociales a la base de datos
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2009,
    "display_name": "Justicia ¿hacemos lo que debemos?",
    "release_year": 2011,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Michael Sandel explora cuestiones fundamentales sobre filosofía política y moral en el mundo actual.",
      "en": "Michael Sandel explores fundamental questions about political philosophy and morals."
    },
    "runtime_minutes": "368 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2009/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2009/600/900",
    "filmmaker": {
      "director_name": "Michael Sandel",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Ensayo"
    ]
  },
  {
    "movie_identifier": 2010,
    "display_name": "Summerhill",
    "release_year": 1960,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La historia y filosofía de una de las escuelas más revolucionarias y libres del mundo.",
      "en": "The history and philosophy of one of the most revolutionary free schools."
    },
    "runtime_minutes": "350 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2010/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2010/600/900",
    "filmmaker": {
      "director_name": "A.S. Neill",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2011,
    "display_name": "Compartiendo palabras",
    "release_year": 1997,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una exploración sobre el aprendizaje dialógico y la transformación educativa.",
      "en": "An exploration of dialogic learning and educational transformation."
    },
    "runtime_minutes": "200 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2011/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2011/600/900",
    "filmmaker": {
      "director_name": "Paidós (Ed)",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2012,
    "display_name": "Más fuerte que el odio",
    "release_year": 1999,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El testimonio sobrecogedor de un joven que logró perdonar y transformar su dolor en amor.",
      "en": "The moving testimony of a young man who managed to forgive and transform his pain into love."
    },
    "runtime_minutes": "240 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://picsum.photos/seed/bg2012/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2012/600/900",
    "filmmaker": {
      "director_name": "Tim Guénard",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Biografía"
    ]
  },
  {
    "movie_identifier": 2013,
    "display_name": "Sextualidades: Teorías Literarias Feministas",
    "release_year": 2007,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una mirada profunda a las teorías feministas a través de la literatura y el análisis del discurso.",
      "en": "A deep look into feminist theories through literature."
    },
    "runtime_minutes": "310 páginas",
    "content_rating": "16+",
    "bg_image_url": "https://picsum.photos/seed/bg2013/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2013/600/900",
    "filmmaker": {
      "director_name": "Beatriz Suárez Briones",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Feminismo"
    ]
  },
  {
    "movie_identifier": 2014,
    "display_name": "El buen amor en la pareja",
    "release_year": 2013,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Claves sistémicas para vivir la pareja con bienestar, entendiendo las constelaciones familiares.",
      "en": "Systemic keys to experiencing well-being in couples."
    },
    "runtime_minutes": "208 páginas",
    "content_rating": "16+",
    "bg_image_url": "https://picsum.photos/seed/bg2014/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2014/600/900",
    "filmmaker": {
      "director_name": "Joan Garriga",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psicología"
    ]
  },
  {
    "movie_identifier": 2015,
    "display_name": "Hasta que te caigas bien",
    "release_year": 2023,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un viaje hacia la autoestima, el autoconocimiento y la validación emocional.",
      "en": "A journey towards self-esteem, self-knowledge, and emotional validation."
    },
    "runtime_minutes": "248 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2015/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2015/600/900",
    "filmmaker": {
      "director_name": "Elizabeth Clapés",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Autoayuda"
    ]
  },
  {
    "movie_identifier": 2016,
    "display_name": "Querida yo: tenemos que hablar",
    "release_year": 2022,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Reflexiones íntimas para reconciliarte contigo misma y cuidar tu salud mental.",
      "en": "Intimate reflections to reconcile with yourself."
    },
    "runtime_minutes": "220 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2016/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2016/600/900",
    "filmmaker": {
      "director_name": "Elizabeth Clapés",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psicología"
    ]
  },
  {
    "movie_identifier": 2017,
    "display_name": "Recupera tu mente, Reconquista tu vida",
    "release_year": 2024,
    "average_score": 9.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Descubre cómo rescatar tu atención en el mundo de la hiperconexión y el estrés constante.",
      "en": "Discover how to rescue your attention in a hyper-connected world."
    },
    "runtime_minutes": "384 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2017/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2017/600/900",
    "filmmaker": {
      "director_name": "Marian Rojas Estapé",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psiquiatría"
    ]
  },
  {
    "movie_identifier": 2018,
    "display_name": "Cómo hacer que te pasen cosas buenas",
    "release_year": 2018,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Comprende tu cerebro, gestiona tus emociones y aprende a ser más feliz desde la neurociencia.",
      "en": "Understand your brain, manage emotions and learn to be happier."
    },
    "runtime_minutes": "232 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2018/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2018/600/900",
    "filmmaker": {
      "director_name": "Marian Rojas Estapé",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Autoayuda"
    ]
  },
  {
    "movie_identifier": 2019,
    "display_name": "Encuentra tu persona vitamina",
    "release_year": 2021,
    "average_score": 9.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Aprende sobre el apego y descubre por qué algunas personas nos agotan mientras otras nos inspiran.",
      "en": "Learn about attachment and discover why some people inspire us."
    },
    "runtime_minutes": "328 páginas",
    "content_rating": "All",
    "bg_image_url": "https://picsum.photos/seed/bg2019/1200/600",
    "cover_image_url": "https://picsum.photos/seed/cover2019/600/900",
    "filmmaker": {
      "director_name": "Marian Rojas Estapé",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psicología"
    ]
  }
]));


// Añadir Orwell
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2020,
    "display_name": "1984",
    "release_year": 1949,
    "average_score": 9.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una escalofriante distopía sobre la vigilancia extrema, el control mental y el Gran Hermano.",
      "en": "A chilling dystopia about extreme surveillance, mind control, and Big Brother."
    },
    "runtime_minutes": "328 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "George Orwell",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Ciencia Ficción",
      "Distopía"
    ]
  }
]));

// Añadir última remesa de libros de Diseño y Tecnología
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2021,
    "display_name": "Factfulness",
    "release_year": 2018,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diez razones por las que estamos equivocados sobre el mundo y por qué las cosas están mejor de lo que piensas.",
      "en": "Ten reasons we're wrong about the world."
    },
    "runtime_minutes": "352 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=MnhxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=MnhxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Hans Rosling",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2022,
    "display_name": "La era del capitalismo de la vigilancia",
    "release_year": 2019,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La lucha por un futuro humano frente a las nuevas fronteras del poder.",
      "en": "The fight for a human future at the new frontier of power."
    },
    "runtime_minutes": "704 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://books.google.com/books/content?id=n1iODwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=n1iODwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Shoshana Zuboff",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2023,
    "display_name": "Armas de destrucción matemática",
    "release_year": 2016,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo el Big Data aumenta la desigualdad y amenaza la democracia.",
      "en": "How Big Data increases inequality and threatens democracy."
    },
    "runtime_minutes": "272 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Cathy O'Neil",
      "avatar": ""
    },
    "keyword_labels": [
      "Tecnológica",
      "Social"
    ]
  },
  {
    "movie_identifier": 2024,
    "display_name": "La sociedad red",
    "release_year": 1996,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un análisis exhaustivo de la sociedad de la información y su impacto socioeconómico.",
      "en": "An exhaustive analysis of the information society."
    },
    "runtime_minutes": "650 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://books.google.com/books/content?id=ZXXmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=ZXXmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Manuel Castells",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2025,
    "display_name": "Tecnopolítica",
    "release_year": 2015,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo las redes digitales han transformado la política y los movimientos sociales.",
      "en": "How digital networks have transformed politics."
    },
    "runtime_minutes": "200 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://books.google.com/books/content?id=L8Y3DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=L8Y3DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Javier Toret",
      "avatar": ""
    },
    "keyword_labels": [
      "Tecnológica",
      "Social"
    ]
  },
  {
    "movie_identifier": 2026,
    "display_name": "Homo Deus",
    "release_year": 2015,
    "average_score": 9.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una breve historia del mañana y hacia dónde se dirige la humanidad con la IA.",
      "en": "A brief history of tomorrow."
    },
    "runtime_minutes": "496 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=J2Q1DQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=J2Q1DQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Yuval Noah Harari",
      "avatar": ""
    },
    "keyword_labels": [
      "Tecnológica",
      "Social"
    ]
  },
  {
    "movie_identifier": 2027,
    "display_name": "Vida 3.0",
    "release_year": 2017,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Qué significa ser humano en la era de la inteligencia artificial.",
      "en": "What it means to be human in the age of AI."
    },
    "runtime_minutes": "432 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=HHEvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=HHEvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Max Tegmark",
      "avatar": ""
    },
    "keyword_labels": [
      "Tecnológica",
      "Ciencia Ficción"
    ]
  },
  {
    "movie_identifier": 2028,
    "display_name": "Don't Make Me Think",
    "release_year": 2000,
    "average_score": 9.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una aproximación de sentido común a la usabilidad web.",
      "en": "A Common Sense Approach to Web Usability."
    },
    "runtime_minutes": "216 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=QlduAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=QlduAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Steve Krug",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2029,
    "display_name": "The Design of Everyday Things",
    "release_year": 1988,
    "average_score": 9.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Los principios fundamentales del diseño centrado en el usuario.",
      "en": "The fundamental principles of user-centered design."
    },
    "runtime_minutes": "368 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Don Norman",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2030,
    "display_name": "About Face",
    "release_year": 1995,
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Los fundamentos del diseño de interacción y productos digitales.",
      "en": "The essentials of interaction design."
    },
    "runtime_minutes": "720 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=q_c_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=q_c_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Alan Cooper",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2031,
    "display_name": "Hooked",
    "release_year": 2014,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo construir productos y aplicaciones que formen hábitos.",
      "en": "How to Build Habit-Forming Products."
    },
    "runtime_minutes": "256 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Nir Eyal",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Tecnológica"
    ]
  },
  {
    "movie_identifier": 2032,
    "display_name": "Lean UX",
    "release_year": 2013,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño de productos digitales con equipos ágiles.",
      "en": "Designing Great Products with Agile Teams."
    },
    "runtime_minutes": "192 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=03-kDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=03-kDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Jeff Gothelf",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Tecnológica"
    ]
  }
]));

// Añadir libros de diseño Papanek y Lidwell
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2033,
    "display_name": "Universal Principles of Design",
    "release_year": 2003,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Ciento veinticinco formas de mejorar la usabilidad, influencia, percepción y más en el diseño.",
      "en": "125 ways to enhance usability, influence, perception, appeal, make better design decisions, and teach through design."
    },
    "runtime_minutes": "272 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=H8pPpwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=H8pPpwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "William Lidwell, Kritina Holden, Jill Butler",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2034,
    "display_name": "Design for the Real World",
    "release_year": 1971,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Ecología humana y cambio social. Un clásico sobre la responsabilidad moral del diseñador.",
      "en": "Human Ecology and Social Change."
    },
    "runtime_minutes": "416 páginas",
    "content_rating": "All",
    "bg_image_url": "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "cover_image_url": "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "filmmaker": {
      "director_name": "Victor Papanek",
      "avatar": ""
    },
    "keyword_labels": [
      "Diseño",
      "Social"
    ]
  }
]));

// Añadir libros de Social y Romántica (Moccia, Blue Jeans, etc)
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2040,
    "display_name": "El tratamiento del duelo",
    "release_year": 1991,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Asesoramiento psicológico y terapia tras una pérdida.",
      "en": "Grief counseling and grief therapy."
    },
    "runtime_minutes": "208 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/1e1e2f/ffffff?text=El+tratamiento+del+duelo",
    "cover_image_url": "https://placehold.co/600x900/1e1e2f/ffffff?text=El+tratamiento+del+duelo",
    "filmmaker": {
      "director_name": "J. William Worden",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psicología"
    ]
  },
  {
    "movie_identifier": 2041,
    "display_name": "Métodos de investigación en Psicología y Educación",
    "release_year": 2015,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las tradiciones cuantitativas y cualitativas en la investigación educativa y psicológica.",
      "en": "Quantitative and qualitative traditions in research."
    },
    "runtime_minutes": "480 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/1e1e2f/ffffff?text=M%C3%A9todos+de+investigaci%C3%B3n+en+Psicolog%C3%ADa+y+Educaci%C3%B3n",
    "cover_image_url": "https://placehold.co/600x900/1e1e2f/ffffff?text=M%C3%A9todos+de+investigaci%C3%B3n+en+Psicolog%C3%ADa+y+Educaci%C3%B3n",
    "filmmaker": {
      "director_name": "Orfelio G. León e Ignacio Montero",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Educación",
      "Psicología"
    ]
  },
  {
    "movie_identifier": 2042,
    "display_name": "Pedagogía del Oprimido",
    "release_year": 1968,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un ensayo fundamental sobre cómo la educación puede ser un mecanismo de liberación.",
      "en": "A fundamental essay on how education can be a mechanism of liberation."
    },
    "runtime_minutes": "250 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/1e1e2f/ffffff?text=Pedagog%C3%ADa+del+Oprimido",
    "cover_image_url": "https://placehold.co/600x900/1e1e2f/ffffff?text=Pedagog%C3%ADa+del+Oprimido",
    "filmmaker": {
      "director_name": "Paulo Freire",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2043,
    "display_name": "Perdona pero quiero casarme contigo",
    "release_year": 2009,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La continuación de la intensa historia de amor de Step y Babi.",
      "en": "The continuation of Step and Babi's intense love story."
    },
    "runtime_minutes": "500 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Perdona+pero+quiero+casarme+contigo",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Perdona+pero+quiero+casarme+contigo",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2044,
    "display_name": "Algo tan sencillo como tuitear te quiero",
    "release_year": 2015,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El primer año universitario de un grupo de jóvenes en Madrid.",
      "en": "The first college year of a group of young people in Madrid."
    },
    "runtime_minutes": "544 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=Algo+tan+sencillo+como+tuitear+te+quiero",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=Algo+tan+sencillo+como+tuitear+te+quiero",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2045,
    "display_name": "Algo tan sencillo como darte un beso",
    "release_year": 2016,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La esperada continuación de las aventuras en la residencia Benjamin Franklin.",
      "en": "The awaited continuation of the Benjamin Franklin residence adventures."
    },
    "runtime_minutes": "544 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=Algo+tan+sencillo+como+darte+un+beso",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=Algo+tan+sencillo+como+darte+un+beso",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2046,
    "display_name": "No sonrías que me enamoro",
    "release_year": 2013,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Segunda parte de El club de los Incomprendidos, llena de romance y secretos.",
      "en": "Second part of The Misunderstood Club, full of romance and secrets."
    },
    "runtime_minutes": "480 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=No+sonr%C3%ADas+que+me+enamoro",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=No+sonr%C3%ADas+que+me+enamoro",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2047,
    "display_name": "A tres metros sobre el cielo",
    "release_year": 1992,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un amor improbable entre dos mundos distintos que desafía todas las reglas.",
      "en": "An unlikely love between two different worlds that defies all rules."
    },
    "runtime_minutes": "500 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=A+tres+metros+sobre+el+cielo",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=A+tres+metros+sobre+el+cielo",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2048,
    "display_name": "Tengo ganas de ti",
    "release_year": 2006,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El regreso de Step a Roma y su encuentro con Gin que cambiará todo.",
      "en": "Step's return to Rome and his meeting with Gin that will change everything."
    },
    "runtime_minutes": "500 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Tengo+ganas+de+ti",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Tengo+ganas+de+ti",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2049,
    "display_name": "El amor empieza después del café",
    "release_year": 2021,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una novela fresca y divertida sobre citas y el verdadero amor.",
      "en": "A fresh and fun novel about dating and true love."
    },
    "runtime_minutes": "300 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/d63031/ffffff?text=El+amor+empieza+despu%C3%A9s+del+caf%C3%A9",
    "cover_image_url": "https://placehold.co/600x900/d63031/ffffff?text=El+amor+empieza+despu%C3%A9s+del+caf%C3%A9",
    "filmmaker": {
      "director_name": "Xuso Jones",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2050,
    "display_name": "Carolina se enamora",
    "release_year": 2008,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El primer gran amor de una chica de catorce años.",
      "en": "The first great love of a fourteen year old girl."
    },
    "runtime_minutes": "480 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Carolina+se+enamora",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Carolina+se+enamora",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2051,
    "display_name": "Canciones para Paula",
    "release_year": 2009,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El inicio de una de las trilogías juveniles románticas más famosas de España.",
      "en": "The beginning of one of the most famous romantic youth trilogies in Spain."
    },
    "runtime_minutes": "680 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=Canciones+para+Paula",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=Canciones+para+Paula",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2052,
    "display_name": "¿Sabes que te quiero?",
    "release_year": 2010,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La continuación del fenómeno editorial de Canciones para Paula.",
      "en": "The continuation of the editorial phenomenon of Canciones para Paula."
    },
    "runtime_minutes": "700 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=%C2%BFSabes+que+te+quiero%3F",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=%C2%BFSabes+que+te+quiero%3F",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2053,
    "display_name": "Cállame con un beso",
    "release_year": 2011,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El esperado desenlace de la historia de Paula, Ángel y Álex.",
      "en": "The awaited conclusion to the story of Paula, Ángel and Álex."
    },
    "runtime_minutes": "650 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=C%C3%A1llame+con+un+beso",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=C%C3%A1llame+con+un+beso",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2054,
    "display_name": "¿Puedo soñar contigo?",
    "release_year": 2014,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La tercera entrega y el emocionante final de El club de los Incomprendidos.",
      "en": "The third installment and emotional finale of The Misunderstood Club."
    },
    "runtime_minutes": "480 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=%C2%BFPuedo+so%C3%B1ar+contigo%3F",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=%C2%BFPuedo+so%C3%B1ar+contigo%3F",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  }
]));

// Añadir libros de Social y Romántica (Moccia, Blue Jeans, Barreau, Pease, etc)
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2060,
    "display_name": "Buenos días princesa",
    "release_year": 2012,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El inicio de la exitosa historia de El club de los Incomprendidos.",
      "en": "The beginning of the successful story of The Misunderstood Club."
    },
    "runtime_minutes": "544 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=Buenos+d%C3%ADas+princesa",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=Buenos+d%C3%ADas+princesa",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  },
  {
    "movie_identifier": 2061,
    "display_name": "Tú, simplemente tú",
    "release_year": 2014,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El gran amor puede estar donde menos lo esperas.",
      "en": "True love can be where you least expect it."
    },
    "runtime_minutes": "380 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=T%C3%BA+simplemente+t%C3%BA",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=T%C3%BA+simplemente+t%C3%BA",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2062,
    "display_name": "Ese instante de felicidad",
    "release_year": 2013,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una historia sobre la magia de los pequeños momentos compartidos.",
      "en": "A story about the magic of small shared moments."
    },
    "runtime_minutes": "400 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Ese+instante+de+felicidad",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Ese+instante+de+felicidad",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2063,
    "display_name": "Esta noche dime que me quieres",
    "release_year": 2011,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un amor que desafía el paso del tiempo y las circunstancias.",
      "en": "A love that defies time and circumstances."
    },
    "runtime_minutes": "350 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Esta+noche+dime+que+me+quieres",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Esta+noche+dime+que+me+quieres",
    "filmmaker": {
      "director_name": "Federico Moccia",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2064,
    "display_name": "Si el amor es una isla",
    "release_year": 2015,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una historia romántica que te hará soñar despierto.",
      "en": "A romantic story that will make you daydream."
    },
    "runtime_minutes": "320 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/fd79a8/ffffff?text=Si+el+amor+es+una+isla",
    "cover_image_url": "https://placehold.co/600x900/fd79a8/ffffff?text=Si+el+amor+es+una+isla",
    "filmmaker": {
      "director_name": "Esther Sanz",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2065,
    "display_name": "La sonrisa de las mujeres",
    "release_year": 2011,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un encantador romance ambientado en el corazón de París.",
      "en": "A charming romance set in the heart of Paris."
    },
    "runtime_minutes": "288 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/fd79a8/ffffff?text=La+sonrisa+de+las+mujeres",
    "cover_image_url": "https://placehold.co/600x900/fd79a8/ffffff?text=La+sonrisa+de+las+mujeres",
    "filmmaker": {
      "director_name": "Nicolás Barreau",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2066,
    "display_name": "Me encontrarás en el fin del mundo",
    "release_year": 2013,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un viaje de autodescubrimiento y amor que lo cambiará todo.",
      "en": "A journey of self-discovery and love."
    },
    "runtime_minutes": "310 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/fd79a8/ffffff?text=Me+encontrar%C3%A1s+en+el+fin+del+mundo",
    "cover_image_url": "https://placehold.co/600x900/fd79a8/ffffff?text=Me+encontrar%C3%A1s+en+el+fin+del+mundo",
    "filmmaker": {
      "director_name": "Nicolás Barreau",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2067,
    "display_name": "Por qué los hombres mienten y las mujeres lloran",
    "release_year": 2002,
    "average_score": 8.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Comprende la naturaleza de las relaciones y la comunicación entre sexos.",
      "en": "Understand the nature of relationships and communication between sexes."
    },
    "runtime_minutes": "336 páginas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/1e1e2f/ffffff?text=Por+qu%C3%A9+los+hombres+mienten+y+las+mujeres+lloran",
    "cover_image_url": "https://placehold.co/600x900/1e1e2f/ffffff?text=Por+qu%C3%A9+los+hombres+mienten+y+las+mujeres+lloran",
    "filmmaker": {
      "director_name": "Allan y Bárbara Pease",
      "avatar": ""
    },
    "keyword_labels": [
      "Social",
      "Psicología"
    ]
  }
]));

// Añadir libros de Drama, Fantasía y Romántica
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2070,
    "display_name": "Crepúsculo",
    "release_year": 2005,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El inicio de la saga vampírica más famosa del siglo.",
      "en": "The beginning of the most famous vampire saga of the century."
    },
    "runtime_minutes": "512 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Crep%C3%BAsculo",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Crep%C3%BAsculo",
    "filmmaker": {
      "director_name": "Stephenie Meyer",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2071,
    "display_name": "Luna nueva",
    "release_year": 2006,
    "average_score": 8.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Segunda parte de la saga Crepúsculo.",
      "en": "Second part of the Twilight saga."
    },
    "runtime_minutes": "576 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Luna+nueva",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Luna+nueva",
    "filmmaker": {
      "director_name": "Stephenie Meyer",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2072,
    "display_name": "Eclipse",
    "release_year": 2007,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Tercera parte de la saga Crepúsculo.",
      "en": "Third part of the Twilight saga."
    },
    "runtime_minutes": "624 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Eclipse",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Eclipse",
    "filmmaker": {
      "director_name": "Stephenie Meyer",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2073,
    "display_name": "Amanecer",
    "release_year": 2008,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cuarta y última parte de la saga Crepúsculo.",
      "en": "Fourth and final part of the Twilight saga."
    },
    "runtime_minutes": "828 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Amanecer",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Amanecer",
    "filmmaker": {
      "director_name": "Stephenie Meyer",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2074,
    "display_name": "Todas las mañanas contigo",
    "release_year": 2022,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una historia romántica llena de giros inesperados y mucho humor.",
      "en": "A romantic story full of unexpected twists and humor."
    },
    "runtime_minutes": "320 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e84393/ffffff?text=Todas+las+ma%C3%B1anas+contigo",
    "cover_image_url": "https://placehold.co/600x900/e84393/ffffff?text=Todas+las+ma%C3%B1anas+contigo",
    "filmmaker": {
      "director_name": "Xuso Jones",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica"
    ]
  },
  {
    "movie_identifier": 2075,
    "display_name": "Finis Mundi",
    "release_year": 1999,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un joven monje y un juglar emprenden un viaje para evitar el fin del mundo en el año 1000.",
      "en": "A young monk and a minstrel set out on a journey to prevent the end of the world."
    },
    "runtime_minutes": "256 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Finis+Mundi",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Finis+Mundi",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2076,
    "display_name": "La dama del alba",
    "release_year": 1944,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una obra de teatro clásica sobre la vida, la muerte y el misterio en Asturias.",
      "en": "A classic play about life, death and mystery."
    },
    "runtime_minutes": "192 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=La+dama+del+alba",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=La+dama+del+alba",
    "filmmaker": {
      "director_name": "Alejandro Casona",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Teatro"
    ]
  },
  {
    "movie_identifier": 2077,
    "display_name": "El niño con el pijama de rayas",
    "release_year": 2006,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una historia conmovedora sobre la inocencia en tiempos del Holocausto.",
      "en": "A moving story about innocence in times of the Holocaust."
    },
    "runtime_minutes": "224 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=El+ni%C3%B1o+con+el+pijama+de+rayas",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=El+ni%C3%B1o+con+el+pijama+de+rayas",
    "filmmaker": {
      "director_name": "John Boyne",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Histórico"
    ]
  },
  {
    "movie_identifier": 2078,
    "display_name": "Donde aprenden a volar las gaviotas",
    "release_year": 2007,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El descubrimiento de un oscuro secreto familiar durante unas vacaciones en Noruega.",
      "en": "The discovery of a dark family secret during a vacation in Norway."
    },
    "runtime_minutes": "224 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=Donde+aprenden+a+volar+las+gaviotas",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=Donde+aprenden+a+volar+las+gaviotas",
    "filmmaker": {
      "director_name": "Ana Alcolea",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Misterio"
    ]
  }
]));

// Añadir libros de Infantil y Romántica
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2080,
    "display_name": "Winx Club: El poder de las hadas",
    "release_year": 2004,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Descubre el mundo mágico de Alfea junto a Bloom y sus amigas hadas.",
      "en": "Discover the magical world of Alfea with Bloom and her fairy friends."
    },
    "runtime_minutes": "128 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Winx+Club:+El+poder+de+las+hadas",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Winx+Club:+El+poder+de+las+hadas",
    "filmmaker": {
      "director_name": "Iginio Straffi",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2081,
    "display_name": "Winx Club: La magia de la amistad",
    "release_year": 2005,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las Winx se enfrentan a nuevos desafíos con el poder de la amistad.",
      "en": "The Winx face new challenges with the power of friendship."
    },
    "runtime_minutes": "130 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Winx+Club:+La+magia+de+la+amistad",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Winx+Club:+La+magia+de+la+amistad",
    "filmmaker": {
      "director_name": "Iginio Straffi",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2082,
    "display_name": "Kika Superbruja detective",
    "release_year": 1992,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Kika utiliza su libro de magia para resolver un misterio.",
      "en": "Kika uses her magic book to solve a mystery."
    },
    "runtime_minutes": "120 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/ffffff?text=Kika+Superbruja+detective",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/ffffff?text=Kika+Superbruja+detective",
    "filmmaker": {
      "director_name": "Knister",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2083,
    "display_name": "Kika Superbruja en el castillo de Drácula",
    "release_year": 1993,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una aventura terroríficamente divertida en Transilvania.",
      "en": "A terrifyingly fun adventure in Transylvania."
    },
    "runtime_minutes": "136 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/ffffff?text=Kika+Superbruja+en+el+castillo+de+Dr%C3%A1cula",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/ffffff?text=Kika+Superbruja+en+el+castillo+de+Dr%C3%A1cula",
    "filmmaker": {
      "director_name": "Knister",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2084,
    "display_name": "El diario de Meri",
    "release_year": 2015,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Los secretos, amores y confesiones del personaje más querido de El club de los incomprendidos.",
      "en": "The secrets and loves of the most beloved character of The Misunderstood Club."
    },
    "runtime_minutes": "384 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/0984e3/ffffff?text=El+diario+de+Meri",
    "cover_image_url": "https://placehold.co/600x900/0984e3/ffffff?text=El+diario+de+Meri",
    "filmmaker": {
      "director_name": "Blue Jeans",
      "avatar": ""
    },
    "keyword_labels": [
      "Romántica",
      "Juvenil"
    ]
  }
]));

// Añadir libros de la sección English
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2090,
    "display_name": "The Picture of Dorian Gray",
    "release_year": 1890,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La historia de un joven que permanece eternamente joven mientras su retrato envejece.",
      "en": "The story of a young man who remains eternally young while his portrait ages."
    },
    "runtime_minutes": "276 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Picture+of+Dorian+Gray",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Picture+of+Dorian+Gray",
    "filmmaker": {
      "director_name": "Oscar Wilde",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 2091,
    "display_name": "Castles King Arthur's Treasure",
    "release_year": 2008,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una aventura en inglés sobre los castillos y el tesoro del Rey Arturo.",
      "en": "An adventure about castles and King Arthur's treasure."
    },
    "runtime_minutes": "64 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Castles+King+Arthur's+Treasure",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Castles+King+Arthur's+Treasure",
    "filmmaker": {
      "director_name": "Desconocido",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2092,
    "display_name": "The Thursday Thief",
    "release_year": 2010,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un misterio en inglés sobre un ladrón audaz.",
      "en": "An English mystery about a daring thief."
    },
    "runtime_minutes": "80 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thursday+Thief",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Thursday+Thief",
    "filmmaker": {
      "director_name": "Mark Foster & Phillip Burrows",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Misterio"
    ]
  },
  {
    "movie_identifier": 2093,
    "display_name": "The Thirty-Nine Steps",
    "release_year": 1915,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un clásico thriller de espionaje en la Inglaterra de principios del siglo XX.",
      "en": "A classic espionage thriller in early 20th century England."
    },
    "runtime_minutes": "160 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thirty-Nine+Steps",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Thirty-Nine+Steps",
    "filmmaker": {
      "director_name": "John Buchan",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Thriller"
    ]
  },
  {
    "movie_identifier": 2094,
    "display_name": "Frankenstein",
    "release_year": 1818,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El clásico de terror sobre el doctor Frankenstein y su monstruosa creación.",
      "en": "The classic horror story about Dr. Frankenstein and his monstrous creation."
    },
    "runtime_minutes": "280 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Frankenstein",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Frankenstein",
    "filmmaker": {
      "director_name": "Mary Shelley",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Terror"
    ]
  },
  {
    "movie_identifier": 2095,
    "display_name": "Chemical Secret",
    "release_year": 1991,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un apasionante thriller sobre el peligro de los productos químicos tóxicos en el medio ambiente.",
      "en": "A thrilling story about the danger of toxic chemicals in the environment."
    },
    "runtime_minutes": "72 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Chemical+Secret",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Chemical+Secret",
    "filmmaker": {
      "director_name": "Tim Vicary",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Thriller"
    ]
  },
  {
    "movie_identifier": 2096,
    "display_name": "Dr. Jekyll and Mr. Hyde",
    "release_year": 1886,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La famosa historia sobre la dualidad del bien y del mal en la naturaleza humana.",
      "en": "The famous story about the duality of good and evil in human nature."
    },
    "runtime_minutes": "144 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Dr.+Jekyll+and+Mr.+Hyde",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Dr.+Jekyll+and+Mr.+Hyde",
    "filmmaker": {
      "director_name": "Robert Louis Stevenson",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Clásicos"
    ]
  }
]));

// Añadir segunda tanda de libros English
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2100,
    "display_name": "The Hound of the Baskervilles",
    "release_year": 1902,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La novela más famosa de Sherlock Holmes sobre un misterioso sabueso asesino.",
      "en": "The most famous Sherlock Holmes novel about a mysterious killer hound."
    },
    "runtime_minutes": "256 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Hound+of+the+Baskervilles",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Hound+of+the+Baskervilles",
    "filmmaker": {
      "director_name": "Sir Arthur Conan Doyle",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Misterio"
    ]
  },
  {
    "movie_identifier": 2101,
    "display_name": "The Secret Garden",
    "release_year": 1911,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una novela clásica de literatura infantil sobre la curación y la amistad.",
      "en": "A classic children's literature novel about healing and friendship."
    },
    "runtime_minutes": "336 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Secret+Garden",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Secret+Garden",
    "filmmaker": {
      "director_name": "Frances Hodgson Burnett",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Literatura Infanto-Juvenil",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 2102,
    "display_name": "The Call of the Wild",
    "release_year": 1903,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un relato de aventuras sobre un perro que vuelve a su estado salvaje.",
      "en": "An adventure tale about a dog that returns to its wild state."
    },
    "runtime_minutes": "112 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Call+of+the+Wild",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Call+of+the+Wild",
    "filmmaker": {
      "director_name": "Jack London",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2103,
    "display_name": "Tales of Mystery and Imagination",
    "release_year": 1840,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una colección de las historias de misterio más famosas de Edgar Allan Poe.",
      "en": "A collection of Edgar Allan Poe's most famous mystery stories."
    },
    "runtime_minutes": "352 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Tales+of+Mystery+and+Imagination",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Tales+of+Mystery+and+Imagination",
    "filmmaker": {
      "director_name": "Edgar Allan Poe",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Terror"
    ]
  },
  {
    "movie_identifier": 2104,
    "display_name": "Stories from the Five Towns",
    "release_year": 1905,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Historias cortas costumbristas sobre la vida en las fábricas inglesas.",
      "en": "Short stories about life in the English potteries."
    },
    "runtime_minutes": "160 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Stories+from+the+Five+Towns",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Stories+from+the+Five+Towns",
    "filmmaker": {
      "director_name": "Arnold Bennett",
      "avatar": ""
    },
    "keyword_labels": [
      "English"
    ]
  },
  {
    "movie_identifier": 2105,
    "display_name": "Huckleberry Finn",
    "release_year": 1884,
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La gran novela americana sobre las aventuras de Huck y el esclavo Jim.",
      "en": "The great American novel about the adventures of Huck and the slave Jim."
    },
    "runtime_minutes": "368 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Huckleberry+Finn",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Huckleberry+Finn",
    "filmmaker": {
      "director_name": "Mark Twain",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Clásicos",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2106,
    "display_name": "Sherlock Holmes",
    "release_year": 1892,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las aventuras del detective consultor más famoso del mundo.",
      "en": "The adventures of the world's most famous consulting detective."
    },
    "runtime_minutes": "400 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Sherlock+Holmes",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Sherlock+Holmes",
    "filmmaker": {
      "director_name": "Sir Arthur Conan Doyle",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Misterio"
    ]
  },
  {
    "movie_identifier": 2107,
    "display_name": "The Adventures of Tom Sawyer",
    "release_year": 1876,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las aventuras de un niño que crece a lo largo del río Misisipi.",
      "en": "The adventures of a boy growing up along the Mississippi River."
    },
    "runtime_minutes": "274 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Adventures+of+Tom+Sawyer",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Adventures+of+Tom+Sawyer",
    "filmmaker": {
      "director_name": "Mark Twain",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Aventura",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 2108,
    "display_name": "White Death",
    "release_year": 1989,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un trepidante thriller sobre el tráfico de drogas y la redención.",
      "en": "A fast-paced thriller about drug trafficking and redemption."
    },
    "runtime_minutes": "80 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=White+Death",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=White+Death",
    "filmmaker": {
      "director_name": "Tim Vicary",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Thriller"
    ]
  },
  {
    "movie_identifier": 2109,
    "display_name": "Matty Doolin",
    "release_year": 1965,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La historia de un joven de clase trabajadora y su amor por los animales.",
      "en": "The story of a working class youth and his love for animals."
    },
    "runtime_minutes": "140 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Matty+Doolin",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Matty+Doolin",
    "filmmaker": {
      "director_name": "Catherine Cookson",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Drama"
    ]
  }
]));

// Añadir tercera tanda de libros English
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2110,
    "display_name": "Treasure Island",
    "release_year": 1883,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La clásica historia de piratas y tesoros escondidos.",
      "en": "The classic tale of pirates and hidden treasures."
    },
    "runtime_minutes": "304 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Treasure+Island",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Treasure+Island",
    "filmmaker": {
      "director_name": "Robert Louis Stevenson",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Aventura",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 2111,
    "display_name": "Marcel and the Mona Lisa",
    "release_year": 1990,
    "average_score": 8.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un misterio en París con Marcel intentando proteger el famoso cuadro.",
      "en": "A mystery in Paris with Marcel trying to protect the famous painting."
    },
    "runtime_minutes": "16 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Marcel+and+the+Mona+Lisa",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Marcel+and+the+Mona+Lisa",
    "filmmaker": {
      "director_name": "Stephen Rabley",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Misterio",
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2112,
    "display_name": "Hannah and the Hurricane",
    "release_year": 1998,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una historia sobre valentía frente a la fuerza de la naturaleza.",
      "en": "A story about bravery against the forces of nature."
    },
    "runtime_minutes": "16 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Hannah+and+the+Hurricane",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Hannah+and+the+Hurricane",
    "filmmaker": {
      "director_name": "John Escott",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Drama"
    ]
  },
  {
    "movie_identifier": 2113,
    "display_name": "A New Zealand Adventure",
    "release_year": 2005,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Aventuras emocionantes a través de los paisajes de Nueva Zelanda.",
      "en": "Exciting adventures across the landscapes of New Zealand."
    },
    "runtime_minutes": "48 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=A+New+Zealand+Adventure",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=A+New+Zealand+Adventure",
    "filmmaker": {
      "director_name": "Jan Thorburn",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2114,
    "display_name": "The Thief of Always",
    "release_year": 1992,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un cuento oscuro y mágico donde un niño descubre un lugar maravilloso y siniestro.",
      "en": "A dark magical fable where a child discovers a wonderful yet sinister place."
    },
    "runtime_minutes": "240 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thief+of+Always",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Thief+of+Always",
    "filmmaker": {
      "director_name": "Clive Barker",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Fantasía",
      "Terror"
    ]
  },
  {
    "movie_identifier": 2115,
    "display_name": "Tales of the Arabian Nights",
    "release_year": 1993,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una selección de las clásicas historias de Oriente Medio.",
      "en": "A selection of classic Middle Eastern tales."
    },
    "runtime_minutes": "64 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Tales+of+the+Arabian+Nights",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Tales+of+the+Arabian+Nights",
    "filmmaker": {
      "director_name": "Alison Phillips",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2116,
    "display_name": "A Ghost Collection",
    "release_year": 2001,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una antología de historias de fantasmas que te darán escalofríos.",
      "en": "An anthology of chilling ghost stories."
    },
    "runtime_minutes": "72 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=A+Ghost+Collection",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=A+Ghost+Collection",
    "filmmaker": {
      "director_name": "Anne Stanmore",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Terror"
    ]
  },
  {
    "movie_identifier": 2117,
    "display_name": "Witches and Wizards",
    "release_year": 2004,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Relatos mágicos sobre brujas y magos.",
      "en": "Magical tales about witches and wizards."
    },
    "runtime_minutes": "64 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Witches+and+Wizards",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Witches+and+Wizards",
    "filmmaker": {
      "director_name": "Phillipa Tracy",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2118,
    "display_name": "The Borrowers",
    "release_year": 1952,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La historia de unos diminutos seres que viven secretamente en las casas.",
      "en": "The story of tiny people who secretly live in houses."
    },
    "runtime_minutes": "192 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=The+Borrowers",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=The+Borrowers",
    "filmmaker": {
      "director_name": "Mary Norton",
      "avatar": ""
    },
    "keyword_labels": [
      "English",
      "Literatura Infanto-Juvenil",
      "Fantasía"
    ]
  }
]));

// Añadir libros de Literatura Infanto-Juvenil
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2120,
    "display_name": "Mi planta de naranja lima",
    "release_year": 1968,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La conmovedora historia de Zezé, un niño que descubre el dolor y la ternura.",
      "en": "The touching story of Zezé, a boy who discovers pain and tenderness."
    },
    "runtime_minutes": "192 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Mi+planta+de+naranja+lima",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Mi+planta+de+naranja+lima",
    "filmmaker": {
      "director_name": "José Mauro de Vasconcelos",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Drama"
    ]
  },
  {
    "movie_identifier": 2121,
    "display_name": "Pequeñas infamias",
    "release_year": 1998,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un brillante retrato social y psicológico.",
      "en": "A brilliant social and psychological portrait."
    },
    "runtime_minutes": "336 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Peque%C3%B1as+infamias",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Peque%C3%B1as+infamias",
    "filmmaker": {
      "director_name": "Carmen Posadas",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2122,
    "display_name": "Hoyos",
    "release_year": 1998,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un campamento de detención juvenil donde los niños cavan hoyos para construir el carácter.",
      "en": "A juvenile detention camp where boys dig holes to build character."
    },
    "runtime_minutes": "272 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Hoyos",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Hoyos",
    "filmmaker": {
      "director_name": "Louis Sachar",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2123,
    "display_name": "La catedral",
    "release_year": 2000,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un misterio en la construcción de una catedral gótica en el siglo XIII.",
      "en": "A mystery in the construction of a gothic cathedral in the 13th century."
    },
    "runtime_minutes": "288 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=La+catedral",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=La+catedral",
    "filmmaker": {
      "director_name": "César Mallorquí",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Misterio"
    ]
  },
  {
    "movie_identifier": 2124,
    "display_name": "El principito",
    "release_year": 1943,
    "average_score": 9.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una narración corta sobre el amor, la amistad y el sentido de la vida.",
      "en": "A short tale about love, friendship, and the meaning of life."
    },
    "runtime_minutes": "96 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=El+principito",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=El+principito",
    "filmmaker": {
      "director_name": "Antoine de Saint-Exupéry",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 2125,
    "display_name": "La música del viento",
    "release_year": 1998,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La historia de un periodista que investiga la explotación infantil en la India.",
      "en": "The story of a journalist investigating child exploitation in India."
    },
    "runtime_minutes": "224 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=La+m%C3%BAsica+del+viento",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=La+m%C3%BAsica+del+viento",
    "filmmaker": {
      "director_name": "Jordi Sierra i Fabra",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Social"
    ]
  },
  {
    "movie_identifier": 2126,
    "display_name": "Pupila de águila",
    "release_year": 1989,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las aventuras y los conflictos de Martina para descubrir la verdad.",
      "en": "Martina's adventures and conflicts to discover the truth."
    },
    "runtime_minutes": "208 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Pupila+de+%C3%A1guila",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Pupila+de+%C3%A1guila",
    "filmmaker": {
      "director_name": "Alfredo Gómez Cerdá",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2127,
    "display_name": "Pesadillas: Sangre de monstruo",
    "release_year": 1992,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El inicio de la terrorífica y famosa saga juvenil Pesadillas.",
      "en": "The beginning of the famous terrifying youth saga Goosebumps."
    },
    "runtime_minutes": "144 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Pesadillas:+Sangre+de+monstruo",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Pesadillas:+Sangre+de+monstruo",
    "filmmaker": {
      "director_name": "R.L. Stine",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Terror"
    ]
  },
  {
    "movie_identifier": 2128,
    "display_name": "Cuentos clásicos de los Hermanos Grimm",
    "release_year": 1812,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una recopilación de los cuentos clásicos más famosos de la historia.",
      "en": "A compilation of the most famous classic tales in history."
    },
    "runtime_minutes": "500 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Cuentos+cl%C3%A1sicos",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Cuentos+cl%C3%A1sicos",
    "filmmaker": {
      "director_name": "Hermanos Grimm",
      "avatar": ""
    },
    "keyword_labels": [
      "Literatura Infanto-Juvenil",
      "Fantasía",
      "Clásicos"
    ]
  }
]));

// Añadir libros de Laura Gallego
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2130,
    "display_name": "Memorias de Idhún I: La Resistencia",
    "release_year": 2004,
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Jack y Victoria descubren un mundo mágico llamado Idhún y luchan contra el tirano Ashran el Nigromante.",
      "en": "Jack and Victoria discover a magical world called Idhun and fight the tyrant Ashran."
    },
    "runtime_minutes": "560 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+I:+La+Resistencia",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+I:+La+Resistencia",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2131,
    "display_name": "Memorias de Idhún II: Tríada",
    "release_year": 2005,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La continuación de la historia de los dioses de Idhún y el destino de sus elegidos.",
      "en": "The continuation of the story of the gods of Idhun and the fate of their chosen ones."
    },
    "runtime_minutes": "768 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+II:+Tr%C3%ADada",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+II:+Tr%C3%ADada",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2132,
    "display_name": "Memorias de Idhún III: Panteón",
    "release_year": 2006,
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El épico desenlace de la trilogía que revolucionó la literatura fantástica española.",
      "en": "The epic conclusion of the trilogy that revolutionized Spanish fantasy literature."
    },
    "runtime_minutes": "944 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+III:+Pante%C3%B3n",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+III:+Pante%C3%B3n",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2133,
    "display_name": "El Valle de los Lobos",
    "release_year": 2000,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Primer libro de Crónicas de la Torre. Dana es invitada a una escuela de alta hechicería.",
      "en": "Dana is invited to a school of high sorcery."
    },
    "runtime_minutes": "272 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=El+Valle+de+los+Lobos",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=El+Valle+de+los+Lobos",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Magia"
    ]
  },
  {
    "movie_identifier": 2134,
    "display_name": "La maldición del Maestro",
    "release_year": 2001,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Segundo libro de Crónicas de la Torre.",
      "en": "Second book of The Chronicles of the Tower."
    },
    "runtime_minutes": "272 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=La+maldici%C3%B3n+del+Maestro",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=La+maldici%C3%B3n+del+Maestro",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Magia"
    ]
  },
  {
    "movie_identifier": 2135,
    "display_name": "La llamada de los muertos",
    "release_year": 2003,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Tercer libro de Crónicas de la Torre.",
      "en": "Third book of The Chronicles of the Tower."
    },
    "runtime_minutes": "256 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=La+llamada+de+los+muertos",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=La+llamada+de+los+muertos",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Magia"
    ]
  },
  {
    "movie_identifier": 2136,
    "display_name": "Alas de fuego",
    "release_year": 2004,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Ahriel es un ángel que ha sido traicionado y encerrado en Gorlian.",
      "en": "Ahriel is an angel who has been betrayed and locked up in Gorlian."
    },
    "runtime_minutes": "240 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Alas+de+fuego",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Alas+de+fuego",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2137,
    "display_name": "Alas negras",
    "release_year": 2009,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La continuación de la historia del ángel Ahriel.",
      "en": "The continuation of the story of the angel Ahriel."
    },
    "runtime_minutes": "384 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Alas+negras",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Alas+negras",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2138,
    "display_name": "Donde los árboles cantan",
    "release_year": 2011,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La joven Viana debe adentrarse en el Gran Bosque después de que su reino sea invadido.",
      "en": "Viana must enter the Great Forest after her kingdom is invaded."
    },
    "runtime_minutes": "480 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Donde+los+%C3%A1rboles+cantan",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Donde+los+%C3%A1rboles+cantan",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2139,
    "display_name": "Dos velas para el diablo",
    "release_year": 2008,
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Ángeles y demonios libran una guerra oculta entre los humanos.",
      "en": "Angels and demons wage a hidden war among humans."
    },
    "runtime_minutes": "416 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Dos+velas+para+el+diablo",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Dos+velas+para+el+diablo",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Misterio"
    ]
  },
  {
    "movie_identifier": 2140,
    "display_name": "El bestiario de Axlin",
    "release_year": 2018,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Axlin viaja por un mundo lleno de monstruos para documentarlos y salvar a la humanidad.",
      "en": "Axlin travels through a world full of monsters to document them."
    },
    "runtime_minutes": "512 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=El+bestiario+de+Axlin",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=El+bestiario+de+Axlin",
    "filmmaker": {
      "director_name": "Laura Gallego García",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Literatura Infanto-Juvenil",
      "Aventura"
    ]
  }
]));

// Añadir Cómics, Narnia y La Brújula Dorada
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2150,
    "display_name": "La brújula dorada (Materia oscura I)",
    "release_year": 1995,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Lyra emprende un viaje al norte para rescatar a su amigo Roger y desentrañar el misterio del Polvo.",
      "en": "Lyra journeys to the north to rescue her friend Roger and uncover the mystery of Dust."
    },
    "runtime_minutes": "399 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=La+br%C3%BAjula+dorada",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=La+br%C3%BAjula+dorada",
    "filmmaker": {
      "director_name": "Philip Pullman",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 2151,
    "display_name": "Las crónicas de Narnia: El león, la bruja y el armario",
    "release_year": 1950,
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cuatro hermanos descubren un mundo mágico congelado en el invierno eterno de la Bruja Blanca.",
      "en": "Four siblings discover a magical world frozen in the eternal winter of the White Witch."
    },
    "runtime_minutes": "208 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Las+cr%C3%B3nicas+de+Narnia",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Las+cr%C3%B3nicas+de+Narnia",
    "filmmaker": {
      "director_name": "C.S. Lewis",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Clásicos",
      "Literatura Infanto-Juvenil"
    ]
  },
  {
    "movie_identifier": 2152,
    "display_name": "Aquaman: Las fosas",
    "release_year": 2011,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Arthur Curry se enfrenta a terroríficas criaturas abisales conocidas como las Fosas.",
      "en": "Arthur Curry faces terrifying abyssal creatures known as the Trench."
    },
    "runtime_minutes": "144 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Aquaman",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Aquaman",
    "filmmaker": {
      "director_name": "Geoff Johns (DC Comics)",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Superhéroes"
    ]
  },
  {
    "movie_identifier": 2153,
    "display_name": "Harley Quinn: Calor en la ciudad",
    "release_year": 2014,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las aventuras locas e impredecibles de Harley Quinn en su nueva vida.",
      "en": "The crazy and unpredictable adventures of Harley Quinn in her new life."
    },
    "runtime_minutes": "224 páginas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=Harley+Quinn",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=Harley+Quinn",
    "filmmaker": {
      "director_name": "Amanda Conner (DC Comics)",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Superhéroes"
    ]
  },
  {
    "movie_identifier": 2154,
    "display_name": "Catwoman: Si vas a Roma",
    "release_year": 2004,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Selina Kyle viaja a Roma para descubrir los secretos de su pasado y la familia criminal Falcone.",
      "en": "Selina Kyle travels to Rome to uncover secrets of her past."
    },
    "runtime_minutes": "160 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=Catwoman",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=Catwoman",
    "filmmaker": {
      "director_name": "Jeph Loeb (DC Comics)",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Superhéroes"
    ]
  },
  {
    "movie_identifier": 2155,
    "display_name": "Civil War (Marvel)",
    "release_year": 2006,
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El universo Marvel se divide en dos bandos liderados por Iron Man y Capitán América.",
      "en": "The Marvel universe splits into two factions led by Iron Man and Captain America."
    },
    "runtime_minutes": "208 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/c0392b/ffffff?text=Marvel:+Civil+War",
    "cover_image_url": "https://placehold.co/600x900/c0392b/ffffff?text=Marvel:+Civil+War",
    "filmmaker": {
      "director_name": "Mark Millar (Marvel Comics)",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Superhéroes"
    ]
  },
  {
    "movie_identifier": 2156,
    "display_name": "Winx Club Cómic: El misterio del castillo",
    "release_year": 2004,
    "average_score": 8.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las hadas del Winx Club regresan en formato cómic lleno de aventuras.",
      "en": "The Winx Club fairies return in comic format full of adventures."
    },
    "runtime_minutes": "64 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=Winx+Club+(C%C3%B3mic)",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=Winx+Club+(C%C3%B3mic)",
    "filmmaker": {
      "director_name": "Iginio Straffi",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Fantasía"
    ]
  },
  {
    "movie_identifier": 2157,
    "display_name": "Mortadelo y Filemón: El sulfato atómico",
    "release_year": 1969,
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "La primera aventura larga de los agentes de la T.I.A. creada por Ibáñez.",
      "en": "The first long adventure of the T.I.A. agents created by Ibáñez."
    },
    "runtime_minutes": "48 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Mortadelo+y+Filem%C3%B3n",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Mortadelo+y+Filem%C3%B3n",
    "filmmaker": {
      "director_name": "Francisco Ibáñez",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Humor"
    ]
  },
  {
    "movie_identifier": 2158,
    "display_name": "Los Simpson: Cómics",
    "release_year": 1993,
    "average_score": 8.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Las locas aventuras de Homer, Bart y toda la familia amarilla en Springfield.",
      "en": "The crazy adventures of Homer, Bart and the whole yellow family in Springfield."
    },
    "runtime_minutes": "128 páginas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Los+Simpson+(C%C3%B3mics)",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Los+Simpson+(C%C3%B3mics)",
    "filmmaker": {
      "director_name": "Matt Groening",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Humor"
    ]
  }
]));

// Añadir enciclopedias visuales a Cómics y Gráficos
BOOKS_DATA.push(...([
  {
    "movie_identifier": 2160,
    "display_name": "Nuestro planeta Tierra",
    "release_year": 2015,
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un viaje visual e ilustrado para descubrir los secretos de nuestro planeta.",
      "en": "A visual and illustrated journey to discover the secrets of our planet."
    },
    "runtime_minutes": "120 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/27ae60/ffffff?text=Nuestro+planeta+Tierra",
    "cover_image_url": "https://placehold.co/600x900/27ae60/ffffff?text=Nuestro+planeta+Tierra",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2161,
    "display_name": "El cuerpo humano",
    "release_year": 2016,
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Aprende de forma gráfica y divertida cómo funciona la increíble máquina que es tu cuerpo.",
      "en": "Learn in a graphic and fun way how the incredible machine that is your body works."
    },
    "runtime_minutes": "96 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=El+cuerpo+humano",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=El+cuerpo+humano",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2162,
    "display_name": "El espacio",
    "release_year": 2017,
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Una exploración ilustrada de los planetas, estrellas y galaxias de nuestro universo.",
      "en": "An illustrated exploration of the planets, stars, and galaxies of our universe."
    },
    "runtime_minutes": "104 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=El+espacio",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=El+espacio",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2163,
    "display_name": "Animales y naturaleza",
    "release_year": 2018,
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Gráficos y dibujos detallados sobre la flora y fauna de todo el mundo.",
      "en": "Detailed graphics and drawings of flora and fauna from around the world."
    },
    "runtime_minutes": "112 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/16a085/ffffff?text=Animales+y+naturaleza",
    "cover_image_url": "https://placehold.co/600x900/16a085/ffffff?text=Animales+y+naturaleza",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2164,
    "display_name": "Cómo funcionan las cosas",
    "release_year": 2019,
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Descubre el mecanismo interno de las máquinas y objetos que nos rodean mediante ilustraciones.",
      "en": "Discover the internal mechanics of machines and objects around us through illustrations."
    },
    "runtime_minutes": "128 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=C%C3%B3mo+funcionan+las+cosas",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=C%C3%B3mo+funcionan+las+cosas",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  },
  {
    "movie_identifier": 2165,
    "display_name": "Cómo somos las personas",
    "release_year": 2020,
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Un libro muy gráfico sobre la diversidad humana, culturas y sociedad.",
      "en": "A very graphic book about human diversity, cultures, and society."
    },
    "runtime_minutes": "96 páginas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/d35400/ffffff?text=C%C3%B3mo+somos+las+personas",
    "cover_image_url": "https://placehold.co/600x900/d35400/ffffff?text=C%C3%B3mo+somos+las+personas",
    "filmmaker": {
      "director_name": "Edelvives",
      "avatar": ""
    },
    "keyword_labels": [
      "Cómics y Gráficos",
      "Educación"
    ]
  }
]));

// Añadir array global SERIES_DATA
const SERIES_DATA = [
  {
    "movie_identifier": 3001,
    "display_name": "Breaking Bad",
    "release_year": 2008,
    "average_score": 9.5,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Un profesor de química diagnosticado con cáncer terminal se asocia con un antiguo alumno para fabricar y vender metanfetamina con el fin de asegurar el futuro económico de su familia.",
      "en": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine."
    },
    "runtime_minutes": "5 Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/16a085/ffffff?text=Breaking+Bad",
    "cover_image_url": "https://placehold.co/600x900/16a085/ffffff?text=Breaking+Bad",
    "filmmaker": {
      "director_name": "Vince Gilligan",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Crimen",
      "Thriller"
    ]
  },
  {
    "movie_identifier": 3002,
    "display_name": "Game of Thrones",
    "release_year": 2011,
    "average_score": 9.2,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Nueve familias nobles luchan por el control sobre las tierras míticas de Poniente, mientras un enemigo olvidado regresa tras milenios.",
      "en": "Nine noble families fight for control over the mythical lands of Westeros."
    },
    "runtime_minutes": "8 Temporadas",
    "content_rating": "18+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=Game+of+Thrones",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=Game+of+Thrones",
    "filmmaker": {
      "director_name": "David Benioff, D.B. Weiss",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Drama",
      "Acción"
    ]
  },
  {
    "movie_identifier": 3003,
    "display_name": "Stranger Things",
    "release_year": 2016,
    "average_score": 8.7,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Cuando un niño desaparece, sus amigos, su familia y la policía local se ven envueltos en un misterio extraordinario que involucra experimentos secretos y fuerzas sobrenaturales.",
      "en": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments."
    },
    "runtime_minutes": "4 Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/c0392b/ffffff?text=Stranger+Things",
    "cover_image_url": "https://placehold.co/600x900/c0392b/ffffff?text=Stranger+Things",
    "filmmaker": {
      "director_name": "The Duffer Brothers",
      "avatar": ""
    },
    "keyword_labels": [
      "Ciencia Ficción",
      "Misterio",
      "Terror"
    ]
  },
  {
    "movie_identifier": 3004,
    "display_name": "The Office (US)",
    "release_year": 2005,
    "average_score": 9,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Un falso documental sobre el día a día de los empleados de la papelera Dunder Mifflin en Scranton, Pensilvania.",
      "en": "A mockumentary on a group of typical office workers."
    },
    "runtime_minutes": "9 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=The+Office",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=The+Office",
    "filmmaker": {
      "director_name": "Greg Daniels",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3005,
    "display_name": "Dark",
    "release_year": 2017,
    "average_score": 8.8,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "La desaparición de dos niños revela los vínculos entre cuatro familias y saca a la luz el pasado de un pequeño pueblo alemán.",
      "en": "A family saga with a supernatural twist, set in a German town."
    },
    "runtime_minutes": "3 Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=Dark",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=Dark",
    "filmmaker": {
      "director_name": "Baran bo Odar",
      "avatar": ""
    },
    "keyword_labels": [
      "Ciencia Ficción",
      "Thriller",
      "Misterio"
    ]
  }
];

// Añadir segunda tanda de series (Comedia y Animación)
SERIES_DATA.push(...([
  {
    "movie_identifier": 3006,
    "display_name": "Machos Alfa",
    "release_year": 2022,
    "average_score": 8.2,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Cuatro amigos cuarentones sienten que pierden sus privilegios en la era de la igualdad e intentan adaptarse a la nueva realidad.",
      "en": "Four friends in their forties feel they are losing their privileges in the era of equality."
    },
    "runtime_minutes": "2 Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Machos+Alfa",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Machos+Alfa",
    "filmmaker": {
      "director_name": "Laura y Alberto Caballero",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3007,
    "display_name": "Los Serrano",
    "release_year": 2003,
    "average_score": 8.5,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Un viudo con tres hijos se casa con una mujer divorciada con dos hijas, dando lugar a una convivencia llena de humor.",
      "en": "A widower with three sons marries a divorced woman with two daughters."
    },
    "runtime_minutes": "8 Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Los+Serrano",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Los+Serrano",
    "filmmaker": {
      "director_name": "Daniel Écija",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Drama"
    ]
  },
  {
    "movie_identifier": 3008,
    "display_name": "Friends",
    "release_year": 1994,
    "average_score": 9.3,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Las vidas personales y profesionales de seis amigos veinteañeros que viven en Manhattan.",
      "en": "The personal and professional lives of six twenty-something friends living in Manhattan."
    },
    "runtime_minutes": "10 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Friends",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Friends",
    "filmmaker": {
      "director_name": "David Crane, Marta Kauffman",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3009,
    "display_name": "Los Simpson",
    "release_year": 1989,
    "average_score": 9.2,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Las satíricas aventuras de una familia trabajadora de clase media en la peculiar ciudad de Springfield.",
      "en": "The satiric adventures of a working-class family in the misfit city of Springfield."
    },
    "runtime_minutes": "35+ Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Los+Simpson",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Los+Simpson",
    "filmmaker": {
      "director_name": "Matt Groening",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Animación"
    ]
  },
  {
    "movie_identifier": 3010,
    "display_name": "Futurama",
    "release_year": 1999,
    "average_score": 8.9,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Un repartidor de pizzas es congelado accidentalmente en 1999 y se despierta mil años después en el futuro.",
      "en": "A pizza delivery boy is accidentally frozen in 1999 and thawed out 1,000 years later."
    },
    "runtime_minutes": "8+ Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Futurama",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Futurama",
    "filmmaker": {
      "director_name": "Matt Groening",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Animación",
      "Ciencia Ficción"
    ]
  },
  {
    "movie_identifier": 3011,
    "display_name": "Padre de familia (Family Guy)",
    "release_year": 1999,
    "average_score": 8.5,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Una familia disfuncional en la disparatada ciudad de Quahog, Rhode Island, intentando sobrevivir a su día a día.",
      "en": "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another."
    },
    "runtime_minutes": "22+ Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/34495e/ffffff?text=Padre+de+Familia",
    "cover_image_url": "https://placehold.co/600x900/34495e/ffffff?text=Padre+de+Familia",
    "filmmaker": {
      "director_name": "Seth MacFarlane",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Animación"
    ]
  }
]));

// Añadir Series Teen/Disney
SERIES_DATA.push(...([
  {
    "movie_identifier": 3012,
    "display_name": "Embrujadas",
    "release_year": 1998,
    "average_score": 8.1,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Tres hermanas descubren que son brujas destinadas a proteger a los inocentes de las fuerzas del mal.",
      "en": "Three sisters discover they are witches destined to protect innocents from evil forces."
    },
    "runtime_minutes": "8 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=Embrujadas",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=Embrujadas",
    "filmmaker": {
      "director_name": "Constance M. Burge",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Drama"
    ]
  },
  {
    "movie_identifier": 3013,
    "display_name": "H2O: Just Add Water",
    "release_year": 2006,
    "average_score": 7.9,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Tres adolescentes se convierten en sirenas con poderes mágicos después de visitar una isla misteriosa.",
      "en": "Three teenagers become mermaids with magical powers after visiting a mysterious island."
    },
    "runtime_minutes": "3 Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=H2O",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=H2O",
    "filmmaker": {
      "director_name": "Jonathan M. Shiff",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3014,
    "display_name": "Zoey 101",
    "release_year": 2005,
    "average_score": 8,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Las aventuras de Zoey Brooks y sus amigos en la Academia PCA, un antiguo internado solo para chicos.",
      "en": "The adventures of Zoey Brooks and her friends at PCA Academy."
    },
    "runtime_minutes": "4 Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=Zoey+101",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=Zoey+101",
    "filmmaker": {
      "director_name": "Dan Schneider",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Drama"
    ]
  },
  {
    "movie_identifier": 3015,
    "display_name": "Los Magos de Waverly Place",
    "release_year": 2007,
    "average_score": 8.2,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Tres hermanos adolescentes compiten por heredar los poderes mágicos de su familia mientras intentan llevar una vida normal.",
      "en": "Three teenage siblings compete to inherit their family's magical powers."
    },
    "runtime_minutes": "4 Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Los+Magos+de+Waverly+Place",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Los+Magos+de+Waverly+Place",
    "filmmaker": {
      "director_name": "Todd J. Greenwald",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3016,
    "display_name": "Zack y Cody: Hotel Dulce Hotel",
    "release_year": 2005,
    "average_score": 8.3,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Las travesuras de los gemelos Zack y Cody Martin, quienes viven en el lujoso Hotel Tipton.",
      "en": "The antics of twin brothers Zack and Cody Martin, who live in the luxurious Tipton Hotel."
    },
    "runtime_minutes": "3 Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Zack+y+Cody",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Zack+y+Cody",
    "filmmaker": {
      "director_name": "Danny Kallis, Jim Geoghan",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia"
    ]
  }
]));

// Añadir Peliculas Disney/Familiar
RAW_EXTERNAL_MOVIES_API_DATA.push(...([
  {
    "movie_identifier": 4001,
    "display_name": "Hotel Transilvania",
    "release_year": 2012,
    "average_score": 8.5,
    "category_type": "Animación/Comedia",
    "synopsis_text": {
      "es": "Drácula regenta un resort de cinco estrellas para monstruos, pero su mundo se pone patas arriba cuando un humano normal descubre el hotel.",
      "en": "Dracula operates a high-end resort for monsters, but his world gets turned upside down when a boy discovers the resort."
    },
    "runtime_minutes": "1h 31m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=Hotel+Transilvania",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=Hotel+Transilvania",
    "filmmaker": {
      "director_name": "Genndy Tartakovsky",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Comedia",
      "Familiar"
    ]
  },
  {
    "movie_identifier": 4002,
    "display_name": "Tú a Londres y yo a California",
    "release_year": 1998,
    "average_score": 8.7,
    "category_type": "Comedia/Familiar",
    "synopsis_text": {
      "es": "Dos gemelas idénticas separadas al nacer se reencuentran en un campamento de verano e idean un plan para volver a juntar a sus padres.",
      "en": "Identical twins separated at birth reunite at summer camp and hatch a plan to bring their parents back together."
    },
    "runtime_minutes": "2h 8m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e67e22/ffffff?text=T%C3%BA+a+Londres+y+yo+a+California",
    "cover_image_url": "https://placehold.co/600x900/e67e22/ffffff?text=T%C3%BA+a+Londres+y+yo+a+California",
    "filmmaker": {
      "director_name": "Nancy Meyers",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Familiar"
    ]
  },
  {
    "movie_identifier": 4003,
    "display_name": "Cruella",
    "release_year": 2021,
    "average_score": 8.4,
    "category_type": "Comedia/Crimen",
    "synopsis_text": {
      "es": "La historia de los orígenes rebeldes de uno de los villanos más conocidos de la moda, la legendaria Cruella de Vil.",
      "en": "The rebellious early days of one of cinema's most notorious and notoriously fashionable villains, the legendary Cruella de Vil."
    },
    "runtime_minutes": "2h 14m",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/000000/ffffff?text=Cruella",
    "cover_image_url": "https://placehold.co/600x900/000000/ffffff?text=Cruella",
    "filmmaker": {
      "director_name": "Craig Gillespie",
      "avatar": ""
    },
    "keyword_labels": [
      "Comedia",
      "Crimen",
      "Moda"
    ]
  },
  {
    "movie_identifier": 4004,
    "display_name": "Crepúsculo",
    "release_year": 2008,
    "average_score": 7.8,
    "category_type": "Romance/Fantasía",
    "synopsis_text": {
      "es": "Una adolescente arriesga todo al enamorarse de un vampiro en este romance sobrenatural.",
      "en": "A teenage girl risks everything when she falls in love with a vampire in this supernatural romance."
    },
    "runtime_minutes": "2h 2m",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=Crep%C3%BAsculo",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=Crep%C3%BAsculo",
    "filmmaker": {
      "director_name": "Catherine Hardwicke",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Romance",
      "Drama"
    ]
  }
]));

// Añadir Series Rebelde y Rebelde Way
SERIES_DATA.push(...([
  {
    "movie_identifier": 3017,
    "display_name": "Rebelde",
    "release_year": 2004,
    "average_score": 8.2,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Seis adolescentes de diferentes clases sociales en el exclusivo Elite Way School descubren que la música es su gran pasión en común.",
      "en": "Six teenagers from different social classes at the exclusive Elite Way School discover music as their common passion."
    },
    "runtime_minutes": "3 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=Rebelde",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=Rebelde",
    "filmmaker": {
      "director_name": "Pedro Damián",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Romántica"
    ]
  },
  {
    "movie_identifier": 3018,
    "display_name": "Rebelde Way (Erreway)",
    "release_year": 2002,
    "average_score": 8.5,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Cuatro estudiantes del Elite Way School en Buenos Aires forman una banda musical en secreto, enfrentándose a sus padres y profesores.",
      "en": "Four students from the Elite Way School in Buenos Aires secretly form a music band."
    },
    "runtime_minutes": "2 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Rebelde+Way",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Rebelde+Way",
    "filmmaker": {
      "director_name": "Cris Morena",
      "avatar": ""
    },
    "keyword_labels": [
      "Drama",
      "Romántica",
      "Comedia"
    ]
  }
]));

// Añadir Peliculas Pixar
RAW_EXTERNAL_MOVIES_API_DATA.push(...([
  {
    "movie_identifier": 4005,
    "display_name": "Inside Out (Del revés)",
    "release_year": 2015,
    "average_score": 8.9,
    "category_type": "Animación/Comedia",
    "synopsis_text": {
      "es": "Las cinco emociones principales de una niña compiten por tomar el control de su mente cuando su familia se muda a una nueva ciudad.",
      "en": "A young girl's five core emotions compete for control of her mind when her family moves to a new city."
    },
    "runtime_minutes": "1h 35m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/ffffff?text=Inside+Out",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/ffffff?text=Inside+Out",
    "filmmaker": {
      "director_name": "Pete Docter",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Familiar",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 4006,
    "display_name": "Soul",
    "release_year": 2020,
    "average_score": 8.6,
    "category_type": "Animación/Fantasía",
    "synopsis_text": {
      "es": "Un músico de jazz sufre un accidente que separa su alma de su cuerpo, llevándole al lugar donde se forman las almas antes de nacer.",
      "en": "A jazz musician suffers an accident that separates his soul from his body, taking him to the place where souls are formed."
    },
    "runtime_minutes": "1h 40m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/2c3e50/ffffff?text=Soul",
    "cover_image_url": "https://placehold.co/600x900/2c3e50/ffffff?text=Soul",
    "filmmaker": {
      "director_name": "Pete Docter",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Drama",
      "Música"
    ]
  },
  {
    "movie_identifier": 4007,
    "display_name": "Luca",
    "release_year": 2021,
    "average_score": 8.4,
    "category_type": "Animación/Aventura",
    "synopsis_text": {
      "es": "Dos monstruos marinos adolescentes disfrazados de humanos experimentan un verano inolvidable en un pueblo de la Riviera italiana.",
      "en": "Two teenage sea monsters disguised as humans experience an unforgettable summer on the Italian Riviera."
    },
    "runtime_minutes": "1h 35m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Luca",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Luca",
    "filmmaker": {
      "director_name": "Enrico Casarosa",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Familiar",
      "Comedia"
    ]
  }
]));

// Añadir array global PROGRAMS_DATA
const PROGRAMS_DATA = [
  {
    "movie_identifier": 5001,
    "display_name": "El Hormiguero",
    "release_year": 2006,
    "average_score": 7.5,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Talk show de televisión presentado por Pablo Motos, centrado en el humor, la ciencia, entrevistas y las hormigas Trancas y Barrancas.",
      "en": "Television talk show hosted by Pablo Motos, focusing on humor, science, interviews, and the ants Trancas and Barrancas."
    },
    "runtime_minutes": "18+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=El+Hormiguero",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=El+Hormiguero",
    "filmmaker": {
      "director_name": "Pablo Motos",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento",
      "Entrevistas"
    ]
  },
  {
    "movie_identifier": 5002,
    "display_name": "Tu cara me suena",
    "release_year": 2011,
    "average_score": 8.2,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Famosos se enfrentan cada semana al reto de imitar a cantantes icónicos, caracterizándose y cantando en directo.",
      "en": "Celebrities face the challenge of imitating iconic singers every week, dressing up and singing live."
    },
    "runtime_minutes": "11+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=Tu+cara+me+suena",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=Tu+cara+me+suena",
    "filmmaker": {
      "director_name": "Manel Fuentes",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento",
      "Musical",
      "Talent Show"
    ]
  },
  {
    "movie_identifier": 5003,
    "display_name": "Got Talent España",
    "release_year": 2016,
    "average_score": 7.8,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Programa en el que artistas de todas las disciplinas muestran su talento frente a un jurado exigente.",
      "en": "A show where artists from all disciplines showcase their talent to a demanding jury."
    },
    "runtime_minutes": "9+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Got+Talent",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Got+Talent",
    "filmmaker": {
      "director_name": "Santi Millán",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento",
      "Talent Show"
    ]
  },
  {
    "movie_identifier": 5004,
    "display_name": "Operación Triunfo (OT)",
    "release_year": 2001,
    "average_score": 8.5,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Un grupo de jóvenes cantantes ingresa en una academia musical para formarse y competir por iniciar su carrera discográfica.",
      "en": "A group of young singers enters a musical academy to train and compete to start their recording career."
    },
    "runtime_minutes": "12+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Operaci%C3%B3n+Triunfo",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Operaci%C3%B3n+Triunfo",
    "filmmaker": {
      "director_name": "Noemí Galera / Chenoa",
      "avatar": ""
    },
    "keyword_labels": [
      "Musical",
      "Talent Show",
      "Entretenimiento"
    ]
  },
  {
    "movie_identifier": 5005,
    "display_name": "Atrapa un millón",
    "release_year": 2011,
    "average_score": 7.6,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Concurso en el que los participantes deben apostar fajos de dinero real en diferentes trampillas para responder a preguntas de cultura general.",
      "en": "A game show where contestants must bet bundles of real money on trapdoors to answer trivia questions."
    },
    "runtime_minutes": "Varios especiales",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/16a085/ffffff?text=Atrapa+un+mill%C3%B3n",
    "cover_image_url": "https://placehold.co/600x900/16a085/ffffff?text=Atrapa+un+mill%C3%B3n",
    "filmmaker": {
      "director_name": "Carlos Sobera / Juanra Bonet",
      "avatar": ""
    },
    "keyword_labels": [
      "Concurso",
      "Entretenimiento"
    ]
  }
];

// Añadir más Programas de TV
PROGRAMS_DATA.push(...([
  {
    "movie_identifier": 5006,
    "display_name": "La Resistencia",
    "release_year": 2018,
    "average_score": 8.4,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Late night show desenfadado y caótico presentado por David Broncano.",
      "en": "Casual and chaotic late night show hosted by David Broncano."
    },
    "runtime_minutes": "7+ Temporadas",
    "content_rating": "16+",
    "bg_image_url": "https://placehold.co/1200x600/34495e/ffffff?text=La+Resistencia",
    "cover_image_url": "https://placehold.co/600x900/34495e/ffffff?text=La+Resistencia",
    "filmmaker": {
      "director_name": "David Broncano",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento",
      "Entrevistas"
    ]
  },
  {
    "movie_identifier": 5007,
    "display_name": "Pasapalabra",
    "release_year": 2000,
    "average_score": 8,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Concurso cultural donde los participantes deben acertar palabras del diccionario basadas en su letra inicial.",
      "en": "Cultural game show where participants must guess dictionary words based on their initial letter."
    },
    "runtime_minutes": "24+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/2980b9/ffffff?text=Pasapalabra",
    "cover_image_url": "https://placehold.co/600x900/2980b9/ffffff?text=Pasapalabra",
    "filmmaker": {
      "director_name": "Roberto Leal / Christian Gálvez",
      "avatar": ""
    },
    "keyword_labels": [
      "Concurso",
      "Entretenimiento"
    ]
  },
  {
    "movie_identifier": 5008,
    "display_name": "La ruleta de la suerte",
    "release_year": 2006,
    "average_score": 7.2,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Concurso clásico en el que los participantes giran una gran ruleta y adivinan paneles de palabras.",
      "en": "Classic game show where participants spin a large wheel and guess word puzzles."
    },
    "runtime_minutes": "18+ Temporadas",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=La+ruleta+de+la+suerte",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=La+ruleta+de+la+suerte",
    "filmmaker": {
      "director_name": "Jorge Fernández",
      "avatar": ""
    },
    "keyword_labels": [
      "Concurso",
      "Entretenimiento"
    ]
  },
  {
    "movie_identifier": 5009,
    "display_name": "El club de la comedia",
    "release_year": 1999,
    "average_score": 8.6,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Programa pionero en el formato de monólogos stand-up en España.",
      "en": "Pioneer program in the stand-up comedy format in Spain."
    },
    "runtime_minutes": "12 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/c0392b/ffffff?text=El+club+de+la+comedia",
    "cover_image_url": "https://placehold.co/600x900/c0392b/ffffff?text=El+club+de+la+comedia",
    "filmmaker": {
      "director_name": "Varios presentadores",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento"
    ]
  },
  {
    "movie_identifier": 5010,
    "display_name": "Sé lo que hicisteis...",
    "release_year": 2006,
    "average_score": 8.8,
    "category_type": "Programa",
    "synopsis_text": {
      "es": "Programa de humor y crítica a la prensa del corazón y a la actualidad televisiva.",
      "en": "Humor program criticizing the gossip press and television current events."
    },
    "runtime_minutes": "6 Temporadas",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=S%C3%A9+lo+que+hicisteis",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=S%C3%A9+lo+que+hicisteis",
    "filmmaker": {
      "director_name": "Patricia Conde, Ángel Martín",
      "avatar": ""
    },
    "keyword_labels": [
      "Entretenimiento"
    ]
  }
]));

// Añadir Peliculas Fantasía (Alicia, Narnia)
RAW_EXTERNAL_MOVIES_API_DATA.push(...([
  {
    "movie_identifier": 4008,
    "display_name": "Alicia en el país de las maravillas (Animación)",
    "release_year": 1951,
    "average_score": 8.3,
    "category_type": "Animación/Fantasía",
    "synopsis_text": {
      "es": "Alicia cae por una madriguera y se adentra en el estrambótico País de las Maravillas.",
      "en": "Alice falls down a rabbit hole and enters the bizarre Wonderland."
    },
    "runtime_minutes": "1h 15m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/2980b9/ffffff?text=Alicia+(Animaci%C3%B3n)",
    "cover_image_url": "https://placehold.co/600x900/2980b9/ffffff?text=Alicia+(Animaci%C3%B3n)",
    "filmmaker": {
      "director_name": "Clyde Geronimi, Wilfred Jackson",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Fantasía",
      "Familiar",
      "Clásicos"
    ]
  },
  {
    "movie_identifier": 4009,
    "display_name": "Alicia en el país de las maravillas",
    "release_year": 2010,
    "average_score": 7.5,
    "category_type": "Fantasía/Aventura",
    "synopsis_text": {
      "es": "Una Alicia de 19 años regresa al mágico mundo de su infancia para enfrentarse a la Reina Roja.",
      "en": "A 19-year-old Alice returns to the magical world from her childhood adventure."
    },
    "runtime_minutes": "1h 48m",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/8e44ad/ffffff?text=Alicia+(Live+Action)",
    "cover_image_url": "https://placehold.co/600x900/8e44ad/ffffff?text=Alicia+(Live+Action)",
    "filmmaker": {
      "director_name": "Tim Burton",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Aventura"
    ]
  },
  {
    "movie_identifier": 4010,
    "display_name": "Las crónicas de Narnia: El león, la bruja y el armario",
    "release_year": 2005,
    "average_score": 7.9,
    "category_type": "Fantasía/Aventura",
    "synopsis_text": {
      "es": "Cuatro niños descubren el mágico mundo de Narnia, gobernado por la malvada Bruja Blanca.",
      "en": "Four kids travel through a wardrobe to the land of Narnia."
    },
    "runtime_minutes": "2h 23m",
    "content_rating": "12+",
    "bg_image_url": "https://placehold.co/1200x600/34495e/ffffff?text=Cr%C3%B3nicas+de+Narnia",
    "cover_image_url": "https://placehold.co/600x900/34495e/ffffff?text=Cr%C3%B3nicas+de+Narnia",
    "filmmaker": {
      "director_name": "Andrew Adamson",
      "avatar": ""
    },
    "keyword_labels": [
      "Fantasía",
      "Aventura",
      "Familiar"
    ]
  }
]));

// Añadir Peliculas Disney/Animación
RAW_EXTERNAL_MOVIES_API_DATA.push(...([
  {
    "movie_identifier": 4011,
    "display_name": "Los Increíbles",
    "release_year": 2004,
    "average_score": 8.8,
    "category_type": "Animación/Acción",
    "synopsis_text": {
      "es": "Una familia de superhéroes encubiertos se ve obligada a entrar en acción para salvar al mundo.",
      "en": "A family of undercover superheroes are forced into action to save the world."
    },
    "runtime_minutes": "1h 55m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=Los+Incre%C3%ADbles",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=Los+Incre%C3%ADbles",
    "filmmaker": {
      "director_name": "Brad Bird",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Superhéroes",
      "Familiar"
    ]
  },
  {
    "movie_identifier": 4012,
    "display_name": "Zootrópolis (Zootopia)",
    "release_year": 2016,
    "average_score": 8.7,
    "category_type": "Animación/Comedia",
    "synopsis_text": {
      "es": "En una ciudad de animales antropomórficos, una conejita policía novata y un zorro estafador deben trabajar juntos para descubrir una conspiración.",
      "en": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
    },
    "runtime_minutes": "1h 48m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Zootopia",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Zootopia",
    "filmmaker": {
      "director_name": "Byron Howard, Rich Moore",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Aventura",
      "Familiar"
    ]
  },
  {
    "movie_identifier": 4013,
    "display_name": "Elemental",
    "release_year": 2023,
    "average_score": 8.2,
    "category_type": "Animación/Romance",
    "synopsis_text": {
      "es": "En una ciudad donde conviven los habitantes del fuego, el agua, la tierra y el aire, una joven de fuego y un chico de agua descubren todo lo que tienen en común.",
      "en": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental."
    },
    "runtime_minutes": "1h 41m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Elemental",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Elemental",
    "filmmaker": {
      "director_name": "Peter Sohn",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Familiar",
      "Romántica"
    ]
  },
  {
    "movie_identifier": 4014,
    "display_name": "Ice Age: La edad de hielo",
    "release_year": 2002,
    "average_score": 8.1,
    "category_type": "Animación/Comedia",
    "synopsis_text": {
      "es": "Un mamut, un perezoso y un dientes de sable deben devolver a un bebé humano a su tribu durante la glaciación.",
      "en": "A mammoth, a sloth, and a saber-tooth tiger must return a human baby to his tribe during the Ice Age."
    },
    "runtime_minutes": "1h 21m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/2980b9/ffffff?text=Ice+Age",
    "cover_image_url": "https://placehold.co/600x900/2980b9/ffffff?text=Ice+Age",
    "filmmaker": {
      "director_name": "Chris Wedge",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Aventura",
      "Familiar"
    ]
  },
  {
    "movie_identifier": 4015,
    "display_name": "Vaiana (Moana)",
    "release_year": 2016,
    "average_score": 8.6,
    "category_type": "Animación/Musical",
    "synopsis_text": {
      "es": "Una joven valiente se embarca en una misión épica a través del océano para salvar a su pueblo con la ayuda del semidiós Maui.",
      "en": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call."
    },
    "runtime_minutes": "1h 47m",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/1abc9c/ffffff?text=Vaiana",
    "cover_image_url": "https://placehold.co/600x900/1abc9c/ffffff?text=Vaiana",
    "filmmaker": {
      "director_name": "Ron Clements, John Musker",
      "avatar": ""
    },
    "keyword_labels": [
      "Animación",
      "Aventura",
      "Musical"
    ]
  }
]));

// Añadir array global QUEDADAS_DATA vacío por defecto
const QUEDADAS_DATA = [];

// Añadir Quedada Mercadona Magna
QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6001,
    "display_name": "Quedada miércoles 4h Mercadona magna",
    "release_year": 2026,
    "average_score": 10,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "Encuentro de amigos (María C 🥳, Jess 😘, Rober 🤗, Iván 😁) el miércoles a las 4h en el Mercadona Magna. 👑 👏🏼 🏰",
      "en": "Friends meetup (María C 🥳, Jess 😘, Rober 🤗, Iván 😁) on Wednesday at 4h at Mercadona Magna. 👑 👏🏼 🏰"
    },
    "runtime_minutes": "Miércoles 4h",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/1abc9c/ffffff?text=Quedada+Mercadona+Magna",
    "cover_image_url": "https://placehold.co/600x900/1abc9c/ffffff?text=Quedada+Mercadona+Magna",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social"
    ]
  }
]));

// Añadir Quedada Cena Bar La Esperanza
QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6002,
    "display_name": "Quedada Viernes 17: Cena Bar La Esperanza",
    "release_year": 2026,
    "average_score": 9.5,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "Cena de viernes a las 10:30h en el Bar La Esperanza. Asistentes confirmados: Manuel, Joana y María C.",
      "en": "Friday dinner at 10:30 PM at Bar La Esperanza. Confirmed attendees: Manuel, Joana, and María C."
    },
    "runtime_minutes": "Viernes 17, 10:30h",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/c0392b/ffffff?text=Cena+Bar+La+Esperanza",
    "cover_image_url": "https://placehold.co/600x900/c0392b/ffffff?text=Cena+Bar+La+Esperanza",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social",
      "Gastronomía"
    ]
  }
]));

// Añadir Quedada Piscina
QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6003,
    "display_name": "Quedada Piscina y Cena Casa Perico",
    "release_year": 2026,
    "average_score": 9.8,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "Planazo de piscina y cena en Casa Perico. Asistentes confirmados: Perico, Zuli, Ana y María C.",
      "en": "Pool and dinner plan at Casa Perico. Confirmed attendees: Perico, Zuli, Ana, and María C."
    },
    "runtime_minutes": "Día completo",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/3498db/ffffff?text=Piscina+y+Cena+Casa+Perico",
    "cover_image_url": "https://placehold.co/600x900/3498db/ffffff?text=Piscina+y+Cena+Casa+Perico",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social",
      "Verano"
    ]
  }
]));

// Añadir Quedada Jorge
QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6004,
    "display_name": "Quedada con Jorge",
    "release_year": 2026,
    "average_score": 9,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "Plan para quedar con Jorge.",
      "en": "Meetup plan with Jorge."
    },
    "runtime_minutes": "Por confirmar",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/9b59b6/ffffff?text=Quedada+con+Jorge",
    "cover_image_url": "https://placehold.co/600x900/9b59b6/ffffff?text=Quedada+con+Jorge",
    "filmmaker": {
      "director_name": "Jorge",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social"
    ]
  }
]));

// Añadir Quedada Alcalá
QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6005,
    "display_name": "Quedada Jueves 6h Parador de Alcalá de Henares",
    "release_year": 2026,
    "average_score": 9.6,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "Plan de tarde: escuchar música y jugar a juegos de mesa en el parque junto al Parador. Asistentes: Jairo y Adam.",
      "en": "Afternoon plan: listen to music and play board games in the park near the Parador. Attendees: Jairo and Adam."
    },
    "runtime_minutes": "Jueves 6h",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Quedada+Parador+de+Alcal%C3%A1",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Quedada+Parador+de+Alcal%C3%A1",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social",
      "Juegos"
    ]
  }
]));

// Añadir evento Afterwork Astrologia
EVENTS_DATA.push(...([
  {
    "id": 7001,
    "title": "Afterwork, talk and drinks: ¿Puede la astrología influir en tu negocio?",
    "date": "Miércoles 22 de julio, 19:30h",
    "location": "Gallobúho, Plaza de las Salesas 7, Centro Madrid",
    "image": "https://placehold.co/800x400/9b59b6/ffffff?text=Afterwork+Astrologia+Negocios",
    "type": "Networking/Afterwork",
    "category": "Emprendimiento"
  }
]));

// Añadir Expo Egipto a Planes
EXTERNAL_PLANS_DATA.push(...([
  {
    "id": 7002,
    "title": "Exposición Inmersiva de Egipto",
    "date": "A las 17:30h",
    "location": "Madrid",
    "image": "https://placehold.co/800x400/f39c12/ffffff?text=Exposici%C3%B3n+Inmersiva+Egipto",
    "type": "Exposición/Cultura",
    "category": "Cultura"
  }
]));

// Añadir Concierto Lola Indigo
if (typeof CONCERTS_DATA !== 'undefined') {
  CONCERTS_DATA.push(...([
  {
    "id": 8001,
    "title": "Lola Índigo en Concierto",
    "date": "5 de septiembre, 19:30h",
    "location": "Huerta del Obispo, Calle Cardenal Sandoval y Rojas, Alcalá de Henares",
    "image": "https://placehold.co/800x400/9b59b6/ffffff?text=Lola+%C3%8Dndigo",
    "type": "Concierto",
    "category": "urbano"
  }
]));
} else {
  const CONCERTS_DATA = [
  {
    "id": 8001,
    "title": "Lola Índigo en Concierto",
    "date": "5 de septiembre, 19:30h",
    "location": "Huerta del Obispo, Calle Cardenal Sandoval y Rojas, Alcalá de Henares",
    "image": "https://placehold.co/800x400/9b59b6/ffffff?text=Lola+%C3%8Dndigo",
    "type": "Concierto",
    "category": "urbano"
  }
];
}

// Añadir Concierto María Escarmiento
if (typeof CONCERTS_DATA !== 'undefined') {
  CONCERTS_DATA.push(...([
  {
    "id": 8002,
    "title": "María Escarmiento: Forever on Tour",
    "date": "Domingo 13 de diciembre, 20:00h",
    "location": "Sala Riviera, Madrid",
    "image": "https://placehold.co/800x400/e74c3c/ffffff?text=Mar%C3%ADa+Escarmiento",
    "type": "Concierto",
    "category": "pop"
  }
]));
} else {
  const CONCERTS_DATA = [
  {
    "id": 8002,
    "title": "María Escarmiento: Forever on Tour",
    "date": "Domingo 13 de diciembre, 20:00h",
    "location": "Sala Riviera, Madrid",
    "image": "https://placehold.co/800x400/e74c3c/ffffff?text=Mar%C3%ADa+Escarmiento",
    "type": "Concierto",
    "category": "pop"
  }
];
}

// Añadir Expo PontIA a Planes
if (typeof EXTERNAL_PLANS_DATA !== 'undefined') {
  EXTERNAL_PLANS_DATA.push(...([
  {
    "id": 7003,
    "title": "Exposición PontIA",
    "date": "Fecha por confirmar",
    "location": "Talent Garden Madrid, Calle de Juan de Mariana",
    "image": "https://placehold.co/800x400/2980b9/ffffff?text=Exposici%C3%B3n+PontIA",
    "type": "Exposición/Tecnología",
    "category": "Cultura"
  }
]));
} else {
  const EXTERNAL_PLANS_DATA = [
  {
    "id": 7003,
    "title": "Exposición PontIA",
    "date": "Fecha por confirmar",
    "location": "Talent Garden Madrid, Calle de Juan de Mariana",
    "image": "https://placehold.co/800x400/2980b9/ffffff?text=Exposici%C3%B3n+PontIA",
    "type": "Exposición/Tecnología",
    "category": "Cultura"
  }
];
}

// Añadir Tertulia a Eventos
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...([
  {
    "id": 7004,
    "title": "Tertulia: Inteligencia emocional y liderazgo humano",
    "date": "Jueves 23 de julio, 18:00h",
    "location": "Fundación Mujeres",
    "image": "https://placehold.co/800x400/8e44ad/ffffff?text=Tertulia+Inteligencia+Emocional",
    "type": "Charla/Debate",
    "category": "Emprendimiento"
  }
]));
} else {
  const EVENTS_DATA = [
  {
    "id": 7004,
    "title": "Tertulia: Inteligencia emocional y liderazgo humano",
    "date": "Jueves 23 de julio, 18:00h",
    "location": "Fundación Mujeres",
    "image": "https://placehold.co/800x400/8e44ad/ffffff?text=Tertulia+Inteligencia+Emocional",
    "type": "Charla/Debate",
    "category": "Emprendimiento"
  }
];
}

// Añadir Cumple de Ivan
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.push(...([
  {
    "movie_identifier": 6006,
    "display_name": "Cumpleaños de Iván",
    "release_year": 2026,
    "average_score": 10,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "¡Celebración del cumpleaños de Iván! 🎂🥳",
      "en": "Iván's birthday celebration! 🎂🥳"
    },
    "runtime_minutes": "Lunes 27",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social",
      "Cumpleaños"
    ]
  }
]));
} else {
  const QUEDADAS_DATA = [
  {
    "movie_identifier": 6006,
    "display_name": "Cumpleaños de Iván",
    "release_year": 2026,
    "average_score": 10,
    "category_type": "Quedada",
    "synopsis_text": {
      "es": "¡Celebración del cumpleaños de Iván! 🎂🥳",
      "en": "Iván's birthday celebration! 🎂🥳"
    },
    "runtime_minutes": "Lunes 27",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    "cover_image_url": "https://placehold.co/600x900/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Ocio",
      "Social",
      "Cumpleaños"
    ]
  }
];
}

// Añadir Ponencia Aula Inclusiva
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...([
  {
    "id": 7005,
    "title": "Ponencia: Cómo perder el miedo en el aula inclusiva y ganar seguridad",
    "date": "Martes 21 de julio, 18:00h",
    "location": "Online",
    "image": "https://placehold.co/800x400/1abc9c/ffffff?text=Aula+Inclusiva",
    "type": "Charla/Ponencia",
    "category": "Accesibilidad"
  }
]));
} else {
  const EVENTS_DATA = [
  {
    "id": 7005,
    "title": "Ponencia: Cómo perder el miedo en el aula inclusiva y ganar seguridad",
    "date": "Martes 21 de julio, 18:00h",
    "location": "Online",
    "image": "https://placehold.co/800x400/1abc9c/ffffff?text=Aula+Inclusiva",
    "type": "Charla/Ponencia",
    "category": "Accesibilidad"
  }
];
}

// Añadir array global VIAJES_DATA
const VIAJES_DATA = [
  {
    "movie_identifier": 9001,
    "display_name": "Pack Verano: Playa Grau de Castellón",
    "release_year": 2026,
    "average_score": 9,
    "category_type": "Viaje",
    "synopsis_text": {
      "es": "Viaje de verano a la playa de Grau de Castellón. Asistentes: Rober y Jess.",
      "en": "Summer trip to Grau de Castellón beach. Attendees: Rober and Jess."
    },
    "runtime_minutes": "Verano",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/f39c12/ffffff?text=Playa+Grau+de+Castell%C3%B3n",
    "cover_image_url": "https://placehold.co/600x900/f39c12/ffffff?text=Playa+Grau+de+Castell%C3%B3n",
    "filmmaker": {
      "director_name": "Amigos",
      "avatar": ""
    },
    "keyword_labels": [
      "Playa",
      "Escapada"
    ]
  },
  {
    "movie_identifier": 9002,
    "display_name": "Viaje Jorge: Pack Smartbox Felicidad para Dos",
    "release_year": 2026,
    "average_score": 10,
    "category_type": "Viaje",
    "synopsis_text": {
      "es": "Vale por estancias con desayuno, cenas románticas, tratamientos de bienestar o actividades de aventura.",
      "en": "Voucher for stays with breakfast, romantic dinners, wellness treatments, or adventure activities."
    },
    "runtime_minutes": "Por definir",
    "content_rating": "All",
    "bg_image_url": "https://placehold.co/1200x600/e74c3c/ffffff?text=Smartbox+Felicidad+para+Dos",
    "cover_image_url": "https://placehold.co/600x900/e74c3c/ffffff?text=Smartbox+Felicidad+para+Dos",
    "filmmaker": {
      "director_name": "Jorge",
      "avatar": ""
    },
    "keyword_labels": [
      "Relax",
      "Aventura",
      "Escapada"
    ]
  }
];

// Añadir Evento Step4ward
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...([
  {
    "id": 7006,
    "title": "Step4ward Madrid: Girls, Tech and Beers",
    "date": "Jueves 30 Julio, 18:30h",
    "location": "Montreal, Calle Lola de Membrives, Madrid",
    "image": "https://placehold.co/800x400/9b59b6/ffffff?text=Girls+Tech+Beers",
    "type": "Networking/Tech",
    "category": "TICs"
  }
]));
} else {
  const EVENTS_DATA = [
  {
    "id": 7006,
    "title": "Step4ward Madrid: Girls, Tech and Beers",
    "date": "Jueves 30 Julio, 18:30h",
    "location": "Montreal, Calle Lola de Membrives, Madrid",
    "image": "https://placehold.co/800x400/9b59b6/ffffff?text=Girls+Tech+Beers",
    "type": "Networking/Tech",
    "category": "TICs"
  }
];
}

// Añadir libros de diseño
if (typeof BOOKS_DATA !== 'undefined') {
  // Precompute placeholder images with name, date, author
  const booksWithImages = [
  {
    "movie_identifier": 2001,
    "display_name": "The Design of Everyday Things",
    "release_year": "Diseño",
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Principios fundamentales del diseño centrado en el usuario."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Don Norman"
    },
    "keyword_labels": [
      "Diseño",
      "UX"
    ]
  },
  {
    "movie_identifier": 2002,
    "display_name": "Design for the Real World",
    "release_year": "Diseño",
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño ecológico y socialmente responsable."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Victor Papanek"
    },
    "keyword_labels": [
      "Diseño",
      "Social"
    ]
  },
  {
    "movie_identifier": 2003,
    "display_name": "Universal Principles of Design",
    "release_year": "Diseño",
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "125 principios clave de diseño."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "William Lidwell"
    },
    "keyword_labels": [
      "Diseño",
      "Principios"
    ]
  },
  {
    "movie_identifier": 2004,
    "display_name": "The Non-Designer's Design Book",
    "release_year": "Diseño",
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Conceptos básicos de diseño para no diseñadores."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Robin Williams"
    },
    "keyword_labels": [
      "Diseño",
      "Visual"
    ]
  },
  {
    "movie_identifier": 2005,
    "display_name": "Grid Systems in Graphic Design",
    "release_year": "Diseño",
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Uso de cuadrículas en diseño gráfico."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Josef Müller-Brockmann"
    },
    "keyword_labels": [
      "Diseño",
      "Gráfico"
    ]
  },
  {
    "movie_identifier": 2006,
    "display_name": "Don't Make Me Think",
    "release_year": "Diseño",
    "average_score": 9.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Usabilidad web de sentido común."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Steve Krug"
    },
    "keyword_labels": [
      "UX",
      "Diseño",
      "Usabilidad"
    ]
  },
  {
    "movie_identifier": 2007,
    "display_name": "About Face: The Essentials of Interaction Design",
    "release_year": "Diseño",
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño de interacción detallado."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Alan Cooper"
    },
    "keyword_labels": [
      "UX",
      "Diseño",
      "Interacción"
    ]
  },
  {
    "movie_identifier": 2008,
    "display_name": "Lean UX",
    "release_year": "Diseño",
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño ágil y centrado en el usuario."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Jeff Gothelf"
    },
    "keyword_labels": [
      "UX",
      "Diseño",
      "Agile"
    ]
  },
  {
    "movie_identifier": 2009,
    "display_name": "100 Things Every Designer Needs to Know About People",
    "release_year": "Diseño",
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Psicología aplicada al diseño."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Susan Weinschenk"
    },
    "keyword_labels": [
      "UX",
      "Psicología",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2010,
    "display_name": "Rocket Surgery Made Easy",
    "release_year": "Diseño",
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Pruebas de usabilidad para todos."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Steve Krug"
    },
    "keyword_labels": [
      "UX",
      "Usabilidad"
    ]
  },
  {
    "movie_identifier": 2011,
    "display_name": "Refactoring UI",
    "release_year": "Diseño",
    "average_score": 9.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Consejos prácticos de interfaz de usuario."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Adam Wathan, Steve Schoger"
    },
    "keyword_labels": [
      "UI",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2012,
    "display_name": "Design Systems",
    "release_year": "Diseño",
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo crear sistemas de diseño escalables."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Alla Kholmatova"
    },
    "keyword_labels": [
      "UI",
      "Sistemas",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2013,
    "display_name": "Laws of UX",
    "release_year": "Diseño",
    "average_score": 9.3,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Leyes psicológicas aplicadas a UX/UI."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Jon Yablonski"
    },
    "keyword_labels": [
      "UX",
      "UI",
      "Psicología"
    ]
  },
  {
    "movie_identifier": 2014,
    "display_name": "Practical UI",
    "release_year": "Diseño",
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Guía lógica y práctica de UI."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Adham Dannaway"
    },
    "keyword_labels": [
      "UI",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2015,
    "display_name": "Steal Like an Artist",
    "release_year": "Diseño",
    "average_score": 9.2,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Desbloquea tu creatividad."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Austin Kleon"
    },
    "keyword_labels": [
      "Creatividad",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2016,
    "display_name": "Show Your Work!",
    "release_year": "Diseño",
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo dar a conocer tu trabajo."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Austin Kleon"
    },
    "keyword_labels": [
      "Creatividad",
      "Profesional"
    ]
  },
  {
    "movie_identifier": 2017,
    "display_name": "Creative Confidence",
    "release_year": "Diseño",
    "average_score": 8.7,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Libera el potencial creativo que llevas dentro."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Tom & David Kelley"
    },
    "keyword_labels": [
      "Creatividad",
      "Innovación"
    ]
  },
  {
    "movie_identifier": 2018,
    "display_name": "Logo Design Love",
    "release_year": "Diseño",
    "average_score": 9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Guía para crear identidades de marca icónicas."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "David Airey"
    },
    "keyword_labels": [
      "Branding",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2019,
    "display_name": "Thinking with Type",
    "release_year": "Diseño",
    "average_score": 9.4,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Guía fundamental de tipografía."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Ellen Lupton"
    },
    "keyword_labels": [
      "Tipografía",
      "Diseño Gráfico"
    ]
  },
  {
    "movie_identifier": 2020,
    "display_name": "Ruined by Design",
    "release_year": "Diseño",
    "average_score": 8.6,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Responsabilidad ética en el diseño tecnológico."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Mike Monteiro"
    },
    "keyword_labels": [
      "Ética",
      "Diseño",
      "Social"
    ]
  },
  {
    "movie_identifier": 2021,
    "display_name": "Mismatched",
    "release_year": "Diseño",
    "average_score": 8.9,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Cómo la inclusión fomenta la innovación."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Kat Holmes"
    },
    "keyword_labels": [
      "Inclusión",
      "Diseño"
    ]
  },
  {
    "movie_identifier": 2022,
    "display_name": "Inclusive Design for a Digital World",
    "release_year": "Diseño",
    "average_score": 8.8,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño con accesibilidad en mente."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Regine Gilbert"
    },
    "keyword_labels": [
      "Inclusión",
      "Accesibilidad"
    ]
  },
  {
    "movie_identifier": 2023,
    "display_name": "Design Justice",
    "release_year": "Diseño",
    "average_score": 9.1,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "Diseño liderado por comunidades marginadas."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Sasha Costanza-Chock"
    },
    "keyword_labels": [
      "Justicia",
      "Diseño",
      "Social"
    ]
  },
  {
    "movie_identifier": 2024,
    "display_name": "La era del capitalismo de la vigilancia",
    "release_year": "Diseño",
    "average_score": 9.5,
    "category_type": "Libro",
    "synopsis_text": {
      "es": "El impacto de la recolección de datos en la sociedad."
    },
    "runtime_minutes": "Libro",
    "content_rating": "All",
    "filmmaker": {
      "director_name": "Shoshana Zuboff"
    },
    "keyword_labels": [
      "Tecnología",
      "Sociedad"
    ]
  }
].map(book => {
    let coverText = book.display_name + '\n' + book.filmmaker.director_name;
    book.cover_image_url = 'https://placehold.co/600x900/34495e/ffffff?text=' + encodeURIComponent(coverText);
    book.bg_image_url = 'https://placehold.co/1200x600/34495e/ffffff?text=' + encodeURIComponent(coverText);
    return book;
  });
  BOOKS_DATA.push(...booksWithImages);
}

// Añadir evento IA
if (typeof EVENTS_DATA !== 'undefined') {
  const iaEvent = {
  "id": 7007,
  "title": "Curso: Monetiza tu talento creativo usando IA",
  "date": "21 al 23 de julio, 18:00h",
  "location": "Founderz / Microsoft (Online)",
  "type": "Curso/Webinar",
  "category": "TICs"
};
  iaEvent.image = 'https://placehold.co/800x400/2c3e50/ffffff?text=' + encodeURIComponent(iaEvent.title + '\n' + iaEvent.date + '\n' + iaEvent.location);
  EVENTS_DATA.push(iaEvent);
  
  // Update Tertulia details in place
  const tertuliaIndex = EVENTS_DATA.findIndex(e => e.id === 7004);
  if (tertuliaIndex !== -1) {
    EVENTS_DATA[tertuliaIndex].title = "Tertulias escuela de verano 2026";
    EVENTS_DATA[tertuliaIndex].date = "23/07/2026, 18:00 a 19:30h";
    EVENTS_DATA[tertuliaIndex].location = "Online - Fundación Mujeres (Dirigido a: Mujeres emprendedoras. Por: Mercedes Blasco)";
    EVENTS_DATA[tertuliaIndex].image = 'https://placehold.co/800x400/8e44ad/ffffff?text=' + encodeURIComponent("Tertulias escuela de verano 2026\n23/07/2026 18:00h\nFundación Mujeres - Mercedes Blasco");
  }
}

// Generar imágenes y añadir THEATER_DATA
if (typeof THEATER_DATA !== 'undefined') {
  const theaterWithImages = [
  {
    "movie_identifier": 3001,
    "display_name": "El tiempo entre costuras",
    "release_year": "Teatro",
    "average_score": 9,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Adaptación de la aclamada novela."
    },
    "filmmaker": {
      "director_name": "Drama"
    },
    "keyword_labels": [
      "Drama"
    ]
  },
  {
    "movie_identifier": 3002,
    "display_name": "Se ha escrito un crimen",
    "release_year": "Teatro",
    "average_score": 8.5,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Un misterio que resolver."
    },
    "filmmaker": {
      "director_name": "Drama"
    },
    "keyword_labels": [
      "Drama",
      "Alternativo"
    ]
  },
  {
    "movie_identifier": 3003,
    "display_name": "Timon de Atenas",
    "release_year": "Teatro",
    "average_score": 9.2,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Clásico de Shakespeare."
    },
    "filmmaker": {
      "director_name": "Clásico"
    },
    "keyword_labels": [
      "Drama",
      "Clásico"
    ]
  },
  {
    "movie_identifier": 3004,
    "display_name": "Montar Godot",
    "release_year": "Teatro",
    "average_score": 8.8,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Comedia alternativa y drama sobre el propio teatro."
    },
    "filmmaker": {
      "director_name": "Alternativo"
    },
    "keyword_labels": [
      "Drama",
      "Alternativo"
    ]
  },
  {
    "movie_identifier": 3005,
    "display_name": "No eres nadie hasta que te disparan",
    "release_year": "Teatro",
    "average_score": 8.9,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Drama contemporáneo."
    },
    "filmmaker": {
      "director_name": "Alternativo"
    },
    "keyword_labels": [
      "Drama",
      "Alternativo"
    ]
  },
  {
    "movie_identifier": 3006,
    "display_name": "Los del camping",
    "release_year": "Teatro",
    "average_score": 8.4,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Risas garantizadas."
    },
    "filmmaker": {
      "director_name": "Comedia"
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3007,
    "display_name": "Cabaret Desmadre",
    "release_year": "Teatro",
    "average_score": 9.1,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Comedia irreverente."
    },
    "filmmaker": {
      "director_name": "Comedia"
    },
    "keyword_labels": [
      "Comedia",
      "Alternativo"
    ]
  },
  {
    "movie_identifier": 3008,
    "display_name": "Gutenberg! El mejor musical del mundo",
    "release_year": "Teatro",
    "average_score": 9.5,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Comedia musical fantástica."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Comedia",
      "Musical"
    ]
  },
  {
    "movie_identifier": 3009,
    "display_name": "Pero no se lo digas",
    "release_year": "Teatro",
    "average_score": 8.7,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Enredos y mentiras."
    },
    "filmmaker": {
      "director_name": "Comedia"
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3010,
    "display_name": "La loca historia de la literatura",
    "release_year": "Teatro",
    "average_score": 9.3,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Un repaso divertido."
    },
    "filmmaker": {
      "director_name": "Comedia"
    },
    "keyword_labels": [
      "Comedia"
    ]
  },
  {
    "movie_identifier": 3011,
    "display_name": "El Rey León",
    "release_year": "Teatro",
    "average_score": 9.8,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "El gran clásico de la Gran Vía."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical",
      "Infantil"
    ]
  },
  {
    "movie_identifier": 3012,
    "display_name": "Los Miserables",
    "release_year": "Teatro",
    "average_score": 9.7,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Un hito de los musicales."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical",
      "Drama"
    ]
  },
  {
    "movie_identifier": 3013,
    "display_name": "Sonrisas y Lágrimas",
    "release_year": "Teatro",
    "average_score": 9.2,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "El musical para toda la familia."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical",
      "Infantil"
    ]
  },
  {
    "movie_identifier": 3014,
    "display_name": "Cleopatra enamorada",
    "release_year": "Teatro",
    "average_score": 8.6,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Historia y música."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical"
    ]
  },
  {
    "movie_identifier": 3015,
    "display_name": "Ras Leela: Una odisea Bollywood",
    "release_year": "Teatro",
    "average_score": 8.9,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Ritmo, color y danza."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical"
    ]
  },
  {
    "movie_identifier": 3016,
    "display_name": "Libre",
    "release_year": "Teatro",
    "average_score": 8.5,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Musical tributo."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical"
    ]
  },
  {
    "movie_identifier": 3017,
    "display_name": "Continúa la fiesta",
    "release_year": "Teatro",
    "average_score": 8.8,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Gran despliegue musical."
    },
    "filmmaker": {
      "director_name": "Musical"
    },
    "keyword_labels": [
      "Musical"
    ]
  },
  {
    "movie_identifier": 3018,
    "display_name": "Esperando a Godot",
    "release_year": "Teatro",
    "average_score": 9.4,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "El clásico de Beckett."
    },
    "filmmaker": {
      "director_name": "Clásico"
    },
    "keyword_labels": [
      "Clásico",
      "Drama"
    ]
  },
  {
    "movie_identifier": 3019,
    "display_name": "El escondido y la tapada",
    "release_year": "Teatro",
    "average_score": 8.5,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Clásico de Calderón de la Barca."
    },
    "filmmaker": {
      "director_name": "Clásico"
    },
    "keyword_labels": [
      "Clásico"
    ]
  },
  {
    "movie_identifier": 3020,
    "display_name": "Obras de Calderón y Shakespeare",
    "release_year": "Teatro",
    "average_score": 9.6,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Recopilación de los grandes maestros."
    },
    "filmmaker": {
      "director_name": "Clásico"
    },
    "keyword_labels": [
      "Clásico"
    ]
  },
  {
    "movie_identifier": 3021,
    "display_name": "La magia de la zarzuela",
    "release_year": "Teatro",
    "average_score": 9.1,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Antología de nuestra lírica."
    },
    "filmmaker": {
      "director_name": "Zarzuela"
    },
    "keyword_labels": [
      "Zarzuela"
    ]
  },
  {
    "movie_identifier": 3022,
    "display_name": "Ópera & Zarzuela Dreams",
    "release_year": "Teatro",
    "average_score": 9,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Recital inolvidable."
    },
    "filmmaker": {
      "director_name": "Zarzuela"
    },
    "keyword_labels": [
      "Zarzuela",
      "Musical"
    ]
  },
  {
    "movie_identifier": 3023,
    "display_name": "La caja musical",
    "release_year": "Teatro",
    "average_score": 8.4,
    "category_type": "Teatro",
    "synopsis_text": {
      "es": "Para los más pequeños."
    },
    "filmmaker": {
      "director_name": "Infantil"
    },
    "keyword_labels": [
      "Infantil",
      "Familiar"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.release_year + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/8e44ad/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/8e44ad/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  THEATER_DATA.push(...theaterWithImages);
}

// Generar imágenes y añadir MONOLOGUES_DATA
if (typeof MONOLOGUES_DATA !== 'undefined') {
  const monologuesWithImages = [
  {
    "movie_identifier": 3501,
    "display_name": "La noche de los monólogos",
    "release_year": "Humor",
    "average_score": 9.2,
    "category_type": "Monólogos",
    "synopsis_text": {
      "es": "Risas garantizadas."
    },
    "filmmaker": {
      "director_name": "Monólogo"
    },
    "keyword_labels": [
      "Humor",
      "Monólogo"
    ]
  },
  {
    "movie_identifier": 3502,
    "display_name": "MILF: Mujer Inteligente, Libre y Feliz",
    "release_year": "Humor",
    "average_score": 8.9,
    "category_type": "Monólogos",
    "synopsis_text": {
      "es": "Monólogo femenino."
    },
    "filmmaker": {
      "director_name": "Monólogo"
    },
    "keyword_labels": [
      "Humor",
      "Monólogo"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.release_year + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/d35400/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/d35400/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  MONOLOGUES_DATA.push(...monologuesWithImages);
} else {
  var MONOLOGUES_DATA = [
  {
    "movie_identifier": 3501,
    "display_name": "La noche de los monólogos",
    "release_year": "Humor",
    "average_score": 9.2,
    "category_type": "Monólogos",
    "synopsis_text": {
      "es": "Risas garantizadas."
    },
    "filmmaker": {
      "director_name": "Monólogo"
    },
    "keyword_labels": [
      "Humor",
      "Monólogo"
    ]
  },
  {
    "movie_identifier": 3502,
    "display_name": "MILF: Mujer Inteligente, Libre y Feliz",
    "release_year": "Humor",
    "average_score": 8.9,
    "category_type": "Monólogos",
    "synopsis_text": {
      "es": "Monólogo femenino."
    },
    "filmmaker": {
      "director_name": "Monólogo"
    },
    "keyword_labels": [
      "Humor",
      "Monólogo"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.release_year + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/d35400/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/d35400/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
}

// Actualizar detalles de Teatro
if (typeof THEATER_DATA !== 'undefined') {
  THEATER_DATA.forEach(t => {
    t.event_details = {
      fecha: "Próximamente",
      hora: "20:00h",
      lugar: "Teatro Madrid",
      precio: "Desde 15€",
      web_compra: "https://entradas.com",
      plataforma: "Entradas.com"
    };
  });
}

// Actualizar detalles de Monólogos
if (typeof MONOLOGUES_DATA !== 'undefined') {
  MONOLOGUES_DATA.forEach(m => {
    m.event_details = {
      fecha: "Fines de semana",
      hora: "22:00h",
      lugar: "Sala de Comedia, Madrid",
      precio: "Desde 10€",
      web_compra: "https://atrapalo.com",
      plataforma: "Atrápalo"
    };
  });
}

// Actualizar y añadir Series
if (typeof SERIES_DATA !== 'undefined') {
  const updateSeries = (name, tags) => {
    let s = SERIES_DATA.find(x => x.display_name.toLowerCase().includes(name.toLowerCase()));
    if (s) {
      s.keyword_labels = [...new Set([...(s.keyword_labels || []), ...tags])];
    }
  };

  updateSeries("Game of Thrones", ["Fantasía", "Drama"]);
  updateSeries("Juego de Tronos", ["Fantasía", "Drama"]);
  updateSeries("Stranger Things", ["Fantasía", "Ciencia Ficción", "Thriller"]);
  updateSeries("Simpson", ["Animación", "Comedia"]);
  updateSeries("Futurama", ["Animación", "Ciencia Ficción"]);
  updateSeries("Friends", ["Comedia"]);
  updateSeries("Serrano", ["Comedia", "Drama"]);
  updateSeries("Padre de Familia", ["Animación", "Comedia"]);
  updateSeries("Waverly", ["Fantasía", "Comedia", "Infantil"]);

  if (!SERIES_DATA.some(x => x.display_name.toLowerCase().includes("game of thrones") || x.display_name.toLowerCase().includes("juego de tronos"))) {
    let coverText = "Game of Thrones\n2011\nDavid Benioff";
    SERIES_DATA.push({
      movie_identifier: 4001,
      display_name: "Game of Thrones",
      release_year: 2011,
      average_score: 9.3,
      category_type: "Serie",
      synopsis_text: { es: "Nueve familias nobles luchan por el control de las míticas tierras de Poniente." },
      filmmaker: { director_name: "David Benioff" },
      keyword_labels: ["Fantasía", "Drama"],
      cover_image_url: 'https://placehold.co/600x900/2c3e50/ffffff?text=' + encodeURIComponent(coverText),
      bg_image_url: 'https://placehold.co/1200x600/2c3e50/ffffff?text=' + encodeURIComponent(coverText)
    });
  }

  if (!SERIES_DATA.some(x => x.display_name.toLowerCase().includes("stranger things"))) {
    let coverText = "Stranger Things\n2016\nThe Duffer Brothers";
    SERIES_DATA.push({
      movie_identifier: 4002,
      display_name: "Stranger Things",
      release_year: 2016,
      average_score: 8.7,
      category_type: "Serie",
      synopsis_text: { es: "Acontecimientos extraños y fuerzas sobrenaturales acechan un pequeño pueblo." },
      filmmaker: { director_name: "The Duffer Brothers" },
      keyword_labels: ["Fantasía", "Ciencia Ficción", "Thriller"],
      cover_image_url: 'https://placehold.co/600x900/8e44ad/ffffff?text=' + encodeURIComponent(coverText),
      bg_image_url: 'https://placehold.co/1200x600/8e44ad/ffffff?text=' + encodeURIComponent(coverText)
    });
  }
}

// Actualizar y añadir Programas de TV
if (typeof PROGRAMS_DATA !== 'undefined') {
  const updateProgram = (name, tags) => {
    let p = PROGRAMS_DATA.find(x => x.display_name.toLowerCase().includes(name.toLowerCase()));
    if (p) {
      p.keyword_labels = [...new Set([...(p.keyword_labels || []), ...tags])];
    }
  };

  updateProgram("Hormiguero", ["Entretenimiento"]);
  updateProgram("Resistencia", ["Entretenimiento", "Humor"]);
  updateProgram("Club de la comedia", ["Entretenimiento", "Humor"]);
  updateProgram("Sé lo que hicisteis", ["Entretenimiento", "Humor"]);
  
  updateProgram("Got Talent", ["Talent Show"]);
  
  updateProgram("Atrapa un millón", ["Concurso"]);
  updateProgram("Pasapalabra", ["Concurso"]);
  updateProgram("Ruleta de la suerte", ["Concurso"]);
  
  updateProgram("Operación Triunfo", ["Musical", "Talent Show"]);

  // Add missing programs
  const missingPrograms = [
    { name: "Masterchef", tags: ["Concurso", "Talent Show", "Cocina"] },
    { name: "Topchef", tags: ["Concurso", "Talent Show", "Cocina"] },
    { name: "La Voz", tags: ["Musical", "Talent Show"] },
    { name: "Factor X", tags: ["Musical", "Talent Show"] },
    { name: "Mira Quien Baila", tags: ["Musical", "Talent Show", "Entretenimiento"] }
  ];

  let nextId = 5020;
  missingPrograms.forEach(prog => {
    if (!PROGRAMS_DATA.some(x => x.display_name.toLowerCase().includes(prog.name.toLowerCase()))) {
      let coverText = prog.name + '\nTV\nEspaña';
      PROGRAMS_DATA.push({
        movie_identifier: nextId++,
        display_name: prog.name,
        release_year: "TV",
        average_score: 8.5,
        category_type: "Programa",
        synopsis_text: { es: "Programa de televisión: " + prog.name },
        filmmaker: { director_name: "España" },
        keyword_labels: prog.tags,
        cover_image_url: 'https://placehold.co/600x900/16a085/ffffff?text=' + encodeURIComponent(coverText),
        bg_image_url: 'https://placehold.co/1200x600/16a085/ffffff?text=' + encodeURIComponent(coverText)
      });
    }
  });
}

// Actualizar tipos de Quedadas
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.forEach(q => {
    let name = (q.display_name || '').toLowerCase();
    let text = (q.synopsis_text?.es || '').toLowerCase();
    let combined = name + ' ' + text;
    
    let newTags = [];
    if (combined.includes('cena')) newTags.push('Cena');
    if (combined.includes('cine') || combined.includes('película')) newTags.push('Cine');
    if (combined.includes('casa') || combined.includes('mercadona') || combined.includes('juegos')) newTags.push('Casa');
    if (combined.includes('música') || combined.includes('cumpleaños')) newTags.push('Música');

    if (newTags.length === 0) {
      // Default fallback
      if (Math.random() > 0.5) newTags.push('Cena');
      else newTags.push('Casa');
    }

    q.keyword_labels = newTags;
  });
}

// Actualizar tipos de Viajes
if (typeof VIAJES_DATA !== 'undefined') {
  VIAJES_DATA.forEach(v => {
    let name = (v.display_name || '').toLowerCase();
    let text = (v.synopsis_text?.es || '').toLowerCase();
    let combined = name + ' ' + text;
    
    let newTags = [];
    if (combined.includes('playa') || combined.includes('costa') || combined.includes('mar')) newTags.push('Playa');
    if (combined.includes('aventura') || combined.includes('actividades')) newTags.push('Aventura');
    if (combined.includes('relax') || combined.includes('bienestar') || combined.includes('romántica')) newTags.push('Relax');
    if (combined.includes('escapada') || combined.includes('estancias') || combined.includes('smartbox')) newTags.push('Escapada');

    if (newTags.length === 0) {
      newTags.push('Escapada');
    }

    v.keyword_labels = [...new Set([...(v.keyword_labels || []), ...newTags])];
  });
}

// También asegurar que QUEDADAS_DATA esté bien
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.forEach(q => {
    if (!q.keyword_labels || q.keyword_labels.length === 0) {
       q.keyword_labels = ['Casa'];
    }
  });
}

// Añadir MUSIC_DATA
if (typeof MUSIC_DATA === 'undefined') {
  var MUSIC_DATA = [
  {
    "movie_identifier": 6001,
    "display_name": "El bachatón",
    "release_year": "Música",
    "average_score": 9,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Lola Indigo"
    },
    "keyword_labels": [
      "Lola Indigo",
      "Pop",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6002,
    "display_name": "Mujer bruja",
    "release_year": "Música",
    "average_score": 8.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Lola Indigo"
    },
    "keyword_labels": [
      "Lola Indigo",
      "Pop",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6003,
    "display_name": "Lola bunny",
    "release_year": "Música",
    "average_score": 8.8,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Lola Indigo"
    },
    "keyword_labels": [
      "Lola Indigo",
      "Pop",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6004,
    "display_name": "Ocean",
    "release_year": "Música",
    "average_score": 9.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Karol G"
    },
    "keyword_labels": [
      "Karol G",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6005,
    "display_name": "El barco",
    "release_year": "Música",
    "average_score": 9.1,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Karol G"
    },
    "keyword_labels": [
      "Karol G",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6006,
    "display_name": "200 Copas",
    "release_year": "Música",
    "average_score": 9.3,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Karol G"
    },
    "keyword_labels": [
      "Karol G",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6007,
    "display_name": "Gato malo",
    "release_year": "Música",
    "average_score": 8.7,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Karol G"
    },
    "keyword_labels": [
      "Karol G",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6008,
    "display_name": "Toto de loca",
    "release_year": "Música",
    "average_score": 8,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Metrika"
    },
    "keyword_labels": [
      "Metrika",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6009,
    "display_name": "Diva del infierno",
    "release_year": "Música",
    "average_score": 8.2,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Metrika"
    },
    "keyword_labels": [
      "Metrika",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6010,
    "display_name": "Voy a morir",
    "release_year": "Música",
    "average_score": 8.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Luna Ki"
    },
    "keyword_labels": [
      "Luna Ki",
      "Urbano",
      "Pop"
    ]
  },
  {
    "movie_identifier": 6011,
    "display_name": "Febrero",
    "release_year": "Música",
    "average_score": 8.3,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Luna Ki"
    },
    "keyword_labels": [
      "Luna Ki",
      "Urbano",
      "Pop"
    ]
  },
  {
    "movie_identifier": 6012,
    "display_name": "Bomba de amor",
    "release_year": "Música",
    "average_score": 8.6,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Luna Ki"
    },
    "keyword_labels": [
      "Luna Ki",
      "Urbano",
      "Pop"
    ]
  },
  {
    "movie_identifier": 6013,
    "display_name": "Oh Daddy",
    "release_year": "Música",
    "average_score": 9.2,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Natti Natasha"
    },
    "keyword_labels": [
      "Natti Natasha",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6014,
    "display_name": "Fiebre",
    "release_year": "Música",
    "average_score": 8.9,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Bad Gyal"
    },
    "keyword_labels": [
      "Bad Gyal",
      "Dancehall"
    ]
  },
  {
    "movie_identifier": 6015,
    "display_name": "Sin Pijama",
    "release_year": "Música",
    "average_score": 9.4,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Becky G"
    },
    "keyword_labels": [
      "Becky G",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6016,
    "display_name": "Forever",
    "release_year": "Música",
    "average_score": 8.4,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Maria Escarmiento"
    },
    "keyword_labels": [
      "Maria Escarmiento",
      "Urbano"
    ]
  },
  {
    "movie_identifier": 6017,
    "display_name": "Nueva YooL",
    "release_year": "Música",
    "average_score": 9.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Bad Bunny"
    },
    "keyword_labels": [
      "Bad Bunny",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6018,
    "display_name": "Debí Tirar Más Fotos",
    "release_year": "Música",
    "average_score": 9.6,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Bad Bunny"
    },
    "keyword_labels": [
      "Bad Bunny",
      "Reggaeton"
    ]
  },
  {
    "movie_identifier": 6019,
    "display_name": "MoscuMule",
    "release_year": "Música",
    "average_score": 9.8,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Bad Bunny"
    },
    "keyword_labels": [
      "Bad Bunny",
      "Reggaeton"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video
    return item;
  });
}

if (typeof MUSIC_DATA !== 'undefined') {
  const newItems = [
  {
    "movie_identifier": 6020,
    "display_name": "Papi Chulo",
    "release_year": "Música",
    "average_score": 9.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Lorna"
    },
    "keyword_labels": [
      "Lorna",
      "Reggaeton Antiguo"
    ]
  },
  {
    "movie_identifier": 6021,
    "display_name": "Canción de Kristina",
    "release_year": "Música",
    "average_score": 8.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Kristina"
    },
    "keyword_labels": [
      "Kristina",
      "Pop"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; 
    return item;
  });
  MUSIC_DATA.push(...newItems);
}

if (typeof MUSIC_DATA !== 'undefined') {
  const newItems = [
  {
    "movie_identifier": 6022,
    "display_name": "Gasolina",
    "release_year": "Música",
    "average_score": 9.8,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Daddy Yankee"
    },
    "keyword_labels": [
      "Daddy Yankee",
      "Reggaeton Antiguo"
    ]
  },
  {
    "movie_identifier": 6023,
    "display_name": "Lo Que Pasó, Pasó",
    "release_year": "Música",
    "average_score": 9.5,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Daddy Yankee"
    },
    "keyword_labels": [
      "Daddy Yankee",
      "Reggaeton Antiguo"
    ]
  },
  {
    "movie_identifier": 6024,
    "display_name": "Danza Kuduro",
    "release_year": "Música",
    "average_score": 9.6,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Don Omar"
    },
    "keyword_labels": [
      "Don Omar",
      "Reggaeton Antiguo"
    ]
  },
  {
    "movie_identifier": 6025,
    "display_name": "Salió El Sol",
    "release_year": "Música",
    "average_score": 9.3,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Don Omar"
    },
    "keyword_labels": [
      "Don Omar",
      "Reggaeton Antiguo"
    ]
  },
  {
    "movie_identifier": 6026,
    "display_name": "Dardos",
    "release_year": "Música",
    "average_score": 9,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Romeo Santos"
    },
    "keyword_labels": [
      "Romeo Santos",
      "Reggaeton Antiguo",
      "Bachata"
    ]
  },
  {
    "movie_identifier": 6027,
    "display_name": "Bebo",
    "release_year": "Música",
    "average_score": 9.1,
    "category_type": "Música",
    "synopsis_text": {
      "es": "Videoclip oficial"
    },
    "filmmaker": {
      "director_name": "Romeo Santos"
    },
    "keyword_labels": [
      "Romeo Santos",
      "Reggaeton Antiguo",
      "Bachata"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; 
    return item;
  });
  MUSIC_DATA.push(...newItems);
}

if (typeof SERIES_DATA !== 'undefined') {
  const newItems = [
  {
    "movie_identifier": 7001,
    "display_name": "Los Misterios de Laura",
    "release_year": 2009,
    "average_score": 8.5,
    "category_type": "Serie",
    "synopsis_text": {
      "es": "Laura Lebrel es una brillante inspectora de policía que compagina su carrera profesional con su vida personal."
    },
    "filmmaker": {
      "director_name": "Javier Holgado"
    },
    "keyword_labels": [
      "Misterio",
      "Comedia",
      "Crimen"
    ]
  }
].map(item => {
    let coverText = item.display_name + '\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/2980b9/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/2980b9/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  SERIES_DATA.push(...newItems);
}

// Actualizar URLs de videoclips
if (typeof MUSIC_DATA !== 'undefined') {
  const VIDEO_MAP = {
  "El bachatón": "0mFf0KIfR90",
  "Mujer bruja": "rLqHtc8Xks0",
  "Lola bunny": "QdM6aT0i3tE",
  "Ocean": "Q_XNqKz_Q5g",
  "El barco": "eB0XG6L4x1I",
  "200 Copas": "tN74gR_f34E",
  "Gato malo": "eHXZG1f3Bms",
  "Toto de loca": "K2iZ5O6P8Kk",
  "Diva del infierno": "2m1fT7G-0_A",
  "Voy a morir": "oJ8tG7O4W_k",
  "Febrero": "8_WnB_V2NfU",
  "Bomba de amor": "3aZ3w8p4T8s",
  "Oh Daddy": "8M_mIuD3W4M",
  "Fiebre": "rR8eC9x-i9U",
  "Sin Pijama": "zEf423kYfqk",
  "Forever": "o9H1T4H8nqk",
  "Nueva YooL": "ZqQe5W4W7_s",
  "Debí Tirar Más Fotos": "8_X3bX8L-U0",
  "MoscuMule": "p38WguhuYms",
  "Papi Chulo": "T61p7G2pPQs",
  "Canción de Kristina": "dQw4w9WgXcQ",
  "Gasolina": "qGKrc3A6HHM",
  "Lo Que Pasó, Pasó": "qO-gH0sXWl4",
  "Danza Kuduro": "7zp1TbLFPp8",
  "Salió El Sol": "0Z9f7D_x_Qc",
  "Dardos": "dQw4w9WgXcQ",
  "Bebo": "dQw4w9WgXcQ"
};
  MUSIC_DATA.forEach(song => {
    const vid = VIDEO_MAP[song.display_name];
    if (vid && vid !== "dQw4w9WgXcQ") {
      song.video_url = 'https://www.youtube.com/embed/' + vid + '?autoplay=1';
    } else {
      // Fallback a búsqueda de YouTube incrustada si no hay ID exacto
      const query = encodeURIComponent(song.display_name + " " + song.filmmaker.director_name);
      song.video_url = 'https://www.youtube.com/embed?listType=search&list=' + query;
    }
  });
}
