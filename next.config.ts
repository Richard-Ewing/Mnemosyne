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
        destination: "https://themnemosyne.io/:path*",
        permanent: true, // 308 redirect for SEO
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.themnemosyne.app",
          },
        ],
        destination: "https://themnemosyne.io/:path*",
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
        destination: "https://themnemosyne.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
