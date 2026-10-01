"use client";

import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

interface ReleaseFlipCardProps {
  isFlipped: boolean;
  embedUrl: string;
  title: string;
}

export function ReleaseFlipCard({ isFlipped, embedUrl, title }: ReleaseFlipCardProps) {
  return (
    <div className="relative w-full h-[352px] [perspective:1200px]">
      <motion.div
        className="relative w-full h-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FRONT SIDE: Spotify Embed Player */}
        <div className="absolute inset-0 h-[352px] w-full rounded-2xl border border-border/80 bg-surface shadow-2xl overflow-hidden [backface-visibility:hidden]">
        <iframe
            title={`Spotify Player - ${title}`}
            src={embedUrl}
            width="100%"
            height="360" // Increased slightly to push any subpixel gap/scrollbar out of bounds
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full rounded-2xl"
        />
        </div>

        {/* BACK SIDE: Story Card (Exact 352px Height, Condensed & Crisp) */}
        <div className="absolute inset-0 h-[352px] w-full rounded-2xl border border-accent/30 bg-card/90 p-6 md:p-7 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {/* Header Tag */}
          <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-accent">
              <Quote size={13} className="text-cta" />
              <span>Behind The Track</span>
            </div>
            <Sparkles size={13} className="text-accent/60" />
          </div>

          {/* Condensed Story Narrative */}
          <div className="my-auto space-y-2.5 font-space text-xs md:text-sm text-foreground/90 leading-relaxed">
            <p className="font-medium text-accent">
              What started as a fictional song about grief became reality after a sudden loss.
            </p>
            <p className="text-muted text-xs md:text-sm">
              Returning to the track meant hearing his own reality inside words written months earlier.
            </p>
          </div>

          {/* Dedicated Closing Dedication */}
          <div className="pt-2.5 border-t border-border/50 flex flex-col text-[10px] font-mono text-accent uppercase tracking-widest gap-0.5">
            <span>FOR YOUR TEARS.</span>
            <span className="text-muted">FOR THOSE WE&apos;VE LOST.</span>
            <span className="text-cta">FOR THOSE STILL CARRYING IT.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}