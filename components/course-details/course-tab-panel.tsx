import CourseTabs from '@/components/course-details/course-tabs';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CourseTabPanelProps {
  slug: string;
  className?: string;
  children: ReactNode;
}

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
