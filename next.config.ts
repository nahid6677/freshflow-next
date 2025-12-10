import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["react", "next"],
  },

  output: "standalone",
};

export default nextConfig;
