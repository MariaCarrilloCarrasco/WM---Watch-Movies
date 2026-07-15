const fs = require('fs');

const QUEDADA_ALCALA = [
  {
    movie_identifier: 6005,
    display_name: "Quedada Jueves 6h Parador de Alcalá de Henares",
    release_year: 2026,
    average_score: 9.6,
    category_type: "Quedada",
    synopsis_text: {
      es: "Plan de tarde: escuchar música y jugar a juegos de mesa en el parque junto al Parador. Asistentes: Jairo y Adam.",
      en: "Afternoon plan: listen to music and play board games in the park near the Parador. Attendees: Jairo and Adam."
    },
    runtime_minutes: "Jueves 6h",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Quedada+Parador+de+Alcal%C3%A1",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Quedada+Parador+de+Alcal%C3%A1",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Ocio", "Social", "Juegos"]
  }
];

let content = `
// Añadir Quedada Alcalá
QUEDADAS_DATA.push(...(${JSON.stringify(QUEDADA_ALCALA, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Quedada Alcala correctly.");
