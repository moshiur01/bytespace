import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// play_circle/Style=Filled (60x60 glyph in a 72px frame)
export const PlayCircleIcon = ({ size, ...props }: IconProps) => (
  <svg
    width={size ?? 72}
    height={size ?? 72}
    viewBox="0 0 72 72"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      transform="matrix(1 0 0 1 6 6)"
      d="M30 0C13.44 0 0 13.44 0 30C0 46.56 13.44 60 30 60C46.56 60 60 46.56 60 30C60 13.44 46.56 0 30 0ZM24 43.5L24 16.5L42 30L24 43.5Z"
      fill="currentColor"
    />
  </svg>
);
