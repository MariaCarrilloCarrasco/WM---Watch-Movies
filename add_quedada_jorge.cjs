const fs = require('fs');

const QUEDADA_JORGE = [
  {
    movie_identifier: 6004,
    display_name: "Quedada con Jorge",
    release_year: 2026,
    average_score: 9.0,
    category_type: "Quedada",
    synopsis_text: {
      es: "Plan para quedar con Jorge.",
      en: "Meetup plan with Jorge."
    },
    runtime_minutes: "Por confirmar",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Quedada+con+Jorge",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Quedada+con+Jorge",
    filmmaker: { director_name: "Jorge", avatar: "" },
    keyword_labels: ["Ocio", "Social"]
  }
];

let content = `
// Añadir Quedada Jorge
QUEDADAS_DATA.push(...(${JSON.stringify(QUEDADA_JORGE, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Quedada Jorge correctly.");
