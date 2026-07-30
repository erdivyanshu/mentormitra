import { CSSProperties } from 'react';
import { Sparkles } from 'lucide-react';
import { ABOUT } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { AnimatedSection, FloatingReveal, RevealItem, splitWords } from '../components/AnimatedSection';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { StatCounter } from '../components/StatCounter';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePageEnter } from '../hooks/usePageEnter';
import { useParallax } from '../hooks/useParallax';

const ABOUT_HERO_IMAGE = '/images/about-hero.png';
const ABOUT_STORY_IMAGE = '/images/about-story.png';

export const AboutPage: React.FC = () => {
  const isMobile = useIsMobile();
  const pageRef = usePageEnter<HTMLDivElement>();
  const heroVisualRef = useParallax<HTMLDivElement>({ strength: 7 });

  return (
    <div ref={pageRef}>
      <AnimatedSection style={styles.hero} stagger={0.1} y={28}>
        <div
          style={{
            ...styles.container,
            ...styles.heroGrid,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.heroText}>
            <RevealItem>
              <div style={styles.badge}>
                <Sparkles size={14} color={palette.primary} />
                <span>{ABOUT.heroBadge}</span>
              </div>
            </RevealItem>
            <RevealItem>
              <h1 style={{ ...styles.title, fontSize: isMobile ? 34 : fontSize.headingL }}>
                {splitWords(ABOUT.title, 'about')}
              </h1>
            </RevealItem>
            <RevealItem>
              <p style={styles.subtitle}>{ABOUT.subtitle}</p>
            </RevealItem>
          </div>
          <RevealItem style={styles.heroImageWrap}>
            <div ref={heroVisualRef}>
              <img
                data-parallax="1"
                src={ABOUT_HERO_IMAGE}
                alt="Mentorship and career growth"
                style={styles.heroImage}
                className="mm-img mm-img-zoom"
              />
            </div>
          </RevealItem>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1}>
        <div
          style={{
            ...styles.container,
            ...styles.storyLayout,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.storyContent}>
            <RevealItem>
              <h2 style={styles.sectionTitle}>{ABOUT.storyTitle}</h2>
            </RevealItem>
            {ABOUT.storyParagraphs.map((para, i) => (
              <RevealItem key={i}>
                <p style={styles.paragraph}>{para}</p>
              </RevealItem>
            ))}
          </div>
          <RevealItem style={styles.storyVisual}>
            <img
              src={ABOUT_STORY_IMAGE}
              alt="Our mission to connect learners with guidance"
              style={styles.storyImage}
              className="mm-img mm-img-zoom"
            />
          </RevealItem>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.1}
        scale={0.96}
      >
        <div style={styles.container}>
          <RevealItem>
            <h2 style={styles.sectionTitle}>{ABOUT.beliefTitle}</h2>
          </RevealItem>
          <div
            style={{
              ...styles.beliefGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {ABOUT.beliefs.map((belief, i) => (
              <FloatingReveal key={belief.title} floatDelay={i * 0.4} enableFloat={!isMobile}>
                <div style={styles.beliefCard} className="mm-card">
                  <span style={styles.beliefNum}>0{i + 1}</span>
                  <h3 style={styles.beliefTitle}>{belief.title}</h3>
                  <p style={styles.beliefDesc}>{belief.description}</p>
                </div>
              </FloatingReveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1} scale={0.96}>
        <div style={styles.container}>
          <RevealItem>
            <h2 style={styles.sectionTitle}>{ABOUT.differenceTitle}</h2>
          </RevealItem>
          <div
            style={{
              ...styles.diffGrid,
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            }}
          >
            {ABOUT.differences.map((item, i) => (
              <FloatingReveal key={item.label} floatDelay={i * 0.3} enableFloat={!isMobile}>
                <div style={styles.diffCard} className="mm-card-soft">
                  <StatCounter value={item.stat} style={styles.diffStat} />
                  <p style={styles.diffLabel}>{item.label}</p>
                  <p style={styles.diffDetail}>{item.detail}</p>
                </div>
              </FloatingReveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.1}
      >
        <div style={styles.container}>
          <RevealItem>
            <h2 style={{ ...styles.sectionTitle, marginBottom: spacing.md }}>
              {ABOUT.audienceTitle}
            </h2>
          </RevealItem>
          <RevealItem>
            <p style={styles.audienceSubtitle}>{ABOUT.audienceSubtitle}</p>
          </RevealItem>
          <div
            style={{
              ...styles.audienceGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {ABOUT.audiences.map((audience) => (
              <RevealItem key={audience.title}>
                <div style={styles.audienceCard}>
                  <h3 style={styles.audienceTitle}>{audience.title}</h3>
                  <p style={styles.audienceDesc}>{audience.description}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.ctaSection} stagger={0.1}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <RevealItem>
            <h2 style={styles.ctaTitle}>{ABOUT.ctaTitle}</h2>
          </RevealItem>
          <RevealItem>
            <p style={styles.ctaSubtitle}>{ABOUT.ctaSubtitle}</p>
          </RevealItem>
          <RevealItem>
            <PlayStoreButton />
          </RevealItem>
        </div>
      </AnimatedSection>
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
    fontSize: 15,
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
    fontSize: 21,
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
    height: '100%',
  },
  beliefNum: {
    display: 'block',
    fontSize: 15,
    fontWeight: 700,
    color: palette.primary,
    marginBottom: spacing.md,
    letterSpacing: 1,
  },
  beliefTitle: {
    margin: `0 0 ${spacing.sm}px`,
    fontSize: 21,
    fontWeight: 600,
  },
  beliefDesc: {
    margin: 0,
    fontSize: 16,
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
    height: '100%',
  },
  diffStat: {
    margin: 0,
    fontSize: 32,
    fontWeight: 800,
    color: palette.primary,
  },
  diffLabel: {
    margin: `${spacing.sm}px 0`,
    fontSize: 17,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  diffDetail: {
    margin: 0,
    fontSize: 15,
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
    fontSize: 20,
    fontWeight: 600,
  },
  audienceDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 16,
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
