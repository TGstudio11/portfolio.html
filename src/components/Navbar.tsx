import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Eye, Menu, X } from 'lucide-react';
import { dreamAudio } from '../utils/audioEngine';

interface NavbarProps {
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Beyond', href: '#beyond', id: 'beyond' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const state = dreamAudio.toggle();
    setIsAudioPlaying(state);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 max-w-5xl w-full rounded-2xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border ${
          isScrolled
            ? 'bg-dream-950/80 backdrop-blur-xl border-lavender-muted/20 shadow-glass shadow-dream-950/80'
            : 'bg-dream-900/50 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 text-lavender-light hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-dream-600 via-dream-500 to-neon-violet flex items-center justify-center shadow-glow-sm group-hover:scale-105 transition-transform">
            <span className="font-heading font-bold text-white text-sm">T</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm tracking-wide text-white group-hover:text-lavender transition-colors">
              Tulika
            </span>
            <span className="font-mono text-[10px] text-lavender-muted tracking-tight -mt-0.5">
              first-year · b.tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-white'
                    : 'text-lavender-muted hover:text-lavender-light hover:bg-dream-800/40'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-dream-400 to-neon-violet rounded-full shadow-glow-sm" />
                )}
              </a>
            );
          })}
        </div>

        {/* Utility Controls (Sound Toggle & Reduced Motion) */}
        <div className="flex items-center gap-2">
          {/* Audio toggle */}
          <button
            onClick={handleAudioToggle}
            type="button"
            title={isAudioPlaying ? 'Mute ambient soundscape' : 'Play ambient dreamy soundscape (synth pad)'}
            className={`relative p-2 rounded-xl text-xs flex items-center gap-1.5 transition-all border ${
              isAudioPlaying
                ? 'bg-dream-600/40 text-lavender-light border-neon-violet/50 shadow-glow-sm animate-pulse-glow'
                : 'bg-dream-850/60 text-lavender-muted border-white/5 hover:border-lavender/30 hover:text-lavender'
            }`}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-lavender" />
                <span className="hidden sm:inline font-mono text-[10px] text-lavender">Sound: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-lavender-muted" />
                <span className="hidden sm:inline font-mono text-[10px]">Sound: OFF</span>
              </>
            )}
          </button>

          {/* Reduced motion toggle */}
          <button
            onClick={onToggleReducedMotion}
            type="button"
            title={reducedMotion ? 'Enable smooth animations' : 'Reduce animations for accessibility'}
            className={`p-2 rounded-xl text-xs flex items-center gap-1.5 transition-all border ${
              reducedMotion
                ? 'bg-dream-600/40 text-lavender-light border-dream-400'
                : 'bg-dream-850/60 text-lavender-muted border-white/5 hover:border-lavender/30 hover:text-lavender'
            }`}
          >
            {reducedMotion ? (
              <>
                <Eye className="w-3.5 h-3.5 text-lavender-muted" />
                <span className="hidden lg:inline font-mono text-[10px]">Motion: Off</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-lavender-muted" />
                <span className="hidden lg:inline font-mono text-[10px]">Motion: On</span>
              </>
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-dream-850/60 text-lavender-muted border border-white/5 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed top-20 left-4 right-4 bg-dream-900/95 backdrop-blur-2xl border border-lavender-muted/20 rounded-2xl p-5 shadow-glow-md flex flex-col gap-2 z-50">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-dream-700/60 text-white font-semibold border border-neon-violet/30'
                  : 'text-lavender-muted hover:bg-dream-800/40 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

