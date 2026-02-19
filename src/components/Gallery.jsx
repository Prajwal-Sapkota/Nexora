import { useRef, useState, useEffect } from "react";

const images = [
  { id: 1, src: "/images/gallerylobby.jpg", alt: "Hotel Lobby", title: "Grand Lobby", span: "md:col-span-1 md:row-span-1", delay: 0.1, direction: "left" },
  { id: 2, src: "/images/galleryrestaurant.webp", alt: "Restaurant", title: "Signature Restaurant", span: "md:col-span-1 md:row-span-1", delay: 0.2, direction: "right" },
  { id: 3, src: "/images/galleryatrium.jpg", alt: "Atrium", title: "Sky Atrium", span: "md:col-span-2 md:row-span-2", delay: 0, direction: "up", featured: true },
  { id: 4, src: "/images/gallerysuites.webp", alt: "Executive Suites", title: "Executive Suites", span: "md:col-span-2 md:row-span-1", delay: 0.3, direction: "scale" },
  { id: 5, src: "/images/galleryroom.jpg", alt: "Guest Room", title: "Premier Room", span: "md:col-span-1 md:row-span-1", delay: 0.4, direction: "up" },
  { id: 6, src: "/images/gallerybar.jpg", alt: "Sky Bar", title: "Sky Bar", span: "md:col-span-1 md:row-span-1", delay: 0.5, direction: "down" },
  { id: 7, src: "/images/ballroom.jpg", alt: "Ballroom", title: "Ballroom", span: "md:col-span-2 md:row-span-1", delay: 0.6, direction: "scale" },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-gallery-item]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getTransform = (item, isVisible) => {
    if (!isVisible) {
      switch(item.direction) {
        case 'left': return 'translateX(-30px)';
        case 'right': return 'translateX(30px)';
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'scale': return 'scale(0.95)';
        default: return 'translateY(30px)';
      }
    }
    return 'translate(0) scale(1)';
  };

  return (
    <section className="bg-[#e3e6e8] py-16 md:py-24 overflow-hidden relative">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center pb-12 ">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
            <p className="text-[#C5A572] tracking-[0.35em] text-[10px] md:text-xs uppercase">
              Visual Experience
            </p>
            <div className="w-8 md:w-12 h-px bg-[#C5A572]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1F2A] tracking-tight px-4">
            Discover Nexora
          </h2>
          
          
        </div>

        {/* Gallery Grid - Dynamic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]">
          {images.map((img) => {
            // Adjust span classes for mobile
            let mobileSpan = "";
            if (img.id === 3) mobileSpan = "col-span-2 row-span-2";
            else if (img.id === 4) mobileSpan = "col-span-2";
            else if (img.id === 7) mobileSpan = "col-span-2";
            
            return (
              <div
                key={img.id}
                data-gallery-item="true"
                data-id={img.id}
                className={`${mobileSpan} ${img.span} group relative overflow-hidden rounded-xl md:rounded-2xl shadow-md md:shadow-xl cursor-pointer`}
                style={{
                  opacity: visibleItems[img.id] ? 1 : 0,
                  transform: getTransform(img, visibleItems[img.id]),
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${img.delay}s`,
                }}
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title overlay on hover - visible on larger screens */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                  <h3 className="text-white text-sm md:text-xl font-light">{img.title}</h3>
                  {img.featured && (
                    <span className="text-[#C5A572] text-[10px] md:text-xs tracking-wider uppercase mt-1 block">Featured</span>
                  )}
                </div>

                {/* Simple mobile title overlay - always visible on mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#1C1F2A]/60 to-transparent md:hidden">
                  <h3 className="text-white text-xs font-light truncate">{img.title}</h3>
                </div>

                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-0 w-12 md:w-20 h-[2px] bg-[#C5A572] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            );
          })}
        </div>

        {/* Subtle divider */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-16 md:w-24 h-[2px] bg-[#C5A572]/30" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;