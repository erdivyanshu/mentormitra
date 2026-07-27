import { CSSProperties } from 'react';
import {
  BadgeCheck,
  Calendar,
  Clock,
  IndianRupee,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Quote,
  Sparkles,
  Users,
  Video,
  Wallet,
} from 'lucide-react';
import { BECOME_MENTOR } from '../constants/content';
import { JOIN_STEPS, MENTOR_BENEFITS } from '../constants/mentors';
import { fontSize, maxWidth, pagePaddingX, palette, radius, spacing } from '../constants/theme';
import { HeroPhoneShowcase, PhoneImage } from '../components/HeroPhoneShowcase';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { useIsMobile } from '../hooks/useIsMobile';

const benefitIcons: Record<string, LucideIcon> = { Clock, IndianRupee, Users };
const platformIcons: Record<string, LucideIcon> = {
  LayoutDashboard,
  Wallet,
  Calendar,
  BadgeCheck,
  MessageSquare,
  Video,
};

export const BecomeMentorPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div
          style={{
            ...styles.container,
            ...styles.heroGrid,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div
            style={{
              ...styles.heroText,
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <div style={styles.badge}>
              <Sparkles size={14} color={palette.primary} />
              <span>{BECOME_MENTOR.heroBadge}</span>
            </div>
            <h1 style={{ ...styles.heroTitle, fontSize: isMobile ? 32 : 40 }}>
              {BECOME_MENTOR.title}
            </h1>
            <p style={styles.heroSubtitle}>{BECOME_MENTOR.subtitle}</p>

            <div
              style={{
                ...styles.highlightRow,
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              {BECOME_MENTOR.heroHighlights.map((h) => (
                <div key={h.label} style={styles.highlightCard}>
                  <span style={styles.highlightValue}>{h.value}</span>
                  <span style={styles.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </div>

            <PlayStoreButton />
          </div>

          <div style={styles.heroVisual}>
            <HeroPhoneShowcase centerSrc="/images/hero-phone-right.png" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <p style={styles.statsLabel}>{BECOME_MENTOR.statsTitle}</p>
          <div
            style={{
              ...styles.statsGrid,
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            }}
          >
            {BECOME_MENTOR.stats.map((s) => (
              <div key={s.label} style={styles.statItem}>
                <p style={styles.statValue}>{s.value}</p>
                <p style={styles.statDesc}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why mentor — top 3 benefits */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{BECOME_MENTOR.benefitsTitle}</h2>
          <p style={styles.sectionSubtitle}>{BECOME_MENTOR.benefitsSubtitle}</p>
          <div
            style={{
              ...styles.grid3,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {MENTOR_BENEFITS.map((item) => {
              const Icon = benefitIcons[item.iconName];
              return (
                <div key={item.title} style={styles.benefitCard}>
                  <div style={styles.iconCircle}>
                    <Icon size={26} color={palette.primary} />
                  </div>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardDesc}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform features + image */}
      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{BECOME_MENTOR.platformTitle}</h2>
          <div
            style={{
              ...styles.platformLayout,
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <div
              style={{
                ...styles.platformGrid,
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              }}
            >
              {BECOME_MENTOR.platformFeatures.map((f) => {
                const Icon = platformIcons[f.icon] ?? LayoutDashboard;
                return (
                  <div key={f.title} style={styles.featureRow}>
                    <div style={styles.featureIcon}>
                      <Icon size={20} color={palette.primary} />
                    </div>
                    <div>
                      <h3 style={styles.featureTitle}>{f.title}</h3>
                      <p style={styles.featureDesc}>{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={styles.platformImage}>
              <PhoneImage src="/images/hero-phone-center.png" alt="Mentor dashboard" maxWidth={240} />
            </div>
          </div>
        </div>
      </section>

      {/* Who should apply */}
      <section style={styles.section}>
        <div
          style={{
            ...styles.container,
            ...styles.whoLayout,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.whoText}>
            <h2 style={styles.sectionTitle}>{BECOME_MENTOR.whoTitle}</h2>
            <p style={styles.sectionSubtitle}>{BECOME_MENTOR.whoSubtitle}</p>
            <ul style={styles.whoList}>
              {BECOME_MENTOR.whoProfiles.map((profile) => (
                <li key={profile} style={styles.whoItem}>
                  <span style={styles.whoDot} />
                  {profile}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.whoImage}>
            <PhoneImage src="/images/hero-phone-left.png" alt="Mentor profiles" maxWidth={220} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>{BECOME_MENTOR.stepsTitle}</h2>
          <p style={{ ...styles.sectionSubtitle, textAlign: 'center', marginBottom: spacing.xxxl }}>
            {BECOME_MENTOR.stepsSubtitle}
          </p>
          <div
            style={{
              ...styles.stepsGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {JOIN_STEPS.map((step) => (
              <div key={step.step} style={styles.stepCard}>
                <div style={styles.stepNum}>{step.step}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.quoteCard}>
            <Quote size={32} color={palette.primary} style={{ opacity: 0.4 }} />
            <p style={styles.quoteText}>"{BECOME_MENTOR.quote.text}"</p>
            <p style={styles.quoteAuthor}>{BECOME_MENTOR.quote.author}</p>
            <p style={styles.quoteRole}>{BECOME_MENTOR.quote.role}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, backgroundColor: palette.surface }}>
        <div style={{ ...styles.container, maxWidth: 720 }}>
          <h2 style={styles.sectionTitle}>{BECOME_MENTOR.faqTitle}</h2>
          <div style={styles.faqList}>
            {BECOME_MENTOR.faqs.map((faq) => (
              <div key={faq.q} style={styles.faqItem}>
                <h3 style={styles.faqQ}>{faq.q}</h3>
                <p style={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div
          style={{
            ...styles.container,
            ...styles.ctaGrid,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.ctaText}>
            <h2 style={styles.ctaTitle}>{BECOME_MENTOR.ctaTitle}</h2>
            <p style={styles.ctaSubtitle}>{BECOME_MENTOR.ctaSubtitle}</p>
            <PlayStoreButton />
          </div>
          <div style={styles.ctaImage}>
            <HeroPhoneShowcase compact />
          </div>
        </div>
      </section>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  hero: {
    padding: `${spacing.massive}px ${pagePaddingX}px`,
    background: `linear-gradient(135deg, ${palette.background} 0%, ${palette.surface} 60%, ${palette.background} 100%)`,
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
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  heroVisual: {
    flex: 1,
    minWidth: 280,
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
  heroTitle: {
    margin: 0,
    fontWeight: 800,
    lineHeight: 1.12,
    letterSpacing: -0.5,
    color: palette.textPrimary,
  },
  heroSubtitle: {
    margin: `${spacing.lg}px 0 ${spacing.xxl}px`,
    fontSize: 17,
    lineHeight: 1.7,
    color: palette.textSecondary,
    maxWidth: 500,
  },
  highlightRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  highlightCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${spacing.md}px ${spacing.lg}px`,
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.md,
    minWidth: 110,
  },
  highlightValue: {
    fontSize: 15,
    fontWeight: 700,
    color: palette.primary,
  },
  highlightLabel: {
    fontSize: 11,
    color: palette.textSecondary,
    marginTop: 2,
  },
  statsSection: {
    padding: `${spacing.xxl}px ${pagePaddingX}px`,
    backgroundColor: palette.primary,
  },
  statsLabel: {
    margin: `0 0 ${spacing.lg}px`,
    fontSize: 13,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statsGrid: {
    display: 'grid',
    gap: spacing.xl,
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
    color: palette.white,
  },
  statDesc: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
  },
  section: {
    padding: `${spacing.huge}px ${pagePaddingX}px`,
  },
  sectionTitle: {
    margin: `0 0 ${spacing.md}px`,
    fontSize: fontSize.headingM,
    fontWeight: 700,
    color: palette.textPrimary,
  },
  sectionSubtitle: {
    margin: `0 0 ${spacing.xxl}px`,
    fontSize: fontSize.body,
    color: palette.textSecondary,
    lineHeight: 1.65,
    maxWidth: 560,
  },
  grid3: {
    display: 'grid',
    gap: spacing.xl,
  },
  benefitCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xxl,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
    backgroundColor: palette.surface,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  cardTitle: {
    margin: `0 0 ${spacing.sm}px`,
    fontSize: 18,
    fontWeight: 600,
  },
  cardDesc: {
    margin: 0,
    fontSize: 14,
    color: palette.textSecondary,
    lineHeight: 1.65,
  },
  platformLayout: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
  },
  platformGrid: {
    flex: 1,
    display: 'grid',
    gap: spacing.xl,
    minWidth: 0,
  },
  featureRow: {
    display: 'flex',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
  },
  featureDesc: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 13,
    color: palette.textSecondary,
    lineHeight: 1.55,
  },
  platformImage: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  whoLayout: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
  },
  whoText: {
    flex: 1,
    minWidth: 0,
  },
  whoList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gap: spacing.md,
  },
  whoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    fontSize: 15,
    color: palette.textPrimary,
    fontWeight: 500,
  },
  whoDot: {
    width: 8,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: palette.primary,
    flexShrink: 0,
  },
  whoImage: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  stepsGrid: {
    display: 'grid',
    gap: spacing.xl,
  },
  stepCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xxl,
    textAlign: 'center',
  },
  stepNum: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: palette.primary,
    color: palette.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 18,
    margin: `0 auto ${spacing.lg}px`,
  },
  stepTitle: {
    margin: 0,
    fontSize: 17,
    fontWeight: 600,
  },
  stepDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 14,
    color: palette.textSecondary,
    lineHeight: 1.6,
  },
  quoteCard: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.huge,
    textAlign: 'center',
    maxWidth: 680,
    margin: '0 auto',
  },
  quoteText: {
    margin: `${spacing.lg}px 0`,
    fontSize: 18,
    lineHeight: 1.7,
    color: palette.textPrimary,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    margin: 0,
    fontSize: 15,
    fontWeight: 700,
    color: palette.textPrimary,
  },
  quoteRole: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 13,
    color: palette.textSecondary,
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
  },
  faqItem: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  faqQ: {
    margin: `0 0 ${spacing.sm}px`,
    fontSize: 16,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  faqA: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.65,
    color: palette.textSecondary,
  },
  ctaSection: {
    padding: `${spacing.massive}px ${pagePaddingX}px`,
    background: `linear-gradient(180deg, ${palette.background} 0%, ${palette.surface} 100%)`,
  },
  ctaGrid: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.massive,
  },
  ctaText: {
    flex: 1,
    minWidth: 0,
  },
  ctaTitle: {
    margin: 0,
    fontSize: fontSize.headingM,
    fontWeight: 700,
  },
  ctaSubtitle: {
    margin: `${spacing.md}px 0 ${spacing.xxl}px`,
    fontSize: fontSize.body,
    color: palette.textSecondary,
    lineHeight: 1.65,
    maxWidth: 420,
  },
  ctaImage: {
    flex: 1,
    minWidth: 260,
  },
};
