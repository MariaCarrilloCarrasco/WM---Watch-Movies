const fs = require('fs');

const NEW_ENGLISH_BOOKS = [
  {
    movie_identifier: 2090,
    display_name: "The Picture of Dorian Gray",
    release_year: 1890,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "La historia de un joven que permanece eternamente joven mientras su retrato envejece.",
      en: "The story of a young man who remains eternally young while his portrait ages."
    },
    runtime_minutes: "276 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Picture+of+Dorian+Gray",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Picture+of+Dorian+Gray",
    filmmaker: { director_name: "Oscar Wilde", avatar: "" },
    keyword_labels: ["English", "Clásicos"]
  },
  {
    movie_identifier: 2091,
    display_name: "Castles King Arthur's Treasure",
    release_year: 2008,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Una aventura en inglés sobre los castillos y el tesoro del Rey Arturo.",
      en: "An adventure about castles and King Arthur's treasure."
    },
    runtime_minutes: "64 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Castles+King+Arthur's+Treasure",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Castles+King+Arthur's+Treasure",
    filmmaker: { director_name: "Desconocido", avatar: "" },
    keyword_labels: ["English", "Aventura"]
  },
  {
    movie_identifier: 2092,
    display_name: "The Thursday Thief",
    release_year: 2010,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Un misterio en inglés sobre un ladrón audaz.",
      en: "An English mystery about a daring thief."
    },
    runtime_minutes: "80 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thursday+Thief",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Thursday+Thief",
    filmmaker: { director_name: "Mark Foster & Phillip Burrows", avatar: "" },
    keyword_labels: ["English", "Misterio"]
  },
  {
    movie_identifier: 2093,
    display_name: "The Thirty-Nine Steps",
    release_year: 1915,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Un clásico thriller de espionaje en la Inglaterra de principios del siglo XX.",
      en: "A classic espionage thriller in early 20th century England."
    },
    runtime_minutes: "160 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thirty-Nine+Steps",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Thirty-Nine+Steps",
    filmmaker: { director_name: "John Buchan", avatar: "" },
    keyword_labels: ["English", "Thriller"]
  },
  {
    movie_identifier: 2094,
    display_name: "Frankenstein",
    release_year: 1818,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "El clásico de terror sobre el doctor Frankenstein y su monstruosa creación.",
      en: "The classic horror story about Dr. Frankenstein and his monstrous creation."
    },
    runtime_minutes: "280 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Frankenstein",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Frankenstein",
    filmmaker: { director_name: "Mary Shelley", avatar: "" },
    keyword_labels: ["English", "Terror"]
  },
  {
    movie_identifier: 2095,
    display_name: "Chemical Secret",
    release_year: 1991,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Un apasionante thriller sobre el peligro de los productos químicos tóxicos en el medio ambiente.",
      en: "A thrilling story about the danger of toxic chemicals in the environment."
    },
    runtime_minutes: "72 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Chemical+Secret",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Chemical+Secret",
    filmmaker: { director_name: "Tim Vicary", avatar: "" },
    keyword_labels: ["English", "Thriller"]
  },
  {
    movie_identifier: 2096,
    display_name: "Dr. Jekyll and Mr. Hyde",
    release_year: 1886,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "La famosa historia sobre la dualidad del bien y del mal en la naturaleza humana.",
      en: "The famous story about the duality of good and evil in human nature."
    },
    runtime_minutes: "144 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Dr.+Jekyll+and+Mr.+Hyde",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Dr.+Jekyll+and+Mr.+Hyde",
    filmmaker: { director_name: "Robert Louis Stevenson", avatar: "" },
    keyword_labels: ["English", "Clásicos"]
  }
];

let content = `
// Añadir libros de la sección English
BOOKS_DATA.push(...(${JSON.stringify(NEW_ENGLISH_BOOKS, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added English books correctly.");
