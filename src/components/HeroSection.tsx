import React from 'react';
import { ArrowDown, Sparkles, Terminal, Compass, Heart, ExternalLink } from 'lucide-react';
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
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Dream Atmospheric Glow Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[750px] h-[340px] sm:h-[600px] lg:h-[750px] bg-gradient-to-tr from-dream-600/25 via-dream-400/20 to-neon-violet/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-dream-500/15 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Top Editorial Eyebrow */}
      <div className="text-center z-10 space-y-1 max-w-2xl mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dream-900/60 border border-lavender/20 backdrop-blur-md text-lavender-muted text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-neon-violet animate-pulse" />
          <span>Inside the mind of</span>
        </div>

        <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mt-1 drop-shadow-[0_4px_30px_rgba(168,85,247,0.35)]">
          <span className="bg-gradient-to-b from-white via-lavender-light to-lavender-muted bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        <p className="font-heading text-base sm:text-xl font-semibold text-lavender tracking-wide">
          {personal.title}
        </p>
      </div>

      {/* ============================================================== */}
      {/* HERO CENTERPIECE: STYLIZED DIGITAL AVATAR OF TULIKA            */}
      {/* A girl with long flowing hair and glasses as the focal point   */}
      {/* ============================================================== */}
      <div className="relative my-6 sm:my-8 flex items-center justify-center z-10">
        {/* Outer Orbit Glow Ring 1 */}
        <div
          className={`absolute w-72 sm:w-96 lg:w-[430px] h-72 sm:h-96 lg:h-[430px] rounded-full border border-dashed border-lavender-muted/25 pointer-events-none ${
            reducedMotion ? '' : 'animate-orbit'
          }`}
        />

        {/* Outer Orbit Glow Ring 2 (Counter) */}
        <div
          className={`absolute w-80 sm:w-[420px] lg:w-[490px] h-80 sm:h-[420px] lg:h-[490px] rounded-full border border-neon-violet/15 pointer-events-none`}
        />

        {/* Ambient Backlight Halo behind Avatar Silhouette */}
        <div className="absolute inset-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-gradient-to-b from-neon-violet/40 via-dream-500/30 to-transparent blur-3xl transform scale-110 pointer-events-none -z-10" />

        {/* Main Avatar Container */}
        <div
          className={`relative group rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-lavender/40 via-dream-600/30 to-dream-950/80 shadow-glow-lg border border-lavender/30 backdrop-blur-md ${
            reducedMotion ? '' : 'animate-float-slow'
          }`}
        >
          {/* Avatar Glass Inner Ring */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-dream-900 border border-lavender-muted/30 shadow-inner">
            <img
              src={personal.avatarUrl}
              alt="Tulika — Stylized avatar with long hair and glasses"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback elegant SVG avatar if image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />

            {/* Subtle purple gradient overlay for atmospheric depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-dream-950/60 via-transparent to-dream-600/10 pointer-events-none" />

            {/* Glowing corner highlights */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-lavender/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-lavender/70 pointer-events-none" />
          </div>

          {/* Quick status pill anchored at bottom of avatar */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-dream-900/90 border border-lavender/30 backdrop-blur-md shadow-glow-sm flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-lavender-light font-medium tracking-tight">
              Curious & Building
            </span>
          </div>
        </div>

        {/* ========================================================== */}
        {/* FLOATING UI SATELLITE PILLS SURROUNDING THE CHARACTER      */}
        {/* ========================================================== */}

        {/* Satellite 1: Top Left - Curious Mind */}
        <div
          className={`hidden sm:flex absolute -left-16 sm:-left-32 lg:-left-44 top-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-dream-900/80 border border-lavender/25 backdrop-blur-md shadow-glass text-xs font-mono text-lavender-light ${
            reducedMotion ? '' : 'animate-float-medium'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-dream-700/80 flex items-center justify-center text-neon-violet">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-lavender-muted uppercase tracking-wider">Mindset</div>
            <div className="font-semibold text-white">Curious Mind</div>
          </div>
        </div>

        {/* Satellite 2: Top Right - Student Badge */}
        <div
          className={`hidden sm:flex absolute -right-16 sm:-right-32 lg:-right-44 top-10 items-center gap-2 px-3.5 py-2 rounded-xl bg-dream-900/80 border border-lavender/25 backdrop-blur-md shadow-glass text-xs font-mono text-lavender-light ${
            reducedMotion ? '' : 'animate-float-fast'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-dream-700/80 flex items-center justify-center text-lavender">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-lavender-muted uppercase tracking-wider">Status</div>
            <div className="font-semibold text-white">First-Year B.Tech</div>
          </div>
        </div>

        {/* Satellite 3: Bottom Left - Creative Tech */}
        <div
          className={`hidden sm:flex absolute -left-12 sm:-left-24 lg:-left-36 bottom-8 items-center gap-2 px-3.5 py-2 rounded-xl bg-dream-900/80 border border-lavender/25 backdrop-blur-md shadow-glass text-xs font-mono text-lavender-light ${
            reducedMotion ? '' : 'animate-float-fast'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-dream-700/80 flex items-center justify-center text-neon-purple">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-lavender-muted uppercase tracking-wider">Focus</div>
            <div className="font-semibold text-white">Creative Tech</div>
          </div>
        </div>

        {/* Satellite 4: Bottom Right - Passion */}
        <div
          className={`hidden sm:flex absolute -right-12 sm:-right-24 lg:-right-36 bottom-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-dream-900/80 border border-lavender/25 backdrop-blur-md shadow-glass text-xs font-mono text-lavender-light ${
            reducedMotion ? '' : 'animate-float-medium'
          }`}
        >
          <div className="w-6 h-6 rounded-lg bg-dream-700/80 flex items-center justify-center text-pink-400">
            <Heart className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] text-lavender-muted uppercase tracking-wider">Craft</div>
            <div className="font-semibold text-white">Design & Code</div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Content & Quotation */}
      <div className="text-center z-10 max-w-xl space-y-4">
        {/* Core Tagline Quote */}
        <blockquote className="font-sans text-base sm:text-lg text-lavender-light/90 italic font-normal tracking-wide">
          “{personal.tagline}”
        </blockquote>

        {/* Custom Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dream-850/70 border border-lavender/20 backdrop-blur-sm text-xs text-lavender">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-violet" />
          <span>{personal.customTagline}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-dream-600 via-dream-500 to-neon-violet text-white text-xs sm:text-sm font-semibold tracking-wide shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="px-5 py-2.5 rounded-xl bg-dream-900/80 hover:bg-dream-800/80 text-lavender hover:text-white border border-lavender/20 text-xs sm:text-sm font-semibold tracking-wide transition-all hover:border-lavender/40"
          >
            Read Story
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="z-10 mt-6 flex flex-col items-center">
        <button
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center gap-1.5 text-lavender-muted hover:text-lavender transition-colors focus:outline-none"
          aria-label="Scroll to explore"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-lavender/30 flex items-start justify-center p-1 group-hover:border-lavender transition-colors">
            <div className={`w-1 h-2 rounded-full bg-lavender ${reducedMotion ? '' : 'animate-bounce'}`} />
          </div>
          <ArrowDown className="w-3.5 h-3.5 -mt-0.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

