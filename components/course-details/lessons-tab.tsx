import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import { VideocamIcon } from '@/components/shared/icon';
import {
  courseModules,
  lessonContent,
  lessonProgress,
  lessonProgressText,
  lessonsIntro,
} from '@/data/course-details';

const LessonsTab = () => {
  return (
    <>
      <TextReveal>
        <h2 className="text-heading-xs">Explore the Modules</h2>
      </TextReveal>
      <TextReveal delay={0.2}>
        <p className="text-body-m text-shuttle-700 leading-[26px]">{lessonsIntro}</p>
      </TextReveal>

      <TextReveal>
        <h2 className="text-heading-xs">Lesson List</h2>
      </TextReveal>
      {courseModules.map((module, index) => (
        <RevealAnimation key={module.title} delay={index * 0.1 + 0.3} offset={40}>
          <div className="flex items-center gap-[13px]">
            <span className="bg-accent-400 text-shuttle-950 flex size-14 shrink-0 items-center justify-center rounded-2xl sm:size-[72px] sm:rounded-3xl">
              <VideocamIcon className="size-8 sm:size-10" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-satoshi text-label-m text-shuttle-950 font-medium">
                {module.title}
              </h3>
              <p className="text-body-m text-shuttle-700 leading-[26px]">{module.description}</p>
            </div>
          </div>
        </RevealAnimation>
      ))}

      <TextReveal delay={0.6}>
        <h2 className="text-heading-xs">Lesson Content</h2>
      </TextReveal>
      <TextReveal delay={0.7}>
        <p className="text-body-m text-shuttle-700 leading-[26px]">{lessonContent}</p>
      </TextReveal>

      <TextReveal delay={0.8}>
        <h2 className="text-heading-xs">Lesson Progress Tracking</h2>
      </TextReveal>
      <TextReveal delay={0.8}>
        <p className="text-body-m text-shuttle-700 leading-[26px]">{lessonProgressText}</p>
      </TextReveal>

      <RevealAnimation delay={0.2}>
        <div className="ring-shuttle-200 flex flex-col gap-2 rounded-2xl bg-white p-4 ring-1 backdrop-blur-[10px] ring-inset">
          <p className="text-label-s text-shuttle-950 font-medium">Learning Progress</p>
          <p className="font-poppins text-heading-s text-shuttle-950 font-semibold">
            {lessonProgress}%
          </p>
          <div
            aria-label="Learning progress"
            aria-valuenow={lessonProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="bg-shuttle-100 h-2 overflow-hidden rounded-3xl"
          >
            <div
              className="bg-accent-400 h-full rounded-3xl"
              style={{ width: `${lessonProgress}%` }}
            />
          </div>
        </div>
      </RevealAnimation>
    </>
  );
};

export default LessonsTab;
