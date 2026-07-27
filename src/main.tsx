import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; -webkit-font-smoothing: antialiased; }
  a:hover { opacity: 0.85; }
  button:hover:not(:disabled) { opacity: 0.9; }
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
