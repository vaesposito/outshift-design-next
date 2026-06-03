import type { Metadata } from 'next'
import './blog.css'
import BlogFilters from './BlogFilters'

export const metadata: Metadata = {
  title: 'Outshift Design — Blog',
  description:
    'Insights and perspectives on AI design, research, and product innovation from the Outshift team.',
  openGraph: {
    type: 'website',
    title: 'Blog — Outshift Design',
    description:
      'Insights and perspectives on AI design, research, and product innovation from the Outshift team.',
    url: 'https://vaesposito.github.io/outshift-design/blog.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Outshift Design',
    description:
      'Insights and perspectives on AI design, research, and product innovation from the Outshift team.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Blog Hero */}
      <div className="blog-hero">
        <div className="container">
          <h1>Insights &amp; Perspectives</h1>
          <p>
            Explore our latest thoughts on design, research, and innovation in the world of
            product development.
          </p>
        </div>
        <BlogFilters />
      </div>
    </>
  )
}
