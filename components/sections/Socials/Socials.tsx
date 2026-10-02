"use client";

import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SOCIAL_LINKS } from "@/lib/data/SocialLinks";

export function Socials() {
  return (
    <section
      id="socials"
      className="relative w-full overflow-hidden bg-background py-24 md:py-36 border-t border-border/40"
    >
      {/* Background Accent Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-accent/5 blur-[180px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Reveal direction="up" delay={0.1}>
            <Eyebrow className="mb-4">DIGITAL FOOTPRINT</Eyebrow>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="font-anton text-5xl uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl">
              JOIN THE COMMUNITY
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-6 max-w-lg font-mono text-sm text-muted">
              Connect directly across all platforms. Tap in for behind-the-scenes, snippets, and live updates.
            </p>
          </Reveal>
        </div>

        {/* Social Grid: 2 columns on mobile, scaling up to 5 on xl screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {SOCIAL_LINKS.map((social, idx) => (
            <Reveal
              key={social.platform}
              direction="up"
              delay={0.1 * (idx + 1)}
              className="h-full"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit oSHAMO on ${social.platform}`}
                className="group relative flex h-full min-h-[170px] sm:min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card/40 p-4 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:bg-surface/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {/* Massive Background Icon (Faded) */}
                <social.Icon
                  size={120}
                  className="absolute -bottom-8 -right-8 text-border/40 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent/10"
                />

                {/* Top: Icon & Arrow */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-border/80 bg-surface/50 text-muted transition-colors duration-500 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:text-accent">
                    <social.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </div>

                {/* Bottom: Platform & Handle */}
                <div className="relative z-10 mt-6 sm:mt-12 flex flex-col gap-0.5 sm:gap-1">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted transition-colors duration-300 group-hover:text-accent/80">
                    {social.platform}
                  </span>
                  <span className="font-anton text-base sm:text-xl tracking-wide text-foreground transition-colors duration-300 truncate">
                    {social.handle}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}