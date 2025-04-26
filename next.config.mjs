/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com', 'via.placeholder.com'],
  },
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds
    // Only use this if you're having trouble fixing the actual issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;