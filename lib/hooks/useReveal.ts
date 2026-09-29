"use client";

import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

interface UseRevealOptions {
  threshold?: UseInViewOptions["amount"];
  once?: boolean;
  margin?: UseInViewOptions["margin"];
}

export function useReveal(options: UseRevealOptions = {}) {
  const { threshold = 0.1, once = true, margin = "0px 0px -50px 0px" } = options;
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin,
  });

  return { ref, isInView };
}