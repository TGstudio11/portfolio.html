import React, { useState } from 'react';
import { ArrowUp, Sparkles, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AtmosphericHorizon } from './AtmosphericHorizon';
import { TrioCouncilModal } from './ChibiTrio';

interface FooterProps {
  reducedMotion?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ reducedMotion = false }) => {
  const { personal } = portfolioData;
  const [councilModalOpen, setCouncilModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="relative bg-kos-navy-deep text-kos-linen overflow-hidden">
      {/* Atmospheric Horizon Mountain & Cloud Silhouettes */}
      <AtmosphericHorizon />

      {/* Main Footer Content */}
      <div className="relative border-t border-kos-clay-dark/50 bg-kos-navy-deep/95 py-10 px-4 sm:px-6 z-30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
          {/* Left: Branding & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-kos-navy-dark border border-kos-mint/40 flex items-center justify-center text-kos-mint text-sm shadow-mint-sm">
              🧪
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-kos-parchment flex items-center gap-1.5">
                <span>Kingdom of Science // {personal.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-kos-mint inline" />
              </p>
              <p className="text-[11px] text-kos-linen-muted">
                {personal.college} · B.Tech CSE (AI & ML) · {new Date().getFullYear()}
              </p>
            </div>
          </div>

          {/* Center: Hidden Trio Council Directive Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCouncilModalOpen(true)}
              className="group px-3 py-1.5 rounded-lg bg-kos-navy-dark hover:bg-kos-navy border border-kos-mint/40 text-xs text-kos-mint hover:text-kos-mint-glow flex items-center gap-2 transition-all shadow-mint-sm"
              title="Open Classified Trio Council Directives"
            >
              <Shield className="w-3.5 h-3.5 text-kos-terra group-hover:rotate-12 transition-transform" />
              <span>[ ✦ TRIO COUNCIL DIRECTIVE ]</span>
            </button>
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group px-4 py-2 rounded-lg bg-kos-navy-dark hover:bg-kos-navy-surface text-xs text-kos-mint hover:text-white border border-kos-mint/30 flex items-center gap-2 transition-all shadow-sm"
            aria-label="Back to top"
          >
            <span>[ RETURN TO BASE CAMP ]</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-kos-mint" />
          </button>
        </div>

        {/* Bottom Stone Creed */}
        <div className="mt-8 pt-6 border-t border-kos-clay-dark/30 text-center text-[10px] font-mono text-kos-clay-light">
          “This is exhilarating! From the stone age to modern artificial intelligence, civilization advances step by step.”
        </div>
      </div>

      {/* Trio Council Modal */}
      <TrioCouncilModal
        isOpen={councilModalOpen}
        onClose={() => setCouncilModalOpen(false)}
      />
    </footer>
  );
};
