"use client";

import React, { createContext, useContext, useState } from "react";
import { Track } from "@/lib/data/tracks";

interface PlayerContextType {
  currentTrack: Track | null;
  isMiniPlayerOpen: boolean;
  playTrack: (track: Track) => void;
  closeMiniPlayer: () => void;
  toggleMiniPlayer: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isMiniPlayerOpen, setIsMiniPlayerOpen] = useState(false);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsMiniPlayerOpen(true);
  };

  const closeMiniPlayer = () => {
    setIsMiniPlayerOpen(false);
  };

  const toggleMiniPlayer = () => {
    setIsMiniPlayerOpen((prev) => !prev);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isMiniPlayerOpen,
        playTrack,
        closeMiniPlayer,
        toggleMiniPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}