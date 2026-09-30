import Footer from '@/components/shared/layout/footer';
import Navbar from '@/components/shared/layout/navbar';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
