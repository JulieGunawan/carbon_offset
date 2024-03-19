/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        }
    },

     // Add the custom webpack configuration
    webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        // Add the favicon.ico file
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.FAVICON': JSON.stringify('favicon.ico')
            })
        );
        
        return config;
    },
    // Add the custom HTML head configuration
    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=2592000', // 30 days
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
