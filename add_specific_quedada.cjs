const fs = require('fs');

const QUEDADA_MERCADONA = [
  {
    movie_identifier: 6001,
    display_name: "Quedada miércoles 4h Mercadona magna",
    release_year: 2026,
    average_score: 10.0,
    category_type: "Quedada",
    synopsis_text: {
      es: "Encuentro de amigos (María C 🥳, Jess 😘, Rober 🤗, Iván 😁) el miércoles a las 4h en el Mercadona Magna. 👑 👏🏼 🏰",
      en: "Friends meetup (María C 🥳, Jess 😘, Rober 🤗, Iván 😁) on Wednesday at 4h at Mercadona Magna. 👑 👏🏼 🏰"
    },
    runtime_minutes: "Miércoles 4h",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/1abc9c/ffffff?text=Quedada+Mercadona+Magna",
    cover_image_url: "https://placehold.co/600x900/1abc9c/ffffff?text=Quedada+Mercadona+Magna",
    filmmaker: { director_name: "Amigos", avatar: "" },
    keyword_labels: ["Ocio", "Social"]
  }
];

let content = `
// Añadir Quedada Mercadona Magna
QUEDADAS_DATA.push(...(${JSON.stringify(QUEDADA_MERCADONA, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Quedada Mercadona correctly.");
