import React from 'react';
import { useApp } from '../context/AppContext';

export default function Sidebar() {
  const { currentTab, switchTab, user, likedMovies, myListMovies } = useApp();
  
  const userName = user ? user.name : 'María Carrillo';
  const roleName = user ? 'Authenticated Member' : 'Guest';

  return (
    <aside className="desktop-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-container" onClick={() => switchTab('home')}>
          <div className="brand-logo-circle" style={{ padding: '4px' }}>
            <span className="logo-wm" style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '0.5px' }}>WOM!</span>
            <span className="logo-subtitle" style={{ fontSize: '5px', textTransform: 'uppercase' }}>& More</span>
          </div>
          <span className="sidebar-app-title">WOM!</span>
        </div>
      </div>
      
      <nav className="sidebar-menu">
        <button 
          className={`sidebar-menu-btn nav-btn ${currentTab === 'home' ? 'active' : ''}`}
          onClick={() => switchTab('home')}
        >
          <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Inicio</span>
        </button>
        
        <button 
          className={`sidebar-menu-btn nav-btn ${currentTab === 'explore' ? 'active' : ''}`}
          onClick={() => switchTab('explore')}
        >
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>Explore</span>
        </button>
        
        <button 
          className={`sidebar-menu-btn nav-btn ${currentTab === 'likes' ? 'active' : ''}`}
          onClick={() => switchTab('likes')}
        >
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span>Likes</span>
          <div className="likes-badge" style={{ display: likedMovies.length > 0 ? 'flex' : 'none' }}>
            {likedMovies.length}
          </div>
        </button>
        
        <button 
          className={`sidebar-menu-btn nav-btn ${currentTab === 'mylist' ? 'active' : ''}`}
          onClick={() => switchTab('mylist')}
        >
          <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" fill="none" strokeWidth="2"/></svg>
          <span>My List</span>
          <div 
            className="mylist-badge" 
            style={{ 
              display: myListMovies.length > 0 ? 'flex' : 'none',
              position: 'absolute',
              top: '12px',
              right: '24px',
              background: 'var(--accent-purple)',
              color: 'var(--text-primary)',
              fontSize: '9px',
              fontWeight: '800',
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
          className={`sidebar-menu-btn nav-btn ${currentTab === 'monologos' ? 'active' : ''}`}
          onClick={() => switchTab('monologos')}
        >
          <span style={{ fontSize: '18px', marginRight: '12px', display: 'inline-block' }}>🎤</span>
          <span>Monólogos</span>
        </button>
        
        <button 
          className={`sidebar-menu-btn nav-btn ${currentTab === 'teatro' ? 'active' : ''}`}
          onClick={() => switchTab('teatro')}
        >
          <span style={{ fontSize: '18px', marginRight: '12px', display: 'inline-block' }}>🎭</span>
          <span>Teatro</span>
        </button>
      </nav>
      
      <div className="sidebar-footer" onClick={() => switchTab('profile')}>
        <div className="brand-logo-circle logo-profile-btn" style={{ width: '40px', height: '40px' }}>
          <span className="logo-wm" style={{ fontSize: '11px' }}>WOM!</span>
          <span className="logo-subtitle" style={{ fontSize: '4px' }}>User</span>
        </div>
        <div className="sidebar-profile-info">
          <span className="sidebar-profile-name">{userName}</span>
          <span className="sidebar-profile-status">{roleName}</span>
        </div>
      </div>
    </aside>
  );
}
