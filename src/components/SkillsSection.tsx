import React, { useState } from 'react';
import { Code2, Layout, Sparkles, Terminal, Compass, HeartHandshake, Search, Cpu, FlaskConical } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ChibiSenkuBadge } from './ChibiTrio';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-kos-mint" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-kos-mint" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-kos-terra" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-kos-linen" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-kos-clay-light" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-kos-mint" />;
      default:
        return <Cpu className="w-4 h-4 text-kos-mint" />;
    }
  };

  const filteredCategories = skills
    .map((group) => {
      if (selectedCat !== 'All' && group.category !== selectedCat) {
        return null;
      }
      const matchedSkills = group.skills.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (matchedSkills.length === 0) return null;
      return {
        ...group,
        skills: matchedSkills,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-kos-mint/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header with Chibi Senku Badge */}
      <div className="space-y-3 mb-10 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-mint/30 text-xs font-mono text-kos-mint tracking-wider uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-kos-mint" />
            <span>001: Raw Materials // Elements & Foundations</span>
          </div>
          <ChibiSenkuBadge size="md" />
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-kos-parchment">
          Skills, Math & <span className="text-kos-mint mint-glow-text">Elemental Tooling</span>
        </h2>
        <p className="text-kos-linen-muted text-sm sm:text-base font-mono">
          “Science doesn't lie. Master the raw elements—from tensor calculus to algorithmic complexity.” — Authentic snapshot grounded in practice.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 font-mono">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setSelectedCat('All')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
              selectedCat === 'All'
                ? 'bg-kos-mint text-kos-navy-dark font-bold shadow-mint-sm'
                : 'bg-kos-navy-dark text-kos-linen hover:text-white border border-kos-clay-dark/60'
            }`}
          >
            All Elements
          </button>
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() => setSelectedCat(group.category)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                selectedCat === group.category
                  ? 'bg-kos-mint text-kos-navy-dark font-bold shadow-mint-sm'
                  : 'bg-kos-navy-dark text-kos-linen hover:text-white border border-kos-clay-dark/60'
              }`}
            >
              {group.category.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-kos-linen-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search raw material or tech..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-kos-navy-dark border border-kos-clay-dark/70 text-xs font-mono text-kos-parchment placeholder-kos-linen-muted/40 focus:outline-none focus:border-kos-mint transition-colors"
          />
        </div>
      </div>

      {/* Skill Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((group) => {
          if (!group) return null;
          return (
            <div
              key={group.category}
              className="lab-card rounded-2xl p-6 bg-kos-navy-dark/75 border border-kos-clay-dark/60 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-kos-clay-dark/40">
                  <div className="w-7 h-7 rounded-lg bg-kos-navy-deep flex items-center justify-center border border-kos-clay-dark/50">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-kos-parchment tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Badges Matrix */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/pill relative px-3 py-1.5 rounded-lg bg-kos-navy-surface hover:bg-kos-navy-deep text-xs font-mono text-kos-linen border border-kos-clay/30 hover:border-kos-mint transition-all cursor-default"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.isHighlighted && (
                        <span className="ml-1.5 text-kos-mint">✦</span>
                      )}

                      {/* Tooltip on hover */}
                      {skill.description && (
                        <div className="opacity-0 group-hover/pill:opacity-100 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-kos-navy-deep border border-kos-mint/40 text-[10px] text-kos-mint font-mono whitespace-nowrap shadow-mint-sm transition-opacity duration-200 z-30">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-4 mt-4 border-t border-kos-clay-dark/40 flex items-center justify-between text-[11px] font-mono text-kos-linen-muted">
                <span>{group.skills.length} ingredients</span>
                <span className="text-kos-mint">10B% verified</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
