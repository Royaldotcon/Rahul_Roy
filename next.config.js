/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old.rahulroy.in",
      },
      {
        protocol: "https",
        hostname: "rahulroy.in",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
}

module.exports = nextConfig
