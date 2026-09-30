import CourseTabPanel from '@/components/course-details/course-tab-panel';
import LessonsTab from '@/components/course-details/lessons-tab';
import { getCourseHeadline } from '@/data/course-details';
import { getCourse } from '@/data/courses';
import { generateMetadata as buildMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const course = getCourse((await params).slug);
  if (!course) return buildMetadata();
  return buildMetadata(
    `Lessons: ${getCourseHeadline(course)} || ByteSpace`,
    'Explore the modules, lesson content and progress tracking of this course.'
  );
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <CourseTabPanel slug={slug} className="xl:w-[723px] xl:pt-[79px] xl:pb-[83px]">
      <LessonsTab />
    </CourseTabPanel>
  );
};

export default Page;
