import { CSSProperties, FormEvent, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle, Send } from 'lucide-react';
import { CONTACT_TOPICS, ContactTopicValue } from '../constants/contactTopics';
import { CONTACT } from '../constants/content';
import { FORMSPREE_FORM_ID } from '../constants/forms';
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
  const [formKey, setFormKey] = useState(0);

  return (
    <ContactFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />
  );
};

/** Remounts on reset so Formspree `succeeded` state clears */
const ContactFormInner: React.FC<{ onReset?: () => void }> = ({ onReset }) => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
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
      <ValidationError errors={state.errors} style={styles.formError} />

      <FormField label="Full name" error={errors.name}>
        <FormInput
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          hasError={!!errors.name}
          onChange={(e) => update('name', e.target.value)}
          disabled={state.submitting}
        />
        <ValidationError prefix="Name " field="name" errors={state.errors} style={styles.fieldError} />
      </FormField>

      <FormField label="Email" error={errors.email}>
        <FormInput
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          hasError={!!errors.email}
          onChange={(e) => update('email', e.target.value)}
          disabled={state.submitting}
        />
        <ValidationError prefix="Email " field="email" errors={state.errors} style={styles.fieldError} />
      </FormField>

      <FormField label="Topic" error={errors.topic}>
        <FormSelect
          name="topic"
          value={form.topic}
          hasError={!!errors.topic}
          onChange={(e) => update('topic', e.target.value)}
          disabled={state.submitting}
        >
          <option value="">Select a topic</option>
          {CONTACT_TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </FormSelect>
        <ValidationError prefix="Topic " field="topic" errors={state.errors} style={styles.fieldError} />
      </FormField>

      <FormField label="Message" error={errors.message}>
        <FormTextarea
          name="message"
          placeholder="Tell us how we can help..."
          value={form.message}
          hasError={!!errors.message}
          onChange={(e) => update('message', e.target.value)}
          disabled={state.submitting}
        />
        <ValidationError prefix="Message " field="message" errors={state.errors} style={styles.fieldError} />
      </FormField>

                      <button type="submit" style={styles.submit} className="mm-btn" disabled={state.submitting}>
        <Send size={18} />
        {state.submitting ? 'Sending...' : 'Submit'}
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
  formError: {
    display: 'block',
    marginBottom: spacing.lg,
    padding: spacing.md,
    backgroundColor: 'rgba(220, 38, 38, 0.08)',
    borderRadius: radius.sm,
    color: palette.danger,
    fontSize: 16,
  },
  fieldError: {
    display: 'block',
    marginTop: spacing.xs,
    fontSize: 14,
    color: palette.danger,
  },
};
