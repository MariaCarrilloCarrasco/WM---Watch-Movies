

// ==========================================
// VIDEO MODAL LOGIC
// ==========================================
window.openVideoModal = function(url, title) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const titleEl = document.getElementById('video-modal-title');
  if(modal && iframe) {
    iframe.src = url;
    if(titleEl) titleEl.textContent = title || 'Reproductor';
    modal.style.display = 'flex';
  }
};

window.closeVideoModal = function() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  if(modal && iframe) {
    iframe.src = '';
    modal.style.display = 'none';
  }
};

// ==========================================
// CUSTOM PLAYLISTS LOGIC
// ==========================================
let currentItemIdForPlaylist = null;

if (!AppState.playlists) {
  // Initialize with the default "Mi Lista"
  AppState.playlists = [
    { id: 'default', name: 'Mi Lista', items: AppState.myListMovies || [] }
  ];
}

window.openPlaylistModal = function(itemId) {
  currentItemIdForPlaylist = Number(itemId);
  const modal = document.getElementById('playlist-modal');
  if (!modal) return;
  
  renderPlaylistOptions();
  modal.style.display = 'flex';
};

window.closePlaylistModal = function() {
  const modal = document.getElementById('playlist-modal');
  if (modal) modal.style.display = 'none';
  currentItemIdForPlaylist = null;
};

window.renderPlaylistOptions = function() {
  const container = document.getElementById('playlist-options');
  if (!container) return;
  
  container.innerHTML = '';
  
  AppState.playlists.forEach(pl => {
    const isAdded = pl.items.includes(currentItemIdForPlaylist);
    const div = document.createElement('div');
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #333;';
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = pl.name;
    
    const btn = document.createElement('button');
    btn.textContent = isAdded ? 'Quitar' : 'Añadir';
    btn.style.cssText = isAdded ? 
      'background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;' : 
      'background: var(--accent-purple); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;';
      
    btn.onclick = () => {
      if (isAdded) {
        pl.items = pl.items.filter(id => id !== currentItemIdForPlaylist);
      } else {
        pl.items.push(currentItemIdForPlaylist);
      }
      // Sync back to original myListMovies if it's the default list
      if (pl.id === 'default') {
        AppState.myListMovies = pl.items;
        if(typeof saveMyList === 'function') saveMyList();
        if(typeof renderMyListCount === 'function') renderMyListCount();
      } else {
        // We should save AppState to localStorage here if we implemented a robust save
        localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
      }
      renderPlaylistOptions(); // Re-render to update buttons
      // Re-render WOM grid to update the heart icon if needed
      if(typeof filterWom === 'function') {
        // Just a slight hack to refresh the current view
        const activeFilter = document.querySelector('#wom-filters .genre-pill.active');
        if(activeFilter) activeFilter.click();
      }
    };
    
    div.appendChild(nameSpan);
    div.appendChild(btn);
    container.appendChild(div);
  });
};

window.createNewPlaylistAndAdd = function() {
  const input = document.getElementById('new-playlist-name');
  const name = input.value.trim();
  if (!name) return;
  
  const newPl = {
    id: 'pl_' + Date.now(),
    name: name,
    items: [currentItemIdForPlaylist]
  };
  
  AppState.playlists.push(newPl);
  localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
  
  input.value = '';
  renderPlaylistOptions();
};

// Initialize custom playlists from localStorage
try {
  const savedPls = localStorage.getItem('wom_playlists');
  if (savedPls) {
    const parsed = JSON.parse(savedPls);
    if(Array.isArray(parsed) && parsed.length > 0) {
      AppState.playlists = parsed;
    }
  }
} catch(e) {}
