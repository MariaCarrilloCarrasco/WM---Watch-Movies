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
  
  if (category === 'listas') {
    title.textContent = 'Mis Listas WOM';
    filters.style.display = 'none';
    renderWomListsView();
    return;
  } else if (category === 'todo') {
    title.textContent = 'Todos los Eventos y Estrenos';
    filters.innerHTML = `
      <button class="genre-pill active" data-genre="All" onclick="filterWomTodo('All')">Todas las fechas</button>
      <button class="genre-pill" data-genre="Hoy" onclick="filterWomTodo('Hoy')">Hoy</button>
      <button class="genre-pill" data-genre="Esta Semana" onclick="filterWomTodo('Esta Semana')">Esta Semana</button>
    `;
    dataToRender = [];
    if(typeof EVENTS_DATA !== 'undefined') dataToRender = dataToRender.concat(EVENTS_DATA);
    if(typeof QUEDADAS_DATA !== 'undefined') dataToRender = dataToRender.concat(QUEDADAS_DATA);
    if(typeof PLANES_DATA !== 'undefined') dataToRender = dataToRender.concat(PLANES_DATA);
    if(typeof CONCERTS_DATA !== 'undefined') dataToRender = dataToRender.concat(CONCERTS_DATA);
    if(typeof THEATER_DATA !== 'undefined') dataToRender = dataToRender.concat(THEATER_DATA);
    if(typeof MONOLOGUES_DATA !== 'undefined') dataToRender = dataToRender.concat(MONOLOGUES_DATA);
    if(typeof MOVIES_DATA !== 'undefined') dataToRender = dataToRender.concat(MOVIES_DATA);
    if(typeof SERIES_DATA !== 'undefined') dataToRender = dataToRender.concat(SERIES_DATA);
    
    // Sort randomly or by date to mix them up
    dataToRender.sort(() => Math.random() - 0.5);
  } else if (category === 'libros') {
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

window.filterWomTodo = function(timeFilter) {
  const btns = document.querySelectorAll('#wom-filters .genre-pill');
  btns.forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(btns).find(b => b.getAttribute('data-genre') === timeFilter);
  if (activeBtn) activeBtn.classList.add('active');
  
  let allData = [];
  if(typeof EVENTS_DATA !== 'undefined') allData = allData.concat(EVENTS_DATA);
  if(typeof QUEDADAS_DATA !== 'undefined') allData = allData.concat(QUEDADAS_DATA);
  if(typeof PLANES_DATA !== 'undefined') allData = allData.concat(PLANES_DATA);
  if(typeof CONCERTS_DATA !== 'undefined') allData = allData.concat(CONCERTS_DATA);
  if(typeof THEATER_DATA !== 'undefined') allData = allData.concat(THEATER_DATA);
  if(typeof MONOLOGUES_DATA !== 'undefined') allData = allData.concat(MONOLOGUES_DATA);
  if(typeof MOVIES_DATA !== 'undefined') allData = allData.concat(MOVIES_DATA);
  if(typeof SERIES_DATA !== 'undefined') allData = allData.concat(SERIES_DATA);
  
  // Basic mock filtering based on current date 2026-07-16
  let filtered = allData;
  if (timeFilter === 'Hoy') {
    filtered = allData.filter(item => {
      const d = item.date || (item.event_details && item.event_details.fecha) || '';
      return d.includes('16') || d.toLowerCase().includes('hoy') || d.includes('2026-07-16');
    });
  } else if (timeFilter === 'Esta Semana') {
    filtered = allData.filter(item => {
      const d = item.date || (item.event_details && item.event_details.fecha) || '';
      // Includes 16 to 23 of july
      return /(16|17|18|19|20|21|22|23)/.test(d) || d.toLowerCase().includes('semana') || d.includes('2026-07-1');
    });
  }
  
  renderWomGrid(filtered);
};

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
    card.style.cursor = 'pointer';
    let currentId = item.movie_identifier || item.id;
    let isLiked = typeof window.isItemLiked === 'function' ? window.isItemLiked(currentId) : (AppState.likedMovies && AppState.likedMovies.findIndex(l => Number(l) === Number(currentId)) !== -1);
    let heartFill = isLiked ? '#ef4444' : 'none';
    let heartStroke = isLiked ? '#ef4444' : 'white';
    
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
      <div class="card-image-wrapper">
        <img src="${imgUrl}" alt="${item.display_name || item.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'">
        <div class="card-overlay">
          <button class="card-like-btn" title="Me gusta" onclick="toggleWomLike('${item.movie_identifier || item.id}', this); event.stopPropagation();" style="background: rgba(0,0,0,0.6); border-radius: 50%; padding: 8px;">
            <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="${heartStroke}" stroke-width="2" style="width: 20px; height: 20px;">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
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
        <button onclick="openWomPlaylistModal('${item.movie_identifier || item.id}'); event.stopPropagation();" style="background: var(--accent-purple); color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">+ Añadir a mi lista</button>
        <button onclick="openCommentsModal('${item.movie_identifier || item.id}', '${(item.display_name || '').replace(/'/g, "\\'")}'); event.stopPropagation();" style="background: transparent; color: var(--accent-purple); border: 1px solid var(--accent-purple); border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">Comentar</button>
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

document.addEventListener('DOMContentLoaded', () => {
  if (typeof AppState !== 'undefined' && !AppState.playlists) {
    // Initialize with the default "Mi Lista"
    AppState.playlists = [
      { id: 'default', name: 'Mi Lista', items: AppState.myListMovies || [] }
    ];
  }
});

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
document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedPls = localStorage.getItem('wom_playlists');
    if (savedPls) {
      const parsed = JSON.parse(savedPls);
      if(Array.isArray(parsed) && parsed.length > 0) {
        if (typeof AppState !== 'undefined') {
          AppState.playlists = parsed;
        }
      }
    }
  } catch(e) {}
});


// ==========================================
// COMMENTS LOGIC
// ==========================================
let currentItemIdForComments = null;
let currentRating = 5;

// Load comments from localStorage
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AppState !== 'undefined' && !AppState.comments) {
    try {
      const saved = localStorage.getItem('wom_comments');
      AppState.comments = saved ? JSON.parse(saved) : {};
    } catch(e) {
      AppState.comments = {};
    }
  }
});

window.openCommentsModal = function(itemId, itemName) {
  currentItemIdForComments = itemId;
  currentRating = 5;
  document.getElementById('comments-modal-title').textContent = 'Comentarios sobre ' + itemName;
  document.getElementById('new-comment-text').value = '';
  setRating(5);
  
  renderComments();
  const modal = document.getElementById('comments-modal');
  if(modal) modal.style.display = 'flex';
};

window.closeCommentsModal = function() {
  const modal = document.getElementById('comments-modal');
  if(modal) modal.style.display = 'none';
  currentItemIdForComments = null;
};

window.setRating = function(stars) {
  currentRating = stars;
  const container = document.getElementById('star-rating-input');
  if(!container) return;
  const starSpans = container.querySelectorAll('span');
  starSpans.forEach(span => {
    const val = parseInt(span.getAttribute('data-val'));
    if (val <= stars) {
      span.style.color = 'gold';
    } else {
      span.style.color = '#555';
    }
  });
};

window.submitComment = function() {
  if(!currentItemIdForComments) return;
  
  const input = document.getElementById('new-comment-text');
  const text = input.value.trim();
  if(!text) return;
  
  // Positivity Filter
  const negativeWords = ['malo', 'aburrido', 'feo', 'peor', 'asco', 'odio', 'basura', 'horrible', 'mierda', 'puta'];
  const lowerText = text.toLowerCase();
  
  const hasNegative = negativeWords.some(word => lowerText.includes(word));
  if (hasNegative) {
    alert("¡En WOM! solo vibramos alto! Modifica tu mensaje 💖");
    return; // Block comment
  }
  
  if (!AppState.comments[currentItemIdForComments]) {
    AppState.comments[currentItemIdForComments] = [];
  }
  
  AppState.comments[currentItemIdForComments].push({
    text: text,
    rating: currentRating,
    user: 'Tú',
    date: new Date().toLocaleDateString()
  });
  
  // Save to localStorage
  localStorage.setItem('wom_comments', JSON.stringify(AppState.comments));
  
  input.value = '';
  renderComments();
};

window.renderComments = function() {
  const container = document.getElementById('comments-list');
  if(!container) return;
  
  const comments = AppState.comments[currentItemIdForComments] || [];
  
  if (comments.length === 0) {
    container.innerHTML = '<p style="color: #888; font-style: italic;">No hay comentarios todavía. ¡Sé el primero!</p>';
    return;
  }
  
  container.innerHTML = '';
  comments.forEach(c => {
    const div = document.createElement('div');
    div.style.cssText = 'background: #2a2a3c; padding: 10px; border-radius: 8px;';
    
    let starsHtml = '';
    for(let i=0; i<5; i++) {
      starsHtml += i < c.rating ? '<span style="color:gold;">★</span>' : '<span style="color:#555;">★</span>';
    }
    
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
        <span style="font-weight: bold; color: var(--accent-purple);">${c.user}</span>
        <span style="font-size: 12px; color: #888;">${c.date}</span>
      </div>
      <div style="margin-bottom: 5px;">${starsHtml}</div>
      <div style="font-size: 14px;">${c.text}</div>
    `;
    container.appendChild(div);
  });
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

// ==========================================
// ADMIN DYNAMIC CONTENT LOGIC
// ==========================================
window.openAddContentModal = function() {
  const modal = document.getElementById('add-content-modal');
  if(modal) modal.style.display = 'flex';
};

window.closeAddContentModal = function() {
  const modal = document.getElementById('add-content-modal');
  if(modal) modal.style.display = 'none';
};

window.submitNewContent = function() {
  const cat = document.getElementById('add-category').value;
  const title = document.getElementById('add-title').value.trim();
  const creator = document.getElementById('add-creator').value.trim();
  const genresStr = document.getElementById('add-genres').value.trim();
  const synopsis = document.getElementById('add-synopsis').value.trim();
  
  if (!title || !genresStr) {
    alert("Por favor, rellena el título y al menos un género.");
    return;
  }
  
  const genres = genresStr.split(',').map(s => s.trim()).filter(s => s);
  
  const coverText = title + '\n' + creator;
  const fallbackImg = 'https://placehold.co/600x900/1abc9c/ffffff?text=' + encodeURIComponent(coverText);
  
  const newItem = {
    movie_identifier: Date.now(),
    id: Date.now(),
    display_name: title,
    title: title,
    release_year: new Date().getFullYear().toString(),
    average_score: 10.0,
    category_type: cat.toUpperCase(),
    synopsis_text: { es: synopsis },
    filmmaker: { director_name: creator },
    keyword_labels: genres,
    genre: genres.join(', '),
    cover_image_url: fallbackImg,
    image: fallbackImg,
    bg_image_url: fallbackImg
  };
  
  // Guardar en localStorage
  let customItems = [];
  try {
    const saved = localStorage.getItem('wom_custom_items');
    if(saved) customItems = JSON.parse(saved);
  } catch(e) {}
   
  newItem._internal_category = cat;
  customItems.push(newItem);
  localStorage.setItem('wom_custom_items', JSON.stringify(customItems));
  
  // Añadir a la base de datos en memoria y repintar si estamos en esa categoria
  injectCustomItem(newItem);
  
  // Añadir nuevos géneros a la barra superior si estamos en esa categoria
  if (AppState.currentWomCategory === cat) {
    addDynamicFilters(genres);
    // Refrescar
    const activeFilter = document.querySelector('#wom-filters .genre-pill.active');
    if(activeFilter) {
      filterWom(activeFilter.getAttribute('data-genre'));
    } else {
      filterWom('All');
    }
  }
  
  closeAddContentModal();
  document.getElementById('add-title').value = '';
  document.getElementById('add-creator').value = '';
  document.getElementById('add-genres').value = '';
  document.getElementById('add-synopsis').value = '';
};

window.injectCustomItem = function(item) {
  const c = item._internal_category;
  if(c === 'peliculas' && typeof MOVIES_DATA !== 'undefined') MOVIES_DATA.unshift(item);
  else if(c === 'series' && typeof SERIES_DATA !== 'undefined') SERIES_DATA.unshift(item);
  else if(c === 'musica' && typeof MUSIC_DATA !== 'undefined') MUSIC_DATA.unshift(item);
  else if(c === 'libros' && typeof BOOKS_DATA !== 'undefined') BOOKS_DATA.unshift(item);
  else if(c === 'teatro' && typeof THEATER_DATA !== 'undefined') THEATER_DATA.unshift(item);
  else if(c === 'monologos' && typeof MONOLOGUES_DATA !== 'undefined') MONOLOGUES_DATA.unshift(item);
  else if(c === 'conciertos' && typeof CONCERTS_DATA !== 'undefined') CONCERTS_DATA.unshift(item);
  else if(c === 'eventos' && typeof EVENTS_DATA !== 'undefined') EVENTS_DATA.unshift(item);
  else if(c === 'viajes' && typeof VIAJES_DATA !== 'undefined') VIAJES_DATA.unshift(item);
};

window.addDynamicFilters = function(genres) {
  const container = document.getElementById('wom-filters');
  if (!container) return;
  
  const existingBtns = Array.from(container.querySelectorAll('.genre-pill')).map(b => b.getAttribute('data-genre').toLowerCase());
  
  genres.forEach(g => {
    if (!existingBtns.includes(g.toLowerCase())) {
      const btn = document.createElement('button');
      btn.className = 'genre-pill';
      btn.setAttribute('data-genre', g);
      btn.textContent = g;
      btn.onclick = () => filterWom(g);
      container.appendChild(btn);
      existingBtns.push(g.toLowerCase());
    }
  });
};

// Cargar elementos guardados al inicio
try {
  const saved = localStorage.getItem('wom_custom_items');
  if(saved) {
    const customItems = JSON.parse(saved);
    customItems.forEach(item => injectCustomItem(item));
  }
} catch(e) {}

window.toggleWomLike = function(id, btnElement) {
  if(!AppState.user && typeof window.openAuthModal === 'function') {
    alert(AppState.language === 'es' ? "Inicia sesión para dar me gusta" : "Log in to like");
    return;
  }
  
  if(!AppState.likedMovies) AppState.likedMovies = [];
  
  const numId = Number(id);
  const idx = AppState.likedMovies.findIndex(l => Number(l) === numId);
  const isNowLiked = idx === -1;
  
  if(isNowLiked) {
    AppState.likedMovies.push(numId);
  } else {
    AppState.likedMovies.splice(idx, 1);
  }
  
  // Guardar en localStorage
  if (AppState.user) {
    localStorage.setItem('likedMovies_' + AppState.user.name, JSON.stringify(AppState.likedMovies));
    if (AppState.user.email) localStorage.setItem('likedMovies_' + AppState.user.email, JSON.stringify(AppState.likedMovies));
  }
  localStorage.setItem('likedMovies', JSON.stringify(AppState.likedMovies));
  
  // Actualizar UI
  let btns = [];
  if (btnElement) {
    btns.push(btnElement);
  } else {
    btns = document.querySelectorAll(`button[onclick*="toggleWomLike(${id})"], button[onclick*="toggleWomLike('${id}')"]`);
  }
  
  if (btns.length > 0) {
    btns.forEach(btn => {
      const svg = btn.querySelector('svg');
      if (svg) {
        if (isNowLiked) {
          svg.setAttribute('fill', '#ef4444');
          svg.setAttribute('stroke', '#ef4444');
        } else {
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', 'white');
        }
      } else {
        btn.style.color = isNowLiked ? '#ef4444' : 'white';
        btn.textContent = isNowLiked ? '❤️ Me gusta' : '🤍 Me gusta';
      }
    });
  } else {
    // Fallback re-render
    if (typeof setWomCategory === 'function' && AppState.currentWomCategory) {
      setWomCategory(AppState.currentWomCategory);
    }
  }
  
  if (typeof window.renderLikesGrid === 'function') window.renderLikesGrid();
  if (typeof window.renderLikesCount === 'function') window.renderLikesCount();
};

window.openWomPlaylistModal = function(id) {
  AppState.selectedWomItemId = id;
  const modal = document.getElementById('wom-playlist-modal');
  if (!modal) {
    createWomPlaylistModal();
  } else {
    renderWomPlaylistModal();
    modal.style.display = 'flex';
  }
};

window.closeWomPlaylistModal = function() {
  const modal = document.getElementById('wom-playlist-modal');
  if (modal) modal.style.display = 'none';
};

function createWomPlaylistModal() {
  const modal = document.createElement('div');
  modal.id = 'wom-playlist-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 400px; text-align: center;">
      <h3 style="color: white; margin-bottom: 20px;">Añadir a Mis Listas WOM</h3>
      <div id="wom-playlist-list" style="display: flex; flex-direction: column; gap: 10px; max-height: 300px; overflow-y: auto; margin-bottom: 20px;">
      </div>
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input type="text" id="new-wom-list-name" placeholder="Nueva lista..." style="flex: 1; padding: 10px; border-radius: 6px; border: 1px solid #444; background: #2a2a3c; color: white;">
        <button onclick="createNewWomList()" style="background: var(--accent-purple); color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer;">Crear</button>
      </div>
      <button class="close-btn" onclick="closeWomPlaylistModal()" style="margin-top: 0;">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  renderWomPlaylistModal();
}

window.renderWomPlaylistModal = function() {
  const listContainer = document.getElementById('wom-playlist-list');
  if (!listContainer) return;
  
  if (typeof window.loadCustomLists === 'function') window.loadCustomLists();
  
  listContainer.innerHTML = '';
  
  if (!AppState.customLists) return;
  
  AppState.customLists.forEach(list => {
    const btn = document.createElement('button');
    const hasItem = list.movies.includes(AppState.selectedWomItemId);
    btn.style.background = hasItem ? 'var(--accent-purple)' : 'rgba(255,255,255,0.1)';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.padding = '12px';
    btn.style.borderRadius = '6px';
    btn.style.cursor = 'pointer';
    btn.style.textAlign = 'left';
    btn.innerHTML = `${list.name} ${hasItem ? '✓' : ''}`;
    btn.onclick = () => toggleItemInWomList(list.id, AppState.selectedWomItemId);
    listContainer.appendChild(btn);
  });
};

window.toggleItemInWomList = function(listId, itemId) {
  const list = AppState.customLists.find(l => l.id === listId);
  if (list) {
    const idx = list.movies.indexOf(itemId);
    if (idx > -1) list.movies.splice(idx, 1);
    else list.movies.push(itemId);
    if (typeof window.saveCustomLists === 'function') window.saveCustomLists();
    renderWomPlaylistModal();
  }
};

window.createNewWomList = function() {
  const input = document.getElementById('new-wom-list-name');
  if (input && input.value.trim()) {
    if (typeof window.loadCustomLists === 'function') window.loadCustomLists();
    AppState.customLists.push({ id: 'custom_list_' + Date.now(), name: input.value.trim(), movies: [] });
    if (typeof window.saveCustomLists === 'function') window.saveCustomLists();
    input.value = '';
    renderWomPlaylistModal();
  }
};

window.renderWomListsView = function() {
  const grid = document.getElementById('wom-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  if (typeof window.loadCustomLists === 'function') window.loadCustomLists();
  
  if (!AppState.customLists || AppState.customLists.length === 0) {
    grid.innerHTML = '<p style="color: white; padding: 20px;">No tienes listas aún.</p>';
    return;
  }
  
  AppState.customLists.forEach(list => {
    const listSection = document.createElement('div');
    listSection.style.width = '100%';
    listSection.style.marginBottom = '30px';
    
    const listTitle = document.createElement('h3');
    listTitle.style.color = 'white';
    listTitle.style.borderBottom = '1px solid #444';
    listTitle.style.paddingBottom = '10px';
    listTitle.style.marginBottom = '15px';
    listTitle.textContent = list.name;
    listSection.appendChild(listTitle);
    
    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'movies-grid';
    itemsGrid.style.width = '100%';
    
    if (list.movies.length === 0) {
      itemsGrid.innerHTML = '<p style="color: #aaa; font-style: italic;">Lista vacía</p>';
    } else {
      // Find items in all arrays
      const itemsToRender = list.movies.map(id => typeof window.findGlobalItemById === 'function' ? window.findGlobalItemById(id) : null).filter(i => i);
      
      // Let's render the cards for this list
      itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.cursor = 'pointer';
        card.onclick = () => window.openWomDetailsModal ? window.openWomDetailsModal('${item.movie_identifier || item.id}') : null;
        
        card.setAttribute('data-id', item.movie_identifier || item.id);
        
        let fallbackText = item.display_name || item.title || '';
        let fallbackSub1 = item.release_year || item.date || item.runtime_minutes || '';
        let fallbackSub2 = (item.filmmaker && item.filmmaker.director_name) ? item.filmmaker.director_name : (item.location || '');
        let finalFallbackText = fallbackText;
        if (fallbackSub1 && fallbackSub1 !== 'Por confirmar' && fallbackSub1 !== 'Por definir') finalFallbackText += '\n' + fallbackSub1;
        if (fallbackSub2) finalFallbackText += '\n' + fallbackSub2;
        let currentId = item.movie_identifier || item.id;
        let isLiked = typeof window.isItemLiked === 'function' ? window.isItemLiked(currentId) : (AppState.likedMovies && AppState.likedMovies.findIndex(l => Number(l) === Number(currentId)) !== -1);
        let heartFill = isLiked ? '#ef4444' : 'none';
        let heartStroke = isLiked ? '#ef4444' : 'white';
        let fallbackImg = `https://placehold.co/600x900/1e1e2f/ffffff?text=${encodeURIComponent(finalFallbackText)}`;
        let imgUrl = item.cover_image_url || item.image || fallbackImg;

        card.innerHTML = `
          <div class="card-image-wrapper">
            <img src="${imgUrl}" alt="${item.display_name || item.title}" loading="lazy" class="card-img" onerror="this.onerror=null; this.src='${fallbackImg}'">
            <div class="card-overlay">
              <button class="card-like-btn" title="Me gusta" onclick="toggleWomLike('${item.movie_identifier || item.id}', this); event.stopPropagation(); if(typeof window.renderLikesGrid === 'function') window.renderLikesGrid();" style="background: rgba(0,0,0,0.6); border-radius: 50%; padding: 8px;">
                <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="${heartStroke}" stroke-width="2" style="width: 20px; height: 20px;">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${item.display_name || item.title}</h3>
            <div class="card-info">
              <span>${item.release_year || item.year || ''}</span>
              <span>${item.category_type || item.genre || ''}</span>
            </div>
            <button onclick="toggleItemInWomList('${list.id}', ${item.movie_identifier || item.id}); setWomCategory('listas');" style="background: #e74c3c; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; margin-top: 5px; width: 100%;">Eliminar de lista</button>
          </div>
        `;
        itemsGrid.appendChild(card);
      });
    }
    
    listSection.appendChild(itemsGrid);
    listSection.appendChild(itemsGrid);
    grid.appendChild(listSection);
  });
};

window.openWomDetailsModal = function(id) {
  const item = findGlobalItemById(id);
  if (!item) return;

  const modal = document.getElementById('wom-details-modal');
  if (!modal) return;

  // Banner and Poster
  let fallbackText = item.display_name || item.title || '';
  let fallbackImg = `https://placehold.co/600x900/1e1e2f/ffffff?text=${encodeURIComponent(fallbackText)}`;
  let imgUrl = item.cover_image_url || item.image || fallbackImg;
  let bgUrl = item.bg_image_url || imgUrl;
  
  document.getElementById('wom-details-banner').style.backgroundImage = `url('${bgUrl}')`;
  document.getElementById('wom-details-poster').src = imgUrl;

  // Title and Meta
  document.getElementById('wom-details-title').textContent = fallbackText;
  
  let meta = [];
  if (item.release_year || item.date) meta.push(item.release_year || item.date);
  if (item.category_type) meta.push(item.category_type);
  if (item.average_score) meta.push(`⭐ ${item.average_score}`);
  document.getElementById('wom-details-meta').textContent = meta.join(' | ');

  // Actions
  let actionsHtml = '';
  if (item.video_url) {
    document.getElementById('wom-details-video-container').style.display = 'block';
    document.getElementById('wom-details-video-iframe').src = item.video_url;
    document.getElementById('wom-details-banner').style.display = 'none';
    document.getElementById('wom-details-content-wrapper').style.marginTop = '0px';
  } else {
    document.getElementById('wom-details-video-container').style.display = 'none';
    document.getElementById('wom-details-video-iframe').src = '';
    document.getElementById('wom-details-banner').style.display = 'block';
    document.getElementById('wom-details-content-wrapper').style.marginTop = '-60px';
  }
  
  let isLiked = typeof window.isItemLiked === 'function' ? window.isItemLiked(id) : (AppState.likedMovies && AppState.likedMovies.findIndex(l => Number(l) === Number(id)) !== -1);
  actionsHtml = `<div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
    <button onclick="toggleWomLike('${id}', this); openWomDetailsModal('${id}');" style="background: rgba(255,255,255,0.1); color: ${isLiked ? '#ef4444' : 'white'}; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer;">${isLiked ? '❤️ Me gusta' : '🤍 Me gusta'}</button>
    <button onclick="openWomPlaylistModal('${id}')" style="background: var(--accent-purple); color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer;">+ Añadir a mi lista</button>
    <button onclick="openCommentsModal('${id}', '${(item.display_name || item.title || '').replace(/'/g, "\\'")}')" style="background: transparent; color: var(--accent-purple); border: 1px solid var(--accent-purple); padding: 10px 15px; border-radius: 6px; cursor: pointer;">💬 Comentar</button>
  </div>`;
  document.getElementById('wom-details-actions').innerHTML = actionsHtml;

  // Synopsis / Idea
  let idea = item.song_idea ? (item.song_idea[AppState.language] || item.song_idea.es || item.song_idea) : '';
  let synopsis = item.synopsis_text ? (item.synopsis_text[AppState.language] || item.synopsis_text.es || item.synopsis_text) : (item.desc || '');
  let finalSynopsis = idea ? `<strong style="color:white; display:block; margin-bottom: 5px;">Idea de la canción:</strong>${idea}<br/><br/>${synopsis}` : synopsis;
  document.getElementById('wom-details-synopsis').innerHTML = finalSynopsis || 'No hay información adicional disponible.';

  // Author / Director / Artista
  const authorSection = document.getElementById('wom-details-author-section');
  const authorName = document.getElementById('wom-details-author-name');
  const authorTitle = document.getElementById('wom-details-author-title');
  
  let authorStr = '';
  if (item.filmmaker && item.filmmaker.director_name) authorStr = item.filmmaker.director_name;
  else if (item.artist) authorStr = item.artist;
  else if (item.author) authorStr = item.author;

  let artistDesc = item.artist_description ? (item.artist_description[AppState.language] || item.artist_description.es || item.artist_description) : '';

  if (authorStr) {
    authorSection.style.display = 'block';
    
    if (artistDesc) {
      authorName.innerHTML = `<span style="font-weight:bold; color:white;">${authorStr}</span><br/><span style="font-size: 13px; color: #aaa; display:block; margin-top:5px;">${artistDesc}</span>`;
    } else {
      authorName.textContent = authorStr;
    }
    
    if (item.category_type === 'Música' || item.artist) authorTitle.textContent = 'Artista / Banda';
    else authorTitle.textContent = item.category_type === 'Canción' || item.category_type === 'Música' ? 'Artista' : (item.category_type === 'Libro' ? 'Autor' : 'Director / Creador');
  } else {
    authorSection.style.display = 'none';
  }

  // Cast / Characters
  const castSection = document.getElementById('wom-details-cast-section');
  const castList = document.getElementById('wom-details-cast-list');
  castList.innerHTML = '';
  
  if (item.actors_list && item.actors_list.length > 0) {
    item.actors_list.forEach(actor => {
      let role = actor.character_role ? (actor.character_role[AppState.language] || actor.character_role.es || actor.character_role) : '';
      let desc = actor.character_desc ? (actor.character_desc[AppState.language] || actor.character_desc.es || actor.character_desc) : '';
      
      castList.innerHTML += `
        <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 8px;">
          <strong style="color: white; display: block; font-size: 15px;">${actor.actor_fullname}</strong>
          <span style="color: var(--accent-purple); font-size: 13px; display: block; margin-top: 4px;">${role}</span>
          ${desc ? `<p style="color: #aaa; font-size: 12px; margin-top: 8px; line-height: 1.4;">${desc}</p>` : ''}
        </div>
      `;
    });
    castSection.style.display = 'block';
  } else {
    castSection.style.display = 'none';
  }

  modal.style.display = 'flex';
};

window.closeWomDetailsModal = function() {
  const modal = document.getElementById('wom-details-modal');
  if (modal) {
    modal.style.display = 'none';
    const iframe = document.getElementById('wom-details-video-iframe');
    if (iframe) iframe.src = '';
  }
};
