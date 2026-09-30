import ButtonLime from '@/components/shared/ui/button/button-lime';
import {
  courseCreator,
  courseIncludes,
  courseOverview,
  previewLessons,
} from '@/data/course-details';
import type { Course } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';

interface CourseSidebarProps {
  course: Course;
}

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  return (
    <aside
      aria-label="Course summary"
      className="ring-shuttle-200 w-full rounded-3xl bg-white p-6 ring-1 ring-inset sm:p-10 xl:w-[412px]"
    >
      <div className="flex flex-col gap-6">
        {/* Lessons preview */}
        <div className="flex flex-col gap-6">
          <h2 className="text-heading-xs">{courseOverview.lessonsSummary}</h2>
          <div className="flex flex-col gap-3">
            <ol className="flex flex-col gap-3">
              {previewLessons.map((lesson) => (
                <li key={lesson.number} className="flex items-start justify-between gap-4">
                  <span className="text-label-m text-shuttle-950 flex gap-2 leading-[19px] font-medium">
                    <span className="w-6 shrink-0">{lesson.number}</span>
                    <span className="max-w-[198px]">{lesson.title}</span>
                  </span>
                  <span className="text-body-m text-primary-800 leading-[26px] whitespace-nowrap">
                    {lesson.duration}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-body-m text-shuttle-700 leading-[26px]">
              {courseOverview.moreVideos}
            </p>
          </div>
        </div>

        {/* Price + enroll */}
        <div className="flex flex-col gap-6">
          <p className="text-body-m text-shuttle-700 leading-[26px]">{courseOverview.enrollText}</p>
          <p className="flex items-end">
            <span className="font-poppins text-heading-s text-primary-800 block h-[38px] font-semibold">
              ${course.price}
            </span>
            <span className="text-body-m text-shuttle-700 leading-[26px]">
              {courseOverview.priceUnit}
            </span>
          </p>
          <ButtonLime href="/register" className="w-full">
            Enroll Now
          </ButtonLime>
        </div>

        {/* Includes */}
        <h2 className="text-heading-xs">This course include</h2>
        <ul className="flex flex-col gap-3">
          {courseIncludes.map(({ icon: Icon, label }) => (
            <li key={label} className="text-body-m text-shuttle-700 flex gap-2 leading-[26px]">
              <Icon className="text-primary-800 shrink-0" />
              {label}
            </li>
          ))}
        </ul>

        <hr className="-mb-px border-neutral-200" />

        {/* Creator */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-start gap-3">
            <Image
              src={courseCreator.avatar}
              alt={courseCreator.name}
              width={52}
              height={52}
              className="size-[52px] shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-label-l text-shuttle-950 font-medium">{courseCreator.name}</p>
              <p className="text-body-m text-shuttle-700 leading-[26px]">{courseCreator.role}</p>
            </div>
          </div>
          <p className="text-body-m text-shuttle-700 leading-[26px]">{courseCreator.bio}</p>
          <Link
            href={`/creators/${course.creatorSlug}`}
            className="text-label-m text-shuttle-700 ring-shuttle-200 hover:bg-shuttle-50 inline-flex h-[35px] items-center rounded-3xl px-4 font-medium ring-1 transition-colors ring-inset"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CourseSidebar;
