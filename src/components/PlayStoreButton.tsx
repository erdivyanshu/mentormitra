import { CSSProperties } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { PLAY_STORE_URL, palette, radius, spacing } from '../constants/theme';

const BADGE_SRC = '/images/google-play-badge.png';

interface PlayStoreButtonProps {
  variant?: 'badge' | 'text';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  label?: string;
}

const BADGE_HEIGHT: Record<'sm' | 'md', number> = {
  sm: 40,
  md: 52,
};

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({
  variant = 'badge',
  size = 'md',
  fullWidth = false,
  label = 'Get the App',
}) => {
  const magneticRef = useMagnetic<HTMLAnchorElement>({
    strength: variant === 'badge' ? 10 : 8,
  });

  if (variant === 'text') {
    return (
      <a
        ref={magneticRef}
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mm-btn"
        style={{
          ...styles.textBtn,
          ...(size === 'sm' ? styles.textBtnSm : {}),
          ...(fullWidth ? styles.fullWidth : {}),
        }}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      ref={magneticRef}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mm-btn-badge"
      style={{
        ...styles.link,
        ...(fullWidth ? styles.fullWidth : {}),
      }}
      aria-label="Get it on Google Play"
    >
      <img
        src={BADGE_SRC}
        alt="Get it on Google Play"
        style={{ ...styles.badge, height: BADGE_HEIGHT[size] }}
      />
    </a>
  );
};

const styles: Record<string, CSSProperties> = {
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    lineHeight: 0,
  },
  badge: {
    width: 'auto',
    display: 'block',
  },
  textBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${spacing.md}px ${spacing.xl}px`,
    backgroundColor: palette.primary,
    color: palette.white,
    borderRadius: radius.pill,
    textDecoration: 'none',
    fontSize: 17,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    border: 'none',
    cursor: 'pointer',
  },
  textBtnSm: {
    padding: `${spacing.sm}px ${spacing.lg}px`,
    fontSize: 16,
  },
  fullWidth: {
    width: '100%',
    justifyContent: 'center',
  },
};
