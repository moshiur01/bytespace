import { courses } from '@/data/courses';
import type { Course } from '@/interface';
import avatar2 from '@/public/images/avatars/avatar-2.png';
import type { StaticImageData } from 'next/image';

export interface CreatorStat {
  value: string;
  label: string;
}

export interface Creator {
  slug: string;
  name: string;
  role: string;
  badge: string;
  avatar: StaticImageData;
  bio: string[];
  stats: CreatorStat[];
  courseSlugs: string[];
}

export const creators: Creator[] = [
  {
    slug: 'purepearl-studio',
    name: 'PurePearl Studio',
    role: 'Passionate UI/UX, Web designer',
    badge: 'Creator',
    avatar: avatar2,
    bio: [
      "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      'ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
    ],
    stats: [
      { value: '3', label: 'Products' },
      { value: '12', label: 'Followers' },
    ],
    courseSlugs: courses
      .filter((course) => course.creatorSlug === 'purepearl-studio')
      .map((course) => course.slug),
  },
];

export const getCreator = (slug: string) => creators.find((creator) => creator.slug === slug);

export const getCreatorCourses = (creator: Creator): Course[] =>
  creator.courseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is Course => course !== undefined);
