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
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-violet-700/[0.08] blur-[80px] md:blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-0 bottom-0 h-[200px] w-[250px] md:h-[300px] md:w-[400px] rounded-full bg-violet-700/[0.08] blur-[60px] md:blur-[100px]"
      />
    </div>
  );
}
