import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINICON_LOGO_URL } from '../data/conferenceData';

interface HeaderProps {
  onRegisterClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'academic', 'sports', 'schedule', 'about', 'register'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#e8e8ea] px-6 md:px-10 py-3 transition-all duration-200">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 text-black group"
          id="header-brand-link"
        >
          <div className="w-8 h-8 flex-shrink-0">
            <img
              alt="CLINICON Logo"
              className="w-full h-full object-contain"
              src={CLINICON_LOGO_URL}
            />
          </div>
          <h2 className="text-black text-xl font-bold leading-tight tracking-tight font-['Hanken_Grotesk']">
            CLINICON 2027
          </h2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" id="desktop-navigation">
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'home'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
          </a>
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'academic'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#academic"
            onClick={(e) => scrollToSection(e, 'academic')}
          >
            Academic Events
          </a>
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'sports'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#sports"
            onClick={(e) => scrollToSection(e, 'sports')}
          >
            Sports
          </a>
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'schedule'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#schedule"
            onClick={(e) => scrollToSection(e, 'schedule')}
          >
            Schedule
          </a>
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'about'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About Foča
          </a>
          <a
            className={`text-sm font-medium transition-colors ${
              activeSection === 'register'
                ? 'text-[#005ab7] font-semibold'
                : 'text-[#1a1c1d] hover:text-[#005ab7]'
            }`}
            href="#register"
            onClick={(e) => {
              scrollToSection(e, 'register');
              if (onRegisterClick) onRegisterClick();
            }}
          >
            Register
          </a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#register"
            onClick={(e) => scrollToSection(e, 'register')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors"
            id="nav-quick-register"
          >
            Join Summit
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-neutral-800 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e8e8ea] mt-3 pt-4 pb-3 space-y-2 bg-white/95 backdrop-blur-md rounded-b-xl shadow-lg px-4">
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            Home
          </a>
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#academic"
            onClick={(e) => scrollToSection(e, 'academic')}
          >
            Academic Events
          </a>
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#sports"
            onClick={(e) => scrollToSection(e, 'sports')}
          >
            Sports Programme
          </a>
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#schedule"
            onClick={(e) => scrollToSection(e, 'schedule')}
          >
            Schedule
          </a>
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About Foča
          </a>
          <a
            className="block py-2 px-3 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#005ab7]"
            href="#register"
            onClick={(e) => scrollToSection(e, 'register')}
          >
            Register
          </a>
        </div>
      )}
    </header>
  );
};
