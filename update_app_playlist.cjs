const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

const targetLogic = `function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  if (!grid) return;

  grid.innerHTML = '';

  // Filtrar películas en la lista de seguimiento
  const watchlisted = MOVIES_DATA.filter(movie => {
    return AppState.myListMovies.includes(movie.id);
  });

  if (watchlisted.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    watchlisted.forEach(movie => {
        // Si existe una asignación con imagen, crear un elemento customizado para mayor visibilidad
        const assign = getMovieAssignment(movie.id);
        if (assign && assign.image) {
          const item = document.createElement('div');
          item.className = 'assigned-movie-item';
          item.innerHTML = \`
            <div class="assigned-thumb" style="background-image: url('\${assign.image}')"></div>
            <div class="assigned-meta">
              <div class="assigned-title">\${movie.title}</div>
              <div class="assigned-note">\${assign.note || ''}</div>
            </div>
          \`;
          item.addEventListener('click', () => showMovieDetails(movie));
          grid.appendChild(item);
        } else {
          grid.appendChild(createMovieCardElement(movie));
        }
    });
  }
}`;

const replaceLogic = `function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  const headerActions = document.getElementById('playlist-header-actions');
  const playText = document.getElementById('playlist-play-text');
  if (!grid) return;

  grid.innerHTML = '';
  
  if (playText) {
    playText.textContent = AppState.language === 'es' ? 'Reproducir Todo' : 'Play All';
  }

  // Ordenar películas en la lista de seguimiento según el orden en que se añadieron
  // (myListMovies guarda los IDs en orden de inserción)
  const watchlisted = [];
  AppState.myListMovies.forEach(id => {
    const movie = MOVIES_DATA.find(m => m.id === id);
    if (movie) watchlisted.push(movie);
  });

  if (watchlisted.length === 0) {
    grid.style.display = 'none';
    if (headerActions) headerActions.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = 'flex';
    if (headerActions) headerActions.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    watchlisted.forEach((movie, index) => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      
      const thumbUrl = movie.thumbnail_url || (movie.images && movie.images.length > 0 ? movie.images[0] : 'https://via.placeholder.com/48x48?text=No+Image');
      const year = movie.year || (movie.release_year ? movie.release_year : '2024');
      const genre = Array.isArray(movie.genres) ? movie.genres[0] : (movie.category_type ? movie.category_type.split(',')[0] : 'Cine');
      
      item.innerHTML = \`
        <div class="playlist-index">\${index + 1}</div>
        <div class="playlist-thumb" style="background-image: url('\${thumbUrl}')"></div>
        <div class="playlist-details">
          <div class="playlist-title">\${movie.title}</div>
          <div class="playlist-meta">\${year} • \${genre}</div>
        </div>
        <div class="playlist-actions">
          <button class="playlist-play-btn" title="\${AppState.language === 'es' ? 'Reproducir' : 'Play'}">
            ▶
          </button>
          <button class="playlist-remove-btn" title="\${AppState.language === 'es' ? 'Quitar de la lista' : 'Remove from list'}">
            ✕
          </button>
        </div>
      \`;

      // Clic en la carátula o detalles abre la ficha
      item.querySelector('.playlist-thumb').addEventListener('click', () => showMovieDetails(movie));
      item.querySelector('.playlist-details').addEventListener('click', () => showMovieDetails(movie));

      // Clic en Play reproduce el trailer (simulado abriendo ficha y haciendo clic en trailer)
      item.querySelector('.playlist-play-btn').addEventListener('click', () => {
        showMovieDetails(movie);
        setTimeout(() => {
          const trailerBtn = document.getElementById('detail-trailer-btn');
          if (trailerBtn) trailerBtn.click();
        }, 300);
      });

      // Clic en eliminar quita de la lista y recarga
      item.querySelector('.playlist-remove-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMyList(movie.id);
      });

      grid.appendChild(item);
    });
  }
}

// Reproducción automática de toda la lista (Abre la primera y simula)
window.playAllMyList = function() {
  if (AppState.myListMovies && AppState.myListMovies.length > 0) {
    const firstId = AppState.myListMovies[0];
    const movie = MOVIES_DATA.find(m => m.id === firstId);
    if (movie) {
      showMovieDetails(movie);
      setTimeout(() => {
        const trailerBtn = document.getElementById('detail-trailer-btn');
        if (trailerBtn) trailerBtn.click();
      }, 500);
    }
  }
};
`;

appJs = appJs.replace(targetLogic, replaceLogic);
fs.writeFileSync(appJsPath, appJs);
console.log('Playlist rendering logic updated');
