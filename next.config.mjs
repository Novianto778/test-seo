/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pagedone.io",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
