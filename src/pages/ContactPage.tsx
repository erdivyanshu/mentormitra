import { CSSProperties } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { APP, CONTACT } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, spacing } from '../constants/theme';
import { AnimatedSection, RevealItem } from '../components/AnimatedSection';
import { ContactForm } from '../components/ContactForm';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePageEnter } from '../hooks/usePageEnter';

export const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  const pageRef = usePageEnter<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <AnimatedSection style={styles.page} stagger={0.12} y={32}>
        <div
          style={{
            ...styles.container,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div style={styles.info}>
            <RevealItem>
              <h1 style={styles.title}>{CONTACT.title}</h1>
            </RevealItem>
            <RevealItem>
              <p style={styles.subtitle}>{CONTACT.subtitle}</p>
            </RevealItem>

            <RevealItem>
              <div style={styles.infoBlock} className="mm-icon-lift">
                <span className="mm-icon" style={{ display: 'inline-flex' }}>
                  <Mail size={20} color={palette.primary} />
                </span>
                <div>
                  <p style={styles.infoLabel}>Email us</p>
                  <a
                    href={`mailto:${APP.supportEmail}`}
                    style={styles.email}
                    className="mm-link"
                  >
                    {APP.supportEmail}
                  </a>
                </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div style={styles.infoBlock} className="mm-icon-lift">
                <span className="mm-icon" style={{ display: 'inline-flex' }}>
                  <MessageSquare size={20} color={palette.primary} />
                </span>
                <div>
                  <p style={styles.infoLabel}>Note</p>
                  <p style={styles.note}>{CONTACT.supportNote}</p>
                </div>
              </div>
            </RevealItem>
          </div>

          <RevealItem style={styles.formWrap}>
            <ContactForm />
          </RevealItem>
        </div>
      </AnimatedSection>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  page: {
    padding: `${spacing.huge}px ${pagePaddingX}px`,
  },
  container: {
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    gap: spacing.xxxl,
    alignItems: 'flex-start',
  },
  info: {
    flex: 1,
    minWidth: 260,
  },
  title: {
    margin: 0,
    fontSize: fontSize.headingL,
    fontWeight: 700,
  },
  subtitle: {
    margin: `${spacing.md}px 0 ${spacing.xxl}px`,
    fontSize: fontSize.body,
    color: palette.textSecondary,
    lineHeight: 1.6,
  },
  infoBlock: {
    display: 'flex',
    gap: spacing.md,
    marginBottom: spacing.xl,
    alignItems: 'flex-start',
  },
  infoLabel: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: palette.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  email: {
    display: 'block',
    marginTop: spacing.xs,
    color: palette.primary,
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: 17,
    width: 'fit-content',
  },
  note: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 16,
    color: palette.textSecondary,
    lineHeight: 1.5,
  },
  formWrap: {
    flex: 1.2,
    width: '100%',
  },
};
