import { CSSProperties } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { palette } from '../constants/theme';

export const ScrollProgress: React.FC = () => {
  const fillRef = useScrollProgress<HTMLDivElement>();

  return (
    <div style={styles.track} aria-hidden="true">
      <div ref={fillRef} style={styles.fill} />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  track: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    zIndex: 200,
    pointerEvents: 'none',
    backgroundColor: 'transparent',
  },
  fill: {
    height: '100%',
    width: '100%',
    background: `linear-gradient(90deg, ${palette.primaryLight}, ${palette.primary})`,
    transform: 'scaleX(0)',
    transformOrigin: 'left center',
    willChange: 'transform',
  },
};
