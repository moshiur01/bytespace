import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: ReactNode;
  description: ReactNode;
  /** 44px (Heading M) or 36px (Heading S) title */
  size?: 'm' | 's';
  titleClassName?: string;
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  size = 'm',
  titleClassName,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center',
        className
      )}
    >
      <TextReveal>
        <h2
          className={cn(
            'text-vulcan-950 text-[28px] leading-[1.2] tracking-[-0.01em]',
            size === 'm' ? 'sm:text-heading-m' : 'sm:text-heading-s',
            titleClassName
          )}
        >
          {title}
        </h2>
      </TextReveal>
      <RevealAnimation delay={0.2}>
        <p className="text-body-m text-shuttle-400 sm:text-body-l">{description}</p>
      </RevealAnimation>
    </div>
  );
};

export default SectionHeading;
