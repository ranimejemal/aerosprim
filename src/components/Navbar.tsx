import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SlidingDigit = ({ value }: { value: string }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsChanging(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsChanging(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="relative inline-block w-[1.2em] h-[1.4em] overflow-hidden">
      {isChanging ? (
        <>
          <motion.div
            key={`changing-${value}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {value}
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {prevValue}
          </motion.div>
        </>
      ) : (
        <motion.div
          key={`static-${value}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.div>
      )}
    </div>
  );
};

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const [hours, minutes, seconds] = timeString.split(':');

  return (
    <div className="font-mono text-sm text-cosmic-white/80 border border-cosmic-white/30 px-3 py-1 rounded flex items-center">
      <SlidingDigit value={hours[0]} />
      <SlidingDigit value={hours[1]} />
      <span className="mx-1">:</span>
      <SlidingDigit value={minutes[0]} />
      <SlidingDigit value={minutes[1]} />
      <span className="mx-1">:</span>
      <SlidingDigit value={seconds[0]} />
      <SlidingDigit value={seconds[1]} />
    </div>
  );
};

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = ['Our team', 'Projects', 'Mission', 'About Us', 'Contact'];

  return (
    <motion.nav
      initial={false}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0 }} // instant show/hide, no slide animation
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo wrapped in link */}
          <a href="/">
            <img 
              src="/Sans titre (Présentation) (1).png" 
              alt="Logo" 
              className="h-20 w-auto opacity-80 cursor-pointer"
            />
          </a>

          {/* Navigation Items - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-cosmic-white/90 hover:text-white transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Real-time Clock */}
          <div className="flex-shrink-0">
            <RealTimeClock />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-cosmic-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
