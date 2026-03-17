import { Code2, BookOpen, Cpu } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { FadeIn } from "@/components/animations";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Interested in building full-stack web applications, with hands-on experience in frontend development, backend logic, and working with databases.",
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  {
    icon: Cpu,
    title: "Systems & Algorithms",
    description:
      "Built a solid understanding of computer science fundamentals through coursework in data structures, algorithms, and problem-solving.",
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
  },
  {
    icon: BookOpen,
    title: "Learning by Building",
    description:
      "Learns quickly through building, experimentation, and hands-on projects, with a constant focus on improving technical skills.",
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            label="About Me"
            title="Crafting software with purpose"
            subtitle="A passionate software engineering student turning ideas into elegant, production-ready applications."
          />
        </FadeIn>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center mt-8 md:mt-12">
          {/* Text block */}
          <FadeIn delay={0.1} className="space-y-4 md:space-y-5 text-sm md:text-base text-slate-400 leading-relaxed">
            <h3 className="text-base md:text-lg font-semibold tracking-tight text-violet-300 sm:text-xl">
              Background
            </h3>
            <p>
              I&apos;m <span className="text-white font-semibold">Ammar Babaset</span>, a
              Software Engineering student at the University of Jeddah with a strong interest
              in building practical software and growing through hands-on work.
            </p>

            <h3 className="text-base md:text-lg font-semibold tracking-tight text-violet-300 sm:text-xl">
              Interests
            </h3>
            <p>
              My main interest is in full-stack development and building applications that solve
              real problems. I also enjoy exploring areas like computer vision and bioinformatics,
              which have helped broaden my technical perspective.
            </p>

            <h3 className="text-base md:text-lg font-semibold tracking-tight text-violet-300 sm:text-xl">
              Current Focus
            </h3>
            <p>
              Right now, my focus is on improving through continuous building, learning quickly,
              and gaining real experience through projects, collaboration, and internship opportunities.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["SE", "Open to Remote"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Highlight cards */}
          <div className="grid gap-4 mt-4 lg:mt-0">
            {highlights.map(({ icon: Icon, title, description, gradient, glow }, index) => (
              <FadeIn key={title} delay={0.15 + index * 0.1}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 ${glow}`}
                >
                  {/* Gradient background */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-80`}
                  />

                  {/* Soft light overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
