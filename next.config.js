/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { optimizePackageImports: ['lucide-react', 'framer-motion'] },
  allowedDevOrigins: ['*.preview.emergentcf.cloud', '*.preview.emergentagent.com'],
};
module.exports = nextConfig;
