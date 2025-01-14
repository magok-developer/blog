const prefix =
  process.env.NODE_ENV === "production"
    ? "https://magok-developer.github.io/blog/"
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: prefix,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
