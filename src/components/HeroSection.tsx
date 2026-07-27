import { CSSProperties } from 'react';
import { Clock, Languages, LucideIcon, ShieldCheck, Sparkles, Video } from 'lucide-react';
import { HOME } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { HeroPhoneShowcase } from './HeroPhoneShowcase';
import { PlayStoreButton } from './PlayStoreButton';
import { useIsMobile } from '../hooks/useIsMobile';

const tagIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  Video,
  Languages,
};

export const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={styles.hero}>
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
          <div style={styles.badge}>
            <Sparkles size={14} color={palette.primary} />
            <span>{HOME.heroBadge}</span>
          </div>

          <h1 style={{ ...styles.headline, fontSize: isMobile ? 34 : fontSize.headingXL }}>
            {HOME.heroHeadlineBefore}{' '}
            <span style={styles.highlight}>{HOME.heroHeadlineHighlight}</span>
            <br />
            {HOME.heroHeadlineAfter}
          </h1>

          <p style={styles.description}>{HOME.heroDescription}</p>

          <div style={{ ...styles.ctaRow, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <PlayStoreButton />
          </div>

          <div style={{ ...styles.tags, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            {HOME.heroFeatureTags.map((tag) => {
              const Icon = tagIcons[tag.icon] ?? ShieldCheck;
              return (
                <div key={tag.label} style={styles.tag}>
                  <Icon size={14} color={palette.primaryLight} />
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ ...styles.visual, width: isMobile ? '100%' : '50%' }}>
          <HeroPhoneShowcase compact={isMobile} />
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
  inner: {
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
    fontSize: 13,
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
    color: palette.primary,
    fontStyle: 'italic',
  },
  description: {
    margin: `${spacing.xl}px 0`,
    fontSize: 17,
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
    fontSize: 12,
    fontWeight: 500,
    color: palette.textSecondary,
  },
  visual: {
    flexShrink: 0,
    minWidth: 280,
  },
};
