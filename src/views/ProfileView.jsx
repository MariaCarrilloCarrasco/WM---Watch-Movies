import React from 'react';
import { useApp } from '../context/AppContext';

export default function ProfileView() {
  const { user, logoutUser, language } = useApp();

  const isEs = language === 'es';

  const userName = user ? user.name : 'María Carrillo';
  const userEmail = user ? user.email : 'maria.carrillo@movies.com';
  
  // Initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 3)
      .toUpperCase();
  };

  return (
    <div id="view-profile" className="app-view active">
      <div className="profile-hero">
        <div className="brand-logo-circle large" style={{ width: '120px', height: '120px', borderWidth: '6px' }}>
          <span className="logo-wm" style={{ fontSize: '32px' }}>{getInitials(userName)}</span>
          <span className="logo-subtitle" style={{ fontSize: '10px' }}>User</span>
        </div>
        <h2 className="profile-username">{userName}</h2>
        <span className="profile-role">
          {isEs ? 'Social Developer & Miembro Premium de WOM!' : 'Social Developer & Premium Member of WOM!'}
        </span>
      </div>

      <div className="login-form-container" style={{ marginTop: '24px', textAlign: 'center' }}>
        <h3 className="login-title">{isEs ? 'Configuración de Cuenta' : 'Account Settings'}</h3>
        <p className="login-subtitle" style={{ marginBottom: '24px' }}>
          {isEs ? `Sesión iniciada como: ${userEmail}` : `Logged in as: ${userEmail}`}
        </p>

        <button 
          className="login-submit-btn" 
          onClick={logoutUser}
          style={{ 
            background: 'var(--accent-red)', 
            borderColor: 'var(--accent-red)', 
            boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)',
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto',
            padding: '12px',
            fontSize: '14px',
            fontWeight: 'bold',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#fff',
            border: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {isEs ? 'Cerrar Sesión' : 'Cerrar Sesión / Log Out'}
        </button>
      </div>
    </div>
  );
}
