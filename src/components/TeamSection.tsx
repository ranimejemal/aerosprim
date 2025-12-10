import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// TEAM MEMBERS
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
    role: "Secretary",
    image: "/Benefits of Retinol. - 2025-11-01T072700.110.png",
  },
  {
    name: "Abir Ben Tekaya",
    role: "Treasurer",
    image: "/tresurer.png",
  },
  {
    name: "Sarra Ben Rayana",
    role: "Media Manager",
    image: "/Benefits of Retinol. - 2025-11-01T074517.255.png",
  },
  {
    name: "Med Ali Messaoud",
    role: "Sponsoring Manager",
    image: "/sponsor22.png",
  },
  {
    name: "Yahya Lahmar",
    role: "Training Manager",
    image: "/training22.png",
  },

 
  {
    name: "Riyadh Kirdou",
    role: "Sponsoring Manager",
    image: "/sponsmang.png",
  },
];


// CARD COMPONENT
const MemberCard = ({ member, index, isInView, isPresident = false }) => {
  const imageSizeClasses = isPresident
    ? "h-40 sm:h-56 lg:h-64"
    : "h-32 sm:h-44 lg:h-48";

  const cardWidthClasses = isPresident
    ? "w-full max-w-[14rem] sm:max-w-sm mx-auto shadow-2xl shadow-primary/30"
    : "w-full max-w-[12rem] sm:max-w-xs";

  const roleTextSize = isPresident
    ? "text-lg sm:text-xl lg:text-2xl text-white"
    : "text-sm sm:text-base lg:text-primary";

  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`bg-gradient-to-b from-tech-gray/20 to-transparent p-3 sm:p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group ${cardWidthClasses}`}
    >
      <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg ${imageSizeClasses}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black/60 to-transparent" />
      </div>

      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-cosmic-white text-center whitespace-nowrap">
        {member.name}
      </h3>

      <p className={`font-medium text-center ${roleTextSize}`}>
        {member.role}
      </p>
    </motion.div>
  );
};


// MAIN SECTION
export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const president = teamMembers[0];
  const executives = teamMembers.slice(1, 5);
  const managers = teamMembers.slice(5); // sponsor + training + new member

  return (
    <section id="our-team" ref={ref} className="py-10 sm:py-20 px-4 sm:px-6 bg-space-black">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cosmic-white">
            OUR LEADERSHIP
          </h2>

          <p className="text-base sm:text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Meet the brilliant minds behind AeroSprim.
          </p>
        </motion.div>

        {/* PRESIDENT */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <MemberCard member={president} index={0} isInView={isInView} isPresident={true} />
        </div>

        {/* EXECUTIVES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 place-items-center mb-16">
          {executives.map((m, i) => (
            <MemberCard member={m} index={i + 1} isInView={isInView} />
          ))}
        </div>

        {/* MANAGERS + NEW MEMBER */}
        {/* MOBILE → 2 columns, new member centered automatically */}
        {/* DESKTOP → 3 columns straight row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
          {managers.map((member, index) => (
            <MemberCard
              member={member}
              index={executives.length + index + 1}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
