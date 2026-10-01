"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OshamoText } from "@/components/ui/OshamoText";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Fast 900ms exit trigger
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 900);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background pointer-events-none"
        >
          {/* Main Title Container with Light Sweep Overlay */}
          <div className="relative overflow-hidden px-6 py-2">
            {/* Immediate Text Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <OshamoText size="xl" />
            </motion.div>

            {/* Light / Shimmer Beam Sweep Across Text */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-cta/70 to-transparent skew-x-12 mix-blend-overlay pointer-events-none"
            />
          </div>

          {/* Minimal Horizon Glow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cta/50 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}