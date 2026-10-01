"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuLinks } from "@/lib/utils/menuLinks";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}


export function Menu({ isOpen, onClose }: MenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-background p-8 pt-28 md:p-16"
        >
          {/* Main Links List */}
          <nav className="flex flex-col gap-4">
            {menuLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-anton text-4xl uppercase tracking-wider text-foreground hover:text-cta transition-colors sm:text-5xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer details inside menu */}
          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-mono tracking-widest text-muted uppercase">
              OSHAM0 — LAGOS TO LONDON
            </div>
            <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-cta">
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta-hover transition-colors"
              >
                Spotify ↗
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta-hover transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cta-hover transition-colors"
              >
                YouTube ↗
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}