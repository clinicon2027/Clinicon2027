import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ACADEMIC_EVENTS, RESEARCH_SHOWCASE_IMG_URL } from '../data/conferenceData';
import { ConferenceIcon } from './ConferenceIcon';

interface AcademicSectionProps {
  onSelectEvent: (eventId: string) => void;
  onSubmitAbstract: () => void;
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({
  onSelectEvent,
  onSubmitAbstract,
}) => {
  return (
    <section className="py-20 md:py-24 px-6 bg-[#f9f9fb]" id="academic">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-['Hanken_Grotesk'] tracking-tight">
            Academic Excellence
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto text-base sm:text-lg">
            Challenge your limits, refine your skills, and compete with the brightest medical minds
            from across the globe.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMIC_EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent(event.id)}
              className="group bg-white p-8 rounded-2xl border border-[#e8e8ea] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              id={`academic-card-${event.id}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectEvent(event.id);
                }
              }}
            >
              <div>
                <div className="w-14 h-14 bg-[#eeeef0] text-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ConferenceIcon name={event.iconName} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-['Hanken_Grotesk']">
                  {event.title}
                </h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <div className="text-black font-bold text-sm flex items-center gap-1 group-hover:text-[#005ab7] transition-colors pt-2">
                <span>{event.badge}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Highlight Card */}
        <div
          className="mt-12 bg-black text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-xl"
          id="research-showcase-banner"
        >
          <div className="flex-1">
            <span className="bg-white/15 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Flagship Event
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 font-['Hanken_Grotesk'] tracking-tight">
              Research Showcase
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-6 max-w-xl">
              Presenting innovative medical research from students. Submit your abstract and win
              prestigious recognition from our international faculty.
            </p>
            <button
              type="button"
              onClick={onSubmitAbstract}
              className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              id="submit-abstract-btn"
            >
              Submit Abstract
            </button>
          </div>

          <div className="w-full md:w-5/12 aspect-video rounded-2xl overflow-hidden bg-neutral-800 relative shadow-inner border border-white/10">
            <img
              className="w-full h-full object-cover"
              alt="Medical research presentation hall"
              src={RESEARCH_SHOWCASE_IMG_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
