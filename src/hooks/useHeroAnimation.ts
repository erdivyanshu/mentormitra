import { useEffect, RefObject } from 'react';
import { gsap } from '../lib/gsap';
import { useIsMobile } from './useIsMobile';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface HeroAnimationRefs {
  root: RefObject<HTMLElement | null>;
  badge?: RefObject<HTMLElement | null>;
  headline?: RefObject<HTMLElement | null>;
  paragraph?: RefObject<HTMLElement | null>;
  cta?: RefObject<HTMLElement | null>;
  visual?: RefObject<HTMLElement | null>;
  tags?: RefObject<HTMLElement | null>;
  blobs?: RefObject<HTMLElement | null>;
}

/**
 * Hero entrance: badge → word reveal → paragraph → CTA → visual scale.
 * Word spans should use `[data-hero-word]` inside the headline.
 */
export const useHeroAnimation = (refs: HeroAnimationRefs): void => {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const root = refs.root.current;
    if (!root) return;

    if (reducedMotion) {
      root.querySelectorAll('[data-hero-word], [data-hero-el]').forEach((n) => {
        (n as HTMLElement).style.opacity = '1';
        (n as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      const words = root.querySelectorAll('[data-hero-word]');
      const badge = refs.badge?.current;
      const paragraph = refs.paragraph?.current;
      const cta = refs.cta?.current;
      const visual = refs.visual?.current;
      const tags = refs.tags?.current;
      const blobs = refs.blobs?.current;

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (badge) {
        gsap.set(badge, { opacity: 0, y: 16 });
        tl.to(badge, { opacity: 1, y: 0, duration: 0.7 }, 0.1);
      }

      if (words.length) {
        gsap.set(words, { opacity: 0, y: 28 });
        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.08,
          },
          0.2,
        );
      }

      if (paragraph) {
        gsap.set(paragraph, { opacity: 0, y: 24 });
        tl.to(paragraph, { opacity: 1, y: 0, duration: 0.8 }, '-=0.45');
      }

      if (cta) {
        gsap.set(cta, { opacity: 0, scale: 0.94 });
        tl.to(cta, { opacity: 1, scale: 1, duration: 0.7 }, '-=0.4');
      }

      if (tags) {
        const tagEls = tags.querySelectorAll('[data-hero-el]');
        if (tagEls.length) {
          gsap.set(tagEls, { opacity: 0, y: 12 });
          tl.to(
            tagEls,
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.06 },
            '-=0.35',
          );
        }
      }

      if (visual) {
        gsap.set(visual, { opacity: 0, scale: 0.95 });
        tl.to(visual, { opacity: 1, scale: 1, duration: 1 }, 0.35);
      }

      if (blobs && !isMobile) {
        const blobEls = blobs.querySelectorAll('[data-blob]');
        blobEls.forEach((blob, i) => {
          gsap.to(blob, {
            y: i % 2 === 0 ? -18 : 14,
            x: i % 2 === 0 ? 10 : -8,
            duration: 5 + i * 1.2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        });
      }
    }, root);

    return () => ctx.revert();
    // RefObjects are stable; only motion prefs / layout mode should re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, isMobile]);
};
