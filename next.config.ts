import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Off in this project: Strict Mode double-invokes effects/renders in dev,
  // which doubles the work of the continuous animations (Lenis, particles,
  // mockups) and makes `npm run dev` feel laggy. Production is unaffected.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
};

export default nextConfig;
