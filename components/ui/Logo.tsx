"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  const letters = "OSHAMO".split("");

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "group relative flex items-center font-anton text-2xl uppercase tracking-widest text-foreground",
        className
      )}
    >
      <div className="flex">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block transition-colors duration-300 group-hover:text-cta"
            initial={{ y: 0 }}
            whileHover={{
              y: -4,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: i * 0.03, // Creates a wave effect
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-accent transition-colors duration-300 group-hover:bg-cta" />
    </Link>
  );
}