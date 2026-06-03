import type { Metadata } from 'next'
import Link from 'next/link'
import HeroVideo from '@/components/HeroVideo'
import { asset } from '@/lib/asset'
import HaxPatterns from './HaxPatterns'

export const metadata: Metadata = {
  title: 'Outshift Design — The Human-Agent Experience',
  description:
    'Explore HAX: a research and design initiative shaping how humans and AI agents work together effectively.',
  openGraph: {
    type: 'website',
    title: 'The Human-Agent Experience — Outshift Design',
    description:
      'Explore HAX: a research and design initiative shaping how humans and AI agents work together effectively.',
    url: 'https://vaesposito.github.io/outshift-design/hax.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Human-Agent Experience — Outshift Design',
    description:
      'Explore HAX: a research and design initiative shaping how humans and AI agents work together effectively.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function HaxPage() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/#initiatives">Initiatives</Link> <span>/</span> Hax
          </div>
          <div className="page-hero-title">
            <h1>The Human-Agent Experience</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>
                We are moving beyond simple assistants. Today&apos;s agents act with greater autonomy,
                coordinate across systems, and collaborate with humans in nuanced ways. To support
                this shift, our product design team has developed research-backed principles and
                patterns for creating systems that are transparent, trustworthy, and truly
                collaborative.
              </p>
              <div style={{ marginTop: 28 }}>
                <a
                  href="https://vaesposito.github.io/outshift-design/sdk.html#introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-arrow-link"
                >
                  <span>Explore the SDK</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="page-hero-image">
              <HeroVideo lightSrc="/videos/hax-hero.mp4" darkSrc="/videos/hax-hero-dark.mp4" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#guiding-principles" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Guiding principles (interactive) */}
      <HaxPatterns />

      {/* Build with SDK */}
      <div className="sdk-section">
        <div className="container">
          <div className="sdk-inner">
            <div className="sdk-text">
              <h2>Build with the Hax SDK</h2>
              <p>
                The HAX SDK gives developers everything they need to integrate agents into their
                apps, without losing clarity, structure, or control. Use structured schemas,
                prebuilt components, and clear boundaries to keep agent behavior collaborative and
                predictable.
              </p>
              <a
                href="https://vaesposito.github.io/outshift-design/sdk.html#introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="sdk-cta"
              >
                Explore the SDK
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
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
