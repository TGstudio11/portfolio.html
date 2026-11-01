import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Radio, Sparkles } from 'lucide-react';
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

    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#97D8C4', '#529993', '#E76F51', '#F4E9D8'],
        });
      } catch {}

      const mailtoUrl = `mailto:${encodeURIComponent(socialLinks.email)}?subject=${encodeURIComponent(
        `Signal Dispatch from ${formData.name} (KOS AI Lab)`
      )}&body=${encodeURIComponent(
        `Operator Tulika,\n\n${formData.message}\n\nSignal Origin: ${formData.name} (${formData.email})`
      )}`;

      window.open(mailtoUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background glow node */}
      <div className="absolute inset-0 max-w-4xl mx-auto h-full bg-gradient-to-t from-kos-mint/5 via-kos-terra/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Eyebrow Header */}
      <div className="space-y-3 mb-14 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kos-navy-dark border border-kos-mint/30 text-xs font-mono text-kos-mint tracking-wider uppercase">
          <Radio className="w-3.5 h-3.5 text-kos-mint" />
          <span>004: Establish Comms // Radio Tower</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-kos-parchment">
          Transmit a Signal. <br className="hidden sm:inline" />
          <span className="text-kos-terra terra-glow-text">
            Let's Engineer the Future.
          </span>
        </h2>
        <p className="text-kos-linen-muted text-sm sm:text-base leading-relaxed font-mono">
          Whether you want to discuss AI research, collaborate on a hackathon, or talk all things science and compute—my transmission frequency is locked on.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6 font-mono">
          <div className="p-6 sm:p-7 rounded-2xl bg-kos-navy-dark/85 border border-kos-clay-dark/70 backdrop-blur-xl shadow-lab-card space-y-6">
            <div>
              <span className="text-xs text-kos-mint uppercase tracking-wider font-semibold">
                RADIO FREQUENCY: 10.00 GHz
              </span>
              <h3 className="font-heading text-xl font-bold text-kos-parchment mt-1">
                Direct Communications Log
              </h3>
              <p className="text-xs sm:text-sm text-kos-linen mt-1 leading-relaxed">
                Connect via email or discover research repositories on GitHub. Responses dispatched with high priority.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="p-4 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-kos-navy-surface flex items-center justify-center text-kos-mint flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] text-kos-linen-muted uppercase">Dispatch Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-kos-parchment truncate">
                    {socialLinks.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-kos-navy-surface hover:bg-kos-navy text-xs text-kos-mint hover:text-white flex items-center gap-1.5 transition-colors flex-shrink-0 border border-kos-mint/30"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-kos-mint" />
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
              <span className="text-[11px] text-kos-linen-muted uppercase tracking-wider">
                External Laboratory Feeds
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-kos-navy-deep hover:bg-kos-navy border border-kos-clay-dark/50 hover:border-kos-mint/50 text-kos-linen hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-kos-mint" />
                  <span className="text-[11px]">GitHub</span>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-kos-navy-deep hover:bg-kos-navy border border-kos-clay-dark/50 hover:border-kos-mint/50 text-kos-linen hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-kos-terra" />
                  <span className="text-[11px]">LinkedIn</span>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-kos-navy-deep hover:bg-kos-navy border border-kos-clay-dark/50 hover:border-kos-mint/50 text-kos-linen hover:text-white transition-all flex flex-col items-center gap-1.5 text-center group"
                >
                  <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-kos-linen" />
                  <span className="text-[11px]">Instagram</span>
                </a>
              </div>
            </div>

            {/* Student Note */}
            <div className="p-3.5 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/40 text-[11px] text-kos-linen-muted leading-relaxed">
              📍 Affiliation: <span className="text-kos-mint font-semibold">{personal.college}</span>
              <br />
              ✦ Status: Open for hackathon teams & research sprints
            </div>
          </div>
        </div>

        {/* Right Column: High-Frequency Transmission Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-kos-navy-dark/85 border border-kos-clay-dark/70 backdrop-blur-xl shadow-lab-card relative overflow-hidden font-mono">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-kos-navy-deep border border-kos-mint/50 flex items-center justify-center text-kos-mint shadow-mint-md">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-kos-parchment">
                  Signal Transmitted 10 Billion Percent!
                </h3>
                <p className="text-xs sm:text-sm text-kos-linen-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your signal has been registered by the Kingdom of Science AI lab console.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2 rounded-lg bg-kos-navy-deep hover:bg-kos-navy text-xs text-kos-mint border border-kos-mint/30 transition-colors"
                >
                  Transmit another signal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-kos-mint uppercase tracking-wider mb-1.5 font-semibold">
                    Sender Identification (Name) *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Chrome / Senku / Collaborator"
                    className="w-full px-4 py-3 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/70 text-sm text-kos-parchment placeholder-kos-linen-muted/30 focus:outline-none focus:border-kos-mint transition-all font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-kos-mint uppercase tracking-wider mb-1.5 font-semibold">
                    Return Frequency (Email) *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/70 text-sm text-kos-parchment placeholder-kos-linen-muted/30 focus:outline-none focus:border-kos-mint transition-all font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-kos-mint uppercase tracking-wider mb-1.5 font-semibold">
                    Transmission Content (Message) *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Transmit your idea, research question, project proposal, or say hi..."
                    className="w-full px-4 py-3 rounded-xl bg-kos-navy-deep border border-kos-clay-dark/70 text-sm text-kos-parchment placeholder-kos-linen-muted/30 focus:outline-none focus:border-kos-mint transition-all font-mono resize-none"
                  />
                </div>

                {/* High-frequency "Send Signal" Action Button in Terracotta Empire Orange */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-kos-terra hover:bg-kos-terra-dark text-white text-sm font-bold tracking-wider shadow-terra-sm hover:shadow-terra-md transition-all flex items-center justify-center gap-2 group disabled:opacity-50 font-mono uppercase"
                >
                  {isSubmitting ? (
                    <span>Broadcasting Signal...</span>
                  ) : (
                    <>
                      <span>[ SEND SIGNAL ]</span>
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
