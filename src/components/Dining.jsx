import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiMapPin, FiStar } from "react-icons/fi";

const Dining = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: [],
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const restaurants = [
    {
      id: 1,
      name: "Boardroom Grill",
      desc: "Where business meets exceptional cuisine. Designed for executive lunches and private discussions.",
      image: "/images/boardroom.jpg",
      hours: "12pm - 11pm",
      seats: "40 Seats",
      signature: "Wagyu Tasting Menu"
    },
    {
      id: 2,
      name: "Executive Lounge",
      desc: "An elegant environment for meetings, relaxation, and refined international dining.",
      image: "/images/executive.jpg",
      hours: "6am - 12am",
      seats: "80 Seats",
      signature: "Artisanal Coffee Program"
    },
    {
      id: 3,
      name: "Sky Executive Bar",
      desc: "Premium cocktails and skyline views tailored for networking and corporate evenings.",
      image: "/images/skybar.webp",
      hours: "5pm - 2am",
      seats: "120 Seats",
      signature: "Molecular Mixology"
    }
  ];

  // Calculate zoom based on scroll position for each card
  const getCardStyle = (index) => {
    if (!cardsRef.current[index]) return {};
    
    const rect = cardsRef.current[index].getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const cardCenter = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(cardCenter - viewportHeight / 2);
    const maxDistance = viewportHeight / 2;
    const scale = Math.max(0.9, 1 - (distanceFromCenter / maxDistance) * 0.15);
    
    return {
      transform: `scale(${scale})`,
      transition: 'transform 0.3s ease-out'
    };
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#E5E7E9] py-16 md:py-24 overflow-hidden relative"
    >
      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      {/* Corporate Header */}
      <div 
        ref={headerRef}
        className={`max-w-6xl mx-auto text-center px-4 sm:px-6 relative transition-all duration-1000 transform ${
          isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
          <p className="text-xs md:text-sm tracking-[0.4em] text-[#C5A572] uppercase">
            Corporate Dining
          </p>
          <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1F2A] mb-4 md:mb-6 px-4">
          Executive Culinary Spaces
        </h2>

        

        
      </div>

      {/* Cards */}
      {restaurants.map((item, index) => {
        return (
          <div
            key={item.id}
            ref={el => cardsRef.current[index] = el}
            className={`max-w-7xl mx-auto pb-12 md:pb-16 px-4 sm:px-6 transition-all duration-1000 transform ${
              isVisible.cards[index] ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transitionDelay: `${index * 200}ms`,
              ...getCardStyle(index)
            }}
          >
            <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-xl md:rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-700 relative">

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-[#C5A572] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl md:rounded-2xl pointer-events-none" />

              {/* Image */}
              <div className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gold Overlay on Hover */}
                <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/10 transition-all duration-700" />
                
                {/* Signature Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <div className="bg-[#C5A572] px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                    <span className="text-[#1C1F2A] text-[10px] md:text-xs font-medium flex items-center gap-1 md:gap-2">
                      <FiStar className="w-2 h-2 md:w-3 md:h-3" />
                      <span className="hidden sm:inline">{item.signature}</span>
                      <span className="sm:hidden">Signature</span>
                    </span>
                  </div>
                </div>

                {/* Corner Accents - Hidden on mobile */}
                <div className="absolute top-4 left-4 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-700 hidden sm:block" />
                <div className="absolute top-4 right-4 w-8 md:w-12 h-8 md:h-12 border-t-2 border-r-2 border-white/0 group-hover:border-[#C5A572] transition-all duration-700 hidden sm:block" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#C5A572]/5 transition-all duration-700">

                {/* Number Indicator */}
                <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#C5A572]/10 mb-2 md:mb-4">0{index + 1}</span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1C1F2A] mb-2 md:mb-4 font-light group-hover:text-[#C5A572] transition-colors duration-500">
                  {item.name}
                </h3>

                <p className="text-sm sm:text-base text-[#8E9199] mb-4 md:mb-8 leading-relaxed group-hover:text-[#1C1F2A]/80 transition-colors duration-500">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-[#8E9199] mb-6 md:mb-10 group-hover:text-[#1C1F2A]/70 transition-colors duration-500">
                  <span className="flex items-center gap-1 md:gap-2">
                    <FiClock className="text-[#C5A572] w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-300" /> 
                    <span className="text-xs md:text-sm">{item.hours}</span>
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <FiMapPin className="text-[#C5A572] w-3 h-3 md:w-4 md:h-4 group-hover:scale-110 transition-transform duration-300" /> 
                    <span className="text-xs md:text-sm">{item.seats}</span>
                  </span>
                </div>

                <Link to={`/dining/${item.id}`}>
                  <button className="group/btn flex items-center cursor-pointer gap-2 md:gap-3 text-[#C5A572] tracking-widest uppercase text-xs md:text-sm hover:gap-3 md:hover:gap-5 transition-all duration-300">
                    <span className="relative overflow-hidden">
                      View Details
                      <span className="absolute bottom-0 left-0 w-full h-px bg-[#C5A572] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                    </span>
                    <FiArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>

                {/* Gold Line Decoration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-px bg-[#C5A572]/20 group-hover:w-20 md:group-hover:w-32 group-hover:bg-[#C5A572]/40 transition-all duration-700" />
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom CTA */}
      <div 
        ref={ctaRef}
        className={`text-center px-4 transition-all duration-1000 transform ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Link to="/dining">
          <button className="bg-[#C5A572] text-[#1C1F2A] cursor-pointer px-6 sm:px-8 md:px-12 py-3 md:py-5 text-xs md:text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2 md:gap-3 hover:bg-[#B8944A] transition-all duration-300 rounded-full shadow-lg hover:shadow-xl group w-full sm:w-auto justify-center">
            <span>Reserve Your Table</span>
            <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Dining;