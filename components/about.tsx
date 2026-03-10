import { Code2, BookOpen, Cpu } from "lucide-react";
import SectionTitle from "@/components/section-title";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Comfortable across the entire stack—building React frontends, RESTful APIs, and database-driven backends.",
  },
  {
    icon: Cpu,
    title: "Systems & Algorithms",
    description:
      "Strong foundation in computer science fundamentals, data structures, and algorithm design from hands-on coursework.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description:
      "Always exploring new technologies—currently deepening expertise in cloud-native architectures and AI integrations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="About Me"
          title="Crafting software with purpose"
          subtitle="A passionate software engineering student turning ideas into elegant, production-ready applications."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text block */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Ammar Babaset</span>, a
              Software Engineering student driven by the belief that great software is
              built at the intersection of clean code, thoughtful design, and relentless
              curiosity.
            </p>
            <p>
              My journey started with Python scripts and quickly expanded to full-stack
              web development, computer vision projects, and scalable backend systems. I
              love working on projects that challenge me to think differently and deliver
              real value.
            </p>
            <p>
              Outside of coding, I enjoy exploring the latest advancements in AI,
              contributing to open-source projects, and mentoring peers in my program.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Saudi Arabia 🇸🇦", "CS + SE", "Open to Remote"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
