import React from "react";
import { cn } from "@/lib/utils/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function Eyebrow({ children, className, dot = true }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent font-semibold",
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