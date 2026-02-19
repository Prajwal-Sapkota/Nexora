import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMaximize,
  FiBriefcase,
  FiWifi,
  FiStar,
  FiClock,
  FiUsers
} from "react-icons/fi";

const rooms = [
  {
    id: 1,
    name: "Executive Suite",
    description:
      "Purposefully designed for corporate leaders who value clarity, comfort, and control.",
    size: "45 m²",
    capacity: "2 Guests",
    image: "/images/executive.jpg",
    features: ["Dedicated Workspace", "City View", "Express Check-in"],
    reverse: false,
  },
  {
    id: 2,
    name: "Boardroom Residence",
    description:
      "Where business and privacy exist in perfect architectural balance.",
    size: "65 m²",
    capacity: "4 Guests",
    image: "/images/boardroom.jpg",
    features: ["Private Meeting Area", "Boardroom Table", "Executive Lounge"],
    reverse: true,
  },
  {
    id: 3,
    name: "Corporate Deluxe",
    description:
      "A calm environment engineered for rest, preparation, and performance.",
    size: "55 m²",
    capacity: "3 Guests",
    image: "/images/deluxe.jpg",
    features: ["Panoramic View", "Work Pod", "Premium Amenities"],
    reverse: false,
  },
];

export default function RoomsPreview() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: [],
    cta: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, header: true }));
          }

          if (entry.target === ctaRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, cta: true }));
          }

          const cardIndex = cardsRef.current.findIndex(ref => ref === entry.target);
          if (cardIndex !== -1 && entry.isIntersecting) {
            setIsVisible(prev => {
              const newCards = [...prev.cards];
              newCards[cardIndex] = true;
              return { ...prev, cards: newCards };
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    cardsRef.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-[#E5E7E9] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1C1F2A 1px, transparent 1px),
              linear-gradient(to bottom, #1C1F2A 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12  transition-all duration-1000 transform ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
            <span className="text-[#C5A572] tracking-[0.3em] text-xs uppercase">
              CORPORATE SUITES
            </span>
            <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-light text-[#1C1F2A] leading-tight px-4">
            <span className="block">The Art of Refined Living</span>
          </h2>


        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              ref={el => cardsRef.current[index] = el}
              className={`group relative h-full cursor-pointer transition-all duration-700 transform ${isVisible.cards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Premium Card - Consistent layout on mobile regardless of reverse prop */}
              <div className="relative bg-white transition-all duration-700 h-full flex flex-col overflow-hidden group-hover:bg-[#1C1F2A]">

                {/* Gold Border - Appears on Hover */}
                <div className="absolute inset-0 border border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                {/* Image Container - Always on top for mobile */}
                <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F2A] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

                  {/* Room Features - Appear on hover */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {room.features.map((feature, i) => (
                        <span key={i} className="text-[10px] md:text-xs text-[#1C1F2A] bg-[#C5A572] px-2 md:px-3 py-1 md:py-1.5">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Area - Always below image on mobile, respects reverse on desktop */}
                <div className={`p-4 sm:p-6 md:p-8 flex-1 flex flex-col transition-colors duration-700 ${room.reverse ? 'md:order-first' : ''
                  }`}>
                  {/* Room Name */}
                  <h3 className="text-xl sm:text-2xl text-[#1C1F2A] font-light mb-2 md:mb-3 group-hover:text-white transition-colors duration-500">
                    {room.name}
                  </h3>

                  {/* Description - Truncated on mobile */}
                  <p className="text-xs sm:text-sm text-[#8E9199] leading-relaxed mb-4 md:mb-6 group-hover:text-white/70 transition-colors duration-500 line-clamp-3 sm:line-clamp-none">
                    {room.description}
                  </p>

                  {/* Room Details - Stack on mobile */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <FiMaximize className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572] transition-colors duration-500" />
                      <span className="text-[10px] md:text-xs text-[#8E9199] group-hover:text-white/70 transition-colors duration-500">{room.size}</span>
                    </div>
                    <div className="w-px h-3 md:h-4 bg-[#8E9199]/30 group-hover:bg-white/20 transition-colors duration-500" />
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <FiUsers className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572] transition-colors duration-500" />
                      <span className="text-[10px] md:text-xs text-[#8E9199] group-hover:text-white/70 transition-colors duration-500">{room.capacity}</span>
                    </div>
                    <div className="w-px h-3 md:h-4 bg-[#8E9199]/30 group-hover:bg-white/20 transition-colors duration-500" />
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <FiWifi className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572] transition-colors duration-500" />
                      <span className="text-[10px] md:text-xs text-[#8E9199] group-hover:text-white/70 transition-colors duration-500">Premium</span>
                    </div>
                  </div>

                  {/* CTA Section - Stack on mobile */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-auto">
                    <Link
                      to={`/rooms/${room.id}`}
                      className="group/link inline-flex items-center gap-1.5 md:gap-2 text-[#1C1F2A] hover:text-[#C5A572] transition-colors duration-300 group-hover:text-white"
                    >
                      <span className="text-[10px] md:text-xs tracking-widest uppercase">View Details</span>
                      <FiArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>

                    <Link to="/booking" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto border border-[#C5A572] text-[#C5A572] px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-500 group-hover:bg-[#C5A572] group-hover:text-[#1C1F2A]">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Corner Accents - Hidden on mobile */}
                <span className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t border-l border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                <span className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t border-r border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                <span className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b border-l border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
                <span className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b border-r border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 md:mt-20 transition-all duration-1000 transform ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <Link to="/rooms">
            <button className="group bg-[#C5A572] text-[#1C1F2A] px-8 md:px-12 py-3 md:py-5 text-xs md:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2 md:gap-3 hover:bg-[#B8944A] transition-all duration-300 w-full sm:w-auto justify-center">
              <span>View All Corporate Suites</span>
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
    </section>
  );
}