import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, BookOpen, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5 text-neon-violet" />
          <span>Chapter 01 // Origins & Curiosity</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Beyond the code, <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">a curious storyteller</span>
        </h2>
        <p className="text-lavender-muted text-sm sm:text-base max-w-2xl">
          An honest, conversational glimpse into my undergraduate journey, values, and what drives my pursuit of digital craft.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Conversational First-Person Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Conversational Intro Card */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-dream-900/60 border border-lavender/20 backdrop-blur-xl shadow-glass overflow-hidden">
            {/* Subtle purple corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-dream-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 text-base sm:text-lg text-lavender-light/95 leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight border-b border-white/10 pb-4">
                {personal.shortBio}
              </p>

              {personal.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-lavender-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote badge */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-lavender-muted">
              <span>Status: Exploring & Evolving</span>
              <span className="text-lavender">B.Tech · Class of 2028</span>
            </div>
          </div>

          {/* Interests & Curiosities Card */}
          <div className="p-6 rounded-3xl bg-dream-900/40 border border-lavender/15 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-lavender uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-neon-violet" />
              <span>Core Areas of Curiosity</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {personal.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-dream-800/60 hover:bg-dream-700/60 text-xs font-medium text-lavender-light border border-lavender/10 hover:border-lavender/30 transition-all cursor-default"
                >
                  ✦ {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Editable Profile Matrix / Bento Grid */}
        <div className="lg:col-span-5 space-y-4">
          {/* Bento Card 1: College & Academic Track */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-dream-900/80 to-dream-850/80 border border-lavender/20 backdrop-blur-md shadow-glass space-y-2">
            <div className="flex items-center gap-2 text-lavender text-xs font-mono uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-neon-violet" />
              <span>Academics</span>
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                {personal.branch}
              </h3>
              <p className="text-xs sm:text-sm text-lavender-muted">
                {personal.college}
              </p>
              <div className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-dream-800/80 text-[11px] font-mono text-lavender border border-white/5">
                Year 1 · Started {personal.startYear}
              </div>
            </div>
          </div>

          {/* Bento Card 2: Location */}
          <div className="p-5 rounded-2xl bg-dream-900/70 border border-lavender/15 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-lavender text-xs font-mono uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-neon-purple" />
              <span>Based In</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base font-bold text-white">
                  {personal.location}
                </h3>
                <p className="text-xs text-lavender-muted">Available for creative student collaborations</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-glow-sm" title="Online & Coding" />
            </div>
          </div>

          {/* Bento Card 3: Current Learning Goals */}
          <div className="p-5 rounded-2xl bg-dream-900/70 border border-lavender/15 backdrop-blur-md space-y-3">
            <div className="flex items-center gap-2 text-lavender text-xs font-mono uppercase tracking-wider">
              <Target className="w-4 h-4 text-neon-violet" />
              <span>Current Learning Roadmap</span>
            </div>
            <ul className="space-y-2">
              {personal.learningGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-lavender-light/90">
                  <span className="text-neon-violet mt-0.5">▹</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bento Card 4: Fun Fact */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-dream-900/80 via-dream-850/80 to-purple-950/80 border border-neon-violet/25 backdrop-blur-md shadow-glow-sm space-y-2">
            <div className="flex items-center gap-2 text-neon-purple text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Fun Fact & Quirks</span>
            </div>
            <p className="text-xs sm:text-sm text-lavender-light italic leading-relaxed">
              “{personal.funFact}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
