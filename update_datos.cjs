const fs = require('fs');

const CONCERTS_DATA = [
  {
    movie_identifier: 1001,
    display_name: "Lola Índigo en Vivo",
    release_year: 2026,
    average_score: 9.5,
    category_type: "Concierto",
    synopsis_text: {
      es: "La gira más espectacular de Lola Índigo, llena de baile, energía y sus mejores éxitos.",
      en: "The most spectacular tour by Lola Índigo, full of dance, energy and her greatest hits."
    },
    runtime_minutes: "2h 30m",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1540039155732-6761b54cbaca?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1540039155732-6761b54cbaca?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Lola Índigo",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["urbano", "reggaeton"],
    event_details: {
      fecha: "15 Oct 2026",
      hora: "21:00",
      lugar: "WiZink Center, Madrid",
      precio: "45€ - 80€",
      web_compra: "https://entradas.wom.com/lolaindigo"
    }
  },
  {
    movie_identifier: 1002,
    display_name: "Metrika Live",
    release_year: 2026,
    average_score: 8.8,
    category_type: "Concierto",
    synopsis_text: {
      es: "Disfruta de la nueva ola del trap con Metrika en un concierto íntimo.",
      en: "Enjoy the new wave of trap with Metrika in an intimate concert."
    },
    runtime_minutes: "1h 45m",
    content_rating: "16+",
    bg_image_url: "https://images.unsplash.com/photo-1470229722913-7c092bba85f1?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1470229722913-7c092bba85f1?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Metrika",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["trap", "urbano"],
    event_details: {
      fecha: "22 Nov 2026",
      hora: "22:30",
      lugar: "Sala La Riviera, Madrid",
      precio: "25€",
      web_compra: "https://entradas.wom.com/metrika"
    }
  },
  {
    movie_identifier: 1003,
    display_name: "Ana Mena: Bellodrama Tour",
    release_year: 2026,
    average_score: 9.2,
    category_type: "Concierto",
    synopsis_text: {
      es: "La princesa del pop español presenta su aclamado Bellodrama.",
      en: "The princess of Spanish pop presents her acclaimed Bellodrama."
    },
    runtime_minutes: "2h 00m",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Ana Mena",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["pop", "urbano"],
    event_details: {
      fecha: "05 Dic 2026",
      hora: "20:30",
      lugar: "WiZink Center, Madrid",
      precio: "35€ - 65€",
      web_compra: "https://entradas.wom.com/anamena"
    }
  },
  {
    movie_identifier: 1004,
    display_name: "Becky G & Karol G: Bichota Tour",
    release_year: 2026,
    average_score: 9.8,
    category_type: "Concierto",
    synopsis_text: {
      es: "Una noche histórica donde las reinas de la música urbana se unen en el escenario.",
      en: "A historic night where the queens of urban music unite on stage."
    },
    runtime_minutes: "3h 00m",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Becky G, Karol G",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["reggaeton", "urbano"],
    event_details: {
      fecha: "18 Sep 2026",
      hora: "21:00",
      lugar: "Estadio Santiago Bernabéu, Madrid",
      precio: "60€ - 150€",
      web_compra: "https://entradas.wom.com/bichota"
    }
  },
  {
    movie_identifier: 1005,
    display_name: "Bad Bunny: Un Verano Sin Ti",
    release_year: 2026,
    average_score: 9.9,
    category_type: "Concierto",
    synopsis_text: {
      es: "El conejo malo regresa a Madrid para una noche de perreo intenso.",
      en: "The bad rabbit returns to Madrid for a night of intense perreo."
    },
    runtime_minutes: "2h 45m",
    content_rating: "16+",
    bg_image_url: "https://images.unsplash.com/photo-1533174000255-1bd2427a3c33?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1533174000255-1bd2427a3c33?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Bad Bunny",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["reggaeton antiguo", "trap", "urbano"],
    event_details: {
      fecha: "10 Jul 2026",
      hora: "22:00",
      lugar: "Estadio Cívitas Metropolitano, Madrid",
      precio: "75€ - 200€",
      web_compra: "https://entradas.wom.com/badbunny"
    }
  },
  {
    movie_identifier: 1006,
    display_name: "L0rna y Luna Ki: Cyberpunk Night",
    release_year: 2026,
    average_score: 8.5,
    category_type: "Concierto",
    synopsis_text: {
      es: "Una experiencia audiovisual única con el mejor hyperpop y sonidos experimentales.",
      en: "A unique audiovisual experience with the best hyperpop and experimental sounds."
    },
    runtime_minutes: "2h 15m",
    content_rating: "18+",
    bg_image_url: "https://images.unsplash.com/photo-1557787163-1635e2efb160?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1557787163-1635e2efb160?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "L0rna, Luna Ki",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["otros", "trap"],
    event_details: {
      fecha: "30 Oct 2026",
      hora: "23:59",
      lugar: "Sala Ochoymedio, Madrid",
      precio: "20€",
      web_compra: "https://entradas.wom.com/lornalunaki"
    }
  },
  {
    movie_identifier: 1007,
    display_name: "Quevedo: Donde Quiero Estar",
    release_year: 2026,
    average_score: 9.4,
    category_type: "Concierto",
    synopsis_text: {
      es: "El fenómeno canario trae todos sus hits a la capital.",
      en: "The Canarian phenomenon brings all his hits to the capital."
    },
    runtime_minutes: "2h 00m",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=600&q=80",
    filmmaker: {
      director_name: "Quevedo",
      avatar: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=150&h=150&q=80"
    },
    actors_list: [],
    keyword_labels: ["urbano", "reggaeton"],
    event_details: {
      fecha: "12 Mar 2026",
      hora: "21:00",
      lugar: "WiZink Center, Madrid",
      precio: "40€ - 70€",
      web_compra: "https://entradas.wom.com/quevedo"
    }
  }
];

const BOOKS_DATA = [
  {
    movie_identifier: 2001,
    display_name: "El Código Estelar",
    release_year: 2023,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Una novela de ciencia ficción sobre descifrar mensajes de civilizaciones antiguas.",
      en: "A sci-fi novel about deciphering messages from ancient civilizations."
    },
    runtime_minutes: "350 páginas",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Autor Desconocido", avatar: "" },
    actors_list: [],
    keyword_labels: ["Sci-Fi", "Mystery"]
  }
];

const THEATER_DATA = [
  {
    movie_identifier: 3001,
    display_name: "Atrapados en el Tiempo",
    release_year: 2025,
    average_score: 8.4,
    category_type: "Teatro",
    synopsis_text: {
      es: "Una obra de teatro inmersiva basada en paradojas temporales.",
      en: "An immersive theater play based on time paradoxes."
    },
    runtime_minutes: "1h 45m",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1507676184212-d0c30a5996f2?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1507676184212-d0c30a5996f2?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Director Teatral", avatar: "" },
    actors_list: [],
    keyword_labels: ["Drama", "Sci-Fi"]
  }
];

const EVENTS_DATA = [
  {
    movie_identifier: 4001,
    display_name: "Hackathon de Accesibilidad",
    release_year: 2026,
    average_score: 9.0,
    category_type: "Evento",
    synopsis_text: {
      es: "Únete a este evento para diseñar soluciones web accesibles y competir por premios.",
      en: "Join this event to design accessible web solutions and compete for prizes."
    },
    runtime_minutes: "24h",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Comunidad Tech", avatar: "" },
    actors_list: [],
    keyword_labels: ["TICs", "Accesibilidad", "Diseño Web"],
    event_details: {
      fecha: "10 Ago 2026",
      hora: "10:00",
      lugar: "Campus Google, Madrid",
      precio: "Gratis",
      web_compra: "https://eventos.wom.com/hackathon"
    }
  },
  {
    movie_identifier: 4002,
    display_name: "Tardeo y Cine Clásico",
    release_year: 2026,
    average_score: 8.7,
    category_type: "Evento",
    synopsis_text: {
      es: "Disfruta de un tardeo con música en vivo seguido de una proyección de cine clásico al aire libre.",
      en: "Enjoy an afternoon with live music followed by an open-air classic cinema screening."
    },
    runtime_minutes: "4h",
    content_rating: "18+",
    bg_image_url: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Quedadas Madrid", avatar: "" },
    actors_list: [],
    keyword_labels: ["Quedadas", "tardeo", "cine"],
    event_details: {
      fecha: "20 Ago 2026",
      hora: "18:00",
      lugar: "Terraza Matadero, Madrid",
      precio: "15€",
      web_compra: "https://eventos.wom.com/tardeocine"
    }
  },
  {
    movie_identifier: 4003,
    display_name: "Congreso de Ciberseguridad",
    release_year: 2026,
    average_score: 9.3,
    category_type: "Evento",
    synopsis_text: {
      es: "Los mayores expertos en seguridad informática se reúnen para debatir sobre el futuro de las TICs.",
      en: "Top cybersecurity experts gather to discuss the future of ICTs."
    },
    runtime_minutes: "8h",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Security Group", avatar: "" },
    actors_list: [],
    keyword_labels: ["Seguridad", "TICs"],
    event_details: {
      fecha: "05 Sep 2026",
      hora: "09:00",
      lugar: "IFEMA, Madrid",
      precio: "120€",
      web_compra: "https://eventos.wom.com/ciberseguridad"
    }
  }
];

const appendContent = `

// Nuevas categorías de WOM!
const CONCERTS_DATA = ${JSON.stringify(CONCERTS_DATA, null, 2)};
const BOOKS_DATA = ${JSON.stringify(BOOKS_DATA, null, 2)};
const THEATER_DATA = ${JSON.stringify(THEATER_DATA, null, 2)};
const EVENTS_DATA = ${JSON.stringify(EVENTS_DATA, null, 2)};

`;

fs.appendFileSync('js/datos.js', appendContent);
console.log("Updated js/datos.js with new data arrays.");
