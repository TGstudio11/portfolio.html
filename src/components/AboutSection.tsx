import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, Compass, Atom } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-mint/30 text-xs font-mono text-kos-mint tracking-wider uppercase">
          <Atom className="w-3.5 h-3.5 text-kos-mint" />
          <span>000: Base Camp // Lab Specimen & Philosophy</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-kos-parchment">
          The Scientist behind the terminal: <span className="text-kos-mint mint-glow-text">Tulika Gupta</span>
        </h2>
        <p className="text-kos-linen-muted text-sm sm:text-base max-w-2xl font-mono">
          First-Year B.Tech Computer Science & AI/ML student at Newton School of Technology (NST), navigating the frontiers of machine intelligence with stone-age tenacity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Conversational Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-kos-navy-dark/80 border border-kos-clay-dark/70 backdrop-blur-xl shadow-lab-card overflow-hidden">
            {/* Subtle petrification glow node */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-kos-mint/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 text-base sm:text-lg text-kos-parchment leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-heading font-semibold text-kos-mint tracking-tight border-b border-kos-clay-dark/50 pb-4">
                {personal.shortBio}
              </p>

              {personal.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-kos-linen leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom status badge */}
            <div className="mt-6 pt-5 border-t border-kos-clay-dark/40 flex items-center justify-between text-xs font-mono text-kos-linen-muted">
              <span className="flex items-center gap-1.5 text-kos-mint">
                <span className="w-2 h-2 rounded-full bg-kos-mint animate-pulse" />
                <span>ACTIVE EXPERIMENTATION</span>
              </span>
              <span className="text-kos-linen">NST · B.Tech CSE (AI & ML)</span>
            </div>
          </div>

          {/* Core Areas of Curiosity */}
          <div className="p-6 rounded-2xl bg-kos-navy-dark/60 border border-kos-clay-dark/50 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-kos-mint uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-kos-mint" />
              <span>Core Scientific Curiosities</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {personal.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-kos-navy-surface hover:bg-kos-navy-dark text-xs font-mono text-kos-linen border border-kos-clay/30 hover:border-kos-mint/40 transition-all cursor-default"
                >
                  ✦ {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bento Matrix */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card 1: College & Academic Track */}
          <div className="p-5 rounded-2xl bg-kos-navy-dark/85 border border-kos-mint/30 backdrop-blur-md shadow-mint-sm space-y-2">
            <div className="flex items-center gap-2 text-kos-mint text-xs font-mono uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-kos-mint" />
              <span>Academic Base</span>
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-kos-parchment">
                {personal.branch}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-kos-mint font-semibold mt-0.5">
                {personal.college}
              </p>
              <div className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-kos-navy-deep text-[11px] font-mono text-kos-linen border border-kos-clay/30">
                1st Year · Class of 2028
              </div>
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="p-5 rounded-2xl bg-kos-navy-dark/70 border border-kos-clay-dark/60 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-kos-terra text-xs font-mono uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-kos-terra" />
              <span>Location Coordinates</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base font-bold text-kos-parchment">
                  {personal.location}
                </h3>
                <p className="text-xs text-kos-linen-muted font-mono">Open to AI research sprints & student hackathons</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-kos-mint animate-pulse shadow-mint-sm" title="Online in Lab" />
            </div>
          </div>

          {/* Card 3: Learning Goals */}
          <div className="p-5 rounded-2xl bg-kos-navy-dark/70 border border-kos-clay-dark/60 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-kos-linen text-xs font-mono uppercase tracking-wider">
              <Target className="w-4 h-4 text-kos-mint" />
              <span>Current Research Goals</span>
            </div>
            <ul className="space-y-2 font-mono text-xs text-kos-linen">
              {personal.learningGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-kos-mint mt-0.5">▹</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Fun Fact */}
          <div className="p-5 rounded-2xl bg-kos-navy-dark/90 border border-kos-clay/50 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-kos-terra text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-kos-terra" />
              <span>Scientific Quirk</span>
            </div>
            <p className="text-xs sm:text-sm text-kos-linen italic leading-relaxed">
              “{personal.funFact}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
