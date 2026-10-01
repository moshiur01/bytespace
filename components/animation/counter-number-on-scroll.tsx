'use client';

import { cn } from '@/utils/cn';
import { useRender } from '@base-ui/react/use-render';
import { useGSAP } from '@gsap/react';
import NumberFlow, { type Format } from '@number-flow/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ComponentPropsWithoutRef, type ReactElement, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CounterNumberOnScrollProps extends ComponentPropsWithoutRef<'span'> {
  value: number;
  delay?: number;
  duration?: number;
  instant?: boolean;
  format?: Format;
  prefix?: string;
  suffix?: string;
  render?: ReactElement;
}

const CounterNumberOnScroll = ({
  value,
  delay = 0,
  duration = 1.8,
  instant = false,
  format,
  prefix,
  suffix,
  render,
  className,
  ...props
}: CounterNumberOnScrollProps) => {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useGSAP(
    () => {
      if (!ref.current) return;
      const play = () => gsap.delayedCall(delay, () => setDisplayValue(value));

      if (instant) {
        play();
        return;
      }
      ScrollTrigger.create({ trigger: ref.current, start: 'top 90%', once: true, onEnter: play });
    },
    { dependencies: [value, delay, instant] }
  );

  const ms = duration * 1000;

  return useRender({
    render,
    ref,
    defaultTagName: 'span',
    props: {
      'data-counter-trigger': '',
      ...props,
      className: cn('inline-flex h-[1lh] items-center', className),
      children: (
        <NumberFlow
          value={displayValue}
          format={{ useGrouping: false, ...format }}
          prefix={prefix}
          suffix={suffix}
          trend={0}
          transformTiming={{ duration: ms, easing: 'ease-out' }}
          spinTiming={{ duration: ms, easing: 'ease-out' }}
          opacityTiming={{ duration: Math.max(250, ms * 0.45), easing: 'ease-out' }}
        />
      ),
    },
  });
};

export default CounterNumberOnScroll;
