import { CSSProperties, ReactNode } from 'react';
import { useFloating } from '../hooks/useFloating';
import { useRevealAnimation } from '../hooks/useRevealAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;
  as?: 'section' | 'div' | 'footer';
  stagger?: number;
  y?: number;
  scale?: number;
  /** Reveal child selector (default `[data-reveal]`). */
  childSelector?: string;
}

/** Section wrapper with once-only scroll reveal on `[data-reveal]` children. */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  style,
  id,
  className,
  as: Tag = 'section',
  stagger = 0.1,
  y = 40,
  scale,
  childSelector,
}) => {
  const ref = useRevealAnimation<HTMLElement>({
    stagger,
    y,
    scale,
    childSelector,
    duration: 0.95,
  });

  return (
    <Tag ref={ref as React.RefObject<HTMLElement>} id={id} style={style} className={className}>
      {children}
    </Tag>
  );
};

interface FloatingRevealProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  floatDelay?: number;
  floatY?: number;
  enableFloat?: boolean;
}

/** Outer reveal target + inner float layer for cards. */
export const FloatingReveal: React.FC<FloatingRevealProps> = ({
  children,
  style,
  className,
  floatDelay = 0,
  floatY = 5,
  enableFloat = true,
}) => {
  const floatRef = useFloating<HTMLDivElement>({
    y: floatY,
    duration: 4.5 + floatDelay,
    delay: floatDelay,
    enabled: enableFloat,
  });

  return (
    <div style={{ height: '100%', ...style }} className={className} data-reveal>
      <div ref={floatRef} style={{ height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

interface RevealItemProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const RevealItem: React.FC<RevealItemProps> = ({ children, style, className }) => (
  <div style={style} className={className} data-reveal>
    {children}
  </div>
);

/** Split a heading into word spans for staggered reveal. */
export const splitWords = (
  text: string,
  keyPrefix: string,
): React.ReactNode[] =>
  text.split(' ').map((word, i) => (
    <span
      key={`${keyPrefix}-${i}`}
      data-hero-word
      style={{ display: 'inline-block', marginRight: '0.28em' }}
    >
      {word}
    </span>
  ));
