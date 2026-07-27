import { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME } from '../constants/content';
import { PLAY_STORE_URL, palette, spacing } from '../constants/theme';

interface ExploreAllMentorsTileProps {
  spanColumns?: number;
}

export const ExploreAllMentorsTile: React.FC<ExploreAllMentorsTileProps> = ({
  spanColumns = 2,
}) => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      ...styles.tile,
      ...(spanColumns > 1 ? { gridColumn: `span ${spanColumns}` } : {}),
    }}
  >
    <span style={styles.label}>{HOME.exploreAllMentors}</span>
    <ArrowRight size={20} />
  </a>
);

const styles: Record<string, CSSProperties> = {
  tile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    minHeight: 200,
    padding: spacing.xxl,
    textDecoration: 'none',
    color: palette.primary,
    fontSize: 16,
    fontWeight: 600,
  },
  label: {
    lineHeight: 1.3,
  },
};
