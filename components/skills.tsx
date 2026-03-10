import { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/section-title";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Skills"
          title="My Tech Stack"
          subtitle="Technologies I work with across the full lifecycle of a project."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/20"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-400">
                {cat.category}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
