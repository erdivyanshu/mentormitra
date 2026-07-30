import { CSSProperties, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { palette, radius, spacing } from '../constants/theme';

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ label, error, children }) => (
  <div style={styles.field}>
    <label style={styles.label}>{label}</label>
    {children}
    {error && <span style={styles.error}>{error}</span>}
  </div>
);

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: `${spacing.md}px ${spacing.lg}px`,
  fontSize: 17,
  border: `1px solid ${palette.border}`,
  borderRadius: radius.md,
  backgroundColor: palette.card,
  color: palette.textPrimary,
  boxSizing: 'border-box',
  outline: 'none',
};

export const inputErrorStyle: CSSProperties = {
  borderColor: palette.danger,
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean };
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean };

export const FormInput: React.FC<InputProps> = ({ hasError, style, className, ...props }) => (
  <input
    className={`mm-input ${className ?? ''}`.trim()}
    style={{ ...inputStyle, ...(hasError ? inputErrorStyle : {}), ...style }}
    {...props}
  />
);

export const FormSelect: React.FC<SelectProps> = ({ hasError, style, className, children, ...props }) => (
  <select
    className={`mm-input ${className ?? ''}`.trim()}
    style={{ ...inputStyle, ...(hasError ? inputErrorStyle : {}), ...style }}
    {...props}
  >
    {children}
  </select>
);

export const FormTextarea: React.FC<TextareaProps> = ({ hasError, style, className, ...props }) => (
  <textarea
    className={`mm-input ${className ?? ''}`.trim()}
    style={{
      ...inputStyle,
      minHeight: 120,
      resize: 'vertical',
      ...(hasError ? inputErrorStyle : {}),
      ...style,
    }}
    {...props}
  />
);

const styles: Record<string, CSSProperties> = {
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  error: {
    fontSize: 14,
    color: palette.danger,
  },
};
