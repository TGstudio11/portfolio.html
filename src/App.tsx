import { useState, useEffect } from 'react';
import { NeuralNetworkCanvas } from './components/NeuralNetworkCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BeyondSection } from './components/BeyondSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check user OS preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  return (
    <div className="relative min-h-screen bg-kos-navy text-kos-parchment petrification-bg overflow-hidden font-sans selection:bg-kos-mint selection:text-kos-navy-dark">
      {/* Interactive Neural Network Constellation & Petrification Dust Canvas */}
      <NeuralNetworkCanvas reducedMotion={reducedMotion} />

      {/* Trailing Electric Mint Cursor on Desktop */}
      <CustomCursor reducedMotion={reducedMotion} />

      {/* Floating Laboratory Navigation & Telemetry Bar */}
      <Navbar
        reducedMotion={reducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />

      {/* Main Scientific Stream */}
      <main className="relative z-10 flex flex-col">
        {/* 000: Base Camp // Hero Centerpiece */}
        <HeroSection reducedMotion={reducedMotion} />

        {/* 000: Base Camp // Conversational Storytelling & Philosophy */}
        <AboutSection />

        {/* 001: Raw Materials // Skills & Math Foundations (Chibi Senku) */}
        <SkillsSection />

        {/* 002: Inventions & Crafting // AI Schematics (Chibi Ryusui) */}
        <ProjectsSection />

        {/* 003: Telecommunication Logs & Interactive Terminal (Chibi Gen) */}
        <ExperienceSection />

        {/* 005: Human Side of Science // Beyond the Screen */}
        <BeyondSection />

        {/* 004: Establish Comms // Radio Tower & Transmission */}
        <ContactSection />
      </main>

      {/* Atmospheric Horizon & Trio Council Footer */}
      <Footer reducedMotion={reducedMotion} />
    </div>
  );
}

export default App;
