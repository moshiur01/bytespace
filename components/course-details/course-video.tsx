import { PlayCircleIcon } from '@/components/course-details/icons';
import courseVideo from '@/public/images/courses/course-video.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface CourseVideoProps {
  title: string;
  className?: string;
}

/** 720x479 preview frame; the 3:2 still is FIT into it (= cover at this aspect) */
const CourseVideo = ({ title, className }: CourseVideoProps) => {
  return (
    <div
      className={cn(
        'relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131]',
        className
      )}
    >
      <Image
        src={courseVideo}
        alt={`${title} course preview`}
        fill
        priority
        sizes="(min-width: 1280px) 720px, 100vw"
        className="object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex size-[72px] -translate-1/2 items-center justify-center rounded-3xl bg-[#3d3d3d]/24 text-violet-50 ring-1 ring-neutral-700 backdrop-blur-[20px] ring-inset sm:top-[42.59%] sm:left-[45%] sm:size-[104px] sm:translate-none"
      >
        <PlayCircleIcon className="size-12 sm:size-[72px]" />
      </span>
    </div>
  );
};

export default CourseVideo;
