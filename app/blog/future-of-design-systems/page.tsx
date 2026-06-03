import type { Metadata } from 'next'
import Link from 'next/link'
import ReadingProgress from './ReadingProgress'
import ArticleToc, { type TocItem } from './ArticleToc'
import './article.css'

export const metadata: Metadata = {
  title: 'The Future of Design Systems: Scalability and Consistency — Outshift Design',
  description: 'How we built a design system that scales across hundreds of products — covering foundations, component architecture, governance, and measuring success.',
  openGraph: {
    type: 'article',
    title: 'The Future of Design Systems: Scalability and Consistency — Outshift Design',
    description: 'How we built a design system that scales across hundreds of products — covering foundations, component architecture, governance, and measuring success.',
    url: 'https://vaesposito.github.io/outshift-design/future-of-design-systems.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Design Systems: Scalability and Consistency — Outshift Design',
    description: 'How we built a design system that scales across hundreds of products — covering foundations, component architecture, governance, and measuring success.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

const TOC: TocItem[] = [
  { id: 'starting-with-foundations', label: 'Starting with Foundations' },
  { id: 'component-architecture', label: 'Component Architecture' },
  { id: 'scaling-across-teams', label: 'Scaling Across Teams' },
  { id: 'measuring-success', label: 'Measuring Success' },
  { id: 'conclusion', label: 'Conclusion' },
]

export default function FutureOfDesignSystemsPage() {
  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Article Cover */}
      <div className="article-cover-wrap">
        <div className="article-cover">
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a3d5c 0%, #1a6e5c 100%)' }} />
        </div>
      </div>

      {/* Article Header */}
      <div className="article-header">
        <h1 className="article-title">The Future of Design Systems: Scalability and Consistency</h1>
        <div className="article-meta">
          <span className="article-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Jaime Holland
          </span>
          <span className="article-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            March 1, 2026
          </span>
          <span className="article-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            5 min read
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-layout">
        <aside className="article-sidebar">
          <ArticleToc items={TOC} />
        </aside>

        <div className="article-body">
          <p>Building a design system that scales across hundreds of products is no small feat. It requires careful planning, collaboration, and a deep understanding of both design principles and technical implementation. In this article, we share our journey and the lessons we learned along the way.</p>

          <h2 id="starting-with-foundations">Starting with Foundations</h2>
          <p>We began by establishing core design principles that would guide every decision. These principles needed to be flexible enough to accommodate diverse product needs while maintaining a consistent brand identity. We focused on creating a token-based system for colors, typography, spacing, and other fundamental design elements.</p>

          <h2 id="component-architecture">Component Architecture</h2>
          <p>Our component library was built with reusability and composability in mind. Each component was designed to be atomic, meaning it could stand alone or be combined with other components to create more complex interfaces. We established clear naming conventions and documentation standards to ensure the system remained accessible to all team members.</p>

          <h2 id="scaling-across-teams">Scaling Across Teams</h2>
          <p>As the design system grew, we implemented governance processes to maintain quality and consistency. We created a core team responsible for the system&apos;s evolution, while empowering product teams to contribute improvements and new components. Regular design system office hours and a dedicated Slack channel fostered community and collaboration.</p>

          <h2 id="measuring-success">Measuring Success</h2>
          <p>We track key metrics to understand the design system&apos;s impact: adoption rates across products, time saved in design and development, and consistency scores across our product portfolio. These metrics help us prioritize improvements and demonstrate value to stakeholders.</p>

          <hr className="article-divider" />
          <h2 id="conclusion">Conclusion</h2>
          <p>Building a design system is an ongoing journey, not a destination. As our products evolve and new technologies emerge, our design system must evolve with them. The key is maintaining a balance between consistency and flexibility, always keeping the end user experience at the center of every decision.</p>
        </div>
      </div>

      {/* Author Card */}
      <div className="article-author">
        <div className="article-author-card">
          <div className="article-author-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <p className="article-author-name">Jaime Holland</p>
            <p className="article-author-role">Product designer at Outshift</p>
          </div>
        </div>
      </div>

      {/* More Articles */}
      <div className="more-articles">
        <div className="more-articles-inner">
          <h2>More Articles</h2>
          <div className="more-articles-grid">
            <Link href="/blog/building-accessible-interfaces" className="more-article-card">
              <h3>Building Accessible Interfaces</h3>
              <p>Practical tips and techniques for creating web applications that are accessible to all users.</p>
              <span className="read-more-link">Read more</span>
            </Link>
            <Link href="/blog" className="more-article-card">
              <h3>Remote Collaboration at Scale</h3>
              <p>Lessons learned from building tools for distributed teams across the globe.</p>
              <span className="read-more-link">Read more</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
