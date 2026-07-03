import React from 'react';
import { useApp } from '../context/AppContext';
import { TEATRO_DATA } from '../data/mockData';

export default function TeatroView({ onSelectCompany }) {
  const { language } = useApp();

  const isEs = language === 'es';

  return (
    <div id="view-teatro" className="app-view active">
      <div className="view-header">
        <h2 className="view-title">WOM! Compañías de Teatro</h2>
        <p className="view-subtitle">
          {isEs ? 'Descubre obras, clásicos y producciones teatrales premium en WOM!' : 'Discover plays, classics, and premium theatrical productions on WOM!'}
        </p>
      </div>
      
      {/* Companies grid */}
      <div className="movies-grid" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {TEATRO_DATA.map(co => (
          <div 
            key={co.id} 
            className="movie-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectCompany(co)}
          >
            <div className="card-image-wrapper">
              <img src={co.image} alt={co.name} className="card-img" style={{ height: '280px', objectFit: 'cover', width: '100%' }} />
              <div className="card-gradient"></div>
              <div className="card-rating">🎭</div>
            </div>
            <div className="card-info">
              <h3 className="card-title">{co.name}</h3>
              <p className="card-meta" style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '12px', marginBottom: '6px' }}>{co.specialty}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>
                {co.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
