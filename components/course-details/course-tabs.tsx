'use client';

import { courseTabs } from '@/data/course-details';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CourseTabsProps {
  slug: string;
}

const CourseTabs = ({ slug }: CourseTabsProps) => {
  const pathname = usePathname();
  const base = `/courses/${slug}`;

  return (
    <nav aria-label="Course sections" className="flex flex-wrap gap-4">
      {courseTabs.map((tab) => {
        const href = tab.segment ? `${base}/${tab.segment}` : base;
        const active = pathname.replace(/\/$/, '') === href;
        return (
          <Link
            key={tab.label}
            href={href}
            scroll={false}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'text-label-m rounded-3xl px-4 py-3 font-medium transition-colors duration-300',
              active
                ? 'bg-accent-400 text-shuttle-950'
                : 'bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100'
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default CourseTabs;
