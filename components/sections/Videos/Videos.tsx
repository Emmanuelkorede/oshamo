"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clapperboard } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { VIDEOS } from "@/lib/data/videos";
import { VideoCard } from "@/components/ui/VideoCard";
import { VideoModal } from "@/components/ui/VideoModal";

export function Videos() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Extract the featured video and ensure NO videos are excluded from the grid
  const featuredVideo = VIDEOS.find((v) => v.isFeatured) || VIDEOS[0];
  const gridVideos = VIDEOS.filter((v) => v.id !== featuredVideo.id);

  // State for hero thumbnail fallback
  const [heroImgSrc, setHeroImgSrc] = useState(
    `https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`
  );

  const handleHeroKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveVideoId(featuredVideo.youtubeId);
    }
  };

  return (
    <section
      id="videos"
      className="relative w-full overflow-hidden bg-background py-24 md:py-36 border-t border-border/40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal direction="up" delay={0.1}>
                <Eyebrow className="mb-3">
                    <span className="inline-flex items-center gap-2">
                    <Clapperboard size={14} />
                    <span>CINEMATICS & VISUALS</span>
                    </span>
                </Eyebrow>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-anton text-5xl uppercase tracking-wider text-foreground sm:text-6xl md:text-7xl">
                VISUAL ARCHIVE
              </h2>
            </Reveal>
          </div>
        </div>

        {/* HERO / FEATURED VIDEO */}
        <Reveal direction="up" delay={0.3}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActiveVideoId(featuredVideo.youtubeId)}
            onKeyDown={handleHeroKeyDown}
            className="group relative mb-8 w-full cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-2xl transition-all duration-500 hover:border-accent/80 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {/* Max-res thumbnail for the hero visual */}
            <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
              <Image
                src={heroImgSrc}
                alt={featuredVideo.title}
                fill
                priority
                unoptimized
                onError={() => {
                  setHeroImgSrc(
                    `https://img.youtube.com/vi/${featuredVideo.youtubeId}/hqdefault.jpg`
                  );
                }}
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
            </div>

            {/* Play Button Overlay (Center) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/90 text-background backdrop-blur-xl transition-transform duration-500 group-hover:scale-125 shadow-[0_0_40px_rgba(var(--accent),0.4)]">
                <Play size={32} className="translate-x-1 fill-current" />
              </div>
            </div>

            {/* Title / Info (Bottom Left) */}
            <div className="absolute bottom-0 left-0 flex w-full flex-col p-6 md:p-10 pointer-events-none">
              <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-border/60 bg-card/40 px-3 py-1 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                  Newest Release
                </span>
              </div>
              <h3 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase text-white drop-shadow-lg">
                {featuredVideo.title}
              </h3>
              <p className="mt-2 font-mono text-sm uppercase tracking-widest text-white/80 drop-shadow-md">
                {featuredVideo.artist}
              </p>
            </div>
          </div>
        </Reveal>

        {/* SECONDARY GRID VIDEOS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridVideos.map((video, idx) => (
            <Reveal key={video.id} direction="up" delay={0.2 + 0.1 * idx}>
              <VideoCard video={video} onClick={setActiveVideoId} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Global Video Modal Component */}
      <VideoModal
        isOpen={!!activeVideoId}
        youtubeId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </section>
  );
}