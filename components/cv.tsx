"use client";

import { Download, FileText, ExternalLink, Eye } from "lucide-react";
import SectionTitle from "@/components/section-title";

const CV_PATH = "/CV/Ammar_Yaser_Babaset_Software_Intern.pdf";

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
                            href={CV_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400 transition-colors"
                        >
                            <ExternalLink size={12} />
                            Open
                        </a>
                    </div>

                    {/* ── DESKTOP: embedded PDF iframe ── */}
                    <div className="relative w-full hidden md:block" style={{ height: "700px" }}>
                        <iframe
                            src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                            className="h-full w-full border-0"
                            title="CV Preview"
                        />
                        {/* Subtle gradient fade at bottom */}
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                    </div>

                    {/* ── MOBILE: polished action card ── */}
                    <div className="md:hidden flex flex-col items-center gap-6 px-6 py-10">
                        {/* Icon badge */}
                        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-violet-600/10 border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                            <FileText size={36} className="text-violet-400" />
                        </div>

                        {/* Text */}
                        <div className="text-center space-y-2">
                            <p className="text-base font-semibold text-white/90">
                                Ammar Yaser Babaset — CV
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                Tap below to view or download the full CV. For the best experience, open it in your browser&apos;s PDF viewer.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs">
                            <a
                                href={CV_PATH}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
                            >
                                <Eye size={16} />
                                View CV
                            </a>
                            <a
                                href={CV_PATH}
                                download
                                className="w-full group flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95"
                            >
                                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Bottom action bar */}
                    <div className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-6 py-4">
                        <p className="text-sm text-slate-500">
                            Last updated · March 2026
                        </p>
                        <a
                            href={CV_PATH}
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
