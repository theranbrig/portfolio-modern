import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // experimental: {
    //     turbo: {
    //         resolveExtensions: ['.md', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    //     },
    // },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx', 'mdx'],
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };

        return config;
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
