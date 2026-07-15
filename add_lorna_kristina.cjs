const fs = require('fs');

const NEW_MUSIC = [
  { movie_identifier: 6020, display_name: "Papi Chulo", release_year: "Música", average_score: 9.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Lorna" }, keyword_labels: ["Lorna", "Reggaeton Antiguo"] },
  { movie_identifier: 6021, display_name: "Canción de Kristina", release_year: "Música", average_score: 8.5, category_type: "Música", synopsis_text: { es: "Videoclip oficial" }, filmmaker: { director_name: "Kristina" }, keyword_labels: ["Kristina", "Pop"] }
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
console.log("Added Lorna and Kristina.");
