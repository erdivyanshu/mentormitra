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
    "Get personalised career guidance from industry experts — book 1:1 video sessions, chat anytime, and grow faster.",
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
  title: "Mentorship that actually moves your career forward",
  subtitle:
    "Mentor Mitra was built because career advice in India is either too generic or too expensive. We wanted a place where you could talk to someone who has done the work — a PM at a product company, an engineer who cleared system design rounds, a founder who raised their first round.",
  storyTitle: "Why we built this",
  storyParagraphs: [
    "Most students and early professionals don't lack ambition — they lack access. You can watch a hundred YouTube videos on portfolios or system design, but nothing replaces a 45-minute conversation with someone who has hired designers, shipped products, or led teams.",
    "Mentor Mitra brings that access to your phone. Browse mentors by skill, see real ratings from past sessions, book a slot that fits your schedule, and show up prepared with a clear goal. No cold LinkedIn DMs. No guessing if someone is worth your time.",
    "We verify every mentor on the platform — checking their work history, session quality, and responsiveness — so you spend less time searching and more time learning.",
  ],
  beliefTitle: "What we believe",
  beliefs: [
    {
      title: "Advice should be specific",
      description:
        "Generic motivation doesn't help you crack an interview or fix a portfolio. Good mentorship answers your exact question with context from real experience.",
    },
    {
      title: "Access shouldn't depend on your network",
      description:
        "Not everyone has a senior cousin in tech or a college alumni group. A great mentor should be one tap away, regardless of where you studied or who you know.",
    },
    {
      title: "Mentors deserve to be paid fairly",
      description:
        "Experts give up their time to help others grow. We built wallet, payouts, and scheduling tools so mentors can focus on sessions — not chasing payments.",
    },
  ],
  differenceTitle: "What makes Mentor Mitra different",
  differences: [
    {
      stat: "500+",
      label: "Verified mentors",
      detail:
        "Across design, engineering, product, data, marketing, and startups.",
    },
    {
      stat: "4.8★",
      label: "Average session rating",
      detail:
        "Students rate every session — low-rated mentors are reviewed and removed.",
    },
    {
      stat: "₹800+",
      label: "Sessions from",
      detail:
        "Flexible pricing set by mentors. Pay only for the time you book.",
    },
    {
      stat: "8",
      label: "Career categories",
      detail:
        "From UX portfolios to fundraising prep — find the right expert fast.",
    },
  ],
  audienceTitle: "Built for people like you",
  audienceSubtitle:
    "Our main focus is students preparing for JEE, NEET, and other competitive exams — but Mentor Mitra is also here for school and college students, working professionals, and career switchers.",
  audiences: [
    {
      title: "JEE & NEET aspirants",
      description:
        "This is who we built Mentor Mitra for first. Get 1:1 guidance on syllabus planning, problem-solving approach, mock-test analysis, and staying consistent through the long prep cycle — from mentors who cracked JEE or NEET themselves.",
    },
    {
      title: "Other competitive exams",
      description:
        "Preparing for UPSC, CAT, GATE, CLAT, banking, SSC, or state-level entrance tests? Connect with mentors who cleared the same exams and can help you with strategy, study plans, and interview or personality-test prep.",
    },
    {
      title: "School students",
      description:
        "In Class 9–12 and building toward competitive exams or boards? Talk to someone who started where you are — for subject clarity, coaching choices, time management, and building habits before the pressure peaks.",
    },
    {
      title: "College students",
      description:
        "Preparing for internships, building your first portfolio, or figuring out which role fits you — talk to someone who was in your shoes two years ago.",
    },
    {
      title: "Working professionals",
      description:
        "Stuck on a promotion, switching teams, or preparing for senior interviews? Get targeted prep from people who have cleared those rounds.",
    },
    {
      title: "Career switchers",
      description:
        "Moving from service to product, non-tech to tech, or employee to founder? Learn the unwritten rules from mentors who made the same jump.",
    },
  ],
  ctaTitle: "Ready to find your mentor?",
  ctaSubtitle: "Download the app, browse experts, and book your first session.",
} as const;

export const BECOME_MENTOR = {
  heroBadge: "For industry experts",
  title: "Turn your experience into income — on your terms.",
  subtitle:
    "Mentor Mitra connects you with motivated learners across India who need real guidance — not another generic course. Set your hourly rate, pick your availability, and mentor from anywhere.",
  heroHighlights: [
    { value: "₹800–₹2,000", label: "Typical hourly rate" },
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
    "We handle discovery, booking, payments, and support — so you can focus on what you do best: mentoring.",
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
        "Message students before sessions, share prep materials, and follow up — all inside the app.",
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
    "If you have 3+ years of real industry experience, students want to learn from you.",
  whoProfiles: [
    "Product designers & UX leads",
    "Software engineers & architects",
    "Product managers & founders",
    "Data scientists & analysts",
    "Growth & marketing specialists",
    "Career coaches & interview prep experts",
  ],
  stepsTitle: "Start mentoring in 3 steps",
  stepsSubtitle: "The entire onboarding takes less than 15 minutes.",
  faqTitle: "Common questions",
  faqs: [
    {
      q: "How much can I earn?",
      a: "You set your own hourly rate. Most mentors charge between ₹800 and ₹2,000 per session. Top mentors on the platform earn ₹50,000–₹1,00,000+ per month depending on availability and demand.",
    },
    {
      q: "Do I need to be available full-time?",
      a: "Not at all. Many mentors take 2–5 sessions per week alongside their day job. You control your calendar completely.",
    },
    {
      q: "How does verification work?",
      a: "We review your LinkedIn profile, work history, and area of expertise. Most applications are reviewed within 48 hours.",
    },
    {
      q: "When do I get paid?",
      a: "Session earnings are credited to your in-app wallet immediately after completion. Withdraw to your bank account anytime above the minimum threshold.",
    },
  ],
  quote: {
    text: "I started with 3 sessions a week. Within two months I was mentoring regularly and earning more than I expected — all while helping students who remind me of my younger self.",
    author: "Ananya Sharma",
    role: "Senior Product Designer · Mentor since 2025",
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
