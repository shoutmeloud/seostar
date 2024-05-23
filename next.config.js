/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['works-reddensoft.com', 'webservice.works-reddensoft.com'],
    unoptimized: true,
  },
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  output: 'export',
 
};

module.exports = nextConfig;
