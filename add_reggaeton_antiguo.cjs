const fs = require('fs');

const NEW_MUSIC = [
  // Daddy Yankee
  { movie_identifier: 6022, display_name: "Gasolina", release_year: "Música", average_score: 9.8, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Daddy Yankee" }, keyword_labels: ["Daddy Yankee", "Reggaeton Antiguo"] },
  { movie_identifier: 6023, display_name: "Lo Que Pasó, Pasó", release_year: "Música", average_score: 9.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Daddy Yankee" }, keyword_labels: ["Daddy Yankee", "Reggaeton Antiguo"] },
  
  // Don Omar
  { movie_identifier: 6024, display_name: "Danza Kuduro", release_year: "Música", average_score: 9.6, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Don Omar" }, keyword_labels: ["Don Omar", "Reggaeton Antiguo"] },
  { movie_identifier: 6025, display_name: "Salió El Sol", release_year: "Música", average_score: 9.3, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Don Omar" }, keyword_labels: ["Don Omar", "Reggaeton Antiguo"] },
  
  // Romeo Santos
  { movie_identifier: 6026, display_name: "Dardos", release_year: "Música", average_score: 9.0, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Romeo Santos" }, keyword_labels: ["Romeo Santos", "Reggaeton Antiguo", "Bachata"] },
  { movie_identifier: 6027, display_name: "Bebo", release_year: "Música", average_score: 9.1, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Romeo Santos" }, keyword_labels: ["Romeo Santos", "Reggaeton Antiguo", "Bachata"] }
];

let content = `
if (typeof MUSIC_DATA !== 'undefined') {
  const newItems = ${JSON.stringify(NEW_MUSIC, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/e84393/ffffff?text=' + encodeURIComponent(coverText);
    item.video_url = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; 
    return item;
  });
  MUSIC_DATA.push(...newItems);
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Reggaeton Antiguo artists and songs.");
