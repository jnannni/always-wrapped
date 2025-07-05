import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000", "http://127.0.0.1:3000"],
    skipMiddlewareUrlNormalize: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
          port: '',
          pathname: '/image/**',
        }
      ]
    }
};

export default nextConfig;
