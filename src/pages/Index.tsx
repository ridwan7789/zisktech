import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { DeveloperSection } from '@/components/DeveloperSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { TokenomicsSection } from '@/components/TokenomicsSection';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ArchitectureSection />
        <UseCasesSection />
        <DeveloperSection />
        <RoadmapSection />
        <TokenomicsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
