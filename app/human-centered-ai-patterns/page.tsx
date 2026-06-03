import type { Metadata } from 'next'
import Link from 'next/link'
import './human-centered-ai-patterns.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Human-Centered AI Patterns',
  description: 'A pattern library for designing trustworthy, legible, and controllable AI experiences.',
  openGraph: {
    type: 'website',
    title: 'Human-Centered AI Patterns — Outshift Design',
    description: 'A pattern library for designing trustworthy, legible, and controllable AI experiences.',
    url: 'https://vaesposito.github.io/outshift-design/human-centered-ai-patterns.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human-Centered AI Patterns — Outshift Design',
    description: 'A pattern library for designing trustworthy, legible, and controllable AI experiences.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function HumanCenteredAIPatternsPage() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Page Hero */}
      <div className="page-hero page-hero--sub">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/#initiatives">Initiatives</Link> <span>/</span> <Link href="/hax">Hax</Link> <span>/</span> Human-Centered AI Patterns
          </div>
          <div className="page-hero-title">
            <h1>Human-Centered AI Patterns</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>These five guiding principles emerged from studying how people interact with agentic systems. They are the foundation for experiences that keep people in control while agents take on more autonomy.</p>
              <p><Link href="/hax" style={{ color: 'var(--color-accent)' }}>← The Human-Agent Experience</Link></p>
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#principles" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </a>
      </div>

      <div className="patterns-section principles-preview-section" id="principles">
        <div className="container">
          <div className="patterns-header" style={{ paddingBottom: 32 }}>
            <h2>Guiding Principles</h2>
            <p>At a glance: how each principle shapes trustworthy human&ndash;agent partnerships.</p>
          </div>
          <div className="principles-grid">
            <article className="principle-card">
              <h3>Control</h3>
              <p>Humans guide interactions. Agents adapt to human intent and follow their lead through every step.</p>
            </article>
            <article className="principle-card">
              <h3>Clarity</h3>
              <p>Keep partnership transparent. AI communicates actions clearly, using progressive disclosure to reveal more detail when needed.</p>
            </article>
            <article className="principle-card">
              <h3>Recovery</h3>
              <p>Own the mistakes. When the agent gets it wrong, it helps users identify the issue, offers clear paths to correct it, and learns from the experience.</p>
            </article>
            <article className="principle-card">
              <h3>Collaboration</h3>
              <p>Work together towards shared goals. Agents contribute actively while staying responsive to user preferences and feedback.</p>
            </article>
            <article className="principle-card">
              <h3>Traceability</h3>
              <p>Build understanding and trust. The agent makes its reasoning visible so users can see how decisions were reached.</p>
            </article>
          </div>
          <div className="patterns-cta-row">
            <Link href="/guiding-principles" className="sdk-cta">Learn more</Link>
          </div>
        </div>
      </div>
    </>
  )
}
