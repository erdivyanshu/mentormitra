import { CSSProperties } from 'react';
import { BadgeCheck, Star, Video } from 'lucide-react';
import { Mentor } from '../constants/mentors';
import { PLAY_STORE_URL, palette, radius, spacing } from '../constants/theme';

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => (
  <div style={styles.card}>
    <img src={mentor.avatar} alt={mentor.name} style={styles.avatar} />
    <div style={styles.body}>
      <div style={styles.nameRow}>
        <h3 style={styles.name}>{mentor.name}</h3>
        {mentor.verified && <BadgeCheck size={16} color={palette.primary} />}
      </div>
      <p style={styles.headline}>{mentor.headline}</p>
      <div style={styles.meta}>
        <span style={styles.category}>{mentor.category}</span>
        <span style={styles.rating}>
          <Star size={14} fill={palette.primary} color={palette.primary} />
          {mentor.rating.toFixed(1)}
        </span>
      </div>
      <div style={styles.footer}>
        <p style={styles.rate}>₹{mentor.hourlyRate}/hr</p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.joinBtn}
        >
          <Video size={16} />
          Join session
        </a>
      </div>
    </div>
  </div>
);

const styles: Record<string, CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xl,
    textAlign: 'left',
    width: '100%',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.pill,
    objectFit: 'cover',
    marginBottom: spacing.md,
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  nameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xs,
  },
  name: {
    margin: 0,
    fontSize: 17,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  headline: {
    margin: `${spacing.xs}px 0`,
    fontSize: 13,
    color: palette.textSecondary,
    lineHeight: 1.4,
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  category: {
    fontSize: 12,
    fontWeight: 500,
    color: palette.primary,
    backgroundColor: palette.surface,
    padding: `${spacing.xs}px ${spacing.sm}px`,
    borderRadius: radius.pill,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  rate: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: palette.textPrimary,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  joinBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    padding: `${spacing.sm}px ${spacing.lg}px`,
    backgroundColor: palette.primary,
    color: palette.white,
    borderRadius: radius.pill,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
};
