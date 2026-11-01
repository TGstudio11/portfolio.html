import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Code, X, CheckCircle2, Lightbulb, Compass, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ChibiRyusuiBadge } from './ChibiTrio';
import confetti from 'canvas-confetti';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Machine Learning', 'Creative Tech', 'Web Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleLaunchProject = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#97D8C4', '#529993', '#E76F51', '#F4E9D8'],
      });
    } catch {}
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-kos-terra/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header with Chibi Ryusui Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-terra/30 text-xs font-mono text-kos-terra tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-kos-terra" />
              <span>002: Inventions & Crafting // AI Schematics</span>
            </div>
            <ChibiRyusuiBadge size="md" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-kos-parchment">
            Crafted Inventions & <span className="text-kos-terra terra-glow-text">AI Architectures</span>
          </h2>
          <p className="text-kos-linen-muted text-sm sm:text-base max-w-xl font-mono">
            “I desire all the compute, all the data, and every breakthrough in the known world!” — AI models, physics solvers, and civic-tech systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-all ${
                selectedCategory === cat
                  ? 'bg-kos-terra text-white font-bold shadow-terra-sm border border-kos-terra'
                  : 'bg-kos-navy-dark text-kos-linen hover:text-white border border-kos-clay-dark/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-kos-navy-dark/85 border border-kos-clay-dark/60 hover:border-kos-mint/70 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-mint-sm hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Index & Blueprint Tag */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-kos-mint tracking-widest uppercase">
                  RECIPE 0{index + 1} // {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-kos-navy-deep text-[10px] font-mono text-kos-terra border border-kos-terra/30 font-semibold">
                  {project.status || 'Active'}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-kos-parchment group-hover:text-kos-mint transition-colors">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-kos-mint mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-kos-linen leading-relaxed">
                {project.description}
              </p>

              {/* My Contribution Highlight Box */}
              <div className="p-3.5 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/50 space-y-1">
                <div className="text-[10px] font-mono text-kos-terra uppercase tracking-wider flex items-center gap-1 font-semibold">
                  <Code className="w-3 h-3" />
                  <span>Lab Contribution</span>
                </div>
                <p className="text-xs font-mono text-kos-linen leading-snug">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Tech Stack & Links */}
            <div className="mt-6 pt-4 border-t border-kos-clay-dark/40 space-y-4">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 font-mono">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-kos-navy-surface text-[11px] text-kos-linen border border-kos-clay-dark/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-1 font-mono">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-kos-mint hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>[ Read Blueprint ]</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-kos-navy-surface hover:bg-kos-navy text-kos-linen hover:text-white border border-kos-clay-dark/50 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      onClick={() => handleLaunchProject()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-kos-terra hover:bg-kos-terra-dark text-white shadow-terra-sm transition-all"
                      title="Launch Blueprint"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* "Next Invention in the Crucible" Teaser Card */}
        <div className="rounded-2xl bg-kos-navy-dark/50 border-2 border-dashed border-kos-mint/30 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between items-center text-center group hover:border-kos-mint/60 transition-all duration-300">
          <div className="my-auto space-y-4 py-6 font-mono">
            <div className="relative w-14 h-14 mx-auto rounded-xl bg-kos-navy-deep border border-kos-mint/40 flex items-center justify-center shadow-mint-sm group-hover:scale-110 transition-transform text-kos-mint">
              <Sparkles className="w-7 h-7 text-kos-mint animate-pulse" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] text-kos-terra tracking-widest uppercase font-semibold">
                [ IN THE CRUCIBLE // RESEARCH IN PROGRESS ]
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-kos-parchment">
                Next AI Invention Under Synthesis
              </h3>
              <p className="text-xs sm:text-sm text-kos-linen-muted max-w-xs mx-auto leading-relaxed">
                Exploring edge neural acceleration and physics-constrained deep learning models at Newton School of Technology.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-deep border border-kos-mint/30 text-xs text-kos-mint">
              <span className="w-2 h-2 rounded-full bg-kos-mint animate-pulse" />
              <span>Synthesizing... 10B% Progress</span>
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-mono text-kos-linen-muted/60 pt-4 border-t border-kos-clay-dark/40">
            More blueprints unlocked as 1st-year milestones complete
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kos-navy-dark/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-kos-navy-surface border-2 border-kos-mint/40 shadow-mint-lg p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-mono">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-kos-clay-dark/40 pb-4">
              <div>
                <span className="text-xs text-kos-terra uppercase tracking-wider font-semibold">
                  BLUEPRINT // {activeModalProject.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-kos-parchment mt-1">
                  {activeModalProject.name}
                </h3>
                <p className="text-xs text-kos-mint">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-lg bg-kos-navy-deep hover:bg-kos-navy text-kos-linen hover:text-white border border-kos-clay-dark/60 transition-colors"
                aria-label="Close blueprint modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm text-kos-linen leading-relaxed">
              <div>
                <h4 className="text-xs text-kos-parchment uppercase tracking-wider font-bold mb-1">
                  Scientific Overview
                </h4>
                <p>{activeModalProject.details?.overview || activeModalProject.description}</p>
              </div>

              {/* Key Highlights */}
              {activeModalProject.details?.highlights && (
                <div className="p-4 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/50 space-y-2">
                  <h4 className="text-xs text-kos-mint uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-kos-mint" />
                    <span>Technical Architecture Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.details.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-kos-parchment">
                        <span className="text-kos-mint">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lab Contribution & Learnings */}
              <div className="space-y-1.5">
                <h4 className="text-xs text-kos-terra uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-kos-terra" />
                  <span>Key Research Learnings</span>
                </h4>
                <p className="text-kos-linen">
                  {activeModalProject.details?.learnings || activeModalProject.contribution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs text-kos-parchment uppercase tracking-wider font-bold mb-2">
                  Crafting Materials & Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-kos-navy-deep text-xs text-kos-mint border border-kos-mint/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-kos-clay-dark/40">
              {activeModalProject.githubLink && (
                <a
                  href={activeModalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-kos-navy-deep hover:bg-kos-navy text-xs text-kos-parchment flex items-center gap-1.5 border border-kos-clay/30 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
              )}
              {activeModalProject.projectLink && (
                <a
                  href={activeModalProject.projectLink}
                  onClick={() => handleLaunchProject()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-kos-terra hover:bg-kos-terra-dark text-white text-xs flex items-center gap-1.5 shadow-terra-sm transition-all font-semibold"
                >
                  <span>Launch Blueprint</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
