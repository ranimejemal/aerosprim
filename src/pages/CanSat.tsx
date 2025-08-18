import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const CanSat = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    // Navigate to home with hash
    navigate("/#projects");
  };

  return (
    <section className="relative min-h-screen py-32 px-10 bg-black z-10">
      <div className="flex items-start justify-between max-w-7xl mx-auto">
        <Navbar />

        {/* Left column (Text) */}
        <motion.div
          className="max-w-xl text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-tech font-bold mb-6">CANSAT MISSION</h1>
          <p className="text-2sm font-mono text-cosmic-white/80 mb-8">
            The CanSat Project challenges students to build a soda-can-sized satellite with sensors and telemetry. The CanSat is deployed from altitude via balloon or drone to collect and transmit data during its descent.
          </p>

          <div className="text-left space-y-4 mb-8">
            <h2 className="font-tech font-semibold text-xl mb-2">Through this project, we will:</h2>
            <ul className="list-disc list-inside font-mono text-cosmic-white/80">
              <li><strong>Design and build a miniature satellite (CanSat) with embedded sensors.</strong></li>
              <li><strong>Deploy the CanSat safely from altitude using a balloon or drone.</strong></li>
              <li><strong>Collect environmental or mission-specific data during descent.</strong></li>
              <li><strong>Transmit telemetry to a ground station and ensure safe recovery.</strong></li>
              <li><strong>Gain hands-on experience in embedded systems, telemetry, and aerospace engineering.</strong></li>
            </ul>
          </div>

          {/* Back to Projects Button */}
          <button
            className="glow-button mt-6"
            onClick={scrollToProjects}
          >
            Back to Projects
          </button>
        </motion.div>

        {/* Right column (Image at top-right) */}
        <motion.img
          src="/CANSAT.png" // <-- replace with your actual CanSat image
          alt="CanSat"
          className="w-[600px] object-contain"
          style={{ position: "absolute", right: 100, bottom: 100 }} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};
