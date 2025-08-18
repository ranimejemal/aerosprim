import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [rocketLaunched, setRocketLaunched] = useState(false);

  const handleRocketHover = () => {
    if (!rocketLaunched) {
      setRocketLaunched(true);
      setTimeout(() => setRocketLaunched(false), 2000);
    }
  };

  return (
    <footer id="about-us" ref={ref} className="relative py-20 blueprint-grid">
      <div className="aerospace-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Mission */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-tech font-bold text-2xl mb-4">AEROSPRIM</h3>
            <p className="font-mono text-sm leading-relaxed text-cosmic-white/70 mb-6">
              Advancing aerospace technology and space exploration through innovation, 
              collaboration, and relentless pursuit of excellence.
            </p>
            
            {/* Mission Stats */}
            <div className="grid grid-cols-3 gap-4 tech-border p-4">
              <div className="text-center">
                <div className="font-tech font-bold text-xl">4</div>
                <div className="text-xs font-mono text-cosmic-white/60">MISSIONS</div>
              </div>
              <div className="text-center">
                <div className="font-tech font-bold text-xl">27</div>
                <div className="text-xs font-mono text-cosmic-white/60">MEMBERS</div>
              </div>
              <div className="text-center">
                <div className="font-tech font-bold text-xl">Coming Soon</div>
                <div className="text-xs font-mono text-cosmic-white/60">LAUNCHES</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="font-tech font-semibold text-lg mb-6">CONTACT</h4>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <div className="text-cosmic-white/60 mb-1">MISSION CONTROL</div>
                <div>aerosprim@gmail.com</div>
              </div>
              <div>
                <div className="text-cosmic-white/60 mb-1">RECRUITMENT</div>
                <div>aerosprim@gmail.com</div>
              </div>
              <div>
                <div className="text-cosmic-white/60 mb-1">FREQUENCY</div>
                <div>145.800 MHz</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="font-tech font-semibold text-lg mb-6">NAVIGATION</h4>
            <div className="space-y-3 font-mono text-sm">
              <div><a href="#mission" className="hover:text-cosmic-white/60 transition-colors">MISSION OVERVIEW</a></div>
              <div><a href="#projects" className="hover:text-cosmic-white/60 transition-colors">ACTIVE PROJECTS</a></div>
              <div><a href="#our-team" className="hover:text-cosmic-white/60 transition-colors">OUR TEAM</a></div>
              <div><a href="#contact" className="hover:text-cosmic-white/60 transition-colors">JOIN MISSION</a></div>
            </div>
          </motion.div>
        </div>

        {/* Rocket Launch Animation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex justify-center mb-12">
  <img
    src="/snapedit_1754569511803-removebg-preview.png" // adjust path if needed
    alt="AeroSprim Logo"
    className="w-20 h-20 object-contain cursor-pointer"
  />
</div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-cosmic-white/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="font-mono text-sm text-cosmic-white/60 mb-4 md:mb-0">
            © 2024 AEROSPRIM AEROSPACE CLUB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 font-mono text-sm">
  <a
    href="/pdfs/Aerosprim Privacy Protocol.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cosmic-white/60 transition-colors"
  >
    PRIVACY PROTOCOL
  </a>
  <a
    href="/pdfs/Aerosprim Terms of Service.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cosmic-white/60 transition-colors"
  >
    TERMS OF SERVICE
  </a>
  <a
    href="/pdfs/Aerosprim Security Clearance.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cosmic-white/60 transition-colors"
  >
    SECURITY CLEARANCE
  </a>
</div>

        </motion.div>

        {/* Technical Timestamp */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-cosmic-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="font-mono text-xs text-cosmic-white/40">
            SYSTEM BUILD: v2.4.7 | LAST UPDATE: {new Date().toISOString().split('T')[0]} | 
            UPTIME: 99.7% | STATUS: OPERATIONAL
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
