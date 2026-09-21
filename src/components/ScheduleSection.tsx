import React, { useState } from 'react';
import { SCHEDULE_DAYS } from '../data/conferenceData';

export const ScheduleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('day1');

  const currentDay = SCHEDULE_DAYS.find((d) => d.id === activeTab) || SCHEDULE_DAYS[0];

  const getBorderAccentClass = (accent?: string) => {
    switch (accent) {
      case 'primary':
        return 'border-l-4 border-black pl-4';
      case 'gold':
        return 'border-l-4 border-[#d4af37] pl-4';
      case 'secondary':
        return 'border-l-4 border-[#005ab7] pl-4';
      default:
        return 'border-l-4 border-[#eeeef0] pl-4';
    }
  };

  const getTimeAccentClass = (accent?: string) => {
    switch (accent) {
      case 'primary':
        return 'text-black';
      case 'gold':
        return 'text-[#d4af37]';
      case 'secondary':
        return 'text-[#005ab7]';
      default:
        return 'text-[#6e6e73]';
    }
  };

  return (
    <section className="py-20 md:py-24 px-6 bg-[#f9f9fb]" id="schedule">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-['Hanken_Grotesk'] tracking-tight">
            Program Schedule
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg">
            Three days of intensive learning and cultural immersion.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          className="flex flex-wrap border-b border-[#e2e2e4] mb-8 gap-2 sm:gap-0"
          role="tablist"
        >
          {SCHEDULE_DAYS.map((day) => {
            const isActive = activeTab === day.id;
            return (
              <button
                key={day.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(day.id)}
                className={`px-6 py-3 font-['Hanken_Grotesk'] text-sm sm:text-base transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'font-bold text-black border-b-2 border-black -mb-[2px]'
                    : 'font-medium text-[#6e6e73] hover:text-black'
                }`}
                id={`schedule-tab-${day.id}`}
              >
                {day.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Contents Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#e8e8ea] max-w-3xl">
          <div className="space-y-6">
            {currentDay.events.map((item, idx) => {
              if (item.isSplit && item.splitDetails) {
                return (
                  <div key={idx} className="grid sm:grid-cols-2 gap-4">
                    {item.splitDetails.map((track, tIdx) => (
                      <div key={tIdx} className="bg-[#f9f9fb] p-4 rounded-xl border border-[#eeeef0]">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6e6e73]">
                          {track.category}
                        </span>
                        <h5 className="font-bold text-black text-base mt-1 font-['Hanken_Grotesk']">
                          {track.title}
                        </h5>
                        <p className="text-xs text-[#6e6e73] mt-1">{track.timeAndPlace}</p>
                      </div>
                    ))}
                  </div>
                );
              }

              const isGoldHighlight = item.accent === 'gold' && item.time === 'Artistic Event';

              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-1 transition-all ${getBorderAccentClass(item.accent)} ${
                    isGoldHighlight ? 'bg-[#d4af37]/5 p-4 rounded-r-xl' : ''
                  }`}
                >
                  <span className={`text-sm font-bold ${getTimeAccentClass(item.accent)}`}>
                    {item.time}
                  </span>
                  <h4 className="text-lg font-bold text-black font-['Hanken_Grotesk']">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p
                      className={`text-sm text-[#6e6e73] ${
                        isGoldHighlight ? 'italic' : ''
                      } leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
