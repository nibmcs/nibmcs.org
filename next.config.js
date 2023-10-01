/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    buildOptimizations: {
      cache: true,
    },
  },
};

module.exports = nextConfig;
