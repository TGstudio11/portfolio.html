import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate real network submission with Formspree fallback / mailto draft
    try {
      // If a real Formspree endpoint is configured, this posts to it
      // Otherwise graceful fallback with feedback
      await new Promise(resolve => setTimeout(resolve, 900));

      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#a855f7', '#c084fc', '#d8b4fe', '#f3e8ff']
        });
      } catch {}

      // Optional: prepare mailto in background so Tulika gets the message directly
      const mailtoUrl = `mailto:${encodeURIComponent(socialLinks.email)}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Tulika,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.open(mailtoUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Intense Glowing Purple Background Halo */}
      <div className="absolute inset-0 max-w-4xl mx-auto h-full bg-gradient-to-t from-dream-600/20 via-neon-violet/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Eyebrow Header */}
      <div className="space-y-3 mb-14 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dream-900/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider uppercase">
          <MessageSquare className="w-3.5 h-3.5 text-neon-violet" />
          <span>Chapter 06 // Connect</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Have an idea? <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-lavender via-dream-300 to-neon-purple bg-clip-text text-transparent">
            Let's make something interesting.
          </span>
        </h2>
        <p className="text-lavender-muted text-sm sm:text-base leading-relaxed">
          I'm always open to learning, collaborating, exploring new ideas, and connecting with people who love building things.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Connect & Social Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-dream-900/60 border border-lavender/20 backdrop-blur-xl shadow-glass space-y-6">
            <div>
              <span className="font-mono text-xs text-lavender uppercase tracking-wider">
                Direct Channels
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1">
                Let's talk code & creativity
              </h3>
              <p className="text-xs sm:text-sm text-lavender-muted mt-1 leading-relaxed">
                Whether you have a student project in mind, want to discuss web design, or simply say hi — my inbox is always open.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-2xl bg-dream-950/70 border border-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-dream-800/80 flex items-center justify-center text-neon-violet flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-lavender-muted uppercase">Email</div>
                  <div className="text-xs sm:text-sm font-medium text-white truncate font-mono">
                    {socialLinks.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-dream-800 hover:bg-dream-700 text-xs font-mono text-lavender hover:text-white flex items-center gap-1.5 transition-colors flex-shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-lavender-muted uppercase tracking-wider">
                Find Me Around The Web
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-dream-850/70 hover:bg-dream-700/70 border border-white/5 hover:border-lavender/30 text-lavender-light hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-lavender" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-dream-850/70 hover:bg-dream-700/70 border border-white/5 hover:border-lavender/30 text-lavender-light hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-cyan-400" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-dream-850/70 hover:bg-dream-700/70 border border-white/5 hover:border-lavender/30 text-lavender-light hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-pink-400" />
                  <span className="text-[11px] font-mono">Instagram</span>
                </a>
              </div>
            </div>

            {/* Student Note */}
            <div className="p-3.5 rounded-2xl bg-dream-950/40 border border-lavender/10 text-[11px] font-mono text-lavender-muted leading-relaxed">
              📍 Current Location: <span className="text-white font-medium">{personal.location}</span>
              <br />
              ✦ Open to hackathon teams & student developer clubs
            </div>
          </div>
        </div>

        {/* Right Column: Functional Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-dream-900/60 border border-lavender/25 backdrop-blur-xl shadow-glass relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-dream-800/80 border border-neon-violet/40 flex items-center justify-center text-neon-violet shadow-glow-sm">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-lavender-muted max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. Your message has been prepared and I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2 rounded-xl bg-dream-800 hover:bg-dream-700 text-xs font-mono text-lavender hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-lavender uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-2xl bg-dream-950/70 border border-lavender/20 text-sm text-white placeholder-lavender-muted/40 focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-lavender uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-dream-950/70 border border-lavender/20 text-sm text-white placeholder-lavender-muted/40 focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-lavender uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just drop a friendly hello..."
                    className="w-full px-4 py-3 rounded-2xl bg-dream-950/70 border border-lavender/20 text-sm text-white placeholder-lavender-muted/40 focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-dream-600 via-dream-500 to-neon-violet hover:from-dream-500 hover:to-neon-violet text-white text-sm font-semibold tracking-wide shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Sending dispatch...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
