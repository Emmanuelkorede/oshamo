"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Globe, Mail } from "lucide-react";
import { OshamoText } from "@/components/ui/OshamoText";

function Github({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/60 bg-surface/50 text-foreground overflow-hidden pt-16 pb-10 backdrop-blur-md">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* TOP ROW: Visual Brand Banner + Back To Top Button */}
        <div className="flex flex-col gap-8 pb-16 border-b border-border/50 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              AFRO-FUSION / ALTÉ SOUND
            </span>
            <OshamoText size="xl" className="tracking-tight" />
          </div>

          {/* Magnetic Back To Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 self-start md:self-end rounded-full border border-border/80 bg-card/60 px-5 py-3 text-xs font-mono uppercase tracking-widest text-foreground backdrop-blur-xl transition-all duration-300 hover:border-cta hover:text-cta"
          >
            <span>Back to top</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-cta group-hover:text-background">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>

        {/* MIDDLE ROW: Bento Grid */}
        <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Project Info */}
          <div className="group flex flex-col justify-between rounded-3xl border border-border/50 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/90">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  01 // Concept Notice
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-mono uppercase text-accent">
                  Unofficial
                </span>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                A fan-made digital experience and portfolio project created to showcase modern web design, fluid motion graphics, and visual artist identity for OSHAMO.
              </p>
            </div>
          </div>

          {/* Card 2: Developer Credits */}
          <div className="group flex flex-col justify-between rounded-3xl border border-border/50 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/90">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  02 // Engineering
                </span>
                <div className="flex items-center gap-1.5 rounded-full border border-cta/30 bg-cta/10 px-2.5 py-0.5 text-[10px] font-mono uppercase text-cta">
                  <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                  Available
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-foreground">
                  Job Emmanuel
                </h3>
                <p className="text-xs font-mono text-accent mt-1">
                  Full-Stack Developer & Creative Technologist
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted leading-relaxed">
              Crafting high-impact, interactive digital products for music, culture, and creative technology.
            </p>
          </div>

          {/* Card 3: Connect Links */}
          <div className="flex flex-col justify-between rounded-3xl border border-border/50 bg-card/40 p-6 md:p-8 backdrop-blur-xl md:col-span-2 lg:col-span-1 transition-all duration-300 hover:border-border/90">
            <span className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              03 // Connect
            </span>
            <ul className="flex flex-col gap-2 font-mono text-xs">
              <li>
                <a
                  href="https://github.com/Emmanuelkorede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-2xl border border-border/40 bg-surface/50 p-3.5 transition-all duration-300 hover:border-cta/60 hover:bg-surface hover:text-cta"
                >
                  <div className="flex items-center gap-3">
                    <Github size={16} className="text-muted group-hover/link:text-cta" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-cta" />
                </a>
              </li>

              <li>
                <a
                  href="https://jobexe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-2xl border border-border/40 bg-surface/50 p-3.5 transition-all duration-300 hover:border-cta/60 hover:bg-surface hover:text-cta"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-muted group-hover/link:text-cta" />
                    <span>Portfolio</span>
                  </div>
                  <ArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-cta" />
                </a>
              </li>

              <li>
                <a
                  href="mailto:emmanuelkorede572@gmail.com"
                  className="group/link flex items-center justify-between rounded-2xl border border-border/40 bg-surface/50 p-3.5 transition-all duration-300 hover:border-cta/60 hover:bg-surface hover:text-cta"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-muted group-hover/link:text-cta" />
                    <span>Email</span>
                  </div>
                  <ArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-cta" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Legal & Location */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs font-mono text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} OSHAMO. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-[11px]">
              Lagos → London
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}