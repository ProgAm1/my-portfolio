"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/section-title";
import { FadeIn, useIsMobile } from "@/components/animations";

const categoryMeta: Record<string, { icon: string; gradient: string; glow: string }> = {
  Languages: {
    icon: "⌨️",
    gradient: "from-violet-500/20 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  Frontend: {
    icon: "🎨",
    gradient: "from-violet-500/20 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  "Backend & Tools": {
    icon: "⚙️",
    gradient: "from-violet-500/20 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
};

const pillColor: Record<string, string> = {
  Languages: "hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300",
  Frontend: "hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300",
  "Backend & Tools": "hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isMobile = useIsMobile();

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", isMobile ? "-20%" : "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", isMobile ? "20%" : "-20%"]);

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-28 px-4 sm:px-6">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div 
          style={{ y: y1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-violet-700/8 blur-[80px] md:blur-[120px] transition-transform" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute right-0 bottom-0 h-[200px] w-[250px] md:h-[300px] md:w-[400px] rounded-full bg-cyan-700/6 blur-[60px] md:blur-[100px] transition-transform" 
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            label="Skills"
            title="Tools & Technologies"
            subtitle="Technologies I work with across the full lifecycle of a project."
          />
        </FadeIn>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {skillCategories.map((cat, index) => {
            const meta = categoryMeta[cat.category] ?? {
              icon: "🔧",
              gradient: "from-slate-500/20 to-slate-500/10",
              glow: "",
            };
            const pill = pillColor[cat.category] ?? "";

            return (
              <FadeIn key={cat.category} delay={0.1 + index * 0.1}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5 md:p-6 transition-all duration-300 ${meta.glow} hover:-translate-y-1 h-full`}
                >
                  {/* Card gradient tint */}
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${meta.gradient} opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100`}
                  />

                  {/* Header */}
                  <div className="mb-4 md:mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl bg-white/5 text-base md:text-lg border border-white/8">
                      {meta.icon}
                    </span>
                    <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-300">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`cursor-default rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium text-slate-400 transition-all duration-200 ${pill}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
