/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/img.autochek.africa/**'
      }
    ],
    domains: ['storage.googleapis.com', 'media.autochek.africa']
  }
}

module.exports = nextConfig
