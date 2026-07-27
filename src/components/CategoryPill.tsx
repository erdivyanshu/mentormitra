import { CSSProperties } from 'react';
import {
  BarChart3,
  Boxes,
  Briefcase,
  Code2,
  Megaphone,
  PenTool,
  Rocket,
  Wallet,
  LucideIcon,
} from 'lucide-react';
import { palette, radius, spacing } from '../constants/theme';

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  Boxes,
  Megaphone,
  BarChart3,
  Wallet,
  Briefcase,
  Rocket,
};

interface CategoryPillProps {
  name: string;
  iconName: string;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({ name, iconName }) => {
  const Icon = iconMap[iconName] ?? Briefcase;

  return (
    <div style={styles.pill}>
      <Icon size={16} color={palette.primary} />
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
    fontSize: 14,
    fontWeight: 500,
    color: palette.textPrimary,
  },
};
