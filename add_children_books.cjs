const fs = require('fs');

const NEW_CHILDREN_BOOKS = [
  // Infantil - Winx
  {
    movie_identifier: 2080,
    display_name: "Winx Club: El poder de las hadas",
    release_year: 2004,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Descubre el mundo mágico de Alfea junto a Bloom y sus amigas hadas.",
      en: "Discover the magical world of Alfea with Bloom and her fairy friends."
    },
    runtime_minutes: "128 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Winx+Club:+El+poder+de+las+hadas",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Winx+Club:+El+poder+de+las+hadas",
    filmmaker: { director_name: "Iginio Straffi", avatar: "" },
    keyword_labels: ["Infantil", "Fantasía"]
  },
  {
    movie_identifier: 2081,
    display_name: "Winx Club: La magia de la amistad",
    release_year: 2005,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Las Winx se enfrentan a nuevos desafíos con el poder de la amistad.",
      en: "The Winx face new challenges with the power of friendship."
    },
    runtime_minutes: "130 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Winx+Club:+La+magia+de+la+amistad",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Winx+Club:+La+magia+de+la+amistad",
    filmmaker: { director_name: "Iginio Straffi", avatar: "" },
    keyword_labels: ["Infantil", "Fantasía"]
  },
  // Infantil - Kika Superbruja
  {
    movie_identifier: 2082,
    display_name: "Kika Superbruja detective",
    release_year: 1992,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Kika utiliza su libro de magia para resolver un misterio.",
      en: "Kika uses her magic book to solve a mystery."
    },
    runtime_minutes: "120 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/ffffff?text=Kika+Superbruja+detective",
    cover_image_url: "https://placehold.co/600x900/f1c40f/ffffff?text=Kika+Superbruja+detective",
    filmmaker: { director_name: "Knister", avatar: "" },
    keyword_labels: ["Infantil", "Aventura"]
  },
  {
    movie_identifier: 2083,
    display_name: "Kika Superbruja en el castillo de Drácula",
    release_year: 1993,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Una aventura terroríficamente divertida en Transilvania.",
      en: "A terrifyingly fun adventure in Transylvania."
    },
    runtime_minutes: "136 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/ffffff?text=Kika+Superbruja+en+el+castillo+de+Dr%C3%A1cula",
    cover_image_url: "https://placehold.co/600x900/f1c40f/ffffff?text=Kika+Superbruja+en+el+castillo+de+Dr%C3%A1cula",
    filmmaker: { director_name: "Knister", avatar: "" },
    keyword_labels: ["Infantil", "Aventura"]
  },
  // Romántica
  {
    movie_identifier: 2084,
    display_name: "El diario de Meri",
    release_year: 2015,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Los secretos, amores y confesiones del personaje más querido de El club de los incomprendidos.",
      en: "The secrets and loves of the most beloved character of The Misunderstood Club."
    },
    runtime_minutes: "384 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/0984e3/ffffff?text=El+diario+de+Meri",
    cover_image_url: "https://placehold.co/600x900/0984e3/ffffff?text=El+diario+de+Meri",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Romántica", "Juvenil"]
  }
];

let content = `
// Añadir libros de Infantil y Romántica
BOOKS_DATA.push(...(${JSON.stringify(NEW_CHILDREN_BOOKS, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Infantil and Romance books correctly.");
