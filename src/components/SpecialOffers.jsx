import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiAward,
  FiStar,
  FiBriefcase
} from "react-icons/fi";

const offers = [
  {
    id: 1,
    title: "Corporate Dining",
    description: "25% savings at all restaurants.",
    image: "/images/dining.avif",
    benefit: "Save 25%",
    validity: "Year-round",
    gradient: "from-[#C5A572]/30 to-[#1C1F2A]/90",
    icon: FiStar
  },
  {
    id: 2,
    title: "Executive Retreat",
    description: "20% off best available rates.",
    image: "/images/executiveretreat.avif",
    benefit: "20% Off",
    validity: "Until Dec 2025",
    featured: true,
    gradient: "from-[#C5A572]/40 to-[#1C1F2A]/95",
    icon: FiBriefcase
  },
  {
    id: 3,
    title: "Suite Upgrade",
    description: "Complimentary executive suite upgrade.",
    image: "/images/suites.avif",
    benefit: "Free Upgrade",
    validity: "Subject to availability",
    gradient: "from-[#C5A572]/30 to-[#1C1F2A]/90",
    icon: FiStar
  },
];

const SpecialOffers = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#E5E7E9] to-white py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #C5A572 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="absolute top-40 -left-20 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header with scroll animation */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-[#C5A572]" />
            <span className="text-[#C5A572] tracking-[0.35em] text-[10px] md:text-xs uppercase">
              Exclusive Privileges
            </span>
            <div className="w-8 md:w-12 h-[2px] bg-[#C5A572]" />
          </div>

          <h2 className="text-4xl md:text-5xl  font-light text-[#1C1F2A] tracking-tight px-4">
            Signature Offers
          </h2>

          
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const delay = index * 200;
            const isHovered = hoveredId === offer.id;

            return (
              <div
                key={offer.id}
                onMouseEnter={() => setHoveredId(offer.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform ${offer.featured ? 'lg:scale-105 lg:-my-4' : ''
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  height: offer.featured ? "560px" : "520px",
                }}
              >
                {/* Image with hover zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${offer.image})` }}
                />

                {/* Gradient Overlay - Using new colors */}
                <div className={`absolute inset-0 bg-gradient-to-t ${offer.gradient} transition-opacity duration-500 ${isHovered ? 'opacity-95' : 'opacity-85'
                  }`} />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C5A572]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A572]/50 rounded-tr-2xl" />
                </div>

                {/* Benefit Badge with hover animation */}
                <div className="absolute top-6 left-6 z-20">
                  <div className={`bg-[#C5A572] px-5 py-2.5 rounded-full shadow-lg transition-all duration-300 transform ${isHovered ? 'scale-110 rotate-2' : ''
                    }`}>
                    <span className="text-[#1C1F2A] text-xs font-semibold">
                      {offer.benefit}
                    </span>
                  </div>
                </div>

                {/* Validity Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50">
                    <span className="text-[#1C1F2A] text-xs flex items-center gap-1.5">
                      <FiClock className="w-3.5 h-3.5 text-[#C5A572]" />
                      {offer.validity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                  {offer.featured && (
                    <div className={`mb-4 transition-all duration-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}>
                      <FiAward className="w-10 h-10 text-[#C5A572]" />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <offer.icon className="w-5 h-5 text-[#C5A572]" />
                    <h3 className="text-2xl md:text-3xl text-white font-light">
                      {offer.title}
                    </h3>
                  </div>

                  <p className="text-white/90 text-sm mb-6">
                    {offer.description}
                  </p>

                  {/* CTA Button */}
                  <Link to="/booking">
                    <button className={`group inline-flex items-center gap-2 bg-white text-[#1C1F2A] px-6 py-2 text-xs tracking-widest uppercase rounded-full shadow-lg hover:bg-[#C5A572] hover:text-[#1C1F2A] transition-all duration-300 transform ${isHovered ? 'translate-x-2' : ''
                      }`}>
                      Get Offer
                      <FiArrowRight className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''
                        }`} />
                    </button>
                  </Link>
                </div>

                {/* Hover Border */}
                <div className={`absolute inset-0 border-2 rounded-3xl transition-all duration-500 pointer-events-none ${isHovered ? 'border-[#C5A572]/60 scale-95' : 'border-transparent scale-100'
                  }`} />

                {/* Gold Shine Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A572]/10 to-transparent transform -skew-x-12 ${isHovered ? 'translate-x-full' : '-translate-x-full'
                  } transition-transform duration-1000`} />
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default SpecialOffers;