import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/portfolio", destination: "/nephews", permanent: true }];
  },
  async headers() {
    return [
      {
        // Brand assets are meant to be reused anywhere (social tools, press, partners).
        source: "/brand/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
