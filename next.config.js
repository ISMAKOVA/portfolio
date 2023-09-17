/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    env: {
        SPOTIFY_CLIENT_ID:'7ef4416bfffd4c46a5a2ce79f38dec9a',
        SPOTIFY_CLIENT_SECRET:'d292a64b2d94410ab8e7e3f58f00b579',
        SPOTIFY_REFRESH_TOKEN:'AQCgipW5InMnIFbuXr-nOmrgNbElRQzV0Am8A1TFv6wSTat1jDi41zimwWHInvhls7NmvY38sccxLGShLusc9AYTyYWCL4KHSsqk-JFbGAI7JbHqinmf-xd4jIApzwqXJjM'
    },
}

module.exports = nextConfig
