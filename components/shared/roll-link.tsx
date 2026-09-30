import { cn } from '@/utils/cn';
import Link from 'next/link';
import type { ComponentProps } from 'react';

type RollLinkProps = Omit<ComponentProps<typeof Link>, 'children'> & { children: string };

// Styles live in styles/common.css (.roll-link)
const RollLink = ({ children, className, ...props }: RollLinkProps) => (
  <Link className={cn('roll-link', className)} {...props}>
    <span className="roll-link__clip">
      <span className="roll-link__track">
        <span className="roll-link__text">{children}</span>
        <span className="roll-link__text" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
    <span className="roll-link__line" aria-hidden="true" />
  </Link>
);

export default RollLink;
