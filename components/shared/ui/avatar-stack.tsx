import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

interface AvatarStackProps {
  avatars: StaticImageData[];
  count: ReactNode;
  size?: 'sm' | 'lg';
  countClassName?: string;
  className?: string;
}

const AvatarStack = ({
  avatars,
  count,
  size = 'sm',
  countClassName,
  className,
}: AvatarStackProps) => {
  const item = size === 'sm' ? 'size-8 -ml-2 first:ml-0' : 'size-[43px] -ml-4 first:ml-0';
  return (
    <div className={cn('flex items-center', className)}>
      {avatars.map((avatar, index) => (
        <Image
          key={index}
          src={avatar}
          alt=""
          className={cn('relative shrink-0 rounded-full object-cover', item)}
        />
      ))}
      <span
        className={cn(
          'bg-accent-400 text-shuttle-950 relative flex shrink-0 items-center justify-center rounded-full',
          item,
          size === 'sm' ? 'text-label-xs font-medium' : 'text-xs leading-[1.5] font-bold',
          countClassName
        )}
      >
        {count}
      </span>
    </div>
  );
};

export default AvatarStack;
