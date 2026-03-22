import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/animations";
import HeroBackground from "@/components/hero-background";

const socials = [
  { icon: Twitter, href: "https://x.com/xlihi0", label: "X / Twitter" },
  { icon: Github, href: "https://github.com/ProgAm1", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ammarbabasit", label: "LinkedIn" },
  { icon: Mail, href: "mailto:babaset99@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-24 lg:pt-0"
    >
      {/* Ambient background blobs with Parallax (Client Component) */}
      <HeroBackground />

      {/* Grid: 1-col mobile (3 rows: text-top / portrait / text-bottom), 2-col desktop (portrait spans both rows on the right). */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:gap-x-16 w-full max-w-6xl">

        {/* ── Text-top: badge → heading → subtitle → paragraph ── */}
        <Stagger
          staggerChildren={0.1}
          delayChildren={0.1}
          className="col-start-1 row-start-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge */}
          <StaggerItem className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 md:px-4 md:py-1.5 text-[11px] md:text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            Available for opportunities
          </StaggerItem>

          {/* Heading */}
          <StaggerItem>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent pb-1 block sm:inline mt-1 sm:mt-0">
                Ammar Babasit
              </span>
            </h1>
          </StaggerItem>

          {/* Subtitle */}
          <StaggerItem>
            <p className="mt-4 md:mt-6 text-base font-medium text-slate-400 sm:text-lg md:text-xl">
              Software Engineering Student &amp; Full-Stack Developer
            </p>
          </StaggerItem>

          {/* Intro paragraph */}
          <StaggerItem>
            <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-base leading-relaxed text-slate-400">
              Software Engineering student focused on full-stack web development, backend systems,
              and project-driven problem solving. I build practical applications with clean
              architecture and a strong focus on usability, performance, and real-world impact.
            </p>
          </StaggerItem>
        </Stagger>

        {/*
          ── Portrait card — SINGLE instance, repositioned by grid ──
          CRITICAL LCP OPTIMIZATION: Removed <FadeIn> / <motion.div> wrapper. 
          This is now perfectly static. It paints strictly on the exact initial hydration frame, eliminating the 1.2s element render delay.
        */}
        <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center mt-5 lg:mt-0 flex justify-center flex-shrink-0">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-violet-600/15 blur-[40px] -z-10" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_8px_40px_rgba(0,0,0,0.35),0_0_30px_rgba(139,92,246,0.10)] w-[200px] sm:w-[240px] lg:w-[280px]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/MyPhoto.webp"
                  alt="Portrait of Ammar Babasit"
                  fill
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c0c14]/95 via-[#0c0c14]/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 px-4 py-3.5">
                <p className="text-sm font-semibold text-white leading-snug">Ammar Babasit</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Software Engineering Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Text-bottom: CTAs → social icons ── */}
        <Stagger
          staggerChildren={0.1}
          delayChildren={0.55}
          className="col-start-1 row-start-3 lg:row-start-2 mt-5 lg:mt-8 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* CTA buttons */}
          <StaggerItem className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 w-full sm:w-auto">
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
          </StaggerItem>

          {/* Social icons */}
          <StaggerItem className="mt-8 md:mt-10 flex items-center gap-4 md:gap-5">
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
          </StaggerItem>
        </Stagger>

      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-10 animate-bounce text-slate-500 hover:text-slate-400 transition-colors"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
