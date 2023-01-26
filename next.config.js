/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
