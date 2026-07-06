const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Find openTrailerModal and fix the duplicate isEs
const lines = code.split('\n');
const startIndex = lines.findIndex(l => l.includes('function openTrailerModal(movie) {'));

if (startIndex !== -1) {
  let isEsCount = 0;
  for (let i = startIndex; i < startIndex + 30; i++) {
    if (lines[i] && lines[i].includes("const isEs = AppState.language === 'es';")) {
      isEsCount++;
      if (isEsCount > 1) {
        lines[i] = ""; // remove the duplicate
      }
    }
  }
  code = lines.join('\n');
}

fs.writeFileSync('app.js', code);
console.log('Fixed isEs duplicate!');
