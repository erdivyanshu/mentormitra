import { CSSProperties } from 'react';
import { parseStatValue, useCounter } from '../hooks/useCounter';

interface StatCounterProps {
  value: string;
  style?: CSSProperties;
  className?: string;
}

/** Displays an animated count for strings like `500+`, `10k+`, `4.8★`. */
export const StatCounter: React.FC<StatCounterProps> = ({ value, style, className }) => {
  const parsed = parseStatValue(value);
  const ref = useCounter<HTMLParagraphElement>({
    end: parsed.end,
    decimals: parsed.decimals,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
  });

  return (
    <p ref={ref} style={style} className={className} aria-label={value}>
      {value}
    </p>
  );
};
