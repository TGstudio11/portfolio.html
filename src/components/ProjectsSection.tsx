import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Code, X, CheckCircle2, Lightbulb } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import confetti from 'canvas-confetti';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Creative Tech', 'AI & Machine Learning', 'Web Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleLaunchProject = () => {
    // Interactive sparkle confetti celebration
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#c084fc', '#d8b4fe', '#f3e8ff']
      });
    } catch {}
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-dream-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-neon-violet" />
            <span>Chapter 02 // Explorations & Code</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Works & <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">Digital Artifacts</span>
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base max-w-xl">
            A curated collection of micro-apps, experiments, and creative tools crafted with an emphasis on code craft, design detail, and problem-solving.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-dream-600 text-white shadow-glow-sm border border-lavender/40'
                  : 'bg-dream-900/60 text-lavender-muted hover:text-white hover:bg-dream-800/50 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-3xl bg-dream-900/50 border border-lavender/20 hover:border-lavender/50 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-glow-md hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Top Index & Category */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-lavender-muted tracking-widest uppercase">
                  0{index + 1} // {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-dream-800/80 text-[10px] font-mono text-lavender border border-lavender/15">
                  {project.status || 'Active'}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-lavender transition-colors">
                  {project.name}
                </h3>
                <p className="font-sans text-xs text-lavender font-medium mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-lavender-muted leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* My Contribution Highlight Box */}
              <div className="p-3 rounded-xl bg-dream-950/60 border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-neon-violet uppercase tracking-wider flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  <span>My Contribution</span>
                </div>
                <p className="text-xs text-lavender-light/90 leading-snug">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Tech Stack & Links (Bottom) */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-dream-850/80 text-[11px] font-mono text-lavender-muted border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-lavender hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-dream-800/60 hover:bg-dream-700/60 text-lavender-muted hover:text-white border border-white/5 transition-colors"
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
                      className="p-2 rounded-xl bg-gradient-to-r from-dream-600 to-neon-violet hover:from-dream-500 hover:to-dream-400 text-white shadow-glow-sm transition-all"
                      title="Launch Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ============================================================== */}
        {/* "CURRENTLY BUILDING SOMETHING NEW" INTERACTIVE TEASER CARD     */}
        {/* Beautiful placeholder for upcoming work                        */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-b from-dream-900/40 via-dream-950/60 to-purple-950/40 border-2 border-dashed border-lavender/25 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between items-center text-center group hover:border-lavender/50 transition-all duration-300">
          <div className="my-auto space-y-4 py-8">
            <div className="relative w-16 h-16 mx-auto rounded-2xl bg-dream-800/80 border border-neon-violet/30 flex items-center justify-center shadow-glow-sm group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-neon-violet animate-pulse" />
              <div className="absolute inset-0 rounded-2xl bg-neon-violet/10 animate-ping pointer-events-none" />
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-[11px] text-neon-purple tracking-widest uppercase">
                Under Active Construction
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Currently Building Something New
              </h3>
              <p className="text-xs sm:text-sm text-lavender-muted max-w-xs mx-auto leading-relaxed">
                Prototyping a new creative experiment at the intersection of generative visual art and responsive interfaces.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-800/80 border border-white/10 text-xs font-mono text-lavender">
              <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
              <span>Next Drop: Coming Soon</span>
            </div>
          </div>

          <div className="w-full text-center text-[11px] font-mono text-lavender-muted/70 pt-4 border-t border-white/5">
            More projects will be added as my B.Tech journey unfolds
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PROJECT DETAIL CASE STUDY MODAL                                */}
      {/* ============================================================== */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dream-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-dream-900 border border-lavender/30 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs text-neon-violet uppercase tracking-wider">
                  Case Study // {activeModalProject.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-lavender font-medium">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-dream-800/80 hover:bg-dream-700 text-lavender hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm text-lavender-muted leading-relaxed">
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-semibold mb-1">
                  Project Overview
                </h4>
                <p>{activeModalProject.details?.overview || activeModalProject.description}</p>
              </div>

              {/* Key Highlights */}
              {activeModalProject.details?.highlights && (
                <div className="p-4 rounded-2xl bg-dream-950/70 border border-white/5 space-y-2">
                  <h4 className="font-mono text-xs text-lavender uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Technical Highlights & Features</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.details.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-lavender-light">
                        <span className="text-neon-violet">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Personal Contributions & Learnings */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-neon-violet" />
                  <span>Key Learnings & Takeaways</span>
                </h4>
                <p className="text-lavender-light/90">
                  {activeModalProject.details?.learnings || activeModalProject.contribution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-semibold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-dream-800 text-xs font-mono text-lavender border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              {activeModalProject.githubLink && (
                <a
                  href={activeModalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-dream-800 hover:bg-dream-700 text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {activeModalProject.projectLink && (
                <a
                  href={activeModalProject.projectLink}
                  onClick={() => handleLaunchProject()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-dream-600 to-neon-violet text-white text-xs font-mono flex items-center gap-1.5 shadow-glow-sm hover:shadow-glow-md transition-all"
                >
                  <span>Launch Project</span>
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
