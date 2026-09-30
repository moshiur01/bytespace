'use client';

import { isActivePath } from '@/components/shared/layout/navbar';
import { authLinks, navItems } from '@/data/navbar';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MobileMenu = ({ pathname }: { pathname: string }) => {
  const [open, setOpen] = useState(false);

  // close whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full bg-white/10"
      >
        <span
          className={cn(
            'bg-shuttle-50 h-0.5 w-5 transition-transform',
            open && 'translate-y-2 rotate-45'
          )}
        />
        <span className={cn('bg-shuttle-50 h-0.5 w-5 transition-opacity', open && 'opacity-0')} />
        <span
          className={cn(
            'bg-shuttle-50 h-0.5 w-5 transition-transform',
            open && '-translate-y-2 -rotate-45'
          )}
        />
      </button>

      <nav
        aria-label="Mobile"
        className={cn(
          'absolute inset-x-0 top-[53px] z-40 origin-top rounded-3xl bg-white p-6 shadow-xl transition-all duration-300',
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'text-label-l text-shuttle-950',
                  isActivePath(pathname, item.href) ? 'font-bold' : 'font-medium'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-shuttle-200 mt-6 flex gap-3 border-t pt-6">
          {authLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'text-label-m flex h-10 flex-1 items-center justify-center rounded-3xl font-medium',
                index === 0 ? 'bg-shuttle-50 text-shuttle-950' : 'bg-accent-400 text-shuttle-950'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
