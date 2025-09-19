import { motion } from "framer-motion"; 
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom"; 

export const WindTunnel = () => {
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
            Formations 
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-mono text-cosmic-white/80 mb-8">
            Our club provides technical training to help students build a strong 
            foundation in programming, electronics, and aerospace design. 
            Each formation prepares members for real-world aerospace challenges.
          </p>

          <div className="space-y-4 mb-8 text-left sm:text-left">
            <h2 className="font-tech font-semibold text-lg sm:text-xl mb-2">
              This year, we will learn:
            </h2>
            <ul className="list-disc list-inside font-mono text-sm sm:text-base text-cosmic-white/80 space-y-1">
              <li><strong>Python:</strong> From basics to simulations and automation.</li>
              <li><strong>Arduino:</strong> Electronics, sensors, and control systems.</li>
              <li><strong>SolidWorks:</strong> 3D modeling for aerospace structures.</li>
              <li><strong>Mini Competition:</strong> Apply knowledge in a Python challenge with certificates 🎓.</li>
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
          src="/Benefits of Retinol. - 2025-09-19T100757.280.png"
          alt="Formations"
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