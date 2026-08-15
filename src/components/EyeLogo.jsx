'use client';

import { useState, useEffect, useRef } from 'react';

export default function EyeLogo({ className = "w-12 h-12", interactive = true, glowing = false }) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(6, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 25);

      setPupilOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  return (
    <div
      ref={eyeRef}
      className={`relative inline-flex items-center justify-center ${className} ${
        glowing ? 'drop-shadow-[0_0_15px_rgba(160,198,15,0.5)]' : ''
      }`}
    >
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Outer Eye Almond Contour */}
        <path
          d="M2 30C15 8 85 8 98 30C85 52 15 52 2 30Z"
          fill="currentColor"
          className="text-zinc-900 dark:text-white transition-colors"
        />
        
        {/* Inner Dark Iris Background */}
        <circle
          cx="50"
          cy="30"
          r="18"
          fill="#080A08"
        />

        {/* Pupil group with dynamic offset */}
        <g
          style={{
            transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Inner Iris Ring */}
          <circle
            cx="50"
            cy="30"
            r="16"
            stroke="#A0C60F"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Crosshair Dividers */}
          <line x1="50" y1="14" x2="50" y2="46" stroke="#A0C60F" strokeWidth="1" opacity="0.6" />
          <line x1="34" y1="30" x2="66" y2="30" stroke="#A0C60F" strokeWidth="1" opacity="0.6" />

          {/* Central 4-Point Star Core */}
          <path
            d="M50 24C50 28 52 30 56 30C52 30 50 32 50 36C50 32 48 30 44 30C48 30 50 28 50 24Z"
            fill="#A0C60F"
          />
          <circle cx="50" cy="30" r="2" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
