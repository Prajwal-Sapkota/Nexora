import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCoffee,
  FiStar,
  FiAward,
  FiArrowRight,
  FiBriefcase,
  FiClock
} from "react-icons/fi";

const BrandStory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth entrance on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation variants using CSS classes
  const fadeInUp = "transition-all duration-700 ease-out";
  const fadeInLeft = "transition-all duration-700 ease-out";
  const fadeInRight = "transition-all duration-700 ease-out";
  
  return (
    <section className="relative bg-[#E5E7E9] py-16 md:py-24 overflow-hidden">
      {/* Clean Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
      
      <div 
        ref={sectionRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT SIDE - Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {/* Card 1 - Executive Comfort */}
            <div 
              className={`group relative bg-white p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#1C1F2A] ${fadeInLeft}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                transitionDelay: '0.1s'
              }}
            >
              {/* Gold Overlay on Hover */}
              <div className="absolute inset-0 bg-[#C5A572] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Icon */}
              <FiCoffee className="text-[#C5A572] text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 relative z-10" />
              
              {/* Text */}
              <h3 className="text-sm sm:text-base md:text-xl text-[#1C1F2A] mb-2 sm:mb-3 font-light group-hover:text-white transition-colors duration-500 relative z-10">
                Executive Comfort
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#8E9199] leading-relaxed group-hover:text-white/80 transition-colors duration-500 relative z-10 hidden sm:block">
                Designed exclusively for corporate travelers.
              </p>
              <p className="text-[10px] text-[#8E9199] group-hover:text-white/80 transition-colors duration-500 relative z-10 block sm:hidden">
                Corporate comfort
              </p>

              {/* Animated Gold Border */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A572] group-hover:w-full transition-all duration-500" />
              <span className="absolute top-0 right-0 w-0 h-[2px] bg-[#C5A572] group-hover:w-full transition-all duration-500" />
            </div>

            {/* Image 1 - Lobby */}
            <div 
              className={`relative h-[180px] sm:h-[180px] md:h-[260px] overflow-hidden group ${fadeInRight}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                transitionDelay: '0.4s'
              }}
            >
              <img
                src="/images/lobby.jpg"
                alt="NEXORA Lobby"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/20 transition-all duration-500" />
              
              {/* Corner Accent - Hidden on mobile */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-500 hidden sm:block" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-500 hidden sm:block" />
            </div>

            {/* Image 2 - Room */}
            <div 
              className={`relative h-[180px] sm:h-[180px] md:h-[260px] overflow-hidden group ${fadeInLeft}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                transitionDelay: '0.5s'
              }}
            >
              <img
                src="/images/room.jpg"
                alt="NEXORA Room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/20 transition-all duration-500" />
              
              {/* Corner Accent - Hidden on mobile */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-500 hidden sm:block" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-500 hidden sm:block" />
            </div>

            {/* Card 2 - Corporate Excellence */}
            <div 
              className={`group relative bg-white p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#1C1F2A] ${fadeInRight}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                transitionDelay: '0.2s'
              }}
            >
              <div className="absolute inset-0 bg-[#C5A572] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <FiAward className="text-[#C5A572] text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 relative z-10" />
              
              <h3 className="text-sm sm:text-base md:text-xl text-[#1C1F2A] mb-2 sm:mb-3 font-light group-hover:text-white transition-colors duration-500 relative z-10">
                Corporate Excellence
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#8E9199] leading-relaxed group-hover:text-white/80 transition-colors duration-500 relative z-10 hidden sm:block">
                Trusted by global business leaders.
              </p>
              <p className="text-[10px] text-[#8E9199] group-hover:text-white/80 transition-colors duration-500 relative z-10 block sm:hidden">
                Award-winning hospitality
              </p>

              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A572] group-hover:w-full transition-all duration-500" />
              <span className="absolute top-0 right-0 w-0 h-[2px] bg-[#C5A572] group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          {/* RIGHT SIDE - Text Content */}
          <div className="mt-6 sm:mt-0">
            {/* Small Label */}
            <div 
              className={`flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 ${fadeInUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.1s'
              }}
            >
              <div className="w-6 sm:w-8 h-px bg-[#C5A572]" />
              <span className="text-[#C5A572] tracking-[4px] text-xs sm:text-sm">
                ABOUT NEXORA
              </span>
            </div>

            {/* Heading */}
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl  text-[#1C1F2A] font-light leading-tight mb-4 sm:mb-6 ${fadeInUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.2s'
              }}
            >
              The Future Of
              <br />
              Corporate Hospitality
            </h2>

            {/* Description */}
            <p 
              className={`text-sm sm:text-base md:text-lg text-[#8E9199] leading-relaxed mb-6 sm:mb-8 ${fadeInUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.3s'
              }}
            >
              Located in the heart of the financial district, NEXORA Hotel
              delivers a seamless blend of executive comfort, modern architecture,
              and premium service.
            </p>
            
            {/* Quick Stats */}
            <div 
              className={`flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10 ${fadeInUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.4s'
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C5A572]/10 rounded-full flex items-center justify-center group/stat">
                  <FiClock className="text-[#C5A572] w-3 h-3 sm:w-4 sm:h-4 group-hover/stat:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-[#1C1F2A] text-sm sm:text-base font-medium">24/7</p>
                  <p className="text-[#8E9199] text-xs">Concierge</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C5A572]/10 rounded-full flex items-center justify-center group/stat">
                  <FiBriefcase className="text-[#C5A572] w-3 h-3 sm:w-4 sm:h-4 group-hover/stat:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-[#1C1F2A] text-sm sm:text-base font-medium">10k+</p>
                  <p className="text-[#8E9199] text-xs">Corporate Clients</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div 
              className={`${fadeInUp}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '0.5s'
              }}
            >
              <Link to="/about">
                <button className="group relative bg-[#C5A572] text-[#1C1F2A] px-6 sm:px-8 md:px-10 py-3 sm:py-4 tracking-widest text-xs sm:text-sm uppercase inline-flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto justify-center">
                  {/* Button Background Animation */}
                  <span className="absolute inset-0 bg-[#1C1F2A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  
                  {/* Button Content */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Discover More</span>
                  <FiArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                  
                  {/* Corner Accents - Hidden on mobile */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C5A572] group-hover:border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C5A572] group-hover:border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C5A572] group-hover:border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C5A572] group-hover:border-white opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
    </section>
  );
};

export default BrandStory;