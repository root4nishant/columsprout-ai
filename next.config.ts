import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{hostname: 'storage.googleapis.com'}],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-inline';
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' https://storage.googleapis.com;
              media-src 'self' https://storage.googleapis.com;
              connect-src 'self'; 
              font-src 'self';
            `.replace(/\s{2,}/g, " ").trim(), // Compact CSP
          },
        ],
      },
    ];
  },
};

export default nextConfig;
