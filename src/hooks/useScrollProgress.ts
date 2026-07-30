import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Thin top progress bar driven by scroll position.
 * Attach ref to the fill element (width via scaleX).
 */
export const useScrollProgress = <T extends HTMLElement = HTMLElement>(): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });

    if (reducedMotion) {
      const update = () => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        el.style.transform = `scaleX(${progress})`;
      };
      update();
      window.addEventListener('scroll', update, { passive: true });
      return () => window.removeEventListener('scroll', update);
    }

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return ref;
};
