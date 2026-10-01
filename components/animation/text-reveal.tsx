'use client';

import { useRender } from '@base-ui/react/use-render';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { type ComponentPropsWithoutRef, type ReactElement, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, useGSAP);
CustomEase.create('bouncy-ease', '0.34, 1.42, 0.64, 1');

interface TextRevealProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  asChild?: boolean;
  children: ReactElement | ReactElement[] | string;
  duration?: number;
  delay?: number;
  start?: string;
}

const TextReveal = ({
  asChild = true,
  children,
  duration = 0.8,
  delay = 0,
  start = 'top 90%',
  ...props
}: TextRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const element = ref.current;
      if (!element) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(element, { opacity: 1 });
        return;
      }

      const run = contextSafe!(() => {
        const split = SplitText.create(element, {
          type: 'lines, words, chars',
          mask: 'lines',
          linesClass: 'line',
          wordsClass: 'word',
          charsClass: 'letter',
        });

        gsap.fromTo(
          split.lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration,
            delay,
            stagger: 0.08,
            ease: 'bouncy-ease',
            onStart: () => gsap.set(element, { opacity: 1 }),
            scrollTrigger: { trigger: element, start },
          }
        );
      });

      document.fonts.ready.then(run);
    },
    { dependencies: [duration, delay, start] }
  );

  return useRender({
    render: asChild ? (children as ReactElement) : undefined,
    ref,
    props: { 'data-text-reveal': '', ...props, ...(asChild ? {} : { children }) },
  });
};

export default TextReveal;
