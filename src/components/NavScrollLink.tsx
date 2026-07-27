import { CSSProperties } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scroll';

export interface NavItem {
  label: string;
  to?: string;
  hash?: string;
}

interface NavScrollLinkProps {
  item: NavItem;
  style: CSSProperties;
  onNavigate?: () => void;
}

export const NavScrollLink: React.FC<NavScrollLinkProps> = ({
  item,
  style,
  onNavigate,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (item.hash) {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onNavigate?.();

      if (location.pathname !== '/') {
        navigate(`/#${item.hash}`);
        return;
      }

      scrollToSection(item.hash);
      window.history.replaceState(null, '', `/#${item.hash}`);
    };

    return (
      <a href={`/#${item.hash}`} onClick={handleClick} style={style}>
        {item.label}
      </a>
    );
  }

  const handleClick = () => {
    onNavigate?.();
    if (location.pathname === (item.to ?? '/')) {
      scrollToTop('smooth');
    }
  };

  return (
    <Link to={item.to ?? '/'} style={style} onClick={handleClick}>
      {item.label}
    </Link>
  );
};
