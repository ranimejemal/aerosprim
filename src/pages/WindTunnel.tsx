import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const WindTunnel = () => {
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
          <h1 className="text-6xl font-tech font-bold mb-6">WIND TUNNEL</h1>
          <p className="text-2sm font-mono text-cosmic-white/80 mb-8">
            Our Wind Tunnel Project is designed to help students and enthusiasts explore the fascinating world of aerodynamics. The goal of this project is to build a functional wind tunnel that will allow us to study airflow, test models, and better understand the principles of flight.
          </p>

          <div className="text-left space-y-4 mb-8">
            <h2 className="font-tech font-semibold text-xl mb-2">Through this project, we will:</h2>
            <ul className="list-disc list-inside font-mono text-cosmic-white/80">
              <li><strong>Design and construct a wind tunnel using practical engineering methods.</strong></li>
              <li><strong>Measure airflow and study how objects behave when exposed to different speeds of wind.</strong></li>
              <li><strong>Experiment with aircraft models, rockets, and drones to understand lift, drag, and stability.</strong></li>
              <li><strong>Learn hands-on skills in fluid mechanics, electronics (sensors, fans, controllers), and data collection.</strong></li>
              <li><strong>Prepare for larger aerospace projects by mastering the basics of aerodynamic testing.</strong></li>
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
          src="/Instagram post - 1 (2).png"
          alt="Wind Tunnel"
          className="w-[650px] object-contain"
          style={{ position: "absolute", right: 0, bottom: 150 }} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};
