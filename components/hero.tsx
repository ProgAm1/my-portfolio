"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/components/animations";

const socials = [
  { icon: Twitter, href: "https://x.com/xlihi0", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/ProgAm1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ammarbabasit", label: "LinkedIn" },
  { icon: Mail, href: "mailto:babaset99@gmail.com", label: "Email" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
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
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
    >
      {/* Ambient background blobs with Parallax */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-violet-700/20 blur-[80px] md:blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-indigo-600/15 blur-[60px] md:blur-[100px]"
        />
      </div>

      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 md:px-4 md:py-1.5 text-[11px] md:text-xs font-medium text-violet-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent pb-1 block sm:inline mt-1 sm:mt-0">
            Ammar Babasit
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 md:mt-6 text-base font-medium text-slate-400 sm:text-lg md:text-xl">
          Software Engineering Student & Full-Stack Developer
        </motion.p>

        <motion.p variants={item} className="mt-4 md:mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-slate-500 px-2 sm:px-4 md:px-0">
          Software Engineering student focused on full-stack web development, backend systems, and project-driven problem solving.
          I build practical applications with clean architecture and a strong focus on usability, performance, and real-world impact.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center rounded-xl sm:rounded-full bg-violet-600 px-6 py-3.5 md:py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center rounded-xl sm:rounded-full border border-white/10 bg-white/5 px-6 py-3.5 md:py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-white/10 hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="mt-10 md:mt-12 flex items-center gap-4 md:gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-violet-300"
            >
              <Icon size={18} className="md:scale-100 scale-110" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-10 animate-bounce text-slate-600 hover:text-slate-400 transition-colors"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
