import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
        new URL('https://lh3.googleusercontent.com/a/**'), 
        new URL('https://placehold.co/**'), 
        new URL('https://92iqff2obfplzq04.public.blob.vercel-storage.com/**'),
        {
            protocol: 'https',
            hostname: 'drive.usercontent.google.com',
            port: '',
            pathname: '/**',
        }
    ],
  },
}
export default nextConfig;
