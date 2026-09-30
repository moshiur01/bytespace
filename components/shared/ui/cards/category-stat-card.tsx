import CounterNumberOnScroll from '@/components/animation/counter-number-on-scroll';
import { cn } from '@/utils/cn';

interface CategoryStatCardProps {
  title: string;
  courses: number;
  students: number;
  className?: string;
}

/** Floating "UI/UX Design · 200 Courses · 1000+ Students" card */
const CategoryStatCard = ({ title, courses, students, className }: CategoryStatCardProps) => {
  return (
    <div
      className={cn(
        'flex h-[70px] w-[208px] flex-col justify-center rounded-2xl bg-white px-4 backdrop-blur-[10px]',
        className
      )}
    >
      <p className="text-label-m font-medium text-shuttle-950">{title}</p>
      <p className="flex items-center gap-2 text-body-xs text-shuttle-400">
        <span>
          <CounterNumberOnScroll value={courses} /> Courses
        </span>
        <span className="text-[10px] leading-[1.5]">•</span>
        <span>
          <CounterNumberOnScroll value={students} suffix="+" /> Students
        </span>
      </p>
    </div>
  );
};

export default CategoryStatCard;
