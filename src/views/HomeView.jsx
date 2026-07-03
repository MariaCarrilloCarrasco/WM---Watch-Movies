import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMoviesAPI } from '../services/apiService';

export default function HomeView() {
  const { 
    toggleLike, 
    toggleMyList, 
    likedMovies, 
    myListMovies, 
    setSelectedMovie, 
    activeGenre, 
    setActiveGenre,
    language,
    executeServiceAction
  } = useApp();

  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const isEs = language === 'es';

  // Load all movies from API
  useEffect(() => {
    async function loadData() {
      const allMovies = await fetchMoviesAPI();
      setMovies(allMovies);
    }
    loadData();
  }, []);

  // Filter movies by genre
  const getFilteredMovies = () => {
    if (activeGenre === 'All') return movies;
    return movies.filter(m => m.genre.toLowerCase().includes(activeGenre.toLowerCase()));
  };

  // Reset pagination when genre or full movies list changes
  useEffect(() => {
    const filtered = getFilteredMovies();
    setDisplayedMovies(filtered.slice(0, 8));
    setPage(1);
    setHasMore(filtered.length > 8);
  }, [activeGenre, movies]);

  // Load more movies (Scroll Pagination)
  const loadNextPage = () => {
    if (loading || !hasMore) return;
    setLoading(true);

    executeServiceAction(
      () => {
        setTimeout(() => {
          const filtered = getFilteredMovies();
          const nextStart = page * 8;
          const nextEnd = nextStart + 8;
          const nextBatch = filtered.slice(nextStart, nextEnd);
          
          setDisplayedMovies(prev => [...prev, ...nextBatch]);
          setPage(prev => prev + 1);
          setHasMore(filtered.length > nextEnd);
          setLoading(false);
        }, 600);
      },
      {
        es: 'Error de red al cargar más películas. Por favor, reintente.',
        en: 'Network error while loading more movies. Please retry.'
      },
      () => loadNextPage()
    );
  };

  // Attach window scroll listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        loadNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, hasMore, loading, activeGenre, movies]);

  // Genres definitions
  const genres = ['All', 'Sci-Fi', 'Drama', 'Action', 'Biography', 'Thriller'];

  const heroMovie = movies[0]; // Hero banner movie

  return (
    <div id="view-home" className="app-view active">
      {/* Hero Banner */}
      {heroMovie && (
        <section className="hero-banner" style={{ backgroundImage: `url(${heroMovie.backdrop})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-badge">{isEs ? 'Destacada del Mes' : 'Featured Movie'}</span>
            <h1 className="hero-title">{heroMovie.title}</h1>
            <p className="hero-meta">{heroMovie.year} &bull; {heroMovie.genre} &bull; {heroMovie.duration} min</p>
            <p className="hero-description">{heroMovie.synopsis[language] || heroMovie.synopsis.es}</p>
            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary" onClick={() => setSelectedMovie(heroMovie)}>
                <span>▶</span> {isEs ? 'Ver Ahora' : 'Watch Now'}
              </button>
              <button 
                className={`hero-btn hero-btn-secondary ${myListMovies.includes(heroMovie.id) ? 'active' : ''}`}
                onClick={() => toggleMyList(heroMovie.id)}
              >
                <span>{myListMovies.includes(heroMovie.id) ? '✓' : '+'}</span> {isEs ? 'Mi Lista' : 'My List'}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Genre Filter Pills */}
      <section className="genres-filter-section" style={{ marginTop: '32px' }}>
        <div className="genres-container" id="genres-container">
          {genres.map(g => (
            <button 
              key={g} 
              className={`genre-pill ${activeGenre === g ? 'active' : ''}`}
              onClick={() => setActiveGenre(g)}
            >
              {g === 'All' ? (isEs ? 'Todos' : 'All') : g}
            </button>
          ))}
        </div>
      </section>

      {/* Movies Grid */}
      <section className="movies-list-section" style={{ marginTop: '24px' }}>
        <div className="movies-grid">
          {displayedMovies.map(movie => (
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
                    className={`card-like-icon-btn ${likedMovies.includes(movie.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(movie.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                  >
                    {likedMovies.includes(movie.id) ? '❤️' : '🤍'}
                  </button>
                </div>
                <p className="card-meta">{movie.year} &bull; {movie.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="pagination-loader" style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
            <div className="pagination-spinner"></div>
          </div>
        )}
      </section>
    </div>
  );
}
