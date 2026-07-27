import { COOKIE_POLICY, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../../constants/legalContent';
import { LegalPage } from '../LegalPage';

export const PrivacyPolicyPage: React.FC = () => (
  <LegalPage content={PRIVACY_POLICY} />
);

export const TermsOfServicePage: React.FC = () => (
  <LegalPage content={TERMS_OF_SERVICE} />
);

export const CookiePolicyPage: React.FC = () => (
  <LegalPage content={COOKIE_POLICY} />
);
