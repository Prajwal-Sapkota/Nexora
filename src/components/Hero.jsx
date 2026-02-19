import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#1C1F2A]">
      {/* Background Image with Zoom Animation */}
      <div 
        className="absolute inset-0 animate-zoom"
        style={{
          backgroundImage: `url('/images/hero1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Corporate Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F2A] via-[#1C1F2A]/85 to-[#1C1F2A]/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center pt-20 sm:pt-32">
        <div className="max-w-xl w-full">
          {/* Brand label */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[#C5A572] tracking-[4px] text-xs sm:text-sm mb-3 sm:mb-4">
              NEXORA HOTEL
            </p>
          </div>

          {/* Heading */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-4 sm:mb-6">
              Executive Comfort
              <br className="hidden xs:block" />
              <span className="block xs:inline"> For Modern Business</span>
            </h1>
          </div>

          {/* Description */}
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-md sm:max-w-none">
              Designed for corporate travelers who value precision,
              comfort, and seamless hospitality experience.
            </p>
          </div>

          {/* Buttons */}
          <div 
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/rooms" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#C5A572] text-[#1C1F2A] cursor-pointer px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-[#B8944A] transition-all duration-300 hover:scale-105">
                  VIEW ROOMS
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/30 text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-widest hover:bg-white hover:text-[#1C1F2A] transition-all duration-300 hover:scale-105">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <style jsx>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-zoom {
          animation: zoom 20s ease-in-out infinite alternate;
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:block {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;