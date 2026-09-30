import TextReveal from '@/components/animation/text-reveal';
import RevealAnimation from '@/components/animation/reveal-animation';
import CourseVideo from '@/components/course-details/course-video';
import ShareButton from '@/components/course-details/share-button';
import { PeopleIcon, SignalIcon, StarRoundIcon } from '@/components/shared/icon';
import { courseOverview, getCourseHeadline } from '@/data/course-details';
import type { Course } from '@/interface';
import Link from 'next/link';

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  const headline = getCourseHeadline(course);
  const chips = [
    { icon: SignalIcon, label: courseOverview.level },
    {
      icon: StarRoundIcon,
      label: `${courseOverview.rating} (${courseOverview.reviewCount} reviews)`,
    },
    { icon: PeopleIcon, label: `${courseOverview.studentCount} Students` },
  ];

  return (
    <section className="bg-grid-lines bg-primary-800 relative overflow-hidden xl:h-[957px]">
      <div className="main-container pt-[140px] pb-12 xl:pt-[172px] xl:pb-0">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between xl:ml-0.5 2xl:w-[1283px]">
          <div className="flex max-w-[769px] flex-col gap-6 xl:max-w-none">
            <div className="text-shuttle-50 flex flex-col gap-2">
              <TextReveal>
                <h1 className="sm:text-heading-s text-[28px] leading-[1.2] tracking-[-0.01em] xl:whitespace-nowrap">
                  {headline}
                </h1>
              </TextReveal>
              <RevealAnimation delay={0.15}>
                <p className="font-poppins sm:text-heading-xs text-lg leading-[1.2] font-semibold tracking-[-0.01em]">
                  {courseOverview.subtitle}
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.25}>
              <p className="text-label-l font-medium text-[#f1f4fe]">
                by{' '}
                <Link
                  href={`/creators/${course.creatorSlug}`}
                  className="text-accent-400 transition-opacity hover:opacity-80"
                >
                  {course.creator}
                </Link>
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <ul className="flex flex-wrap gap-3 sm:gap-4">
                {chips.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="text-label-m text-shuttle-950 flex h-10 items-center gap-2 rounded-3xl bg-white px-4 font-medium backdrop-blur-[20px] sm:px-6"
                  >
                    <Icon className="text-primary-800" />
                    {label}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3} direction="right" offset={40}>
            <ShareButton title={headline} />
          </RevealAnimation>
        </div>

        <RevealAnimation asChild={false} delay={0.4}>
          <CourseVideo
            title={course.title}
            className="mt-10 xl:mt-[59px] xl:ml-[5px] xl:h-[479px] xl:w-[720px]"
          />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CourseHeader;
