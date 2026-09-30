import type { FooterColumn, NavLink } from '@/interface';

export const footerDescription =
  'Stay Up to date with our latest features and releases by joining our newsletter.';

export const footerLegal =
  'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.';

export const footerColumns: FooterColumn[] = [
  {
    links: [
      { label: 'Featured Courses', href: '/courses' },
      { label: 'Featured Categories', href: '/courses' },
      { label: 'Business', href: '/courses' },
      { label: 'IT', href: '/courses' },
      { label: 'Design', href: '/courses' },
    ],
  },
  {
    links: [
      { label: 'Development', href: '/courses' },
      { label: 'Marketing', href: '/courses' },
      { label: 'Photography', href: '/courses' },
      { label: 'Finance', href: '/courses' },
      { label: 'Sport', href: '/courses' },
    ],
  },
  {
    links: [
      { label: 'Become a Creator', href: '/register' },
      { label: 'Affiliate Program', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Help', href: '#' },
      { label: 'About', href: '#' },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
];
