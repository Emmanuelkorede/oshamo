"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background"
    >
      {/* Primary Ambient Gradient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-20 h-[450px] w-[450px] rounded-full bg-accent/20 blur-[130px] md:h-[650px] md:w-[650px]"
      />

      {/* Secondary Ambient Accent Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-cta/15 blur-[120px] md:h-[550px] md:w-[550px]"
      />

      {/* Radial Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#252833_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />

      {/* Bottom Gradient Fade to Surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}