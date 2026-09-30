import { SignalIcon, StarFilledIcon, StarRoundIcon } from '@/components/shared/icon';
import AvatarStack from '@/components/shared/ui/avatar-stack';
import { courseCardAvatars } from '@/data/avatars';
import type { Course } from '@/interface';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
  className?: string;
}

const CourseCard = ({ course, featured = false, className }: CourseCardProps) => {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];
  return (
    <div
      className={cn(
        'ring-shuttle-200 group/course-card relative flex h-96 w-full min-w-0 flex-col space-y-5.25 rounded-3xl bg-white p-4 ring-1 transition-all duration-500 ease-out ring-inset hover:shadow-md',
        className
      )}
    >
      <figure className="relative h-48.75 w-full shrink-0 overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/course-card:scale-110"
        />
        <ul className="absolute bottom-[19px] left-3 flex gap-3">
          {meta.map((item) => (
            <li
              key={item}
              className="bg-surface-2/60 text-label-xs flex h-6.5 items-center rounded-3xl px-3 font-medium whitespace-nowrap text-neutral-700 backdrop-blur-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </figure>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-poppins text-heading-xs truncate text-black">
              <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0">
                {course.title}
              </Link>
            </h3>
            <p className="text-body-xs text-neutral-700">
              by{' '}
              <Link
                href={`/creators/${course.creatorSlug}`}
                className="text-primary-800 relative z-10 hover:underline"
              >
                {course.creator}
              </Link>
            </p>
          </div>
          <div className="text-body-l flex shrink-0 items-center text-neutral-700">
            {course.rating}
            <span className="w-[5px]" />
            {featured ? (
              <StarFilledIcon className="text-accent-400" />
            ) : (
              <StarRoundIcon className="text-shuttle-200" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-shuttle-50 text-label-xs text-shuttle-700 flex h-8 items-center gap-1 rounded-3xl px-3 font-medium">
            <SignalIcon size={20} />
            {course.level}
          </span>
          <AvatarStack
            avatars={courseCardAvatars}
            count={course.enrolledCount}
            countClassName={featured ? 'bg-black text-white' : undefined}
          />
        </div>

        <p className="flex items-end">
          <span className="font-poppins text-heading-xs text-primary-800 font-semibold">
            ${course.price}
          </span>
          <span className="text-body-xs text-neutral-700">/lifetime</span>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
