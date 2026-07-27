import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scroll';

/**
 * Resets scroll on route changes and handles hash targets after navigation.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => scrollToSection(id), 150);
      return () => window.clearTimeout(timer);
    }

    scrollToTop('instant');
  }, [pathname, hash]);

  return null;
};
