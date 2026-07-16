const fs = require('fs');

const updateLogic = `
window.renderPlaylistOptions = function() {
  const container = document.getElementById('playlist-options');
  if (!container) return;
  
  container.innerHTML = '';
  
  AppState.playlists.forEach(pl => {
    const isAdded = pl.items.includes(currentItemIdForPlaylist);
    const div = document.createElement('div');
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #333;';
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = pl.name + ' (' + pl.items.length + ')';
    nameSpan.style.flex = "1";
    
    const actionsDiv = document.createElement('div');
    actionsDiv.style.display = 'flex';
    actionsDiv.style.gap = '5px';
    
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = isAdded ? 'Quitar' : 'Añadir';
    toggleBtn.style.cssText = isAdded ? 
      'background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;' : 
      'background: var(--accent-purple); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;';
      
    toggleBtn.onclick = () => {
      if (isAdded) {
        pl.items = pl.items.filter(id => id !== currentItemIdForPlaylist);
      } else {
        pl.items.push(currentItemIdForPlaylist);
      }
      if (pl.id === 'default') {
        AppState.myListMovies = pl.items;
        if(typeof saveMyList === 'function') saveMyList();
        if(typeof renderMyListCount === 'function') renderMyListCount();
      } else {
        localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
      }
      renderPlaylistOptions(); 
    };
    
    actionsDiv.appendChild(toggleBtn);
    
    // Add delete playlist button if not default
    if (pl.id !== 'default') {
      const delBtn = document.createElement('button');
      delBtn.textContent = '🗑️';
      delBtn.style.cssText = 'background: transparent; color: white; border: none; padding: 5px; cursor: pointer; font-size: 14px;';
      delBtn.title = "Eliminar Lista";
      delBtn.onclick = () => {
        if(confirm("¿Seguro que quieres borrar la lista " + pl.name + "?")) {
          AppState.playlists = AppState.playlists.filter(p => p.id !== pl.id);
          localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
          renderPlaylistOptions();
        }
      };
      actionsDiv.appendChild(delBtn);
    }
    
    div.appendChild(nameSpan);
    div.appendChild(actionsDiv);
    container.appendChild(div);
  });
};
`;

fs.appendFileSync('js/wom.js', '\\n' + updateLogic);
console.log("Updated playlist manager logic.");
