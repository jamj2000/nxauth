/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.gravatar.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"], 
        formats: ["image/avif", "image/webp"],
    }
}

module.exports = nextConfig
