const fs = require('fs');

const EGYPT_EXPO = [
  {
    id: 7002,
    title: "Exposición Inmersiva de Egipto",
    date: "A las 17:30h",
    location: "Madrid",
    image: "https://placehold.co/800x400/f39c12/ffffff?text=Exposici%C3%B3n+Inmersiva+Egipto",
    type: "Exposición/Cultura",
    category: "Cultura"
  }
];

let content = `
// Añadir Expo Egipto a Planes
EXTERNAL_PLANS_DATA.push(...(${JSON.stringify(EGYPT_EXPO, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Egypt Expo correctly.");
