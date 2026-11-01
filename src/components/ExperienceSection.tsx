import React, { useState } from 'react';
import { Calendar, GraduationCap, Trophy, Users, BookOpen, Sparkles, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ChibiGenBadge } from './ChibiTrio';
import { TerminalSection } from './TerminalSection';

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
        return <GraduationCap className="w-4 h-4 text-kos-mint" />;
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-kos-terra" />;
      case 'Club':
        return <Users className="w-4 h-4 text-kos-linen" />;
      case 'Learning':
        return <BookOpen className="w-4 h-4 text-kos-mint" />;
      default:
        return <Sparkles className="w-4 h-4 text-kos-mint" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto space-y-16">
      {/* Section Header with Chibi Gen Badge */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-linen/30 text-xs font-mono text-kos-linen tracking-wider uppercase">
            <Brain className="w-3.5 h-3.5 text-kos-mint" />
            <span>003: Telecommunication Logs // Transmissions</span>
          </div>
          <ChibiGenBadge size="md" />
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-kos-parchment">
          Journey, Milestones & <span className="text-kos-mint mint-glow-text">Terminal Logbook</span>
        </h2>
        <p className="text-kos-linen-muted text-sm sm:text-base font-mono">
          “Humans run on communication, psychology, and an ice-cold cola... Let's read the transmission logs~” — Authentic student milestones and interactive CLI.
        </p>
      </div>

      {/* Prominent Current Status Banner */}
      <div className="relative rounded-2xl p-6 sm:p-8 bg-kos-navy-dark/90 border-2 border-kos-mint/30 shadow-mint-sm backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-kos-mint/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kos-mint animate-pulse shadow-mint-sm" />
              <span className="font-mono text-xs text-kos-mint uppercase tracking-widest font-semibold">
                CURRENT LAB RESEARCH STATUS
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-kos-parchment">
              {personal.title}
            </h3>
            <p className="text-sm sm:text-base font-mono text-kos-mint font-semibold">
              {personal.college}
            </p>
            <p className="text-xs sm:text-sm text-kos-linen font-mono">
              {personal.branch}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-kos-clay-dark/40 font-mono">
            <div className="text-right">
              <div className="text-xs text-kos-linen-muted uppercase tracking-wider">Start Year</div>
              <div className="font-heading font-bold text-xl text-kos-parchment">{personal.startYear}</div>
            </div>
            <div className="px-3 py-1 mt-2 rounded-md bg-kos-navy-deep border border-kos-mint/30 text-[11px] text-kos-mint font-semibold">
              Undergraduate 10B% Active
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Interactive CLI Terminal Logbook */}
      <div className="space-y-4">
        <div className="flex items-center justify-between font-mono text-xs text-kos-linen-muted px-1">
          <span className="flex items-center gap-2 text-kos-mint font-semibold">
            <span>[ CLI TELEMETRY LOGBOOK ]</span>
          </span>
          <span className="text-[11px]">Type commands to stream neural loops</span>
        </div>
        <TerminalSection />
      </div>

      {/* Timeline Filter Pills */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-center gap-2 flex-wrap font-mono">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                filterType === type
                  ? 'bg-kos-mint text-kos-navy-dark font-bold shadow-mint-sm'
                  : 'bg-kos-navy-dark text-kos-linen hover:text-white border border-kos-clay-dark/60'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-kos-mint before:via-kos-terra before:to-kos-clay-dark">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Milestone Marker Node */}
              <div
                className={`absolute -left-[30px] sm:-left-[36px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-kos-navy-deep border-2 flex items-center justify-center transition-all ${
                  item.current
                    ? 'border-kos-mint shadow-mint-md scale-110'
                    : 'border-kos-clay-dark group-hover:border-kos-mint group-hover:scale-105'
                }`}
              >
                {getMilestoneIcon(item.type)}
              </div>

              {/* Timeline Card */}
              <div className="rounded-xl p-5 sm:p-6 bg-kos-navy-dark/75 border border-kos-clay-dark/60 hover:border-kos-mint/60 backdrop-blur-md transition-all group-hover:shadow-mint-sm space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-mono text-[10px] text-kos-mint uppercase tracking-wider font-semibold">
                      {item.type}
                    </span>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-kos-parchment group-hover:text-kos-mint transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs sm:text-sm font-mono text-kos-linen font-medium">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-kos-linen-muted mt-1 sm:mt-0">
                    <Calendar className="w-3.5 h-3.5 text-kos-mint" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-kos-linen leading-relaxed">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-kos-clay-dark/40 font-mono">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-kos-navy-deep text-[10px] text-kos-linen-muted border border-kos-clay-dark/50"
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
      </div>
    </section>
  );
};
