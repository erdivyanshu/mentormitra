import { CSSProperties } from 'react';
import {
  Calendar,
  LucideIcon,
  Search,
  Video,
} from 'lucide-react';
import { HOME } from '../constants/content';
import {
  CATEGORIES,
  HOW_IT_WORKS,
  MENTORS,
  STATS,
  TESTIMONIALS,
} from '../constants/mentors';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { AnimatedSection, FloatingReveal, RevealItem } from '../components/AnimatedSection';
import { CategoryPill } from '../components/CategoryPill';
import { HeroSection } from '../components/HeroSection';
import { ExploreAllMentorsTile } from '../components/ExploreAllMentorsTile';
import { MentorCard } from '../components/MentorCard';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { SectionHeader } from '../components/SectionHeader';
import { StatCounter } from '../components/StatCounter';
import { TestimonialCard } from '../components/TestimonialCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePageEnter } from '../hooks/usePageEnter';
import { FEATURED_MENTORS_SECTION_ID } from '../utils/scroll';

const stepIcons: Record<string, LucideIcon> = { Search, Calendar, Video };

export const HomePage: React.FC = () => {
  const isMobile = useIsMobile();
  const pageRef = usePageEnter<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <HeroSection />

      <AnimatedSection style={styles.section} stagger={0.1}>
        <div style={styles.container}>
          <RevealItem>
            <SectionHeader title={HOME.howItWorksTitle} align="left" />
          </RevealItem>
          <div style={{ ...styles.grid3, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = stepIcons[step.iconName];
              return (
                <FloatingReveal key={step.title} floatDelay={i * 0.4} enableFloat={!isMobile}>
                  <div style={styles.stepCard} className="mm-card mm-icon-tilt">
                    <div style={styles.stepIcon} className="mm-icon">
                      <Icon size={24} color={palette.primary} />
                    </div>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDesc}>{step.description}</p>
                  </div>
                </FloatingReveal>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.06}
        y={28}
      >
        <div style={styles.container}>
          <RevealItem>
            <SectionHeader title={HOME.categoriesTitle} align="left" />
          </RevealItem>
          <div style={styles.categoryWrap}>
            {CATEGORIES.map((cat) => (
              <RevealItem key={cat.id}>
                <CategoryPill name={cat.name} iconName={cat.iconName} />
              </RevealItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id={FEATURED_MENTORS_SECTION_ID}
        style={{ ...styles.section, scrollMarginTop: 80 }}
        stagger={0.09}
        scale={0.96}
      >
        <div style={styles.container}>
          <RevealItem>
            <SectionHeader
              title={HOME.featuredTitle}
              subtitle={HOME.featuredSubtitle}
              align="left"
            />
          </RevealItem>
          <div
            style={{
              ...styles.gridMentors,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            }}
          >
            {MENTORS.map((m, i) => (
              <FloatingReveal key={m.id} floatDelay={i * 0.35} enableFloat={!isMobile}>
                <MentorCard mentor={m} />
              </FloatingReveal>
            ))}
            <RevealItem style={isMobile ? undefined : { gridColumn: 'span 2' }}>
              <ExploreAllMentorsTile spanColumns={isMobile ? 1 : 2} />
            </RevealItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={{ ...styles.stats, backgroundColor: palette.primary }} stagger={0.12}>
        <div style={{ ...styles.container, ...styles.statsInner }}>
          {STATS.map((s) => (
            <RevealItem key={s.label} style={styles.stat}>
              <StatCounter value={s.value} style={styles.statValue} />
              <p style={styles.statLabel}>{s.label}</p>
            </RevealItem>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1} scale={0.96}>
        <div style={styles.container}>
          <RevealItem>
            <SectionHeader title={HOME.testimonialsTitle} align="left" />
          </RevealItem>
          <div style={{ ...styles.grid3, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {TESTIMONIALS.map((t, i) => (
              <FloatingReveal key={t.id} floatDelay={i * 0.45} enableFloat={!isMobile}>
                <TestimonialCard {...t} />
              </FloatingReveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.1}
        y={32}
      >
        <div style={{ ...styles.container, ...styles.cta }}>
          <RevealItem>
            <h2 style={styles.ctaTitle}>{HOME.finalCtaTitle}</h2>
          </RevealItem>
          <RevealItem>
            <p style={styles.ctaSubtitle}>{HOME.finalCtaSubtitle}</p>
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
  section: {
    padding: `${spacing.massive}px ${pagePaddingX}px`,
  },
  container: {
    maxWidth: maxWidth,
    margin: '0 auto',
  },
  grid3: {
    display: 'grid',
    gap: spacing.xl,
  },
  gridMentors: {
    display: 'grid',
    gap: spacing.xl,
  },
  stepCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xxl,
    height: '100%',
  },
  stepIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: palette.surface,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  stepTitle: {
    margin: 0,
    fontSize: 21,
    fontWeight: 600,
  },
  stepDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 16,
    color: palette.textSecondary,
    lineHeight: 1.5,
  },
  categoryWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  stats: {
    padding: `${spacing.xxxl}px ${pagePaddingX}px`,
  },
  statsInner: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: spacing.xl,
  },
  stat: {
    textAlign: 'center',
  },
  statValue: {
    margin: 0,
    fontSize: 36,
    fontWeight: 800,
    color: palette.white,
  },
  statLabel: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
  },
  cta: {
    textAlign: 'center',
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
