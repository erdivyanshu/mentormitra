import { CSSProperties, useState } from 'react';
import {
  BadgeCheck,
  Calendar,
  ChevronDown,
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
import { AnimatedSection, FloatingReveal, RevealItem, splitWords } from '../components/AnimatedSection';
import { HeroPhoneShowcase, PhoneImage } from '../components/HeroPhoneShowcase';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { StatCounter } from '../components/StatCounter';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePageEnter } from '../hooks/usePageEnter';
import { useParallax } from '../hooks/useParallax';

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = usePageEnter<HTMLDivElement>();
  const heroVisualRef = useParallax<HTMLDivElement>({ strength: 8 });

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
          <div
            style={{
              ...styles.heroText,
              alignItems: isMobile ? 'center' : 'flex-start',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <RevealItem>
              <div style={styles.badge}>
                <Sparkles size={14} color={palette.primary} />
                <span>{BECOME_MENTOR.heroBadge}</span>
              </div>
            </RevealItem>
            <RevealItem>
              <h1 style={{ ...styles.heroTitle, fontSize: isMobile ? 36 : 44 }}>
                {splitWords(BECOME_MENTOR.title, 'bm')}
              </h1>
            </RevealItem>
            <RevealItem>
              <p style={styles.heroSubtitle}>{BECOME_MENTOR.subtitle}</p>
            </RevealItem>

            <div
              style={{
                ...styles.highlightRow,
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              {BECOME_MENTOR.heroHighlights.map((h) => (
                <RevealItem key={h.label}>
                  <div style={styles.highlightCard} className="mm-card-soft">
                    <span style={styles.highlightValue}>{h.value}</span>
                    <span style={styles.highlightLabel}>{h.label}</span>
                  </div>
                </RevealItem>
              ))}
            </div>

            <RevealItem>
              <PlayStoreButton />
            </RevealItem>
          </div>

          <RevealItem style={styles.heroVisual}>
            <div ref={heroVisualRef}>
              <div data-parallax="1">
                <HeroPhoneShowcase centerSrc="/images/hero-phone-right.png" />
              </div>
            </div>
          </RevealItem>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.statsSection} stagger={0.1}>
        <div style={styles.container}>
          <RevealItem>
            <p style={styles.statsLabel}>{BECOME_MENTOR.statsTitle}</p>
          </RevealItem>
          <div
            style={{
              ...styles.statsGrid,
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            }}
          >
            {BECOME_MENTOR.stats.map((s) => (
              <RevealItem key={s.label} style={styles.statItem}>
                <StatCounter value={s.value} style={styles.statValue} />
                <p style={styles.statDesc}>{s.label}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1} scale={0.96}>
        <div style={styles.container}>
          <RevealItem>
            <h2 style={styles.sectionTitle}>{BECOME_MENTOR.benefitsTitle}</h2>
          </RevealItem>
          <RevealItem>
            <p style={styles.sectionSubtitle}>{BECOME_MENTOR.benefitsSubtitle}</p>
          </RevealItem>
          <div
            style={{
              ...styles.grid3,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {MENTOR_BENEFITS.map((item, i) => {
              const Icon = benefitIcons[item.iconName];
              return (
                <FloatingReveal key={item.title} floatDelay={i * 0.4} enableFloat={!isMobile}>
                  <div style={styles.benefitCard} className="mm-card mm-icon-tilt">
                    <div style={styles.iconCircle} className="mm-icon">
                      <Icon size={26} color={palette.primary} />
                    </div>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardDesc}>{item.description}</p>
                  </div>
                </FloatingReveal>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.08}
      >
        <div style={styles.container}>
          <RevealItem>
            <h2 style={styles.sectionTitle}>{BECOME_MENTOR.platformTitle}</h2>
          </RevealItem>
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
                  <RevealItem key={f.title}>
                    <div style={styles.featureRow} className="mm-icon-lift">
                      <div style={styles.featureIcon} className="mm-icon">
                        <Icon size={20} color={palette.primary} />
                      </div>
                      <div>
                        <h3 style={styles.featureTitle}>{f.title}</h3>
                        <p style={styles.featureDesc}>{f.description}</p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </div>
            <RevealItem style={styles.platformImage}>
              <PhoneImage
                src="/images/hero-phone-center.png"
                alt="Mentor dashboard"
                maxWidth={240}
              />
            </RevealItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1}>
        <div
          style={{
            ...styles.container,
            ...styles.whoLayout,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.whoText}>
            <RevealItem>
              <h2 style={styles.sectionTitle}>{BECOME_MENTOR.whoTitle}</h2>
            </RevealItem>
            <RevealItem>
              <p style={styles.sectionSubtitle}>{BECOME_MENTOR.whoSubtitle}</p>
            </RevealItem>
            <ul style={styles.whoList}>
              {BECOME_MENTOR.whoProfiles.map((profile) => (
                <RevealItem key={profile} style={{ listStyle: 'none' }}>
                  <li style={styles.whoItem}>
                    <span style={styles.whoDot} />
                    {profile}
                  </li>
                </RevealItem>
              ))}
            </ul>
          </div>
          <RevealItem style={styles.whoImage}>
            <PhoneImage
              src="/images/hero-phone-left.png"
              alt="Mentor profiles"
              maxWidth={220}
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
            <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>
              {BECOME_MENTOR.stepsTitle}
            </h2>
          </RevealItem>
          <RevealItem>
            <p
              style={{
                ...styles.sectionSubtitle,
                textAlign: 'center',
                marginBottom: spacing.xxxl,
              }}
            >
              {BECOME_MENTOR.stepsSubtitle}
            </p>
          </RevealItem>
          <div
            style={{
              ...styles.stepsGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            }}
          >
            {JOIN_STEPS.map((step, i) => (
              <FloatingReveal key={step.step} floatDelay={i * 0.35} enableFloat={!isMobile}>
                <div style={styles.stepCard} className="mm-card">
                  <div style={styles.stepNum}>{step.step}</div>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.description}</p>
                </div>
              </FloatingReveal>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.section} stagger={0.1} scale={0.97}>
        <div style={styles.container}>
          <RevealItem>
            <div style={styles.quoteCard} className="mm-card-soft">
              <Quote size={32} color={palette.primary} style={{ opacity: 0.4 }} />
              <p style={styles.quoteText}>"{BECOME_MENTOR.quote.text}"</p>
              <p style={styles.quoteAuthor}>{BECOME_MENTOR.quote.author}</p>
              <p style={styles.quoteRole}>{BECOME_MENTOR.quote.role}</p>
            </div>
          </RevealItem>
        </div>
      </AnimatedSection>

      <AnimatedSection
        style={{ ...styles.section, backgroundColor: palette.surface }}
        stagger={0.06}
      >
        <div style={{ ...styles.container, maxWidth: 720 }}>
          <RevealItem>
            <h2 style={styles.sectionTitle}>{BECOME_MENTOR.faqTitle}</h2>
          </RevealItem>
          <div style={styles.faqList}>
            {BECOME_MENTOR.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <RevealItem key={faq.q}>
                  <div style={styles.faqItem} className="mm-card-soft">
                    <button
                      type="button"
                      style={styles.faqButton}
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <h3 style={styles.faqQ}>{faq.q}</h3>
                      <ChevronDown
                        size={20}
                        color={palette.primary}
                        className="mm-faq-chevron"
                        data-open={isOpen ? 'true' : 'false'}
                      />
                    </button>
                    <div
                      className="mm-faq-panel"
                      data-open={isOpen ? 'true' : 'false'}
                    >
                      <div className="mm-faq-panel-inner">
                        <p style={styles.faqA} className="mm-faq-answer">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection style={styles.ctaSection} stagger={0.1}>
        <div
          style={{
            ...styles.container,
            ...styles.ctaGrid,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.ctaText}>
            <RevealItem>
              <h2 style={styles.ctaTitle}>{BECOME_MENTOR.ctaTitle}</h2>
            </RevealItem>
            <RevealItem>
              <p style={styles.ctaSubtitle}>{BECOME_MENTOR.ctaSubtitle}</p>
            </RevealItem>
            <RevealItem>
              <PlayStoreButton />
            </RevealItem>
          </div>
          <RevealItem style={styles.ctaImage}>
            <HeroPhoneShowcase compact />
          </RevealItem>
        </div>
      </AnimatedSection>
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
    fontSize: 15,
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
    fontSize: 20,
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
    fontSize: 17,
    fontWeight: 700,
    color: palette.primary,
  },
  highlightLabel: {
    fontSize: 13,
    color: palette.textSecondary,
    marginTop: 2,
  },
  statsSection: {
    padding: `${spacing.xxl}px ${pagePaddingX}px`,
    backgroundColor: palette.primary,
  },
  statsLabel: {
    margin: `0 0 ${spacing.lg}px`,
    fontSize: 15,
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
    fontSize: 32,
    fontWeight: 800,
    color: palette.white,
  },
  statDesc: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 15,
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
    height: '100%',
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
    fontSize: 21,
    fontWeight: 600,
  },
  cardDesc: {
    margin: 0,
    fontSize: 16,
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
    fontSize: 17,
    fontWeight: 600,
  },
  featureDesc: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 15,
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
    fontSize: 17,
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
    height: '100%',
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
    fontSize: 21,
    margin: `0 auto ${spacing.lg}px`,
  },
  stepTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
  },
  stepDesc: {
    margin: `${spacing.sm}px 0 0`,
    fontSize: 16,
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
    fontSize: 21,
    lineHeight: 1.7,
    color: palette.textPrimary,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    margin: 0,
    fontSize: 17,
    fontWeight: 700,
    color: palette.textPrimary,
  },
  quoteRole: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 15,
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
    padding: `${spacing.lg}px ${spacing.xl}px`,
  },
  faqButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    width: '100%',
    padding: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqQ: {
    margin: 0,
    fontSize: 19,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  faqA: {
    margin: `${spacing.md}px 0 0`,
    fontSize: 16,
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
