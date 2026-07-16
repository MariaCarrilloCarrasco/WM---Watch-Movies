const fs = require('fs');

const adminLogic = `
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
  
  const coverText = title + '\\n' + creator;
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
`;

fs.appendFileSync('js/wom.js', '\\n' + adminLogic);
console.log("Admin logic appended.");
