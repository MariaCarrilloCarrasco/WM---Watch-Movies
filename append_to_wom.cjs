const fs = require('fs');
const code = fs.readFileSync('append_modals.cjs', 'utf-8');
fs.appendFileSync('js/wom.js', '\n' + code);
console.log("Appended logic to wom.js");
