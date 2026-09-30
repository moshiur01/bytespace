'use client';

import { ShoppingBagIcon } from '@/components/shared/icon';
import MobileMenu from '@/components/shared/layout/mobile-menu';
import Logo from '@/components/shared/logo';
import { authLinks, navItems } from '@/data/navbar';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const isActivePath = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href.split('/').slice(0, 2).join('/'));

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-40 h-[120px]">
      <div className="main-container pt-[35px]">
        <div className="relative flex h-[37px] items-center justify-between">
          <Logo className="ml-0.5" />

          <nav
            aria-label="Main"
            className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-shuttle-50 text-base leading-6 transition-opacity hover:opacity-80',
                    active && 'font-medium'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {authLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-shuttle-50 text-base leading-6 transition-opacity hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
            <button type="button" aria-label="Cart" className="text-shuttle-50 cursor-pointer">
              <ShoppingBagIcon />
            </button>
          </div>

          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
