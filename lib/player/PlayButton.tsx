"use client";

import React from "react";
import { Play, Volume2 } from "lucide-react";
import { Track } from "@/lib/data/tracks";
import { usePlayer } from "@/lib/player/PlayerContext";
import { cn } from "@/lib/utils/cn";

interface PlayButtonProps {
  track: Track;
  variant?: "primary" | "secondary" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function PlayButton({
  track,
  variant = "primary",
  size = "md",
  className,
  label = "Play",
}: PlayButtonProps) {
  const { currentTrack, isMiniPlayerOpen, playTrack } = usePlayer();

  const isPlayingCurrent =
    currentTrack?.id === track.id && isMiniPlayerOpen;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTrack(track);
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        aria-label={`Play ${track.title}`}
        className={cn(
          "flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer",
          isPlayingCurrent
            ? "bg-cta text-background scale-105"
            : "bg-surface border border-border text-foreground hover:border-cta hover:text-cta",
          size === "sm" && "h-8 w-8",
          size === "md" && "h-10 w-10",
          size === "lg" && "h-12 w-12",
          className
        )}
      >
        {isPlayingCurrent ? (
          <Volume2 size={iconSizes[size]} className="animate-pulse" />
        ) : (
          <Play size={iconSizes[size]} className="ml-0.5" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center font-space uppercase tracking-wider transition-all duration-200 cursor-pointer",
        sizeClasses[size],
        variant === "primary" &&
          (isPlayingCurrent
            ? "bg-accent text-background"
            : "bg-cta text-background hover:bg-cta-hover"),
        variant === "secondary" &&
          "bg-surface border border-border text-foreground hover:border-cta hover:text-cta",
        className
      )}
    >
      {isPlayingCurrent ? (
        <>
          <Volume2 size={iconSizes[size]} className="animate-pulse" />
          <span>Now Loaded</span>
        </>
      ) : (
        <>
          <Play size={iconSizes[size]} className="ml-0.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}