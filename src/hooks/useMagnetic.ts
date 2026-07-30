import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useIsMobile } from './useIsMobile';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface MagneticOptions {
  strength?: number;
  enabled?: boolean;
}

/** Soft magnetic pull toward cursor — desktop only. */
export const useMagnetic = <T extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {},
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { strength = 12, enabled = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || reducedMotion || isMobile) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      xTo((dx / rect.width) * strength);
      yTo((dy / rect.height) * strength);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [reducedMotion, isMobile, strength, enabled]);

  return ref;
};
