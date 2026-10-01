"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="flex flex-col items-start lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <Eyebrow className="mb-4">
                AFRO-FUSION / ALTÉ — LAGOS TO LONDON
              </Eyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="font-display text-7xl tracking-wider text-foreground sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.88] uppercase mb-6">
                OSHAM0
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="max-w-xl text-base text-muted md:text-lg leading-relaxed mb-8">
                Unfiltered sonic raw energy bridging West African roots with the global alté movement. Direct from Lagos to London.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="#latest-release" variant="primary" size="lg">
                  Listen to Latest
                </Button>
                <Button href="#music" variant="outline" size="lg">
                  Explore Music
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Artist Image Frame & Floating Chips */}
          <div className="relative w-full lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="left" delay={0.3} className="w-full max-w-md lg:max-w-none">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/5]">
                
                {/* Backlight Glow Frame */}
                <div aria-hidden="true" className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-accent/40 via-cta/30 to-transparent blur-xl opacity-70" />

                {/* Masked Image Container */}
                <div className="clip-cut-corner relative h-full w-full overflow-hidden border border-border bg-card/80">
                  <Image
                    src="/oshamo.jpg"
                    alt="OSHAM0"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Floating Metadata Chip - Top Right */}
                <div className="absolute -top-4 -right-4 z-20 border border-border bg-surface/90 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                  <span className="text-[10px] font-mono tracking-widest text-cta uppercase">
                    LAGOS → LONDON
                  </span>
                </div>

                {/* Floating Metadata Chip - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 z-20 border border-border bg-surface/90 px-4 py-2 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-foreground uppercase">
                    LATEST: WHY YOU LYING
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}