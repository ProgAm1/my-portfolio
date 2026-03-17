"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Using useSpring for a smoother visual update than raw scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500 z-[100] origin-left shadow-[0_0_10px_rgba(139,92,246,0.3)]"
      style={{ scaleX }}
    />
  );
}
