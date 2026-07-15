const fs = require('fs');

const MORE_SOCIAL_BOOKS = [
  {
    movie_identifier: 2009,
    display_name: "Justicia ¿hacemos lo que debemos?",
    release_year: 2011,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Michael Sandel explora cuestiones fundamentales sobre filosofía política y moral en el mundo actual.",
      en: "Michael Sandel explores fundamental questions about political philosophy and morals."
    },
    runtime_minutes: "368 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2009/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2009/600/900",
    filmmaker: { director_name: "Michael Sandel", avatar: "" },
    keyword_labels: ["Social", "Ensayo"]
  },
  {
    movie_identifier: 2010,
    display_name: "Summerhill",
    release_year: 1960,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "La historia y filosofía de una de las escuelas más revolucionarias y libres del mundo.",
      en: "The history and philosophy of one of the most revolutionary free schools."
    },
    runtime_minutes: "350 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2010/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2010/600/900",
    filmmaker: { director_name: "A.S. Neill", avatar: "" },
    keyword_labels: ["Social", "Educación"]
  },
  {
    movie_identifier: 2011,
    display_name: "Compartiendo palabras",
    release_year: 1997,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Una exploración sobre el aprendizaje dialógico y la transformación educativa.",
      en: "An exploration of dialogic learning and educational transformation."
    },
    runtime_minutes: "200 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2011/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2011/600/900",
    filmmaker: { director_name: "Paidós (Ed)", avatar: "" },
    keyword_labels: ["Social", "Educación"]
  },
  {
    movie_identifier: 2012,
    display_name: "Más fuerte que el odio",
    release_year: 1999,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "El testimonio sobrecogedor de un joven que logró perdonar y transformar su dolor en amor.",
      en: "The moving testimony of a young man who managed to forgive and transform his pain into love."
    },
    runtime_minutes: "240 páginas",
    content_rating: "12+",
    bg_image_url: "https://picsum.photos/seed/bg2012/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2012/600/900",
    filmmaker: { director_name: "Tim Guénard", avatar: "" },
    keyword_labels: ["Social", "Biografía"]
  },
  {
    movie_identifier: 2013,
    display_name: "Sextualidades: Teorías Literarias Feministas",
    release_year: 2007,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Una mirada profunda a las teorías feministas a través de la literatura y el análisis del discurso.",
      en: "A deep look into feminist theories through literature."
    },
    runtime_minutes: "310 páginas",
    content_rating: "16+",
    bg_image_url: "https://picsum.photos/seed/bg2013/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2013/600/900",
    filmmaker: { director_name: "Beatriz Suárez Briones", avatar: "" },
    keyword_labels: ["Social", "Feminismo"]
  },
  {
    movie_identifier: 2014,
    display_name: "El buen amor en la pareja",
    release_year: 2013,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Claves sistémicas para vivir la pareja con bienestar, entendiendo las constelaciones familiares.",
      en: "Systemic keys to experiencing well-being in couples."
    },
    runtime_minutes: "208 páginas",
    content_rating: "16+",
    bg_image_url: "https://picsum.photos/seed/bg2014/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2014/600/900",
    filmmaker: { director_name: "Joan Garriga", avatar: "" },
    keyword_labels: ["Social", "Psicología"]
  },
  {
    movie_identifier: 2015,
    display_name: "Hasta que te caigas bien",
    release_year: 2023,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Un viaje hacia la autoestima, el autoconocimiento y la validación emocional.",
      en: "A journey towards self-esteem, self-knowledge, and emotional validation."
    },
    runtime_minutes: "248 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2015/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2015/600/900",
    filmmaker: { director_name: "Elizabeth Clapés", avatar: "" },
    keyword_labels: ["Social", "Autoayuda"]
  },
  {
    movie_identifier: 2016,
    display_name: "Querida yo: tenemos que hablar",
    release_year: 2022,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Reflexiones íntimas para reconciliarte contigo misma y cuidar tu salud mental.",
      en: "Intimate reflections to reconcile with yourself."
    },
    runtime_minutes: "220 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2016/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2016/600/900",
    filmmaker: { director_name: "Elizabeth Clapés", avatar: "" },
    keyword_labels: ["Social", "Psicología"]
  },
  {
    movie_identifier: 2017,
    display_name: "Recupera tu mente, Reconquista tu vida",
    release_year: 2024,
    average_score: 9.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Descubre cómo rescatar tu atención en el mundo de la hiperconexión y el estrés constante.",
      en: "Discover how to rescue your attention in a hyper-connected world."
    },
    runtime_minutes: "384 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2017/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2017/600/900",
    filmmaker: { director_name: "Marian Rojas Estapé", avatar: "" },
    keyword_labels: ["Social", "Psiquiatría"]
  },
  {
    movie_identifier: 2018,
    display_name: "Cómo hacer que te pasen cosas buenas",
    release_year: 2018,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Comprende tu cerebro, gestiona tus emociones y aprende a ser más feliz desde la neurociencia.",
      en: "Understand your brain, manage emotions and learn to be happier."
    },
    runtime_minutes: "232 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2018/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2018/600/900",
    filmmaker: { director_name: "Marian Rojas Estapé", avatar: "" },
    keyword_labels: ["Social", "Autoayuda"]
  },
  {
    movie_identifier: 2019,
    display_name: "Encuentra tu persona vitamina",
    release_year: 2021,
    average_score: 9.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Aprende sobre el apego y descubre por qué algunas personas nos agotan mientras otras nos inspiran.",
      en: "Learn about attachment and discover why some people inspire us."
    },
    runtime_minutes: "328 páginas",
    content_rating: "All",
    bg_image_url: "https://picsum.photos/seed/bg2019/1200/600",
    cover_image_url: "https://picsum.photos/seed/cover2019/600/900",
    filmmaker: { director_name: "Marian Rojas Estapé", avatar: "" },
    keyword_labels: ["Social", "Psicología"]
  }
];

const appendContent = `

// Añadir más libros sociales a la base de datos
BOOKS_DATA.push(...(${JSON.stringify(MORE_SOCIAL_BOOKS, null, 2)}));

`;

fs.appendFileSync('js/datos.js', appendContent);
console.log("Updated js/datos.js with new social books.");
