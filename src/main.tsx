import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './lib/gsap';
import './styles/motion.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img { max-width: 100%; }
  a { color: inherit; }
  button { font-family: inherit; }
  button:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const styleEl = document.createElement('style');
styleEl.textContent = globalStyles;
document.head.appendChild(styleEl);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
