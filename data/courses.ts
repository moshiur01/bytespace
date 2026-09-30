import type { Course } from '@/interface';
import bigData from '@/public/images/courses/big-data.jpg';
import digitalAsset from '@/public/images/courses/digital-asset.jpg';
import learnFigma from '@/public/images/courses/learn-figma.jpg';
import moneyManagement from '@/public/images/courses/money-management.jpg';
import productivity from '@/public/images/courses/productivity.jpg';
import startup from '@/public/images/courses/startup.jpg';

const base = {
  creator: 'purepearl studio',
  creatorSlug: 'purepearl-studio',
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  level: 'Beginner',
  rating: 4.5,
  enrolledCount: '26+',
  price: 25,
} as const;

export const courses: Course[] = [
  {
    ...base,
    slug: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    image: learnFigma,
    topics: ['UI/UX Design', 'Graphic Design', 'Digital Illustration', 'Web Development'],
  },
  {
    ...base,
    slug: 'build-digital-asset',
    title: 'Build Digital Asset',
    image: digitalAsset,
    topics: ['Drawing & Painting', 'Digital Illustration', 'Animation', 'Crafts', 'Music'],
  },
  {
    ...base,
    slug: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    image: bigData,
    topics: ['Data Science', 'Web Development', 'Marketing'],
  },
  {
    ...base,
    slug: 'balancing-productivity-and-self-care',
    title: 'Balancing Productivity and Self-Care',
    image: productivity,
    topics: ['Productivity', 'Cooking', 'Photography'],
  },
  {
    ...base,
    slug: 'mastering-money-management',
    title: 'Mastering Money Management',
    image: moneyManagement,
    topics: ['Freelance & Entrepreneurship', 'Marketing', 'Social Media'],
  },
  {
    ...base,
    slug: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    image: startup,
    topics: ['Freelance & Entrepreneurship', 'Creative Marketing', 'Social Media', 'Film & Video'],
  },
];

export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);
