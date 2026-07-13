const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\r\n/g, '\n');

const targetHtml = `      <!-- Cuadrícula de películas en mi lista -->
      <div class="movies-grid" id="mylist-movies-grid">
        <!-- Renderizado dinámicamente mediante JS -->
      </div>`;

const replaceHtml = `      <!-- Acciones de Playlist -->
      <div class="playlist-header-actions" id="playlist-header-actions" style="display: none;">
        <button class="playlist-play-all-btn" onclick="playAllMyList()">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <span id="playlist-play-text">Reproducir Todo</span>
        </button>
      </div>

      <!-- Contenedor de películas tipo playlist -->
      <div class="playlist-container" id="mylist-movies-grid">
        <!-- Renderizado dinámicamente mediante JS -->
      </div>`;

html = html.replace(targetHtml, replaceHtml);
fs.writeFileSync(indexPath, html);
console.log('Playlist HTML updated in index.html');
