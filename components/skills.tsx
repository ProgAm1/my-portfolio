import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/section-title";

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
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-violet-700/8 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-cyan-700/6 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Skills"
          title="Tools & Technologies"
          subtitle="Technologies I work with across the full lifecycle of a project."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const meta = categoryMeta[cat.category] ?? {
              icon: "🔧",
              gradient: "from-slate-500/20 to-slate-500/10",
              glow: "",
            };
            const pill = pillColor[cat.category] ?? "";

            return (
              <div
                key={cat.category}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 ${meta.glow} hover:-translate-y-1`}
              >
                {/* Card gradient tint */}
                <div
                  className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${meta.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Header */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-lg border border-white/8">
                    {meta.icon}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                    {cat.category}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`cursor-default rounded-lg border border-white/8 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-400 transition-all duration-200 ${pill}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
