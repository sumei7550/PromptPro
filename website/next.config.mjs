/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The website is built from its own Vercel Root Directory and must not
  // infer the Chrome extension repository root from the parent lockfile.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
