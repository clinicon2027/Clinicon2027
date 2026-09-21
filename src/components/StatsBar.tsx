import React from 'react';
import { STATS } from '../data/conferenceData';

export const StatsBar: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-[#e8e8ea]" id="stats-section">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-2"
            id={`stat-item-${index}`}
          >
            <span className="text-3xl sm:text-4xl font-bold text-black mb-2 font-['Hanken_Grotesk'] tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#6e6e73] uppercase tracking-widest text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
