const fs = require('fs');

const NEW_ROMANCE_SOCIAL = [
  // Social
  {
    movie_identifier: 2040,
    display_name: "El tratamiento del duelo",
    release_year: 1991,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Asesoramiento psicológico y terapia tras una pérdida.",
      en: "Grief counseling and grief therapy."
    },
    runtime_minutes: "208 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/1e1e2f/ffffff?text=El+tratamiento+del+duelo",
    cover_image_url: "https://placehold.co/600x900/1e1e2f/ffffff?text=El+tratamiento+del+duelo",
    filmmaker: { director_name: "J. William Worden", avatar: "" },
    keyword_labels: ["Social", "Psicología"]
  },
  {
    movie_identifier: 2041,
    display_name: "Métodos de investigación en Psicología y Educación",
    release_year: 2015,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Las tradiciones cuantitativas y cualitativas en la investigación educativa y psicológica.",
      en: "Quantitative and qualitative traditions in research."
    },
    runtime_minutes: "480 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/1e1e2f/ffffff?text=M%C3%A9todos+de+investigaci%C3%B3n+en+Psicolog%C3%ADa+y+Educaci%C3%B3n",
    cover_image_url: "https://placehold.co/600x900/1e1e2f/ffffff?text=M%C3%A9todos+de+investigaci%C3%B3n+en+Psicolog%C3%ADa+y+Educaci%C3%B3n",
    filmmaker: { director_name: "Orfelio G. León e Ignacio Montero", avatar: "" },
    keyword_labels: ["Social", "Educación", "Psicología"]
  },
  {
    movie_identifier: 2042,
    display_name: "Pedagogía del Oprimido",
    release_year: 1968,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Un ensayo fundamental sobre cómo la educación puede ser un mecanismo de liberación.",
      en: "A fundamental essay on how education can be a mechanism of liberation."
    },
    runtime_minutes: "250 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/1e1e2f/ffffff?text=Pedagog%C3%ADa+del+Oprimido",
    cover_image_url: "https://placehold.co/600x900/1e1e2f/ffffff?text=Pedagog%C3%ADa+del+Oprimido",
    filmmaker: { director_name: "Paulo Freire", avatar: "" },
    keyword_labels: ["Social", "Educación"]
  },
  // Romántica
  {
    movie_identifier: 2043,
    display_name: "Perdona pero quiero casarme contigo",
    release_year: 2009,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "La continuación de la intensa historia de amor de Step y Babi.",
      en: "The continuation of Step and Babi's intense love story."
    },
    runtime_minutes: "500 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Perdona+pero+quiero+casarme+contigo",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Perdona+pero+quiero+casarme+contigo",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2044,
    display_name: "Algo tan sencillo como tuitear te quiero",
    release_year: 2015,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "El primer año universitario de un grupo de jóvenes en Madrid.",
      en: "The first college year of a group of young people in Madrid."
    },
    runtime_minutes: "544 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=Algo+tan+sencillo+como+tuitear+te+quiero",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=Algo+tan+sencillo+como+tuitear+te+quiero",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2045,
    display_name: "Algo tan sencillo como darte un beso",
    release_year: 2016,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "La esperada continuación de las aventuras en la residencia Benjamin Franklin.",
      en: "The awaited continuation of the Benjamin Franklin residence adventures."
    },
    runtime_minutes: "544 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=Algo+tan+sencillo+como+darte+un+beso",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=Algo+tan+sencillo+como+darte+un+beso",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2046,
    display_name: "No sonrías que me enamoro",
    release_year: 2013,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Segunda parte de El club de los Incomprendidos, llena de romance y secretos.",
      en: "Second part of The Misunderstood Club, full of romance and secrets."
    },
    runtime_minutes: "480 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=No+sonr%C3%ADas+que+me+enamoro",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=No+sonr%C3%ADas+que+me+enamoro",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2047,
    display_name: "A tres metros sobre el cielo",
    release_year: 1992,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Un amor improbable entre dos mundos distintos que desafía todas las reglas.",
      en: "An unlikely love between two different worlds that defies all rules."
    },
    runtime_minutes: "500 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=A+tres+metros+sobre+el+cielo",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=A+tres+metros+sobre+el+cielo",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2048,
    display_name: "Tengo ganas de ti",
    release_year: 2006,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "El regreso de Step a Roma y su encuentro con Gin que cambiará todo.",
      en: "Step's return to Rome and his meeting with Gin that will change everything."
    },
    runtime_minutes: "500 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Tengo+ganas+de+ti",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Tengo+ganas+de+ti",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2049,
    display_name: "El amor empieza después del café",
    release_year: 2021,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Una novela fresca y divertida sobre citas y el verdadero amor.",
      en: "A fresh and fun novel about dating and true love."
    },
    runtime_minutes: "300 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/d63031/ffffff?text=El+amor+empieza+despu%C3%A9s+del+caf%C3%A9",
    cover_image_url: "https://placehold.co/600x900/d63031/ffffff?text=El+amor+empieza+despu%C3%A9s+del+caf%C3%A9",
    filmmaker: { director_name: "Xuso Jones", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2050,
    display_name: "Carolina se enamora",
    release_year: 2008,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "El primer gran amor de una chica de catorce años.",
      en: "The first great love of a fourteen year old girl."
    },
    runtime_minutes: "480 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Carolina+se+enamora",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Carolina+se+enamora",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2051,
    display_name: "Canciones para Paula",
    release_year: 2009,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "El inicio de una de las trilogías juveniles románticas más famosas de España.",
      en: "The beginning of one of the most famous romantic youth trilogies in Spain."
    },
    runtime_minutes: "680 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=Canciones+para+Paula",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=Canciones+para+Paula",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2052,
    display_name: "¿Sabes que te quiero?",
    release_year: 2010,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "La continuación del fenómeno editorial de Canciones para Paula.",
      en: "The continuation of the editorial phenomenon of Canciones para Paula."
    },
    runtime_minutes: "700 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=%C2%BFSabes+que+te+quiero%3F",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=%C2%BFSabes+que+te+quiero%3F",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2053,
    display_name: "Cállame con un beso",
    release_year: 2011,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "El esperado desenlace de la historia de Paula, Ángel y Álex.",
      en: "The awaited conclusion to the story of Paula, Ángel and Álex."
    },
    runtime_minutes: "650 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=C%C3%A1llame+con+un+beso",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=C%C3%A1llame+con+un+beso",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2054,
    display_name: "¿Puedo soñar contigo?",
    release_year: 2014,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "La tercera entrega y el emocionante final de El club de los Incomprendidos.",
      en: "The third installment and emotional finale of The Misunderstood Club."
    },
    runtime_minutes: "480 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=%C2%BFPuedo+so%C3%B1ar+contigo%3F",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=%C2%BFPuedo+so%C3%B1ar+contigo%3F",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  }
];

let content = `
// Añadir libros de Social y Romántica (Moccia, Blue Jeans, etc)
BOOKS_DATA.push(...(${JSON.stringify(NEW_ROMANCE_SOCIAL, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Social and Romance books correctly.");
