const fs = require('fs');

const NEW_BATCH = [
  {
    movie_identifier: 2021,
    display_name: "Factfulness",
    release_year: 2018,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Diez razones por las que estamos equivocados sobre el mundo y por qué las cosas están mejor de lo que piensas.",
      en: "Ten reasons we're wrong about the world."
    },
    runtime_minutes: "352 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=MnhxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=MnhxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Hans Rosling", avatar: "" },
    keyword_labels: ["Social", "Tecnológica"]
  },
  {
    movie_identifier: 2022,
    display_name: "La era del capitalismo de la vigilancia",
    release_year: 2019,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "La lucha por un futuro humano frente a las nuevas fronteras del poder.",
      en: "The fight for a human future at the new frontier of power."
    },
    runtime_minutes: "704 páginas",
    content_rating: "12+",
    bg_image_url: "https://books.google.com/books/content?id=n1iODwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=n1iODwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Shoshana Zuboff", avatar: "" },
    keyword_labels: ["Social", "Tecnológica"]
  },
  {
    movie_identifier: 2023,
    display_name: "Armas de destrucción matemática",
    release_year: 2016,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Cómo el Big Data aumenta la desigualdad y amenaza la democracia.",
      en: "How Big Data increases inequality and threatens democracy."
    },
    runtime_minutes: "272 páginas",
    content_rating: "12+",
    bg_image_url: "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Cathy O'Neil", avatar: "" },
    keyword_labels: ["Tecnológica", "Social"]
  },
  {
    movie_identifier: 2024,
    display_name: "La sociedad red",
    release_year: 1996,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Un análisis exhaustivo de la sociedad de la información y su impacto socioeconómico.",
      en: "An exhaustive analysis of the information society."
    },
    runtime_minutes: "650 páginas",
    content_rating: "12+",
    bg_image_url: "https://books.google.com/books/content?id=ZXXmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=ZXXmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Manuel Castells", avatar: "" },
    keyword_labels: ["Social", "Tecnológica"]
  },
  {
    movie_identifier: 2025,
    display_name: "Tecnopolítica",
    release_year: 2015,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Cómo las redes digitales han transformado la política y los movimientos sociales.",
      en: "How digital networks have transformed politics."
    },
    runtime_minutes: "200 páginas",
    content_rating: "12+",
    bg_image_url: "https://books.google.com/books/content?id=L8Y3DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=L8Y3DAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Javier Toret", avatar: "" },
    keyword_labels: ["Tecnológica", "Social"]
  },
  {
    movie_identifier: 2026,
    display_name: "Homo Deus",
    release_year: 2015,
    average_score: 9.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Una breve historia del mañana y hacia dónde se dirige la humanidad con la IA.",
      en: "A brief history of tomorrow."
    },
    runtime_minutes: "496 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=J2Q1DQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=J2Q1DQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Yuval Noah Harari", avatar: "" },
    keyword_labels: ["Tecnológica", "Social"]
  },
  {
    movie_identifier: 2027,
    display_name: "Vida 3.0",
    release_year: 2017,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Qué significa ser humano en la era de la inteligencia artificial.",
      en: "What it means to be human in the age of AI."
    },
    runtime_minutes: "432 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=HHEvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=HHEvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Max Tegmark", avatar: "" },
    keyword_labels: ["Tecnológica", "Ciencia Ficción"]
  },
  {
    movie_identifier: 2028,
    display_name: "Don't Make Me Think",
    release_year: 2000,
    average_score: 9.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Una aproximación de sentido común a la usabilidad web.",
      en: "A Common Sense Approach to Web Usability."
    },
    runtime_minutes: "216 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=QlduAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=QlduAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Steve Krug", avatar: "" },
    keyword_labels: ["Diseño", "Tecnológica"]
  },
  {
    movie_identifier: 2029,
    display_name: "The Design of Everyday Things",
    release_year: 1988,
    average_score: 9.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Los principios fundamentales del diseño centrado en el usuario.",
      en: "The fundamental principles of user-centered design."
    },
    runtime_minutes: "368 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=nVQPAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Don Norman", avatar: "" },
    keyword_labels: ["Diseño"]
  },
  {
    movie_identifier: 2030,
    display_name: "About Face",
    release_year: 1995,
    average_score: 9.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Los fundamentos del diseño de interacción y productos digitales.",
      en: "The essentials of interaction design."
    },
    runtime_minutes: "720 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=q_c_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=q_c_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Alan Cooper", avatar: "" },
    keyword_labels: ["Diseño", "Tecnológica"]
  },
  {
    movie_identifier: 2031,
    display_name: "Hooked",
    release_year: 2014,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Cómo construir productos y aplicaciones que formen hábitos.",
      en: "How to Build Habit-Forming Products."
    },
    runtime_minutes: "256 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Nir Eyal", avatar: "" },
    keyword_labels: ["Diseño", "Tecnológica"]
  },
  {
    movie_identifier: 2032,
    display_name: "Lean UX",
    release_year: 2013,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Diseño de productos digitales con equipos ágiles.",
      en: "Designing Great Products with Agile Teams."
    },
    runtime_minutes: "192 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=03-kDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=03-kDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Jeff Gothelf", avatar: "" },
    keyword_labels: ["Diseño", "Tecnológica"]
  }
];

let content = `
// Añadir última remesa de libros de Diseño y Tecnología
BOOKS_DATA.push(...(${JSON.stringify(NEW_BATCH, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added 12 new books correctly.");
