import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { CSSProperties, Ref } from 'react';

interface OrnamentProps {
  src: StaticImageData | string;
  x: number;
  y: number;
  size: number;
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLImageElement>;
}

const Ornament = ({ src, x, y, size, flip, className, style, ...props }: OrnamentProps) => {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      sizes={`${Math.round(size)}px`}
      className={cn('pointer-events-none absolute max-w-none select-none', className)}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: flip ? 'scaleX(-1)' : undefined,
        ...style,
      }}
      {...props}
    />
  );
};

export default Ornament;
