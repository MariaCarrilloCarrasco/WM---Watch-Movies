function renderWomView() {
  // Cuando entramos a WOM!, por defecto no hay categoría seleccionada, o mostramos un resumen.
  const grid = document.getElementById('wom-grid');
  const filters = document.getElementById('wom-filters');
  const title = document.getElementById('wom-section-title');
  
  if (grid) grid.innerHTML = '';
  if (filters) filters.style.display = 'none';
  if (title) title.textContent = 'Destacados WOM!';
}

function setWomCategory(category) {
  // Update AppState
  AppState.currentWomCategory = category;
  
  const title = document.getElementById('wom-section-title');
  const filters = document.getElementById('wom-filters');
  const grid = document.getElementById('wom-grid');
  
  if (!grid || !title || !filters) return;
  
  grid.innerHTML = '';
  filters.innerHTML = '';
  filters.style.display = 'flex';
  
  let dataToRender = [];
  
  if (category === 'libros') {
    title.textContent = 'Libros Recomendados';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="Social" onclick="filterWom('Social')">Social</button>
      <button class="genre-pill" data-genre="Tecnológica" onclick="filterWom('Tecnológica')">Tecnológica</button>
      <button class="genre-pill" data-genre="Diseño" onclick="filterWom('Diseño')">Diseño</button>
      <button class="genre-pill" data-genre="Romántica" onclick="filterWom('Romántica')">Romántica</button>
      <button class="genre-pill" data-genre="Poesía" onclick="filterWom('Poesía')">Poesía</button>
      <button class="genre-pill" data-genre="Ciencia Ficción" onclick="filterWom('Ciencia Ficción')">Ciencia Ficción</button>
      <button class="genre-pill" data-genre="Fantasía" onclick="filterWom('Fantasía')">Fantasía</button>
      <button class="genre-pill" data-genre="Drama" onclick="filterWom('Drama')">Drama</button>
      <button class="genre-pill" data-genre="Literatura Infanto-Juvenil" onclick="filterWom('Literatura Infanto-Juvenil')">Literatura Infanto-Juvenil</button>
      <button class="genre-pill" data-genre="English" onclick="filterWom('English')">English</button>
      <button class="genre-pill" data-genre="Cómics y Gráficos" onclick="filterWom('Cómics y Gráficos')">Cómics y Gráficos</button>
    `;
    dataToRender = typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : [];
  } else if (category === 'teatro') {
    title.textContent = 'Obras de Teatro';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todas</button>
      <button class="genre-pill" data-genre="Drama" onclick="filterWom('Drama')">Drama</button>
      <button class="genre-pill" data-genre="Comedia" onclick="filterWom('Comedia')">Comedia</button>
      <button class="genre-pill" data-genre="Musical" onclick="filterWom('Musical')">Musical</button>
      <button class="genre-pill" data-genre="Clásico" onclick="filterWom('Clásico')">Clásico</button>
      <button class="genre-pill" data-genre="Zarzuela" onclick="filterWom('Zarzuela')">Zarzuela</button>
      <button class="genre-pill" data-genre="Alternativo" onclick="filterWom('Alternativo')">Alternativo</button>
      <button class="genre-pill" data-genre="Infantil" onclick="filterWom('Infantil')">Infantil</button>
    `;
    dataToRender = typeof THEATER_DATA !== 'undefined' ? THEATER_DATA : [];
  } else if (category === 'series') {
    title.textContent = 'Series Destacadas';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todas</button>
      <button class="genre-pill" data-genre="Drama" onclick="filterWom('Drama')">Drama</button>
      <button class="genre-pill" data-genre="Comedia" onclick="filterWom('Comedia')">Comedia</button>
      <button class="genre-pill" data-genre="Animación" onclick="filterWom('Animación')">Animación</button>
      <button class="genre-pill" data-genre="Fantasía" onclick="filterWom('Fantasía')">Fantasía</button>
      <button class="genre-pill" data-genre="Ciencia Ficción" onclick="filterWom('Ciencia Ficción')">Ciencia Ficción</button>
      <button class="genre-pill" data-genre="Thriller" onclick="filterWom('Thriller')">Thriller</button>
      <button class="genre-pill" data-genre="Crimen" onclick="filterWom('Crimen')">Crimen</button>
      <button class="genre-pill" data-genre="Misterio" onclick="filterWom('Misterio')">Misterio</button>
      <button class="genre-pill" data-genre="Documental" onclick="filterWom('Documental')">Documental</button>
    `;
    dataToRender = typeof SERIES_DATA !== 'undefined' ? SERIES_DATA : [];
  } else if (category === 'programas') {
    title.textContent = 'Programas de TV';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="Entretenimiento" onclick="filterWom('Entretenimiento')">Entretenimiento</button>
      <button class="genre-pill" data-genre="Talent Show" onclick="filterWom('Talent Show')">Talent Show</button>
      <button class="genre-pill" data-genre="Concurso" onclick="filterWom('Concurso')">Concurso</button>
      <button class="genre-pill" data-genre="Musical" onclick="filterWom('Musical')">Musical</button>
    `;
    dataToRender = typeof PROGRAMS_DATA !== 'undefined' ? PROGRAMS_DATA : [];
  } else if (category === 'quedadas') {
    title.textContent = 'Quedadas y Meetups';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todas</button>
      <button class="genre-pill" data-genre="Cena" onclick="filterWom('Cena')">Cena</button>
      <button class="genre-pill" data-genre="Cine" onclick="filterWom('Cine')">Cine</button>
      <button class="genre-pill" data-genre="Casa" onclick="filterWom('Casa')">Casa</button>
      <button class="genre-pill" data-genre="Música" onclick="filterWom('Música')">Música</button>
    `;
    dataToRender = typeof QUEDADAS_DATA !== 'undefined' ? QUEDADAS_DATA : [];
  } else if (category === 'viajes') {
    title.textContent = 'Viajes Pendientes';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="Playa" onclick="filterWom('Playa')">Playa</button>
      <button class="genre-pill" data-genre="Aventura" onclick="filterWom('Aventura')">Aventura</button>
      <button class="genre-pill" data-genre="Relax" onclick="filterWom('Relax')">Relax</button>
      <button class="genre-pill" data-genre="Escapada" onclick="filterWom('Escapada')">Escapada</button>
    `;
    dataToRender = typeof VIAJES_DATA !== 'undefined' ? VIAJES_DATA : [];
  } else if (category === 'monologos') {
    title.textContent = 'Monólogos';
    filters.style.display = 'none';
    dataToRender = typeof MONOLOGUES_DATA !== 'undefined' ? MONOLOGUES_DATA : [];
  } else if (category === 'conciertos') {
    title.textContent = 'Conciertos en Madrid';
    // Add concert filters
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="urbano" onclick="filterWom('urbano')">Urbano</button>
      <button class="genre-pill" data-genre="trap" onclick="filterWom('trap')">Trap</button>
      <button class="genre-pill" data-genre="rock" onclick="filterWom('rock')">Rock</button>
      <button class="genre-pill" data-genre="reggaeton" onclick="filterWom('reggaeton')">Reggaeton</button>
      <button class="genre-pill" data-genre="reggaeton antiguo" onclick="filterWom('reggaeton antiguo')">Reggaeton Antiguo</button>
      <button class="genre-pill" data-genre="otros" onclick="filterWom('otros')">Otros</button>
    `;
    dataToRender = typeof CONCERTS_DATA !== 'undefined' ? CONCERTS_DATA : [];
  } else if (category === 'eventos') {
    title.textContent = 'Eventos y Quedadas';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="TICs" onclick="filterWom('TICs')">TICs</button>
      <button class="genre-pill" data-genre="Accesibilidad" onclick="filterWom('Accesibilidad')">Accesibilidad</button>
      <button class="genre-pill" data-genre="Seguridad" onclick="filterWom('Seguridad')">Seguridad</button>
      <button class="genre-pill" data-genre="Diseño Web" onclick="filterWom('Diseño Web')">Diseño Web</button>
      <button class="genre-pill" data-genre="Diseño 3D" onclick="filterWom('Diseño 3D')">Diseño 3D</button>
      <button class="genre-pill" data-genre="Quedadas" onclick="filterWom('Quedadas')">Quedadas</button>
      <button class="genre-pill" data-genre="tardeo" onclick="filterWom('tardeo')">Tardeo</button>
      <button class="genre-pill" data-genre="cine" onclick="filterWom('cine')">Cine</button>
      <button class="genre-pill" data-genre="escapadas" onclick="filterWom('escapadas')">Escapadas</button>
      <button class="genre-pill" data-genre="cena" onclick="filterWom('cena')">Cena</button>
    `;
    dataToRender = typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : [];
  } else if (category === 'planes') {
    title.textContent = 'Planes y Exposiciones';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="Fever" onclick="filterWom('Fever')">Fever</button>
      <button class="genre-pill" data-genre="Luma" onclick="filterWom('Luma')">Luma</button>
      <button class="genre-pill" data-genre="Nomdtable" onclick="filterWom('Nomdtable')">Nomdtable</button>
      <button class="genre-pill" data-genre="Arte" onclick="filterWom('Arte')">Arte</button>
      <button class="genre-pill" data-genre="Gastronomía" onclick="filterWom('Gastronomía')">Gastronomía</button>
    `;
    dataToRender = typeof EXTERNAL_PLANS_DATA !== 'undefined' ? EXTERNAL_PLANS_DATA : [];
  } else if (category === 'musica') {
    title.textContent = 'Música por Artistas';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWom('All')">Todos</button>
      <button class="genre-pill" data-genre="Reggaeton Antiguo" onclick="filterWom('Reggaeton Antiguo')">Reggaeton Antiguo</button>
      <button class="genre-pill" data-genre="Daddy Yankee" onclick="filterWom('Daddy Yankee')">Daddy Yankee</button>
      <button class="genre-pill" data-genre="Don Omar" onclick="filterWom('Don Omar')">Don Omar</button>
      <button class="genre-pill" data-genre="Romeo Santos" onclick="filterWom('Romeo Santos')">Romeo Santos</button>
      <button class="genre-pill" data-genre="Lola Indigo" onclick="filterWom('Lola Indigo')">Lola Indigo</button>
      <button class="genre-pill" data-genre="Karol G" onclick="filterWom('Karol G')">Karol G</button>
      <button class="genre-pill" data-genre="Metrika" onclick="filterWom('Metrika')">Metrika</button>
      <button class="genre-pill" data-genre="Luna Ki" onclick="filterWom('Luna Ki')">Luna Ki</button>
      <button class="genre-pill" data-genre="Lorna" onclick="filterWom('Lorna')">Lorna</button>
      <button class="genre-pill" data-genre="Kristina" onclick="filterWom('Kristina')">Kristina</button>
      <button class="genre-pill" data-genre="Bad Bunny" onclick="filterWom('Bad Bunny')">Bad Bunny</button>
      <button class="genre-pill" data-genre="Bad Gyal" onclick="filterWom('Bad Gyal')">Bad Gyal</button>
      <button class="genre-pill" data-genre="Becky G" onclick="filterWom('Becky G')">Becky G</button>
      <button class="genre-pill" data-genre="Natti Natasha" onclick="filterWom('Natti Natasha')">Natti Natasha</button>
      <button class="genre-pill" data-genre="Maria Escarmiento" onclick="filterWom('Maria Escarmiento')">Maria Escarmiento</button>
    `;
    dataToRender = typeof MUSIC_DATA !== 'undefined' ? MUSIC_DATA : [];
  }
  
  // Render Data
  renderWomGrid(dataToRender);
}

function filterWom(genre) {
  // Update UI active state
  const filters = document.getElementById('wom-filters');
  if (filters) {
    filters.querySelectorAll('.genre-pill').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-genre') === genre) btn.classList.add('active');
    });
  }
  
  let dataToRender = [];
  if (AppState.currentWomCategory === 'conciertos') dataToRender = typeof CONCERTS_DATA !== 'undefined' ? CONCERTS_DATA : [];
  else if (AppState.currentWomCategory === 'eventos') dataToRender = typeof EVENTS_DATA !== 'undefined' ? EVENTS_DATA : [];
  else if (AppState.currentWomCategory === 'planes') dataToRender = typeof EXTERNAL_PLANS_DATA !== 'undefined' ? EXTERNAL_PLANS_DATA : [];
  else if (AppState.currentWomCategory === 'libros') dataToRender = typeof BOOKS_DATA !== 'undefined' ? BOOKS_DATA : [];
  else if (AppState.currentWomCategory === 'teatro') dataToRender = typeof THEATER_DATA !== 'undefined' ? THEATER_DATA : [];
  else if (AppState.currentWomCategory === 'monologos') dataToRender = typeof MONOLOGUES_DATA !== 'undefined' ? MONOLOGUES_DATA : [];
  else if (AppState.currentWomCategory === 'series') dataToRender = typeof SERIES_DATA !== 'undefined' ? SERIES_DATA : [];
  else if (AppState.currentWomCategory === 'programas') dataToRender = typeof PROGRAMS_DATA !== 'undefined' ? PROGRAMS_DATA : [];
  else if (AppState.currentWomCategory === 'quedadas') dataToRender = typeof QUEDADAS_DATA !== 'undefined' ? QUEDADAS_DATA : [];
  else if (AppState.currentWomCategory === 'viajes') dataToRender = typeof VIAJES_DATA !== 'undefined' ? VIAJES_DATA : [];
  else if (AppState.currentWomCategory === 'peliculas') dataToRender = typeof MOVIES_DATA !== 'undefined' ? MOVIES_DATA : [];
  else if (AppState.currentWomCategory === 'musica') dataToRender = typeof MUSIC_DATA !== 'undefined' ? MUSIC_DATA : [];
  
  if (genre !== 'All') {
    dataToRender = dataToRender.filter(item => 
      item.keyword_labels && item.keyword_labels.some(lbl => lbl.toLowerCase() === genre.toLowerCase())
    );
  }
  
  renderWomGrid(dataToRender);
}

function renderWomGrid(dataArray) {
  const grid = document.getElementById('wom-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  if (dataArray.length === 0) {
    grid.innerHTML = '<p style="color: white; padding: 20px;">No hay resultados.</p>';
    return;
  }
  
  dataArray.forEach(item => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    if (AppState.currentWomCategory === 'libros') {
      card.classList.add('book-card');
    }
    card.setAttribute('data-id', item.movie_identifier);
    
    let isLiked = false;
    
    // Check if it has event details (for concerts and events)
    let extraHtml = '';
    if (item.event_details) {
      let platformBadge = '';
      if (item.event_details.plataforma) {
        let bgColor = '#fff';
        let textColor = '#000';
        if (item.event_details.plataforma === 'Fever') { bgColor = '#ff4757'; textColor = '#fff'; }
        else if (item.event_details.plataforma === 'Luma') { bgColor = '#f1c40f'; textColor = '#000'; }
        else if (item.event_details.plataforma === 'Nomdtable') { bgColor = '#3498db'; textColor = '#fff'; }
        
        platformBadge = `<div style="display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; background: ${bgColor}; color: ${textColor}; margin-bottom: 4px;">🎟️ by ${item.event_details.plataforma}</div>`;
      }
      
      let buttonText = item.event_details.plataforma ? `Comprar en ${item.event_details.plataforma}` : 'Comprar Entradas';

      extraHtml = `
        <div style="font-size: 11px; margin-top: 6px; color: var(--accent-purple);">
          ${platformBadge}
          <div>📅 ${item.event_details.fecha} | 🕒 ${item.event_details.hora}</div>
          <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">📍 ${item.event_details.lugar}</div>
          <div>💰 ${item.event_details.precio}</div>
          <a href="${item.event_details.web_compra}" target="_blank" style="display: block; margin-top: 8px; background: var(--accent-purple); color: white; text-align: center; padding: 6px; border-radius: 6px; text-decoration: none; font-weight: bold;">${buttonText}</a>
        </div>
      `;
    }
    
    let fallbackText = item.display_name || item.title || '';
    let fallbackSub1 = item.release_year || item.date || item.runtime_minutes || '';
    let fallbackSub2 = (item.filmmaker && item.filmmaker.director_name) ? item.filmmaker.director_name : (item.location || '');
    let finalFallbackText = fallbackText;
    if (fallbackSub1 && fallbackSub1 !== 'Por confirmar' && fallbackSub1 !== 'Por definir') finalFallbackText += '\n' + fallbackSub1;
    if (fallbackSub2) finalFallbackText += '\n' + fallbackSub2;
    
    let fallbackImg = `https://placehold.co/600x900/1e1e2f/ffffff?text=${encodeURIComponent(finalFallbackText)}`;
    let imgUrl = item.cover_image_url || item.image || fallbackImg;

    card.innerHTML = `
      <div class="card-image-wrapper" onclick="if('${item.video_url || ''}') window.openVideoModal('${item.video_url}', '${item.display_name}')">
        <img src="${imgUrl}" alt="${item.display_name || item.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'">
        <div class="card-overlay" onclick="event.stopPropagation()">
          <button class="card-like-btn" title="Añadir a mis listas" onclick="openPlaylistModal(${item.movie_identifier || item.id}); event.stopPropagation();" style="background: rgba(0,0,0,0.6); border-radius: 50%; padding: 8px;">
            <svg viewBox="0 0 24 24" fill="${isLiked ? 'var(--accent-purple)' : 'none'}" stroke="white" stroke-width="2" style="width: 20px; height: 20px;">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          ${item.video_url ? `
          <button title="Reproducir Vídeo" onclick="window.openVideoModal('${item.video_url}', '${item.display_name}'); event.stopPropagation();" style="background: rgba(232, 67, 147, 0.9); border:none; border-radius: 50%; padding: 12px; margin-top: 10px; cursor:pointer;">
            <svg viewBox="0 0 24 24" fill="white" style="width: 24px; height: 24px;"><path d="M8 5v14l11-7z"/></svg>
          </button>` : ''}
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.display_name}</h3>
        <div class="card-info">
          <span>${item.release_year}</span>
          <span>${item.category_type}</span>
          <span>⭐ ${item.average_score}</span>
        </div>
        <p class="card-synopsis">${item.synopsis_text ? item.synopsis_text.es : ''}</p>
        ${extraHtml}
      </div>
    `;
    grid.appendChild(card);
  });
}



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
