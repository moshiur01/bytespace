import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import Ornament from '@/components/shared/ornament';
import CourseCard from '@/components/shared/ui/cards/course-card';
import LearningProgressCard from '@/components/shared/ui/cards/learning-progress-card';
import { courses } from '@/data/courses';
import type { Stat } from '@/interface';
import springALime from '@/public/images/3d/spring-a-lime.png';
import studentBoy from '@/public/images/hero/student-boy.png';
import Image from 'next/image';

const stats: Stat[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

/** Growth section, row 1: professional growth copy + stats beside the student collage */
const ProfessionalGrowth = () => {
  return (
    <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-[63px]">
      <div className="w-full space-y-10 lg:w-[574px] lg:shrink-0">
        <TextReveal>
          <h2 className="text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] tracking-[-0.01em] lg:w-[577px]">
            Your Path to Professional Growth Starts Here!
          </h2>
        </TextReveal>
        <RevealAnimation delay={0.2}>
          <p className="text-body-m text-shuttle-700 sm:text-body-l lg:w-[477px]">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <dl className="flex items-end gap-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-body-l text-shuttle-700">{stat.label}</dt>
                <dd className="font-poppins text-display-xs text-primary-800 font-medium">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.2} offset={80}>
        <div className="relative hidden h-[552px] w-[621px] shrink-0 lg:block">
          <CourseCard course={courses[0]} featured className="absolute top-0 left-0 w-[373px]" />
          <Image
            src={studentBoy}
            alt="Student learning online"
            sizes="577px"
            className="drop-shadow-photo absolute top-3 left-0 h-[540px] w-[577px] max-w-none"
          />
          <LearningProgressCard relaxed className="absolute top-[213px] left-[345px] h-[138px]" />
          <Ornament src={springALime} x={404} y={67} size={216} />
        </div>
      </RevealAnimation>
    </div>
  );
};

export default ProfessionalGrowth;
