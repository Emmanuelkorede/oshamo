"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Music } from "lucide-react";
import { usePlayer } from "@/lib/player/PlayerContext";

export function MiniPlayer() {
  const { currentTrack, isMiniPlayerOpen, closeMiniPlayer } = usePlayer();

  if (!currentTrack) return null;

  const embedUrl = `https://open.spotify.com/embed/${currentTrack.type}/${currentTrack.spotifyId}?utm_source=generator&theme=0`;

  return (
    <AnimatePresence>
      {isMiniPlayerOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 left-4 z-40 mx-auto max-w-xl md:left-auto md:right-6 md:w-[480px]"
        >
          <div className="relative rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-md">
            {/* Header / Controls */}
            <div className="mb-2 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 overflow-hidden text-xs font-mono uppercase tracking-wider text-accent">
                <Music size={14} className="shrink-0 animate-pulse" />
                <span className="truncate">Active Embed — {currentTrack.title}</span>
              </div>
              <button
                onClick={closeMiniPlayer}
                aria-label="Close player"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted hover:border-accent hover:text-foreground transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Spotify Embed Iframe */}
            <div className="overflow-hidden rounded-xl">
              <iframe
                title={`Spotify Player - ${currentTrack.title}`}
                src={embedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block w-full bg-background"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}