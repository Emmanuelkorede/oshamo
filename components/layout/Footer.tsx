"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { OshamoText } from "@/components/ui/OshamoText";
import { Eyebrow } from "../ui/Eyebrow";
import { BentoCard } from "../ui/BentoCard";
import { Github } from "../ui/SocialIcons";

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
            <Eyebrow className="w-fit">AFRO-FUSION / ALTÉ SOUND</Eyebrow>
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
          <BentoCard>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  01 // Concept Notice
                </span>
                <Eyebrow>Fan-Made</Eyebrow>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                A fan-made digital experience and portfolio project created to showcase modern web design, fluid motion graphics, and visual artist identity for OSHAMO.
              </p>
            </div>
          </BentoCard>

          {/* Card 2: Developer Credits */}
          <BentoCard>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  02 // Engineering
                </span>
                <Eyebrow>Available</Eyebrow>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide text-foreground">
                  Job Emmanuel
                </h3>
                <p className="mt-1 font-mono text-xs text-accent">
                  Full-Stack Developer & Creative Technologist
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted leading-relaxed">
              Crafting high-impact, interactive digital products for music, culture, and creative technology.
            </p>
          </BentoCard>

          {/* Card 3: Connect Links */}
          <BentoCard className="md:col-span-2 lg:col-span-1">
            <span className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              03 // Connect
            </span>
            <ul className="flex flex-col gap-2 font-mono text-xs">
              {[
                { label: "GitHub", href: "https://github.com/Emmanuelkorede", Icon: Github },
                { label: "Email", href: "mailto:emmanuelkorede572@gmail.com", Icon: Mail },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group/link flex items-center justify-between rounded-2xl border border-border/40 bg-surface/50 p-3.5 transition-all duration-300 hover:border-cta/60 hover:bg-surface hover:text-cta"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={16} className="text-muted group-hover/link:text-cta" />
                      <span>{label}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-cta" />
                  </a>
                </li>
              ))}
            </ul>
          </BentoCard>

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