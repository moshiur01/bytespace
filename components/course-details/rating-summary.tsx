import StarRating from '@/components/course-details/star-rating';
import { averageRating, ratingBreakdown } from '@/data/course-details';
import RevealAnimation from '../animation/reveal-animation';

const RatingSummary = () => {
  return (
    <RevealAnimation delay={0.3}>
      <div className="ring-shuttle-200 flex flex-col items-center justify-center gap-6 rounded-2xl bg-white p-6 ring-1 backdrop-blur-[10px] ring-inset sm:flex-row sm:p-10">
        <div className="bg-accent-400 flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg">
          <p className="text-label-s text-shuttle-950 font-medium">Ratings</p>
          <p className="font-poppins text-heading-s text-shuttle-950 font-semibold">
            {averageRating}
          </p>
        </div>

        <ul className="flex w-full flex-col gap-1 sm:w-[490px]">
          {ratingBreakdown.map((row) => (
            <li key={row.stars} className="flex items-center gap-2 sm:gap-4">
              <div className="bg-shuttle-100 h-2 flex-1 overflow-hidden rounded-3xl">
                <div
                  className="bg-accent-400 h-full rounded-3xl"
                  style={{ width: `${(row.fill * 100).toFixed(2)}%` }}
                />
              </div>
              {/* The design draws all five stars on every row */}
              <span aria-hidden="true">
                <StarRating rating={5} className="[&_svg]:size-5 sm:[&_svg]:size-6" />
              </span>
              <span className="text-body-m text-shuttle-700 w-8 text-right leading-[26px] sm:w-10">
                <span className="sr-only">{row.stars}-star reviews: </span>
                {row.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RevealAnimation>
  );
};

export default RatingSummary;
