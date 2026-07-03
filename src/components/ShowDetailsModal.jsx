import React from 'react';
import { useApp } from '../context/AppContext';

export default function ShowDetailsModal({ showItem, onClose }) {
  const { user, setIntendedAction, language } = useApp();

  if (!showItem) return null;

  const isEs = language === 'es';

  const buyTicketAction = (title, date) => {
    if (!user) {
      // Save action to run post-login
      setIntendedAction(() => () => buyTicketAction(title, date));
      
      // Open login
      const welcomeEl = document.getElementById('welcome-screen');
      if (welcomeEl) {
        welcomeEl.style.display = 'flex';
        welcomeEl.classList.remove('fade-out');
      }
      
      alert(isEs 
        ? 'Por favor, inicia sesión o regístrate para comprar las entradas de forma segura.' 
        : 'Please log in or sign up to buy tickets securely.');
      onClose();
      return;
    }

    const mockLink = `https://wom-entradas.com/checkout?show=${encodeURIComponent(title)}&date=${date}&user=${encodeURIComponent(user.name)}`;
    const confirmMsg = isEs
      ? `¿Deseas abrir la pasarela de pago para comprar entradas de "${title}" del día ${date}?`
      : `Would you like to open the payment gateway to buy tickets for "${title}" on ${date}?`;

    if (window.confirm(confirmMsg)) {
      window.open(mockLink, '_blank');
    }
  };

  return (
    <div id="show-details-modal" className="modal-overlay" style={{ display: 'flex' }}>
      <div 
        className="modal-content" 
        style={{ 
          maxWidth: '600px', 
          width: '95%', 
          background: 'var(--bg-card)', 
          padding: '32px', 
          borderRadius: 'var(--border-radius-lg)', 
          border: '1px solid rgba(255,255,255,0.08)', 
          boxShadow: 'var(--shadow-2xl)', 
          backdropFilter: 'blur(16px)', 
          position: 'relative', 
          maxHeight: '85vh', 
          overflowY: 'auto' 
        }}
      >
        <button 
          className="close-modal-btn" 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '16px', 
            background: 'rgba(255,255,255,0.06)', 
            border: 'none', 
            color: '#fff', 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '16px', 
            cursor: 'pointer', 
            transition: 'background 0.2s' 
          }}
        >
          &times;
        </button>
        
        {/* Dynamic content */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap' }}>
          <img 
            src={showItem.image} 
            alt={showItem.name} 
            style={{ width: '140px', height: '180px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(255,255,255,0.1)' }} 
          />
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '4px', fontSize: '22px', fontWeight: 800, color: '#fff' }}>{showItem.name}</h3>
            <span style={{ fontSize: '12px', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {showItem.style || showItem.specialty}
            </span>
            <p style={{ marginTop: '12px', marginBottom: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {showItem.bio || showItem.description}
            </p>
          </div>
        </div>
        
        <h4 
          style={{ 
            fontSize: '14px', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            color: '#fff', 
            letterSpacing: '0.5px', 
            borderBottom: '1px solid rgba(255,255,255,0.08)', 
            paddingBottom: '8px', 
            marginBottom: '16px' 
          }}
        >
          {isEs ? 'Próximas Sesiones / Funciones' : 'Upcoming Sessions / Plays'}
        </h4>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {showItem.shows.map((show, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)', 
                padding: '16px', 
                borderRadius: 'var(--border-radius-md)', 
                marginBottom: '12px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#fff' }}>{show.title}</h4>
                <span style={{ fontSize: '11px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                  {show.time}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{show.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', flexWrap: 'wrap', gap: '8px', fontSize: '11px', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                <span>📅 {show.date}</span>
                <span>📍 {show.place}</span>
              </div>
              <button 
                className="detail-btn detail-btn-primary" 
                style={{ marginTop: '10px', width: '100%', padding: '8px', fontSize: '12px' }}
                onClick={() => buyTicketAction(show.title, show.date)}
              >
                {isEs ? '🎫 Comprar Entrada' : '🎫 Buy Ticket'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
