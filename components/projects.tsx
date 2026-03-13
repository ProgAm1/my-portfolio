"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/section-title";
import { FadeIn } from "@/components/animations";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-violet-700/10 blur-[60px] md:blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            label="Projects"
            title="Things I've Built"
            subtitle="A selection of projects that showcase my problem-solving approach and technical range."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.id} className="h-full">
              <article
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition-all hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)] h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-violet-900/40 to-indigo-900/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                    onError={() => { }} // gracefully ignore missing placeholder images
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        Source
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
