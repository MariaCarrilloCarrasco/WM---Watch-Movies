const fs = require('fs');

const QUEDADA_PISCINA = [
  {
    movie_identifier: 6003,
    display_name: "Quedada Piscina y Cena Casa Perico",
    release_year: 2026,
    average_score: 9.8,
    category_type: "Quedada",
    synopsis_text: {
      es: "Planazo de piscina y cena en Casa Perico. Asistentes confirmados: Perico, Zuli, Ana y María C.",
      en: "Pool and dinner plan at Casa Perico. Confirmed attendees: Perico, Zuli, Ana, and María C."
    },
    runtime_minutes: "Día completo",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Piscina+y+Cena+Casa+Perico",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Piscina+y+Cena+Casa+Perico",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Ocio", "Social", "Verano"]
  }
];

let content = `
// Añadir Quedada Piscina
QUEDADAS_DATA.push(...(${JSON.stringify(QUEDADA_PISCINA, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Quedada Piscina correctly.");
