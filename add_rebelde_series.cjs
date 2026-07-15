const fs = require('fs');

const REBELDE_SERIES = [
  {
    movie_identifier: 3017,
    display_name: "Rebelde",
    release_year: 2004,
    average_score: 8.2,
    category_type: "Serie",
    synopsis_text: {
      es: "Seis adolescentes de diferentes clases sociales en el exclusivo Elite Way School descubren que la música es su gran pasión en común.",
      en: "Six teenagers from different social classes at the exclusive Elite Way School discover music as their common passion."
    },
    runtime_minutes: "3 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=Rebelde",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=Rebelde",
    filmmaker: { director_name: "Pedro Damián", avatar: "" },
    keyword_labels: ["Drama", "Romántica"]
  },
  {
    movie_identifier: 3018,
    display_name: "Rebelde Way (Erreway)",
    release_year: 2002,
    average_score: 8.5,
    category_type: "Serie",
    synopsis_text: {
      es: "Cuatro estudiantes del Elite Way School en Buenos Aires forman una banda musical en secreto, enfrentándose a sus padres y profesores.",
      en: "Four students from the Elite Way School in Buenos Aires secretly form a music band."
    },
    runtime_minutes: "2 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Rebelde+Way",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Rebelde+Way",
    filmmaker: { director_name: "Cris Morena", avatar: "" },
    keyword_labels: ["Drama", "Romántica", "Comedia"]
  }
];

let content = `
// Añadir Series Rebelde y Rebelde Way
SERIES_DATA.push(...(${JSON.stringify(REBELDE_SERIES, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Rebelde series correctly.");
