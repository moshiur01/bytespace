import Logo from '@/components/shared/logo';

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-grid-lines bg-primary-800 min-h-screen overflow-x-clip">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 xl:pr-[120px] xl:pb-[120px] xl:pl-[122px]">
        <header className="flex h-24 items-center xl:h-[120px] xl:items-start xl:pt-[35px]">
          <Logo />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
