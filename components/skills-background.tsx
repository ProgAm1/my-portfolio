"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/components/animations";

export default function SkillsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isMobile = useIsMobile();

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", isMobile ? "-20%" : "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", isMobile ? "20%" : "-20%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[100px] top-[10%] md:-left-[150px] md:top-[15%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-700/15 via-violet-700/5 to-transparent"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-[50px] bottom-[-50px] md:-right-[100px] md:bottom-[-100px] h-[400px] w-[450px] md:h-[600px] md:w-[700px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-700/15 via-violet-700/5 to-transparent"
      />
    </div>
  );
}
