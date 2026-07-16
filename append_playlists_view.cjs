const fs = require('fs');

const playlistViewLogic = `
function findGlobalItemById(id) {
  const allArrays = [
    typeof MOVIES_DATA !== 'undefined' ? MOVIES_DATA : [],
    typeof SERIES_DATA !== 'undefined' ? SERIES_DATA : [],
    typeof MUSIC_DATA !== 'undefined' ? MUSIC_DATA : [],
    typeof THEATER_DATA !== 'undefined' ? THEATER_DATA : [],
    typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : [],
    typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : [],
    typeof EXTERNAL_PLANS_DATA !== 'undefined' ? EXTERNAL_PLANS_DATA : [],
    typeof QUEDADAS_DATA !== 'undefined' ? QUEDADAS_DATA : [],
    typeof CONCERTS_DATA !== 'undefined' ? CONCERTS_DATA : [],
    typeof MONOLOGUES_DATA !== 'undefined' ? MONOLOGUES_DATA : []
  ];
  let customItems = [];
  try {
    const saved = localStorage.getItem('wom_custom_items');
    if(saved) customItems = JSON.parse(saved);
  } catch(e) {}
  allArrays.push(customItems);

  for (let arr of allArrays) {
    const found = arr.find(item => Number(item.id || item.movie_identifier) === Number(id));
    if (found) return found;
  }
  return null;
}

window.moveItemInPlaylist = function(playlistId, index, direction) {
  const pl = AppState.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  if (direction === -1 && index > 0) {
    const temp = pl.items[index];
    pl.items[index] = pl.items[index - 1];
    pl.items[index - 1] = temp;
  } else if (direction === 1 && index < pl.items.length - 1) {
    const temp = pl.items[index];
    pl.items[index] = pl.items[index + 1];
    pl.items[index + 1] = temp;
  }
  
  if (pl.id === 'default') {
    AppState.myListMovies = pl.items;
    if(typeof saveMyList === 'function') saveMyList();
  }
  localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
  renderMyListGrid();
};

window.removeItemFromPlaylistList = function(playlistId, index) {
  const pl = AppState.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  pl.items.splice(index, 1);
  if (pl.id === 'default') {
    AppState.myListMovies = pl.items;
    if(typeof saveMyList === 'function') saveMyList();
  }
  localStorage.setItem('wom_playlists', JSON.stringify(AppState.playlists));
  renderMyListGrid();
};

function renderMyListGrid() {
  const grid = document.getElementById('mylist-movies-grid');
  const emptyState = document.getElementById('mylist-empty-state');
  const headerActions = document.getElementById('playlist-header-actions');
  if (!grid) return;

  grid.innerHTML = '';
  grid.style.display = 'block'; 
  
  if (headerActions) headerActions.style.display = 'none';
  if (emptyState) emptyState.style.display = 'none';

  let hasItems = false;

  AppState.playlists.forEach(pl => {
    if (pl.items && pl.items.length > 0) {
      hasItems = true;
      const plSection = document.createElement('div');
      plSection.style.marginBottom = '30px';
      
      const plTitle = document.createElement('h3');
      plTitle.textContent = pl.name;
      plTitle.style.color = 'white';
      plTitle.style.borderBottom = '1px solid #333';
      plTitle.style.paddingBottom = '10px';
      plSection.appendChild(plTitle);

      const listContainer = document.createElement('div');
      listContainer.style.display = 'flex';
      listContainer.style.flexDirection = 'column';
      listContainer.style.gap = '10px';

      pl.items.forEach((itemId, idx) => {
        const itemObj = findGlobalItemById(itemId);
        if (!itemObj) return;

        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.background = '#2a2a3c';
        row.style.padding = '10px';
        row.style.borderRadius = '8px';
        row.style.justifyContent = 'space-between';

        const leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.style.gap = '15px';

        const thumbUrl = itemObj.cover_image_url || itemObj.backdrop || itemObj.poster || 'https://via.placeholder.com/48x48?text=No+Image';
        const img = document.createElement('img');
        img.src = thumbUrl;
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        
        const info = document.createElement('div');
        const tSpan = document.createElement('div');
        tSpan.textContent = itemObj.display_name || itemObj.title;
        tSpan.style.color = 'white';
        tSpan.style.fontWeight = 'bold';
        
        const subSpan = document.createElement('div');
        subSpan.textContent = itemObj.category_type || itemObj.genre || 'Desconocido';
        subSpan.style.color = '#888';
        subSpan.style.fontSize = '12px';
        
        info.appendChild(tSpan);
        info.appendChild(subSpan);
        
        leftSide.appendChild(img);
        leftSide.appendChild(info);

        const actions = document.createElement('div');
        actions.style.display = 'flex';
        actions.style.gap = '10px';

        const upBtn = document.createElement('button');
        upBtn.innerHTML = '⬆️';
        upBtn.style.background = 'transparent';
        upBtn.style.border = 'none';
        upBtn.style.cursor = idx > 0 ? 'pointer' : 'default';
        upBtn.style.opacity = idx > 0 ? '1' : '0.3';
        upBtn.onclick = () => moveItemInPlaylist(pl.id, idx, -1);

        const downBtn = document.createElement('button');
        downBtn.innerHTML = '⬇️';
        downBtn.style.background = 'transparent';
        downBtn.style.border = 'none';
        downBtn.style.cursor = idx < pl.items.length - 1 ? 'pointer' : 'default';
        downBtn.style.opacity = idx < pl.items.length - 1 ? '1' : '0.3';
        downBtn.onclick = () => moveItemInPlaylist(pl.id, idx, 1);

        const delBtn = document.createElement('button');
        delBtn.innerHTML = '✕';
        delBtn.style.background = 'transparent';
        delBtn.style.color = 'white';
        delBtn.style.border = 'none';
        delBtn.style.cursor = 'pointer';
        delBtn.onclick = () => removeItemFromPlaylistList(pl.id, idx);

        actions.appendChild(upBtn);
        actions.appendChild(downBtn);
        actions.appendChild(delBtn);

        row.appendChild(leftSide);
        row.appendChild(actions);

        listContainer.appendChild(row);
      });

      plSection.appendChild(listContainer);
      grid.appendChild(plSection);
    }
  });

  if (!hasItems) {
    if (emptyState) emptyState.style.display = 'block';
  }
}
`;

fs.appendFileSync('app.js', '\\n' + playlistViewLogic);
console.log("Appended playlist view logic to app.js");
