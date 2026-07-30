import { CSSProperties, useRef } from 'react';
import { Clock, Languages, LucideIcon, ShieldCheck, Sparkles, Video } from 'lucide-react';
import { HOME } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { HeroPhoneShowcase } from './HeroPhoneShowcase';
import { PlayStoreButton } from './PlayStoreButton';
import { splitWords } from './AnimatedSection';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { useIsMobile } from '../hooks/useIsMobile';
import { useParallax } from '../hooks/useParallax';

const tagIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  Video,
  Languages,
};

export const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  const rootRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useParallax<HTMLDivElement>({ strength: 8 });
  const tagsRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useHeroAnimation({
    root: rootRef,
    badge: badgeRef,
    paragraph: paragraphRef,
    cta: ctaRef,
    visual: visualRef,
    tags: tagsRef,
    blobs: blobsRef,
  });

  return (
    <section ref={rootRef} style={styles.hero}>
      <div ref={blobsRef} style={styles.blobs} aria-hidden="true">
        <span data-blob style={{ ...styles.blob, ...styles.blob1 }} />
        <span data-blob style={{ ...styles.blob, ...styles.blob2 }} />
      </div>

      <div
        style={{
          ...styles.inner,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <div
          style={{
            ...styles.content,
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div ref={badgeRef} style={styles.badge}>
            <Sparkles size={14} color={palette.primary} />
            <span>{HOME.heroBadge}</span>
          </div>

          <h1 style={{ ...styles.headline, fontSize: isMobile ? 38 : fontSize.headingXL }}>
            {splitWords(HOME.heroHeadlineBefore, 'before')}
            <span style={styles.highlight} data-hero-word>
              {HOME.heroHeadlineHighlight}
            </span>
            <br />
            {splitWords(HOME.heroHeadlineAfter, 'after')}
          </h1>

          <p ref={paragraphRef} style={styles.description}>
            {HOME.heroDescription}
          </p>

          <div
            ref={ctaRef}
            style={{ ...styles.ctaRow, justifyContent: isMobile ? 'center' : 'flex-start' }}
          >
            <PlayStoreButton />
          </div>

          <div
            ref={tagsRef}
            style={{ ...styles.tags, justifyContent: isMobile ? 'center' : 'flex-start' }}
          >
            {HOME.heroFeatureTags.map((tag) => {
              const Icon = tagIcons[tag.icon] ?? ShieldCheck;
              return (
                <div key={tag.label} style={styles.tag} data-hero-el className="mm-pill">
                  <Icon size={14} color={palette.primaryLight} />
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={visualRef}
          style={{ ...styles.visual, width: isMobile ? '100%' : '50%' }}
        >
          <div data-parallax="1">
            <HeroPhoneShowcase compact={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, CSSProperties> = {
  hero: {
    position: 'relative',
    overflow: 'hidden',
    padding: '56px 0 48px',
    background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${palette.surface} 0%, ${palette.background} 70%)`,
    minHeight: 520,
  },
  blobs: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(48px)',
    opacity: 0.45,
  },
  blob1: {
    width: 280,
    height: 280,
    top: '10%',
    right: '8%',
    background: `radial-gradient(circle, ${palette.primaryLight}66 0%, transparent 70%)`,
  },
  blob2: {
    width: 220,
    height: 220,
    bottom: '5%',
    left: '12%',
    background: `radial-gradient(circle, ${palette.primary}33 0%, transparent 70%)`,
  },
  inner: {
    position: 'relative',
    zIndex: 2,
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
    padding: `0 ${pagePaddingX}px`,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 580,
    zIndex: 2,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.sm}px ${spacing.lg}px`,
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    border: `1px solid ${palette.border}`,
    borderRadius: radius.pill,
    fontSize: 15,
    fontWeight: 500,
    color: palette.primaryDark,
    marginBottom: spacing.xl,
  },
  headline: {
    margin: 0,
    fontWeight: 800,
    lineHeight: 1.12,
    color: palette.textPrimary,
    letterSpacing: -0.5,
  },
  highlight: {
    display: 'inline-block',
    color: palette.primary,
    fontStyle: 'italic',
    marginRight: '0.28em',
  },
  description: {
    margin: `${spacing.xl}px 0`,
    fontSize: 20,
    lineHeight: 1.65,
    color: palette.textSecondary,
    maxWidth: 460,
  },
  ctaRow: {
    display: 'flex',
    marginBottom: spacing.xxl,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: `${spacing.sm}px ${spacing.md}px`,
    backgroundColor: 'rgba(255,255,255, 0.75)',
    border: `1px solid ${palette.border}`,
    borderRadius: radius.pill,
    fontSize: 14,
    fontWeight: 500,
    color: palette.textSecondary,
  },
  visual: {
    flexShrink: 0,
    minWidth: 280,
  },
};
