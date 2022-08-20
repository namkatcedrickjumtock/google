/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "upload.wikimedia.org",
      "flyclipart.com",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;
