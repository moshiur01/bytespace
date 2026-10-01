import { StarFilledIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating = ({ rating, className }: StarRatingProps) => {
  return (
    <span
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className={cn('flex shrink-0 gap-1', className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <StarFilledIcon key={i} className={i < rating ? 'text-shuttle-700' : 'text-shuttle-200'} />
      ))}
    </span>
  );
};

export default StarRating;
