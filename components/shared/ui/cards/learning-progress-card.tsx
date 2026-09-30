import CounterNumberOnScroll from '@/components/animation/counter-number-on-scroll';
import ProgressBarOnScroll from '@/components/animation/progress-bar-on-scroll';
import { cn } from '@/utils/cn';

interface LearningProgressCardProps {
  className?: string;
  /** Label line-height: 1.2 (hero) or 24px (showcase) */
  relaxed?: boolean;
  /** 0–100 */
  progress?: number;
}

const LearningProgressCard = ({
  className,
  relaxed = false,
  progress = 55,
}: LearningProgressCardProps) => {
  return (
    <div
      className={cn(
        'flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]',
        className
      )}
    >
      <p className={cn('text-label-s font-medium text-shuttle-950', relaxed && 'leading-6')}>
        Learning Progress
      </p>
      <CounterNumberOnScroll
        value={progress}
        suffix="%"
        className="font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950"
      />
      <ProgressBarOnScroll value={progress + 1} />
    </div>
  );
};

export default LearningProgressCard;
