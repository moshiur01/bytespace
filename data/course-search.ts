import { courses } from '@/data/courses';
import type { Course, CourseLevel } from '@/interface';

export interface SearchCourse extends Course {
  id: string;
  category: string;
}

export interface SortOption {
  value: 'relevant' | 'title-asc' | 'title-desc' | 'rating';
  label: string;
}

export interface PriceFilter {
  value: 'any' | 'under-50' | '50-plus';
  label: string;
}

export const searchCategories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
] as const;

export const ALL_CATEGORIES = searchCategories[0];

export const levelOptions: (CourseLevel | 'All levels')[] = [
  'All levels',
  'Beginner',
  'Intermediate',
  'Advanced',
];

export const priceFilters: PriceFilter[] = [
  { value: 'any', label: 'Any price' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-plus', label: '$50 and more' },
];

export const sortOptions: SortOption[] = [
  { value: 'relevant', label: 'Most relevant' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'title-asc', label: 'Title A–Z' },
  { value: 'title-desc', label: 'Title Z–A' },
];

export const searchScopes = ['Courses', 'Creators'] as const;

export const COURSES_PER_PAGE = 9;

const TOTAL_COURSES = 90;
const DESIGN_COURSES = 18;

const topicCategories = searchCategories.slice(1);
const extraLevels: CourseLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export const searchCourses: SearchCourse[] = Array.from(
  { length: TOTAL_COURSES },
  (_, i) => {
    const course = courses[i % courses.length];
    const firstPage = i < DESIGN_COURSES;
    return {
      ...course,
      id: `${course.slug}-${i}`,
      category: topicCategories[i % topicCategories.length],
      level: firstPage
        ? course.level
        : extraLevels[Math.floor(i / courses.length) % extraLevels.length],
      rating: firstPage ? course.rating : [4.5, 4.8, 4.2, 4.9][i % 4],
    };
  }
);
