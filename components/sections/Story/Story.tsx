"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Sparkles,  ArrowRightLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TIMELINE } from "@/lib/data/timeline";
import { BentoCard } from "@/components/ui/BentoCard";

export function Story() {
  const [activeIdx, setActiveIdx] = useState<number>(5); // Default to current 2026 era

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
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-3 backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <ArrowRightLeft size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  CURRENT LOCATION ERA
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  LAGOS ⇄ LONDON
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bento Summary Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
        
        {/* Card 1: Sound DNA */}
        <Reveal direction="up" delay={0.2} className="h-full">
            <BentoCard className="h-full border-border/60">
            <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                01 // SOUND BLUEPRINT
                </span>
                <h3 className="mt-3 font-anton text-2xl uppercase tracking-wide text-foreground">
                Fuji × Afrobeats × Amapiano
                </h3>
                <p className="mt-3 text-xs text-muted leading-relaxed">
                A high-energy fusion blending traditional Yoruba Fuji percussion with Afrobeats grooves, heavy Amapiano log drums, and street hip-hop delivery.
                </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
                {["Fuji", "Afrobeats", "Amapiano", "Hip-Hop"].map((genre) => (
                <span
                    key={genre}
                    className="rounded-full border border-border/80 bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground"
                >
                    {genre}
                </span>
                ))}
            </div>
            </BentoCard>
        </Reveal>

        {/* Card 2: Voice & Identity */}
        <Reveal direction="up" delay={0.3} className="h-full">
            <BentoCard className="h-full border-border/60">
            <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                02 // SONIC SIGNATURE
                </span>
                <h3 className="mt-3 font-anton text-2xl uppercase tracking-wide text-foreground">
                Distinct Bass & Narrative
                </h3>
                <p className="mt-3 text-xs text-muted leading-relaxed">
                Renowned for his unmistakable baritone bass voice, oSHAMO blends Yoruba, English, and Nigerian Pidgin into raw cultural anthems.
                </p>
            </div>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-cta">
                <span className="h-2 w-2 rounded-full bg-cta animate-pulse" />
                <span>Signed to emPawa Africa</span>
            </div>
            </BentoCard>
        </Reveal>

        {/* Card 3: Metrics & Impact */}
        <Reveal direction="up" delay={0.4} className="h-full">
            <BentoCard className="h-full border-border/60">
            <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                03 // GLOBAL METRICS
                </span>
                <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                    <p className="font-anton text-3xl text-foreground">25M+</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    Global Streams
                    </p>
                </div>
                <div>
                    <p className="font-anton text-3xl text-accent">500K+</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    Monthly Spotify
                    </p>
                </div>
                </div>
            </div>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 px-3.5 py-2 font-mono text-[11px] text-accent">
                Shazam Fast Forward 2026 Artist
            </div>
            </BentoCard>
        </Reveal>

        </div>

        {/* Visual Timeline Section */}
        <Reveal direction="up" delay={0.4}>
          <div className="rounded-3xl border border-border/80 bg-card/60 p-6 md:p-10 backdrop-blur-2xl">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-border/40 pb-6 md:flex-row md:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  TIMELINE ARCHIVE
                </span>
                <h3 className="font-anton text-3xl uppercase tracking-wide text-foreground">
                  The Journey So Far
                </h3>
              </div>

              {/* Year Navigation Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {TIMELINE.map((item, idx) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-xl px-3 py-1.5 font-mono text-xs uppercase transition-all duration-200 cursor-pointer ${
                      activeIdx === idx
                        ? "bg-accent text-background font-bold shadow-lg scale-105"
                        : "bg-surface border border-border text-muted hover:border-accent hover:text-foreground"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Timeline Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                      {TIMELINE[activeIdx].icon}
                      {TIMELINE[activeIdx].tag}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {TIMELINE[activeIdx].subtitle}
                    </span>
                  </div>

                  <h4 className="font-anton text-3xl uppercase tracking-wide text-foreground sm:text-4xl mb-4">
                    {TIMELINE[activeIdx].title}
                  </h4>

                  <p className="text-sm md:text-base text-muted leading-relaxed mb-6 max-w-2xl">
                    {TIMELINE[activeIdx].description}
                  </p>

                  {TIMELINE[activeIdx].highlight && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-cta">
                      <Sparkles size={14} />
                      <span>{TIMELINE[activeIdx].highlight}</span>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="w-full rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                      ERA METRIC // {TIMELINE[activeIdx].year}
                    </p>
                    <p className="font-anton text-2xl uppercase tracking-wider text-foreground">
                      {TIMELINE[activeIdx].subtitle}
                    </p>

                    <div className="mt-6 border-t border-border/40 pt-4 flex justify-between items-center text-xs font-mono">
                      <span className="text-muted">Status</span>
                      <span className="text-accent uppercase font-bold">Archived Milestone</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </Reveal>

      </div>
    </section>
  );
}