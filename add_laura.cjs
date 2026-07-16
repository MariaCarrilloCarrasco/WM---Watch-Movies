const fs = require('fs');

const NEW_SERIES = [
  { 
    movie_identifier: 7001, 
    display_name: "Los Misterios de Laura", 
    release_year: 2009, 
    average_score: 8.5, 
    category_type: "Serie", 
    synopsis_text: { es: "Laura Lebrel es una brillante inspectora de policía que compagina su carrera profesional con su vida personal." }, 
    filmmaker: { director_name: "Javier Holgado" }, 
    keyword_labels: ["Misterio", "Comedia", "Crimen"] 
  }
];

let content = `
if (typeof SERIES_DATA !== 'undefined') {
  const newItems = ${JSON.stringify(NEW_SERIES, null, 2)}.map(item => {
    let coverText = item.display_name + '\\n' + item.filmmaker.director_name;
    item.cover_image_url = 'https://placehold.co/600x900/2980b9/ffffff?text=' + encodeURIComponent(coverText);
    item.bg_image_url = 'https://placehold.co/1200x600/2980b9/ffffff?text=' + encodeURIComponent(coverText);
    return item;
  });
  SERIES_DATA.push(...newItems);
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Los Misterios de Laura to series.");
