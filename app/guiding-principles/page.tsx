import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import PatternTabs from './PatternTabs'
import './guiding-principles.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Guiding principles',
  description: "The guiding design principles behind Outshift's approach to human-agent interaction and AI product design.",
  openGraph: {
    type: 'website',
    title: 'Guiding Principles — Outshift Design',
    description: "The guiding design principles behind Outshift's approach to human-agent interaction and AI product design.",
    url: 'https://vaesposito.github.io/outshift-design/guiding-principles.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guiding Principles — Outshift Design',
    description: "The guiding design principles behind Outshift's approach to human-agent interaction and AI product design.",
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function GuidingPrinciplesPage() {
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
            <Link href="/#initiatives">Initiatives</Link> <span>/</span> <Link href="/hax">Hax</Link> <span>/</span> Guiding principles
          </div>
          <div className="page-hero-title">
            <h1>Guiding principles</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>These five ideas anchor how we design for autonomous agents alongside people. Use the tabs below to read each principle in depth and browse illustrated pattern examples.</p>
              <p><Link href="/human-centered-ai-patterns" style={{ color: 'var(--color-accent)' }}>← Human-Centered AI Patterns overview</Link></p>
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#examples" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </a>
      </div>

      {/* Pattern detail */}
      <div className="patterns-section" id="examples">
        <div className="container">
          <div className="patterns-header">
            <h2>Examples by principle</h2>
            <p>Select a principle to see how it translates into concrete interaction patterns.</p>
          </div>
          <PatternTabs />
        </div>
      </div>

      {/* Hax Research */}
      <div className="hax-research-section">
        <div className="container">
          <div className="hax-research-inner">
            <div className="hax-research-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/images/hax-research.png')} alt="The Outshift Design Research Laboratory" />
            </div>
            <div className="hax-research-text">
              <h2>The Outshift Design Research Laboratory</h2>
              <p>A research framework for building AI-powered systems with human-centered design principles and ethical considerations at the core.</p>
              <Link href="/research" className="sdk-cta">Explore the Research</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Build with SDK */}
      <div className="sdk-section">
        <div className="container">
          <div className="sdk-inner">
            <div className="sdk-text">
              <h2>Build with the Hax SDK</h2>
              <p>The HAX SDK gives developers everything they need to integrate agents into their apps, without losing clarity, structure, or control. Use structured schemas, prebuilt components, and clear boundaries to keep agent behavior collaborative and predictable.</p>
              <Link href="/sdk#introduction" target="_blank" rel="noopener noreferrer" className="sdk-cta">
                Explore the SDK
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </Link>
            </div>
            <div className="sdk-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/sdk-hero.png')} alt="Hax SDK" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/sdk-hero-dark.png')} alt="Hax SDK" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
