import Logo from '@/components/shared/logo';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import { footerColumns, footerDescription, footerLegal, footerLegalLinks } from '@/data/footer';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-shuttle-200 border-t bg-white">
      <div className="main-container">
        <div className="space-y-32.5 pt-17.5 pb-12 max-lg:space-y-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-23">
            <div className="w-full space-y-[45px] lg:w-[528px] lg:shrink-0">
              <div className="space-y-4">
                <Logo variant="dark" />
                <p className="text-body-s text-shuttle-950">{footerDescription}</p>
              </div>

              <div className="space-y-6">
                <form className="flex max-w-[504px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <label className="flex w-full flex-1 items-center bg-white">
                    <span className="sr-only">Email address</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="text-body-m text-shuttle-950 ring-shuttle-200 focus-within:ring-accent-600 placeholder:text-shuttle-950 h-[52px] w-full rounded-full bg-transparent px-6 ring-1 outline-none ring-inset focus-within:ring-1"
                    />
                  </label>
                  <ButtonLime type="submit" className="h-[52px] w-[104px]">
                    Search
                  </ButtonLime>
                </form>
                <p className="text-body-xs text-shuttle-950 max-w-[504px]">{footerLegal}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:w-[580px] lg:grid-cols-[167px_167px_167px]">
              {footerColumns.map((column, index) => (
                <div key={index} className={column.title ? '' : 'pt-12 max-sm:order-last'}>
                  {column.title && (
                    <p className="mb-6 text-base leading-6 text-black">{column.title}</p>
                  )}
                  <ul className="flex flex-col gap-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-body-s text-shuttle-950 hover:text-primary-800 hover-underline inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-shuttle-200 border-t pt-5.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-body-xs text-shuttle-950">
                @ {new Date().getFullYear()} ByteSpace. All rights reserved.
              </p>
              <ul className="flex flex-wrap gap-6">
                {footerLegalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-xs text-shuttle-950 hover-underline inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
