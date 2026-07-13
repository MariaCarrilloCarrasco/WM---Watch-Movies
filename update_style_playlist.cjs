const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/\r\n/g, '\n');

const playlistCss = `
/* ==========================================================================
   PLAYLIST VIEW (MI LISTA)
   ========================================================================== */
.playlist-header-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.playlist-play-all-btn {
  background-color: var(--accent-purple);
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
  transition: transform 0.2s, background-color 0.2s;
}

.playlist-play-all-btn:hover {
  transform: scale(1.05);
  background-color: #5b4bc4;
}

.playlist-shuffle-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.playlist-shuffle-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.playlist-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.playlist-item {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 8px 16px;
  transition: background-color 0.2s;
}

.playlist-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.playlist-index {
  color: #888;
  font-weight: 600;
  width: 24px;
  text-align: right;
  margin-right: 16px;
  font-size: 14px;
}

.playlist-thumb {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  margin-right: 16px;
  flex-shrink: 0;
  cursor: pointer;
}

.playlist-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
}

.playlist-title {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.playlist-meta {
  color: #aaa;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.playlist-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 12px;
}

.playlist-play-btn {
  background: transparent;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
}

.playlist-play-btn:hover {
  opacity: 1;
  transform: scale(1.1);
  color: var(--accent-purple);
}

.playlist-remove-btn {
  background: transparent;
  color: #888;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s;
}

.playlist-remove-btn:hover {
  color: #ff4757;
}

@media (max-width: 480px) {
  .playlist-index {
    display: none;
  }
}
`;

if (!css.includes('.playlist-container')) {
  css += '\n' + playlistCss;
  fs.writeFileSync(cssPath, css);
  console.log('Playlist CSS appended');
} else {
  console.log('Playlist CSS already exists');
}
