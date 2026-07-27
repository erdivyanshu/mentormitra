export const CONTACT_TOPICS = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'career', label: 'Career Guidance' },
  { value: 'mentor', label: 'Become a Mentor' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing & Payments' },
  { value: 'partnership', label: 'Partnership / Business' },
  { value: 'feedback', label: 'Feedback & Suggestions' },
] as const;

export type ContactTopicValue = (typeof CONTACT_TOPICS)[number]['value'];
