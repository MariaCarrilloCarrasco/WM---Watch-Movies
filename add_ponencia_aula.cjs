const fs = require('fs');

const NEW_PONENCIA = [
  {
    id: 7005,
    title: "Ponencia: Cómo perder el miedo en el aula inclusiva y ganar seguridad",
    date: "Martes 21 de julio, 18:00h",
    location: "Online",
    image: "https://placehold.co/800x400/1abc9c/ffffff?text=Aula+Inclusiva",
    type: "Charla/Ponencia",
    category: "Accesibilidad"
  }
];

let content = `
// Añadir Ponencia Aula Inclusiva
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...(${JSON.stringify(NEW_PONENCIA, null, 2)}));
} else {
  const EVENTS_DATA = ${JSON.stringify(NEW_PONENCIA, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Ponencia correctly.");
