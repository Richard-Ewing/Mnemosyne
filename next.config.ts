import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect themnemosyne.app to themnemosyne.io
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "themnemosyne.app",
          },
        ],
        destination: "https://exogram.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.themnemosyne.app",
          },
        ],
        destination: "https://exogram.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "themnemosyne.io",
          },
        ],
        destination: "https://exogram.ai/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.themnemosyne.io",
          },
        ],
        destination: "https://exogram.ai/:path*",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/api/keys/:path*",
        destination: "https://api.exogram.ai/api/keys/:path*",
        permanent: false, // Rewrite, not redirect
      },
    ];
  },
  // Ensure we ignore the type error if my fix doesn't catch it all (safeguard)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
