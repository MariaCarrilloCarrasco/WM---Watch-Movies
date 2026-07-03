import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import WelcomeScreen from './components/WelcomeScreen';
import ServiceErrorModal from './components/ServiceErrorModal';
import MovieDetailModal from './components/MovieDetailModal';
import PersonModal from './components/PersonModal';
import ShowDetailsModal from './components/ShowDetailsModal';

// Views
import HomeView from './views/HomeView';
import ExploreView from './views/ExploreView';
import LikesView from './views/LikesView';
import MyListView from './views/MyListView';
import ProfileView from './views/ProfileView';
import MonologosView from './views/MonologosView';
import TeatroView from './views/TeatroView';

function MainAppContent() {
  const { currentTab } = useApp();
  const [selectedShow, setSelectedShow] = useState(null);

  const renderActiveView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView />;
      case 'explore':
        return <ExploreView />;
      case 'likes':
        return <LikesView />;
      case 'mylist':
        return <MyListView />;
      case 'profile':
        return <ProfileView />;
      case 'monologos':
        return <MonologosView onSelectComedian={(comedian) => setSelectedShow(comedian)} />;
      case 'teatro':
        return <TeatroView onSelectCompany={(company) => setSelectedShow(company)} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, paddingBottom: '70px' }}>
        <Header />
        
        <main className="app-content-container" style={{ flex: 1, padding: '24px' }}>
          {renderActiveView()}
        </main>
      </div>

      {/* Mobile/Tablet Bottom Navigation Bar */}
      <MobileNav />

      {/* Overlays / Modals */}
      <WelcomeScreen />
      <ServiceErrorModal />
      <MovieDetailModal />
      <PersonModal />
      {selectedShow && (
        <ShowDetailsModal 
          showItem={selectedShow} 
          onClose={() => setSelectedShow(null)} 
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
