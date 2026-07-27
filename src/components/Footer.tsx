import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { APP, FOOTER_LEGAL_LINKS, NAV_LINKS } from '../constants/content';
import { maxWidth, pagePaddingX, palette, spacing } from '../constants/theme';
import { NavScrollLink } from './NavScrollLink';

const LOGO_SRC = '/logo-zoomed.png';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <img src={LOGO_SRC} alt={APP.name} style={styles.logo} />
          <div>
            <p style={styles.brandName}>{APP.name}</p>
            <p style={styles.tagline}>{APP.tagline}</p>
          </div>
        </div>

        <div style={styles.column}>
          <p style={styles.columnTitle}>Explore</p>
          {NAV_LINKS.map((link) => (
            <NavScrollLink key={link.label} item={link} style={styles.link} />
          ))}
        </div>

        <div style={styles.column}>
          <p style={styles.columnTitle}>Legal</p>
          {FOOTER_LEGAL_LINKS.map((link) => (
            <Link key={link.to} to={link.to} style={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div style={styles.column}>
          <p style={styles.columnTitle}>Contact</p>
          <a href={`mailto:${APP.supportEmail}`} style={styles.email}>
            {APP.supportEmail}
          </a>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copy}>
          © {year} {APP.name}. All rights reserved.
        </p>
        <div style={styles.bottomLinks}>
          {FOOTER_LEGAL_LINKS.map((link) => (
            <Link key={link.to} to={link.to} style={styles.bottomLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, CSSProperties> = {
  footer: {
    backgroundColor: palette.surface,
    borderTop: `1px solid ${palette.border}`,
    marginTop: 'auto',
  },
  inner: {
    maxWidth: maxWidth,
    margin: '0 auto',
    padding: `${spacing.huge}px ${pagePaddingX}px`,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: spacing.xxxl,
  },
  brand: {
    display: 'flex',
    gap: spacing.md,
    alignItems: 'flex-start',
    minWidth: 200,
  },
  logo: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  brandName: {
    margin: 0,
    fontWeight: 700,
    fontSize: 16,
    color: palette.textPrimary,
  },
  tagline: {
    margin: `${spacing.xs}px 0 0`,
    fontSize: 13,
    color: palette.textSecondary,
    maxWidth: 200,
    lineHeight: 1.4,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
  columnTitle: {
    margin: `0 0 ${spacing.sm}px`,
    fontSize: 13,
    fontWeight: 700,
    color: palette.textPrimary,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  link: {
    textDecoration: 'none',
    color: palette.textSecondary,
    fontSize: 14,
    lineHeight: 1.6,
    cursor: 'pointer',
  },
  email: {
    color: palette.primary,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.6,
  },
  bottom: {
    borderTop: `1px solid ${palette.border}`,
    padding: `${spacing.lg}px ${pagePaddingX}px`,
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  copy: {
    margin: 0,
    fontSize: 13,
    color: palette.textSecondary,
  },
  bottomLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  bottomLink: {
    textDecoration: 'none',
    color: palette.textSecondary,
    fontSize: 13,
  },
};
