const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const correctRouting = `function handleRouting() {
  const hash = window.location.hash;
  const isEs = AppState.language === 'es';

  if (hash.startsWith('#person/')) {
    const personName = decodeURIComponent(hash.substring(8)).replace(/-/g, ' ');
    const normalizedPerson = personName.toLowerCase().trim();
    const hasPerson = PERSON_PROFILE_DATA[normalizedPerson] || MOVIES_DATA.some(m => m.director && m.director.name.toLowerCase() === normalizedPerson) || MOVIES_DATA.some(m => m.cast.some(actor => actor.name.toLowerCase() === normalizedPerson));
    if (hasPerson) {
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
  }
}`;

let lines = code.split('\n');
let startIdx = lines.findIndex(l => l.startsWith('function handleRouting() {'));
let endIdx = lines.findIndex((l, i) => i > startIdx && l.startsWith('window.closePersonModal = closePersonModal;'));

if (startIdx !== -1 && endIdx !== -1) {
  // Replace everything between startIdx and endIdx - 1
  lines.splice(startIdx, endIdx - startIdx, correctRouting, '');
  code = lines.join('\n');
}

fs.writeFileSync('app.js', code);
console.log('Fixed handleRouting again!');
