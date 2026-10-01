import React from "react";
import { cn } from "@/lib/utils/cn";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function BentoCard({
  children,
  className,
  hoverEffect = true,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-3xl border border-border/50 bg-card/40 p-6 md:p-8 backdrop-blur-xl transition-all duration-300",
        hoverEffect && "hover:border-border/90",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}