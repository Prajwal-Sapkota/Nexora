import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiMapPin, 
  FiNavigation, 
  FiClock, 
  FiTruck,
  
  
  
  FiBriefcase,
  FiStar
} from 'react-icons/fi';
import { FaCar, FaPlane, FaTrain } from 'react-icons/fa';

const Location = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.1, 0.9],
      },
    },
  };

  const distances = [
    { 
      icon: FaPlane, 
      label: 'International Airport', 
      time: '25 minutes',
      distance: '18 km',
      description: 'Direct highway access'
    },
    { 
      icon: FaTrain, 
      label: 'Business District Station', 
      time: '5 minutes walk',
      distance: '400 m',
      description: 'Express trains every 10 mins'
    },
    { 
      icon: FiBriefcase, 
      label: 'Financial District', 
      time: '8 minutes',
      distance: '2.5 km',
      description: 'Heart of corporate hub'
    },
    { 
      icon: FaCar, 
      label: 'Major Highways', 
      time: '2 minutes',
      distance: '500 m',
      description: 'I-95 & I-395 access'
    },
  ];

  const nearbyCorporates = [
    'Goldman Sachs HQ',
    'JPMorgan Chase',
    'Deloitte',
    'PwC',
    'Ernst & Young',
    'Morgan Stanley',
  ];

  const nearbyHotels = [
    'The Ritz-Carlton',
    'Four Seasons',
    'Mandarin Oriental',
    'St. Regis',
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#F8F9FB] overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full">
            <pattern id="location-pattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#1A1F26"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#location-pattern)" />
          </svg>
        </div>
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C8A45D]" />
              <span className="text-[#C8A45D] text-xs tracking-[0.3em] uppercase flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                PRIME LOCATION
              </span>
              <div className="w-12 h-[1px] bg-[#C8A45D]" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-light text-[#1A1F26] mb-6">
            In the Heart of{' '}
            <span className="text-[#C8A45D] relative">
              Business
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C8A45D]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-[#1A1F26]/60 max-w-2xl mx-auto">
            Strategically positioned in the city's most prestigious business district, 
            NEXORA puts you minutes from where decisions are made.
          </motion.p>
        </motion.div>

        {/* Map Placeholder - In real project, embed Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative h-96 bg-[#1A1F26] mb-16 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A45D]/10 to-transparent" />
          
          {/* Map Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <pattern id="map-grid" patternUnits="userSpaceOnUse" width="40" height="40">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#C8A45D"
                  strokeWidth="0.5"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
            </svg>
          </div>

          {/* Central Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 bg-[#C8A45D] rounded-full flex items-center justify-center animate-pulse">
                <FiMapPin className="w-4 h-4 text-[#1A1F26]" />
              </div>
              <div className="absolute top-0 left-0 w-8 h-8 bg-[#C8A45D] rounded-full animate-ping opacity-50" />
            </div>
          </div>

          {/* Location Label */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4">
            <p className="text-[#1A1F26] text-lg font-light">NEXORA Hotel</p>
            <p className="text-[#1A1F26]/60 text-sm">123 Business District, New York, NY 10001</p>
          </div>

          {/* Map Attribution */}
          <div className="absolute bottom-8 right-8 bg-[#1A1F26]/80 backdrop-blur-sm px-4 py-2">
            <span className="text-white/40 text-xs">Interactive Map Available</span>
          </div>
        </motion.div>

        {/* Distances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <item.icon className="w-8 h-8 text-[#C8A45D] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[#1A1F26] font-medium mb-1">{item.label}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl text-[#C8A45D] font-light">{item.time}</span>
                <span className="text-xs text-[#1A1F26]/40">{item.distance}</span>
              </div>
              <p className="text-xs text-[#1A1F26]/50">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Corporate Neighborhood */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Nearby Corporations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="bg-white p-10 shadow-lg border-l-4 border-[#C8A45D]"
          >
            <h3 className="text-2xl text-[#1A1F26] font-light mb-6 flex items-center gap-3">
              <FiBriefcase className="w-6 h-6 text-[#C8A45D]" />
              In Your Neighborhood
            </h3>
            <p className="text-[#1A1F26]/60 text-sm mb-6">
              Surrounded by the world's leading financial institutions and corporate headquarters.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {nearbyCorporates.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-[#C8A45D] rounded-full" />
                  <span className="text-sm text-[#1A1F26]/70">{company}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Nearby Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="bg-white p-10 shadow-lg border-l-4 border-[#C8A45D]"
          >
            <h3 className="text-2xl text-[#1A1F26] font-light mb-6 flex items-center gap-3">
              <FiStar className="w-6 h-6 text-[#C8A45D]" />
              Prestigious Neighbors
            </h3>
            <p className="text-[#1A1F26]/60 text-sm mb-6">
              Located alongside the city's most iconic hotels and cultural institutions.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-[#1A1F26] font-medium mb-2">Nearby Luxury Hotels</h4>
                <div className="grid grid-cols-2 gap-3">
                  {nearbyHotels.map((hotel, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FiStar className="w-3 h-3 text-[#C8A45D]" />
                      <span className="text-sm text-[#1A1F26]/70">{hotel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-[#1A1F26]/10">
                <h4 className="text-sm text-[#1A1F26] font-medium mb-2">Cultural District</h4>
                <p className="text-xs text-[#1A1F26]/50">5 minutes to theaters, galleries, and fine dining</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transportation Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 p-6 bg-white/50"
        >
          <div className="flex items-center gap-2">
            <FiTruck className="w-5 h-5 text-[#C8A45D]" />
            <span className="text-sm text-[#1A1F26]/70">24/7 Valet Parking</span>
          </div>
          <div className="w-px h-4 bg-[#1A1F26]/20" />
          <div className="flex items-center gap-2">
            <FaCar className="w-5 h-5 text-[#C8A45D]" />
            <span className="text-sm text-[#1A1F26]/70">Limo Service Available</span>
          </div>
          <div className="w-px h-4 bg-[#1A1F26]/20" />
          <div className="flex items-center gap-2">
            <FiNavigation className="w-5 h-5 text-[#C8A45D]" />
            <span className="text-sm text-[#1A1F26]/70">Electric Vehicle Charging</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#C8A45D] text-[#1A1F26] px-12 py-5 text-sm tracking-[0.2em] uppercase inline-flex items-center gap-3 hover:bg-[#B89B5A] transition-all duration-300"
            >
              <FiNavigation className="w-5 h-5" />
              Get Directions
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </Link>
          <p className="text-[#1A1F26]/40 text-xs mt-4">Complimentary airport transfers for corporate accounts</p>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45D]/30 to-transparent" />
    </section>
  );
};

export default Location;