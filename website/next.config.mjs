/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep Next.js default URL normalization: formal URLs have no trailing slash.
  // The website is built from its own Vercel Root Directory and must not
  // infer the Chrome extension repository root from the parent lockfile.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
