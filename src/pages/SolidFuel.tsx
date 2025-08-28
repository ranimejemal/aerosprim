import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const SolidFuel = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    navigate("/#projects");
  };

  return (
    <section className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-10 bg-black z-10">
      <Navbar />

      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto relative">
        {/* Left column (Text) */}
        <motion.div
          className="max-w-xl text-center lg:text-left mb-12 lg:mb-0 relative z-20"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-tech font-bold mb-6">
            SOLID-FUEL MODEL ROCKET
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-mono text-cosmic-white/80 mb-8">
            Our Solid-Fuel Model Rocket Project is designed to help students understand
            flight dynamics and propulsion. The goal is to design, simulate, and launch
            a small solid-fuel rocket with parachute recovery and flight data logging.
          </p>

          <div className="space-y-4 mb-8 text-left sm:text-left">
            <h2 className="font-tech font-semibold text-lg sm:text-xl mb-2">
              Through this project, we will:
            </h2>
            <ul className="list-disc list-inside font-mono text-sm sm:text-base text-cosmic-white/80 space-y-1">
              <li><strong>Design and build a single-stage solid-fuel rocket.</strong></li>
              <li><strong>Simulate flight dynamics to ensure stability and performance.</strong></li>
              <li><strong>Launch the rocket safely and record altitude and acceleration data.</strong></li>
              <li><strong>Recover the rocket using a parachute to analyze flight results.</strong></li>
              <li><strong>Gain hands-on experience in propulsion, aerodynamics, and data logging.</strong></li>
            </ul>
          </div>

          {/* Back to Projects Button */}
          <button
            className="glow-button px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            onClick={scrollToProjects}
          >
            Back to Projects
          </button>
        </motion.div>

        {/* Right column (Image) */}
        <motion.img
          src="/frtt.png"
          alt="Rocket"
          className="w-full sm:w-80 lg:w-[650px] object-contain mx-auto lg:mx-0"
          style={{ position: "relative", right: 0, bottom: 0 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};
