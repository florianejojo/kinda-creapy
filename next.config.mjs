/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL],
      bodySizeLimit: `30mb`,
    },
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
