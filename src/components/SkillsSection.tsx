import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Sparkles,
  Palette,
  Terminal,
  Compass,
  HeartHandshake,
  Search,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-neon-violet" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-lavender" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-neon-purple" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-pink-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-lavender" />;
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
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-neon-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Eyebrow Header */}
      <div className="space-y-2 mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
          <Cpu className="w-3.5 h-3.5 text-neon-violet" />
          <span>Chapter 04 // Toolkit & Technologies</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Skills, Tools & <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">Explorations</span>
        </h2>
        <p className="text-lavender-muted text-sm sm:text-base">
          An honest snapshot of languages, frameworks, design tools, and learning pursuits. Grounded in practice, without arbitrary percentages.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
          <button
            onClick={() => setSelectedCat('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCat === 'All'
                ? 'bg-dream-600 text-white shadow-glow-sm border border-lavender/40'
                : 'bg-dream-900/60 text-lavender-muted hover:text-white border border-white/5'
            }`}
          >
            All Categories
          </button>
          {skills.map((group) => (
            <button
              key={group.category}
              onClick={() => setSelectedCat(group.category)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCat === group.category
                  ? 'bg-dream-600 text-white shadow-glow-sm border border-lavender/40'
                  : 'bg-dream-900/60 text-lavender-muted hover:text-white border border-white/5'
              }`}
            >
              {group.category.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-lavender-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search a skill or tech..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-dream-900/60 border border-lavender/20 text-xs text-white placeholder-lavender-muted/50 focus:outline-none focus:border-neon-violet transition-colors"
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
              className="group rounded-3xl p-6 bg-dream-900/50 border border-lavender/15 hover:border-lavender/40 backdrop-blur-xl transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                  <div className="w-7 h-7 rounded-xl bg-dream-800/80 flex items-center justify-center border border-white/5">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Badges Matrix */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/pill relative px-3 py-1.5 rounded-xl bg-dream-850/80 hover:bg-dream-700/80 text-xs text-lavender-light border border-lavender/10 hover:border-lavender/40 transition-all cursor-default"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.isHighlighted && (
                        <span className="ml-1.5 text-neon-violet">✦</span>
                      )}

                      {/* Tooltip on hover */}
                      {skill.description && (
                        <div className="opacity-0 group-hover/pill:opacity-100 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-dream-950 border border-lavender/30 text-[10px] text-lavender font-mono whitespace-nowrap shadow-glow-sm transition-opacity duration-200 z-30">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-lavender-muted/70">
                <span>{group.skills.length} skills listed</span>
                <span className="text-neon-violet/70">active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

