"use client";

import { Play } from "lucide-react";
import type { Video } from "@/lib/data/videos";
import Image from "next/image";

interface VideoCardProps {
  video: Video;
  onClick: (youtubeId: string) => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  // Using hqdefault as it's universally available for all YouTube videos
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div
      onClick={() => onClick(video.youtubeId)}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/40 transition-all duration-300 hover:border-accent/60 shadow-lg"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
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