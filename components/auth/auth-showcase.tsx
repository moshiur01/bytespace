import Ornament from '@/components/shared/ornament';
import CourseCard from '@/components/shared/ui/cards/course-card';
import HappyStudentsCard from '@/components/shared/ui/cards/happy-students-card';
import { getCourse } from '@/data/courses';
import pyramidLime from '@/public/images/3d/pyramid-lime.png';
import springBWhite from '@/public/images/3d/spring-b-white.png';
import torusLime from '@/public/images/3d/torus-lime.png';
import { cn } from '@/utils/cn';

interface AuthShowcaseProps {
  mutedRating?: boolean;
  className?: string;
}

const cardTweaks =
  'absolute w-[373px] [&_h3]:leading-7 [&_h3+p]:leading-5 [&_li]:h-8 [&_li]:leading-5 [&_ul]:bottom-[13px]';

const AuthShowcase = ({ mutedRating = true, className }: AuthShowcaseProps) => {
  const digitalAsset = getCourse('build-digital-asset');
  const bigData = getCourse('the-power-of-big-data');

  return (
    <div
      aria-hidden="true"
      inert
      className={cn('pointer-events-none relative h-[585px] w-[548px] overflow-hidden', className)}
    >
      {digitalAsset && (
        <CourseCard
          course={digitalAsset}
          featured
          className={cn(cardTweaks, 'top-[89px] left-[25px]')}
        />
      )}
      {bigData && (
        <CourseCard course={bigData} featured className={cn(cardTweaks, 'top-0 left-[136px]')} />
      )}
      <HappyStudentsCard
        compact
        className={cn(
          'bg-accent-400 absolute top-[435px] left-[251px] h-[123px]',
          !mutedRating && '[&_p:last-child]:text-shuttle-800'
        )}
        starClassName="text-primary-800"
        countClassName="bg-shuttle-950 text-shuttle-50"
      />

      <Ornament src={springBWhite} x={373.8} y={321} size={175.8} className="-scale-x-100" />
      <Ornament src={torusLime} x={52.5} y={14.7} size={146.7} />
      <Ornament src={pyramidLime} x={-2} y={396.6} size={188.9} />
    </div>
  );
};

export default AuthShowcase;
