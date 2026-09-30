'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProgressBarOnScrollProps {
  /** 0–100 */
  value: number;
  delay?: number;
  duration?: number;
  className?: string;
  trackClassName?: string;
}

/** Progress bar whose fill grows to `value`% when it scrolls into view. */
const ProgressBarOnScroll = ({
  value,
  delay = 0,
  duration = 1.8,
  className,
  trackClassName,
}: ProgressBarOnScrollProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const fill = fillRef.current;
      if (!fill) return;
      gsap.set(fill, { width: '0%' });
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => gsap.to(fill, { width: `${value}%`, duration, delay, ease: 'power2.out' }),
      });
    },
    { dependencies: [value, delay, duration] }
  );

  return (
    <div
      ref={trackRef}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-2 w-full shrink-0 overflow-hidden rounded-3xl bg-surface-2', trackClassName)}
    >
      <div
        ref={fillRef}
        className={cn('h-full rounded-3xl bg-accent-400', className)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBarOnScroll;
