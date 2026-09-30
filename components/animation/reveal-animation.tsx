'use client';

import { useRender } from '@base-ui/react/use-render';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ComponentPropsWithoutRef, type ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealAnimationProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Render the child element itself (Slot behaviour). Set false to wrap in a div. */
  asChild?: boolean;
  children: ReactElement | ReactElement[];
  duration?: number;
  delay?: number;
  /** travel distance in px */
  offset?: number;
  /** play on mount instead of on scroll */
  instant?: boolean;
  start?: string;
  /** direction the element travels from */
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: number;
}

/** Fade + blur + slide in on scroll. */
const RevealAnimation = ({
  asChild = true,
  children,
  duration = 0.6,
  delay = 0,
  offset = 60,
  instant = false,
  start = 'top 90%',
  direction = 'down',
  blur = 16,
  ...props
}: RevealAnimationProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.set(element, { opacity: 1 });
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
      const distance = direction === 'up' || direction === 'left' ? -offset : offset;

      gsap.from(element, {
        opacity: 0,
        filter: `blur(${blur}px)`,
        [axis]: distance,
        duration,
        delay,
        ease: 'power2.out',
        clearProps: 'filter',
        scrollTrigger: instant ? undefined : { trigger: element, start },
      });
    },
    { dependencies: [duration, delay, offset, instant, start, direction, blur] }
  );

  return useRender({
    render: asChild ? (children as ReactElement) : undefined,
    ref,
    props: { 'data-ns-animate': '', ...props, ...(asChild ? {} : { children }) },
  });
};

export default RevealAnimation;
