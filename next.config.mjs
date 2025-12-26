/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'pixelplex.io',
            },
            {
                protocol: 'https',
                hostname: 'www.singlegrain.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
            },
        ],
    },
};

export default nextConfig;
