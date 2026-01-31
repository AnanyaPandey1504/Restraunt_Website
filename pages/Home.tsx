
import React from 'react';
import { BUSINESS_INFO } from '../constants.ts';
import { Page } from '../App.tsx';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 animate-slow-zoom">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
            alt="Nancy's Hustle Ambiance"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-block py-1.5 px-6 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.5em] backdrop-blur-md bg-white/5 animate-reveal-up">
            Modern Bistro & Wine Bar
          </div>
          <h1 className="text-7xl md:text-[11rem] serif mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl animate-reveal-up delay-200">
            Nancy’s Hustle
          </h1>
          <p className="text-xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed text-white/80 mb-14 italic serif animate-reveal-up delay-300">
            "{BUSINESS_INFO.description.split('— “')[1]?.split('”')[0] || "Butter, natural wine, cider, and cocktails that pair well with food."}"
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal-up delay-400">
            <button
              onClick={() => onNavigate('reservations')}
              className="group relative px-14 py-6 bg-white text-stone-900 text-[11px] uppercase tracking-[0.4em] font-black overflow-hidden transition-all hover:bg-amber-50 w-full sm:w-auto text-center shadow-2xl hover:scale-105"
            >
              Book a Table
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="group relative px-14 py-6 border border-white/40 text-white text-[11px] uppercase tracking-[0.4em] font-black overflow-hidden transition-all hover:bg-white hover:text-stone-900 w-full sm:w-auto text-center backdrop-blur-md hover:scale-105"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-40 bg-[#fdfcf9] border-b border-stone-100 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-stone-300 mb-16 font-black animate-reveal-up">The Philosophy</h2>
          <p className="text-3xl md:text-5xl serif leading-[1.6] text-stone-800 italic font-medium animate-reveal-up delay-200">
            {BUSINESS_INFO.description}
          </p>
          <div className="mt-20 flex justify-center items-center gap-16 animate-reveal-up delay-300">
             <div className="text-center group">
                <p className="text-stone-400 text-[9px] uppercase tracking-[0.4em] font-black mb-3 group-hover:text-amber-600 transition-colors">Established</p>
                <p className="text-3xl serif group-hover:scale-110 transition-transform">2017</p>
             </div>
             <div className="w-px h-16 bg-stone-200"></div>
             <div className="text-center group">
                <p className="text-stone-400 text-[9px] uppercase tracking-[0.4em] font-black mb-3 group-hover:text-amber-600 transition-colors">Location</p>
                <p className="text-3xl serif group-hover:scale-110 transition-transform">EaDo</p>
             </div>
          </div>
        </div>
      </section>

      {/* The Bar Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden animate-mask-reveal">
              <div className="absolute -inset-4 bg-amber-50/50 rounded-sm -z-10 transition-transform group-hover:scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200" 
                alt="Craft Cocktails & Wine" 
                className="w-full aspect-[4/5] object-cover shadow-2xl rounded-sm transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8 animate-reveal-up delay-200">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-black">The Beverage Program</h2>
              <h3 className="text-5xl md:text-7xl serif italic leading-tight text-stone-900">Naturally <br/>Inspired.</h3>
              <p className="text-xl text-stone-600 leading-relaxed font-light italic">
                Our curated list of natural wines, ciders, and balanced cocktails are specifically designed to highlight the rich flavors of our kitchen's buttery, technique-driven dishes.
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('menu')}
                  className="px-10 py-5 border border-stone-200 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-stone-900 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  View Drinks
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Grid */}
      <section className="flex flex-col md:flex-row h-auto md:h-[600px] overflow-hidden bg-stone-950">
        <div className="flex-1 relative overflow-hidden group animate-mask-reveal delay-100">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1074" className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-70" alt="Culinary Technique" />
          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-all duration-700"></div>
        </div>
        <div className="flex-1 relative overflow-hidden group border-x border-white/5 animate-mask-reveal delay-300">
          <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1170" className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-70" alt="Chef at Work" />
          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-all duration-700"></div>
        </div>
        <div className="flex-1 relative overflow-hidden group animate-mask-reveal delay-500">
          <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1170" className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-70" alt="Natural Wine Bar" />
          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-all duration-700"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
