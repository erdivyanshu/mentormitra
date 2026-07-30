import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useIsMobile } from './useIsMobile';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface FloatingOptions {
  y?: number;
  duration?: number;
  delay?: number;
  /** Disable float (e.g. when parent handles it). */
  enabled?: boolean;
}

/** Subtle infinite breathe on Y — desktop only, respects reduced motion. */
export const useFloating = <T extends HTMLElement = HTMLElement>(
  options: FloatingOptions = {},
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const { y = 6, duration = 5, delay = 0, enabled = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || reducedMotion || isMobile) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -y,
        duration,
        delay,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, [reducedMotion, isMobile, y, duration, delay, enabled]);

  return ref;
};
