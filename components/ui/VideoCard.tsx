"use client";

import React from "react";
import { Play } from "lucide-react";
import type { Video } from "@/lib/data/videos";
import Image from "next/image";

interface VideoCardProps {
  video: Video;
  onClick: (youtubeId: string) => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(video.youtubeId);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(video.youtubeId)}
      onKeyDown={handleKeyDown}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 transition-all duration-300 hover:border-accent/60 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-all duration-300 group-hover:bg-background/0">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-background/80 text-foreground backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-transparent group-hover:text-background shadow-xl">
            <Play size={20} className="translate-x-0.5 fill-current" />
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex flex-col gap-1 p-5">
        <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground line-clamp-1">
          {video.title}
        </h4>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          {video.artist}
        </span>
      </div>
    </div>
  );
}