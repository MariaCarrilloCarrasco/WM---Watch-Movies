const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `        newListBtn.addEventListener('click', () => {
          toggleMyList(movie.id);
          const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
          const isEsNow = AppState.language === 'es';
          newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
          const label = isWatchlistedNow 
            ? (isEsNow ? 'Quitar Lista' : 'Remove List') 
            : (isEsNow ? 'Mi Lista' : 'My List');
          newListBtn.innerHTML = \`📁 <span>\${label}</span>\`;
        });`;

const r1 = `        newListBtn.addEventListener('click', () => {
          if (typeof window.openAddToListModal === 'function') {
            window.openAddToListModal(movie.id);
          } else {
            toggleMyList(movie.id);
            const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
            const isEsNow = AppState.language === 'es';
            newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
            const label = isWatchlistedNow 
              ? (isEsNow ? 'Quitar Lista' : 'Remove List') 
              : (isEsNow ? 'Mi Lista' : 'My List');
            newListBtn.innerHTML = \`📁 <span>\${label}</span>\`;
          }
        });`;

appJs = appJs.replace(t1, r1);
fs.writeFileSync(appJsPath, appJs);
console.log('Wired detail-list-btn to openAddToListModal');
