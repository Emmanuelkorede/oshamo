import React from "react";
import { cn } from "@/lib/utils/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  variant?: "pill" | "plain";
}

export function Eyebrow({
  children,
  className,
  dot = true,
  variant = "pill",
}: EyebrowProps) {
  if (variant === "plain") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent font-medium select-none",
          className
        )}
      >
        {dot && (
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        )}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-mono tracking-widest uppercase text-accent backdrop-blur-md shadow-xs select-none",
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}