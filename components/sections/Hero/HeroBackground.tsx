"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background"
    >
      {/* Primary Animated Mesh Glow (Accent Color) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[150px] md:h-[550px] md:w-[750px]"
      />

      {/* Secondary Ambient Accent Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-10 -left-10 h-[350px] w-[350px] rounded-full bg-cta/15 blur-[120px] md:h-[450px] md:w-[450px]"
      />

      {/* Subtle Radial Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#252833_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}