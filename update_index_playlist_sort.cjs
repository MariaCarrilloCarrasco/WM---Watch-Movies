const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\r\n/g, '\n');

const targetHtml = `      <!-- Acciones de Playlist -->
      <div class="playlist-header-actions" id="playlist-header-actions" style="display: none;">
        <button class="playlist-play-all-btn" onclick="playAllMyList()">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <span id="playlist-play-text">Reproducir Todo</span>
        </button>
      </div>`;

const replaceHtml = `      <!-- Acciones de Playlist -->
      <div class="playlist-header-actions" id="playlist-header-actions" style="display: none; justify-content: space-between; align-items: center;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <button class="playlist-play-all-btn" onclick="playAllMyList()">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            <span id="playlist-play-text">Reproducir Todo</span>
          </button>
          <button class="playlist-shuffle-btn" id="playlist-shuffle-btn" onclick="shuffleMyList()" title="Orden Aleatorio">
            🔀
          </button>
        </div>
        
        <div class="playlist-sort-wrapper">
          <select id="playlist-sort-select" class="explore-select" style="padding: 8px 12px; border-radius: 20px; font-size: 13px;" onchange="sortMyList(this.value)">
            <option value="default">Orden de añadido</option>
            <option value="alpha">Alfabético (A-Z)</option>
            <option value="year">Más recientes primero</option>
          </select>
        </div>
      </div>`;

html = html.replace(targetHtml, replaceHtml);
fs.writeFileSync(indexPath, html);
console.log('Playlist header actions updated in index.html');
