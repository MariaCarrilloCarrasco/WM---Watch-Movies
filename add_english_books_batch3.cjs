const fs = require('fs');

const BATCH3_ENGLISH_BOOKS = [
  {
    movie_identifier: 2110,
    display_name: "Treasure Island",
    release_year: 1883,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "La clásica historia de piratas y tesoros escondidos.",
      en: "The classic tale of pirates and hidden treasures."
    },
    runtime_minutes: "304 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Treasure+Island",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Treasure+Island",
    filmmaker: { director_name: "Robert Louis Stevenson", avatar: "" },
    keyword_labels: ["English", "Aventura", "Clásicos"]
  },
  {
    movie_identifier: 2111,
    display_name: "Marcel and the Mona Lisa",
    release_year: 1990,
    average_score: 8.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Un misterio en París con Marcel intentando proteger el famoso cuadro.",
      en: "A mystery in Paris with Marcel trying to protect the famous painting."
    },
    runtime_minutes: "16 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Marcel+and+the+Mona+Lisa",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Marcel+and+the+Mona+Lisa",
    filmmaker: { director_name: "Stephen Rabley", avatar: "" },
    keyword_labels: ["English", "Misterio", "Infantil"]
  },
  {
    movie_identifier: 2112,
    display_name: "Hannah and the Hurricane",
    release_year: 1998,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Una historia sobre valentía frente a la fuerza de la naturaleza.",
      en: "A story about bravery against the forces of nature."
    },
    runtime_minutes: "16 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Hannah+and+the+Hurricane",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Hannah+and+the+Hurricane",
    filmmaker: { director_name: "John Escott", avatar: "" },
    keyword_labels: ["English", "Drama"]
  },
  {
    movie_identifier: 2113,
    display_name: "A New Zealand Adventure",
    release_year: 2005,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Aventuras emocionantes a través de los paisajes de Nueva Zelanda.",
      en: "Exciting adventures across the landscapes of New Zealand."
    },
    runtime_minutes: "48 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=A+New+Zealand+Adventure",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=A+New+Zealand+Adventure",
    filmmaker: { director_name: "Jan Thorburn", avatar: "" },
    keyword_labels: ["English", "Aventura"]
  },
  {
    movie_identifier: 2114,
    display_name: "The Thief of Always",
    release_year: 1992,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Un cuento oscuro y mágico donde un niño descubre un lugar maravilloso y siniestro.",
      en: "A dark magical fable where a child discovers a wonderful yet sinister place."
    },
    runtime_minutes: "240 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Thief+of+Always",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Thief+of+Always",
    filmmaker: { director_name: "Clive Barker", avatar: "" },
    keyword_labels: ["English", "Fantasía", "Terror"]
  },
  {
    movie_identifier: 2115,
    display_name: "Tales of the Arabian Nights",
    release_year: 1993,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Una selección de las clásicas historias de Oriente Medio.",
      en: "A selection of classic Middle Eastern tales."
    },
    runtime_minutes: "64 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Tales+of+the+Arabian+Nights",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Tales+of+the+Arabian+Nights",
    filmmaker: { director_name: "Alison Phillips", avatar: "" },
    keyword_labels: ["English", "Fantasía"]
  },
  {
    movie_identifier: 2116,
    display_name: "A Ghost Collection",
    release_year: 2001,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Una antología de historias de fantasmas que te darán escalofríos.",
      en: "An anthology of chilling ghost stories."
    },
    runtime_minutes: "72 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=A+Ghost+Collection",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=A+Ghost+Collection",
    filmmaker: { director_name: "Anne Stanmore", avatar: "" },
    keyword_labels: ["English", "Terror"]
  },
  {
    movie_identifier: 2117,
    display_name: "Witches and Wizards",
    release_year: 2004,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Relatos mágicos sobre brujas y magos.",
      en: "Magical tales about witches and wizards."
    },
    runtime_minutes: "64 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Witches+and+Wizards",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Witches+and+Wizards",
    filmmaker: { director_name: "Phillipa Tracy", avatar: "" },
    keyword_labels: ["English", "Fantasía"]
  },
  {
    movie_identifier: 2118,
    display_name: "The Borrowers",
    release_year: 1952,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "La historia de unos diminutos seres que viven secretamente en las casas.",
      en: "The story of tiny people who secretly live in houses."
    },
    runtime_minutes: "192 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Borrowers",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Borrowers",
    filmmaker: { director_name: "Mary Norton", avatar: "" },
    keyword_labels: ["English", "Infantil", "Fantasía"]
  }
];

let content = "\n// Añadir tercera tanda de libros English\nBOOKS_DATA.push(...(" + JSON.stringify(BATCH3_ENGLISH_BOOKS, null, 2) + "));\n";

fs.appendFileSync('js/datos.js', content);
console.log("Added third batch of English books correctly.");
