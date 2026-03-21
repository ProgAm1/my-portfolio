"use client";

import { useState, useRef } from "react";
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { FadeIn } from "@/components/animations";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Honeypot stored in a ref — uncontrolled, so React state (and autofill) can't pollute it
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          // Read the honeypot directly from the DOM; never from React state
          _hp: honeypotRef.current?.value ?? "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[250px] w-[400px] md:h-[400px] md:w-[600px] rounded-full bg-violet-700/10 blur-[80px] md:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle
            label="Contact"
            title="Let's Work Together"
            subtitle="Have a project in mind? My inbox is always open."
          />
        </FadeIn>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start mt-8 md:mt-12">
          {/* Left — info */}
          <div className="space-y-6 md:space-y-8">
            <FadeIn delay={0.05}>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m currently open to internships, entry-level software roles,
                and technical collaborations. If you have an opportunity, project,
                or team in mind, I’d be glad to connect.

              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  icon: Twitter,
                  label: "X / Twitter",
                  value: "@xlihi0",
                  href: "https://x.com/xlihi0",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "babaset99@gmail.com",
                  href: "mailto:babaset99@gmail.com",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/ProgAm1",
                  href: "https://github.com/ProgAm1",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/ammarbabasit",
                  href: "https://linkedin.com/in/ammarbabasit",
                },
              ].map(({ icon: Icon, label, value, href }, index) => (
                <FadeIn key={label} delay={0.1 + index * 0.1}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:border-violet-500/30 hover:bg-violet-500/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-slate-500">{label}</p>
                      <p className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot: off-screen, uncontrolled, named _hp so browsers don't autofill it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="_hp">Leave this empty</label>
                <input
                  ref={honeypotRef}
                  id="_hp"
                  name="_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="new-password"
                />
              </div>
              {status === "sent" ? (
                <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-8 text-center">
                  <p className="text-lg font-semibold text-violet-300">
                    Message sent! 🎉
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {status === "error" && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-24 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Ammar Babasit · Built with Next.js & Tailwind CSS
      </p>
    </section>
  );
}