"use client";

import  { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock background scrolling while loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 1;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999] flex flex-col justify-between bg-background p-8 md:p-12"
        >
          {/* Top Brand Marker */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted">
            <span>OSHAM0 — LAGOS → LONDON</span>
            <span>2026 OFFICIAL</span>
          </div>

          {/* Center Graphic Title */}
          <div className="my-auto flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-anton text-6xl tracking-wider text-foreground sm:text-8xl md:text-9xl"
            >
              OSHAM0
            </motion.h1>
            <p className="mt-2 text-xs font-mono tracking-widest text-accent uppercase">
              AFRO-FUSION / ALTÉ
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between border-t border-border pt-4">
            <div className="h-1 w-32 overflow-hidden bg-surface md:w-48">
              <motion.div
                className="h-full bg-cta"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <span className="font-anton text-4xl text-cta md:text-5xl">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}