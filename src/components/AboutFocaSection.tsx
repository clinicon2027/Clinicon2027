import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Waves, BookOpen } from 'lucide-react';
import { FOCA_SLIDES } from '../data/conferenceData';

export const AboutFocaSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = FOCA_SLIDES.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isHovered) return;

    const duration = FOCA_SLIDES[currentSlide].duration || 5000;
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isHovered]);

  return (
    <section className="py-20 md:py-24 px-6 bg-white relative overflow-hidden" id="about">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Descriptive Story */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 font-['Hanken_Grotesk'] tracking-tight">
            Experience Foča
          </h2>
          <p className="text-[#6e6e73] text-base sm:text-lg mb-8 leading-relaxed">
            Rooted in a distinguished medical heritage, Foča stands as a place where generations of
            knowledge meet the promise of tomorrow. More than a destination, it is a centre of
            learning, excellence and discovery, inspiring those who come to learn, lead and shape
            the future of medicine.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#eeeef0] text-black rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Waves className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-black text-base sm:text-lg font-['Hanken_Grotesk']">
                  Nature in Its Purest Form
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed mt-1">
                  Experience emerald waters, dramatic canyons, and the untouched wilderness of
                  Sutjeska National Park.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#eeeef0] text-black rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-black text-base sm:text-lg font-['Hanken_Grotesk']">
                  Heritage Sites
                </h4>
                <p className="text-sm text-[#6e6e73] leading-relaxed mt-1">
                  From the sacred grandeur of the Church of Saint Sava to the timeless elegance of
                  Aladža Mosque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Carousel Slideshow */}
        <div
          className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl group/slideshow bg-neutral-900 select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          id="foca-carousel-container"
        >
          {/* Images Stack */}
          <div className="absolute inset-0 w-full h-full">
            {FOCA_SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
                }`}
              >
                <img
                  alt={slide.title}
                  src={slide.imageUrl}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-7000"
                />
              </div>
            ))}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none z-10"></div>

          {/* Location Badge */}
          <div className="absolute bottom-8 left-8 text-white z-20 pointer-events-none">
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80">
              Location
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Hanken_Grotesk']">
              Foča, BiH
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              {FOCA_SLIDES[currentSlide].title}
            </p>
          </div>

          {/* Navigation Arrows (Visible on hover and on touch) */}
          <div className="absolute inset-y-0 left-4 flex items-center z-30 opacity-90 sm:opacity-0 sm:group-hover/slideshow:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
              aria-label="Previous slide"
              id="prev-slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-30 opacity-90 sm:opacity-0 sm:group-hover/slideshow:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
              aria-label="Next slide"
              id="next-slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 right-8 flex gap-2 z-30">
            {FOCA_SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'w-6 bg-white opacity-100' : 'w-2 bg-white/50 opacity-50 hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
