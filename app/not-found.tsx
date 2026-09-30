import NotFoundHero from '@/components/not-found/not-found-hero';
import Footer from '@/components/shared/layout/footer';
import Navbar from '@/components/shared/layout/navbar';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Page Not Found || ByteSpace',
  'The page you are looking for doesn’t exist.'
);

const NotFound = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <NotFoundHero />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
