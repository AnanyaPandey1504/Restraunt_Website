
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const giftCardUrl = "https://resy.com/cities/houston-tx/venues/nancys-hustle/gift-cards";

  return (
    <footer className="py-32 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl serif mb-12 tracking-tighter text-stone-900 uppercase font-black">Nancy’s Hustle</h2>
          <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-[11px] text-stone-400 uppercase tracking-[0.4em] font-black">
            <button onClick={() => onNavigate('home')} className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Welcome</button>
            <button onClick={() => onNavigate('menu')} className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Menu</button>
            <button onClick={() => onNavigate('reservations')} className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Reservations</button>
            <a href={giftCardUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Gift Cards</a>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Call</a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">Email</a>
          </div>
        </div>

        <div className="mb-24 py-24 border-y border-stone-100 relative overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] text-[20rem] serif font-black transition-all duration-1000 group-hover:scale-110">HUSTLE</div>
          <p className="text-stone-300 text-[10px] uppercase tracking-[0.6em] mb-12 font-black relative z-10">Visit our sister restaurant</p>
          <a 
            href={BUSINESS_INFO.sisterRestaurant.url} 
            className="text-5xl md:text-9xl serif italic hover:text-amber-900 transition-all duration-700 text-stone-900 inline-block hover:-translate-y-2 relative z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            {BUSINESS_INFO.sisterRestaurant.name}
          </a>
        </div>

        <div className="text-[10px] text-stone-300 tracking-[0.4em] uppercase font-bold">
          &copy; {new Date().getFullYear()} Nancy’s Hustle &bull; {BUSINESS_INFO.address.split(', Houston')[0]} &bull; EaDo &bull; {BUSINESS_INFO.phone}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
