import React from 'react';
import { X, Shield, FileCheck, Compass, HelpCircle } from 'lucide-react';

interface InfoModalProps {
  title: string | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  const getContent = () => {
    switch (title) {
      case 'Privacy Policy':
        return {
          icon: <Shield className="w-6 h-6 text-[#005ab7]" />,
          body: (
            <div className="space-y-4 text-sm text-[#6e6e73] leading-relaxed">
              <p>
                The CLINICON 2027 Organizing Committee is dedicated to safeguarding the privacy and
                personal information of all delegates, speakers, faculty members, and student
                participants.
              </p>
              <h5 className="font-bold text-black">1. Information Collected</h5>
              <p>
                We collect delegate names, institutional affiliations, year of study, contact emails,
                and competition registrations solely for event logistics, badge creation, and academic
                evaluation.
              </p>
              <h5 className="font-bold text-black">2. Data Usage & Security</h5>
              <p>
                Your registration records are strictly confidential and will never be sold or rented to
                third parties. Partner institutions (Faculty of Medicine Foča and Worlin Education)
                access registration rosters solely to ensure official certification and venue access.
              </p>
              <h5 className="font-bold text-black">3. Photography & Media</h5>
              <p>
                Sessions and gala ceremonies may be documented for academic archives and promotional
                re-caps. Delegates may request exemption upon arrival at check-in.
              </p>
            </div>
          ),
        };
      case 'Terms of Service':
        return {
          icon: <FileCheck className="w-6 h-6 text-[#005ab7]" />,
          body: (
            <div className="space-y-4 text-sm text-[#6e6e73] leading-relaxed">
              <p>
                By registering for and attending CLINICON 2027 in Foča, BiH, all attendees agree to
                comply with standard academic conduct and summit safety regulations.
              </p>
              <h5 className="font-bold text-black">1. Code of Conduct</h5>
              <p>
                Participants are expected to treat peers, patients, adjudicators, and community
                members with mutual respect and clinical dignity. Unsportsmanlike conduct in academic
                or athletic events may lead to immediate disqualification.
              </p>
              <h5 className="font-bold text-black">2. Registration & Badges</h5>
              <p>
                Summit credentials must be worn visibly at all workshop venues, clinical camp sites,
                and social galas. Badges are strictly non-transferable.
              </p>
              <h5 className="font-bold text-black">3. Program Adjustments</h5>
              <p>
                The Organizing Committee reserves the right to modify venue rooms or session timings
                in case of unforeseen logistical or weather occurrences.
              </p>
            </div>
          ),
        };
      case 'Delegate Guide':
        return {
          icon: <Compass className="w-6 h-6 text-[#005ab7]" />,
          body: (
            <div className="space-y-4 text-sm text-[#6e6e73] leading-relaxed">
              <p className="font-medium text-black">
                Welcome to CLINICON 2027 in Foča, Republic of Srpska, Bosnia and Herzegovina!
              </p>
              <h5 className="font-bold text-black">Arrival & Check-in</h5>
              <p>
                Check-in opens at 7:50 AM on Day 1 at the Faculty of Medicine, University of East
                Sarajevo-Foča. Please bring valid student identification and confirmation emails.
              </p>
              <h5 className="font-bold text-black">Clinical Attire</h5>
              <p>
                OSCE participants must bring their own standard stethoscope. Clean lab coats are
                mandatory for hospital simulations and medical camp rounds.
              </p>
              <h5 className="font-bold text-black">Local Currency & Exploration</h5>
              <p>
                The currency is the Convertible Mark (BAM). Foča offers stunning nature trails along
                the Drina and Ćehotina rivers, Sutjeska National Park, and historic Ottoman and Orthodox
                architecture.
              </p>
            </div>
          ),
        };
      default:
        return {
          icon: <HelpCircle className="w-6 h-6 text-[#005ab7]" />,
          body: (
            <div className="space-y-4 text-sm text-[#6e6e73] leading-relaxed">
              <p>Need assistance or have specific inquiries about CLINICON 2027?</p>
              <div className="bg-[#f9f9fb] p-4 rounded-xl border border-[#eeeef0] space-y-2">
                <p>
                  <strong className="text-black">Organizing Committee:</strong>{' '}
                  clinicon2027@mef.ues.rs.ba
                </p>
                <p>
                  <strong className="text-black">Faculty of Medicine:</strong> Studentska 5, 73300
                  Foča, BiH
                </p>
                <p>
                  <strong className="text-black">Instagram:</strong> @clinicon2026
                </p>
              </div>
              <p className="text-xs">
                Our support team typically responds within 24 hours on business days.
              </p>
            </div>
          ),
        };
    }
  };

  const { icon, body } = getContent();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 border-b border-[#e8e8ea] flex justify-between items-center bg-[#f9f9fb]">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-xl font-bold text-black font-['Hanken_Grotesk']">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6e6e73] hover:text-black p-1.5 rounded-full hover:bg-[#eeeef0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">{body}</div>
        <div className="px-6 py-3 border-t border-[#e8e8ea] bg-[#f9f9fb] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
