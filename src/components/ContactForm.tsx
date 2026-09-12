import { CSSProperties, FormEvent, useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { CONTACT_TOPICS, ContactTopicValue } from '../constants/contactTopics';
import { CONTACT } from '../constants/content';
import { palette, radius, spacing } from '../constants/theme';
import { FormField, FormInput, FormSelect, FormTextarea } from './FormField';

interface FormState {
  name: string;
  email: string;
  topic: ContactTopicValue | '';
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMIT_DELAY_MS = 800;

const validate = (form: FormState): FormErrors => {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  else if (form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(form.email)) errors.email = 'Enter a valid email address';
  if (!form.topic) errors.topic = 'Please select a topic';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  else if (form.message.length > 1000) errors.message = 'Message must be under 1000 characters';
  return errors;
};

const emptyForm: FormState = { name: '', email: '', topic: '', message: '' };

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSucceeded(true);
      setForm(emptyForm);
    }, SUBMIT_DELAY_MS);
  };

  const onReset = () => {
    setSucceeded(false);
    setErrors({});
    setForm(emptyForm);
  };

  if (succeeded) {
    return (
      <div style={styles.success}>
        <CheckCircle size={40} color={palette.primary} />
        <p style={styles.successText}>{CONTACT.successMessage}</p>
        <button type="button" style={styles.resetBtn} onClick={onReset}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={styles.form} noValidate>
      <FormField label="Full name" error={errors.name}>
        <FormInput
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          hasError={!!errors.name}
          onChange={(e) => update('name', e.target.value)}
          disabled={submitting}
        />
      </FormField>

      <FormField label="Email" error={errors.email}>
        <FormInput
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          hasError={!!errors.email}
          onChange={(e) => update('email', e.target.value)}
          disabled={submitting}
        />
      </FormField>

      <FormField label="Topic" error={errors.topic}>
        <FormSelect
          name="topic"
          value={form.topic}
          hasError={!!errors.topic}
          onChange={(e) => update('topic', e.target.value)}
          disabled={submitting}
        >
          <option value="">Select a topic</option>
          {CONTACT_TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </FormSelect>
      </FormField>

      <FormField label="Message" error={errors.message}>
        <FormTextarea
          name="message"
          placeholder="Tell us how we can help..."
          value={form.message}
          hasError={!!errors.message}
          onChange={(e) => update('message', e.target.value)}
          disabled={submitting}
        />
      </FormField>

      <button type="submit" style={styles.submit} className="mm-btn" disabled={submitting}>
        <Send size={18} />
        {submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
};

const styles: Record<string, CSSProperties> = {
  form: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.xxl,
  },
  submit: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.md}px ${spacing.xxl}px`,
    backgroundColor: palette.primary,
    color: palette.white,
    border: 'none',
    borderRadius: radius.pill,
    fontSize: 17,
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    justifyContent: 'center',
  },
  success: {
    backgroundColor: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: radius.lg,
    padding: spacing.huge,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.lg,
  },
  successText: {
    margin: 0,
    fontSize: 19,
    color: palette.textPrimary,
    lineHeight: 1.5,
  },
  resetBtn: {
    background: 'none',
    border: 'none',
    color: palette.primary,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};
