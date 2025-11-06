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
      allowedOrigins: [
      'http://localhost:3000',  
      'https://kindacreapy.art',
    ],
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
