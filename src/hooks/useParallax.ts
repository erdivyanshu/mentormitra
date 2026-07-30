import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useIsMobile } from './useIsMobile';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface ParallaxOptions {
  /** Max movement in px (clamped 5–12 recommended). */
  strength?: number;
  /** Child selector for layered depth. Uses `data-parallax` depth attr (0–1). */
  childSelector?: string;
}

/** Soft mouse-follow parallax. Disabled on mobile / reduced motion. */
export const useParallax = <T extends HTMLElement = HTMLElement>(
  options: ParallaxOptions = {},
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const { strength = 10, childSelector = '[data-parallax]' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion || isMobile) return;

    const max = Math.min(Math.max(strength, 5), 12);
    const layers = gsap.utils.toArray<HTMLElement>(
      el.querySelectorAll(childSelector),
    );
    const targets = layers.length > 0 ? layers : [el];

    const quickToX = targets.map((t) => gsap.quickTo(t, 'x', { duration: 0.6, ease: 'power2.out' }));
    const quickToY = targets.map((t) => gsap.quickTo(t, 'y', { duration: 0.6, ease: 'power2.out' }));

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      targets.forEach((t, i) => {
        const depth = Number(t.dataset.parallax ?? '1');
        const amp = max * (Number.isFinite(depth) ? depth : 1);
        quickToX[i](nx * amp);
        quickToY[i](ny * amp);
      });
    };

    const onLeave = () => {
      quickToX.forEach((fn) => fn(0));
      quickToY.forEach((fn) => fn(0));
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      targets.forEach((t) => gsap.set(t, { x: 0, y: 0 }));
    };
  }, [reducedMotion, isMobile, strength, childSelector]);

  return ref;
};
