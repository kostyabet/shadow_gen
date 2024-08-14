/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/shadow-gen",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
