const prefix =
  process.env.NODE_ENV === "production"
    ? "/blog" // GitHub Pages 서브디렉토리 경로
    : ""; // 개발 환경에서는 빈 문자열로 설정

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 정적 사이트로 출력
  assetPrefix: prefix, // 자산 경로 프리픽스 설정
  basePath: prefix, // 모든 경로에 basePath 적용
  images: {
    unoptimized: true, // 이미지 최적화 비활성화 (GitHub Pages에서는 최적화 불가능)
  },
};

module.exports = nextConfig;
