/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.hashnode.com'],
  },
  distDir: 'build',
};

module.exports = nextConfig;
