import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  reducedMotion?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ reducedMotion = false }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Track hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for trailing aura
  useEffect(() => {
    if (reducedMotion || isTouchDevice) return;

    let animId: number;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(lerp);
    };

    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [pos, reducedMotion, isTouchDevice]);

  if (isTouchDevice || reducedMotion || !isVisible) return null;

  return (
    <>
      {/* Central pinpoint dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-kos-mint pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-mint-sm"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
      {/* Trailing electric mint aura */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-kos-mint/40 transition-all duration-300 ease-out ${
          isHovered
            ? 'w-14 h-14 bg-kos-mint/15 backdrop-blur-[1px] border-kos-mint scale-110 shadow-mint-md'
            : 'w-8 h-8 bg-kos-mint/5'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
