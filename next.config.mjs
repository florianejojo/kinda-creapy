/** @type {import('next').NextConfig} */
const nextConfig = {
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    images: {
        // domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
                pathname: "/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
