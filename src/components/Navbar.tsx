import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Eye, Menu, X, FlaskConical, Compass, Brain } from 'lucide-react';
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

  // Rapid Telemetry Counter ticking up from 0 to 10,000,000,000%
  const [telemetry, setTelemetry] = useState(0);

  useEffect(() => {
    const target = 10000000000;
    const duration = 2200; // ms
    const startTime = performance.now();

    const animateTelemetry = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      setTelemetry(current);

      if (progress < 1) {
        requestAnimationFrame(animateTelemetry);
      }
    };

    const frameId = requestAnimationFrame(animateTelemetry);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const navLinks = [
    { label: '000: Base Camp', href: '#home', id: 'home', icon: null },
    {
      label: '001: Raw Materials',
      href: '#skills',
      id: 'skills',
      icon: <FlaskConical className="w-3.5 h-3.5 text-kos-mint inline mr-1" />,
      chibiRole: 'SENKU',
    },
    {
      label: '002: Inventions',
      href: '#projects',
      id: 'projects',
      icon: <Compass className="w-3.5 h-3.5 text-kos-terra inline mr-1" />,
      chibiRole: 'RYUSUI',
    },
    {
      label: '003: Comms & Logs',
      href: '#journey',
      id: 'journey',
      icon: <Brain className="w-3.5 h-3.5 text-kos-linen inline mr-1" />,
      chibiRole: 'GEN',
    },
    { label: '004: Connect', href: '#contact', id: 'contact', icon: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'skills', 'projects', 'journey', 'contact'].map(id =>
        document.getElementById(id)
      );
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
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
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none">
      {/* Top Telemetry Hardware Ticker Bar */}
      <div className="w-full bg-kos-navy-deep/95 border-b border-kos-clay-dark/40 py-1 px-4 pointer-events-auto flex items-center justify-between text-[10px] font-mono">
        <div className="flex items-center gap-3 overflow-hidden text-kos-linen-muted">
          <span className="flex items-center gap-1.5 text-kos-mint font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-kos-mint animate-pulse" />
            <span>KOS AI LAB // NST</span>
          </span>
          <span className="hidden sm:inline text-kos-clay-light">|</span>
          <span className="hidden md:inline">NODE: TULIKA_GUPTA_01</span>
          <span className="hidden md:inline text-kos-clay-light">|</span>
          <span className="hidden lg:inline text-kos-linen">FORMULA: HNO₃ + C₂H₅OH</span>
        </div>

        {/* Telemetry Counter Display */}
        <div className="flex items-center gap-2">
          <span className="text-kos-clay-light uppercase tracking-wider">LOGIC LEVEL:</span>
          <span className="text-kos-mint font-bold tracking-wider">
            {telemetry.toLocaleString()}%
          </span>
        </div>
      </div>

      {/* Main Floating Lab Navigation */}
      <div className="w-full max-w-6xl px-4 pt-3">
        <nav
          className={`pointer-events-auto transition-all duration-300 w-full rounded-xl flex items-center justify-between px-4 sm:px-6 py-2.5 border ${
            isScrolled
              ? 'bg-kos-navy-dark/90 backdrop-blur-xl border-kos-mint/30 shadow-mint-sm'
              : 'bg-kos-navy-dark/70 backdrop-blur-md border-kos-clay-dark/50'
          }`}
        >
          {/* Brand Emblem */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2.5 text-kos-parchment hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-kos-navy-deep border border-kos-mint/40 flex items-center justify-center shadow-mint-sm group-hover:scale-105 transition-transform text-kos-mint font-mono font-bold text-xs">
              🧪
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wide text-kos-parchment group-hover:text-kos-mint transition-colors">
                Tulika Gupta
              </span>
              <span className="font-mono text-[10px] text-kos-mint tracking-tight -mt-0.5">
                NST · B.Tech AI & ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Micro Chibi Roles */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all flex items-center gap-1 ${
                    isActive
                      ? 'text-kos-navy-dark bg-kos-mint font-bold shadow-mint-sm'
                      : 'text-kos-linen hover:text-kos-parchment hover:bg-kos-navy-surface'
                  }`}
                >
                  {!isActive && link.icon}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Utility Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              type="button"
              title={isAudioPlaying ? 'Mute ambient soundwave' : 'Play ambient laboratory soundscape'}
              className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-all border font-mono ${
                isAudioPlaying
                  ? 'bg-kos-mint/20 text-kos-mint border-kos-mint shadow-mint-sm animate-pulse'
                  : 'bg-kos-navy-deep text-kos-linen-muted border-kos-clay-dark/60 hover:border-kos-mint/40 hover:text-kos-mint'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-kos-mint" />
                  <span className="hidden sm:inline text-[10px]">WAVE: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[10px]">WAVE: OFF</span>
                </>
              )}
            </button>

            {/* Reduced Motion Toggle */}
            <button
              onClick={onToggleReducedMotion}
              type="button"
              title={reducedMotion ? 'Enable animations' : 'Reduce animations'}
              className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-all border font-mono ${
                reducedMotion
                  ? 'bg-kos-terra/20 text-kos-terra border-kos-terra'
                  : 'bg-kos-navy-deep text-kos-linen-muted border-kos-clay-dark/60 hover:border-kos-mint/40 hover:text-kos-mint'
              }`}
            >
              {reducedMotion ? (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[10px]">MOTION: OFF</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-kos-mint" />
                  <span className="hidden sm:inline text-[10px]">MOTION: ON</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-kos-navy-deep text-kos-linen border border-kos-clay-dark/60 hover:text-kos-mint"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pointer-events-auto mt-2 bg-kos-navy-dark/95 backdrop-blur-2xl border border-kos-mint/30 rounded-xl p-4 shadow-mint-md flex flex-col gap-2 z-50 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-2 rounded-lg text-xs font-mono transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-kos-mint text-kos-navy-dark font-bold'
                    : 'text-kos-linen hover:bg-kos-navy-surface hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
                {link.chibiRole && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-kos-navy-deep text-kos-mint border border-kos-mint/30">
                    {link.chibiRole}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
