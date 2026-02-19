import { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    // Initial animation - navbar drops from above
    setTimeout(() => {
      setNavbarVisible(true);
    }, 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Events', path: '/events' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Background Gradient Effect */}
      <div
        className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-40 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
      />

      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-700 transform ${navbarVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'bg-[#1C1F2A]/90 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}
      >
        {/* Animated Border Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] transition-all duration-500"
          style={{
            background: isScrolled
              ? 'linear-gradient(90deg, transparent, #C5A572, #E5E7E9, #C5A572, transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), rgba(255,255,255,0.5), rgba(255,255,255,0.3), transparent)',
            transform: isScrolled ? 'scaleX(1)' : 'scaleX(0.8)',
            opacity: isScrolled ? 1 : 0.3,
          }}
        />

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center group">
              <div
                className={`absolute -inset-4 bg-[#C5A572]/20 rounded-full blur-xl transition-opacity duration-500 ${isScrolled ? 'opacity-30' : 'opacity-0'
                  }`}
              />
              <img
                src="/images/logo.png"
                alt="NEXORA"
                className="h-12 md:h-14 w-auto relative z-10 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-5 py-3 transition-all duration-200 hover:-translate-y-0.5 ${isActive
                    ? 'bg-[#C5A572]/20'
                    : 'hover:bg-[#C5A572]/10'
                  } rounded-lg`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative text-sm tracking-[0.2em] uppercase font-light transition-colors duration-200 ${isScrolled
                          ? isActive ? 'text-[#C5A572]' : 'text-[#8E9199]'
                          : isActive ? 'text-[#C5A572]' : 'text-white/90'
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* Active Underline */}
                    {isActive && (
                      <div className="absolute bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#C5A572] to-[#E5E7E9]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="flex items-center space-x-4">
            <Link to="/booking">
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#C5A572]/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                <button
                  className={`relative px-8 py-3 text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 group-hover:scale-105 ${isScrolled
                      ? 'bg-gradient-to-r from-[#C5A572] to-[#B8944A] text-[#1C1F2A]'
                      : 'border border-white/30 text-white hover:bg-white hover:text-[#1C1F2A]'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book Now
                    <FaArrowRight className="text-md" />
                  </span>
                </button>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-12 h-12 focus:outline-none group"
            >
              <div className="absolute inset-0 rounded-full transition-colors duration-200 group-hover:bg-[#C5A572]/10" />

              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block w-6 h-0.5 bg-white mb-2 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white mb-2 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div
            className={`mt-4 rounded-2xl overflow-hidden ${isScrolled ? 'bg-[#1C1F2A]' : 'bg-[#1C1F2A]/95 backdrop-blur-xl'
              }`}
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              border: '1px solid rgba(197,165,114,0.2)',
            }}
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-300 ${isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-5 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-6 py-4 text-sm tracking-widest uppercase transition-all ${isActive
                      ? 'text-[#C5A572] bg-[#C5A572]/10'
                      : 'text-[#8E9199] hover:text-white hover:bg-white/5'
                    }`
                  }
                  style={{
                    borderBottom: index !== navItems.length - 1 ? '1px solid rgba(197,165,114,0.1)' : 'none',
                  }}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;