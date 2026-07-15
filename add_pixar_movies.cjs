const fs = require('fs');

const NEW_PIXAR_MOVIES = [
  {
    movie_identifier: 4005,
    display_name: "Inside Out (Del revés)",
    release_year: 2015,
    average_score: 8.9,
    category_type: "Animación/Comedia",
    synopsis_text: {
      es: "Las cinco emociones principales de una niña compiten por tomar el control de su mente cuando su familia se muda a una nueva ciudad.",
      en: "A young girl's five core emotions compete for control of her mind when her family moves to a new city."
    },
    runtime_minutes: "1h 35m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/ffffff?text=Inside+Out",
    cover_image_url: "https://placehold.co/600x900/f1c40f/ffffff?text=Inside+Out",
    filmmaker: { director_name: "Pete Docter", avatar: "" },
    keyword_labels: ["Animación", "Familiar", "Aventura"]
  },
  {
    movie_identifier: 4006,
    display_name: "Soul",
    release_year: 2020,
    average_score: 8.6,
    category_type: "Animación/Fantasía",
    synopsis_text: {
      es: "Un músico de jazz sufre un accidente que separa su alma de su cuerpo, llevándole al lugar donde se forman las almas antes de nacer.",
      en: "A jazz musician suffers an accident that separates his soul from his body, taking him to the place where souls are formed."
    },
    runtime_minutes: "1h 40m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=Soul",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=Soul",
    filmmaker: { director_name: "Pete Docter", avatar: "" },
    keyword_labels: ["Animación", "Drama", "Música"]
  },
  {
    movie_identifier: 4007,
    display_name: "Luca",
    release_year: 2021,
    average_score: 8.4,
    category_type: "Animación/Aventura",
    synopsis_text: {
      es: "Dos monstruos marinos adolescentes disfrazados de humanos experimentan un verano inolvidable en un pueblo de la Riviera italiana.",
      en: "Two teenage sea monsters disguised as humans experience an unforgettable summer on the Italian Riviera."
    },
    runtime_minutes: "1h 35m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Luca",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Luca",
    filmmaker: { director_name: "Enrico Casarosa", avatar: "" },
    keyword_labels: ["Animación", "Familiar", "Comedia"]
  }
];

let content = `
// Añadir Peliculas Pixar
RAW_EXTERNAL_MOVIES_API_DATA.push(...(${JSON.stringify(NEW_PIXAR_MOVIES, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Pixar movies correctly.");
