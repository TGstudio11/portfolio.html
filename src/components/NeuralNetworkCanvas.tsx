import React, { useEffect, useRef } from 'react';

interface NeuralNetworkCanvasProps {
  reducedMotion?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  isDust: boolean;
  color: string;
}

export const NeuralNetworkCanvas: React.FC<NeuralNetworkCanvasProps> = ({ reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Stone petrification dust colors & Senku mint particles
    const particleColors = [
      'rgba(151, 216, 196, ', // Senku Mint #97D8C4
      'rgba(82, 153, 147, ',  // Cyan Glow #529993
      'rgba(244, 233, 216, ', // Linen / Parchment #F4E9D8
      'rgba(158, 107, 85, ',  // Petrified Clay #9E6B55
      'rgba(231, 111, 81, ',  // Terracotta Orange spark #E76F51
    ];

    const particleCount = Math.min(100, Math.floor((width * height) / 12000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const isMint = Math.random() > 0.4;
      const color = isMint ? particleColors[0] : particleColors[Math.floor(Math.random() * particleColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        isDust: Math.random() > 0.6,
        color,
      };
    });

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint background watermarks (E = mc^2 & Miracle Fluid & Neural gradient equations)
      ctx.save();
      ctx.fillStyle = 'rgba(151, 216, 196, 0.022)';
      ctx.font = 'bold 120px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('E = mc²', width * 0.5, height * 0.38);

      // Miracle Fluid reaction equation watermark
      ctx.font = '500 22px "Fira Code", monospace';
      ctx.fillStyle = 'rgba(230, 213, 184, 0.025)';
      ctx.fillText('HNO₃ + C₂H₅OH ⟶ De-petrification Fluid', width * 0.5, height * 0.44);

      // Deep neural loss equation watermark
      ctx.font = '400 18px "Fira Code", monospace';
      ctx.fillStyle = 'rgba(151, 216, 196, 0.02)';
      ctx.fillText('θ_{t+1} = θ_t - η ∇_θ L(f(x; θ), y)  |  10,000,000,000% LOGICAL', width * 0.5, height * 0.48);
      ctx.restore();

      // Update and draw particles
      const connectionDistance = 140;
      const mouseConnectionDistance = 180;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Gentle breathing pulsation
          p.alpha = p.baseAlpha + Math.sin(frame * 0.03 + i) * 0.15;
          p.alpha = Math.max(0.1, Math.min(0.9, p.alpha));

          // Connect with cursor (Interactive Neural Network Constellation)
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseConnectionDistance) {
              const strength = (1 - dist / mouseConnectionDistance);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.strokeStyle = `rgba(151, 216, 196, ${strength * 0.65})`;
              ctx.lineWidth = strength * 1.5;
              ctx.stroke();

              // Electric mint spark node at intersection
              if (Math.random() > 0.85) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(187, 240, 225, ${strength * 0.8})`;
                ctx.fill();
              }

              // Subtle gravity pull toward cursor
              p.x += (dx / dist) * 0.4;
              p.y += (dy / dist) * 0.4;
            }
          }
        }

        // Connect nearby particles to form neural synapses / constellations
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const strength = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(151, 216, 196, ${strength})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Extra halo for mint nodes
        if (p.color.includes('151, 216, 196') && p.size > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(151, 216, 196, ${p.alpha * 0.2})`;
          ctx.fill();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
