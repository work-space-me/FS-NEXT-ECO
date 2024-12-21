import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
