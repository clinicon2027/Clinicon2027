import React, { useEffect } from 'react';
import { X, Gavel, Users, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { EventRuleDetail } from '../types';
import { ConferenceIcon } from './ConferenceIcon';

interface EventModalProps {
  event: EventRuleDetail | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e8e8ea] flex justify-between items-center bg-[#f9f9fb] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eeeef0] text-black flex items-center justify-center flex-shrink-0">
              <ConferenceIcon name={event.iconName} className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3
                id="modal-title"
                className="text-xl sm:text-2xl font-bold text-black font-['Hanken_Grotesk'] leading-tight"
              >
                {event.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] font-medium mt-0.5">
                {event.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6e6e73] hover:text-black transition-colors p-2 rounded-full hover:bg-[#eeeef0] cursor-pointer"
            aria-label="Close rules modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          {event.sections.map((section, sIdx) => {
            const isSchedule = section.head.toLowerCase().includes('schedule');
            const isTeam = section.head.toLowerCase().includes('team') || section.head.toLowerCase().includes('requirement');
            const isDuration = section.head.toLowerCase().includes('duration') || section.head.toLowerCase().includes('time');

            return (
              <section key={sIdx} className="space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-black flex items-center gap-2 font-['Hanken_Grotesk']">
                  {isTeam ? (
                    <Users className="w-5 h-5 text-[#005ab7]" />
                  ) : isDuration ? (
                    <Clock className="w-5 h-5 text-[#005ab7]" />
                  ) : isSchedule ? (
                    <CalendarIcon className="w-5 h-5 text-[#005ab7]" />
                  ) : (
                    <Gavel className="w-5 h-5 text-[#005ab7]" />
                  )}
                  <span>{section.head}</span>
                </h4>

                {/* Key-Value Lists */}
                {section.kv && (
                  <ul className="space-y-2 text-sm text-[#1a1c1d]">
                    {section.kv.map((pair, pIdx) => (
                      <li key={pIdx} className="flex flex-wrap items-baseline gap-1">
                        <strong className="text-black font-semibold">{pair[0]}:</strong>
                        <span className="text-[#1a1c1d]">{pair[1]}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Standard bullet items */}
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#1a1c1d] ml-1">
                    {section.list.map((item, lIdx) => (
                      <li
                        key={lIdx}
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}

                {/* Table display */}
                {section.table && (
                  <div className="overflow-hidden border border-[#e8e8ea] rounded-xl mt-2">
                    <table className="min-w-full divide-y divide-[#e8e8ea] text-sm">
                      <thead className="bg-[#f9f9fb]">
                        <tr>
                          {section.table.cols.map((col, cIdx) => (
                            <th
                              key={cIdx}
                              className="px-4 py-3 text-left font-semibold text-black"
                              scope="col"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e8e8ea] bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className={`px-4 py-3 ${
                                  cellIdx === 0 ? 'text-[#1a1c1d] font-medium' : 'text-[#6e6e73]'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#e8e8ea] bg-[#f9f9fb] mt-auto">
          <p className="text-xs text-[#6e6e73] leading-relaxed">
            <strong className="text-black">General Event Guidelines:</strong> Reporting time is 15
            minutes before the scheduled start. Strict adherence to sportsmanship is expected.
            Organizer reserves the right to modify rules or disqualify participants if necessary.
          </p>
        </div>
      </div>
    </div>
  );
};
