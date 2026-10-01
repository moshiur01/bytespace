import {
  BusinessIcon,
  ComputerIcon,
  ConnectIcon,
  DesignIcon,
  DeveloperModeIcon,
  PhotoCameraFrontIcon,
} from '@/components/shared/icon';
import type { CategoryCard } from '@/interface';

export const topics: string[] = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export const learningPaths: CategoryCard[] = [
  { label: 'Design', icon: DesignIcon },
  { label: 'Development', icon: DeveloperModeIcon },
  { label: 'IT & Software', icon: ComputerIcon },
  { label: 'Business', icon: BusinessIcon },
  { label: 'Marketing', icon: ConnectIcon },
  { label: 'Photography', icon: PhotoCameraFrontIcon },
];
