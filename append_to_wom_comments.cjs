const fs = require('fs');
const code = fs.readFileSync('append_comments.cjs', 'utf-8');
fs.appendFileSync('js/wom.js', '\n' + code);
console.log("Appended comments logic to wom.js");
