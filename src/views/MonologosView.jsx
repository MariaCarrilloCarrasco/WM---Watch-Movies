import React from 'react';
import { useApp } from '../context/AppContext';
import { MONOLOGISTAS_DATA } from '../data/mockData';

export default function MonologosView({ onSelectComedian }) {
  const { language } = useApp();

  const isEs = language === 'es';

  return (
    <div id="view-monologos" className="app-view active">
      <div className="view-header">
        <h2 className="view-title">WOM! Monólogos & Comedy</h2>
        <p className="view-subtitle">
          {isEs ? 'Ríete con los mejores monologistas de la escena actual en WOM!' : 'Laugh with the best stand-up comedians on WOM!'}
        </p>
      </div>
      
      {/* Comedians grid */}
      <div className="movies-grid" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {MONOLOGISTAS_DATA.map(mono => (
          <div 
            key={mono.id} 
            className="movie-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectComedian(mono)}
          >
            <div className="card-image-wrapper">
              <img src={mono.image} alt={mono.name} className="card-img" style={{ height: '280px', objectFit: 'cover', width: '100%' }} />
              <div className="card-gradient"></div>
              <div className="card-rating">🎤</div>
            </div>
            <div className="card-info">
              <h3 className="card-title">{mono.name}</h3>
              <p className="card-meta" style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>{mono.style}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
                {mono.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
