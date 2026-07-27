import { CSSProperties } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
}) => (
  <div style={{ ...styles.wrap, textAlign: align }}>
    <h2 style={styles.title}>{title}</h2>
    {subtitle && (
      <p
        style={{
          ...styles.subtitle,
          ...(align === 'left' ? styles.subtitleLeft : {}),
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const styles: Record<string, CSSProperties> = {
  wrap: {
    marginBottom: 40,
  },
  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
    color: '#111827',
  },
  subtitle: {
    margin: '12px 0 0',
    fontSize: 16,
    color: '#6B7280',
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitleLeft: {
    marginLeft: 0,
    marginRight: 0,
  },
};
