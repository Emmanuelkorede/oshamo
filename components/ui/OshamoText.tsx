"use client";

import { cn } from "@/lib/utils/cn";

interface OshamoTextProps {
  className?: string;
  showDot?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

export function OshamoText({
  className,
  showDot = true,
  size = "lg",
}: OshamoTextProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-4xl md:text-6xl",
    lg: "text-6xl md:text-8xl",
    xl: "text-7xl md:text-[10rem]",
    hero: "text-8xl md:text-[14rem]",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-baseline select-none font-anton uppercase tracking-wider text-foreground leading-none",
        sizeClasses[size],
        className
      )}
    >
      <span>OSHAMO</span>
      {showDot && (
        <span className="ml-[0.12em] inline-block h-[0.15em] w-[0.15em] rounded-full bg-cta shrink-0" />
      )}
    </div>
  );
}