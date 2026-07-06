const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// 1. Fix the deleted handleRouting logic
if (code.includes(`    if (hasPerson) {
      showPersonDetails(personName);
    } else {
    switchTab('home');
  }`)) {
  
  // It deleted exactly this block. We must restore it!
  const restoredRouting = `    if (hasPerson) {
      showPersonDetails(personName);
    } else {
      showEntityNotFoundModal(isEs ? 'persona' : 'person', personName);
    }
    return;
  }

  if (hash.startsWith('#movie-')) {
    const movieIdStr = hash.replace('#movie-', '');
    const movieId = Number(movieIdStr);
    const movie = MOVIES_DATA.find(m => m.id === movieId);
    if (movie) {
      closePersonModal(false);
      showMovieDetails(movie);
      return;
    }
    showEntityNotFoundModal(isEs ? 'película' : 'movie', movieIdStr);
    return;
  }

  closePersonModal(false);
  if (AppState.currentTab === 'details') {
    switchTab('home');
  }`;
  
  code = code.replace(`    if (hasPerson) {
      showPersonDetails(personName);
    } else {
    switchTab('home');
  }`, restoredRouting);
}

// 2. Fix openTrailerModal signature
code = code.replace("function openTrailerModal(movieId) {", "function openTrailerModal(movie) {\n  const isEs = AppState.language === 'es';\n  if (!movie) return;");
// Remove the extra line I inserted before: `const movie = MOVIES_DATA.find(m => m.id === Number(movieId));\n  if (!movie) return;`
code = code.replace("const movie = MOVIES_DATA.find(m => m.id === Number(movieId));\n  if (!movie) return;", "");

fs.writeFileSync('app.js', code);
console.log('Restored handleRouting and openTrailerModal!');
