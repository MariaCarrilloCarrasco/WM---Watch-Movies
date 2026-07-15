const fs = require('fs');

let content = `
// Añadir array global QUEDADAS_DATA vacío por defecto
const QUEDADAS_DATA = [];
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added QUEDADAS_DATA skeleton correctly.");
