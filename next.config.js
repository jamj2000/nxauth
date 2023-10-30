/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], 
        formats: ["image/avif", "image/webp"],
    }
}

module.exports = nextConfig
