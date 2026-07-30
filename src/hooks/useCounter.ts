import { useEffect, useRef, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface CounterOptions {
  /** Final numeric value to count to. */
  end: number;
  duration?: number;
  decimals?: number;
  /** Prefix / suffix around the number (e.g. `+`, `k+`, `★`). */
  prefix?: string;
  suffix?: string;
  /** Format large numbers as `10k` style when end >= 1000 and suffix includes k. */
  start?: string;
}

/**
 * Animates a number from 0 → end once when scrolled into view.
 * Returns a ref to attach to the element that displays the value.
 */
export const useCounter = <T extends HTMLElement = HTMLElement>(
  options: CounterOptions,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { end, duration = 1.4, decimals = 0, prefix = '', suffix = '', start = 'top 80%' } =
    options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) => {
      const fixed =
        decimals > 0
          ? n.toFixed(decimals)
          : Math.round(n).toLocaleString('en-IN');
      return `${prefix}${fixed}${suffix}`;
    };

    if (reducedMotion) {
      el.textContent = format(end);
      return;
    }

    const ctx = gsap.context(() => {
      const state = { value: 0 };
      el.textContent = format(0);

      gsap.to(state, {
        value: end,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
        onUpdate: () => {
          el.textContent = format(state.value);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [end, duration, decimals, prefix, suffix, start, reducedMotion]);

  return ref;
};

/** Parse display strings like `500+`, `10k+`, `4.8★`, `₹74k+`, `1,200+`. */
export const parseStatValue = (
  raw: string,
): { end: number; decimals: number; prefix: string; suffix: string } => {
  const trimmed = raw.trim();
  const match = trimmed.match(/^([^0-9.-]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { end: 0, decimals: 0, prefix: '', suffix: trimmed };
  }
  const [, prefix, numRaw, suffix] = match;
  const num = numRaw.replace(/,/g, '');
  const end = Number(num);
  const decimals = num.includes('.') ? num.split('.')[1].length : 0;

  return {
    end: Number.isFinite(end) ? end : 0,
    decimals,
    prefix,
    suffix,
  };
};
