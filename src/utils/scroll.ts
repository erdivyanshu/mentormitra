export const FEATURED_MENTORS_SECTION_ID = 'featured-mentors';

/** Sticky navbar height + breathing room for section scroll targets */
export const SCROLL_OFFSET = 80;

export const scrollToTop = (behavior: ScrollBehavior = 'instant'): void => {
  window.scrollTo({ top: 0, left: 0, behavior });
};

export const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth'): void => {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior });
};
