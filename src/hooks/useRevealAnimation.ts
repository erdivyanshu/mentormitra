import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useIsMobile } from './useIsMobile';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface RevealOptions {
  /** Child selector within the container. Defaults to `[data-reveal]`. */
  childSelector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  scale?: number;
  delay?: number;
  start?: string;
  /** If true, animate the container itself when no children match. */
  animateSelf?: boolean;
}

/**
 * Scroll-triggered fade + rise reveal. Plays once.
 * Marks targets with opacity/transform only.
 */
export const useRevealAnimation = <T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {},
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const {
    childSelector = '[data-reveal]',
    y = 40,
    duration = 0.9,
    stagger = 0.1,
    scale,
    delay = 0,
    start = 'top 85%',
    animateSelf = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.querySelectorAll(childSelector).forEach((node) => {
        (node as HTMLElement).style.opacity = '1';
        (node as HTMLElement).style.transform = 'none';
      });
      el.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      const children = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll(childSelector),
      );
      const targets = children.length > 0 ? children : animateSelf ? [el] : [];

      if (targets.length === 0) return;

      const fromVars: gsap.TweenVars = {
        opacity: 0,
        y: isMobile ? Math.min(y, 24) : y,
      };
      if (scale != null) fromVars.scale = scale;

      gsap.set(targets, fromVars);

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: scale != null ? 1 : undefined,
        duration: isMobile ? Math.min(duration, 0.7) : duration,
        stagger: isMobile ? Math.min(stagger, 0.06) : stagger,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [
    reducedMotion,
    isMobile,
    childSelector,
    y,
    duration,
    stagger,
    scale,
    delay,
    start,
    animateSelf,
  ]);

  return ref;
};
