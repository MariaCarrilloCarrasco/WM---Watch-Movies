const fs = require('fs');

const NEW_TERTULIA = [
  {
    id: 7004,
    title: "Tertulia: Inteligencia emocional y liderazgo humano",
    date: "Jueves 23 de julio, 18:00h",
    location: "Fundación Mujeres",
    image: "https://placehold.co/800x400/8e44ad/ffffff?text=Tertulia+Inteligencia+Emocional",
    type: "Charla/Debate",
    category: "Emprendimiento"
  }
];

let content = `
// Añadir Tertulia a Eventos
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...(${JSON.stringify(NEW_TERTULIA, null, 2)}));
} else {
  const EVENTS_DATA = ${JSON.stringify(NEW_TERTULIA, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Tertulia correctly.");
