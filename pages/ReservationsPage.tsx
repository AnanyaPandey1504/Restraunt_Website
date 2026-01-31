
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const ReservationsPage: React.FC = () => {
  const resyUrl = "https://resy.com/cities/houston-tx/venues/nancys-hustle";
  
  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
        
        <div>
          <h1 className="text-6xl md:text-8xl serif mb-14 text-white tracking-tighter leading-none">Reservations</h1>
          
          <div className="space-y-14">
            <div className="group border-l border-stone-800 pl-10 py-2 hover:border-amber-600 transition-all">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-stone-600 mb-4 font-black">Address</h3>
              <p className="text-2xl font-light group-hover:text-amber-50 transition-colors">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`} target="_blank" rel="noopener noreferrer">
                  {BUSINESS_INFO.address}
                </a>
              </p>
            </div>

            <div className="border-l border-stone-800 pl-10 py-2">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-stone-600 mb-4 font-black">Service Hours</h3>
              <p className="text-2xl font-light">{BUSINESS_INFO.hours}</p>
              <div className="mt-5 inline-block px-4 py-2 bg-amber-900/20 text-amber-200 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-amber-800/30">
                 {BUSINESS_INFO.additionalHoursNote}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-stone-900">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-700 mb-3 font-black">Walk-ins</h3>
                <p className="text-xl font-light text-stone-500">{BUSINESS_INFO.walkIns}</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-700 mb-3 font-black">Booking</h3>
                <p className="text-xl font-light text-stone-500">{BUSINESS_INFO.reservationsNote}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-900/50 p-12 md:p-20 rounded-sm border border-stone-800/50 shadow-2xl backdrop-blur-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-900/5 blur-[120px] -mr-40 -mt-40"></div>
          <h2 className="text-4xl serif mb-14 text-white tracking-tight italic">Book Your Table</h2>
          
          <div className="space-y-10">
            <ul className="space-y-8 text-stone-300">
              {BUSINESS_INFO.bookingInfo.map((info, idx) => (
                <li key={idx} className="flex items-start text-xl font-light leading-relaxed">
                  <span className="mr-6 mt-2 text-amber-600 shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </span>
                  {info}
                </li>
              ))}
            </ul>

            <div className="pt-12 border-t border-stone-800/50">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-stone-700 mb-8 font-black">Party Policy</h3>
              <ul className="space-y-6 text-stone-500 text-sm italic font-light">
                {BUSINESS_INFO.partyPolicy.map((policy, idx) => (
                  <li key={idx} className="leading-relaxed flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-900/50 mt-2 mr-5 shrink-0"></span>
                    {policy}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={resyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-7 bg-amber-700 text-white text-center uppercase tracking-[0.5em] font-black hover:bg-amber-600 transition-all shadow-xl rounded-sm text-xs"
            >
              Book via Resy
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReservationsPage;
