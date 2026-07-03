import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMoviesAPI } from '../services/apiService';

export default function MyListView() {
  const { myListMovies, toggleMyList, setSelectedMovie, language } = useApp();
  const [movies, setMovies] = useState([]);

  const isEs = language === 'es';

  useEffect(() => {
    async function loadData() {
      const allMovies = await fetchMoviesAPI();
      setMovies(allMovies);
    }
    loadData();
  }, []);

  const watchList = movies.filter(m => myListMovies.includes(m.id));

  return (
    <div id="view-mylist" className="app-view active">
      <div className="view-header">
        <h2 className="view-title">{isEs ? 'Mi Lista de Seguimiento' : 'My Watchlist'}</h2>
        <p className="view-subtitle">
          {isEs ? 'Colección de películas guardadas para ver más tarde' : 'Collection of movies saved to watch later'}
        </p>
      </div>

      {watchList.length === 0 ? (
        /* Empty State */
        <div className="empty-state" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 20px', background: 'rgba(255,255,255,0.01)', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '8px', marginTop: '24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>
            {isEs ? 'Tu lista está vacía' : 'Your list is empty'}
          </h3>
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
            {isEs ? 'Añade películas pulsando el botón "+ Mi Lista" en la ficha de detalles.' : 'Add movies by clicking the "+ My List" button in the movie details sheet.'}
          </p>
        </div>
      ) : (
        <div className="movies-grid" style={{ marginTop: '24px' }}>
          {watchList.map(movie => (
            <div key={movie.id} className="movie-card" style={{ cursor: 'pointer' }}>
              <div className="card-image-wrapper" onClick={() => setSelectedMovie(movie)}>
                <img src={movie.poster} alt={movie.title} className="card-img" />
                <div className="card-gradient"></div>
                <div className="card-rating">★ {movie.rating.toFixed(1)}</div>
              </div>
              <div className="card-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="card-title" onClick={() => setSelectedMovie(movie)}>{movie.title}</h3>
                  <button 
                    onClick={() => toggleMyList(movie.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}
                    title={isEs ? 'Quitar de la lista' : 'Remove from watchlist'}
                  >
                    ❌
                  </button>
                </div>
                <p className="card-meta">{movie.year} &bull; {movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
