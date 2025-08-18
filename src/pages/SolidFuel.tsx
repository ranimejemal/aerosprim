import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const SolidFuel = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    navigate("/#projects");
  };

  return (
    <section className="relative min-h-screen py-32 px-10 bg-black z-10">
      <Navbar />

      <div className="flex items-start justify-between max-w-7xl mx-auto">
        {/* Left column (Text) */}
        <motion.div
          className="max-w-xl text-left relative z-20"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-tech font-bold mb-6">
            SOLID-FUEL MODEL ROCKET
          </h1>
          <p className="text-2sm font-mono text-cosmic-white/80 mb-8">
            Our Solid-Fuel Model Rocket Project is designed to help students understand
            flight dynamics and propulsion. The goal is to design, simulate, and launch
            a small solid-fuel rocket with parachute recovery and flight data logging.
          </p>

          <div className="text-left space-y-4 mb-8">
            <h2 className="font-tech font-semibold text-xl mb-2">
              Through this project, we will:
            </h2>
            <ul className="list-disc list-inside font-mono text-cosmic-white/80">
              <li><strong>Design and build a single-stage solid-fuel rocket.</strong></li>
              <li><strong>Simulate flight dynamics to ensure stability and performance.</strong></li>
              <li><strong>Launch the rocket safely and record altitude and acceleration data.</strong></li>
              <li><strong>Recover the rocket using a parachute to analyze flight results.</strong></li>
              <li><strong>Gain hands-on experience in propulsion, aerodynamics, and data logging.</strong></li>
            </ul>
          </div>

          <button
            className="glow-button mt-6"
            onClick={scrollToProjects}
          >
            Back to Projects
          </button>
        </motion.div>

 <motion.img
          src="/frtt.png" 
          alt="Rocket"
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
