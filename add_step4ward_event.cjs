const fs = require('fs');

const STEP4WARD_EVENT = [
  {
    id: 7006,
    title: "Step4ward Madrid: Girls, Tech and Beers",
    date: "Jueves 30 Julio, 18:30h",
    location: "Montreal, Calle Lola de Membrives, Madrid",
    image: "https://placehold.co/800x400/9b59b6/ffffff?text=Girls+Tech+Beers",
    type: "Networking/Tech",
    category: "TICs"
  }
];

let content = `
// Añadir Evento Step4ward
if (typeof EVENTS_DATA !== 'undefined') {
  EVENTS_DATA.push(...(${JSON.stringify(STEP4WARD_EVENT, null, 2)}));
} else {
  const EVENTS_DATA = ${JSON.stringify(STEP4WARD_EVENT, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Step4ward Event correctly.");
