"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, select, [role='button'], .group")
      );

      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta shadow-sm shadow-cta/50"
      />

      {/* Transparent Trailing Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? "var(--color-cta)" : "rgba(221, 182, 129, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cta/40 bg-transparent transition-colors duration-200"
      />
    </div>
  );
}