import CourseTabs from '@/components/course-details/course-tabs';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CourseTabPanelProps {
  slug: string;
  /** Per-tab vertical spacing (the Figma frames differ slightly) */
  className?: string;
  children: ReactNode;
}

/** Left column below the course header: tab nav + the active tab's content */
const CourseTabPanel = ({ slug, className, children }: CourseTabPanelProps) => {
  return (
    <div className="main-container">
      <div className={cn('flex flex-col gap-10 pt-10 pb-16 xl:w-[725px]', className)}>
        <CourseTabs slug={slug} />
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
};

export default CourseTabPanel;
