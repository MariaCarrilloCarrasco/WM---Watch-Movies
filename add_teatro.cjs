const fs = require('fs');

const THEATER_LIST = [
  // Drama
  { movie_identifier: 3001, display_name: "El tiempo entre costuras", release_year: "Teatro", average_score: 9.0, category_type: "Teatro", synopsis_text: { es: "Adaptación de la aclamada novela." }, filmmaker: { director_name: "Drama" }, keyword_labels: ["Drama"] },
  { movie_identifier: 3002, display_name: "Se ha escrito un crimen", release_year: "Teatro", average_score: 8.5, category_type: "Teatro", synopsis_text: { es: "Un misterio que resolver." }, filmmaker: { director_name: "Drama" }, keyword_labels: ["Drama", "Alternativo"] },
  { movie_identifier: 3003, display_name: "Timon de Atenas", release_year: "Teatro", average_score: 9.2, category_type: "Teatro", synopsis_text: { es: "Clásico de Shakespeare." }, filmmaker: { director_name: "Clásico" }, keyword_labels: ["Drama", "Clásico"] },
  { movie_identifier: 3004, display_name: "Montar Godot", release_year: "Teatro", average_score: 8.8, category_type: "Teatro", synopsis_text: { es: "Comedia alternativa y drama sobre el propio teatro." }, filmmaker: { director_name: "Alternativo" }, keyword_labels: ["Drama", "Alternativo"] },
  { movie_identifier: 3005, display_name: "No eres nadie hasta que te disparan", release_year: "Teatro", average_score: 8.9, category_type: "Teatro", synopsis_text: { es: "Drama contemporáneo." }, filmmaker: { director_name: "Alternativo" }, keyword_labels: ["Drama", "Alternativo"] },
  
  // Comedia
  { movie_identifier: 3006, display_name: "Los del camping", release_year: "Teatro", average_score: 8.4, category_type: "Teatro", synopsis_text: { es: "Risas garantizadas." }, filmmaker: { director_name: "Comedia" }, keyword_labels: ["Comedia"] },
  { movie_identifier: 3007, display_name: "Cabaret Desmadre", release_year: "Teatro", average_score: 9.1, category_type: "Teatro", synopsis_text: { es: "Comedia irreverente." }, filmmaker: { director_name: "Comedia" }, keyword_labels: ["Comedia", "Alternativo"] },
  { movie_identifier: 3008, display_name: "Gutenberg! El mejor musical del mundo", release_year: "Teatro", average_score: 9.5, category_type: "Teatro", synopsis_text: { es: "Comedia musical fantástica." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Comedia", "Musical"] },
  { movie_identifier: 3009, display_name: "Pero no se lo digas", release_year: "Teatro", average_score: 8.7, category_type: "Teatro", synopsis_text: { es: "Enredos y mentiras." }, filmmaker: { director_name: "Comedia" }, keyword_labels: ["Comedia"] },
  { movie_identifier: 3010, display_name: "La loca historia de la literatura", release_year: "Teatro", average_score: 9.3, category_type: "Teatro", synopsis_text: { es: "Un repaso divertido." }, filmmaker: { director_name: "Comedia" }, keyword_labels: ["Comedia"] },
  
  // Musicales
  { movie_identifier: 3011, display_name: "El Rey León", release_year: "Teatro", average_score: 9.8, category_type: "Teatro", synopsis_text: { es: "El gran clásico de la Gran Vía." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical", "Infantil"] },
  { movie_identifier: 3012, display_name: "Los Miserables", release_year: "Teatro", average_score: 9.7, category_type: "Teatro", synopsis_text: { es: "Un hito de los musicales." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical", "Drama"] },
  { movie_identifier: 3013, display_name: "Sonrisas y Lágrimas", release_year: "Teatro", average_score: 9.2, category_type: "Teatro", synopsis_text: { es: "El musical para toda la familia." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical", "Infantil"] },
  { movie_identifier: 3014, display_name: "Cleopatra enamorada", release_year: "Teatro", average_score: 8.6, category_type: "Teatro", synopsis_text: { es: "Historia y música." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical"] },
  { movie_identifier: 3015, display_name: "Ras Leela: Una odisea Bollywood", release_year: "Teatro", average_score: 8.9, category_type: "Teatro", synopsis_text: { es: "Ritmo, color y danza." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical"] },
  { movie_identifier: 3016, display_name: "Libre", release_year: "Teatro", average_score: 8.5, category_type: "Teatro", synopsis_text: { es: "Musical tributo." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical"] },
  { movie_identifier: 3017, display_name: "Continúa la fiesta", release_year: "Teatro", average_score: 8.8, category_type: "Teatro", synopsis_text: { es: "Gran despliegue musical." }, filmmaker: { director_name: "Musical" }, keyword_labels: ["Musical"] },
  
  // Clásico
  { movie_identifier: 3018, display_name: "Esperando a Godot", release_year: "Teatro", average_score: 9.4, category_type: "Teatro", synopsis_text: { es: "El clásico de Beckett." }, filmmaker: { director_name: "Clásico" }, keyword_labels: ["Clásico", "Drama"] },
  { movie_identifier: 3019, display_name: "El escondido y la tapada", release_year: "Teatro", average_score: 8.5, category_type: "Teatro", synopsis_text: { es: "Clásico de Calderón de la Barca." }, filmmaker: { director_name: "Clásico" }, keyword_labels: ["Clásico"] },
  { movie_identifier: 3020, display_name: "Obras de Calderón y Shakespeare", release_year: "Teatro", average_score: 9.6, category_type: "Teatro", synopsis_text: { es: "Recopilación de los grandes maestros." }, filmmaker: { director_name: "Clásico" }, keyword_labels: ["Clásico"] },
  
  // Zarzuela
  { movie_identifier: 3021, display_name: "La magia de la zarzuela", release_year: "Teatro", average_score: 9.1, category_type: "Teatro", synopsis_text: { es: "Antología de nuestra lírica." }, filmmaker: { director_name: "Zarzuela" }, keyword_labels: ["Zarzuela"] },
  { movie_identifier: 3022, display_name: "Ópera & Zarzuela Dreams", release_year: "Teatro", average_score: 9.0, category_type: "Teatro", synopsis_text: { es: "Recital inolvidable." }, filmmaker: { director_name: "Zarzuela" }, keyword_labels: ["Zarzuela", "Musical"] },
  
  // Infantil
  { movie_identifier: 3023, display_name: "La caja musical", release_year: "Teatro", average_score: 8.4, category_type: "Teatro", synopsis_text: { es: "Para los más pequeños." }, filmmaker: { director_name: "Infantil" }, keyword_labels: ["Infantil", "Familiar"] }
];

const MONOLOGUES_LIST = [
  { movie_identifier: 3501, display_name: "La noche de los monólogos", release_year: "Humor", average_score: 9.2, category_type: "Monólogos", synopsis_text: { es: "Risas garantizadas." }, filmmaker: { director_name: "Monólogo" }, keyword_labels: ["Humor", "Monólogo"] },
  { movie_identifier: 3502, display_name: "MILF: Mujer Inteligente, Libre y Feliz", release_year: "Humor", average_score: 8.9, category_type: "Monólogos", synopsis_text: { es: "Monólogo femenino." }, filmmaker: { director_name: "Monólogo" }, keyword_labels: ["Humor", "Monólogo"] }
];

let content = `
// Generar imágenes y añadir THEATER_DATA
if (typeof THEATER_DATA !== 'undefined') {
  const theaterWithImages = ${JSON.stringify(THEATER_LIST, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.release_year + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/8e44ad/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/8e44ad/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  THEATER_DATA.push(...theaterWithImages);
}

// Generar imágenes y añadir MONOLOGUES_DATA
if (typeof MONOLOGUES_DATA !== 'undefined') {
  const monologuesWithImages = ${JSON.stringify(MONOLOGUES_LIST, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.release_year + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/d35400/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/d35400/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  MONOLOGUES_DATA.push(...monologuesWithImages);
} else {
  var MONOLOGUES_DATA = ${JSON.stringify(MONOLOGUES_LIST, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.release_year + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/d35400/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/d35400/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Teatro and Monologos.");
