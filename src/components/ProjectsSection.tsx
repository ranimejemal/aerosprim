import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "WIND TUNNEL",
    category: "AERODYNAMICS / EXPERIMENTAL SETUP",
    description: "Build a small-scale subsonic wind tunnel with a transparent test section to analyze airflow around simple airfoils and models. Includes fan, flow straighteners, and measurement sensors.",
    status: "FOUNDATION PROJECT",
    specs: {
      "PROPULSION": "Axial fan",
      "RANGE": "Test section 30–40 cm models",
      "MISSION": "Measure lift/drag, validate aero designs"
    },
    route: "/windtunnel" // <-- route for this project
  },
  {
    id: 2,
    title: "DRONE ASSEMBLY & CONTROL",
    category: "UAV / MECHATRONICS",
    description: "Design, assemble, and fly a quadcopter with GPS stabilization and payload capability.",
    status: "APPLIED MECHATRONICS PROJECT",
    specs: {
      "PROPULSION": "4× brushless motors + ESCs",
      "RANGE": "~100 m altitude, 15–20 min flight",
      "MISSION": "Stable flight, GPS hold, CanSat carrier"
    },
    route: "/drone"
  },
  {
    id: 3,
    title: "SOLID-FUEL MODEL ROCKET",
    category: "PROPULSION / FLIGHT DYNAMICS",
    description: "Design, simulate, and launch a small solid-fuel rocket with parachute recovery and flight data logging.",
    status: "ADVANCED PRACTICAL PROJECT",
    specs: {
      "PROPULSION": "Single-stage solid-fuel engine",
      "RANGE": "200–400 m altitude, ~20 sec flight",
      "MISSION": "Test stability, log altitude/acceleration"
    },
    route: "/rocket"
  },
  {
    id: 4,
    title: "CANSAT MISSION AEROSPRIM",
    category: "SPACE SYSTEM / EMBEDDED SYSTEM", 
    description: "Build a soda-can-sized satellite (CanSat) with sensors and telemetry, deployed from altitude via balloon or drone.",
    status: "CAPSTONE AEROSPRIM PROJECT",
    specs: {
      "PROPULSION": "None (parachute descent, balloon/drone deploy)",
      "RANGE": "200–500 m drop, 2–5 min descent",
      "MISSION": "Collect & transmit data, safe recovery"
    },
    route: "/cansat"
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="aerospace-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section font-tech font-bold mb-6 glitch-text" data-text="ACTIVE PROJECTS">
            ACTIVE PROJECTS
          </h2>
          <p className="text-lg font-mono text-cosmic-white/80 max-w-2xl mx-auto">
            Cutting-edge aerospace technologies currently in development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} to={project.route}>
              <motion.div
                className="project-card group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-tech font-bold text-xl mb-2">{project.title}</h3>
                    <div className="text-sm font-mono text-cosmic-white/60">{project.category}</div>
                  </div>
                  <div className="tech-border px-3 py-1">
                    <span className="text-xs font-mono">{project.status}</span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="font-mono text-sm leading-relaxed mb-6 text-cosmic-white/80">
                  {project.description}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-3">
                  <h4 className="font-tech font-semibold text-sm">SPECIFICATIONS</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(project.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1 border-b border-cosmic-white/10">
                        <span className="text-xs font-mono text-cosmic-white/60">{key}</span>
                        <span className="text-xs font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 tech-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-cosmic-white/5 to-transparent" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/join">
            <button className="glow-button">
              JOIN US
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
