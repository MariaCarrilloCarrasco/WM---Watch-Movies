const fs = require('fs');

const SERIES_BATCH = [
  {
    movie_identifier: 3001,
    display_name: "Breaking Bad",
    release_year: 2008,
    average_score: 9.5,
    category_type: "Serie",
    synopsis_text: {
      es: "Un profesor de química diagnosticado con cáncer terminal se asocia con un antiguo alumno para fabricar y vender metanfetamina con el fin de asegurar el futuro económico de su familia.",
      en: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine."
    },
    runtime_minutes: "5 Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/16a085/ffffff?text=Breaking+Bad",
    cover_image_url: "https://placehold.co/600x900/16a085/ffffff?text=Breaking+Bad",
    filmmaker: { director_name: "Vince Gilligan", avatar: "" },
    keyword_labels: ["Drama", "Crimen", "Thriller"]
  },
  {
    movie_identifier: 3002,
    display_name: "Game of Thrones",
    release_year: 2011,
    average_score: 9.2,
    category_type: "Serie",
    synopsis_text: {
      es: "Nueve familias nobles luchan por el control sobre las tierras míticas de Poniente, mientras un enemigo olvidado regresa tras milenios.",
      en: "Nine noble families fight for control over the mythical lands of Westeros."
    },
    runtime_minutes: "8 Temporadas",
    content_rating: "18+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=Game+of+Thrones",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=Game+of+Thrones",
    filmmaker: { director_name: "David Benioff, D.B. Weiss", avatar: "" },
    keyword_labels: ["Fantasía", "Drama", "Acción"]
  },
  {
    movie_identifier: 3003,
    display_name: "Stranger Things",
    release_year: 2016,
    average_score: 8.7,
    category_type: "Serie",
    synopsis_text: {
      es: "Cuando un niño desaparece, sus amigos, su familia y la policía local se ven envueltos en un misterio extraordinario que involucra experimentos secretos y fuerzas sobrenaturales.",
      en: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments."
    },
    runtime_minutes: "4 Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/c0392b/ffffff?text=Stranger+Things",
    cover_image_url: "https://placehold.co/600x900/c0392b/ffffff?text=Stranger+Things",
    filmmaker: { director_name: "The Duffer Brothers", avatar: "" },
    keyword_labels: ["Ciencia Ficción", "Misterio", "Terror"]
  },
  {
    movie_identifier: 3004,
    display_name: "The Office (US)",
    release_year: 2005,
    average_score: 9.0,
    category_type: "Serie",
    synopsis_text: {
      es: "Un falso documental sobre el día a día de los empleados de la papelera Dunder Mifflin en Scranton, Pensilvania.",
      en: "A mockumentary on a group of typical office workers."
    },
    runtime_minutes: "9 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=The+Office",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=The+Office",
    filmmaker: { director_name: "Greg Daniels", avatar: "" },
    keyword_labels: ["Comedia"]
  },
  {
    movie_identifier: 3005,
    display_name: "Dark",
    release_year: 2017,
    average_score: 8.8,
    category_type: "Serie",
    synopsis_text: {
      es: "La desaparición de dos niños revela los vínculos entre cuatro familias y saca a la luz el pasado de un pequeño pueblo alemán.",
      en: "A family saga with a supernatural twist, set in a German town."
    },
    runtime_minutes: "3 Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=Dark",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=Dark",
    filmmaker: { director_name: "Baran bo Odar", avatar: "" },
    keyword_labels: ["Ciencia Ficción", "Thriller", "Misterio"]
  }
];

let content = `
// Añadir array global SERIES_DATA
const SERIES_DATA = ${JSON.stringify(SERIES_BATCH, null, 2)};
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added SERIES_DATA correctly.");
