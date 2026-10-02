"use client";

import { useState } from "react";
import { Music2, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TRACKS } from "@/lib/data/tracks";

export function Music() {
  const [filter, setFilter] = useState<"all" | "featured">("featured");

  // Order tracks so highlights (isFeatured) come first
  const sortedTracks = [...TRACKS].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });

  const filteredTracks =
    filter === "featured"
      ? sortedTracks.filter((track) => track.isFeatured)
      : sortedTracks;

  return (
    <section
      id="discography"
      className="relative w-full overflow-hidden bg-background py-24 md:py-36 border-t border-border/40"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-32 h-[450px] w-[450px] rounded-full bg-cta/10 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Eyebrow className="mb-3">DISCOGRAPHY & DROPS</Eyebrow>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-anton text-5xl uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl">
                CATALOGUE
              </h2>
            </Reveal>
          </div>

          {/* Filter Controls */}
          <Reveal direction="up" delay={0.3}>
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-md">
              <button
                onClick={() => setFilter("featured")}
                className={`rounded-xl px-4 py-2 font-mono text-xs uppercase transition-all duration-200 cursor-pointer ${
                  filter === "featured"
                    ? "bg-accent text-background font-bold shadow-md"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Key Highlights
              </button>
              <button
                onClick={() => setFilter("all")}
                className={`rounded-xl px-4 py-2 font-mono text-xs uppercase transition-all duration-200 cursor-pointer ${
                  filter === "all"
                    ? "bg-accent text-background font-bold shadow-md"
                    : "text-muted hover:text-foreground"
                }`}
              >
                All Tracks ({TRACKS.length})
              </button>
            </div>
          </Reveal>
        </div>

        {/* Tracks Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredTracks.map((track, idx) => {
            const isHighlight = track.isFeatured;
            // Force 152 height for all cards when viewing 'all' filter
            const embedHeight = filter === "featured" && isHighlight ? "352" : "152";

            return (
              <Reveal key={track.id} direction="up" delay={0.1 * (idx % 4)}>
                <div
                  className={`group relative flex flex-col justify-between rounded-3xl border p-5 backdrop-blur-xl transition-all duration-300 shadow-xl ${
                    filter === "featured" && isHighlight
                      ? "border-accent/80 bg-card/80"
                      : "border-border/70 bg-card/50 hover:border-accent/60"
                  }`}
                >
                  {/* Track Metadata Header */}
                  <div className="mb-4 flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Music2 size={16} className="shrink-0 text-accent" />
                      <span className="truncate font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                        {track.title}
                      </span>
                    </div>

                    {isHighlight && (
                      <span className="flex items-center gap-1 rounded-full border border-cta/30 bg-cta/10 px-2.5 py-0.5 font-mono text-[10px] uppercase text-cta">
                        <Sparkles size={10} />
                        Highlight
                      </span>
                    )}
                  </div>

                  {/* Direct Spotify Embed Player */}
                  <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface">
                    <iframe
                      title={`Spotify Player - ${track.title}`}
                      src={track.embedUrl}
                      width="100%"
                      height={embedHeight}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="block w-full rounded-2xl"
                    />
                  </div>

                  {/* Subtext info */}
                  <div className="mt-3 flex items-center justify-between px-1 font-mono text-[11px] text-muted">
                    <span>Artist: {track.artist}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}