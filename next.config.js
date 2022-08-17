/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      'upload.wikimedia.org',
      'flyclipart.com'
    ],
  },
  
}

module.exports = nextConfig
