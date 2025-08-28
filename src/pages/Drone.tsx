import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const Drone = () => {
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
          className="max-w-xl text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-tech font-bold mb-6">
            DRONE ASSEMBLY & CONTROL
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-mono text-cosmic-white/80 mb-8">
            Our Drone Project focuses on designing, assembling, and flying a quadcopter with GPS stabilization and payload capabilities. It gives students hands-on experience in UAV systems and mechatronics.
          </p>

          <div className="space-y-4 mb-8 text-left sm:text-left">
            <h2 className="font-tech font-semibold text-lg sm:text-xl mb-2">Through this project, we will:</h2>
            <ul className="list-disc list-inside font-mono text-sm sm:text-base text-cosmic-white/80 space-y-1">
              <li><strong>Design and assemble a quadcopter drone with GPS and stabilization systems.</strong></li>
              <li><strong>Integrate brushless motors, ESCs, and flight controllers for precise control.</strong></li>
              <li><strong>Test payload carrying capacity and flight endurance.</strong></li>
              <li><strong>Learn embedded systems programming and UAV electronics.</strong></li>
              <li><strong>Gain practical experience in autonomous flight and flight safety.</strong></li>
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
          src="/fty.png"
          alt="Drone"
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
