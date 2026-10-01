"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRightLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TIMELINE } from "@/lib/data/timeline";
import { BentoCard } from "@/components/ui/BentoCard";

export function Story() {
  // Default to the last era in the timeline array safely
  const defaultIdx = TIMELINE.length > 0 ? TIMELINE.length - 1 : 0;
  const [activeIdx, setActiveIdx] = useState<number>(defaultIdx);

  const activeTimeline = TIMELINE[activeIdx] || TIMELINE[0];

  return (
    <section
      id="story"
      className="relative w-full overflow-hidden bg-background py-24 md:py-36 border-t border-border/40"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-32 h-[450px] w-[450px] rounded-full bg-cta/10 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Eyebrow className="mb-3">SONIC ARCHITECTURE & ORIGINS</Eyebrow>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-anton text-5xl uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl">
                FUJI FOR THE NEW GENERATION
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="flex items-center gap-3 rounded-full border border-border/80 bg-card/60 px-5 py-2.5 backdrop-blur-xl shadow-xs">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ArrowRightLeft size={14} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  FROM LAGOS TO THE WORLD
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bento Summary Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          
          {/* Card 1: Sound Blueprint */}
          <Reveal direction="up" delay={0.2} className="h-full">
            <BentoCard className="flex h-full flex-col justify-between border-border/60 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/90">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  01 // SOUND BLUEPRINT
                </span>
                <h3 className="mt-3 font-anton text-2xl uppercase tracking-wide text-foreground leading-tight">
                  FUJI × AFROBEATS × AMAPIANO
                </h3>
                <p className="mt-3 font-space text-xs text-muted leading-relaxed">
                  oSHAMO&apos;s sound brings the rhythmic language of Yoruba Fuji into conversation with modern Afrobeats, Amapiano and street culture.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {["Fuji", "Afrobeats", "Amapiano", "Hip-Hop"].map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-border/80 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          {/* Card 2: Sonic Signature & Roots */}
          <Reveal direction="up" delay={0.3} className="h-full">
            <BentoCard className="flex h-full flex-col justify-between border-border/60 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/90">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  02 // SONIC SIGNATURE
                </span>
                <h3 className="mt-3 font-anton text-2xl uppercase tracking-wide text-foreground leading-tight">
                  ROOTS × REINVENTION
                </h3>
                <p className="mt-3 font-space text-xs text-muted leading-relaxed">
                  After moving from Lagos to the UK at 16, oSHAMO spent time finding his sound between two cultures. His eventual return to Fuji became a way of reconnecting with where he came from while pushing the genre somewhere new.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                {["Yoruba", "English", "Pidgin"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          {/* Card 3: Global Reach & Metrics */}
          <Reveal direction="up" delay={0.4} className="h-full">
            <BentoCard className="flex h-full flex-col justify-between border-border/60 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-border/90">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  03 // GLOBAL REACH
                </span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-anton text-3xl text-foreground">25M+</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      GLOBAL STREAMS
                    </p>
                  </div>
                  <div>
                    <p className="font-anton text-3xl text-accent">500K+</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      MONTHLY LISTENERS
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/10 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-accent flex items-center gap-2">
                <Sparkles size={13} className="text-cta shrink-0" />
                <span>SHAZAM FAST FORWARD &apos;26</span>
              </div>
            </BentoCard>
          </Reveal>

        </div>

        {/* Visual Timeline Section */}
        <Reveal direction="up" delay={0.4}>
          <div className="rounded-3xl border border-border/70 bg-card/50 p-6 md:p-10 backdrop-blur-2xl shadow-xl">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-border/40 pb-6 md:flex-row md:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  TIMELINE ARCHIVE
                </span>
                <h3 className="font-anton text-3xl uppercase tracking-wide text-foreground">
                  The Journey So Far
                </h3>
              </div>

              {/* Year Navigation Capsule Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {TIMELINE.map((item, idx) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase transition-all duration-300 cursor-pointer ${
                      activeIdx === idx
                        ? "bg-accent text-background font-bold shadow-md scale-105"
                        : "bg-surface/80 border border-border/80 text-muted hover:border-accent/60 hover:text-foreground"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Display Card */}
            <AnimatePresence mode="wait">
              {activeTimeline && (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-7">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                        {activeTimeline.icon}
                        {activeTimeline.tag}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {activeTimeline.subtitle}
                      </span>
                    </div>

                    <h4 className="font-anton text-3xl uppercase tracking-wide text-foreground sm:text-4xl mb-4">
                      {activeTimeline.title}
                    </h4>

                    <p className="font-space text-sm md:text-base text-muted leading-relaxed mb-6 max-w-2xl">
                      {activeTimeline.description}
                    </p>

                    {activeTimeline.highlight && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 font-mono text-xs text-cta">
                        <Sparkles size={14} />
                        <span>{activeTimeline.highlight}</span>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="w-full rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-md">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                        ERA METRIC // {activeTimeline.year}
                      </p>
                      <p className="font-anton text-2xl uppercase tracking-wider text-foreground">
                        {activeTimeline.subtitle}
                      </p>

                      <div className="mt-6 border-t border-border/40 pt-4 flex justify-between items-center text-xs font-mono">
                        <span className="text-muted">Status</span>
                        <span className="text-accent uppercase font-bold">Archived Milestone</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </Reveal>

      </div>
    </section>
  );
}