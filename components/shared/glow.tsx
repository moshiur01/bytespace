import { cn } from '@/utils/cn';

interface GlowProps {
  x: number;
  y: number;
  size: number;
  color: 'blue' | 'lime';
  strength: number;
  className?: string;
}

const rgb = { blue: '0 59 226', lime: '203 252 1' };

const Glow = ({ x, y, size, color, strength, className }: GlowProps) => {
  const c = rgb[color];
  const a = (v: number) => `rgb(${c} / ${(v * strength).toFixed(4)})`;
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full blur-[20px]', className)}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${a(1)} 0%, ${a(0.23)} 53%, ${a(0.06)} 75%, ${a(0)} 100%)`,
      }}
    />
  );
};

export default Glow;
