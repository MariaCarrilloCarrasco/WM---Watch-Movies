const fs = require('fs');

const QUEDADA_CENA = [
  {
    movie_identifier: 6002,
    display_name: "Quedada Viernes 17: Cena Bar La Esperanza",
    release_year: 2026,
    average_score: 9.5,
    category_type: "Quedada",
    synopsis_text: {
      es: "Cena de viernes a las 10:30h en el Bar La Esperanza. Asistentes confirmados: Manuel, Joana y María C.",
      en: "Friday dinner at 10:30 PM at Bar La Esperanza. Confirmed attendees: Manuel, Joana, and María C."
    },
    runtime_minutes: "Viernes 17, 10:30h",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/c0392b/ffffff?text=Cena+Bar+La+Esperanza",
    cover_image_url: "https://placehold.co/600x900/c0392b/ffffff?text=Cena+Bar+La+Esperanza",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Ocio", "Social", "Gastronomía"]
  }
];

let content = `
// Añadir Quedada Cena Bar La Esperanza
QUEDADAS_DATA.push(...(${JSON.stringify(QUEDADA_CENA, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Quedada Cena Bar La Esperanza correctly.");
