import React, { useEffect, useRef } from 'react';

interface CanvasStarsProps {
  reducedMotion?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
  vx: number;
  vy: number;
}

export const CanvasStars: React.FC<CanvasStarsProps> = ({ reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
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

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate stars with purple / lavender / pale lilac color variations
    const starColors = [
      'rgba(216, 180, 254, ', // soft lavender
      'rgba(192, 132, 252, ', // purple
      'rgba(243, 232, 255, ', // pale lilac
      'rgba(255, 255, 255, ', // starlight white
      'rgba(168, 85, 247, ', // neon violet
    ];

    const starCount = Math.min(140, Math.floor((width * height) / 10000));
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        baseAlpha: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        color,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render cosmic nebula ambient gradient background
      const grad1 = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.35,
        width * 0.75
      );
      grad1.addColorStop(0, 'rgba(88, 28, 135, 0.15)'); // deep violet
      grad1.addColorStop(0.5, 'rgba(46, 16, 101, 0.08)');
      grad1.addColorStop(1, 'rgba(6, 2, 12, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating glow orb near top right
      const grad2 = ctx.createRadialGradient(
        width * 0.85,
        height * 0.15,
        20,
        width * 0.85,
        height * 0.15,
        width * 0.45
      );
      grad2.addColorStop(0, 'rgba(168, 85, 247, 0.09)');
      grad2.addColorStop(1, 'rgba(6, 2, 12, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!reducedMotion) {
          // Drifting
          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          // Twinkle
          s.alpha = s.baseAlpha + Math.sin(time * 2 + s.twinkleOffset) * 0.25;
          s.alpha = Math.max(0.08, Math.min(1, s.alpha));

          // Subtle cursor interaction (gentle attraction)
          const dx = mouseRef.current.x - s.x;
          const dy = mouseRef.current.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 0) {
            const force = (140 - dist) / 140 * 0.4;
            s.x += (dx / dist) * force;
            s.y += (dy / dist) * force;
          }
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.fill();

        // Extra halo for larger stars
        if (s.size > 1.4) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${s.color}${s.alpha * 0.25})`;
          ctx.fill();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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

