import TextReveal from '@/components/animation/text-reveal';
import RatingSummary from '@/components/course-details/rating-summary';
import ReviewList from '@/components/course-details/review-list';
import { reviewsIntro } from '@/data/course-details';

const ReviewsTab = () => {
  return (
    <>
      <TextReveal>
        <h2 className="text-heading-xs">What Learners Are Saying</h2>
      </TextReveal>
      <TextReveal delay={0.2}>
        <p className="text-body-m text-shuttle-700 leading-[26px]">{reviewsIntro}</p>
      </TextReveal>
      <RatingSummary />

      <TextReveal>
        <h2 className="text-heading-xs">Individual Reviews:</h2>
      </TextReveal>
      <ReviewList />
    </>
  );
};

export default ReviewsTab;
