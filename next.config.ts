import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    turbo: {
      rules: {
        '*.yaml': {
          loaders: ['yaml-loader'],
          as: '*.js',
        },
      },
    },
  }
};

const withMdx = createMDX({});
export default withMdx(nextConfig);