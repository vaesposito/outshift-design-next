import type { NextConfig } from 'next'
import path from 'path'

// GitHub Pages project site served under /outshift-design-next.
// basePath is applied automatically to <Link> and next/image, but NOT to
// raw <img>, <video>, or CSS url() — use the asset() helper from lib/asset.ts
// for those. redirects()/rewrites() are not supported with output: 'export',
// so old .html URLs are handled at cutover instead.
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/outshift-design-next' : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
}

export default nextConfig
