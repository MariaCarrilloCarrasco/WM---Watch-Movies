import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMoviesAPI } from '../services/apiService';

export default function ExploreView() {
  const { setSelectedMovie, setSelectedPerson, language, likedMovies, toggleLike } = useApp();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const isEs = language === 'es';

  useEffect(() => {
    async function loadData() {
      const allMovies = await fetchMoviesAPI();
      setMovies(allMovies);
      setSearchResults(allMovies);
    }
    loadData();
  }, []);

  // Filter based on search query
  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      setSearchResults(movies);
      return;
    }

    const filtered = movies.filter(movie => {
      const matchTitle = movie.title.toLowerCase().includes(q);
      const matchDirector = movie.director && movie.director.name.toLowerCase().includes(q);
      const matchCast = movie.cast.some(actor => actor.name.toLowerCase().includes(q));
      return matchTitle || matchDirector || matchCast;
    });

    setSearchResults(filtered);
  }, [searchQuery, movies]);

  return (
    <div id="view-explore" className="app-view active">
      <div className="view-header">
        <h2 className="view-title">{isEs ? 'Explorar el Universo' : 'Explore the Universe'}</h2>
        <p className="view-subtitle">
          {isEs ? 'Encuentra películas por título, directores o miembros del elenco' : 'Find movies by title, directors, or cast members'}
        </p>
      </div>

      {/* Search Input */}
      <div className="search-bar-container" style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
        <input 
          type="text" 
          className="search-input" 
          placeholder={isEs ? 'Buscar películas, directores, actores...' : 'Search movies, directors, actors...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            flex: 1, 
            padding: '12px 18px', 
            fontSize: '14px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '4px', 
            color: '#fff', 
            outline: 'none' 
          }}
        />
        {searchQuery && (
          <button 
            className="detail-btn" 
            onClick={() => setSearchQuery('')}
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}
          >
            {isEs ? 'Limpiar' : 'Clear'}
          </button>
        )}
      </div>

      {/* Results grid */}
      <div className="movies-grid" style={{ marginTop: '28px' }}>
        {searchResults.map(movie => (
          <div key={movie.id} className="movie-card" style={{ cursor: 'pointer' }}>
            <div className="card-image-wrapper">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="card-img" 
                onClick={() => setSelectedMovie(movie)}
              />
              <div className="card-gradient"></div>
              <div className="card-rating">★ {movie.rating.toFixed(1)}</div>
            </div>
            <div className="card-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="card-title" onClick={() => setSelectedMovie(movie)}>{movie.title}</h3>
                <button 
                  className={`card-like-icon-btn ${likedMovies.includes(movie.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(movie.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                >
                  {likedMovies.includes(movie.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <p className="card-meta">{movie.year} &bull; {movie.genre}</p>
              <div style={{ marginTop: '10px', fontSize: '11px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {movie.director && (
                  <span 
                    onClick={() => setSelectedPerson(movie.director.name)}
                    style={{ background: 'rgba(6,182,212,0.1)', color: 'var(--accent-cyan)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    🎬 {movie.director.name}
                  </span>
                )}
                {movie.cast.slice(0, 2).map(actor => (
                  <span 
                    key={actor.name}
                    onClick={() => setSelectedPerson(actor.name)}
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    👤 {actor.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {searchResults.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
          <p>{isEs ? 'No se encontraron resultados para tu búsqueda.' : 'No results found for your search.'}</p>
        </div>
      )}
    </div>
  );
}
