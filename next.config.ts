import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "res.cloudinary.com",
      "i.pravatar.cc", // ✅ Corrected hostname
      "randomuser.me", // add this too if you're using it
      "avatars.dicebear.com",
      "ui-avatars.com"
    ],
  },
};

export default nextConfig;
