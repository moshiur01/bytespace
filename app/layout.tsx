import { fontVariables } from '@/utils/font';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="bg-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
