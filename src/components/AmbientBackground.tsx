import { CSSProperties } from 'react';
import { palette } from '../constants/theme';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

/** Soft ambient gradient blobs — CSS-driven, disabled on mobile / reduced motion. */
export const AmbientBackground: React.FC = () => {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  if (isMobile || reduced) return null;

  return (
    <div style={styles.wrap} aria-hidden="true">
      <span style={{ ...styles.blob, ...styles.blobA }} className="mm-blob" />
      <span style={{ ...styles.blob, ...styles.blobB }} className="mm-blob mm-blob--slow" />
      <span style={{ ...styles.blob, ...styles.blobC }} className="mm-blob mm-blob--alt" />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  wrap: {
    position: 'fixed',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.35,
    willChange: 'transform',
  },
  blobA: {
    width: 420,
    height: 420,
    top: '8%',
    left: '-8%',
    background: `radial-gradient(circle, ${palette.primaryLight}55 0%, transparent 70%)`,
  },
  blobB: {
    width: 360,
    height: 360,
    top: '55%',
    right: '-6%',
    background: `radial-gradient(circle, ${palette.primary}33 0%, transparent 70%)`,
  },
  blobC: {
    width: 280,
    height: 280,
    bottom: '10%',
    left: '35%',
    background: `radial-gradient(circle, ${palette.surface} 0%, transparent 70%)`,
    opacity: 0.5,
  },
};
