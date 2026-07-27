import { CSSProperties } from 'react';
import { Star } from 'lucide-react';
import { palette, radius, spacing } from '../constants/theme';

interface TestimonialCardProps {
  authorName: string;
  rating: number;
  comment: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  authorName,
  rating,
  comment,
}) => (
  <div style={styles.card}>
    <div style={styles.stars}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} fill={palette.primary} color={palette.primary} />
      ))}
    </div>
    <p style={styles.comment}>"{comment}"</p>
    <p style={styles.author}>— {authorName}</p>
  </div>
);

const styles: Record<string, CSSProperties> = {
  card: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  stars: {
    display: 'flex',
    gap: 2,
    marginBottom: spacing.md,
  },
  comment: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.6,
    color: palette.textPrimary,
  },
  author: {
    margin: `${spacing.md}px 0 0`,
    fontSize: 14,
    fontWeight: 600,
    color: palette.textSecondary,
  },
};
