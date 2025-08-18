
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { TeamSection } from '../components/TeamSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { MissionSection } from '../components/MissionSection';
import { JoinSection } from '../components/JoinSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-black text-cosmic-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <ProjectsSection />
      <MissionSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
