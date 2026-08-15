'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center opacity-50 ${className}`}
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center gap-2 p-2 rounded-full transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-brand-lime/50 ${
        isDark
          ? 'bg-zinc-900/80 hover:bg-zinc-800 border-white/10 text-zinc-300 hover:text-brand-lime shadow-md shadow-black/40'
          : 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 shadow-md shadow-zinc-200/50'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="text-brand-lime"
            >
              <Sun className="w-4 h-4 stroke-[2.2]" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="text-zinc-800"
            >
              <Moon className="w-4 h-4 stroke-[2.2]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium tracking-wide uppercase pr-2">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
