import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Managing Director",
    company: "Goldman Sachs",
    content:
      "NEXORA has become our preferred destination for executive stays. The privacy, discretion and business amenities are second to none. Every detail reflects precision and excellence.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "VP Operations",
    company: "Deloitte",
    content:
      "Our annual leadership summit at NEXORA exceeded expectations. The service team anticipates needs before they arise. A seamless experience from arrival to departure.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Regional Director",
    company: "JPMorgan Chase",
    content:
      "For executives who value efficiency and elegance, NEXORA sets the global benchmark. It's more than a stay — it's a refined corporate experience.",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Jennifer Wu",
    role: "Chief Strategy Officer",
    company: "McKinsey & Company",
    content:
      "The attention to detail and personalized service creates an environment where business objectives are achieved effortlessly. Our global team feels right at home.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Robert Hayes",
    role: "Senior Partner",
    company: "Boston Consulting Group",
    content:
      "NEXORA understands the needs of modern executives. The seamless integration of work and relaxation makes it our top choice for extended stays.",
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#E5E7E9] py-16 md:py-24 overflow-hidden relative">
      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="w-6 md:w-8 h-px bg-[#C5A572]" />
            <span className="text-[#C5A572] tracking-[0.35em] text-[10px] md:text-xs uppercase">
              Client Experiences
            </span>
            <div className="w-6 md:w-8 h-px bg-[#C5A572]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-light text-[#1C1F2A] px-4">
            What Our Guests Say
          </h2>
          
        
        </div>

        {/* Testimonial with Side Buttons */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          {/* Left Button - Repositioned for mobile */}
          <button
            onClick={handlePrevious}
            className="absolute -left-2 sm:left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-[#C5A572]/30 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572] group transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-[#C5A572] group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base" />
          </button>

          {/* Right Button - Repositioned for mobile */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-[#C5A572]/30 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572] group transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-[#C5A572] group-hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base" />
          </button>

          {/* Quote Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C5A572] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg z-10">
            <FaQuoteLeft className="text-white text-base md:text-xl" />
          </div>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-xl md:rounded-2xl transition-all duration-500 ease-in-out hover:shadow-[0_30px_60px_-15px_rgba(197,165,114,0.3)]"
              key={currentIndex}
            >
              {/* Avatar with Gold Border */}
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#E5E7E9] shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#C5A572] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-[#1C1F2A]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-8 italic animate-fadeIn px-2 sm:px-4">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Name & Title */}
                <div className="space-y-1 animate-fadeIn">
                  <h4 className="text-base sm:text-lg md:text-xl text-[#1C1F2A] font-medium">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#C5A572] text-xs sm:text-sm md:text-base font-light">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8E9199]">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Gold Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-[2px] bg-[#C5A572]/30" />
            </div>
          </div>
        </div>

        {/* Navigation Dots - Centered Below */}
        <div className="flex justify-center gap-1.5 md:gap-3 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-4 md:w-6 lg:w-8 h-1.5 md:h-2 lg:h-2.5 bg-[#C5A572] rounded-full"
                  : "w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 bg-[#C5A572]/20 rounded-full hover:bg-[#C5A572]/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;