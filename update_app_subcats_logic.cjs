const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

const targetLogic = `  // Botones de categorías rápidas en Explore
  const exploreCategories = document.querySelectorAll('.explore-category-card');
  exploreCategories.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      let query = '';
      if (category === 'genres') query = 'Sci-Fi';
      else if (category === 'year') query = '2024';
      else if (category === 'popular') query = '8.6';
      else if (category === 'awards') query = 'Villeneuve';
      else if (category === 'streaming') query = 'The Midnight Echo';
      else if (category === 'directors') query = 'Nolan';

      handleSearchInput(query);
    });
  });`;

const replacementLogic = `  // Botones de categorías interactivas en Explore
  const exploreCategories = document.querySelectorAll('.explore-category-card');
  const subcatContainer = document.getElementById('explore-subcategories-container');
  const subcatList = document.getElementById('explore-subcategories-list');
  const subcatTitle = document.getElementById('explore-subcategories-title');
  const categoriesGrid = document.getElementById('explore-categories-grid');
  const subcatBack = document.getElementById('explore-subcategories-back');

  if (subcatBack) {
    subcatBack.addEventListener('click', () => {
      subcatContainer.style.display = 'none';
      categoriesGrid.style.display = 'grid';
    });
  }

  function applyExploreFilter(key, value) {
    if (key === 'trend') AppState.exploreFilters.trend = value;
    else if (key === 'genre') AppState.exploreFilters.genre = value;
    else AppState.exploreFilters[key] = value;
    
    // Si la propiedad no existía en el objeto principal de filtros, se añade:
    if (!('year' in AppState.exploreFilters)) {
      AppState.exploreFilters.year = 'All';
      AppState.exploreFilters.awards = false;
      AppState.exploreFilters.streaming = 'All';
      AppState.exploreFilters.director = 'All';
    }
    AppState.exploreFilters[key] = value;
    
    subcatContainer.style.display = 'none';
    categoriesGrid.style.display = 'grid';
    
    renderActiveFiltersList();
    renderSearchSuggestions();
  }

  exploreCategories.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      subcatList.innerHTML = '';
      
      const isEs = AppState.language === 'es';
      
      if (category === 'popular') {
        applyExploreFilter('trend', 'trending');
        return;
      }
      
      if (category === 'awards') {
        applyExploreFilter('awards', true);
        return;
      }
      
      categoriesGrid.style.display = 'none';
      subcatContainer.style.display = 'block';
      
      let options = [];
      let filterKey = '';
      
      if (category === 'genres') {
        subcatTitle.textContent = isEs ? 'Selecciona un Género' : 'Select a Genre';
        options = ['Action', 'Sci-Fi', 'Drama', 'Adventure', 'Thriller', 'Animation'];
        filterKey = 'genre';
      } else if (category === 'year') {
        subcatTitle.textContent = isEs ? 'Selecciona un Año' : 'Select a Year';
        options = ['2026', '2025', '2024', '2023', '2022', '2021', '2020'];
        filterKey = 'year';
      } else if (category === 'streaming') {
        subcatTitle.textContent = isEs ? 'Plataforma de Streaming' : 'Streaming Platform';
        options = ['Netflix', 'Apple TV+', 'Max', 'Amazon Prime', 'Disney+', 'Hulu'];
        filterKey = 'streaming';
      } else if (category === 'directors') {
        subcatTitle.textContent = isEs ? 'Directores Destacados' : 'Top Directors';
        options = ['Christopher Nolan', 'Denis Villeneuve', 'Ridley Scott', 'Wes Ball', 'Bong Joon-ho'];
        filterKey = 'director';
      }
      
      options.forEach(opt => {
        const btn = document.createElement('button');
        btn.style.padding = '8px 16px';
        btn.style.background = 'rgba(255,255,255,0.1)';
        btn.style.color = '#fff';
        btn.style.border = '1px solid rgba(255,255,255,0.2)';
        btn.style.borderRadius = '20px';
        btn.style.cursor = 'pointer';
        btn.textContent = opt;
        
        btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,0.2)';
        btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,0.1)';
        
        btn.onclick = () => {
          applyExploreFilter(filterKey, opt);
        };
        
        subcatList.appendChild(btn);
      });
    });
  });`;

appJs = appJs.replace(targetLogic, replacementLogic);
fs.writeFileSync(appJsPath, appJs);
console.log('Categories interaction logic updated');
