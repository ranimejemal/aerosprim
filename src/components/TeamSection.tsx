import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Define the team data (unchanged)
const teamMembers = [
  {
    name: "Ranime Jemal",
    role: "Founder & President",
    image: "/Gemini_Generated_Image_ewz31cewz31cewz3.png", 
  },
  {
    name: "Sarra Fekih",
    role: "Vice President",
    image: "/Benefits of Retinol. - 2025-11-01T072112.966.png",
  },
  {
    name: "Nour Omzine Bayoudh",
    role: "Secritary",
    image: "/Benefits of Retinol. - 2025-11-01T072700.110.png",
  },
  {
    name: "unknown",
    role: "Treasurer",
    image: "/Sans titre (Présentation) (1).png",
  },
  {
    name: "Sarra Ben Rayana",
    role: "Media Manager",
    image: "/Benefits of Retinol. - 2025-11-01T074517.255.png",
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

// Component to render a single team member card
const MemberCard = ({ member, index, isInView, isPresident = false }) => {
  // Key Change 1: Image Heights
  // Small sizes (mobile) applied by default, then reset for 'sm' and larger screens.
  const imageSizeClasses = isPresident 
    ? 'h-40 sm:h-56 lg:h-64' // Mobile: h-40, Tablet: h-56, Desktop: h-64
    : 'h-32 sm:h-44 lg:h-48'; // Mobile: h-32, Tablet: h-44, Desktop: h-48

  // Key Change 2: Card Widths
  // Tight max-width on mobile, then reset to larger standard widths for 'sm' and up.
  const cardWidthClasses = isPresident 
    ? 'w-full max-w-[14rem] sm:max-w-sm mx-auto shadow-2xl shadow-primary/30 transform hover:scale-[1.02]' 
    : 'w-full max-w-[12rem] sm:max-w-xs'; 
    
  // Key Change 3: Text Sizes
  // Smaller text on mobile, reset for 'sm' and up.
  const nameTextSize = 'text-base sm:text-lg lg:text-xl';
  const roleTextSize = isPresident 
    ? 'text-lg sm:text-xl lg:text-2xl text-white' 
    : 'text-sm sm:text-base lg:text-primary'; 
    
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.15 }} 
      className={`
        bg-gradient-to-b from-tech-gray/20 to-transparent p-3 sm:p-4 rounded-lg 
        border border-primary/20 hover:border-primary/40 transition-all duration-300 group
        ${cardWidthClasses}
      `}
    >
      <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          // Dynamic height classes applied here
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg ${imageSizeClasses}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
      </div>
      <h3 className={`${nameTextSize} font-bold text-cosmic-white mb-0.5 text-center`}>
        {member.name}
      </h3>
      <p className={`font-medium mb-0.5 text-center ${roleTextSize}`}>
        {member.role}
      </p>
    </motion.div>
  );
};


export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const president = teamMembers[0];
  const executives = teamMembers.slice(1, 5); 
  const managers = teamMembers.slice(5); 

  return (
    <section id="our-team" ref={ref} className="py-10 sm:py-20 px-4 sm:px-6 bg-space-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (smaller text and margins on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cosmic-white mb-4 sm:mb-6 tracking-wider">
            OUR LEADERSHIP
          </h2>
          <p className="text-base sm:text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Meet the brilliant minds behind AeroSprim's groundbreaking vision and operational excellence.
          </p>
        </motion.div>

        {/* 1. Centered President */}
        <div className="mb-10 sm:mb-16">
            <div className="flex justify-center">
                <MemberCard 
                    member={president} 
                    index={0} 
                    isInView={isInView} 
                    isPresident={true}
                />
            </div>
        </div>

        {/* 2. Organized Executive Members: Tighter grid on mobile */}
        {/* Mobile: grid-cols-2, Tablet: sm:grid-cols-4, Desktop: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 place-items-center mb-10 sm:mb-20">
          {executives.map((member, index) => (
            <MemberCard 
                member={member} 
                index={index + 1} 
                isInView={isInView} 
                isPresident={false}
            />
          ))}
        </div>

        {/* 3. Centered Sponsoring and Training Managers */}
        <div className="flex justify-center">
            {/* grid-cols-2 from mobile, max-w-[28rem] to keep them close on mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-[28rem] sm:max-w-4xl mx-auto">
                {managers.map((member, index) => (
                    <MemberCard 
                        member={member} 
                        index={executives.length + index + 1} 
                        isInView={isInView} 
                        isPresident={false}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};