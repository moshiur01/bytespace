import { LogoMarkIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo = ({ variant = 'light', className }: LogoProps) => {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn('inline-flex h-[37px] w-[171px] shrink-0 items-start gap-2', className)}
    >
      <LogoMarkIcon className="text-accent-400" />
      <span
        className={cn(
          'font-clash mt-[7px] text-2xl leading-[30px] font-bold',
          variant === 'light' ? 'text-shuttle-50' : 'text-shuttle-950'
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
};

export default Logo;
