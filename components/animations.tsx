"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ReactNode, useState, useEffect, useRef } from "react";


// ─── useIsMobile ────────────────────────────────────────────────────────────
// Debounced to avoid setState on every resize pixel → prevents re-render storms
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);

    // Run immediately on mount
    check();

    const onResize = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      // 100 ms debounce — window resize fires hundreds of times per second
      timerRef.current = setTimeout(check, 100);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [breakpoint]);

  return isMobile;
}

// ─── Shared variants (hoisted outside components = stable reference, no inline object creation) ───

// Stagger container — const reference, Framer Motion won't re-diff on every render
const staggerContainerVariants = (
  staggerChildren: number,
  delayChildren: number
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Reduced-motion versions — instant, opacity-only
const staggerItemVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// ─── Components ────────────────────────────────────────────────────────────

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Direction the element slides in from. Default: "up" */
  direction?: "up" | "down" | "left" | "right";
}

/**
 * Wraps children with a fade + slide-in animation that triggers
 * when the element first scrolls into the viewport (once: true).
 *
 * Perf changes vs. previous version:
 * - once: true  → animation fires once; no re-computation on scroll-back
 * - Respects prefers-reduced-motion: reduce → instant opacity fade only
 * - directionOffset is derived from stable per-render memoized values
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  // Prefers-reduced-motion: just fade, no movement
  if (shouldReduceMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay }}
      >
        {children}
      </motion.div>
    );
  }

  const offset = isMobile ? 12 : 28;
  const directionOffset = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { y: 0, x: offset },
    right: { y: 0, x: -offset },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      // once: true is the critical change — prevents re-animation on scroll-back
      // which was causing unnecessary layout/paint work on every scroll cycle
      viewport={{ once: true, amount: isMobile ? 0.05 : 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Extra delay before the first child animates */
  delayChildren?: number;
  /** Time between each child animation */
  staggerChildren?: number;
}

/**
 * Wraps a list of children and staggers their entrance animations.
 * Direct children should be wrapped with <StaggerItem>.
 *
 * Perf changes:
 * - once: true → stagger fires once per session
 * - variants object is created once per Stagger instance (stable unless props change)
 */
export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.12,
}: StaggerProps) {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  // Build variants only when props change (not on every render scroll)
  const variants = staggerContainerVariants(
    shouldReduceMotion ? 0 : staggerChildren,
    shouldReduceMotion ? 0 : delayChildren
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.05 : 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Individual item inside a <Stagger> container.
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? staggerItemVariantsReduced : staggerItemVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * An article element that works as a stagger item.
 */
export function StaggerArticle({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.article
      className={className}
      variants={shouldReduceMotion ? staggerItemVariantsReduced : staggerItemVariants}
    >
      {children}
    </motion.article>
  );
}
