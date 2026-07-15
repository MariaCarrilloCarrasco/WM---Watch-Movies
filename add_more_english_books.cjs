const fs = require('fs');

const MORE_ENGLISH_BOOKS = [
  {
    movie_identifier: 2100,
    display_name: "The Hound of the Baskervilles",
    release_year: 1902,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "La novela más famosa de Sherlock Holmes sobre un misterioso sabueso asesino.",
      en: "The most famous Sherlock Holmes novel about a mysterious killer hound."
    },
    runtime_minutes: "256 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Hound+of+the+Baskervilles",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Hound+of+the+Baskervilles",
    filmmaker: { director_name: "Sir Arthur Conan Doyle", avatar: "" },
    keyword_labels: ["English", "Misterio"]
  },
  {
    movie_identifier: 2101,
    display_name: "The Secret Garden",
    release_year: 1911,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Una novela clásica de literatura infantil sobre la curación y la amistad.",
      en: "A classic children's literature novel about healing and friendship."
    },
    runtime_minutes: "336 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Secret+Garden",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Secret+Garden",
    filmmaker: { director_name: "Frances Hodgson Burnett", avatar: "" },
    keyword_labels: ["English", "Infantil", "Clásicos"]
  },
  {
    movie_identifier: 2102,
    display_name: "The Call of the Wild",
    release_year: 1903,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Un relato de aventuras sobre un perro que vuelve a su estado salvaje.",
      en: "An adventure tale about a dog that returns to its wild state."
    },
    runtime_minutes: "112 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Call+of+the+Wild",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Call+of+the+Wild",
    filmmaker: { director_name: "Jack London", avatar: "" },
    keyword_labels: ["English", "Aventura"]
  },
  {
    movie_identifier: 2103,
    display_name: "Tales of Mystery and Imagination",
    release_year: 1840,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Una colección de las historias de misterio más famosas de Edgar Allan Poe.",
      en: "A collection of Edgar Allan Poe's most famous mystery stories."
    },
    runtime_minutes: "352 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Tales+of+Mystery+and+Imagination",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Tales+of+Mystery+and+Imagination",
    filmmaker: { director_name: "Edgar Allan Poe", avatar: "" },
    keyword_labels: ["English", "Terror"]
  },
  {
    movie_identifier: 2104,
    display_name: "Stories from the Five Towns",
    release_year: 1905,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Historias cortas costumbristas sobre la vida en las fábricas inglesas.",
      en: "Short stories about life in the English potteries."
    },
    runtime_minutes: "160 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Stories+from+the+Five+Towns",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Stories+from+the+Five+Towns",
    filmmaker: { director_name: "Arnold Bennett", avatar: "" },
    keyword_labels: ["English"]
  },
  {
    movie_identifier: 2105,
    display_name: "Huckleberry Finn",
    release_year: 1884,
    average_score: 9.5,
    category_type: "Libro",
    synopsis_text: {
      es: "La gran novela americana sobre las aventuras de Huck y el esclavo Jim.",
      en: "The great American novel about the adventures of Huck and the slave Jim."
    },
    runtime_minutes: "368 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Huckleberry+Finn",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Huckleberry+Finn",
    filmmaker: { director_name: "Mark Twain", avatar: "" },
    keyword_labels: ["English", "Clásicos", "Aventura"]
  },
  {
    movie_identifier: 2106,
    display_name: "Sherlock Holmes",
    release_year: 1892,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Las aventuras del detective consultor más famoso del mundo.",
      en: "The adventures of the world's most famous consulting detective."
    },
    runtime_minutes: "400 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Sherlock+Holmes",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Sherlock+Holmes",
    filmmaker: { director_name: "Sir Arthur Conan Doyle", avatar: "" },
    keyword_labels: ["English", "Misterio"]
  },
  {
    movie_identifier: 2107,
    display_name: "The Adventures of Tom Sawyer",
    release_year: 1876,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Las aventuras de un niño que crece a lo largo del río Misisipi.",
      en: "The adventures of a boy growing up along the Mississippi River."
    },
    runtime_minutes: "274 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=The+Adventures+of+Tom+Sawyer",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=The+Adventures+of+Tom+Sawyer",
    filmmaker: { director_name: "Mark Twain", avatar: "" },
    keyword_labels: ["English", "Aventura", "Clásicos"]
  },
  {
    movie_identifier: 2108,
    display_name: "White Death",
    release_year: 1989,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Un trepidante thriller sobre el tráfico de drogas y la redención.",
      en: "A fast-paced thriller about drug trafficking and redemption."
    },
    runtime_minutes: "80 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=White+Death",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=White+Death",
    filmmaker: { director_name: "Tim Vicary", avatar: "" },
    keyword_labels: ["English", "Thriller"]
  },
  {
    movie_identifier: 2109,
    display_name: "Matty Doolin",
    release_year: 1965,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "La historia de un joven de clase trabajadora y su amor por los animales.",
      en: "The story of a working class youth and his love for animals."
    },
    runtime_minutes: "140 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Matty+Doolin",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Matty+Doolin",
    filmmaker: { director_name: "Catherine Cookson", avatar: "" },
    keyword_labels: ["English", "Drama"]
  }
];

let content = `
// Añadir segunda tanda de libros English
BOOKS_DATA.push(...(${JSON.stringify(MORE_ENGLISH_BOOKS, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added second batch of English books correctly.");
