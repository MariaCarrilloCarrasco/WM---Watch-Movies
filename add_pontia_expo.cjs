const fs = require('fs');

const NEW_EXPO = [
  {
    id: 7003,
    title: "Exposición PontIA",
    date: "Fecha por confirmar",
    location: "Talent Garden Madrid, Calle de Juan de Mariana",
    image: "https://placehold.co/800x400/2980b9/ffffff?text=Exposici%C3%B3n+PontIA",
    type: "Exposición/Tecnología",
    category: "Cultura"
  }
];

let content = `
// Añadir Expo PontIA a Planes
if (typeof EXTERNAL_PLANS_DATA !== 'undefined') {
  EXTERNAL_PLANS_DATA.push(...(${JSON.stringify(NEW_EXPO, null, 2)}));
} else {
  const EXTERNAL_PLANS_DATA = ${JSON.stringify(NEW_EXPO, null, 2)};
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added PontIA Expo correctly.");
