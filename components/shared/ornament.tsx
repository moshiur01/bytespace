import { cn } from '@/utils/cn';
import Image, { type StaticImageData } from 'next/image';
import type { CSSProperties, Ref } from 'react';

interface OrnamentProps {
  src: StaticImageData;
  /** position/size on the 1440px artboard, in px */
  x: number;
  y: number;
  size: number;
  /** horizontal mirror (Figma frames with a negative x scale) */
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLImageElement>;
}

/** Decorative 3D shape placed at exact artboard coordinates */
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
