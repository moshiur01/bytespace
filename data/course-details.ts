import { BadgeIcon, ConnectIcon, SourceIcon, VideocamIcon } from '@/components/shared/icon';
import type { Course, IconComponent } from '@/interface';
import avatar1 from '@/public/images/avatars/avatar-1.png';
import avatar11 from '@/public/images/avatars/avatar-11.png';
import avatar13 from '@/public/images/avatars/avatar-13.png';
import avatar14 from '@/public/images/avatars/avatar-14.png';
import creatorPurepearl from '@/public/images/avatars/creator-purepearl.jpg';
import related1 from '@/public/images/courses/related-1.jpg';
import related2 from '@/public/images/courses/related-2.jpg';
import related3 from '@/public/images/courses/related-3.jpg';
import related4 from '@/public/images/courses/related-4.jpg';
import type { StaticImageData } from 'next/image';

export interface CourseTab {
  label: string;
  segment: '' | 'lessons' | 'reviews';
}

export interface PreviewLesson {
  number: string;
  title: string;
  duration: string;
}

export interface CourseInclude {
  label: string;
  icon: IconComponent;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface RatingBreakdownRow {
  stars: number;
  count: number;
  fill: number;
}

export interface CourseReview {
  name: string;
  role: string;
  avatar: StaticImageData;
  rating: number;
  time: string;
  quote: string;
}

export interface SneakPeekImage {
  src: StaticImageData;
  alt: string;
}

/* ---------- shared header + sidebar ---------- */

export const courseTabs: CourseTab[] = [
  { label: 'About', segment: '' },
  { label: 'Lessons', segment: 'lessons' },
  { label: 'Reviews', segment: 'reviews' },
];

const headlines: Partial<Record<string, string>> = {
  'build-digital-asset': 'Build Digital Asset: A Comprehensive Guide',
};

export const getCourseHeadline = (course: Course) => headlines[course.slug] ?? course.title;

export const courseOverview = {
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  level: 'Intermediate',
  rating: '4.8',
  reviewCount: 172,
  studentCount: 199,
  lessonsSummary: '112 Lessons (24 hours)',
  moreVideos: '99 more videos',
  enrollText: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
  priceUnit: '/lifetime',
};

export const previewLessons: PreviewLesson[] = [
  { number: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { number: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
  { number: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
];

export const courseIncludes: CourseInclude[] = [
  { label: 'Learning Resources', icon: SourceIcon },
  { label: 'Quality Lesson Videos', icon: VideocamIcon },
  { label: 'Certificate of Completion', icon: BadgeIcon },
  { label: 'Private Consultation', icon: ConnectIcon },
];

export const courseCreator = {
  name: 'PurePearl Studio',
  role: 'Professional Creator',
  avatar: creatorPurepearl,
  bio: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
};

/* ---------- About tab ---------- */

export const courseDescription = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

export const sneakPeekImages: SneakPeekImage[] = [
  { src: related3, alt: 'Sketching wireframes on paper' },
  { src: related4, alt: 'Design tool open on a laptop' },
  { src: related2, alt: 'Dashboard design on a desktop monitor' },
  { src: related1, alt: 'Colourful mobile app screens' },
];

export const keyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

/* ---------- Lessons tab ---------- */

export const lessonsIntro =
  'Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.';

export const courseModules: CourseModule[] = [
  {
    title: 'Module 1: Introduction to Digital Assets',
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: 'Module 2: Design Principles for Impact',
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: 'Module 4: User-Centric Design Strategies',
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: 'Module 5: Interactive Media and Engagement',
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: 'Module 6: Project Showcase and Critique',
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const lessonContent =
  'Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.';

export const lessonProgressText =
  'Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.';

export const lessonProgress = 55;

/* ---------- Reviews tab ---------- */

export const reviewsIntro =
  "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.";

export const averageRating = '4.7';

export const ratingBreakdown: RatingBreakdownRow[] = [
  { stars: 5, count: 720, fill: 260.2 / 282 },
  { stars: 4, count: 120, fill: 102.9 / 282 },
  { stars: 3, count: 21, fill: 26.7 / 282 },
  { stars: 2, count: 12, fill: 9.9 / 282 },
  { stars: 1, count: 16, fill: 14.8 / 282 },
];

export const reviewFilters = [5, 4, 3, 2, 1];

export const courseReviews: CourseReview[] = [
  {
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar: avatar14,
    rating: 5,
    time: 'a year ago',
    quote:
      '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: avatar13,
    rating: 5,
    time: 'a year ago',
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: avatar11,
    rating: 5,
    time: 'a year ago',
    quote:
      'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: avatar1,
    rating: 5,
    time: 'a year ago',
    quote:
      'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
];
