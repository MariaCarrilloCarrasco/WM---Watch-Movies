const fs = require('fs');

const AFTERWORK_EVENT = [
  {
    id: 7001,
    title: "Afterwork, talk and drinks: ¿Puede la astrología influir en tu negocio?",
    date: "Miércoles 22 de julio, 19:30h",
    location: "Gallobúho, Plaza de las Salesas 7, Centro Madrid",
    image: "https://placehold.co/800x400/9b59b6/ffffff?text=Afterwork+Astrologia+Negocios",
    type: "Networking/Afterwork",
    category: "Emprendimiento"
  }
];

let content = `
// Añadir evento Afterwork Astrologia
EVENTS_DATA.push(...(${JSON.stringify(AFTERWORK_EVENT, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Afterwork Event correctly.");
