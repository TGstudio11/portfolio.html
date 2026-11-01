import React from 'react';

export const AtmosphericHorizon: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none -mb-1">
      {/* Twilight atmospheric gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-t from-kos-navy-deep via-kos-navy-dark/60 to-transparent z-0" />

      {/* Floating Low-Opacity Cloud Vectors */}
      <div className="absolute top-4 left-1/4 w-96 h-16 bg-kos-mint/5 rounded-full blur-2xl animate-pulse opacity-40" />
      <div className="absolute top-10 right-1/3 w-80 h-14 bg-kos-linen/5 rounded-full blur-xl opacity-30" />

      {/* Layer 1: Distant Misty Mountain Silhouettes */}
      <svg
        className="w-full h-24 sm:h-36 lg:h-48 text-kos-navy-dark/70 relative z-10"
        viewBox="0 0 1440 260"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,181.3C672,192,768,192,864,181.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,260L1392,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z" />
      </svg>

      {/* Layer 2: Mid-ground Rolling Mountain & Hill Peaks */}
      <svg
        className="w-full h-24 sm:h-36 lg:h-44 text-kos-navy-deep/85 -mt-16 sm:-mt-24 lg:-mt-32 relative z-20"
        viewBox="0 0 1440 260"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,133.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,260L1380,260C1320,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z" />
      </svg>

      {/* Layer 3: Foreground Serene Earth Horizon Silhouettes (Forest & Ridge Crests) */}
      <svg
        className="w-full h-16 sm:h-24 lg:h-28 text-kos-navy-deep -mt-10 sm:-mt-16 relative z-30"
        viewBox="0 0 1440 180"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,64L40,74.7C80,85,160,107,240,106.7C320,107,400,85,480,80C560,75,640,85,720,96C800,107,880,117,960,112C1040,107,1120,85,1200,74.7C1280,64,1360,64,1400,64L1440,64L1440,180L1400,180C1360,180,1280,180,1200,180C1120,180,1040,180,960,180C880,180,800,180,720,180C640,180,560,180,480,180C400,180,320,180,240,180C160,180,80,180,40,180L0,180Z" />
      </svg>

      {/* Subtle Mint Horizon Line Accent */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-kos-mint/30 to-transparent relative z-30" />
    </div>
  );
};
