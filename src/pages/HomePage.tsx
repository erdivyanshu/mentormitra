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
import { CategoryPill } from '../components/CategoryPill';
import { HeroSection } from '../components/HeroSection';
import { ExploreAllMentorsTile } from '../components/ExploreAllMentorsTile';
import { MentorCard } from '../components/MentorCard';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { SectionHeader } from '../components/SectionHeader';
import { TestimonialCard } from '../components/TestimonialCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { FEATURED_MENTORS_SECTION_ID } from '../utils/scroll';

const stepIcons: Record<string, LucideIcon> = { Search, Calendar, Video };

export const HomePage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <HeroSection />

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionHeader title={HOME.howItWorksTitle} align="left" />
          <div style={{ ...styles.grid3, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {HOW_IT_WORKS.map((step) => {
              const Icon = stepIcons[step.iconName];
              return (
                <div key={step.title} style={styles.stepCard}>
                  <div style={styles.stepIcon}>
                    <Icon size={24} color={palette.primary} />
                  </div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={styles.container}>
          <SectionHeader title={HOME.categoriesTitle} align="left" />
          <div style={styles.categoryWrap}>
            {CATEGORIES.map((cat) => (
              <CategoryPill key={cat.id} name={cat.name} iconName={cat.iconName} />
            ))}
          </div>
        </div>
      </section>

      <section
        id={FEATURED_MENTORS_SECTION_ID}
        style={{ ...styles.section, scrollMarginTop: 80 }}
      >
        <div style={styles.container}>
          <SectionHeader
            title={HOME.featuredTitle}
            subtitle={HOME.featuredSubtitle}
            align="left"
          />
          <div
            style={{
              ...styles.gridMentors,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            }}
          >
            {MENTORS.map((m) => (
              <MentorCard key={m.id} mentor={m} />
            ))}
            <ExploreAllMentorsTile spanColumns={isMobile ? 1 : 2} />
          </div>
        </div>
      </section>

      <section style={{ ...styles.stats, backgroundColor: palette.primary }}>
        <div style={{ ...styles.container, ...styles.statsInner }}>
          {STATS.map((s) => (
            <div key={s.label} style={styles.stat}>
              <p style={styles.statValue}>{s.value}</p>
              <p style={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionHeader title={HOME.testimonialsTitle} align="left" />
          <div style={{ ...styles.grid3, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={{ ...styles.container, ...styles.cta }}>
          <h2 style={styles.ctaTitle}>{HOME.finalCtaTitle}</h2>
          <p style={styles.ctaSubtitle}>{HOME.finalCtaSubtitle}</p>
          <PlayStoreButton />
        </div>
      </section>
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
    fontSize: 18,
    fontWeight: 600,
  },
  stepDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 14,
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
    fontSize: 32,
    fontWeight: 800,
    color: palette.white,
  },
  statLabel: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 14,
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
