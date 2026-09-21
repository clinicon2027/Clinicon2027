import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/conferenceData';

export const RegistrationSection: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="py-20 md:py-24 px-6 bg-[#f9f9fb]" id="register">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-['Hanken_Grotesk'] tracking-tight">
            Registration
          </h2>
          <p className="text-[#6e6e73] max-w-2xl mx-auto text-base sm:text-lg">
            Fill out the form below to secure your spot at CLINICON 2027. Our team will review your
            application and get back to you shortly.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-[#e8e8ea] relative">
          <div className="flex justify-between items-center mb-4 px-1">
            <span className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Official Registration Portal
            </span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#005ab7] hover:underline flex items-center gap-1"
            >
              Open in new tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative min-h-[600px] md:min-h-[900px] rounded-xl overflow-hidden border border-[#cfc4c5]/60 bg-[#f9f9fb]">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f9f9fb] z-10 text-center p-6">
                <div className="w-8 h-8 border-3 border-black border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-sm font-medium text-[#6e6e73]">Loading official registration form...</p>
                <p className="text-xs text-neutral-400 mt-2">
                  If the form takes longer to load in your browser, click "Open in new tab" above.
                </p>
              </div>
            )}
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-[850px] md:h-[1000px] block rounded-xl"
              title="CLINICON 2027 Registration Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
