import React from 'react';
import { Headphones, Sparkles, Lightbulb, Target, BookOpen, Heart, Atom } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BeyondSection: React.FC = () => {
  const { beyondScreen } = portfolioData;

  const getInterestIcon = (icon: string) => {
    switch (icon) {
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-kos-mint" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-kos-mint" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-kos-terra" />;
      case 'Target':
        return <Target className="w-5 h-5 text-kos-mint" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-kos-linen" />;
      default:
        return <Heart className="w-5 h-5 text-kos-terra" />;
    }
  };

  return (
    <section id="beyond" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-kos-mint/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-mint/30 text-xs font-mono text-kos-mint tracking-wider uppercase">
          <Atom className="w-3.5 h-3.5 text-kos-mint" />
          <span>Chapter 005 // Human Side of Science</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-kos-parchment">
          Beyond the code, <span className="text-kos-mint mint-glow-text">the human mind.</span>
        </h2>
        <p className="text-kos-linen-muted text-sm sm:text-base font-mono">
          Late-night training loops, sci-fi philosophy, sustainable tech daydreams, and the relentless drive to build things that matter.
        </p>
      </div>

      {/* Floating Personal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beyondScreen.map((item, index) => (
          <div
            key={index}
            className={`lab-card rounded-2xl p-6 sm:p-7 bg-kos-navy-dark/80 border border-kos-clay-dark/60 hover:border-kos-mint/60 backdrop-blur-xl transition-all duration-300 hover:shadow-mint-sm hover:-translate-y-1 flex flex-col justify-between ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Top decorative badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  {getInterestIcon(item.icon)}
                </div>
                <div className="px-3 py-1 rounded-full bg-kos-navy-deep border border-kos-clay-dark/40 text-[10px] font-mono text-kos-mint uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-kos-parchment group-hover:text-kos-mint transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-kos-linen leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="pt-4 mt-6 border-t border-kos-clay-dark/40 flex items-center justify-between text-xs font-mono text-kos-mint">
              <span>✦ {item.tag}</span>
              <span className="text-kos-linen-muted/60 text-[10px]">#KingdomOfScience</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
