"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background pt-24 pb-12 md:pt-32 md:pb-16 border-b border-border/40"
    >
      {/* Background Animated Layer */}
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 sm:px-6 md:px-12">
        
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Reveal direction="up" delay={0.1}>
          <Eyebrow className="mb-4">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              <span>FUJI-FUSION / AFROBEATS</span>
            </span>
          </Eyebrow>
        </Reveal>
        
          <Reveal direction="down" delay={0.2}>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-muted">
                LAGOS ⇄ LONDON
              </span>
            </div>
          </Reveal>
        </div>

        {/* Center Stage: Mobile Kept 100% Intact, Desktop Scaled Down */}
        <div className="relative my-auto flex w-full items-center justify-center py-12 sm:py-16 md:py-20">
          
          {/* Layer 1: Solid Background Typography */}
          <h1 className="select-none text-center font-anton text-[22vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] uppercase leading-none tracking-[0.22em] text-foreground/95 pl-[0.22em]">
            OSHAMO
          </h1>

          {/* Layer 2: Artist Cutout (Proportional Desktop Scale) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative h-[135%] sm:h-[130%] md:h-[125%] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[650px]">
              <Image
                src="/oshamo-second.png"
                alt="oSHAMO"
                fill
                priority
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 580px, 650px"
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              />
            </div>
          </div>

          {/* Layer 3: Stroked Outline Typography (Front Overlay) */}
          <h1
            aria-hidden="true"
            className="pointer-events-none absolute z-20 select-none text-center font-anton text-[22vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] uppercase leading-none tracking-[0.22em] pl-[0.22em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)]"
          >
            OSHAMO
          </h1>
        </div>

        {/* Bottom Bar: Action CTAs */}
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
          <Reveal direction="up" delay={0.3} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href="#latest-release" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Listen to Latest
              </Button>
              <Button href="#music" variant="outline" size="lg" className="w-full sm:w-auto text-center">
                Explore Catalogue
              </Button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}