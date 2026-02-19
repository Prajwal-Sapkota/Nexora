import { useRef, useEffect, useState } from 'react';
import { 
  FiWifi, 
  FiClock, 
  FiBriefcase, 
  FiCoffee,
  FiDroplet,
  FiShield,
  FiHeadphones,
  FiTruck,
  FiKey,
  FiStar,
  FiGrid,
  FiBarChart2
} from 'react-icons/fi';

const Amenities = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState({
    header: false,
    cards: []
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, header: true }));
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
    cardsRef.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const amenities = [
    { icon: FiWifi, name: 'High-Speed WiFi', desc: '1 Gbps Fiber Connection' },
    { icon: FiBriefcase, name: 'Business Center', desc: '24/7 Executive Lounge' },
    { icon: FiHeadphones, name: 'Concierge', desc: '24/7 Dedicated Service' },
    { icon: FiShield, name: 'Security', desc: 'Private Floor Access' },
    { icon: FiCoffee, name: 'Coffee Bar', desc: 'Premium Nespresso' },
    { icon: FiDroplet, name: 'Luxury Bath', desc: 'BVLGARI Amenities' },
    { icon: FiStar, name: 'Fitness Center', desc: '24/7 Technogym' },
    { icon: FiClock, name: 'Express Service', desc: 'Mobile Check-in/out' },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 transform ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-px bg-[#C5A572]" />
            <span className="text-[#C5A572] text-[10px] md:text-xs tracking-widest uppercase">
              CORPORATE COMFORT
            </span>
            <div className="w-6 md:w-8 h-px bg-[#C5A572]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1C1F2A] mb-3 md:mb-4 px-4">
            Premium Amenities
          </h2>
          
         
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group bg-white rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl transition-all duration-500 border border-[#C5A572]/10 hover:border-[#C5A572]/30 hover:-translate-y-1 transform ${
                isVisible.cards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-[#C5A572] transition-all duration-500">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#C5A572] group-hover:text-white transition-colors duration-500" />
              </div>
              
              {/* Text Content */}
              <h3 className="font-medium text-sm sm:text-base text-[#1C1F2A] mb-1 md:mb-2 group-hover:text-[#C5A572] transition-colors duration-300">
                {item.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#8E9199]">
                {item.desc}
              </p>

              {/* Subtle Bottom Line on Hover */}
              <div className="w-0 h-0.5 bg-[#C5A572] mx-auto mt-3 md:mt-4 group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;