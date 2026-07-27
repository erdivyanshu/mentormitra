import { CSSProperties } from 'react';
import { palette, radius } from '../constants/theme';
import { useIsMobile } from '../hooks/useIsMobile';

interface HeroPhoneShowcaseProps {
  /** Show only the center phone (mobile / compact) */
  compact?: boolean;
  /** Which center image to use */
  centerSrc?: string;
}

const IMG = {
  left: '/images/hero-phone-left.png',
  center: '/images/hero-phone-center.png',
  right: '/images/hero-phone-right.png',
};

export const HeroPhoneShowcase: React.FC<HeroPhoneShowcaseProps> = ({
  compact = false,
  centerSrc = IMG.center,
}) => {
  const isMobile = useIsMobile();
  const showSide = !compact && !isMobile;

  return (
    <div style={{ ...styles.wrap, height: compact || isMobile ? 320 : 480 }}>
      <div style={styles.glow} />
      {showSide && (
        <img src={IMG.left} alt="Mentor discovery" style={{ ...styles.phone, ...styles.left }} />
      )}
      <img
        src={centerSrc}
        alt="Mentor Mitra app"
        style={{
          ...styles.phone,
          ...(showSide ? styles.center : styles.centerSolo),
        }}
      />
      {showSide && (
        <img src={IMG.right} alt="Chat with mentor" style={{ ...styles.phone, ...styles.right }} />
      )}
    </div>
  );
};

interface PhoneImageProps {
  src?: string;
  alt?: string;
  maxWidth?: number;
}

export const PhoneImage: React.FC<PhoneImageProps> = ({
  src = IMG.center,
  alt = 'Mentor Mitra app',
  maxWidth = 260,
}) => (
  <img src={src} alt={alt} style={{ width: '100%', maxWidth, objectFit: 'contain', borderRadius: radius.xl }} />
);

const styles: Record<string, CSSProperties> = {
  wrap: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${palette.primaryLight}44 0%, transparent 70%)`,
    filter: 'blur(24px)',
    zIndex: 0,
  },
  phone: {
    position: 'absolute',
    objectFit: 'contain',
    borderRadius: radius.xl,
    boxShadow: '0 20px 48px rgba(11, 20, 12, 0.14)',
    zIndex: 1,
  },
  left: {
    width: '36%',
    maxWidth: 200,
    left: '0%',
    top: '14%',
    transform: 'rotate(-9deg)',
    opacity: 0.9,
    zIndex: 1,
  },
  center: {
    width: '44%',
    maxWidth: 240,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
  },
  centerSolo: {
    position: 'relative',
    width: 'auto',
    maxWidth: 220,
    left: 'auto',
    top: 'auto',
    transform: 'none',
    zIndex: 2,
  },
  right: {
    width: '36%',
    maxWidth: 200,
    right: '0%',
    top: '14%',
    transform: 'rotate(9deg)',
    opacity: 0.9,
    zIndex: 2,
  },
};
