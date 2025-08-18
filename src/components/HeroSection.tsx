import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  // Scroll handler
  const handleExploreClick = () => {
    const section = document.getElementById('our-team');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black px-8 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-left max-w-3xl ml-8 md:ml-16 lg:ml-24 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            PUSHING BOUNDARIES <br /> BEYOND EARTH
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm md:text-sm text-white/80 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AeroSprim was born from the belief that the future belongs to those who dare to defy gravity. We believe that exploring the skies, reaching for the stars, and reshaping aerospace innovation.
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={handleExploreClick}
            className="inline-flex items-center px-6 py-3 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Explore
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
