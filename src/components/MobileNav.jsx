import React from 'react';
import { useApp } from '../context/AppContext';

export default function MobileNav() {
  const { currentTab, switchTab, likedMovies, myListMovies } = useApp();

  return (
    <nav className="mobile-nav">
      <button 
        className={`nav-btn ${currentTab === 'home' ? 'active' : ''}`} 
        onClick={() => switchTab('home')} 
        aria-label="Inicio"
      >
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>Inicio</span>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'explore' ? 'active' : ''}`} 
        onClick={() => switchTab('explore')} 
        aria-label="Explore"
      >
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Explore</span>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'likes' ? 'active' : ''}`} 
        onClick={() => switchTab('likes')} 
        aria-label="Likes"
      >
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span>Likes</span>
        <div className="likes-badge" style={{ display: likedMovies.length > 0 ? 'flex' : 'none' }}>
          {likedMovies.length}
        </div>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'mylist' ? 'active' : ''}`} 
        onClick={() => switchTab('mylist')} 
        aria-label="Mi Lista"
      >
        <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" fill="none" strokeWidth="2"/></svg>
        <span>Mi Lista</span>
        <div 
          className="mylist-badge" 
          style={{ 
            display: myListMovies.length > 0 ? 'flex' : 'none', 
            position: 'absolute', 
            top: '-4px', 
            right: '18px', 
            background: 'var(--accent-purple)', 
            color: 'var(--text-primary)', 
            fontSize: '9px', 
            fontWeight: 800, 
            borderRadius: '50%', 
            width: '16px', 
            height: '16px', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 0 6px var(--accent-purple-glow)', 
            border: '1px solid var(--bg-color)' 
          }}
        >
          {myListMovies.length}
        </div>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'monologos' ? 'active' : ''}`} 
        onClick={() => switchTab('monologos')} 
        aria-label="Monólogos"
      >
        <span style={{ fontSize: '18px', marginBottom: '2px', display: 'block' }}>🎤</span>
        <span>Monólogos</span>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'teatro' ? 'active' : ''}`} 
        onClick={() => switchTab('teatro')} 
        aria-label="Teatro"
      >
        <span style={{ fontSize: '18px', marginBottom: '2px', display: 'block' }}>🎭</span>
        <span>Teatro</span>
      </button>
      
      <button 
        className={`nav-btn ${currentTab === 'profile' ? 'active' : ''}`} 
        onClick={() => switchTab('profile')} 
        aria-label="Perfil"
      >
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Perfil</span>
      </button>
    </nav>
  );
}
