const prefix =
  process.env.NODE_ENV === "production"
    ? "/blog" // GitHub Pages에서 `/blog`로 서브디렉토리 경로 설정
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: prefix,
  basePath: prefix, // basePath 추가
  images: {
    unoptimized: true, // 이미지 최적화 비활성화 (GitHub Pages에서 최적화 기능 미지원)
  },
};

module.exports = nextConfig;
