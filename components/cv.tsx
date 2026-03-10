"use client";

import { Download, FileText, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/section-title";

export default function CV() {
    return (
        <section id="cv" className="relative py-28 px-6">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-4xl">
                <SectionTitle
                    label="Resume"
                    title="My CV"
                    subtitle="A quick look at my background, skills, and experience."
                />

                {/* CV Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(139,92,246,0.07)] backdrop-blur-sm">

                    {/* Top bar */}
                    <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 py-3">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500/70" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                            <div className="h-3 w-3 rounded-full bg-green-500/70" />
                        </div>
                        <span className="flex items-center gap-2 text-xs text-slate-500">
                            <FileText size={12} />
                            cv.pdf
                        </span>
                        <a
                            href="/CV/Ammar_Yaser_Babaset_Software_Intern.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400 transition-colors"
                        >
                            <ExternalLink size={12} />
                            Open
                        </a>
                    </div>

                    {/* PDF Preview */}
                    <div className="relative w-full" style={{ height: "600px" }}>
                        <iframe
                            src="/CV/Ammar_Yaser_Babaset_Software_Intern.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="h-full w-full border-0"
                            title="CV Preview"
                        />
                        {/* Subtle gradient fade at bottom */}
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                    </div>

                    {/* Bottom action bar */}
                    <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-6 py-4">
                        <p className="text-sm text-slate-500">
                            Last updated · March 2026
                        </p>
                        <a
                            href="/CV/Ammar_Yaser_Babaset_Software_Intern.pdf"
                            download
                            className="group flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95"
                        >
                            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
