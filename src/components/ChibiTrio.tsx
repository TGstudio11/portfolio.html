import React from 'react';
import { X, Sparkles, Compass, Brain, FlaskConical } from 'lucide-react';

// ==============================================================
// MICRO CHIBI TRIO BADGES (Dr. STONE × AI LAB)
// ==============================================================

export const ChibiSenkuBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'sm',
  className = '',
}) => {
  const dim = size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-kos-navy-dark border border-kos-mint/40 text-kos-mint text-[11px] font-mono tracking-wider shadow-mint-sm ${className}`}
      title="Scientist // Senku Ishigami (10 Billion % Logic)"
    >
      <FlaskConical className={dim} />
      <span>SENKU // SCIENTIST</span>
    </span>
  );
};

export const ChibiRyusuiBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'sm',
  className = '',
}) => {
  const dim = size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-kos-navy-dark border border-kos-terra/40 text-kos-terra text-[11px] font-mono tracking-wider shadow-terra-sm ${className}`}
      title="Navigator // Ryusui Nanami (I Desire All Compute!)"
    >
      <Compass className={dim} />
      <span>RYUSUI // NAVIGATOR</span>
    </span>
  );
};

export const ChibiGenBadge: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'sm',
  className = '',
}) => {
  const dim = size === 'lg' ? 'w-8 h-8' : size === 'md' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-kos-navy-dark border border-kos-linen/40 text-kos-linen text-[11px] font-mono tracking-wider ${className}`}
      title="Mentalist // Gen Asagiri (Psychology & Heuristics)"
    >
      <Brain className={dim} />
      <span>GEN // MENTALIST</span>
    </span>
  );
};

// ==============================================================
// TRIO COUNCIL MODAL (HIDDEN LORE DIRECTIVE)
// ==============================================================

interface TrioCouncilModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrioCouncilModal: React.FC<TrioCouncilModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const councilMembers = [
    {
      name: 'Senku Ishigami',
      title: 'Chief Scientist & Lab Director',
      specialty: 'Mathematical Foundations, Physics Simulation & Logic Core',
      quote:
        '“This AI architecture is 10 Billion Percent logical. We will rebuild human civilization from stone and silicon, starting from gradient descent and backpropagation.”',
      roleBadge: '001: SCIENTIST',
      badgeColor: 'border-kos-mint text-kos-mint',
      formula: 'E = mc²  |  10,000,000,000%',
      symbol: '🧪',
    },
    {
      name: 'Ryusui Nanami',
      title: 'Chief Navigator & Resource Commander',
      specialty: 'High-Performance Computing, Global Scalability & Ambition',
      quote:
        '“I desire all the compute, all the data, and every high-end GPU cluster in the known world! Why settle for a 7B model when you can train across the cosmos? Haha, full speed ahead!”',
      roleBadge: '002: NAVIGATOR',
      badgeColor: 'border-kos-terra text-kos-terra',
      formula: 'HA-HA! GREED IS JUSTICE IN RESEARCH',
      symbol: '🧭',
    },
    {
      name: 'Gen Asagiri',
      title: 'Chief Mentalist & AI Ethics Strategist',
      specialty: 'Human-Computer Interaction, Prompt Psychology & Civic Tech',
      quote:
        '“Now, now... pure raw numbers are fine, but a sweet little heuristic, elegant user interfaces, and an ice-cold handmade cola work absolute wonders on the human heart~”',
      roleBadge: '003: MENTALIST',
      badgeColor: 'border-kos-linen text-kos-linen',
      formula: 'COLA + PSYCHOLOGY + CLEAN UX',
      symbol: '🃏',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kos-navy-dark/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl bg-kos-navy-surface border-2 border-kos-mint/40 shadow-mint-lg p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-kos-clay-dark/40 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kos-mint animate-pulse" />
              <span className="font-mono text-xs text-kos-mint uppercase tracking-widest">
                [ CLASSIFIED DIRECTIVE // TRIO COUNCIL ]
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-kos-parchment">
              Kingdom of Science — AI Advisory Council
            </h3>
            <p className="text-xs sm:text-sm text-kos-linen-muted font-mono">
              Directives guiding Tulika's AI engineering journey at Newton School of Technology.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-kos-navy-dark hover:bg-kos-navy text-kos-parchment border border-kos-clay/30 hover:border-kos-mint transition-colors"
            aria-label="Close Council Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Council Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {councilMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 bg-kos-navy-dark/70 border border-kos-clay-dark/60 hover:border-kos-mint/60 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{member.symbol}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${member.badgeColor}`}>
                    {member.roleBadge}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-kos-parchment">
                    {member.name}
                  </h4>
                  <div className="text-[11px] font-mono text-kos-mint">
                    {member.title}
                  </div>
                </div>

                <p className="text-xs text-kos-linen italic leading-relaxed">
                  {member.quote}
                </p>
              </div>

              <div className="pt-3 border-t border-kos-clay-dark/40 text-[10px] font-mono text-kos-clay-light">
                {member.formula}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-4 rounded-xl bg-kos-navy-dark/90 border border-kos-mint/30 flex items-center justify-between text-xs font-mono text-kos-linen-muted">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-kos-mint" />
            <span>Telemetry: 10,000,000,000% Logical Alignment</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-kos-mint text-kos-navy-dark font-bold hover:bg-kos-mint-glow transition-all"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
