"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/components/animations";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isMobile = useIsMobile();

  // Background blobs parallax effect (disabled on mobile for performance)
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "-50%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-violet-700/20 blur-[80px] md:blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-indigo-600/15 blur-[60px] md:blur-[100px]"
      />
    </div>
  );
}
