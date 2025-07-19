import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["**/node_modules", "**/.git"],
    };
    config.snapshot = {
      ...config.snapshot,
      managedPaths: [],
    };
    return config;
  },
  
  allowedDevOrigins: [
    "http://127.0.0.1:3000"],
    skipMiddlewareUrlNormalize: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.scdn.co",
          port: "",
          pathname: "/image/**",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
          port: "",
          pathname: "/**",
        }
      ],
    },
};

export default nextConfig;
