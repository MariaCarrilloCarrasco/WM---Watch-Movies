const fs = require('fs');

const PROGRAMS_BATCH = [
  {
    movie_identifier: 5001,
    display_name: "El Hormiguero",
    release_year: 2006,
    average_score: 7.5,
    category_type: "Programa",
    synopsis_text: {
      es: "Talk show de televisión presentado por Pablo Motos, centrado en el humor, la ciencia, entrevistas y las hormigas Trancas y Barrancas.",
      en: "Television talk show hosted by Pablo Motos, focusing on humor, science, interviews, and the ants Trancas and Barrancas."
    },
    runtime_minutes: "18+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=El+Hormiguero",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=El+Hormiguero",
    filmmaker: { director_name: "Pablo Motos", avatar: "" },
    keyword_labels: ["Entretenimiento", "Entrevistas"]
  },
  {
    movie_identifier: 5002,
    display_name: "Tu cara me suena",
    release_year: 2011,
    average_score: 8.2,
    category_type: "Programa",
    synopsis_text: {
      es: "Famosos se enfrentan cada semana al reto de imitar a cantantes icónicos, caracterizándose y cantando en directo.",
      en: "Celebrities face the challenge of imitating iconic singers every week, dressing up and singing live."
    },
    runtime_minutes: "11+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=Tu+cara+me+suena",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=Tu+cara+me+suena",
    filmmaker: { director_name: "Manel Fuentes", avatar: "" },
    keyword_labels: ["Entretenimiento", "Musical", "Talent Show"]
  },
  {
    movie_identifier: 5003,
    display_name: "Got Talent España",
    release_year: 2016,
    average_score: 7.8,
    category_type: "Programa",
    synopsis_text: {
      es: "Programa en el que artistas de todas las disciplinas muestran su talento frente a un jurado exigente.",
      en: "A show where artists from all disciplines showcase their talent to a demanding jury."
    },
    runtime_minutes: "9+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/333333?text=Got+Talent",
    cover_image_url: "https://placehold.co/600x900/f1c40f/333333?text=Got+Talent",
    filmmaker: { director_name: "Santi Millán", avatar: "" },
    keyword_labels: ["Entretenimiento", "Talent Show"]
  },
  {
    movie_identifier: 5004,
    display_name: "Operación Triunfo (OT)",
    release_year: 2001,
    average_score: 8.5,
    category_type: "Programa",
    synopsis_text: {
      es: "Un grupo de jóvenes cantantes ingresa en una academia musical para formarse y competir por iniciar su carrera discográfica.",
      en: "A group of young singers enters a musical academy to train and compete to start their recording career."
    },
    runtime_minutes: "12+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Operaci%C3%B3n+Triunfo",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Operaci%C3%B3n+Triunfo",
    filmmaker: { director_name: "Noemí Galera / Chenoa", avatar: "" },
    keyword_labels: ["Musical", "Talent Show", "Entretenimiento"]
  },
  {
    movie_identifier: 5005,
    display_name: "Atrapa un millón",
    release_year: 2011,
    average_score: 7.6,
    category_type: "Programa",
    synopsis_text: {
      es: "Concurso en el que los participantes deben apostar fajos de dinero real en diferentes trampillas para responder a preguntas de cultura general.",
      en: "A game show where contestants must bet bundles of real money on trapdoors to answer trivia questions."
    },
    runtime_minutes: "Varios especiales",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/16a085/ffffff?text=Atrapa+un+mill%C3%B3n",
    cover_image_url: "https://placehold.co/600x900/16a085/ffffff?text=Atrapa+un+mill%C3%B3n",
    filmmaker: { director_name: "Carlos Sobera / Juanra Bonet", avatar: "" },
    keyword_labels: ["Concurso", "Entretenimiento"]
  }
];

let content = `
// Añadir array global PROGRAMS_DATA
const PROGRAMS_DATA = ${JSON.stringify(PROGRAMS_BATCH, null, 2)};
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added TV Programs data correctly.");
