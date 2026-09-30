'use client';

import RevealAnimation from '@/components/animation/reveal-animation';

import ReviewCard from '@/components/course-details/review-card';
import { StarFilledIcon } from '@/components/shared/icon';
import { courseReviews, reviewFilters } from '@/data/course-details';
import { cn } from '@/utils/cn';
import { useState } from 'react';

const pill =
  'flex cursor-pointer items-center justify-center gap-1 rounded-3xl px-4 py-3 text-label-m font-medium transition-colors duration-300';

/** "Individual Reviews" filter pills + the filtered review cards */
const ReviewList = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const reviews =
    filter === null ? courseReviews : courseReviews.filter((review) => review.rating === filter);

  const pillClass = (active: boolean) =>
    cn(
      pill,
      active
        ? 'bg-accent-400 text-shuttle-950'
        : 'bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100'
    );

  return (
    <>
      <RevealAnimation delay={0.3}>
        <div aria-label="Filter reviews by rating" className="flex flex-wrap items-start gap-4">
          <button
            type="button"
            aria-pressed={filter === null}
            onClick={() => setFilter(null)}
            className={pillClass(filter === null)}
          >
            All rating
          </button>
          {reviewFilters.map((stars) => (
            <button
              key={stars}
              type="button"
              aria-pressed={filter === stars}
              aria-label={`${stars} star reviews`}
              onClick={() => setFilter(stars)}
              className={cn(pillClass(filter === stars), 'h-12')}
            >
              <StarFilledIcon />
              {stars}
            </button>
          ))}
        </div>
      </RevealAnimation>

      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <RevealAnimation key={review.name} delay={(index % 2) * 0.2}>
            <div>
              <ReviewCard review={review} />
            </div>
          </RevealAnimation>
        ))
      ) : (
        <p className="text-body-m text-shuttle-700 ring-shuttle-200 rounded-3xl p-10 text-center leading-[26px] ring-1 ring-inset">
          No {filter}-star reviews yet.
        </p>
      )}
    </>
  );
};

export default ReviewList;
