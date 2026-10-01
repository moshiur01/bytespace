import CounterNumberOnScroll from '@/components/animation/counter-number-on-scroll';
import { StarIcon } from '@/components/shared/icon';
import AvatarStack from '@/components/shared/ui/avatar-stack';
import { happyStudentAvatars } from '@/data/avatars';
import { cn } from '@/utils/cn';

interface HappyStudentsCardProps {
  className?: string;
  compact?: boolean;
  starClassName?: string;
  countClassName?: string;
}

const HappyStudentsCard = ({
  className,
  compact = false,
  starClassName,
  countClassName,
}: HappyStudentsCardProps) => {
  return (
    <div
      className={cn(
        'flex w-[258px] flex-col justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]',
        className
      )}
    >
      <div>
        <p className={cn('text-label-m text-shuttle-950 font-medium', compact && 'leading-6')}>
          Happy Students
        </p>
        <p
          className={cn(
            'text-shuttle-400 flex items-center',
            compact ? 'text-[10px] leading-[1.5]' : 'text-body-xs'
          )}
        >
          <CounterNumberOnScroll
            value={4.5}
            format={{ minimumFractionDigits: 1 }}
            className={cn('text-shuttle-950', compact && 'font-bold')}
          />
          &nbsp;(
          <CounterNumberOnScroll value={240} />)
          <StarIcon size={16} className={cn('text-accent-400', starClassName)} />
        </p>
      </div>
      <AvatarStack
        avatars={happyStudentAvatars}
        count={<CounterNumberOnScroll value={2} suffix="K+" />}
        size="lg"
        countClassName={countClassName}
      />
    </div>
  );
};

export default HappyStudentsCard;
