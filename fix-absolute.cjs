const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Replace /ai_cast/ with ai_cast/ globally
code = code.replace(/"\/ai_cast\//g, '"ai_cast/');

fs.writeFileSync('app.js', code);
console.log('Fixed absolute paths!');
