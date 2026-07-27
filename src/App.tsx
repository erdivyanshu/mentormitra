import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { BecomeMentorPage } from './pages/BecomeMentorPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import {
  CookiePolicyPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
} from './pages/legal';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors" element={<Navigate to="/#featured-mentors" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/become-mentor" element={<BecomeMentorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
