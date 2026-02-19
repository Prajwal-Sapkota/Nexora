import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FiArrowRight, 
  FiUsers, 
  FiMapPin,
  FiCalendar,
  FiClock,
  FiCheckCircle
} from "react-icons/fi";

const MeetingsEvents = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const venues = [
    {
      id: 1,
      name: "Executive Boardroom",
      capacity: "20 Guests",
      image: "/images/boardroom.jpg",
      features: ["Boardroom Table", "4K Display", "Video Conference"],
    },
    {
      id: 2,
      name: "Concourse Hall",
      capacity: "120 Guests",
      image: "/images/concourse.jpg",
      features: ["Stage Setup", "Built-in AV", "Breakout Rooms"],
    },
    {
      id: 3,
      name: "Grand Ballroom",
      capacity: "450 Guests",
      image: "/images/ballroom.jpg",
      features: ["Pre-function Area", "Ballroom Lighting", "Dedicated Team"],
    },
  ];

  return (
    <section className="bg-[#E5E7E9] py-24 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #1C1F2A 1px, transparent 1px),
              linear-gradient(-45deg, #1C1F2A 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C5A572]" />
            <span className="text-[#C5A572] text-xs tracking-widest uppercase">
              MEETINGS & EVENTS
            </span>
            <div className="w-8 h-px bg-[#C5A572]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-[#1C1F2A] mb-4">
            Exceptional Event Spaces
          </h2>
          
          
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* LEFT SIDE - Intro with Background Image */}
          <div className="relative h-[300px] overflow-hidden group cursor-pointer">
            <img
              src="/images/meeting.jpeg"
              alt="Corporate Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F2A] via-[#1C1F2A]/40 to-transparent group-hover:from-[#1C1F2A] group-hover:via-[#1C1F2A]/60 transition-all duration-500" />
            
            {/* Intro Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
              <h3 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
                Welcome <br /> Where Business Comes to Life
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed max-w-md group-hover:text-white/90">
                NEXORA offers premier corporate event spaces for every occasion. 
                Each venue combines architectural elegance with cutting-edge technology.
              </p>
            </div>
            
            {/* Gold Corner Accent */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#C5A572] opacity-60 group-hover:opacity-100 transition-all duration-500" />
          </div>

          {/* RIGHT SIDE TOP - First Event */}
          <div 
            ref={(el) => (cardRefs.current[0] = el)}
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 group cursor-pointer"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="flex h-[300px]">
              {/* Image - 70% width */}
              <div className="w-[70%] h-full overflow-hidden relative">
                <img
                  src={venues[0].image}
                  alt={venues[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Image Overlay on Hover */}
                <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/10 transition-all duration-500" />
              </div>
              
              {/* Content - 30% width */}
              <div className="w-[30%] p-4 flex flex-col justify-center bg-white group-hover:bg-[#1C1F2A] transition-all duration-500">
                <h3 className="text-base text-[#1C1F2A] font-light mb-2 leading-tight group-hover:text-white transition-colors duration-500">{venues[0].name}</h3>
                
                <div className="flex items-center gap-1 text-[#8E9199] text-xs mb-2 group-hover:text-white/70 transition-colors duration-500">
                  <FiUsers className="w-3 h-3 text-[#C5A572]" />
                  <span>{venues[0].capacity}</span>
                </div>
                
                <div className="space-y-1 mb-3">
                  {venues[0].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs">
                      <FiCheckCircle className="w-2 h-2 text-[#C5A572]" />
                      <span className="text-[#8E9199] text-[10px] group-hover:text-white/70 transition-colors duration-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/events/${venues[0].id}`}>
                  <button className="border border-[#C5A572] text-[#C5A572] cursor-pointer px-2 py-1 text-[10px] tracking-widest uppercase inline-flex items-center gap-1 hover:bg-[#C5A572] hover:text-[#1C1F2A] transition-all duration-300 group-hover:border-white group-hover:text-white">
                    View Details
                    <FiArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BOTTOM LEFT - Second Event */}
          <div 
            ref={(el) => (cardRefs.current[1] = el)}
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 group cursor-pointer"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="flex h-[300px]">
              {/* Content - 30% width */}
              <div className="w-[30%] p-4 flex flex-col justify-center bg-white group-hover:bg-[#1C1F2A] transition-all duration-500">
                <h3 className="text-base text-[#1C1F2A] font-light mb-2 leading-tight group-hover:text-white transition-colors duration-500">{venues[1].name}</h3>
                
                <div className="flex items-center gap-1 text-[#8E9199] text-xs mb-2 group-hover:text-white/70 transition-colors duration-500">
                  <FiUsers className="w-3 h-3 text-[#C5A572]" />
                  <span>{venues[1].capacity}</span>
                </div>
                
                <div className="space-y-1 mb-3">
                  {venues[1].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs">
                      <FiCheckCircle className="w-2 h-2 text-[#C5A572]" />
                      <span className="text-[#8E9199] text-[10px] group-hover:text-white/70 transition-colors duration-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/events/${venues[1].id}`}>
                  <button className="border border-[#C5A572] text-[#C5A572] cursor-pointer px-2 py-1 text-[10px] tracking-widest uppercase inline-flex items-center gap-1 hover:bg-[#C5A572] hover:text-[#1C1F2A] transition-all duration-300 group-hover:border-white group-hover:text-white">
                    View Details
                    <FiArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              
              {/* Image - 70% width */}
              <div className="w-[70%] h-full overflow-hidden relative">
                <img
                  src={venues[1].image}
                  alt={venues[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/10 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BOTTOM RIGHT - Third Event */}
          <div 
            ref={(el) => (cardRefs.current[2] = el)}
            className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 group cursor-pointer"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex h-[300px]">
              {/* Image - 70% width */}
              <div className="w-[70%] h-full overflow-hidden relative">
                <img
                  src={venues[2].image}
                  alt={venues[2].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#C5A572]/0 group-hover:bg-[#C5A572]/10 transition-all duration-500" />
              </div>
              
              {/* Content - 30% width */}
              <div className="w-[30%] p-4 flex flex-col justify-center bg-white group-hover:bg-[#1C1F2A] transition-all duration-500">
                <h3 className="text-base text-[#1C1F2A] font-light mb-2 leading-tight group-hover:text-white transition-colors duration-500">{venues[2].name}</h3>
                
                <div className="flex items-center gap-1 text-[#8E9199] text-xs mb-2 group-hover:text-white/70 transition-colors duration-500">
                  <FiUsers className="w-3 h-3 text-[#C5A572]" />
                  <span>{venues[2].capacity}</span>
                </div>
                
                <div className="space-y-1 mb-3">
                  {venues[2].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs">
                      <FiCheckCircle className="w-2 h-2 text-[#C5A572]" />
                      <span className="text-[#8E9199] text-[10px] group-hover:text-white/70 transition-colors duration-500">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/events/${venues[2].id}`}>
                  <button className="border border-[#C5A572] text-[#C5A572] cursor-pointer px-2 py-1 text-[10px] tracking-widest uppercase inline-flex items-center gap-1 hover:bg-[#C5A572] hover:text-[#1C1F2A] transition-all duration-300 group-hover:border-white group-hover:text-white">
                    View Details
                    <FiArrowRight className="w-2 h-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-[#C5A572] text-[#1C1F2A] cursor-pointer px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#B8944A] transition-all duration-300">
              Inquire About Availability
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
    </section>
  );
};

export default MeetingsEvents;