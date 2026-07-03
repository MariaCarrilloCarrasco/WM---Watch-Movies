import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { PERSON_PROFILE_DATA } from '../data/mockData';
import { fetchMoviesAPI } from '../services/apiService';

export default function PersonModal() {
  const { selectedPerson, setSelectedPerson, language, setSelectedMovie } = useApp();
  const [movies, setMovies] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const isEs = language === 'es';

  useEffect(() => {
    async function loadData() {
      const allMovies = await fetchMoviesAPI();
      setMovies(allMovies);
    }
    loadData();
  }, []);

  if (!selectedPerson) return null;

  const normalized = selectedPerson.toLowerCase().trim();
  const profile = PERSON_PROFILE_DATA[normalized];

  // Encontrar todas las películas en las que dirige o actúa
  const directedMovies = movies.filter(m => m.director && m.director.name.toLowerCase() === normalized);
  const actedMovies = movies.filter(m => m.cast.some(actor => actor.name.toLowerCase() === normalized));
  const allAssociatedMovies = [...new Set([...directedMovies, ...actedMovies])];

  const role = directedMovies.length > 0 ? 'director' : actedMovies.length > 0 ? 'actor' : 'profile';
  const roleLabel = role === 'director'
    ? (isEs ? 'Director de Cine' : 'Film Director')
    : role === 'actor'
      ? (isEs ? 'Actor / Actriz' : 'Actor / Actress')
      : (isEs ? 'Profesional del Cine' : 'Film Professional');

  let photoUrl = profile?.photo || '';
  if (!photoUrl) {
    if (directedMovies.length > 0) {
      photoUrl = directedMovies[0].director.photo;
    } else if (actedMovies.length > 0) {
      const firstMovie = actedMovies[0];
      const actorIndex = firstMovie.cast.findIndex(actor => actor.name.toLowerCase() === normalized);
      const imageIndex = 40 + actorIndex + firstMovie.id;
      photoUrl = `https://images.unsplash.com/photo-${1500000000000 + imageIndex * 100000}?auto=format&fit=crop&w=150&h=150&q=80`;
    } else {
      photoUrl = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80';
    }
  }

  const nationality = profile?.nationality || (isEs ? 'Desconocida' : 'Unknown');
  const birthDate = profile?.birthDate || (isEs ? 'No disponible' : 'Not available');
  const biography = profile?.biography?.[language] || (isEs ? 'Biografía no disponible.' : 'Biography not available.');
  const videoSrc = profile?.videoSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
  const videoText = profile?.videoText?.[language] || (isEs ? 'Esta historia de vida se presenta con interpretación en lengua de signos, narración y subtítulos.' : 'This life story is presented with sign language interpretation, narration, and subtitles.');
  const videoSubtitles = profile?.videoSubtitles?.[language] || (isEs ? 'Subtítulos no disponibles.' : 'Subtitles not available.');

  const notableProjects = allAssociatedMovies.map(movie => movie.title).slice(0, 5);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setSelectedPerson(null); // Close person modal
  };

  return (
    <div id="person-modal" className="modal-overlay" style={{ display: 'flex', zIndex: 120 }}>
      <div 
        className="modal-content person-modal-content"
        style={{
          maxWidth: '650px',
          width: '95%',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: '#0c111e',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'var(--shadow-2xl)'
        }}
      >
        <button className="modal-close" onClick={() => setSelectedPerson(null)}>&times;</button>
        <div className="person-modal-header" style={{ padding: '24px 32px 12px 32px' }}>
          <div className="person-modal-photo" style={{ backgroundImage: `url(${photoUrl})`, width: '80px', height: '80px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', border: '2px solid var(--accent-cyan)' }}></div>
          <div className="person-modal-info" style={{ marginLeft: '16px' }}>
            <h3 className="person-modal-name" style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>{selectedPerson}</h3>
            <span className="person-modal-role" style={{ fontSize: '12px', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>{roleLabel}</span>
          </div>
        </div>

        <div style={{ padding: '0 32px 32px 32px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            <strong>{isEs ? 'Nacionalidad:' : 'Nationality:'}</strong> {nationality} <br />
            <strong>{isEs ? 'Fecha de Nacimiento:' : 'Birth Date:'}</strong> {birthDate}
          </p>
          
          <h4 className="person-modal-section-title" style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px', marginTop: '20px' }}>
            {isEs ? 'Biografía' : 'Biography'}
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{biography}</p>

          {/* Accessibility Media Player Section */}
          <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '16px', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>
                🗣️ {isEs ? 'Audiografía Accesible' : 'Accessible Audio-Bio'}
              </span>
              <button 
                className="detail-btn" 
                style={{ padding: '6px 12px', fontSize: '12px' }}
                onClick={() => setShowVideo(!showVideo)}
              >
                {showVideo ? (isEs ? 'Ocultar' : 'Hide') : (isEs ? 'Reproducir' : 'Play')}
              </button>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: 'var(--text-secondary)' }}>{videoText}</p>
            {showVideo && (
              <div style={{ marginTop: '14px' }}>
                <video 
                  src={videoSrc} 
                  controls 
                  autoPlay
                  style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <track label={isEs ? 'Español' : 'English'} kind="subtitles" srcLang={language} src="" default />
                </video>
                <div style={{ marginTop: '8px', padding: '10px', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', fontSize: '11px', color: '#fff', borderLeft: '3px solid var(--accent-cyan)' }}>
                  <strong>{isEs ? 'Subtítulos:' : 'Subtitles:'}</strong>
                  <p style={{ margin: '4px 0 0 0' }}>{videoSubtitles}</p>
                </div>
              </div>
            )}
          </div>

          <h4 className="person-modal-section-title" style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px', marginTop: '24px' }}>
            {isEs ? 'Proyectos destacados' : 'Highlighted projects'}
          </h4>
          <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--text-secondary)', margin: '8px 0 0 0' }}>
            {notableProjects.map(project => <li key={project}>{project}</li>)}
          </ul>

          <h4 className="person-modal-section-title" style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px', marginTop: '24px' }}>
            {isEs ? 'Filmografía' : 'Filmography'}
          </h4>
          <div className="person-movies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '12px', marginTop: '12px' }}>
            {allAssociatedMovies.map(movie => (
              <div 
                key={movie.id} 
                onClick={() => handleMovieClick(movie)}
                style={{ cursor: 'pointer', textAlign: 'center' }}
              >
                <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)' }} />
                <span style={{ fontSize: '11px', display: 'block', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}>{movie.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
