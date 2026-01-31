
import React from 'react';
import { MENU } from '../constants';

const MenuPage: React.FC = () => {
  const getSectionImage = (title: string) => {
    if (title.includes("SMALL")) return "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1200";
    if (title.includes("Middle & Bigger")) return "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200";
    if (title.includes("Mains")) return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200";
    if (title.includes("Sides")) return "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=1200";
    if (title.includes("SWEETS")) return "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=1200";
    return null;
  };

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-reveal-up">
          <h2 className="text-xs uppercase tracking-[0.6em] text-stone-300 mb-6 font-black">The Offering</h2>
          <h1 className="text-5xl md:text-8xl serif italic text-stone-900">Menu</h1>
          <div className="w-16 h-px bg-amber-200 mx-auto mt-10"></div>
        </div>

        {MENU.map((section, idx) => {
          const sectionImage = getSectionImage(section.title);
          
          return (
            <div key={idx} className="mb-40 last:mb-0">
              {sectionImage && (
                <div className="relative h-[300px] md:h-[450px] mb-20 overflow-hidden rounded-sm group shadow-lg bg-stone-100 animate-mask-reveal">
                  <img 
                    src={sectionImage} 
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center transition-opacity duration-500 group-hover:bg-stone-900/20">
                     <h2 className="text-white text-4xl md:text-7xl serif italic tracking-tight px-6 text-center drop-shadow-lg transform transition-transform duration-700 group-hover:scale-110">
                       {section.title.split(' — ')[0].split(' / ')[0]}
                     </h2>
                  </div>
                </div>
              )}

              <div className="max-w-5xl mx-auto">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-700 mb-16 text-center border-b border-stone-50 pb-4 inline-block w-full animate-reveal-up delay-100">
                  {section.title}
                </h4>
                <div className="grid gap-x-20 gap-y-12 md:grid-cols-2">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className={`group cursor-default animate-reveal-up`}
                      style={{ animationDelay: `${(itemIdx % 10) * 100}ms` }}
                    >
                      <div className="flex justify-between items-baseline mb-2 border-b border-stone-50 pb-2 group-hover:border-amber-200 transition-all duration-300 transform group-hover:-translate-y-1">
                        <span className="text-xl serif text-stone-800 group-hover:text-stone-900 transition-colors leading-tight">
                          {item.name}
                        </span>
                        <span className="text-xs font-bold ml-6 shrink-0 text-stone-400 group-hover:text-amber-800 transition-colors font-mono">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="text-center mt-32 pt-16 border-t border-stone-100 opacity-60">
          <p className="italic text-stone-400 text-sm font-light serif max-w-lg mx-auto leading-relaxed">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
