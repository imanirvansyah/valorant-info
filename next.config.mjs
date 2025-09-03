/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "valorant-info-be.netlify.app",
                // port: "5000",
                pathname: "/images/**",
            },
        ],
    },
};

export default nextConfig;
