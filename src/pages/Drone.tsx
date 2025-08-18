import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const Drone = () => {
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
          <h1 className="text-6xl font-tech font-bold mb-6">DRONE ASSEMBLY & CONTROL</h1>
          <p className="text-2sm font-mono text-cosmic-white/80 mb-8">
            Our Drone Project focuses on designing, assembling, and flying a quadcopter with GPS stabilization and payload capabilities. It gives students hands-on experience in UAV systems and mechatronics.
          </p>

          <div className="text-left space-y-4 mb-8">
            <h2 className="font-tech font-semibold text-xl mb-2">Through this project, we will:</h2>
            <ul className="list-disc list-inside font-mono text-cosmic-white/80">
              <li><strong>Design and assemble a quadcopter drone with GPS and stabilization systems.</strong></li>
              <li><strong>Integrate brushless motors, ESCs, and flight controllers for precise control.</strong></li>
              <li><strong>Test payload carrying capacity and flight endurance.</strong></li>
              <li><strong>Learn embedded systems programming and UAV electronics.</strong></li>
              <li><strong>Gain practical experience in autonomous flight and flight safety.</strong></li>
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
          src="/fty.png" 
          alt="Drone"
          className="w-[650px] object-contain"
          style={{ position: "absolute", right: 50, bottom: 200 }} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};
