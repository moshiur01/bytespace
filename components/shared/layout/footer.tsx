import Logo from '@/components/shared/logo';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import {
  footerColumns,
  footerCopyright,
  footerDescription,
  footerLegal,
  footerLegalLinks,
} from '@/data/footer';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-shuttle-200 border-t bg-white">
      <div className="main-container pt-[70px] pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="w-full lg:w-[528px] lg:shrink-0">
            <Logo variant="dark" />
            <p className="text-body-s text-shuttle-950 mt-4">{footerDescription}</p>

            <form className="mt-[45px] flex max-w-[504px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <label className="ring-shuttle-200 flex h-[52px] w-full flex-1 items-center rounded-[100px] bg-white px-6 ring-1 ring-inset">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="text-body-m text-shuttle-950 placeholder:text-shuttle-950 w-full bg-transparent outline-none"
                />
              </label>
              <ButtonLime type="submit" className="h-[52px] w-[104px]">
                Search
              </ButtonLime>
            </form>
            <p className="text-body-xs text-shuttle-950 mt-6 max-w-[504px]">{footerLegal}</p>
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
                        className="text-body-s text-shuttle-950 hover:text-primary-800 block transition-colors"
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

        <div className="border-shuttle-200 mt-[130px] border-t pt-[22px] max-lg:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-xs text-shuttle-950">{footerCopyright}</p>
            <ul className="flex flex-wrap gap-6">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-body-xs text-shuttle-950 block underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
