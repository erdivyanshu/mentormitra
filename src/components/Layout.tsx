import { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { palette } from '../constants/theme';
import { scrollToTop } from '../utils/scroll';

export const Layout: React.FC = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      scrollToTop('smooth');
      if (location.hash) {
        window.history.replaceState(null, '', '/');
      }
    }
  };

  return (
    <div style={styles.wrapper}>
      <ScrollToTop />
      <Navbar onHomeClick={handleHomeClick} />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: palette.background,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: palette.textPrimary,
  },
  main: {
    flex: 1,
  },
};
