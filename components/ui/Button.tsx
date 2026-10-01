"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  external,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-mono rounded-full uppercase tracking-wider transition-all duration-300 ease-out select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]";

  const variants = {
    primary:
      "bg-cta text-background font-bold shadow-md shadow-cta/20 hover:shadow-lg hover:shadow-cta/35 hover:bg-cta-hover hover:scale-[1.02]",
    secondary:
      "bg-card/70 text-foreground border border-border/80 backdrop-blur-md hover:border-cta/60 hover:bg-surface hover:text-cta shadow-xs hover:scale-[1.02]",
    outline:
      "bg-transparent text-foreground border border-border/70 hover:border-cta hover:text-cta backdrop-blur-xs hover:bg-cta/5 hover:scale-[1.02]",
    ghost:
      "bg-transparent text-muted hover:text-foreground hover:bg-surface/60 rounded-full",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-xs px-6 py-3 gap-2.5",
    lg: "text-sm px-8 py-4 gap-3 font-bold",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}