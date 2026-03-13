"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";


// ─── useIsMobile ────────────────────────────────────────────────────────────
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

// ─── Shared variants ───────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

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
 * when the element scrolls into the viewport.
 */
export function FadeIn({

  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const isMobile = useIsMobile();
  const directionOffset = {
    up: { y: isMobile ? 12 : 28, x: 0 },
    down: { y: isMobile ? -12 : -28, x: 0 },
    left: { y: 0, x: isMobile ? 12 : 28 },
    right: { y: 0, x: isMobile ? -12 : -28 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: isMobile ? 0.05 : 0.4, margin: isMobile ? "0px 0px -10% 0px" : "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      style={{ willChange: "auto" }} // clear auto-injected will-change on completion to stop blur
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
 */
export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.12,
}: StaggerProps) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: isMobile ? 0.05 : 0.3, margin: isMobile ? "0px 0px -10% 0px" : "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
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
  return (
    <motion.div
      className={className}
      variants={staggerItemVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * An article element that works as a stagger item.
 */
export function StaggerArticle({ children, className }: StaggerItemProps) {
  return (
    <motion.article
      className={className}
      variants={staggerItemVariants}
    >
      {children}
    </motion.article>
  );
}
