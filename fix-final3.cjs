const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Fix the bad literal \n that I just introduced
code = code.replace("function openTrailerModal(movieId) {\\n  const isEs = AppState.language === 'es';\\n  const movie = MOVIES_DATA.find(m => m.id === Number(movieId));\\n  if (!movie) return;", 
`function openTrailerModal(movieId) {
  const isEs = AppState.language === 'es';
  const movie = MOVIES_DATA.find(m => m.id === Number(movieId));
  if (!movie) return;`);

fs.writeFileSync('app.js', code);
console.log('Fixed syntax!');
