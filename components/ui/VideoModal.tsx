"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  youtubeId: string | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, youtubeId, onClose }: VideoModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && youtubeId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl md:p-12"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-all duration-300 hover:scale-110 hover:bg-cta hover:text-background hover:border-transparent"
          >
            <X size={24} />
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-border/60 bg-surface shadow-2xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}