import TextReveal from '@/components/animation/text-reveal';
import RevealAnimation from '@/components/animation/reveal-animation';
import { CheckCircleIcon } from '@/components/shared/icon';
import Glow from '@/components/shared/glow';
import Ornament from '@/components/shared/ornament';
import CourseCard from '@/components/shared/ui/cards/course-card';
import HappyStudentsCard from '@/components/shared/ui/cards/happy-students-card';
import LearningProgressCard from '@/components/shared/ui/cards/learning-progress-card';
import { courses } from '@/data/courses';
import type { Stat } from '@/interface';
import springALime from '@/public/images/3d/spring-a-lime.png';
import springBLime from '@/public/images/3d/spring-b-lime.png';
import studentBoy from '@/public/images/hero/student-boy.png';
import studentGirl from '@/public/images/hero/student-girl.png';
import Image from 'next/image';

const stats: Stat[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
];

const perks = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const RevenuePill = () => (
  <span className="bg-accent-500 text-shuttle-950 flex h-6 items-center rounded-3xl px-2 text-[10px] leading-5 font-medium">
    +12$
  </span>
);

const Growth = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-20 lg:h-[1460px] lg:py-0">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2"
      >
        <Glow x={722} y={788} size={1137} color="blue" strength={0.24} />
        <Glow x={-152} y={-466} size={1137} color="lime" strength={0.4} />
        <Glow x={-508} y={183} size={1137} color="blue" strength={0.16} />
        <Glow x={811} y={-458} size={1137} color="blue" strength={0.08} />
        <Glow x={-287} y={946} size={672} color="lime" strength={0.6} />
      </div>

      <div className="main-container relative flex flex-col gap-20 lg:gap-[72px] lg:pt-[120px]">
        {/* Row 1 — professional growth */}
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-[63px]">
          <div className="flex w-full flex-col gap-10 lg:w-[574px] lg:shrink-0">
            <TextReveal>
              <h2 className="text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] tracking-[-0.01em] lg:w-[577px]">
                Your Path to Professional Growth Starts Here!
              </h2>
            </TextReveal>
            <RevealAnimation delay={0.2}>
              <p className="text-body-m text-shuttle-700 sm:text-body-l lg:w-[477px]">
                Explore our curated selection of courses tailored to enhance your capabilities and
                accelerate your career journey. Whether you are looking to sharpen specific skills,
                gain industry expertise, or embark on a new career path entirely, we have the
                resources you need.
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
              <CourseCard
                course={courses[0]}
                featured
                className="absolute top-0 left-0 w-[373px]"
              />
              <Image
                src={studentBoy}
                alt="Student learning online"
                sizes="577px"
                className="drop-shadow-photo absolute top-3 left-0 h-[540px] w-[577px] max-w-none"
              />
              <LearningProgressCard
                relaxed
                className="absolute top-[213px] left-[345px] h-[138px]"
              />
              <Ornament src={springALime} x={404} y={67} size={216} />
            </div>
          </RevealAnimation>
        </div>

        {/* Row 2 — create & manage */}
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:gap-[79px]">
          <RevealAnimation delay={0.2} offset={80}>
            <div className="relative hidden h-[596px] w-[541px] shrink-0 lg:block">
              <div className="bg-primary-800 text-shuttle-50 absolute top-11 left-0 flex w-[232px] flex-col gap-2 rounded-2xl p-4 backdrop-blur-[10px]">
                <div>
                  <p className="text-label-m font-medium">Total Revenue</p>
                  <p className="text-[10px] leading-[1.2]">July 1-28</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-poppins text-heading-2xs font-semibold">$120.29</p>
                  <RevenuePill />
                </div>
                <div className="h-2 w-full overflow-hidden rounded-3xl bg-white">
                  <div className="bg-accent-400 h-full w-[56%] rounded-3xl" />
                </div>
              </div>
              <div className="bg-primary-800 text-shuttle-50 absolute top-[194px] left-0 flex w-[134px] flex-col items-start gap-2 rounded-2xl p-4 backdrop-blur-[10px]">
                <div>
                  <p className="text-label-m font-medium">Year to Date</p>
                  <p className="text-[10px] leading-[1.2]">2023</p>
                </div>
                <p className="font-poppins text-heading-2xs font-semibold">$1,200.38</p>
                <RevenuePill />
              </div>
              <Image
                src={studentGirl}
                alt="Creator smiling with headphones"
                sizes="435px"
                className="drop-shadow-photo absolute top-0 left-7 h-[596px] w-[435px] max-w-none"
              />
              <HappyStudentsCard compact className="absolute top-[413px] left-[283px] h-[123px]" />
              <Ornament src={springBLime} x={303} y={114} size={216} />
            </div>
          </RevealAnimation>

          <div className="flex w-full flex-col gap-10 lg:w-[580px]">
            <TextReveal>
              <h2 className="text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] tracking-[-0.01em] lg:w-[391px]">
                Create &amp; Manage Courses Easily.
              </h2>
            </TextReveal>
            <RevealAnimation delay={0.2}>
              <p className="text-body-m text-shuttle-700 sm:text-body-l sm:leading-7 lg:w-[574px]">
                <strong className="text-shuttle-950 font-bold">ByteSpace</strong> supports
                individuals or entities in the creation, publication, and administration of
                educational courses.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <ul className="flex flex-col gap-4">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-end gap-2">
                    <CheckCircleIcon className="text-primary-800 shrink-0" />
                    <span className="text-label-l text-shuttle-950 font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
