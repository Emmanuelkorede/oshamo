"use client";

import { Sparkles, ExternalLink, Play } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TRACKS } from "@/lib/data/tracks";

export function LatestRelease() {
  const latestTrack =
    TRACKS.find((t) => t.id === "for-your-tears") || TRACKS[0];

  return (
    <section
      id="latest-release"
      className="relative w-full overflow-hidden bg-background py-20 md:py-32 border-t border-border/40"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-accent/15 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Eyebrow className="mb-2">OFFICIAL DROP</Eyebrow>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-anton text-5xl uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl">
                LATEST RELEASE
              </h2>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
              <Sparkles size={14} className="animate-spin" />
              <span>Out Now Everywhere</span>
            </div>
          </Reveal>
        </div>

        {/* Hero Release Card */}
        <Reveal direction="up" delay={0.3}>
          <div className="relative rounded-3xl border border-border/70 bg-card/60 p-6 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              
              {/* Left Side: Track Info */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                      SINGLE
                    </span>
                    <span className="font-mono text-xs text-muted">
                      2026
                    </span>
                  </div>

                  <h3 className="font-anton text-4xl uppercase tracking-wide text-foreground sm:text-5xl md:text-6xl leading-tight mb-2">
                    {latestTrack.title}
                  </h3>

                  <p className="font-mono text-base text-accent mb-6">
                    {latestTrack.artist}
                  </p>

                  <p className="text-sm text-muted leading-relaxed max-w-lg mb-8">
                    An emotional afro-fusion anthem blending soulful alté melodies, rhythmic percussion, and raw narrative storytelling.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://open.spotify.com/track/${latestTrack.spotifyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-mono text-xs uppercase tracking-wider text-background hover:bg-cta-hover transition-colors font-semibold"
                  >
                    <Play size={14} />
                    <span>Open in Spotify</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Right Side: Direct Embedded Player */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-xl">
                  <iframe
                    title={`Spotify Player - ${latestTrack.title}`}
                    src={latestTrack.embedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block w-full rounded-2xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}