// 빌드된 js파일들 무엇으로 이루어져있는지  분석해줌 npm i @next/bundle-analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true", // 환경변수 ANALYZE가 true일때만 analyzer가 실행된다.
});

module.exports = withBundleAnalyzer({
  compress: true, // gzip으로 압축시켜서 용량 줄여줌. 나중에서 브라우저에서 압축받은걸 해제해서 화면에 보여준다.
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval", // hidden source map 쓰면 배포환경에서 소스코드 노출 막아줌
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/), // moment 안쓰는 언어 제외시키기
      ],
    };
  },
});
