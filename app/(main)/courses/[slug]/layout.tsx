import RevealAnimation from '@/components/animation/reveal-animation';
import CourseHeader from '@/components/course-details/course-header';
import CourseSidebar from '@/components/course-details/course-sidebar';
import { courses, getCourse } from '@/data/courses';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

interface CourseLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => courses.map((course) => ({ slug: course.slug }));

const CourseLayout = async ({ children, params }: CourseLayoutProps) => {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  return (
    <div className="relative">
      <CourseHeader course={course} />

      <div className="main-container relative z-10 mt-10 flex xl:pointer-events-none xl:absolute xl:inset-x-0 xl:top-[416px] xl:mt-0 xl:justify-end">
        <RevealAnimation delay={0.3} direction="right" offset={60}>
          <div className="w-full xl:pointer-events-auto xl:w-auto">
            <CourseSidebar course={course} />
          </div>
        </RevealAnimation>
      </div>

      {children}
    </div>
  );
};

export default CourseLayout;
