const fs = require('fs');

const VIAJES_BATCH = [
  {
    movie_identifier: 9001,
    display_name: "Pack Verano: Playa Grau de Castellón",
    release_year: 2026,
    average_score: 9.0,
    category_type: "Viaje",
    synopsis_text: {
      es: "Viaje de verano a la playa de Grau de Castellón. Asistentes: Rober y Jess.",
      en: "Summer trip to Grau de Castellón beach. Attendees: Rober and Jess."
    },
    runtime_minutes: "Verano",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Playa+Grau+de+Castell%C3%B3n",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Playa+Grau+de+Castell%C3%B3n",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Playa", "Escapada"]
  },
  {
    movie_identifier: 9002,
    display_name: "Viaje Jorge: Pack Smartbox Felicidad para Dos",
    release_year: 2026,
    average_score: 10.0,
    category_type: "Viaje",
    synopsis_text: {
      es: "Vale por estancias con desayuno, cenas románticas, tratamientos de bienestar o actividades de aventura.",
      en: "Voucher for stays with breakfast, romantic dinners, wellness treatments, or adventure activities."
    },
    runtime_minutes: "Por definir",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=Smartbox+Felicidad+para+Dos",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=Smartbox+Felicidad+para+Dos",
    filmmaker: { director_name: "Jorge", avatar: "" },
    keyword_labels: ["Relax", "Aventura", "Escapada"]
  }
];

let content = `
// Añadir array global VIAJES_DATA
const VIAJES_DATA = ${JSON.stringify(VIAJES_BATCH, null, 2)};
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added VIAJES_DATA correctly.");
