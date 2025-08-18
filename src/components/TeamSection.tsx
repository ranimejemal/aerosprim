import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: "Ranime Jemal",
    role: "President",
    
    image: "/raniiimejm.jpeg",
  },
  {
    name: "unknonw",
    role: "Vice President",
    
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "unknown",
    role: "Secritary",
    
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "unknown",
    role: "Treasurer",
    
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "unknown",
    role: "Media Manager",
    
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "unknown",
    role: "Sponsoring Manager",
    
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "unknown",
    role: "Training Manager",
    
    image: "/Sans titre (Présentation) (1).png",
  },
   
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="our-team" ref={ref} className="py-20 px-6 bg-space-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-white mb-6">
            OUR TEAM
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Meet the brilliant minds behind AeroSprim's groundbreaking aerospace innovations
          </p>
        </motion.div>

        {/* First group of members */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
  {teamMembers.slice(0, teamMembers.length - 3).map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-gradient-to-b from-tech-gray/20 to-transparent p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group w-56"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
      </div>
      <h3 className="text-lg font-bold text-cosmic-white mb-1">
        {member.name}
      </h3>
      <p className="text-primary font-medium mb-1">
        {member.role}
      </p>
     
    </motion.div>
  ))}
</div>

{/* Last row (3 members centered like pyramid base) */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center mt-8">
  {teamMembers.slice(-3).map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: (teamMembers.length - 3 + index) * 0.2 }}
      className="bg-gradient-to-b from-tech-gray/20 to-transparent p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group w-56"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
      </div>
      <h3 className="text-lg font-bold text-cosmic-white mb-1">
        {member.name}
      </h3>
      <p className="text-primary font-medium mb-1">
        {member.role}
      </p>
      
    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
};