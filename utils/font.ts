import { Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const satoshi = localFont({
  variable: '--font-satoshi-local',
  display: 'swap',
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
});

const clashDisplay = localFont({
  variable: '--font-clash-local',
  display: 'swap',
  src: [{ path: '../public/fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' }],
});

const poppins = Poppins({
  variable: '--font-poppins-google',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter-google',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const fontVariables = [satoshi, clashDisplay, poppins, inter].map((f) => f.variable).join(' ');
