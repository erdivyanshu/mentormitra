import { CSSProperties } from 'react';
import {
  Atom,
  Calculator,
  Dna,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  LucideIcon,
  School,
  Trophy,
} from 'lucide-react';
import { palette, radius, spacing } from '../constants/theme';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Trophy,
  HeartPulse,
  School,
  Atom,
  FlaskConical,
  Calculator,
  Dna,
};

interface CategoryPillProps {
  name: string;
  iconName: string;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({ name, iconName }) => {
  const Icon = iconMap[iconName] ?? GraduationCap;

  return (
    <div style={styles.pill} className="mm-pill mm-icon-lift">
      <span className="mm-icon" style={{ display: 'inline-flex' }}>
        <Icon size={16} color={palette.primary} />
      </span>
      <span>{name}</span>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.sm}px ${spacing.lg}px`,
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.pill,
    fontSize: 16,
    fontWeight: 500,
    color: palette.textPrimary,
  },
};
