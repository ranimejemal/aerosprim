import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="mission" ref={ref} className="relative py-20 blueprint-grid">
      <div className="aerospace-container">
        <div className="mission-grid">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 
              className="text-section font-tech font-bold mb-8 glitch-text"
              data-text="OUR MISSION"
            >
              OUR MISSION
            </h2>
            <div className="space-y-6 font-mono text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                AEROSPRIM is dedicated to pushing the boundaries of aerospace engineering 
                and space exploration. We design, build, and test cutting-edge aircraft, 
                rockets, satellites, and space systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Our mission is to inspire the next generation of aerospace engineers 
                and contribute to humanity's expansion into the cosmos.
              </motion.p>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="tech-border p-8 bg-space-black/50 backdrop-blur-sm">
                <h3 className="font-tech font-bold text-xl mb-4">CORE OBJECTIVES</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ Advanced Propulsion Systems</li>
                  <li>→ Satellite Deployment & Operations</li>
                  <li>→ Atmospheric Flight Testing</li>
                  <li>→ Space Mission Planning</li>
                </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Diagram */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="tech-border p-8 bg-space-black/50 backdrop-blur-sm">
              <h3 className="font-tech font-bold text-xl mb-6 text-center">
                ROCKET STAGE CONFIGURATION
              </h3>
              
              {/* Rocket Diagram */}
              <div className="flex flex-col items-center space-y-4">
                {/* Payload */}
                <motion.div
                  className="w-16 h-16 tech-border flex items-center justify-center bg-tech-gray/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <span className="text-xs font-mono">PAYLOAD</span>
                </motion.div>
                
                {/* Second Stage */}
                <motion.div
                  className="w-20 h-24 tech-border flex items-center justify-center bg-tech-gray/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                >
                  <span className="text-xs font-mono">STAGE 2</span>
                </motion.div>
                
                {/* First Stage */}
                <motion.div
                  className="w-24 h-32 tech-border flex items-center justify-center bg-tech-gray/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <span className="text-xs font-mono">STAGE 1</span>
                </motion.div>
              </div>
              
              {/* Technical Specs */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-cosmic-white/60">HEIGHT</div>
                  <div>2.2 M</div>
                </div>
                <div>
                  <div className="text-cosmic-white/60">MASS</div>
                  <div>18 KG</div>
                </div>
                <div>
                  <div className="text-cosmic-white/60">THRUST</div>
                  <div>600 KN</div>
                </div>
                <div>
                  <div className="text-cosmic-white/60">PAYLOAD</div>
                  <div>2 KG</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
