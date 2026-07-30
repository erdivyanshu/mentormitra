import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP, NAV_LINKS } from '../constants/content';
import { LOGO_SRC, palette, navMaxWidth, pagePaddingX, spacing } from '../constants/theme';
import { NavScrollLink } from './NavScrollLink';
import { PlayStoreButton } from './PlayStoreButton';
import { useIsMobile } from '../hooks/useIsMobile';
import { useNavbarAnimation } from '../hooks/useNavbarAnimation';

interface NavbarProps {
  onHomeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const headerRef = useNavbarAnimation<HTMLElement>();
  const close = () => setOpen(false);

  const handleBrandClick = () => {
    close();
    onHomeClick?.();
  };

  return (
    <header ref={headerRef} className="mm-nav" style={styles.header} data-scrolled="false">
      <div
        className="mm-nav-inner"
        style={{
          ...styles.inner,
          ...(isMobile ? styles.innerMobile : {}),
        }}
      >
        <Link to="/" style={styles.brand} onClick={handleBrandClick}>
          <img src={LOGO_SRC} alt={APP.name} style={styles.logo} />
          <span style={styles.brandName}>{APP.name}</span>
        </Link>

        {!isMobile ? (
          <>
            <nav style={styles.centerNav}>
              {NAV_LINKS.map((link) => (
                <NavScrollLink
                  key={link.label}
                  item={link}
                  style={styles.navLink}
                  className="mm-link"
                />
              ))}
            </nav>
            <div style={styles.ctaWrap}>
              <PlayStoreButton variant="text" size="sm" />
            </div>
          </>
        ) : (
          <button
            type="button"
            style={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMobile && open && (
        <nav style={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <NavScrollLink
              key={link.label}
              item={link}
              style={styles.mobileLink}
              onNavigate={close}
            />
          ))}
          <div style={styles.mobileCta}>
            <PlayStoreButton variant="text" fullWidth size="sm" />
          </div>
        </nav>
      )}
    </header>
  );
};

const styles: Record<string, CSSProperties> = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(246, 255, 246, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${palette.border}`,
  },
  inner: {
    maxWidth: navMaxWidth,
    margin: '0 auto',
    padding: `13px ${pagePaddingX}px`,
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    gap: spacing.lg,
  },
  innerMobile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    textDecoration: 'none',
    color: palette.textPrimary,
    justifySelf: 'start',
  },
  logo: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  brandName: {
    fontWeight: 700,
    fontSize: 19,
  },
  centerNav: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xxl,
    justifySelf: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: palette.textSecondary,
    fontSize: 17,
    fontWeight: 500,
    cursor: 'pointer',
  },
  ctaWrap: {
    justifySelf: 'end',
  },
  menuBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: palette.textPrimary,
    padding: spacing.sm,
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${pagePaddingX}px ${spacing.xl}px`,
    gap: spacing.md,
    borderTop: `1px solid ${palette.border}`,
    backgroundColor: 'rgba(246, 255, 246, 0.96)',
  },
  mobileLink: {
    textDecoration: 'none',
    color: palette.textPrimary,
    fontSize: 19,
    fontWeight: 500,
    padding: `${spacing.sm}px 0`,
    cursor: 'pointer',
  },
  mobileCta: {
    marginTop: spacing.sm,
  },
};
