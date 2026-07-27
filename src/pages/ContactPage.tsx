import { CSSProperties } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { APP, CONTACT } from '../constants/content';
import { fontSize, maxWidth, pagePaddingX, palette, spacing } from '../constants/theme';
import { ContactForm } from '../components/ContactForm';
import { useIsMobile } from '../hooks/useIsMobile';

export const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div style={styles.page}>
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <div style={styles.info}>
          <h1 style={styles.title}>{CONTACT.title}</h1>
          <p style={styles.subtitle}>{CONTACT.subtitle}</p>

          <div style={styles.infoBlock}>
            <Mail size={20} color={palette.primary} />
            <div>
              <p style={styles.infoLabel}>Email us</p>
              <a href={`mailto:${APP.supportEmail}`} style={styles.email}>
                {APP.supportEmail}
              </a>
            </div>
          </div>

          <div style={styles.infoBlock}>
            <MessageSquare size={20} color={palette.primary} />
            <div>
              <p style={styles.infoLabel}>Note</p>
              <p style={styles.note}>{CONTACT.supportNote}</p>
            </div>
          </div>
        </div>

        <div style={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
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
    fontSize: 13,
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
    fontSize: 15,
  },
  note: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 14,
    color: palette.textSecondary,
    lineHeight: 1.5,
  },
  formWrap: {
    flex: 1.2,
    width: '100%',
  },
};
