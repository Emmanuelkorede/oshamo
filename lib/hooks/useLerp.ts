"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Linear Interpolation utility function
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

interface UseLerpOptions {
  factor?: number;
  precision?: number;
}

/**
 * Smoothly interpolates a number state towards a target value frame-by-frame.
 */
export function useLerp(targetValue: number, options: UseLerpOptions = {}) {
  const { factor = 0.1, precision = 0.001 } = options;
  const [currentValue, setCurrentValue] = useState(targetValue);
  const currentRef = useRef(targetValue);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const diff = targetValue - currentRef.current;

      if (Math.abs(diff) > precision) {
        currentRef.current = lerp(currentRef.current, targetValue, factor);
        setCurrentValue(currentRef.current);
        rafId.current = requestAnimationFrame(update);
      } else {
        currentRef.current = targetValue;
        setCurrentValue(targetValue);
        rafId.current = null;
      }
    };

    rafId.current = requestAnimationFrame(update);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [targetValue, factor, precision]);

  return currentValue;
}