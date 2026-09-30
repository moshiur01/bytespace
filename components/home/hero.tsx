import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import Ornament from '@/components/shared/ornament';
import SearchBar from '@/components/shared/search-bar';
import CategoryStatCard from '@/components/shared/ui/cards/category-stat-card';
import HappyStudentsCard from '@/components/shared/ui/cards/happy-students-card';
import LearningProgressCard from '@/components/shared/ui/cards/learning-progress-card';
import cylinderLime from '@/public/images/3d/cylinder-lime.png';
import pyramidWhite from '@/public/images/3d/pyramid-white.png';
import springAWhite from '@/public/images/3d/spring-a-white.png';
import springBLime from '@/public/images/3d/spring-b-lime.png';
import springBWhite from '@/public/images/3d/spring-b-white.png';
import torusWhite from '@/public/images/3d/torus-white.png';
import studentBoy from '@/public/images/hero/student-boy.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-grid-lines bg-primary-800 relative overflow-hidden lg:h-256">
      {/* bottom lime circle   */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
      >
        <div className="border-accent-500 absolute top-[582px] left-[145px] size-[1149px] rounded-full border-[320px]" />
      </div>

      <div className="main-container">
        <div className="space-y-15 pt-40 pb-16 text-center lg:pt-42.25 lg:pb-0">
          <div className="space-y-8 text-center">
            <TextReveal>
              <h1 className="lg:text-heading-l mx-auto max-w-[935px] text-[40px] leading-[1.2] tracking-[-0.01em] text-white sm:text-6xl">
                Get Access to Hundreds Courses Available
              </h1>
            </TextReveal>
            <RevealAnimation delay={0.3}>
              <p className="text-body-m text-shuttle-100 sm:text-body-l mx-auto max-w-[819px]">
                Unlock your creativity, gain valuable knowledge, and grow your business with our
                wide range of courses.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation asChild={false} delay={0.45} className="mx-auto w-full max-w-[581px]">
            <SearchBar />
          </RevealAnimation>
          <div className="relative mt-12 w-full max-w-[578px] text-left lg:hidden">
            <Image
              src={studentBoy}
              alt="Smiling student with headphones holding a laptop"
              priority
              sizes="(min-width: 640px) 578px, 100vw"
              className="drop-shadow-photo w-full"
            />
            <CategoryStatCard
              title="UI/UX Design"
              courses={200}
              students={1000}
              className="absolute top-[22%] left-0 origin-top-left scale-[0.65] sm:scale-90"
            />
            <LearningProgressCard className="absolute top-[26%] right-0 origin-top-right scale-[0.65] sm:scale-90" />
            <HappyStudentsCard className="absolute bottom-[6%] left-0 origin-bottom-left scale-[0.65] sm:scale-90" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-360 -translate-x-1/2 lg:block">
        <RevealAnimation delay={0.5} offset={80}>
          <Image
            src={studentBoy}
            alt="Smiling student with headphones holding a laptop"
            priority
            sizes="578px"
            className="drop-shadow-photo absolute top-128 left-107.75 h-135.25 w-144.5 max-w-none"
          />
        </RevealAnimation>
        <RevealAnimation asChild={false} delay={0.8} direction="left" offset={40}>
          <LearningProgressCard className="pointer-events-auto absolute top-162.75 left-210.5 h-32.75" />
        </RevealAnimation>
        <RevealAnimation asChild={false} delay={0.9} direction="right" offset={40}>
          <HappyStudentsCard className="pointer-events-auto absolute top-209.25 left-82 h-30.25" />
        </RevealAnimation>

        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springBLime} x={-121.6} y={221} size={386.8} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springBWhite} x={183.8} y={477} size={175.8} flip />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={torusWhite} x={14.4} y={681.3} size={343.7} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={cylinderLime} x={1227.1} y={220.2} size={371.8} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={pyramidWhite} x={1104} y={463.6} size={188.9} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springAWhite} x={1123.9} y={672} size={331.5} />
        </RevealAnimation>

        <RevealAnimation asChild={false} delay={1} direction="right" offset={40}>
          <CategoryStatCard
            title="UI/UX Design"
            courses={200}
            students={1000}
            className="pointer-events-auto absolute top-159.75 left-101"
          />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
