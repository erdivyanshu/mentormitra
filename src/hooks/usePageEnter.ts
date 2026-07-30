import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Soft page-enter fade on mount. Attach to page root.
 * Hero content is expected to run its own timeline; this only fades the shell.
 */
export const usePageEnter = <T extends HTMLElement = HTMLElement>(
  duration = 0.55,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration, ease: 'power1.out' },
      );
    }, el);

    return () => ctx.revert();
  }, [duration, reducedMotion]);

  return ref;
};
