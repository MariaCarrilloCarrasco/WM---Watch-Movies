const fs = require('fs');

const NEW_SERIES_BATCH = [
  {
    movie_identifier: 3006,
    display_name: "Machos Alfa",
    release_year: 2022,
    average_score: 8.2,
    category_type: "Serie",
    synopsis_text: {
      es: "Cuatro amigos cuarentones sienten que pierden sus privilegios en la era de la igualdad e intentan adaptarse a la nueva realidad.",
      en: "Four friends in their forties feel they are losing their privileges in the era of equality."
    },
    runtime_minutes: "2 Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Machos+Alfa",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Machos+Alfa",
    filmmaker: { director_name: "Laura y Alberto Caballero", avatar: "" },
    keyword_labels: ["Comedia"]
  },
  {
    movie_identifier: 3007,
    display_name: "Los Serrano",
    release_year: 2003,
    average_score: 8.5,
    category_type: "Serie",
    synopsis_text: {
      es: "Un viudo con tres hijos se casa con una mujer divorciada con dos hijas, dando lugar a una convivencia llena de humor.",
      en: "A widower with three sons marries a divorced woman with two daughters."
    },
    runtime_minutes: "8 Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Los+Serrano",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Los+Serrano",
    filmmaker: { director_name: "Daniel Écija", avatar: "" },
    keyword_labels: ["Comedia", "Drama"]
  },
  {
    movie_identifier: 3008,
    display_name: "Friends",
    release_year: 1994,
    average_score: 9.3,
    category_type: "Serie",
    synopsis_text: {
      es: "Las vidas personales y profesionales de seis amigos veinteañeros que viven en Manhattan.",
      en: "The personal and professional lives of six twenty-something friends living in Manhattan."
    },
    runtime_minutes: "10 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Friends",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Friends",
    filmmaker: { director_name: "David Crane, Marta Kauffman", avatar: "" },
    keyword_labels: ["Comedia"]
  },
  {
    movie_identifier: 3009,
    display_name: "Los Simpson",
    release_year: 1989,
    average_score: 9.2,
    category_type: "Serie",
    synopsis_text: {
      es: "Las satíricas aventuras de una familia trabajadora de clase media en la peculiar ciudad de Springfield.",
      en: "The satiric adventures of a working-class family in the misfit city of Springfield."
    },
    runtime_minutes: "35+ Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/333333?text=Los+Simpson",
    cover_image_url: "https://placehold.co/600x900/f1c40f/333333?text=Los+Simpson",
    filmmaker: { director_name: "Matt Groening", avatar: "" },
    keyword_labels: ["Comedia", "Animación"]
  },
  {
    movie_identifier: 3010,
    display_name: "Futurama",
    release_year: 1999,
    average_score: 8.9,
    category_type: "Serie",
    synopsis_text: {
      es: "Un repartidor de pizzas es congelado accidentalmente en 1999 y se despierta mil años después en el futuro.",
      en: "A pizza delivery boy is accidentally frozen in 1999 and thawed out 1,000 years later."
    },
    runtime_minutes: "8+ Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Futurama",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Futurama",
    filmmaker: { director_name: "Matt Groening", avatar: "" },
    keyword_labels: ["Comedia", "Animación", "Ciencia Ficción"]
  },
  {
    movie_identifier: 3011,
    display_name: "Padre de familia (Family Guy)",
    release_year: 1999,
    average_score: 8.5,
    category_type: "Serie",
    synopsis_text: {
      es: "Una familia disfuncional en la disparatada ciudad de Quahog, Rhode Island, intentando sobrevivir a su día a día.",
      en: "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another."
    },
    runtime_minutes: "22+ Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/34495e/ffffff?text=Padre+de+Familia",
    cover_image_url: "https://placehold.co/600x900/34495e/ffffff?text=Padre+de+Familia",
    filmmaker: { director_name: "Seth MacFarlane", avatar: "" },
    keyword_labels: ["Comedia", "Animación"]
  }
];

let content = `
// Añadir segunda tanda de series (Comedia y Animación)
SERIES_DATA.push(...(${JSON.stringify(NEW_SERIES_BATCH, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added comedy series correctly.");
