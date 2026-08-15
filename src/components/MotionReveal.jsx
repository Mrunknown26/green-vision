'use client';

import { motion } from 'framer-motion';

export default function MotionReveal({
  children,
  delay = 0,
  yOffset = 30,
  duration = 0.8,
  className = '',
  cascade = false,
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
