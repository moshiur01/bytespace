import type { StaticImageData } from 'next/image';
import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title?: string;
  links: NavLink[];
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  slug: string;
  title: string;
  creator: string;
  creatorSlug: string;
  image: StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  rating: number;
  enrolledCount: string;
  price: number;
  /** topic pills this course is listed under */
  topics: string[];
}

export interface CategoryCard {
  label: string;
  icon: IconComponent;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: StaticImageData;
}

export interface Stat {
  value: string;
  label: string;
}
