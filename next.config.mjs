/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Next defaults to WebP only; AVIF is typically 20-30% smaller again
        // and matters for the local PNG screenshots in /public.
        formats: ['image/avif', 'image/webp'],
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
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
            },
        ],
    },
};

export default nextConfig;
