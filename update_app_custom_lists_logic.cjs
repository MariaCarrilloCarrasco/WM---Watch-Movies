const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const appendCode = `
// ======== CUSTOM LISTS ========
window.loadCustomLists = function() {
  if (AppState.user) {
    const saved = localStorage.getItem('customLists_' + AppState.user.email);
    if (saved) {
      AppState.customLists = JSON.parse(saved);
    } else {
      AppState.customLists = [{ id: 'default', name: AppState.language === 'es' ? 'Mi Lista' : 'My List', movies: AppState.myListMovies || [] }];
    }
  } else {
    AppState.customLists = [{ id: 'default', name: AppState.language === 'es' ? 'Mi Lista' : 'My List', movies: AppState.myListMovies || [] }];
  }
};

window.saveCustomLists = function() {
  if (AppState.user) {
    localStorage.setItem('customLists_' + AppState.user.email, JSON.stringify(AppState.customLists));
  } else {
    localStorage.setItem('customLists_guest', JSON.stringify(AppState.customLists));
  }
  
  // Sync default list back to myListMovies
  const defaultList = AppState.customLists.find(l => l.id === 'default');
  if (defaultList) {
    AppState.myListMovies = defaultList.movies;
    localStorage.setItem('myListMovies', JSON.stringify(AppState.myListMovies));
    if (typeof renderMyListCount === 'function') renderMyListCount();
  }
};

window.openAddToListModal = function(movieId) {
  const modal = document.getElementById('list-selection-modal');
  const container = document.getElementById('list-selection-container');
  if (!modal || !container) return;
  
  if (!AppState.user) {
    alert(AppState.language === 'es' ? 'Regístrate o inicia sesión para usar listas personalizadas.' : 'Sign in to use custom lists.');
    openRegister();
    return;
  }
  
  window.loadCustomLists();
  container.innerHTML = '';
  
  AppState.customLists.forEach(list => {
    const isChecked = list.movies.includes(movieId);
    const row = document.createElement('label');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '12px';
    row.style.padding = '10px';
    row.style.background = 'rgba(255,255,255,0.05)';
    row.style.borderRadius = '8px';
    row.style.cursor = 'pointer';
    row.style.border = '1px solid rgba(255,255,255,0.1)';
    row.style.transition = 'background 0.2s';
    row.onmouseover = () => row.style.background = 'rgba(255,255,255,0.1)';
    row.onmouseout = () => row.style.background = 'rgba(255,255,255,0.05)';
    
    row.innerHTML = \`
      <input type="checkbox" style="width: 18px; height: 18px;" \${isChecked ? 'checked' : ''}>
      <span style="color: #fff; font-size: 15px;">\${list.name}</span>
    \`;
    
    row.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        if (!list.movies.includes(movieId)) list.movies.push(movieId);
      } else {
        list.movies = list.movies.filter(id => id !== movieId);
      }
      window.saveCustomLists();
    });
    
    container.appendChild(row);
  });
  
  modal.style.display = 'flex';
};

// Sobrescribir renderMyList
window.renderMyList = function() {
  if (typeof renderMyListCount === 'function') renderMyListCount();
  
  const container = document.getElementById('custom-lists-container');
  const emptyState = document.getElementById('mylist-empty-state');
  if (!container) return;
  
  window.loadCustomLists();
  container.innerHTML = '';
  
  if (!AppState.customLists || AppState.customLists.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    return;
  } else {
    if (emptyState) emptyState.style.display = 'none';
  }
  
  AppState.customLists.forEach(list => {
    const listSection = document.createElement('div');
    listSection.style.marginBottom = '32px';
    
    const listHeader = document.createElement('div');
    listHeader.style.display = 'flex';
    listHeader.style.justifyContent = 'space-between';
    listHeader.style.alignItems = 'center';
    listHeader.style.marginBottom = '12px';
    listHeader.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    listHeader.style.paddingBottom = '8px';
    
    listHeader.innerHTML = \`
      <h3 style="font-size: 20px; color: #fff; margin: 0;">\${list.name} <span style="font-size: 14px; color: #94a3b8; font-weight: normal;">(\${list.movies.length})</span></h3>
      \${list.id !== 'default' ? \`<button class="delete-list-btn" style="background: transparent; color: #ef4444; border: none; cursor: pointer; font-size: 14px;">\${AppState.language === 'es' ? 'Eliminar' : 'Delete'}</button>\` : ''}
    \`;
    
    if (list.id !== 'default') {
      listHeader.querySelector('.delete-list-btn').onclick = () => {
        if (confirm(AppState.language === 'es' ? \`¿Seguro que deseas eliminar la lista "\${list.name}"?\` : \`Are you sure you want to delete "\${list.name}"?\`)) {
          AppState.customLists = AppState.customLists.filter(l => l.id !== list.id);
          window.saveCustomLists();
          window.renderMyList();
        }
      };
    }
    
    listSection.appendChild(listHeader);
    
    const moviesGrid = document.createElement('div');
    moviesGrid.className = 'movies-grid';
    
    if (list.movies.length === 0) {
      moviesGrid.innerHTML = \`<p style="color: #94a3b8; font-size: 14px; grid-column: 1 / -1;">\${AppState.language === 'es' ? 'Esta lista está vacía.' : 'This list is empty.'}</p>\`;
    } else {
      const movies = MOVIES_DATA.filter(m => list.movies.includes(m.id));
      movies.forEach(movie => {
        if (typeof createMovieCardElement === 'function') {
          moviesGrid.appendChild(createMovieCardElement(movie));
        }
      });
    }
    
    listSection.appendChild(moviesGrid);
    container.appendChild(listSection);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const createListBtn = document.getElementById('create-custom-list-btn');
  if (createListBtn) {
    createListBtn.onclick = () => {
      if (!AppState.user) {
        alert(AppState.language === 'es' ? 'Regístrate o inicia sesión para crear listas personalizadas.' : 'Sign in to create custom lists.');
        openRegister();
        return;
      }
      const name = prompt(AppState.language === 'es' ? 'Nombre de la nueva lista:' : 'New list name:');
      if (name && name.trim()) {
        window.loadCustomLists();
        AppState.customLists.push({ id: 'list_' + Date.now(), name: name.trim(), movies: [] });
        window.saveCustomLists();
        window.renderMyList();
      }
    };
  }
});
`;

appJs += appendCode;
fs.writeFileSync(appJsPath, appJs);
console.log('Appended custom lists logic');
