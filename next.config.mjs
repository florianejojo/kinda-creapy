/** @type {import('next').NextConfig} */
const supa = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL)

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: supa.protocol.replace(':', ''),
        hostname: supa.hostname,       
        port: supa.port || undefined, 
        pathname: '/storage/v1/object/public/**',
      },
    ],
    unoptimized: process.env.NODE_ENV !== 'production',
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
