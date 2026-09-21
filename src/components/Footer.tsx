import React, { useState } from 'react';
import { Share2, Instagram, Check } from 'lucide-react';
import {
  CLINICON_LOGO_URL,
  FACULTY_LOGO_URL,
  WORLIN_LOGO_URL,
} from '../data/conferenceData';

interface FooterProps {
  onQuickLinkClick: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuickLinkClick }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CLINICON 2027 | Medicine Beyond the Classroom',
          text: 'Join CLINICON 2027 - the premier international clinical conference for medical students in Foča, BiH.',
          url: window.location.href,
        });
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="bg-black text-white pt-20 md:pt-24 pb-12 px-6" id="footer">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Main Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex-shrink-0">
                <img
                  alt="CLINICON Logo"
                  className="w-full h-full object-contain brightness-0 invert"
                  src={CLINICON_LOGO_URL}
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight font-['Hanken_Grotesk']">
                CLINICON 2027
              </h2>
            </div>
            <p className="text-white/60 max-w-sm mb-8 text-sm leading-relaxed">
              The premier international clinical conference for medical students. Bridging the gap
              between theory and practice in the heart of the Balkans.
            </p>
            <div className="flex items-center gap-4">
              <a
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                href="https://www.instagram.com/clinicon2026?igsh=aDdxaDZnMG1oMWw2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CLINICON Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={handleShare}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer relative"
                aria-label="Share Conference Link"
                title={copied ? 'Link copied!' : 'Share conference'}
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
              </button>
              {copied && (
                <span className="text-xs text-emerald-400 font-medium">Link copied!</span>
              )}
            </div>
          </div>

          {/* Organised By */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs sm:text-sm text-white font-['Hanken_Grotesk']">
              Organised by
            </h4>
            <div className="space-y-6">
              <a
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                href="https://studiesinenglish.mef.ues.rs.ba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    alt="Faculty of Medicine, Foća Logo"
                    className="w-full h-auto object-contain"
                    src={FACULTY_LOGO_URL}
                  />
                </div>
                <span className="text-xs font-semibold leading-tight text-white/90 group-hover:text-white">
                  Faculty of Medicine, Foća
                </span>
              </a>

              <a
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
                href="https://www.medicalabroad.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    alt="Worlin Education Logo"
                    className="w-full h-auto object-contain"
                    src={WORLIN_LOGO_URL}
                  />
                </div>
                <span className="text-xs font-semibold leading-tight text-white/90 group-hover:text-white">
                  Worlin Education
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs sm:text-sm text-white font-['Hanken_Grotesk']">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <button
                  type="button"
                  onClick={() => onQuickLinkClick('Privacy Policy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onQuickLinkClick('Terms of Service')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onQuickLinkClick('Delegate Guide')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Delegate Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onQuickLinkClick('Contact Support')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2027 CLINICON Organizing Committee. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Foča, Republic of Srpska, BiH</span>
            <span>May 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
