import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SPORTS_DATA } from '../data/conferenceData';
import { ConferenceIcon } from './ConferenceIcon';

interface SportsSectionProps {
  onSelectSport: (sportId: string) => void;
}

export const SportsSection: React.FC<SportsSectionProps> = ({ onSelectSport }) => {
  return (
    <section className="py-20 md:py-24 px-6 bg-white border-y border-[#e8e8ea]" id="sports">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-['Hanken_Grotesk'] tracking-tight">
            Sports Programme
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto text-base sm:text-lg">
            Beyond the wards. Three categories — team, individual, and eSports — all competing under
            the same inter-faculty banner.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Sports Column */}
          <div className="p-6 rounded-2xl border border-[#e8e8ea] bg-[#f9f9fb] flex flex-col">
            <h3 className="font-bold text-xl mb-6 border-b border-[#eeeef0] pb-3 tracking-tight font-['Hanken_Grotesk'] text-black">
              Team Sports
            </h3>
            <div className="space-y-4 flex-1">
              {SPORTS_DATA.team.map((sport) => (
                <div
                  key={sport.id}
                  onClick={() => onSelectSport(sport.id)}
                  className="group/item flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e8ea] hover:border-black hover:shadow-sm transition-all duration-200 cursor-pointer"
                  id={`sport-btn-${sport.id}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectSport(sport.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eeeef0] text-black flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-colors duration-200">
                      <ConferenceIcon name={sport.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#1a1c1d] text-sm sm:text-base">
                      {sport.title}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#cfc4c5] group-hover/item:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Individual Sports Column */}
          <div className="p-6 rounded-2xl border border-[#e8e8ea] bg-[#f9f9fb] flex flex-col">
            <h3 className="font-bold text-xl mb-6 border-b border-[#eeeef0] pb-3 tracking-tight font-['Hanken_Grotesk'] text-black">
              Individual Sports
            </h3>
            <div className="space-y-4 flex-1">
              {SPORTS_DATA.individual.map((sport) => (
                <div
                  key={sport.id}
                  onClick={() => onSelectSport(sport.id)}
                  className="group/item flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e8ea] hover:border-black hover:shadow-sm transition-all duration-200 cursor-pointer"
                  id={`sport-btn-${sport.id}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectSport(sport.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eeeef0] text-black flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-colors duration-200">
                      <ConferenceIcon name={sport.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#1a1c1d] text-sm sm:text-base">
                      {sport.title}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#cfc4c5] group-hover/item:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* eSports Column */}
          <div className="p-6 rounded-2xl border border-[#e8e8ea] bg-[#f9f9fb] flex flex-col">
            <h3 className="font-bold text-xl mb-6 border-b border-[#eeeef0] pb-3 tracking-tight font-['Hanken_Grotesk'] text-black">
              eSports
            </h3>
            <div className="space-y-4 flex-1">
              {SPORTS_DATA.esports.map((sport) => (
                <div
                  key={sport.id}
                  onClick={() => onSelectSport(sport.id)}
                  className="group/item flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e8ea] hover:border-black hover:shadow-sm transition-all duration-200 cursor-pointer"
                  id={`sport-btn-${sport.id}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectSport(sport.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eeeef0] text-black flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-colors duration-200">
                      <ConferenceIcon name={sport.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#1a1c1d] text-sm sm:text-base">
                      {sport.title}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#cfc4c5] group-hover/item:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
