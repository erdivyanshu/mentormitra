export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY: LegalPageContent = {
  title: "Privacy Policy",
  lastUpdated: "July 27, 2026",
  intro:
    'Mentor Mitra ("we", "us", or "our") operates the Mentor Mitra mobile application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mentorship platform. By using Mentor Mitra, you agree to the collection and use of information in accordance with this policy.',
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      paragraphs: [
        "We collect information that you provide directly to us and information collected automatically when you use our services.",
      ],
      bullets: [
        "Account information: name, email address, phone number, profile photo, and role (student or mentor).",
        "Profile details: skills, experience, bio, languages, and career interests you choose to share.",
        "Session data: booking details, session notes, chat messages, and video call metadata.",
        "Payment information: wallet balance, transaction history, and billing records (payment card details are processed by secure third-party payment providers; we do not store full card numbers).",
        "Device and usage data: device type, operating system, app version, IP address, and interaction logs used to improve performance and security.",
        "Communications: messages you send to mentors, students, or our support team.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Provide, operate, and maintain the Mentor Mitra platform.",
        "Match students with mentors and facilitate 1:1 sessions, chat, and video calls.",
        "Process payments, wallet top-ups, withdrawals, and referral rewards.",
        "Send session reminders, booking confirmations, and important service updates.",
        "Verify mentor credentials and maintain platform safety and quality.",
        "Improve our app, develop new features, and analyse usage trends.",
        "Detect, prevent, and address fraud, abuse, or security issues.",
        "Comply with legal obligations and enforce our Terms of Service.",
      ],
    },
    {
      id: "sharing",
      title: "3. Sharing of Information",
      paragraphs: [
        "We do not sell your personal information. We may share information only in the following circumstances:",
      ],
      bullets: [
        "With other users: your public profile information is visible to students or mentors as needed to book sessions.",
        "With service providers: payment processors, cloud hosting, analytics, and customer support tools bound by confidentiality agreements.",
        "For legal reasons: when required by law, court order, or to protect the rights and safety of Mentor Mitra, our users, or the public.",
        "Business transfers: in connection with a merger, acquisition, or sale of assets, with notice to affected users where required.",
      ],
    },
    {
      id: "data-retention",
      title: "4. Data Retention",
      paragraphs: [
        "We retain your personal information for as long as your account is active or as needed to provide our services. Session records and transaction history may be kept for legal, tax, and dispute-resolution purposes. You may request deletion of your account by contacting us at info@mymentormitra.in.",
      ],
    },
    {
      id: "security",
      title: "5. Data Security",
      paragraphs: [
        "We implement industry-standard technical and organisational measures to protect your data, including encryption in transit, access controls, and secure infrastructure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      paragraphs: ["Depending on your location, you may have the right to:"],
      bullets: [
        "Access, correct, or update your personal information through your account settings.",
        "Request a copy of the data we hold about you.",
        "Request deletion of your account and associated data, subject to legal retention requirements.",
        "Opt out of promotional communications while still receiving essential service messages.",
        "Withdraw consent where processing is based on consent, without affecting prior lawful processing.",
      ],
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      paragraphs: [
        "Mentor Mitra is intended for users aged 18 and above. We do not knowingly collect personal information from children under 18. If you believe a minor has provided us with personal data, please contact us and we will take steps to delete such information.",
      ],
    },
    {
      id: "changes",
      title: "8. Changes to This Policy",
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date. Your continued use of Mentor Mitra after changes constitutes acceptance of the revised policy.',
      ],
    },
    {
      id: "contact",
      title: "9. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or our data practices, contact us at info@mymentormitra.in.",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalPageContent = {
  title: "Terms of Service",
  lastUpdated: "July 27, 2026",
  intro:
    'Welcome to Mentor Mitra. These Terms of Service ("Terms") govern your access to and use of the Mentor Mitra mobile application, website, and related services (collectively, the "Service"). Please read these Terms carefully before using the Service.',
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By creating an account, downloading the app, or using Mentor Mitra in any way, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Service.",
      ],
    },
    {
      id: "description",
      title: "2. Description of Service",
      paragraphs: [
        "Mentor Mitra is an online mentorship platform that connects students with verified mentors for 1:1 video sessions, chat, and career guidance. We act as an intermediary platform and are not a party to agreements between mentors and students regarding session content or outcomes.",
      ],
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      paragraphs: [
        "To use certain features, you must register for an account. You agree to:",
      ],
      bullets: [
        "Provide accurate, current, and complete registration information.",
        "Maintain the security of your password and account credentials.",
        "Notify us immediately of any unauthorised use of your account.",
        "Accept responsibility for all activity that occurs under your account.",
      ],
    },
    {
      id: "student-responsibilities",
      title: "4. Student Responsibilities",
      paragraphs: ["As a student, you agree to:"],
      bullets: [
        "Book sessions in good faith and attend scheduled sessions on time.",
        "Treat mentors with respect and professionalism.",
        "Not record, redistribute, or commercially exploit session content without explicit consent.",
        "Use the platform only for lawful educational and career development purposes.",
      ],
    },
    {
      id: "mentor-responsibilities",
      title: "5. Mentor Responsibilities",
      paragraphs: ["As a mentor, you agree to:"],
      bullets: [
        "Provide accurate information about your qualifications and experience.",
        "Deliver sessions professionally and honour confirmed bookings.",
        "Not solicit students to transact outside the Mentor Mitra platform.",
        "Comply with applicable laws and maintain appropriate professional conduct.",
      ],
    },
    {
      id: "payments",
      title: "6. Payments, Wallet & Refunds",
      paragraphs: [
        "Session fees are displayed before booking. Payments are processed through our secure wallet system or approved payment partners. Mentors receive earnings according to our payout schedule, subject to verification and minimum withdrawal thresholds.",
        "Refund eligibility depends on session status, cancellation timing, and platform policies. Promotional credits and referral bonuses are non-transferable and may expire. We reserve the right to modify pricing and fee structures with reasonable notice.",
      ],
    },
    {
      id: "prohibited",
      title: "7. Prohibited Conduct",
      paragraphs: ["You may not use Mentor Mitra to:"],
      bullets: [
        "Harass, abuse, threaten, or discriminate against any user.",
        "Share false, misleading, or impersonating content.",
        "Upload malware, spam, or harmful code.",
        "Circumvent platform fees or conduct off-platform transactions.",
        "Violate intellectual property rights or applicable laws.",
        "Use automated tools to scrape data or manipulate ratings.",
      ],
    },
    {
      id: "ip",
      title: "8. Intellectual Property",
      paragraphs: [
        "Mentor Mitra and its logos, design, software, and content are owned by us or our licensors. You retain ownership of content you submit but grant us a limited licence to use it to operate and promote the Service. Session materials shared between users remain the property of their respective creators unless otherwise agreed.",
      ],
    },
    {
      id: "disclaimer",
      title: "9. Disclaimer",
      paragraphs: [
        "Mentor Mitra provides a platform for mentorship connections. We do not guarantee specific career outcomes, job placements, or academic results. Mentors' advice is for informational purposes only and should not be considered professional legal, medical, or financial advice unless the mentor is duly licensed to provide such advice.",
      ],
    },
    {
      id: "liability",
      title: "10. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Mentor Mitra shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability for any claim shall not exceed the amount you paid to us in the twelve months preceding the claim.",
      ],
    },
    {
      id: "termination",
      title: "11. Termination",
      paragraphs: [
        "We may suspend or terminate your account if you violate these Terms or engage in conduct harmful to the platform. You may delete your account at any time through the app or by contacting support. Provisions that by their nature should survive termination will remain in effect.",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India, unless otherwise required by applicable consumer protection laws.",
      ],
    },
    {
      id: "contact",
      title: "13. Contact",
      paragraphs: [
        "For questions about these Terms, contact us at info@mymentormitra.in.",
      ],
    },
  ],
};

export const COOKIE_POLICY: LegalPageContent = {
  title: "Cookie Policy",
  lastUpdated: "July 27, 2026",
  intro:
    "This Cookie Policy explains how Mentor Mitra uses cookies and similar technologies on our website (mentormitra.in) and related services. It should be read alongside our Privacy Policy.",
  sections: [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, keep you signed in, and understand how visitors use the site. Similar technologies include local storage, session storage, and pixel tags.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Cookies",
      paragraphs: ["Mentor Mitra uses cookies and similar technologies to:"],
      bullets: [
        "Keep you signed in and maintain your session preferences.",
        "Remember your language and display settings.",
        "Understand how visitors navigate our website so we can improve it.",
        "Measure the effectiveness of our marketing campaigns.",
        "Protect against fraud and enhance platform security.",
      ],
    },
    {
      id: "types",
      title: "3. Types of Cookies We Use",
      paragraphs: ["We use the following categories of cookies:"],
      bullets: [
        "Essential cookies: required for the website to function, such as authentication and security. These cannot be disabled.",
        "Functional cookies: remember your choices (e.g. region, consent preferences) to provide a personalised experience.",
        "Analytics cookies: help us understand traffic patterns, popular pages, and user behaviour in aggregate. We may use tools such as Google Analytics.",
        "Marketing cookies: used to deliver relevant advertisements and measure campaign performance on third-party platforms.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Cookies",
      paragraphs: [
        "Some cookies are placed by third-party services that appear on our pages, such as analytics providers, payment processors, and social media plugins. We do not control these cookies. Please review the privacy policies of those third parties for more information.",
      ],
    },
    {
      id: "mobile-app",
      title: "5. Mobile App Data",
      paragraphs: [
        "The Mentor Mitra mobile app may use similar technologies such as device identifiers and local storage to provide core functionality, save preferences, and improve performance. App-specific data practices are described in our Privacy Policy.",
      ],
    },
    {
      id: "manage",
      title: "6. Managing Cookies",
      paragraphs: [
        "You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Note that disabling essential cookies may affect website functionality.",
        "When you first visit our website, you may see a cookie consent banner allowing you to accept or customise non-essential cookies. You can update your preferences at any time by clearing your browser cookies or contacting us.",
      ],
    },
    {
      id: "updates",
      title: "7. Updates to This Policy",
      paragraphs: [
        'We may update this Cookie Policy to reflect changes in technology or legal requirements. The "Last updated" date at the top indicates when the policy was last revised.',
      ],
    },
    {
      id: "contact",
      title: "8. Contact Us",
      paragraphs: [
        "If you have questions about our use of cookies, contact us at info@mymentormitra.in.",
      ],
    },
  ],
};
