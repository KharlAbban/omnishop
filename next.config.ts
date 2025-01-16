import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: ""
      },
    ]
  }
};

export default nextConfig;
