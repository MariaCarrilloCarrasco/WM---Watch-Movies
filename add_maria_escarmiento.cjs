const fs = require('fs');

const NEW_CONCERT = [
  {
    id: 8002,
    title: "María Escarmiento: Forever on Tour",
    date: "Domingo 13 de diciembre, 20:00h",
    location: "Sala Riviera, Madrid",
    image: "https://placehold.co/800x400/e74c3c/ffffff?text=Mar%C3%ADa+Escarmiento",
    type: "Concierto",
    category: "pop"
  }
];

let content = `
// Añadir Concierto María Escarmiento
if (typeof CONCERTS_DATA !== 'undefined') {
  CONCERTS_DATA.push(...(${JSON.stringify(NEW_CONCERT, null, 2)}));
} else {
  const CONCERTS_DATA = ${JSON.stringify(NEW_CONCERT, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added María Escarmiento concert correctly.");
