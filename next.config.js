/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'outreach.stg.pxlp.dev',
        pathname: '/assets/**',
      },
    ],
  },

}

module.exports = nextConfig
