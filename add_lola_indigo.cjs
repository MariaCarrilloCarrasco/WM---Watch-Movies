const fs = require('fs');

const NEW_CONCERT = [
  {
    id: 8001,
    title: "Lola Índigo en Concierto",
    date: "5 de septiembre, 19:30h",
    location: "Huerta del Obispo, Calle Cardenal Sandoval y Rojas, Alcalá de Henares",
    image: "https://placehold.co/800x400/9b59b6/ffffff?text=Lola+%C3%8Dndigo",
    type: "Concierto",
    category: "urbano"
  }
];

let content = `
// Añadir Concierto Lola Indigo
if (typeof CONCERTS_DATA !== 'undefined') {
  CONCERTS_DATA.push(...(${JSON.stringify(NEW_CONCERT, null, 2)}));
} else {
  const CONCERTS_DATA = ${JSON.stringify(NEW_CONCERT, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Lola Indigo concert correctly.");
