import { CSSProperties } from 'react';
import { Sparkles } from 'lucide-react';
import { ABOUT } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { useIsMobile } from '../hooks/useIsMobile';

const ABOUT_HERO_IMAGE = '/images/about-hero.png';
const ABOUT_STORY_IMAGE = '/images/about-story.png';

export const AboutPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <section style={styles.hero}>
        <div
          style={{
            ...styles.container,
            ...styles.heroGrid,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.heroText}>
            <div style={styles.badge}>
              <Sparkles size={14} color={palette.primary} />
              <span>{ABOUT.heroBadge}</span>
            </div>
            <h1 style={{ ...styles.title, fontSize: isMobile ? 30 : fontSize.headingL }}>
              {ABOUT.title}
            </h1>
            <p style={styles.subtitle}>{ABOUT.subtitle}</p>
          </div>
          <div style={styles.heroImageWrap}>
            <img
              src={ABOUT_HERO_IMAGE}
              alt="Mentorship and career growth"
              style={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div
          style={{
            ...styles.container,
            ...styles.storyLayout,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.storyContent}>
            <h2 style={styles.sectionTitle}>{ABOUT.storyTitle}</h2>
            {ABOUT.storyParagraphs.map((para, i) => (
              <p key={i} style={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
          <div style={styles.storyVisual}>
            <img
              src={ABOUT_STORY_IMAGE}
              alt="Our mission to connect learners with guidance"
              style={styles.storyImage}
            />
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{ABOUT.beliefTitle}</h2>
          <div
            style={{
              ...styles.beliefGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {ABOUT.beliefs.map((belief, i) => (
              <div key={belief.title} style={styles.beliefCard}>
                <span style={styles.beliefNum}>0{i + 1}</span>
                <h3 style={styles.beliefTitle}>{belief.title}</h3>
                <p style={styles.beliefDesc}>{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{ABOUT.differenceTitle}</h2>
          <div
            style={{
              ...styles.diffGrid,
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            }}
          >
            {ABOUT.differences.map((item) => (
              <div key={item.label} style={styles.diffCard}>
                <p style={styles.diffStat}>{item.stat}</p>
                <p style={styles.diffLabel}>{item.label}</p>
                <p style={styles.diffDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: spacing.md }}>{ABOUT.audienceTitle}</h2>
          <p style={styles.audienceSubtitle}>{ABOUT.audienceSubtitle}</p>
          <div
            style={{
              ...styles.audienceGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {ABOUT.audiences.map((audience) => (
              <div key={audience.title} style={styles.audienceCard}>
                <h3 style={styles.audienceTitle}>{audience.title}</h3>
                <p style={styles.audienceDesc}>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <h2 style={styles.ctaTitle}>{ABOUT.ctaTitle}</h2>
          <p style={styles.ctaSubtitle}>{ABOUT.ctaSubtitle}</p>
          <PlayStoreButton />
        </div>
      </section>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  hero: {
    padding: `${spacing.massive}px ${pagePaddingX}px ${spacing.huge}px`,
    background: `linear-gradient(180deg, ${palette.background} 0%, ${palette.surface} 100%)`,
    overflow: 'hidden',
  },
  container: {
    maxWidth: maxWidth,
    margin: '0 auto',
  },
  heroGrid: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
  },
  heroText: {
    flex: 1,
    minWidth: 0,
  },
  heroImageWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 240,
  },
  heroImage: {
    width: '100%',
    maxWidth: 420,
    objectFit: 'cover',
    borderRadius: radius.lg,
    boxShadow: '0 16px 40px rgba(11, 20, 12, 0.1)',
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
    marginBottom: spacing.lg,
  },
  title: {
    margin: 0,
    fontWeight: 800,
    lineHeight: 1.15,
    maxWidth: 680,
    letterSpacing: -0.4,
  },
  subtitle: {
    margin: `${spacing.lg}px 0 0`,
    fontSize: 18,
    lineHeight: 1.7,
    color: palette.textSecondary,
    maxWidth: 640,
  },
  section: {
    padding: `${spacing.huge}px ${pagePaddingX}px`,
  },
  storyLayout: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
  },
  storyContent: {
    flex: 1,
    minWidth: 0,
  },
  storyVisual: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    maxWidth: 420,
  },
  storyImage: {
    width: '100%',
    maxWidth: 380,
    objectFit: 'cover',
    borderRadius: radius.lg,
    boxShadow: '0 12px 32px rgba(11, 20, 12, 0.08)',
  },
  sectionTitle: {
    margin: `0 0 ${spacing.xxl}px`,
    fontSize: fontSize.headingM,
    fontWeight: 700,
    color: palette.textPrimary,
  },
  audienceSubtitle: {
    margin: `0 0 ${spacing.xxl}px`,
    fontSize: fontSize.body,
    lineHeight: 1.7,
    color: palette.textSecondary,
    maxWidth: 720,
  },
  paragraph: {
    margin: `0 0 ${spacing.lg}px`,
    fontSize: fontSize.body,
    lineHeight: 1.75,
    color: palette.textSecondary,
  },
  beliefGrid: {
    display: 'grid',
    gap: spacing.xl,
  },
  beliefCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xxl,
    minHeight: 180,
  },
  beliefNum: {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: palette.primary,
    marginBottom: spacing.md,
    letterSpacing: 1,
  },
  beliefTitle: {
    margin: `0 0 ${spacing.sm}px`,
    fontSize: 18,
    fontWeight: 600,
  },
  beliefDesc: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.65,
    color: palette.textSecondary,
  },
  diffGrid: {
    display: 'grid',
    gap: spacing.lg,
  },
  diffCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xl,
    textAlign: 'center',
  },
  diffStat: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    color: palette.primary,
  },
  diffLabel: {
    margin: `${spacing.sm}px 0`,
    fontSize: 15,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  diffDetail: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.5,
    color: palette.textSecondary,
  },
  audienceGrid: {
    display: 'grid',
    gap: spacing.xl,
  },
  audienceCard: {
    borderLeft: `3px solid ${palette.primary}`,
    paddingLeft: spacing.xl,
  },
  audienceTitle: {
    margin: 0,
    fontSize: 17,
    fontWeight: 600,
  },
  audienceDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 14,
    lineHeight: 1.65,
    color: palette.textSecondary,
  },
  ctaSection: {
    padding: `${spacing.huge}px ${pagePaddingX}px`,
  },
  ctaTitle: {
    margin: 0,
    fontSize: fontSize.headingM,
    fontWeight: 700,
  },
  ctaSubtitle: {
    margin: `${spacing.md}px 0 ${spacing.xxl}px`,
    color: palette.textSecondary,
    fontSize: fontSize.body,
  },
};
