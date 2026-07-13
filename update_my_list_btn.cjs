const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

const targetLogic = `        newListBtn.addEventListener('click', () => {
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

const replaceLogic = `        newListBtn.addEventListener('click', () => {
          // Directamente añade/quita de la lista por defecto
          toggleMyList(movie.id);
          const isWatchlistedNow = AppState.myListMovies.includes(movie.id);
          const isEsNow = AppState.language === 'es';
          newListBtn.classList.toggle('watchlisted', isWatchlistedNow);
          const label = isWatchlistedNow 
            ? (isEsNow ? 'Quitar Lista' : 'Remove List') 
            : (isEsNow ? 'Mi Lista' : 'My List');
          newListBtn.innerHTML = \`📁 <span>\${label}</span>\`;
          
          // Si el usuario quiere guardar en otra lista personalizada, podríamos añadir otro botón aquí o en el perfil, 
          // pero restauramos la experiencia directa a "Mi Lista" según pidió.
        });`;

appJs = appJs.replace(targetLogic, replaceLogic);
fs.writeFileSync(appJsPath, appJs);
console.log('toggleMyList direct action restored');
