import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "stable-song-05dbc98b6f.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
