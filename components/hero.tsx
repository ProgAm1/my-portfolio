"use client";

import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
        Available for opportunities
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Ammar Babaset
        </span>
      </h1>

      <p className="mt-4 text-lg font-medium text-slate-400 sm:text-xl">
        Software Engineering Student
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-500">
        I build clean, performant web applications with modern technologies. Passionate
        about crafting experiences that feel as good as they look—from pixel-perfect
        interfaces to robust backend systems.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)]"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-white/10 hover:text-white"
        >
          Get In Touch
        </a>
      </div>

      {/* Social links */}
      <div className="mt-10 flex items-center gap-5">
        {[
          {
            icon: Twitter,
            href: "https://x.com/xlihi0",
            label: "X / Twitter",
          },
          {
            icon: Github,
            href: "https://github.com/ProgAm1",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/ammarbabaset",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "mailto:babaset99@gmail.com",
            label: "Email",
          },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-violet-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

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
