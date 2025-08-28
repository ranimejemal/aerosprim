import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const CanSat = () => {
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
          className="max-w-xl text-left lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-tech font-bold mb-6">
            CANSAT MISSION
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-mono text-cosmic-white/80 mb-8">
            The CanSat Project challenges students to build a soda-can-sized satellite with sensors and telemetry. The CanSat is deployed from altitude via balloon or drone to collect and transmit data during its descent.
          </p>

          <div className="space-y-4 mb-8">
            <h2 className="font-tech font-semibold text-lg sm:text-xl mb-2">Through this project, we will:</h2>
            <ul className="list-disc list-inside font-mono text-sm sm:text-base text-cosmic-white/80 space-y-1">
              <li><strong>Design and build a miniature satellite (CanSat) with embedded sensors.</strong></li>
              <li><strong>Deploy the CanSat safely from altitude using a balloon or drone.</strong></li>
              <li><strong>Collect environmental or mission-specific data during descent.</strong></li>
              <li><strong>Transmit telemetry to a ground station and ensure safe recovery.</strong></li>
              <li><strong>Gain hands-on experience in embedded systems, telemetry, and aerospace engineering.</strong></li>
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
          src="/CANSAT.png"
          alt="CanSat"
          className="w-full sm:w-96 lg:w-[600px] object-contain"
          style={{ position: "relative", right: 0, bottom: 0 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};
