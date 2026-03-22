import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/section-title";
import { FadeIn } from "@/components/animations";
import SkillsBackground from "@/components/skills-background";
import { FileCode2, MonitorSmartphone, Wrench, type LucideIcon } from "lucide-react";

// Single pill hover class — all categories share the same colour, no map needed
const pillHover = "hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300";

const categoryMeta: Record<string, { icon: LucideIcon; gradient: string; glow: string }> = {
  Languages: {
    icon: FileCode2,
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  Frontend: {
    icon: MonitorSmartphone,
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
  "Backend & Tools": {
    icon: Wrench,
    gradient: "from-violet-500/10 to-indigo-500/10",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative flex flex-col justify-center min-h-[calc(100dvh-5rem)] md:min-h-[calc(100dvh-6rem)] py-20 md:py-28 px-4 sm:px-6">
      {/* Background accents via isolated Client Component */}
      <SkillsBackground />

      <div className="w-full mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            label="Skills"
            title="Tools & Technologies"
            subtitle="Technologies I work with across the full lifecycle of a project."
          />
        </FadeIn>

        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          {skillCategories.map((cat, index) => {
            // Safe fallback: Wrench is a LucideIcon
            const meta = categoryMeta[cat.category] ?? {
              icon: Wrench,
              gradient: "from-slate-500/10 to-slate-500/10",
              glow: "",
            };
            const Icon = meta.icon;

            return (
              <FadeIn key={cat.category} delay={0.15 + index * 0.1}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 ${meta.glow} h-full`}
                >
                  {/* Gradient background */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-80`}
                  />

                  {/* Soft light overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4 md:mb-5 flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                        <Icon size={20} className="text-violet-400" />
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-white">
                        {cat.category}
                      </h3>
                    </div>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`cursor-default rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium text-slate-400 transition-all duration-200 ${pillHover}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
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
