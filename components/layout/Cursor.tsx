"use client";

import  { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export function Cursor() {
  const isPointerFine = useMediaQuery("(pointer: fine)");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (!isPointerFine) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, [role='button'], .interactive")
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPointerFine, isVisible, cursorX, cursorY]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? "rgba(221, 182, 129, 0.15)" : "rgba(221, 182, 129, 0)",
        borderColor: isHovered ? "#DDB681" : "#C28B5E",
      }}
      transition={{ scale: { duration: 0.15 } }}
      className="pointer-events-none fixed top-0 left-0 z-[100] -ml-3 -mt-3 h-6 w-6 rounded-full border border-accent transition-colors duration-150"
    />
  );
}