import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AcademicSection } from './components/AcademicSection';
import { SportsSection } from './components/SportsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { AboutFocaSection } from './components/AboutFocaSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';
import { EventModal } from './components/EventModal';
import { AbstractSubmissionModal } from './components/AbstractSubmissionModal';
import { InfoModal } from './components/InfoModal';
import { EVENT_RULES_MAP } from './data/conferenceData';
import { EventRuleDetail } from './types';

export default function App() {
  const [activeModalEvent, setActiveModalEvent] = useState<EventRuleDetail | null>(null);
  const [isAbstractModalOpen, setIsAbstractModalOpen] = useState<boolean>(false);
  const [infoModalTitle, setInfoModalTitle] = useState<string | null>(null);

  const handleOpenEventModal = (id: string) => {
    const detail = EVENT_RULES_MAP[id];
    if (detail) {
      setActiveModalEvent(detail);
    }
  };

  const scrollToElement = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] text-[#1a1c1d] flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Header onRegisterClick={() => scrollToElement('register')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSecureSpotClick={() => scrollToElement('register')}
          onViewScheduleClick={() => scrollToElement('schedule')}
        />

        {/* Stats Strip */}
        <StatsBar />

        {/* Academic Excellence Section with 6 Cards & Research Showcase */}
        <AcademicSection
          onSelectEvent={handleOpenEventModal}
          onSubmitAbstract={() => setIsAbstractModalOpen(true)}
        />

        {/* Sports Programme Section with Team, Individual, and eSports */}
        <SportsSection onSelectSport={handleOpenEventModal} />

        {/* Interactive 3-Day Program Schedule */}
        <ScheduleSection />

        {/* Experience Foča Image Showcase & Story */}
        <AboutFocaSection />

        {/* Registration Section with Embedded Form */}
        <RegistrationSection />
      </main>

      {/* Footer with Partners and Quick Links */}
      <Footer onQuickLinkClick={(title) => setInfoModalTitle(title)} />

      {/* Dynamic Rule Modal for Academic & Sports Events */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />

      {/* Research Abstract Submission Modal */}
      <AbstractSubmissionModal
        isOpen={isAbstractModalOpen}
        onClose={() => setIsAbstractModalOpen(false)}
      />

      {/* Information Modals for Footer Links */}
      <InfoModal
        title={infoModalTitle}
        onClose={() => setInfoModalTitle(null)}
      />
    </div>
  );
}
