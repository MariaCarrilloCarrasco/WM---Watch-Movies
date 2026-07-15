const fs = require('fs');

const CUMPLE_IVAN = [
  {
    movie_identifier: 6006,
    display_name: "Cumpleaños de Iván",
    release_year: 2026,
    average_score: 10.0,
    category_type: "Quedada",
    synopsis_text: {
      es: "¡Celebración del cumpleaños de Iván! 🎂🥳",
      en: "Iván's birthday celebration! 🎂🥳"
    },
    runtime_minutes: "Lunes 27",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    cover_image_url: "https://placehold.co/600x900/f1c40f/333333?text=Cumplea%C3%B1os+de+Iv%C3%A1n",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Ocio", "Social", "Cumpleaños"]
  }
];

let content = `
// Añadir Cumple de Ivan
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.push(...(${JSON.stringify(CUMPLE_IVAN, null, 2)}));
} else {
  const QUEDADAS_DATA = ${JSON.stringify(CUMPLE_IVAN, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Cumple Ivan correctly.");
