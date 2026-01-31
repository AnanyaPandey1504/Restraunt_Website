
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const giftCardUrl = "https://resy.com/cities/houston-tx/venues/nancys-hustle/gift-cards";

  // Fix: Extract logic to avoid redundant and potentially conflicting type comparisons in the JSX.
  // The navbar is "solid" (white background) if scrolled, if the mobile menu is open, or if we are not on the home page.
  const isSolidNav = isScrolled || isMobileMenuOpen || currentPage !== 'home';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isSolidNav 
            ? 'bg-white shadow-md py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => handleLinkClick('home')}
            className={`text-xl md:text-2xl font-black serif tracking-tighter transition-colors duration-300 relative z-[110] ${
              isSolidNav ? 'text-stone-900' : 'text-stone-900 md:text-white'
            }`}
          >
            NANCY’S HUSTLE
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all border-b-2 pb-1 ${
                currentPage === 'home' 
                  ? `border-amber-600 ${isSolidNav ? 'text-stone-900' : 'text-white'}` 
                  : `border-transparent hover:border-current ${isSolidNav ? 'text-stone-500' : 'text-white/80'}`
              }`}
            >
              Welcome
            </button>
            <button
              onClick={() => handleLinkClick('reservations')}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all border-b-2 pb-1 ${
                currentPage === 'reservations' 
                  ? `border-amber-600 ${isSolidNav ? 'text-stone-900' : 'text-white'}` 
                  : `border-transparent hover:border-current ${isSolidNav ? 'text-stone-500' : 'text-white/80'}`
              }`}
            >
              Reservations
            </button>
            <button
              onClick={() => handleLinkClick('menu')}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all border-b-2 pb-1 ${
                currentPage === 'menu' 
                  ? `border-amber-600 ${isSolidNav ? 'text-stone-900' : 'text-white'}` 
                  : `border-transparent hover:border-current ${isSolidNav ? 'text-stone-500' : 'text-white/80'}`
              }`}
            >
              Menu
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:opacity-50 border-b-2 border-transparent pb-1 ${
                isSolidNav ? 'text-stone-500' : 'text-white/80'
              }`}
            >
              Call
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:opacity-50 border-b-2 border-transparent pb-1 ${
                isSolidNav ? 'text-stone-500' : 'text-white/80'
              }`}
            >
              Email
            </a>
            <a
              href={giftCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:opacity-50 border-b-2 border-transparent pb-1 ${
                isSolidNav ? 'text-stone-500' : 'text-white/80'
              }`}
            >
              Gift Cards
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative z-[110]">
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 focus:outline-none transition-colors duration-300 ${
                isSolidNav ? 'text-stone-900' : 'text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-white transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          <button onClick={() => handleLinkClick('home')} className="text-4xl serif text-stone-900">Welcome</button>
          <button onClick={() => handleLinkClick('reservations')} className="text-4xl serif text-stone-900">Reservations</button>
          <button onClick={() => handleLinkClick('menu')} className="text-4xl serif text-stone-900">Menu</button>
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-4xl serif text-stone-900">Call</a>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="text-4xl serif text-stone-900">Email</a>
          <a href={giftCardUrl} target="_blank" rel="noopener noreferrer" className="text-4xl serif text-stone-900">Gift Cards</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
