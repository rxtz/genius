/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: '**' }],
  },
};
