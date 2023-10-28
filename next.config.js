/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
  distDir: 'build',
};

module.exports = nextConfig;
