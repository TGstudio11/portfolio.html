import React, { useState } from 'react';
import { Calendar, GraduationCap, Trophy, Users, BookOpen, Sparkles, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { personal, timeline } = portfolioData;
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Education', 'Hackathon', 'Club', 'Learning'];

  const filteredTimeline = filterType === 'All'
    ? timeline
    : timeline.filter(t => t.type === filterType);

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-neon-violet" />;
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Club':
        return <Users className="w-4 h-4 text-cyan-400" />;
      case 'Learning':
        return <BookOpen className="w-4 h-4 text-lavender" />;
      default:
        return <Sparkles className="w-4 h-4 text-neon-purple" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
          <Compass className="w-3.5 h-3.5 text-neon-violet" />
          <span>Chapter 03 // The Trajectory</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Journey & <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">Milestones</span>
        </h2>
        <p className="text-lavender-muted text-sm sm:text-base">
          An authentic timeline mapping my learning trajectory, hackathons, college community involvements, and future engineering goals.
        </p>
      </div>

      {/* Prominently Displayed Current Status Banner */}
      <div className="relative mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-dream-900/90 via-dream-850/90 to-purple-950/90 border border-lavender/30 shadow-glow-md backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-violet/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-glow-sm" />
              <span className="font-mono text-xs text-lavender-muted uppercase tracking-widest">
                Current Status
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {personal.title}
            </h3>
            <p className="text-sm sm:text-base text-lavender font-medium">
              {personal.branch}
            </p>
            <p className="text-xs sm:text-sm text-lavender-muted">
              {personal.college}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
            <div className="text-right">
              <div className="font-mono text-xs text-lavender-muted uppercase tracking-wider">Start Year</div>
              <div className="font-heading font-bold text-xl text-white">{personal.startYear}</div>
            </div>
            <div className="px-3 py-1 mt-2 rounded-full bg-dream-700/60 border border-lavender/20 text-[11px] font-mono text-lavender-light">
              Undergraduate
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Filter Pills */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              filterType === type
                ? 'bg-dream-600 text-white shadow-glow-sm border border-lavender/40'
                : 'bg-dream-900/60 text-lavender-muted hover:text-white border border-white/5'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-neon-violet before:via-dream-500 before:to-dream-800">
        {filteredTimeline.map((item) => (
          <div key={item.id} className="relative group">
            {/* Glowing Milestone Marker Node */}
            <div
              className={`absolute -left-[30px] sm:-left-[36px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-dream-900 border-2 flex items-center justify-center transition-all ${
                item.current
                  ? 'border-neon-violet shadow-glow-md scale-110'
                  : 'border-lavender-muted/40 group-hover:border-lavender group-hover:scale-105'
              }`}
            >
              {getMilestoneIcon(item.type)}
            </div>

            {/* Timeline Card */}
            <div className="rounded-2xl p-5 sm:p-6 bg-dream-900/50 border border-lavender/15 hover:border-lavender/40 backdrop-blur-md transition-all group-hover:shadow-glow-sm group-hover:-translate-y-0.5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-mono text-[10px] text-neon-violet uppercase tracking-wider">
                    {item.type}
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-lavender transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs sm:text-sm text-lavender font-medium">
                    {item.organization}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-lavender-muted mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5 text-lavender-muted" />
                  <span>{item.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-lavender-muted leading-relaxed">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-dream-850 text-[10px] font-mono text-lavender-muted border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

