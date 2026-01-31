
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import MenuPage from './pages/MenuPage.tsx';
import ReservationsPage from './pages/ReservationsPage.tsx';
import Footer from './components/Footer.tsx';

export type Page = 'home' | 'menu' | 'reservations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle browser back/forward and hash links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'menu', 'reservations'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'menu':
        return <MenuPage />;
      case 'reservations':
        return <ReservationsPage />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-stone-900 bg-[#fdfcf9]">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow pt-24 md:pt-0 animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
