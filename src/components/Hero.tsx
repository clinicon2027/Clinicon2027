import React from 'react';
import { Calendar } from 'lucide-react';

interface HeroProps {
  onSecureSpotClick: () => void;
  onViewScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSecureSpotClick, onViewScheduleClick }) => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#f9f9fb]"
      id="home"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Main Branding */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-black font-['Hanken_Grotesk'] leading-tight select-none">
            CLINICON 2027
          </h1>
        </div>

        {/* Date & Tagline */}
        <div className="flex flex-col items-center gap-4 text-[#6e6e73]">
          <div className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5 text-[#6e6e73]" />
            <p className="font-medium text-base sm:text-lg">May 2027 | TBD</p>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <span className="inline-block text-[#d4af37] italic font-medium tracking-wider border-b border-[#d4af37]/40 pb-1 text-lg sm:text-xl">
              Medicine Beyond the Classroom
            </span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={onSecureSpotClick}
            className="inline-block px-8 py-4 bg-black text-white rounded-xl font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all shadow-md text-center cursor-pointer"
            id="hero-cta-secure"
          >
            Secure Your Spot
          </button>
          <button
            type="button"
            onClick={onViewScheduleClick}
            className="inline-block px-8 py-4 border-2 border-black text-black rounded-xl font-bold text-base sm:text-lg hover:bg-[#eeeef0] active:scale-95 transition-all text-center cursor-pointer"
            id="hero-cta-schedule"
          >
            View Schedule
          </button>
        </div>
      </div>

      {/* Hero bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 hero-gradient pointer-events-none"></div>
    </section>
  );
};
