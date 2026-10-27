import React from 'react';
import { Headphones, Sparkles, Lightbulb, Target, BookOpen, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BeyondSection: React.FC = () => {
  const { beyondScreen } = portfolioData;

  const getInterestIcon = (icon: string) => {
    switch (icon) {
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-neon-violet" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-lavender" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      default:
        return <Heart className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="beyond" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background ambient texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-dream-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
          <Heart className="w-3.5 h-3.5 text-pink-400" />
          <span>Chapter 05 // Unplugged</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          A little more <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">about me.</span>
        </h2>
        <p className="text-lavender-muted text-sm sm:text-base">
          The human behind the terminal: music that feeds focus, aesthetic obsessions, creative role models, and sci-fi daydreams.
        </p>
      </div>

      {/* Floating Personal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beyondScreen.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-dream-900/60 to-dream-950/70 border border-lavender/15 hover:border-lavender/40 backdrop-blur-xl transition-all duration-300 hover:shadow-glow-md hover:-translate-y-1.5 flex flex-col justify-between ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Top decorative badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-dream-800/80 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  {getInterestIcon(item.icon)}
                </div>
                <div className="px-3 py-1 rounded-full bg-dream-850/80 border border-lavender/15 text-[10px] font-mono text-lavender uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-lavender transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-lavender-muted leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-lavender">
              <span>✦ {item.tag}</span>
              <span className="text-lavender-muted/50 text-[10px]">#insideTheMind</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

