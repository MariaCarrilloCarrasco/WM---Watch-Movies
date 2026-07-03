import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMoviesAPI } from '../services/apiService';

export default function LikesView() {
  const { 
    likedMovies, 
    toggleLike, 
    userRatings, 
    setRating, 
    setSelectedMovie, 
    language,
    likesLoading
  } = useApp();

  const [movies, setMovies] = useState([]);
  const [currentPlayIndex, setCurrentPlayIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const isEs = language === 'es';

  useEffect(() => {
    async function loadData() {
      const allMovies = await fetchMoviesAPI();
      setMovies(allMovies);
    }
    loadData();
  }, []);

  const likedList = movies.filter(m => likedMovies.includes(m.id));

  // Playback control
  const handlePlayToggle = () => {
    if (likedList.length === 0) return;
    if (currentPlayIndex === -1) {
      setCurrentPlayIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextPlay = () => {
    if (likedList.length === 0) return;
    const nextIdx = (currentPlayIndex + 1) % likedList.length;
    setCurrentPlayIndex(nextIdx);
  };

  const currentPlayingMovie = currentPlayIndex >= 0 && currentPlayIndex < likedList.length ? likedList[currentPlayIndex] : null;

  return (
    <div id="view-likes" className="app-view active" style={{ position: 'relative' }}>
      
      {/* 400ms Loader Overlay */}
      {likesLoading && (
        <div id="likes-view-loader" className="view-loader-overlay" style={{ display: 'flex' }}>
          <div className="pagination-spinner"></div>
          <span style={{ marginLeft: '12px', fontSize: '13px', fontWeight: 600 }}>
            {isEs ? 'Recuperando favoritas...' : 'Retrieving favorites...'}
          </span>
        </div>
      )}

      <div className="view-header">
        <h2 className="view-title">{isEs ? 'Películas Favoritas' : 'Favorite Movies'}</h2>
        <p className="view-subtitle">
          {isEs ? 'Tu colección de películas preferidas y valoraciones personales' : 'Your collection of preferred movies and personal ratings'}
        </p>
      </div>

      {likedList.length === 0 ? (
        /* Empty State */
        <div className="empty-state" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '60px 20px', background: 'rgba(255,255,255,0.01)', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '8px', marginTop: '24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❤️</div>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>
            {isEs ? 'No tienes películas favoritas' : 'No favorite movies'}
          </h3>
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
            {isEs ? 'Explora el catálogo y añade películas pulsando el icono del corazón.' : 'Explore the catalog and add movies by clicking the heart icon.'}
          </p>
        </div>
      ) : (
        <>
          {/* Playlist Player Controls */}
          <section className="playlist-player-panel" style={{ marginTop: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
                  {isEs ? 'Reproductor de Playlist' : 'Playlist Player'}
                </h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#fff', fontWeight: 600 }}>
                  {currentPlayingMovie 
                    ? `${isEs ? 'Reproduciendo:' : 'Now Playing:'} ${currentPlayingMovie.title}` 
                    : (isEs ? 'Listo para reproducir' : 'Ready to play')
                  }
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="detail-btn detail-btn-primary" onClick={handlePlayToggle}>
                  {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
                </button>
                <button className="detail-btn" onClick={handleNextPlay} disabled={likedList.length <= 1}>
                  ⏭ Siguiente
                </button>
              </div>
            </div>
            {currentPlayingMovie && isPlaying && (
              <div style={{ marginTop: '16px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '45%', background: 'var(--accent-cyan)', animation: 'progressSim 15s linear infinite' }}></div>
              </div>
            )}
          </section>

          {/* Favorites List Grid */}
          <div className="playlist-container" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {likedList.map((movie, index) => {
              const rating = userRatings[movie.id] || '';
              return (
                <div 
                  key={movie.id} 
                  className={`playlist-row-item ${currentPlayIndex === index ? 'playing' : ''}`}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    background: currentPlayIndex === index ? 'rgba(6,182,212,0.06)' : 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    padding: '12px 16px', 
                    borderRadius: '6px', 
                    flexWrap: 'wrap', 
                    gap: '12px' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => setSelectedMovie(movie)}>
                    <img src={movie.poster} alt={movie.title} style={{ width: '40px', height: '56px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '14px', color: '#fff' }}>{movie.title}</h4>
                      <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--text-secondary)' }}>{movie.genre}</p>
                    </div>
                  </div>

                  {/* Interactive Score Selector */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>
                        {isEs ? 'Tu Nota:' : 'Your Score:'}
                      </span>
                      <select 
                        className="playlist-item-score-select"
                        value={rating}
                        onChange={(e) => setRating(movie.id, e.target.value)}
                        style={{ 
                          background: 'rgba(0,0,0,0.4)', 
                          border: '1px solid rgba(255,255,255,0.15)', 
                          color: '#fff', 
                          padding: '6px 10px', 
                          borderRadius: '4px', 
                          fontSize: '12px', 
                          outline: 'none', 
                          cursor: 'pointer' 
                        }}
                      >
                        <option value="">{isEs ? 'Sin valorar' : 'Unrated'}</option>
                        {[...Array(10).keys()].map(i => (
                          <option key={i+1} value={i+1}>★ {i+1}</option>
                        ))}
                      </select>
                    </div>

                    <button 
                      onClick={() => toggleLike(movie.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(239,68,68,0.8)', fontSize: '18px' }}
                      title={isEs ? 'Quitar de favoritos' : 'Remove from favorites'}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
