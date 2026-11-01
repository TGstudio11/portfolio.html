import React from 'react';
import { ArrowDown, Sparkles, Terminal, FlaskConical, ExternalLink, Cpu, Binary } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  reducedMotion?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ reducedMotion = false }) => {
  const { personal } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Petrification Atmosphere & Mint Glow Nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[650px] lg:h-[850px] bg-gradient-to-tr from-kos-mint/10 via-kos-mint-dark/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-kos-terra/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Top Editorial Eyebrow */}
      <div className="text-center z-10 space-y-2 max-w-3xl mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kos-navy-dark/90 border border-kos-mint/30 backdrop-blur-md text-kos-mint text-xs font-mono tracking-widest uppercase shadow-mint-sm">
          <FlaskConical className="w-3.5 h-3.5 text-kos-mint animate-pulse" />
          <span>KINGDOM OF SCIENCE // ADVANCED AI DIVISION</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-kos-parchment mt-2">
          <span className="bg-gradient-to-b from-kos-parchment via-kos-linen to-kos-linen-muted bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base font-mono text-kos-mint">
          <span className="font-semibold text-kos-mint">{personal.title}</span>
          <span className="hidden sm:inline text-kos-clay-light">✦</span>
          <span className="text-kos-linen-muted">{personal.college}</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* HERO CENTERPIECE: LAB AVATAR IN HIGH-TECH STONE FRAME          */}
      {/* ============================================================== */}
      <div className="relative my-8 sm:my-10 flex items-center justify-center z-10">
        {/* Outer Orbit Dashed Calibration Ring */}
        <div
          className={`absolute w-72 sm:w-96 lg:w-[440px] h-72 sm:h-96 lg:h-[440px] rounded-full border border-dashed border-kos-mint/25 pointer-events-none ${
            reducedMotion ? '' : 'animate-orbit'
          }`}
        />

        {/* Outer Petrification Horizon Ring */}
        <div
          className="absolute w-80 sm:w-[420px] lg:w-[500px] h-80 sm:h-[420px] lg:h-[500px] rounded-full border border-kos-clay/20 pointer-events-none"
        />

        {/* Ambient Backlight Halo behind Avatar */}
        <div className="absolute inset-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-gradient-to-b from-kos-mint/25 via-kos-mint-dark/15 to-transparent blur-3xl transform scale-110 pointer-events-none -z-10" />

        {/* Main Avatar Container */}
        <div
          className={`relative group rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-kos-mint/40 via-kos-clay-dark/50 to-kos-navy-dark shadow-mint-md border border-kos-mint/30 backdrop-blur-md ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
        >
          {/* Avatar Inner Frame */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-kos-navy-dark border border-kos-clay-dark shadow-inner">
            <img
              src={personal.avatarUrl}
              alt="Tulika Gupta — Kingdom of Science AI Lab"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle scientific grid overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-kos-navy-deep/80 via-transparent to-transparent pointer-events-none" />

            {/* Scientific lab reticle corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-kos-mint/80 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-kos-mint/80 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-kos-mint/80 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-kos-mint/80 pointer-events-none" />
          </div>

          {/* Quick status pill anchored at bottom of avatar */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-kos-navy-deep border border-kos-mint/40 backdrop-blur-md shadow-mint-sm flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-kos-mint animate-pulse" />
            <span className="font-mono text-[11px] text-kos-mint font-semibold tracking-tight">
              10 BILLION % OPERATIONAL
            </span>
          </div>
        </div>

        {/* ========================================================== */}
        {/* FLOATING LAB TELEMETRY SATELLITE PILLS                     */}
        {/* ========================================================== */}

        {/* Satellite 1: Top Left - AI & ML Logic Core */}
        <div
          className={`hidden sm:flex absolute -left-16 sm:-left-32 lg:-left-44 top-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-kos-navy-dark/90 border border-kos-mint/30 backdrop-blur-md shadow-lab-card text-xs font-mono text-kos-parchment ${
            reducedMotion ? '' : 'animate-float-medium'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-kos-navy-surface flex items-center justify-center text-kos-mint">
            <Binary className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-kos-mint uppercase tracking-wider">Logic Core</div>
            <div className="font-semibold text-kos-parchment">Neural AI & ML</div>
          </div>
        </div>

        {/* Satellite 2: Top Right - NST Status */}
        <div
          className={`hidden sm:flex absolute -right-16 sm:-right-32 lg:-right-44 top-10 items-center gap-2 px-3.5 py-2 rounded-xl bg-kos-navy-dark/90 border border-kos-terra/30 backdrop-blur-md shadow-lab-card text-xs font-mono text-kos-parchment ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-kos-navy-surface flex items-center justify-center text-kos-terra">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-kos-terra uppercase tracking-wider">Institute</div>
            <div className="font-semibold text-kos-parchment">Newton School (NST)</div>
          </div>
        </div>

        {/* Satellite 3: Bottom Left - C++ & Math */}
        <div
          className={`hidden sm:flex absolute -left-12 sm:-left-24 lg:-left-36 bottom-8 items-center gap-2 px-3.5 py-2 rounded-xl bg-kos-navy-dark/90 border border-kos-clay/40 backdrop-blur-md shadow-lab-card text-xs font-mono text-kos-parchment ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-kos-navy-surface flex items-center justify-center text-kos-linen">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-kos-clay-light uppercase tracking-wider">Craft</div>
            <div className="font-semibold text-kos-parchment">C++ & PyTorch</div>
          </div>
        </div>

        {/* Satellite 4: Bottom Right - Tenacity */}
        <div
          className={`hidden sm:flex absolute -right-12 sm:-right-24 lg:-right-36 bottom-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-kos-navy-dark/90 border border-kos-mint/30 backdrop-blur-md shadow-lab-card text-xs font-mono text-kos-parchment ${
            reducedMotion ? '' : 'animate-float-medium'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-kos-navy-surface flex items-center justify-center text-kos-mint">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-kos-mint uppercase tracking-wider">Mindset</div>
            <div className="font-semibold text-kos-parchment">10 Billion % Logic</div>
          </div>
        </div>
      </div>

      {/* Editorial Quote & Custom Tagline */}
      <div className="text-center z-10 max-w-2xl space-y-4">
        <blockquote className="font-sans text-base sm:text-lg text-kos-linen italic font-normal tracking-wide">
          “{personal.tagline}”
        </blockquote>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kos-navy-deep border border-kos-mint/20 backdrop-blur-sm text-xs text-kos-mint font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-kos-mint" />
          <span>{personal.customTagline}</span>
        </div>

        {/* Action Buttons: Terracotta Empire Orange & Senku Mint */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-5 py-2.5 rounded-xl bg-kos-terra hover:bg-kos-terra-dark text-white text-xs sm:text-sm font-semibold tracking-wide shadow-terra-sm hover:shadow-terra-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-mono"
          >
            <span>[ INSPECT INVENTIONS ]</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('skills')}
            className="px-5 py-2.5 rounded-xl bg-kos-navy-dark hover:bg-kos-navy-surface text-kos-mint border border-kos-mint/40 text-xs sm:text-sm font-semibold tracking-wide transition-all hover:border-kos-mint font-mono"
          >
            [ RAW MATERIALS ]
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="z-10 mt-6 flex flex-col items-center">
        <button
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center gap-1.5 text-kos-linen-muted hover:text-kos-mint transition-colors focus:outline-none"
          aria-label="Scroll to explore lab"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to descend into lab</span>
          <div className="w-5 h-8 rounded-full border border-kos-mint/30 flex items-start justify-center p-1 group-hover:border-kos-mint transition-colors">
            <div className={`w-1 h-2 rounded-full bg-kos-mint ${reducedMotion ? '' : 'animate-bounce'}`} />
          </div>
          <ArrowDown className="w-3.5 h-3.5 -mt-0.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
