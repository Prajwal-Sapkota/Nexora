import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiClock,
  FiBriefcase,
  FiStar,
  FiCompass,
  FiGlobe,
  FiChevronRight,
  FiMessageCircle
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);

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

  const footerLinks = [
    { name: 'Luxury Suites', path: '/rooms' },
    { name: 'Executive Dining', path: '/dining' },
    { name: 'Corporate Events', path: '/events' },
    { name: 'Exclusive Offers', path: '/offers' },
    { name: 'Concierge', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/company/nexora', label: 'LinkedIn', color: 'hover:text-[#0077B5]' },
    { icon: FiTwitter, href: 'https://twitter.com/nexorahotel', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: FiInstagram, href: 'https://instagram.com/nexorahotel', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: FiFacebook, href: 'https://facebook.com/nexorahotel', label: 'Facebook', color: 'hover:text-[#1877F2]' },
  ];

  const trustBadges = [
    { icon: FiGlobe, text: 'FORTUNE 500' },
    { icon: FiBriefcase, text: 'ISO 27001' },
    { icon: FiStar, text: 'LEED GOLD' },
  ];

  return (
    <footer ref={sectionRef} className="relative bg-[#1C1F2A] text-white overflow-hidden">
      {/* Architectural Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1C1F2A]" />



        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#C5A572]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#C5A572]/5 rounded-full blur-[120px]" />

        {/* Floating Dots Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #C5A572 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.05
        }} />
      </div>

      {/* Top Architectural Line */}
      <div className="relative h-[3px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid - All boxes same height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* Left Column - Brand (5 cols) */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="h-full bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-[#C5A572]/20 transition-all duration-500">
              <Link to="/" className="inline-block group mb-6">
                <div className="relative">
                  <img
                    src="/images/logo.png"
                    alt="NEXORA"
                    className="h-14 md:h-16 w-auto relative z-10 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -inset-4 bg-[#C5A572]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light mb-8">
                Where architecture meets hospitality. A sanctuary for the global executive.
              </p>

              {/* Trusted Partners - Replacing badges */}
              <div className="space-y-6 pt-4 border-t border-white/5">
                <h5 className="text-[#C5A572] text-xs tracking-[0.3em] uppercase mb-4">Trusted Partners</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl text-center group/partner hover:bg-[#C5A572]/10 cursor-pointer transition-all duration-300">
                    <span className="text-white/40 text-xs font-light block mb-1">Global Leader</span>
                    <span className="text-white/80 text-sm font-medium">Goldman Sachs</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center group/partner hover:bg-[#C5A572]/10 cursor-pointer transition-all duration-300">
                    <span className="text-white/40 text-xs font-light block mb-1">Strategic Partner</span>
                    <span className="text-white/80 text-sm font-medium">Deloitte</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center group/partner hover:bg-[#C5A572]/10 cursor-pointer transition-all duration-300">
                    <span className="text-white/40 text-xs font-light block mb-1">Financial Partner</span>
                    <span className="text-white/80 text-sm font-medium">JPMorgan</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl text-center group/partner hover:bg-[#C5A572]/10 cursor-pointer transition-all duration-300">
                    <span className="text-white/40 text-xs font-light block mb-1">Consulting Partner</span>
                    <span className="text-white/80 text-sm font-medium">McKinsey</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* Middle Column - Navigation (4 cols) */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            onMouseEnter={() => setActiveColumn('nav')}
            onMouseLeave={() => setActiveColumn(null)}
          >
            <div className="h-full bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-[#C5A572]/20 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <h4 className="text-[#C5A572] text-sm tracking-[0.3em] uppercase">Explore</h4>
                </div>

                <div className="space-y-4">
                  {footerLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="group flex items-center gap-4 py-2 border-b border-white/5 hover:border-[#C5A572]/30 transition-all duration-300"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <FiChevronRight className="w-4 h-4 text-[#C5A572] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      <span className="text-white/50 group-hover:text-white text-sm tracking-wide transition-colors duration-300 flex-1">
                        {link.name}
                      </span>
                      <span className="text-white/20 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="pt-10">
                <div className="flex items-center gap-3 pb-6">
                  <div className="w-28 h-[1px] bg-[#C5A572]/30" />
                  <span className="text-white/30 text-[8px] tracking-[0.6em] uppercase">Connect</span>
                  <div className="flex-1 h-[1px] bg-[#C5A572]/30" />
                </div>
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={social.label}
                      to={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white/30 ${social.color} transition-all duration-300 hover:-translate-y-2 hover:scale-110`}
                      aria-label={social.label}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact (3 cols) */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="h-full bg-gradient-to-br from-[#C5A572]/10 to-transparent p-8 rounded-3xl border border-[#C5A572]/20 backdrop-blur-sm flex flex-col relative overflow-hidden group">
              {/* Decorative Element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A572]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <FiCompass className="w-5 h-5 md:w-6 md:h-6 text-[#C5A572]" />
                  <span className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase">Contact</span>
                </div>

                <div className="space-y-10">
                  {/* Location */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C5A572]/10 flex items-center justify-center group-hover/item:bg-[#C5A572]/20 transition-all duration-300 flex-shrink-0">
                      <FiMapPin className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] tracking-wider uppercase mb-0.5">Location</p>
                      <p className="text-white/80 text-xs md:text-sm font-light">Pokhara, Nepal</p>
                    </div>
                  </div>

                  {/* Call - with clickable link */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C5A572]/10 flex items-center justify-center group-hover/item:bg-[#C5A572]/20 transition-all duration-300 flex-shrink-0">
                      <FiPhone className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] tracking-wider uppercase mb-0.5">Call Us</p>
                      <Link to="tel:+977-9800000000" className="text-white/80 text-xs md:text-sm font-light hover:text-[#C5A572] transition-colors duration-300 block">
                        +977-9800000000
                      </Link>
                    </div>
                  </div>

                  {/* Mail - with clickable link */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C5A572]/10 flex items-center justify-center group-hover/item:bg-[#C5A572]/20 transition-all duration-300 flex-shrink-0">
                      <FiMail className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] tracking-wider uppercase mb-0.5">Email</p>
                      <Link to="mailto:reservations@nexora.com" className="text-white/80 text-xs md:text-sm font-light hover:text-[#C5A572] transition-colors duration-300 block">
                        reservations@nexora.com
                      </Link>
                    </div>
                  </div>

                  {/* Concierge */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C5A572]/10 flex items-center justify-center group-hover/item:bg-[#C5A572]/20 transition-all duration-300 flex-shrink-0">
                      <FiClock className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] tracking-wider uppercase mb-0.5">Concierge</p>
                      <p className="text-white/80 text-xs md:text-sm font-light">24/7 Executive Service</p>
                    </div>
                  </div>

                  {/* WhatsApp - with clickable link using FiMessageCircle */}
                  <div className="flex items-start gap-3 group/item pt-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C5A572]/10 flex items-center justify-center group-hover/item:bg-[#C5A572]/20 transition-all duration-300 flex-shrink-0">
                      <FiMessageCircle className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="text-white/30 text-[8px] tracking-wider uppercase mb-0.5">WhatsApp</p>
                      <Link
                        to="https://wa.me/9800000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 text-xs md:text-sm font-light hover:text-[#C5A572] transition-colors duration-300 block"
                      >
                        +977-9800000000
                      </Link>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
          {/* Architectural Divider */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A572]/30 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border border-[#C5A572]/20 rotate-45" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
            {/* Left - Copyright */}
            <div className="text-white/30 text-[10px] md:text-xs text-center md:text-left order-2 md:order-1">
              © {currentYear} NEXORA. All rights reserved.
            </div>

            {/* Right - Crafted By */}
            <div className="order-1 md:order-2">
              <Link
                to="https://www.sait.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                <span className="text-white/30 text-[8px] tracking-[0.2em] uppercase">Crafted by</span>
                <span className="text-[#C5A572] text-xs md:text-sm font-light relative">
                  S.A.I.T Solution Nepal
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Line */}
      <div className="relative h-[3px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />
      </div>
    </footer>
  );
};

export default Footer;