import RevealAnimation from '@/components/animation/reveal-animation';
import CourseToolbar from '@/components/creator/course-toolbar';
import CourseCard from '@/components/shared/ui/cards/course-card';
import type { Course } from '@/interface';

interface CreatorCoursesProps {
  courses: Course[];
}

const CreatorCourses = ({ courses }: CreatorCoursesProps) => {
  return (
    <section className="main-container pt-12 pb-16 lg:pt-[62px] lg:pb-[61px]">
      <h2 className="sr-only">Courses</h2>
      <CourseToolbar />
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <RevealAnimation key={course.slug} delay={(index % 3) * 0.1}>
            <div>
              <CourseCard course={course} className="overflow-hidden" />
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

export default CreatorCourses;
