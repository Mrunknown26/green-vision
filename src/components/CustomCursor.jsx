'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client with fine pointer (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, .interactive-hover');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation
    let animationFrameId;
    const updateTrailingPos = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailingPos);
    };

    animationFrameId = requestAnimationFrame(updateTrailingPos);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center dot */}
      <div
        className="custom-cursor-dot fixed top-0 left-0 w-2.5 h-2.5 bg-brand-lime rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />
      {/* Outer trailing ring */}
      <div
        className="custom-cursor-ring fixed top-0 left-0 rounded-full border -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) scale(${isHovering ? 1.6 : 1})`,
          width: '36px',
          height: '36px',
          backgroundColor: isHovering ? 'rgba(160, 198, 15, 0.08)' : 'transparent',
          borderColor: isHovering ? '#A0C60F' : 'rgba(160, 198, 15, 0.5)',
        }}
      />
    </div>
  );
}
