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

const avatar = (seed: string): string => `https://i.pravatar.cc/300?u=${seed}`;

export const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: 'Ananya Sharma',
    headline: 'Senior Product Designer at Figma',
    avatar: avatar('ananya'),
    category: 'Design',
    rating: 4.9,
    reviewCount: 312,
    hourlyRate: 1200,
    verified: true,
  },
  {
    id: 'm2',
    name: 'Rahul Verma',
    headline: 'Staff Engineer at Stripe',
    avatar: avatar('rahul'),
    category: 'Engineering',
    rating: 4.8,
    reviewCount: 268,
    hourlyRate: 1500,
    verified: true,
  },
  {
    id: 'm3',
    name: 'Meera Iyer',
    headline: 'Product Lead at Notion',
    avatar: avatar('meera'),
    category: 'Product',
    rating: 5.0,
    reviewCount: 190,
    hourlyRate: 1350,
    verified: true,
  },
  {
    id: 'm4',
    name: 'Arjun Nair',
    headline: 'Growth Marketer, ex-Airbnb',
    avatar: avatar('arjun'),
    category: 'Marketing',
    rating: 4.7,
    reviewCount: 154,
    hourlyRate: 800,
    verified: false,
  },
  {
    id: 'm5',
    name: 'Priya Desai',
    headline: 'Data Scientist at Linear',
    avatar: avatar('priya'),
    category: 'Data',
    rating: 4.9,
    reviewCount: 221,
    hourlyRate: 950,
    verified: true,
  },
  {
    id: 'm6',
    name: 'Kabir Singh',
    headline: 'Founder & CEO, ex-CRED',
    avatar: avatar('kabir'),
    category: 'Startups',
    rating: 4.8,
    reviewCount: 98,
    hourlyRate: 2000,
    verified: true,
  },
];

export const CATEGORIES = [
  { id: 'c1', name: 'Design', iconName: 'PenTool' as const },
  { id: 'c2', name: 'Engineering', iconName: 'Code2' as const },
  { id: 'c3', name: 'Product', iconName: 'Boxes' as const },
  { id: 'c4', name: 'Marketing', iconName: 'Megaphone' as const },
  { id: 'c5', name: 'Data', iconName: 'BarChart3' as const },
  { id: 'c6', name: 'Finance', iconName: 'Wallet' as const },
  { id: 'c7', name: 'Career', iconName: 'Briefcase' as const },
  { id: 'c8', name: 'Startups', iconName: 'Rocket' as const },
];

export const STATS = [
  { label: 'Mentors', value: '500+' },
  { label: 'Sessions', value: '10k+' },
  { label: 'Avg rating', value: '4.8★' },
];

export const HOW_IT_WORKS = [
  {
    title: 'Browse mentors',
    description: 'Explore experts across design, engineering, product, and more.',
    iconName: 'Search' as const,
  },
  {
    title: 'Book a session',
    description: 'Pick a time that works and confirm your 1:1 session.',
    iconName: 'Calendar' as const,
  },
  {
    title: 'Learn & grow',
    description: 'Join via video, chat, and get actionable guidance.',
    iconName: 'Video' as const,
  },
];

export const TESTIMONIALS = [
  {
    id: 'r1',
    authorName: 'Sana K.',
    rating: 5,
    comment:
      'Incredibly clear guidance. Restructured my portfolio in one session.',
  },
  {
    id: 'r2',
    authorName: 'Dev P.',
    rating: 5,
    comment: 'Best system design prep I have had. Worth every rupee.',
  },
  {
    id: 'r3',
    authorName: 'Ira M.',
    rating: 4,
    comment: 'Very practical advice and warm mentor. Highly recommend.',
  },
];

export const WHY_US = [
  {
    title: 'Verified mentors',
    description: 'Every mentor is reviewed for expertise and quality.',
    iconName: 'Shield' as const,
  },
  {
    title: 'Flexible booking',
    description: 'Book sessions that fit your schedule, anytime.',
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
    title: 'Students',
    description: 'Get guidance on projects, internships, and career paths.',
    iconName: 'GraduationCap' as const,
  },
  {
    title: 'Early-career professionals',
    description: 'Level up with mentorship from senior industry experts.',
    iconName: 'Briefcase' as const,
  },
  {
    title: 'Career switchers',
    description: 'Navigate transitions with personalized 1:1 support.',
    iconName: 'RefreshCw' as const,
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
    description: 'Connect with motivated students across India.',
    iconName: 'Users' as const,
  },
];

export const JOIN_STEPS = [
  { step: '1', title: 'Apply in app', description: 'Create your mentor profile and showcase your expertise.' },
  { step: '2', title: 'Get verified', description: 'Our team reviews your background and credentials.' },
  { step: '3', title: 'Start sessions', description: 'Accept bookings and begin mentoring learners.' },
];
