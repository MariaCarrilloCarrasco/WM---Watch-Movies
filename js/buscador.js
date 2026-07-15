function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');

  const handleSearchInput = (value) => {
    AppState.searchQuery = value;
    
    // Sincronizar el valor de ambos campos de texto
    if (searchInput) searchInput.value = value;
    if (exploreSearchInput) exploreSearchInput.value = value;
    
    if (AppState.currentTab === 'home') {
      AppState.currentPage = 1;
      AppState.hasMoreMovies = true;
      AppState.loadingMovies = false;
      renderHome();
    } else {
      renderSearchSuggestions();
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  if (exploreSearchInput) {
    exploreSearchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  // Botones de categorías interactivas en Explore
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
    
    renderActiveFilters();
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
  });

  // Listeners para los selectores de filtros de la pestaña de Explorar (Género, Puntuación, Tendencia)
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  const handleFilterChange = () => {
    if (selectGenre) AppState.exploreFilters.genre = selectGenre.value;
    if (selectRating) AppState.exploreFilters.rating = selectRating.value;
    if (selectTrend) AppState.exploreFilters.trend = selectTrend.value;

    AppState.currentPage = 1;
    AppState.hasMoreMovies = true;
    AppState.loadingMovies = false;

    renderSearchSuggestions();
    renderActiveFilters();
  };

  if (selectGenre) selectGenre.addEventListener('change', handleFilterChange);
  if (selectRating) selectRating.addEventListener('change', handleFilterChange);
  if (selectTrend) selectTrend.addEventListener('change', handleFilterChange);

  // Listener para el botón de limpiar todos los filtros
  const clearAllBtn = document.getElementById('clear-all-filters-btn');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllFilters);
  }
}

function setupVoiceSearch() {
  const voiceBtn = document.getElementById('voice-search-btn');
  const exploreVoiceBtn = document.getElementById('explore-voice-search-btn');
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');
  
  if (!voiceBtn && !exploreVoiceBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (voiceBtn) {
      voiceBtn.style.opacity = '0.4';
      voiceBtn.title = 'Búsqueda por voz no soportada en este navegador';
    }
    if (exploreVoiceBtn) {
      exploreVoiceBtn.style.opacity = '0.4';
      exploreVoiceBtn.title = 'Búsqueda por voz no soportada en este navegador';
    }
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const toggleRecognition = () => {
    if (AppState.voiceSearchActive) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  if (voiceBtn) voiceBtn.addEventListener('click', toggleRecognition);
  if (exploreVoiceBtn) exploreVoiceBtn.addEventListener('click', toggleRecognition);

  recognition.onstart = () => {
    AppState.voiceSearchActive = true;
    if (voiceBtn) voiceBtn.classList.add('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.add('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Escuchando...' : 'Listening...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.onend = () => {
    AppState.voiceSearchActive = false;
    if (voiceBtn) voiceBtn.classList.remove('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.remove('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Buscar películas, géneros...' : 'Search movies, genres...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    AppState.searchQuery = transcript;
    
    if (searchInput) searchInput.value = transcript;
    if (exploreSearchInput) exploreSearchInput.value = transcript;
    
    renderSearchSuggestions();
  };

  recognition.onerror = (event) => {
    console.error('Error de reconocimiento de voz:', event.error);
    AppState.voiceSearchActive = false;
    if (voiceBtn) voiceBtn.classList.remove('listening');
    if (exploreVoiceBtn) exploreVoiceBtn.classList.remove('listening');
    
    const placeholderText = AppState.language === 'es' ? 'Buscar películas, géneros...' : 'Search movies, genres...';
    if (searchInput) searchInput.placeholder = placeholderText;
    if (exploreSearchInput) exploreSearchInput.placeholder = placeholderText;
  };
}

function renderActiveFilters() {
  const container = document.getElementById('active-filters-container');
  const filterList = document.getElementById('active-filters-list');
  
  if (!container || !filterList) return;

  const isEs = AppState.language === 'es';

  // Actualizar los textos de cabecera y botón según el idioma
  const labelEl = container.querySelector('.active-filters-label');
  if (labelEl) {
    labelEl.textContent = isEs ? 'Filtros activos:' : 'Active filters:';
  }
  const clearBtnEl = document.getElementById('clear-all-filters-btn');
  if (clearBtnEl) {
    clearBtnEl.innerHTML = isEs ? '✕ Limpiar todo' : '✕ Clear all';
    clearBtnEl.title = isEs ? 'Limpiar todos los filtros' : 'Clear all filters';
  }

  // Obtener filtros activos (no "All")
  const activeFilters = [];
  
  if (AppState.exploreFilters.genre !== 'All') {
    const genreName = GENRE_TRANSLATIONS[AppState.language][AppState.exploreFilters.genre] || AppState.exploreFilters.genre;
    activeFilters.push({
      type: 'genre',
      label: `${isEs ? 'Género' : 'Genre'}: ${genreName}`,
      value: AppState.exploreFilters.genre
    });
  }
  
  if (AppState.exploreFilters.rating !== 'All') {
    activeFilters.push({
      type: 'rating',
      label: `${isEs ? 'Puntuación' : 'Rating'}: ${AppState.exploreFilters.rating}+`,
      value: AppState.exploreFilters.rating
    });
  }
  
  if (AppState.exploreFilters.trend !== 'All') {
    let trendLabel = '';
    if (AppState.exploreFilters.trend === 'trending') {
      trendLabel = isEs ? 'Tendencia' : 'Trending';
    } else if (AppState.exploreFilters.trend === 'recent') {
      trendLabel = isEs ? 'Estrenos Recientes' : 'Recent Releases';
    }
    activeFilters.push({
      type: 'trend',
      label: trendLabel,
      value: AppState.exploreFilters.trend
    });
  }

  // Si no hay filtros activos, ocultar el contenedor
  if (activeFilters.length === 0) {
    container.style.display = 'none';
    filterList.innerHTML = '';
    return;
  }

  // Mostrar el contenedor y renderizar los filtros
  container.style.display = 'flex';
  
  filterList.innerHTML = activeFilters.map(filter => `
    <div class="active-filter-pill">
      <span>${filter.label}</span>
      <span class="active-filter-pill-remove" data-filter-type="${filter.type}" 
            title="${isEs ? 'Remover filtro' : 'Remove filter'}">✕</span>
    </div>
  `).join('');

  // Agregar listeners para remover filtros individuales
  filterList.querySelectorAll('.active-filter-pill-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.getAttribute('data-filter-type');
      removeFilter(filterType);
    });
  });
}

function removeFilter(filterType) {
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  if (filterType === 'genre' && selectGenre) {
    selectGenre.value = 'All';
    AppState.exploreFilters.genre = 'All';
  } else if (filterType === 'rating' && selectRating) {
    selectRating.value = 'All';
    AppState.exploreFilters.rating = 'All';
  } else if (filterType === 'trend' && selectTrend) {
    selectTrend.value = 'All';
    AppState.exploreFilters.trend = 'All';
  } else if (filterType === 'year') {
    AppState.exploreFilters.year = 'All';
  } else if (filterType === 'streaming') {
    AppState.exploreFilters.streaming = 'All';
  } else if (filterType === 'director') {
    AppState.exploreFilters.director = 'All';
  } else if (filterType === 'awards') {
    AppState.exploreFilters.awards = false;
  }

  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;

  renderSearchSuggestions();
  renderActiveFilters();
}

function clearAllFilters() {
  const selectGenre = document.getElementById('explore-filter-genre');
  const selectRating = document.getElementById('explore-filter-rating');
  const selectTrend = document.getElementById('explore-filter-trend');

  if (selectGenre) selectGenre.value = 'All';
  if (selectRating) selectRating.value = 'All';
  if (selectTrend) selectTrend.value = 'All';

  AppState.exploreFilters.genre = 'All';
  AppState.exploreFilters.rating = 'All';
  AppState.exploreFilters.trend = 'All';

  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;

  renderSearchSuggestions();
  renderActiveFilters();
}

function clearSearchQuery() {
  const searchInput = document.getElementById('search-input');
  const exploreSearchInput = document.getElementById('explore-search-input');
  
  AppState.searchQuery = '';
  if (searchInput) searchInput.value = '';
  if (exploreSearchInput) exploreSearchInput.value = '';
  
  AppState.currentPage = 1;
  AppState.hasMoreMovies = true;
  AppState.loadingMovies = false;
  
  if (AppState.currentTab === 'home') {
    renderHome();
  } else {
    renderSearchSuggestions();
  }
}

