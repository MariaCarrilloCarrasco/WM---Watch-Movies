import React from 'react';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { switchTab, user, logoutUser, language } = useApp();

  return (
    <header className="app-header">
      <div className="header-left">
        <button 
          className="menu-trigger" 
          aria-label="Menú principal" 
          onClick={() => alert(language === 'es' ? 'Menú lateral móvil' : 'Mobile lateral menu')}
        >
          ☰
        </button>
        <div className="header-logo" onClick={() => switchTab('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-cine">WOM!</span>
          <span 
            className="logo-stream" 
            style={{ 
              fontSize: '11px', 
              letterSpacing: '0.5px', 
              opacity: 0.8, 
              fontWeight: 500, 
              marginLeft: '6px',
              textTransform: 'none'
            }}
          >
            Watch Movies & More
          </span>
        </div>
      </div>
      
      <div className="header-right" style={{ display: 'flex', alignItems: 'center' }}>
        <button 
          className="detail-circle-btn" 
          style={{ width: '36px', height: '36px', fontSize: '16px' }} 
          onClick={() => switchTab('explore')} 
          aria-label="Buscar"
        >
          🔍
        </button>
        
        {!user ? (
          <button 
            id="header-register-btn" 
            className="detail-btn detail-btn-secondary" 
            style={{ marginRight: '8px', padding: '8px 12px', fontSize: '13px' }} 
            onClick={() => {
              const welcomeEl = document.getElementById('welcome-screen');
              if (welcomeEl) {
                welcomeEl.style.display = 'flex';
                welcomeEl.classList.remove('fade-out');
              }
            }}
          >
            {language === 'es' ? 'Registrarse / Login' : 'Register / Login'}
          </button>
        ) : (
          <button 
            id="header-logout-btn" 
            className="detail-btn detail-btn-secondary" 
            style={{ 
              marginRight: '8px', 
              padding: '8px 12px', 
              fontSize: '13px', 
              background: 'rgba(239, 68, 68, 0.15)', 
              borderColor: 'rgba(239, 68, 68, 0.3)', 
              color: '#f87171' 
            }} 
            onClick={logoutUser}
          >
            {language === 'es' ? 'Cerrar Sesión' : 'Log Out'}
          </button>
        )}
        
        <div 
          className="brand-logo-circle logo-profile-btn" 
          style={{ width: '36px', height: '36px' }} 
          onClick={() => switchTab('profile')}
          title={user ? user.email : (language === 'es' ? 'Perfil' : 'Profile')}
        >
          <span className="logo-wm" style={{ fontSize: '10px' }}>WOM!</span>
          <span className="logo-subtitle" style={{ fontSize: '4px' }}>User</span>
        </div>
      </div>
    </header>
  );
}
