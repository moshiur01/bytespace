import { cn } from '@/utils/cn';
import type { ComponentProps } from 'react';

interface TopicPillProps extends ComponentProps<'button'> {
  active?: boolean;
}

const TopicPill = ({ active = false, className, children, ...props }: TopicPillProps) => {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'text-label-m h-[43px] cursor-pointer rounded-3xl px-4 font-medium whitespace-nowrap transition-colors duration-300',
        active
          ? 'bg-accent-400 text-shuttle-950'
          : 'bg-shuttle-50 text-shuttle-700 can-hover:hover:bg-shuttle-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TopicPill;
