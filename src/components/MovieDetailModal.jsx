import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_REVIEWS } from '../data/mockData';

export default function MovieDetailModal() {
  const { 
    selectedMovie, 
    setSelectedMovie, 
    setSelectedPerson,
    user,
    userRatings,
    userReviews,
    setRating,
    addReview,
    language,
    toggleLike,
    likedMovies
  } = useApp();

  const [ratingVal, setRatingVal] = useState('');
  const [commentText, setCommentText] = useState('');
  const [showTrailer, setShowTrailer] = useState(false);

  const isEs = language === 'es';

  // Sync current saved rating
  useEffect(() => {
    if (selectedMovie) {
      const currentRating = userRatings[selectedMovie.id] || '';
      setRatingVal(currentRating);
      setCommentText('');
      setShowTrailer(false);
    }
  }, [selectedMovie, userRatings]);

  if (!selectedMovie) return null;

  const handleSaveRating = () => {
    if (!user) {
      alert(isEs ? 'Debes iniciar sesión para puntuar esta película.' : 'You must sign in to rate this movie.');
      return;
    }
    const val = parseInt(ratingVal);
    if (isNaN(val) || val < 1 || val > 10) {
      alert(isEs ? 'La puntuación debe ser un número entre 1 y 10.' : 'The score must be a number between 1 and 10.');
      return;
    }
    setRating(selectedMovie.id, val);
    alert(isEs ? 'Puntuación guardada con éxito.' : 'Rating saved successfully.');
  };

  const handlePostComment = () => {
    if (!user) {
      alert(isEs ? 'Debes iniciar sesión para publicar críticas.' : 'You must sign in to post reviews.');
      return;
    }
    const text = commentText.trim();
    if (!text) {
      alert(isEs ? 'Escribe una opinión antes de publicar.' : 'Write a review before posting.');
      return;
    }
    addReview(selectedMovie.id, text, ratingVal || 10);
    setCommentText('');
    alert(isEs ? 'Opinión publicada con éxito.' : 'Review posted successfully.');
  };

  // Combine user reviews and community reviews
  const localUserReviews = userReviews[selectedMovie.id] || [];
  const systemMockReviews = MOCK_REVIEWS[selectedMovie.id] || [
    { name: "Lucas Rojas", score: 7, comment: { es: "Buena película, cumple con entretener y tiene buena fotografía.", en: "Good movie, delivers entertainment and has good cinematography." }, date: "2026-02-15" },
    { name: "Ana Valenzuela", score: 9, comment: { es: "Me encantó el ritmo de la narrativa y la actuación principal.", en: "Loved the pacing of the narrative and the main acting." }, date: "2026-01-20" }
  ];

  const allReviews = [
    ...localUserReviews,
    ...systemMockReviews.map(r => ({
      name: r.name,
      score: r.score,
      comment: typeof r.comment === 'object' ? r.comment[language] : r.comment,
      date: r.date
    }))
  ];

  const handleActorClick = (name) => {
    setSelectedPerson(name);
  };

  return (
    <div id="movie-details-modal" className="modal-overlay" style={{ display: 'flex', zIndex: 100 }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '850px', 
          width: '95%', 
          background: '#090d16', 
          padding: 0, 
          borderRadius: 'var(--border-radius-lg)', 
          border: '1px solid rgba(255,255,255,0.08)', 
          boxShadow: 'var(--shadow-2xl)', 
          position: 'relative', 
          maxHeight: '90vh', 
          overflowY: 'auto' 
        }}
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedMovie(null)}
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '16px', 
            background: 'rgba(0,0,0,0.5)', 
            border: 'none', 
            color: '#fff', 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '18px', 
            cursor: 'pointer', 
            zIndex: 10 
          }}
        >
          &times;
        </button>

        {/* Backdrop Banner */}
        <div style={{ position: 'relative', height: '320px', backgroundImage: `url(${selectedMovie.backdrop})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent, #090d16)' }}></div>
          {showTrailer && selectedMovie.trailer ? (
            <iframe 
              src={`https://www.youtube.com/embed/${selectedMovie.trailer}?autoplay=1`}
              title="Trailer"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          ) : (
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              {selectedMovie.trailer && (
                <button 
                  className="detail-btn detail-btn-primary" 
                  onClick={() => setShowTrailer(true)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                >
                  ▶ {isEs ? 'Ver Tráiler' : 'Watch Trailer'}
                </button>
              )}
              <button 
                className="detail-circle-btn"
                onClick={() => toggleLike(selectedMovie.id)}
                style={{ fontSize: '18px', width: '40px', height: '40px' }}
              >
                {likedMovies.includes(selectedMovie.id) ? '❤️' : '🤍'}
              </button>
            </div>
          )}
        </div>

        {/* Info Layout */}
        <div style={{ padding: '24px 32px' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <img 
              src={selectedMovie.poster} 
              alt={selectedMovie.title} 
              style={{ width: '150px', height: '220px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(255,255,255,0.1)', marginTop: '-80px', zIndex: 5 }} 
            />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, margin: 0, color: '#fff' }}>{selectedMovie.title}</h2>
              <p style={{ margin: '8px 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
                {selectedMovie.year} &bull; {selectedMovie.genre} &bull; {selectedMovie.duration} min &bull; ★ {selectedMovie.rating.toFixed(1)}
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '12px 0 0 0' }}>
                {selectedMovie.synopsis[language] || selectedMovie.synopsis.es}
              </p>
            </div>
          </div>

          {/* Director & Cast */}
          <div style={{ marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {isEs ? 'Director' : 'Director'}
            </h4>
            {selectedMovie.director && (
              <span 
                onClick={() => handleActorClick(selectedMovie.director.name)}
                style={{ cursor: 'pointer', background: 'rgba(6,182,212,0.1)', color: 'var(--accent-cyan)', padding: '4px 12px', borderRadius: '4px', display: 'inline-block', fontWeight: 'bold', fontSize: '13px' }}
              >
                🎬 {selectedMovie.director.name}
              </span>
            )}

            <h4 style={{ margin: '20px 0 12px 0', fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {isEs ? 'Elenco principal' : 'Main Cast'}
            </h4>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {selectedMovie.cast.map(actor => (
                <div 
                  key={actor.name} 
                  onClick={() => handleActorClick(actor.name)}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundImage: `url(${actor.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <span style={{ fontSize: '12px', color: '#fff', fontWeight: 500 }}>{actor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ratings & Comments Input */}
          <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {/* Rating Box */}
            <div style={{ flex: 1, minWidth: '240px', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '14px' }}>
                {isEs ? 'Tu Puntuación (1-10)' : 'Your Rating (1-10)'}
              </h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  placeholder="8"
                  value={ratingVal}
                  onChange={(e) => setRatingVal(e.target.value)}
                  style={{ width: '60px', padding: '8px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', color: '#fff', textAlign: 'center', outline: 'none' }}
                />
                <button className="detail-btn detail-btn-primary" onClick={handleSaveRating} style={{ flex: 1 }}>
                  {isEs ? 'Guardar Puntuación' : 'Save Rating'}
                </button>
              </div>
            </div>

            {/* Comment Box */}
            <div style={{ flex: 2, minWidth: '280px' }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '14px' }}>
                {isEs ? 'Añadir un Comentario' : 'Add a Comment'}
              </h4>
              <textarea 
                rows="3"
                placeholder={isEs ? 'Escribe tu crítica o comentario sobre la película...' : 'Write your review or comment about the movie...'}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', color: '#fff', outline: 'none', resize: 'vertical' }}
              ></textarea>
              <button className="detail-btn" onClick={handlePostComment} style={{ marginTop: '10px', float: 'right' }}>
                {isEs ? 'Publicar Comentario' : 'Post Comment'}
              </button>
            </div>
          </div>

          {/* Community Reviews */}
          <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {isEs ? 'Comentarios de la Comunidad' : 'Community Reviews'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {allReviews.map((rev, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '14px 18px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '13px' }}>{rev.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '12px', fontWeight: 'bold' }}>★ {rev.score}/10</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{rev.comment}</p>
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>{rev.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
