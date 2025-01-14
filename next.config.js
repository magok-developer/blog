const prefix =
  process.env.NODE_ENV === "production" ? "https://yeji-j.github.io/test/" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

module.exports = nextConfig;
