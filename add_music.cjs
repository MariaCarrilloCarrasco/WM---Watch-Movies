const fs = require('fs');

const MUSIC_LIST = [
  // Lola Indigo
  { movie_identifier: 6001, display_name: "El bachatón", release_year: "Música", average_score: 9.0, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Lola Indigo" }, keyword_labels: ["Lola Indigo", "Pop", "Urbano"] },
  { movie_identifier: 6002, display_name: "Mujer bruja", release_year: "Música", average_score: 8.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Lola Indigo" }, keyword_labels: ["Lola Indigo", "Pop", "Urbano"] },
  { movie_identifier: 6003, display_name: "Lola bunny", release_year: "Música", average_score: 8.8, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Lola Indigo" }, keyword_labels: ["Lola Indigo", "Pop", "Urbano"] },
  
  // Karol G
  { movie_identifier: 6004, display_name: "Ocean", release_year: "Música", average_score: 9.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Karol G" }, keyword_labels: ["Karol G", "Reggaeton"] },
  { movie_identifier: 6005, display_name: "El barco", release_year: "Música", average_score: 9.1, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Karol G" }, keyword_labels: ["Karol G", "Reggaeton"] },
  { movie_identifier: 6006, display_name: "200 Copas", release_year: "Música", average_score: 9.3, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Karol G" }, keyword_labels: ["Karol G", "Reggaeton"] },
  { movie_identifier: 6007, display_name: "Gato malo", release_year: "Música", average_score: 8.7, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Karol G" }, keyword_labels: ["Karol G", "Reggaeton"] },

  // Metrika
  { movie_identifier: 6008, display_name: "Toto de loca", release_year: "Música", average_score: 8.0, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Metrika" }, keyword_labels: ["Metrika", "Urbano"] },
  { movie_identifier: 6009, display_name: "Diva del infierno", release_year: "Música", average_score: 8.2, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Metrika" }, keyword_labels: ["Metrika", "Urbano"] },

  // Luna Ki
  { movie_identifier: 6010, display_name: "Voy a morir", release_year: "Música", average_score: 8.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Luna Ki" }, keyword_labels: ["Luna Ki", "Urbano", "Pop"] },
  { movie_identifier: 6011, display_name: "Febrero", release_year: "Música", average_score: 8.3, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Luna Ki" }, keyword_labels: ["Luna Ki", "Urbano", "Pop"] },
  { movie_identifier: 6012, display_name: "Bomba de amor", release_year: "Música", average_score: 8.6, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Luna Ki" }, keyword_labels: ["Luna Ki", "Urbano", "Pop"] },

  // Bad Gyal, Becky G, Natti Natasha
  { movie_identifier: 6013, display_name: "Oh Daddy", release_year: "Música", average_score: 9.2, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Natti Natasha" }, keyword_labels: ["Natti Natasha", "Reggaeton"] },
  { movie_identifier: 6014, display_name: "Fiebre", release_year: "Música", average_score: 8.9, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Bad Gyal" }, keyword_labels: ["Bad Gyal", "Dancehall"] },
  { movie_identifier: 6015, display_name: "Sin Pijama", release_year: "Música", average_score: 9.4, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Becky G" }, keyword_labels: ["Becky G", "Reggaeton"] },
  
  // Maria Escarmiento
  { movie_identifier: 6016, display_name: "Forever", release_year: "Música", average_score: 8.4, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Maria Escarmiento" }, keyword_labels: ["Maria Escarmiento", "Urbano"] },

  // Bad Bunny
  { movie_identifier: 6017, display_name: "Nueva YooL", release_year: "Música", average_score: 9.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Bad Bunny" }, keyword_labels: ["Bad Bunny", "Reggaeton"] },
  { movie_identifier: 6018, display_name: "Debí Tirar Más Fotos", release_year: "Música", average_score: 9.6, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Bad Bunny" }, keyword_labels: ["Bad Bunny", "Reggaeton"] },
  { movie_identifier: 6019, display_name: "MoscuMule", release_year: "Música", average_score: 9.8, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Bad Bunny" }, keyword_labels: ["Bad Bunny", "Reggaeton"] }
];

let content = `
// Añadir MUSIC_DATA
if (typeof MUSIC_DATA === 'undefined') {
  var MUSIC_DATA = ${JSON.stringify(MUSIC_LIST, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video
    return item;
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added MUSIC_DATA.");
