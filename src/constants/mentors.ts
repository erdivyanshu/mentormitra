export interface Mentor {
  id: string;
  name: string;
  headline: string;
  avatar: string;
  category: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  verified: boolean;
}

export const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: 'Ananya Sharma',
    headline: 'IIT Delhi · JEE Advanced AIR 412 · Physics mentor',
    avatar: 'https://i.pravatar.cc/300?u=ananya',
    category: 'Physics',
    rating: 4.9,
    reviewCount: 312,
    hourlyRate: 299,
    verified: true,
  },
  {
    id: 'm2',
    name: 'Rahul Verma',
    headline: 'IIT Bombay · JEE Advanced Maths & problem-solving',
    avatar:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'JEE Advanced',
    rating: 4.8,
    reviewCount: 268,
    hourlyRate: 449,
    verified: true,
  },
  {
    id: 'm3',
    name: 'Meera Iyer',
    headline: 'AIIMS Delhi · NEET UG Biology & mock analysis',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'NEET',
    rating: 5.0,
    reviewCount: 190,
    hourlyRate: 399,
    verified: true,
  },
  {
    id: 'm4',
    name: 'Arjun Nair',
    headline: 'BITS Pilani · BITSAT strategy & speed practice',
    avatar:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'BITSAT',
    rating: 4.7,
    reviewCount: 154,
    hourlyRate: 199,
    verified: false,
  },
  {
    id: 'm5',
    name: 'Priya Desai',
    headline: 'NIT Trichy · JEE Main Chemistry mentor',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'Chemistry',
    rating: 4.9,
    reviewCount: 221,
    hourlyRate: 249,
    verified: true,
  },
  {
    id: 'm6',
    name: 'Kabir Singh',
    headline: 'IIT Kanpur · Drop-year plans & mock-test strategy',
    avatar:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=400&h=400&q=80',
    category: 'JEE Main',
    rating: 4.8,
    reviewCount: 98,
    hourlyRate: 499,
    verified: true,
  },
];

export const CATEGORIES = [
  { id: 'c1', name: 'JEE Main', iconName: 'GraduationCap' as const },
  { id: 'c2', name: 'JEE Advanced', iconName: 'Trophy' as const },
  { id: 'c3', name: 'NEET', iconName: 'HeartPulse' as const },
  { id: 'c4', name: 'BITSAT', iconName: 'School' as const },
  { id: 'c5', name: 'Physics', iconName: 'Atom' as const },
  { id: 'c6', name: 'Chemistry', iconName: 'FlaskConical' as const },
  { id: 'c7', name: 'Maths', iconName: 'Calculator' as const },
  { id: 'c8', name: 'Biology', iconName: 'Dna' as const },
];

export const STATS = [
  { label: 'Mentors', value: '500+' },
  { label: 'Sessions', value: '10k+' },
  { label: 'Avg rating', value: '4.8★' },
];

export const HOW_IT_WORKS = [
  {
    title: 'Browse mentors',
    description: 'Explore mentors for JEE Main, Advanced, NEET, BITSAT, and PCMB subjects.',
    iconName: 'Search' as const,
  },
  {
    title: 'Book a session',
    description: 'Pick a time that works and confirm your 1:1 doubt or strategy session.',
    iconName: 'Calendar' as const,
  },
  {
    title: 'Learn & grow',
    description: 'Join via video, clear concepts, and get a clearer prep plan.',
    iconName: 'Video' as const,
  },
];

export const TESTIMONIALS = [
  {
    id: 'r1',
    authorName: 'Sana K.',
    rating: 5,
    comment:
      'My Physics mentor fixed my weak chapters in two sessions. Mock scores jumped in a week.',
  },
  {
    id: 'r2',
    authorName: 'Dev P.',
    rating: 5,
    comment: 'Best JEE Advanced Maths guidance I have had. Clear approach, not just formulas.',
  },
  {
    id: 'r3',
    authorName: 'Ira M.',
    rating: 4,
    comment: 'NEET Biology revision plan was super practical. Felt less lost after every call.',
  },
];

export const WHY_US = [
  {
    title: 'Verified mentors',
    description: 'Every mentor is reviewed for exam background and session quality.',
    iconName: 'Shield' as const,
  },
  {
    title: 'Flexible booking',
    description: 'Book sessions that fit your study schedule, anytime.',
    iconName: 'Clock' as const,
  },
  {
    title: 'Secure wallet',
    description: 'Safe payments with wallet credits and referrals.',
    iconName: 'Wallet' as const,
  },
];

export const WHO_FOR = [
  {
    title: 'JEE aspirants',
    description: 'Get guidance for JEE Main & Advanced - concepts, mocks, and strategy.',
    iconName: 'GraduationCap' as const,
  },
  {
    title: 'NEET aspirants',
    description: 'Clear Biology, Physics, and Chemistry doubts with mentors who cracked NEET.',
    iconName: 'HeartPulse' as const,
  },
  {
    title: 'BITSAT & more',
    description: 'Speed practice, exam strategy, and subject clarity for entrance prep.',
    iconName: 'School' as const,
  },
];

export const MENTOR_BENEFITS = [
  {
    title: 'Flexible hours',
    description: 'Mentor on your own schedule, from anywhere.',
    iconName: 'Clock' as const,
  },
  {
    title: 'Earn per session',
    description: 'Set your rates and get paid for every session.',
    iconName: 'IndianRupee' as const,
  },
  {
    title: 'Reach learners',
    description: 'Connect with motivated JEE & NEET aspirants across India.',
    iconName: 'Users' as const,
  },
];

export const JOIN_STEPS = [
  { step: '1', title: 'Apply in app', description: 'Create your mentor profile and showcase your exam expertise.' },
  { step: '2', title: 'Get verified', description: 'Our team reviews your exam background and credentials.' },
  { step: '3', title: 'Start sessions', description: 'Accept bookings and begin mentoring aspirants.' },
];
