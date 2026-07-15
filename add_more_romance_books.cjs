const fs = require('fs');

const NEW_ROMANCE_SOCIAL_2 = [
  // Romántica
  {
    movie_identifier: 2060,
    display_name: "Buenos días princesa",
    release_year: 2012,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "El inicio de la exitosa historia de El club de los Incomprendidos.",
      en: "The beginning of the successful story of The Misunderstood Club."
    },
    runtime_minutes: "544 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=Buenos+d%C3%ADas+princesa",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=Buenos+d%C3%ADas+princesa",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  },
  {
    movie_identifier: 2061,
    display_name: "Tú, simplemente tú",
    release_year: 2014,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "El gran amor puede estar donde menos lo esperas.",
      en: "True love can be where you least expect it."
    },
    runtime_minutes: "380 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=T%C3%BA+simplemente+t%C3%BA",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=T%C3%BA+simplemente+t%C3%BA",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2062,
    display_name: "Ese instante de felicidad",
    release_year: 2013,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Una historia sobre la magia de los pequeños momentos compartidos.",
      en: "A story about the magic of small shared moments."
    },
    runtime_minutes: "400 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Ese+instante+de+felicidad",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Ese+instante+de+felicidad",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2063,
    display_name: "Esta noche dime que me quieres",
    release_year: 2011,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Un amor que desafía el paso del tiempo y las circunstancias.",
      en: "A love that defies time and circumstances."
    },
    runtime_minutes: "350 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Esta+noche+dime+que+me+quieres",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Esta+noche+dime+que+me+quieres",
    filmmaker: { director_name: "Federico Moccia", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2064,
    display_name: "Si el amor es una isla",
    release_year: 2015,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Una historia romántica que te hará soñar despierto.",
      en: "A romantic story that will make you daydream."
    },
    runtime_minutes: "320 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/fd79a8/ffffff?text=Si+el+amor+es+una+isla",
    cover_image_url: "https://placehold.co/600x900/fd79a8/ffffff?text=Si+el+amor+es+una+isla",
    filmmaker: { director_name: "Esther Sanz", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2065,
    display_name: "La sonrisa de las mujeres",
    release_year: 2011,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Un encantador romance ambientado en el corazón de París.",
      en: "A charming romance set in the heart of Paris."
    },
    runtime_minutes: "288 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/fd79a8/ffffff?text=La+sonrisa+de+las+mujeres",
    cover_image_url: "https://placehold.co/600x900/fd79a8/ffffff?text=La+sonrisa+de+las+mujeres",
    filmmaker: { director_name: "Nicolás Barreau", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  {
    movie_identifier: 2066,
    display_name: "Me encontrarás en el fin del mundo",
    release_year: 2013,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Un viaje de autodescubrimiento y amor que lo cambiará todo.",
      en: "A journey of self-discovery and love."
    },
    runtime_minutes: "310 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/fd79a8/ffffff?text=Me+encontrar%C3%A1s+en+el+fin+del+mundo",
    cover_image_url: "https://placehold.co/600x900/fd79a8/ffffff?text=Me+encontrar%C3%A1s+en+el+fin+del+mundo",
    filmmaker: { director_name: "Nicolás Barreau", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  // Social
  {
    movie_identifier: 2067,
    display_name: "Por qué los hombres mienten y las mujeres lloran",
    release_year: 2002,
    average_score: 8.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Comprende la naturaleza de las relaciones y la comunicación entre sexos.",
      en: "Understand the nature of relationships and communication between sexes."
    },
    runtime_minutes: "336 páginas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/1e1e2f/ffffff?text=Por+qu%C3%A9+los+hombres+mienten+y+las+mujeres+lloran",
    cover_image_url: "https://placehold.co/600x900/1e1e2f/ffffff?text=Por+qu%C3%A9+los+hombres+mienten+y+las+mujeres+lloran",
    filmmaker: { director_name: "Allan y Bárbara Pease", avatar: "" },
    keyword_labels: ["Social", "Psicología"]
  }
];

let content = `
// Añadir libros de Social y Romántica (Moccia, Blue Jeans, Barreau, Pease, etc)
BOOKS_DATA.push(...(${JSON.stringify(NEW_ROMANCE_SOCIAL_2, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Social and Romance books correctly.");
