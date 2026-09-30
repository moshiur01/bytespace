import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // serve photos close to the Figma originals (default is 75)
    qualities: [90],
  },
};

export default nextConfig;
