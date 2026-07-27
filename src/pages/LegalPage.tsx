import { CSSProperties } from 'react';
import { LegalPageContent } from '../constants/legalContent';
import { fontSize, maxWidth, pagePaddingX, palette, spacing } from '../constants/theme';

interface LegalPageProps {
  content: LegalPageContent;
}

export const LegalPage: React.FC<LegalPageProps> = ({ content }) => (
  <div style={styles.page}>
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{content.title}</h1>
        <p style={styles.updated}>Last updated: {content.lastUpdated}</p>
        <p style={styles.intro}>{content.intro}</p>
      </header>

      <div style={styles.sections}>
        {content.sections.map((section) => (
          <section key={section.id} id={section.id} style={styles.section}>
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} style={styles.paragraph}>
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul style={styles.list}>
                {section.bullets.map((item, i) => (
                  <li key={i} style={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

const styles: Record<string, CSSProperties> = {
  page: {
    padding: `${spacing.huge}px ${pagePaddingX}px ${spacing.massive}px`,
    backgroundColor: palette.background,
  },
  container: {
    maxWidth: maxWidth,
    margin: '0 auto',
  },
  header: {
    marginBottom: spacing.xxxl,
    paddingBottom: spacing.xxl,
    borderBottom: `1px solid ${palette.border}`,
  },
  title: {
    margin: 0,
    fontSize: fontSize.headingL,
    fontWeight: 700,
    color: palette.textPrimary,
  },
  updated: {
    margin: `${spacing.md}px 0`,
    fontSize: fontSize.label,
    color: palette.textSecondary,
  },
  intro: {
    margin: `${spacing.lg}px 0 0`,
    fontSize: fontSize.body,
    lineHeight: 1.7,
    color: palette.textSecondary,
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxl,
  },
  section: {
    scrollMarginTop: 80,
  },
  sectionTitle: {
    margin: `0 0 ${spacing.md}px`,
    fontSize: fontSize.title,
    fontWeight: 600,
    color: palette.textPrimary,
  },
  paragraph: {
    margin: `0 0 ${spacing.md}px`,
    fontSize: fontSize.body,
    lineHeight: 1.75,
    color: palette.textSecondary,
  },
  list: {
    margin: `${spacing.sm}px 0 0`,
    paddingLeft: spacing.xxl,
  },
  listItem: {
    marginBottom: spacing.sm,
    fontSize: fontSize.body,
    lineHeight: 1.65,
    color: palette.textSecondary,
  },
};
