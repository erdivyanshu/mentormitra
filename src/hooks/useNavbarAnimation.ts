import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface NavbarAnimationOptions {
  /** Scroll Y at which glass styles fully engage. */
  threshold?: number;
  compactPadding?: string;
  expandedPadding?: string;
}

/**
 * Transparent → glassmorphism navbar on scroll.
 * Expects the header element; toggles `data-scrolled="true"`.
 */
export const useNavbarAnimation = <T extends HTMLElement = HTMLElement>(
  options: NavbarAnimationOptions = {},
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { threshold = 24 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      const scrolled = window.scrollY > threshold;
      el.dataset.scrolled = scrolled ? 'true' : 'false';
    };

    apply();

    if (reducedMotion) {
      window.addEventListener('scroll', apply, { passive: true });
      return () => window.removeEventListener('scroll', apply);
    }

    const ctx = gsap.context(() => {
      const onScroll = () => apply();
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => window.removeEventListener('scroll', onScroll);
    }, el);

    return () => ctx.revert();
  }, [threshold, reducedMotion]);

  return ref;
};
