"use client";

import Image from "next/image";
import { Sparkles, Music2 } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { Reveal } from "@/components/ui/Reveal";
import { OshamoText } from "@/components/ui/OshamoText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
    >
      {/* Interactive Canvas / Graphic Background */}
      <HeroBackground />

      {/* Ambient Radial Mesh Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-cta/15 blur-[160px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="flex flex-col items-start lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <Eyebrow className="mb-4">
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span>FUJI-FUSION / AFROBEATS</span>
                </span>
              </Eyebrow>
            </Reveal>

            {/* Imported oSHAMO Branding Component */}
            <Reveal direction="up" delay={0.2} className="w-full">
              <div className="mb-6 w-full">
                <OshamoText />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="max-w-xl text-base text-muted md:text-lg leading-relaxed mb-8">
                Unfiltered sonic raw energy bridging West African roots with modern global rhythms. Direct from the heart of Lagos to the streets of London.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="#latest-release" variant="primary" size="lg">
                  Listen to Latest
                </Button>
                <Button href="#music" variant="outline" size="lg">
                  Explore Catalogue
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glassmorphic Artist Card & Floating Badges */}
          <div className="relative w-full lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="left" delay={0.3} className="w-full max-w-md lg:max-w-none">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/5]">
                
                {/* Backlight Glow Aura */}
                <div 
                  aria-hidden="true" 
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent/30 via-cta/20 to-transparent blur-2xl opacity-80" 
                />

                {/* Glass Container Image Frame */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-accent/60 group">
                  <Image
                    src="/oshamo.png"
                    alt="oSHAMO"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
                </div>

                {/* Floating Badge - Top Right */}
                <div className="absolute -top-4 -right-4 z-20 rounded-2xl border border-border/80 bg-surface/90 px-4 py-2 backdrop-blur-xl shadow-xl">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cta">
                    LAGOS ⇄ LONDON
                  </span>
                </div>

                {/* Floating Badge - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 z-20 rounded-2xl border border-border/80 bg-surface/90 px-4 py-2.5 backdrop-blur-xl shadow-xl flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                    <Music2 size={12} className="text-accent" />
                    <span>LATEST: FOR YOUR TEARS</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}