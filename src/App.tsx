import { useState, useEffect } from 'react';
import { CanvasStars } from './components/CanvasStars';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
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
    <div className="relative min-h-screen bg-dream-950 text-lavender-light overflow-hidden">
      {/* Interactive Dreamy Starfield & Nebula Particle Canvas */}
      <CanvasStars reducedMotion={reducedMotion} />

      {/* Trailing Custom Cursor on Desktop */}
      <CustomCursor reducedMotion={reducedMotion} />

      {/* Floating Glass Navigation */}
      <Navbar
        reducedMotion={reducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />

      {/* Main Experience Stream */}
      <main className="relative z-10 flex flex-col">
        {/* 01: Hero Centerpiece */}
        <HeroSection reducedMotion={reducedMotion} />

        {/* 02: Conversational Storytelling & About */}
        <AboutSection />

        {/* 03: Interactive Projects Showcase */}
        <ProjectsSection />

        {/* 04: Experience & Learning Journey Timeline */}
        <ExperienceSection />

        {/* 05: Skills & Technologies Matrix */}
        <SkillsSection />

        {/* 06: Beyond The Screen Personal World */}
        <BeyondSection />

        {/* 07: Contact & Interactive Transmit Form */}
        <ContactSection />
      </main>

      {/* Footer & Back to top */}
      <Footer reducedMotion={reducedMotion} />
    </div>
  );
}

export default App;

