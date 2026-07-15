const fs = require('fs');

const NEW_BOOKS_BATCH = [
  // Romántica
  {
    movie_identifier: 2070,
    display_name: "Crepúsculo",
    release_year: 2005,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "El inicio de la saga vampírica más famosa del siglo.",
      en: "The beginning of the most famous vampire saga of the century."
    },
    runtime_minutes: "512 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Crep%C3%BAsculo",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Crep%C3%BAsculo",
    filmmaker: { director_name: "Stephenie Meyer", avatar: "" },
    keyword_labels: ["Romántica", "Fantasía"]
  },
  {
    movie_identifier: 2071,
    display_name: "Luna nueva",
    release_year: 2006,
    average_score: 8.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Segunda parte de la saga Crepúsculo.",
      en: "Second part of the Twilight saga."
    },
    runtime_minutes: "576 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Luna+nueva",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Luna+nueva",
    filmmaker: { director_name: "Stephenie Meyer", avatar: "" },
    keyword_labels: ["Romántica", "Fantasía"]
  },
  {
    movie_identifier: 2072,
    display_name: "Eclipse",
    release_year: 2007,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Tercera parte de la saga Crepúsculo.",
      en: "Third part of the Twilight saga."
    },
    runtime_minutes: "624 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Eclipse",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Eclipse",
    filmmaker: { director_name: "Stephenie Meyer", avatar: "" },
    keyword_labels: ["Romántica", "Fantasía"]
  },
  {
    movie_identifier: 2073,
    display_name: "Amanecer",
    release_year: 2008,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Cuarta y última parte de la saga Crepúsculo.",
      en: "Fourth and final part of the Twilight saga."
    },
    runtime_minutes: "828 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Amanecer",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Amanecer",
    filmmaker: { director_name: "Stephenie Meyer", avatar: "" },
    keyword_labels: ["Romántica", "Fantasía"]
  },
  {
    movie_identifier: 2074,
    display_name: "Todas las mañanas contigo",
    release_year: 2022,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Una historia romántica llena de giros inesperados y mucho humor.",
      en: "A romantic story full of unexpected twists and humor."
    },
    runtime_minutes: "320 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e84393/ffffff?text=Todas+las+ma%C3%B1anas+contigo",
    cover_image_url: "https://placehold.co/600x900/e84393/ffffff?text=Todas+las+ma%C3%B1anas+contigo",
    filmmaker: { director_name: "Xuso Jones", avatar: "" },
    keyword_labels: ["Romántica"]
  },
  
  // Fantasía
  {
    movie_identifier: 2075,
    display_name: "Finis Mundi",
    release_year: 1999,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Un joven monje y un juglar emprenden un viaje para evitar el fin del mundo en el año 1000.",
      en: "A young monk and a minstrel set out on a journey to prevent the end of the world."
    },
    runtime_minutes: "256 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Finis+Mundi",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Finis+Mundi",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Aventura"]
  },
  
  // Drama
  {
    movie_identifier: 2076,
    display_name: "La dama del alba",
    release_year: 1944,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Una obra de teatro clásica sobre la vida, la muerte y el misterio en Asturias.",
      en: "A classic play about life, death and mystery."
    },
    runtime_minutes: "192 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=La+dama+del+alba",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=La+dama+del+alba",
    filmmaker: { director_name: "Alejandro Casona", avatar: "" },
    keyword_labels: ["Drama", "Teatro"]
  },
  {
    movie_identifier: 2077,
    display_name: "El niño con el pijama de rayas",
    release_year: 2006,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Una historia conmovedora sobre la inocencia en tiempos del Holocausto.",
      en: "A moving story about innocence in times of the Holocaust."
    },
    runtime_minutes: "224 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=El+ni%C3%B1o+con+el+pijama+de+rayas",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=El+ni%C3%B1o+con+el+pijama+de+rayas",
    filmmaker: { director_name: "John Boyne", avatar: "" },
    keyword_labels: ["Drama", "Histórico"]
  },
  {
    movie_identifier: 2078,
    display_name: "Donde aprenden a volar las gaviotas",
    release_year: 2007,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "El descubrimiento de un oscuro secreto familiar durante unas vacaciones en Noruega.",
      en: "The discovery of a dark family secret during a vacation in Norway."
    },
    runtime_minutes: "224 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=Donde+aprenden+a+volar+las+gaviotas",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=Donde+aprenden+a+volar+las+gaviotas",
    filmmaker: { director_name: "Ana Alcolea", avatar: "" },
    keyword_labels: ["Drama", "Misterio"]
  }
];

let content = `
// Añadir libros de Drama, Fantasía y Romántica
BOOKS_DATA.push(...(${JSON.stringify(NEW_BOOKS_BATCH, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added new books correctly.");
