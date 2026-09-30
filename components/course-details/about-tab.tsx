import TextReveal from '@/components/animation/text-reveal';
import RevealAnimation from '@/components/animation/reveal-animation';
import { CheckCircleIcon } from '@/components/shared/icon';
import { courseDescription, keyPoints, sneakPeekImages } from '@/data/course-details';
import Image from 'next/image';

const AboutTab = () => {
  return (
    <>
      <TextReveal>
        <h2 className="text-heading-xs">Description</h2>
      </TextReveal>
      <RevealAnimation delay={0.1}>
        <div className="text-body-m text-shuttle-700 flex flex-col gap-[26px] leading-[26px] xl:w-[723px]">
          {courseDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </RevealAnimation>

      <TextReveal>
        <h2 className="text-heading-xs">Sneak Peak</h2>
      </TextReveal>
      <RevealAnimation delay={0.1}>
        <ul className="grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:gap-0">
          {sneakPeekImages.map((image) => (
            <li key={image.alt} className="sm:w-[23.03%]">
              <Image
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 640px) 167px, 50vw"
                className="aspect-[167/125] w-full rounded-2xl object-cover"
              />
            </li>
          ))}
        </ul>
      </RevealAnimation>

      <TextReveal>
        <h2 className="text-heading-xs">Key Points</h2>
      </TextReveal>
      <RevealAnimation delay={0.1}>
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point) => (
            <li key={point} className="text-body-m text-shuttle-700 flex gap-2 leading-[26px]">
              <CheckCircleIcon className="text-primary-800 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </RevealAnimation>
    </>
  );
};

export default AboutTab;
