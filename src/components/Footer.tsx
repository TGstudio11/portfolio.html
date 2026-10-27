import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  reducedMotion?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ reducedMotion = false }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dream-950/90 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-dream-600 to-neon-violet flex items-center justify-center text-white font-heading font-bold text-xs shadow-glow-sm">
            T
          </div>
          <div>
            <p className="font-heading font-semibold text-sm text-white flex items-center gap-1.5">
              <span>Designed with curiosity by {personal.name}.</span>
              <Sparkles className="w-3.5 h-3.5 text-neon-violet inline" />
            </p>
            <p className="text-[11px] font-mono text-lavender-muted">
              First-Year B.Tech Portfolio · {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Center: Playful Heart Note */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-lavender-muted">
          <span>Crafted in purple gradients & endless wonder</span>
          <Heart className="w-3.5 h-3.5 text-neon-purple inline" />
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group px-4 py-2 rounded-xl bg-dream-900/80 hover:bg-dream-800 text-xs font-mono text-lavender hover:text-white border border-lavender/20 flex items-center gap-2 transition-all hover:border-lavender/50 shadow-sm"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

