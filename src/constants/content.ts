export const APP = {
  name: "Mentor Mitra",
  tagline: "Learn from the best, one session at a time",
  supportEmail: "info@mymentormitra.in",
} as const;

export const NAV_LINKS = [
  { label: "Mentors", hash: "featured-mentors" },
  { to: "/about", label: "About" },
  { to: "/become-mentor", label: "Become a Mentor" },
  { to: "/contact", label: "Contact" },
] as const;

export const HOME = {
  heroBadge: "Verified expert mentorship",
  heroHeadlineBefore: "Connect with",
  heroHeadlineHighlight: "mentors",
  heroHeadlineAfter: "on call & chat",
  heroDescription:
    "Get personalised guidance for JEE Main, JEE Advanced, NEET & BITSAT - book 1:1 video sessions, clear doubts, and prep smarter.",
  heroFeatureTags: [
    { icon: "ShieldCheck", label: "Verified mentors" },
    { icon: "Clock", label: "24×7 booking" },
    { icon: "Video", label: "Video & chat" },
    { icon: "Languages", label: "Hindi & English" },
  ],
  howItWorksTitle: "How it works",
  categoriesTitle: "Browse categories",
  featuredTitle: "Connect with mentors",
  featuredSubtitle:
    "Tap any mentor to open the app and book a session with them.",
  exploreAllMentors: "Explore all mentors",
  testimonialsTitle: "What learners say",
  finalCtaTitle: "Start your journey today",
  finalCtaSubtitle: "Download the app and book your first session.",
} as const;

export const ABOUT = {
  heroBadge: "Our story",
  title: "Built by aspirants, for aspirants",
  subtitle:
    "We know what JEE and NEET prep feels like - the long syllabus, the mock-test anxiety, the nights when one concept refuses to click. Mentor Mitra exists so no student has to face that alone. Talk to someone who has walked the same path and come out the other side.",
  storyTitle: "Why we built this",
  storyParagraphs: [
    "We were once in the same phase you are in now. Endless chapters, coaching notes, and YouTube playlists - but what we needed most was a person who had already cleared the exam and could say, \"Here's how I approached this,\" not another generic tip.",
    "That access is hard to find. Not every student has a senior in IIT or AIIMS to call. Coaching batches are large. Doubts pile up. Motivation dips. We built Mentor Mitra so 1:1 guidance from real JEE and NEET mentors is a tap away - for strategy, weak chapters, mock analysis, or simply clarity when prep feels overwhelming.",
    "Every mentor on the platform is verified for exam background and session quality. You browse by subject or exam, see ratings from other aspirants, book a slot that fits your study schedule, and show up with a clear goal. We went through that journey. Now we help you through yours.",
  ],
  beliefTitle: "What we believe",
  beliefs: [
    {
      title: "Guidance should be personal",
      description:
        "A one-size-fits-all timetable does not fix your Physics weak spots. Good mentorship answers your exact doubt with the context of someone who cracked the same exam.",
    },
    {
      title: "Every aspirant deserves access",
      description:
        "You should not need the right coaching centre or family network to talk to someone who cleared JEE or NEET. That help should be available to any serious student.",
    },
    {
      title: "Mentors who lived it, teach it best",
      description:
        "Rankers, droppers who finally made it, and subject experts who remember the grind make the best guides - because they have sat where you are sitting.",
    },
  ],
  differenceTitle: "What makes Mentor Mitra different",
  differences: [
    {
      stat: "500+",
      label: "Verified mentors",
      detail:
        "Across JEE Main, JEE Advanced, NEET, BITSAT, and PCMB subjects.",
    },
    {
      stat: "4.8★",
      label: "Average session rating",
      detail:
        "Students rate every session - low-rated mentors are reviewed and removed.",
    },
    {
      stat: "₹100+",
      label: "Sessions from",
      detail:
        "Flexible pricing set by mentors. Pay only for the time you book.",
    },
    {
      stat: "8",
      label: "Exam categories",
      detail:
        "From JEE & NEET to Physics, Chemistry, Maths, and Biology - find the right mentor fast.",
    },
  ],
  audienceTitle: "Who we help",
  audienceSubtitle:
    "Mentor Mitra is for students preparing for competitive exams - and for mentors who want to give back the guidance they once needed.",
  audiences: [
    {
      title: "JEE & NEET aspirants",
      description:
        "Get 1:1 help on concepts, syllabus planning, problem-solving, mock-test analysis, and staying consistent through the long prep cycle - from mentors who cracked JEE or NEET themselves.",
    },
    {
      title: "School students (Class 9–12)",
      description:
        "Building toward boards or entrance exams? Talk to someone who started where you are - for subject clarity, study habits, coaching choices, and early strategy before the pressure peaks.",
    },
    {
      title: "Mentors & seniors",
      description:
        "Already in IIT, NIT, AIIMS, or medical college? Share what you learned with juniors preparing for the same exams - on your schedule, at your rate.",
    },
  ],
  ctaTitle: "Ready to find your mentor?",
  ctaSubtitle:
    "Download the app, browse JEE & NEET mentors, and book your first session.",
} as const;

export const BECOME_MENTOR = {
  heroBadge: "For JEE & NEET mentors",
  title: "Turn your experience into income - on your terms.",
  subtitle:
    "Mentor Mitra connects you with motivated JEE, NEET, and BITSAT aspirants who need real guidance - not another generic course. Set your hourly rate, pick your availability, and mentor from anywhere.",
  heroHighlights: [
    { value: "₹100–₹500", label: "Typical hourly rate" },
    { value: "Flexible", label: "You choose your hours" },
    { value: "Weekly", label: "Payouts to your bank" },
  ],
  statsTitle: "Mentors on Mentor Mitra",
  stats: [
    { value: "₹74k+", label: "Avg monthly earnings" },
    { value: "4.9★", label: "Mentor satisfaction" },
    { value: "98%", label: "Session completion rate" },
    { value: "1,200+", label: "Sessions per month" },
  ],
  benefitsTitle: "Why mentors choose us",
  benefitsSubtitle:
    "We handle discovery, booking, payments, and support - so you can focus on what you do best: mentoring.",
  platformTitle: "Everything you need in one app",
  platformFeatures: [
    {
      icon: "LayoutDashboard",
      title: "Mentor dashboard",
      description:
        "Track earnings, upcoming sessions, ratings, and student feedback from a single clean dashboard.",
    },
    {
      icon: "Wallet",
      title: "Secure wallet & payouts",
      description:
        "Earnings land in your wallet after each session. Withdraw to your bank weekly with transparent fee breakdown.",
    },
    {
      icon: "Calendar",
      title: "Smart scheduling",
      description:
        "Set your availability, block off days, and let students book slots that work for both of you.",
    },
    {
      icon: "BadgeCheck",
      title: "Verified mentor badge",
      description:
        "Stand out with a verified profile. We review your background so students trust your expertise.",
    },
    {
      icon: "MessageSquare",
      title: "In-app chat",
      description:
        "Message students before sessions, share prep materials, and follow up - all inside the app.",
    },
    {
      icon: "Video",
      title: "Built-in video calls",
      description:
        "No Zoom links to manage. Join sessions directly from the app with reliable video and screen share.",
    },
  ],
  whoTitle: "Who makes a great mentor?",
  whoSubtitle:
    "If you've cracked JEE Main, JEE Advanced, or NEET - or mentored aspirants through them - students want to learn from you.",
  whoProfiles: [
    "IIT / NIT / IIIT students & alumni (JEE Main & Advanced)",
    "AIIMS / medical college students & doctors (NEET)",
    "BITS Pilani students & alumni (BITSAT)",
    "JEE Main & Advanced rankers and drop-year mentors",
    "NEET UG rankers & repeaters who finally cracked it",
    "Subject experts in Physics, Chemistry, Maths & Biology",
  ],
  stepsTitle: "Start mentoring in 3 steps",
  stepsSubtitle: "The entire onboarding takes less than 15 minutes.",
  faqTitle: "FAQ (Frequently Asked Questions)",
  faqs: [
    {
      q: "How much can I earn?",
      a: "You set your own hourly rate. Most mentors charge between ₹100 and ₹500 per session. Top mentors on the platform earn ₹50,000–₹1,00,000+ per month depending on availability and demand.",
    },
    {
      q: "Do I need to be available full-time?",
      a: "Not at all. Many mentors take 2–5 sessions per week alongside college or a job. You control your calendar completely.",
    },
    {
      q: "Who can become a mentor?",
      a: "Anyone who has cracked JEE Main, JEE Advanced, or NEET - or has guided aspirants through them. IIT/NIT/IIIT and AIIMS/medical college students and alumni, rankers, droppers who succeeded, subject experts, and coaching faculty are all welcome.",
    },
    {
      q: "Do I need a top rank to mentor?",
      a: "No. Students value clarity, empathy, and a solid prep strategy as much as a rank. If you understand the exam deeply and can explain concepts or planning well, you can mentor.",
    },
    {
      q: "Which subjects and exams can I mentor for?",
      a: "You can mentor for JEE Main, JEE Advanced, and NEET across Physics, Chemistry, Maths, and Biology - plus strategy sessions like syllabus planning, mock analysis, time management, and drop-year guidance.",
    },
    {
      q: "How does verification work?",
      a: "We review your exam background, college or coaching credentials, and area of expertise. Most applications are reviewed within 48 hours.",
    },
    {
      q: "What happens in a typical session?",
      a: "Sessions are 1:1 video calls inside the app. Students usually come with doubts, mock-test reviews, or strategy questions. You can also chat and share prep notes before or after the call.",
    },
    {
      q: "When do I get paid?",
      a: "Session earnings are credited to your in-app wallet immediately after completion. Withdraw to your bank account anytime above the minimum threshold.",
    },
    {
      q: "Does Mentor Mitra take a commission?",
      a: "Yes - a transparent platform fee is deducted from each session so we can handle discovery, booking, payments, and support. Your rate and fee breakdown are always visible in the app.",
    },
    {
      q: "Can I cancel or reschedule a session?",
      a: "Yes. You can reschedule or cancel from the app based on platform guidelines. We ask mentors to give reasonable notice so students can rebook without disruption.",
    },
  ],
  quote: {
    text: "I started with 3 sessions a week. Within two months I was mentoring regularly and earning more than I expected - all while helping aspirants who remind me of my younger self.",
    author: "Ananya Sharma",
    role: "IIT Delhi · Physics mentor since 2025",
  },
  ctaTitle: "Your next student is waiting",
  ctaSubtitle:
    "Download the app, build your mentor profile, and start earning while making a real difference.",
} as const;

export const CONTACT = {
  title: "Contact us",
  subtitle: "Have a question? We'd love to hear from you.",
  supportNote:
    "For urgent session issues, use in-app support after downloading the app.",
  successMessage: "Thank you! We'll get back to you within 24–48 hours.",
} as const;

export const FOOTER_LEGAL_LINKS = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-of-service", label: "Terms of Service" },
  { to: "/cookie-policy", label: "Cookie Policy" },
] as const;
