export const palette = {
  primary: '#2E7D32',
  primaryLight: '#4CAF50',
  primaryDark: '#1B5E20',
  background: '#F6FFF6',
  card: '#FFFFFF',
  surface: '#E8F5E9',
  border: '#DCEEDC',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  danger: '#DC2626',
  white: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  massive: 56,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export const fontSize = {
  headingXL: 46,
  headingL: 36,
  headingM: 28,
  title: 23,
  body: 19,
  label: 16,
  caption: 14,
} as const;

export const maxWidth = 1280;

/** Navbar inner content sits slightly narrower than page content */
export const navMaxWidth = maxWidth - 3;

/** Horizontal padding for page sections on desktop */
export const pagePaddingX = 40;

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.mentormitra';

/** Bump `v` whenever logo image files change (forces CDN/browser cache refresh). */
export const LOGO_SRC = '/logo-zoomed.png?v=2';
export const FAVICON_SRC = '/logo.png?v=2';
