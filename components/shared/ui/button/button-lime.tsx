import DotLabel from '@/components/shared/dot-label';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Size = 'md' | 'lg';

const sizes: Record<Size, string> = {
  // 40px tall — Label M
  md: 'h-10 px-6 text-label-m',
  // 46px tall — Label L
  lg: 'h-[46px] px-6 text-label-l',
};

const base =
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-3xl bg-accent-400 font-medium whitespace-nowrap text-shuttle-950 transition-colors duration-300 can-hover:hover:bg-accent-500';

type ButtonLimeProps = { size?: Size; className?: string; children: ReactNode } & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, 'href' | 'className'>)
  | ({ href?: undefined } & Omit<ComponentProps<'button'>, 'className'>)
);

const ButtonLime = ({ size = 'lg', className, children, ...props }: ButtonLimeProps) => {
  const classes = cn(base, sizes[size], className);
  const content = typeof children === 'string' ? <DotLabel text={children} /> : children;
  if (props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {content}
      </Link>
    );
  }
  const { type = 'button', ...rest } = props as ComponentProps<'button'>;
  return (
    <button type={type} {...rest} className={classes}>
      {content}
    </button>
  );
};

export default ButtonLime;
