import StarRating from '@/components/course-details/star-rating';
import type { CourseReview } from '@/data/course-details';
import Image from 'next/image';

interface ReviewCardProps {
  review: CourseReview;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className="ring-shuttle-200 flex flex-col gap-6 rounded-3xl p-6 ring-1 ring-inset sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <Image
              src={review.avatar}
              alt={review.name}
              width={52}
              height={52}
              className="size-[52px] shrink-0 rounded-full object-cover"
            />
            <div>
              <h3 className="font-satoshi text-label-l text-shuttle-950 font-medium">
                {review.name}
              </h3>
              <p className="text-body-m text-shuttle-700 leading-[26px]">{review.role}</p>
            </div>
          </div>
          <StarRating rating={review.rating} />
        </div>
        <p className="text-body-m text-shuttle-700 leading-[26px] whitespace-nowrap">
          {review.time}
        </p>
      </div>
      <p className="text-body-m text-shuttle-700 leading-[26px]">{review.quote}</p>
    </article>
  );
};

export default ReviewCard;
