import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './research.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Research',
  description:
    'Deep research into AI interaction patterns, cognitive frameworks, societal impact, and security & privacy in agent-first systems.',
  openGraph: {
    type: 'website',
    title: 'Research — Outshift Design',
    description:
      'Deep research into AI interaction patterns, cognitive frameworks, societal impact, and security & privacy in agent-first systems.',
    url: 'https://vaesposito.github.io/outshift-design/research.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research — Outshift Design',
    description:
      'Deep research into AI interaction patterns, cognitive frameworks, societal impact, and security & privacy in agent-first systems.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function ResearchPage() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Research Hero */}
      <div className="research-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> Research
          </div>
          <div className="research-hero-title">
            <h1>Research at Outshift</h1>
          </div>
          <div className="research-hero-inner">
            <div className="research-hero-text">
              <p>This is the home for Outshift product design research—where we explore design, AI, and human-centered technology together. A major part of our work is Hax (Human–Agent Experience): principles, methods, and studies that help teams build trustworthy, collaborative human–agent experiences for the emerging Internet of Agents. Use the topics below to go deeper.</p>
            </div>
            <div className="research-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/hero.png')} alt="Outshift design research" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/hero-dark.png')} alt="Outshift design research" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#research-topics" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Section Title */}
      <div className="research-section-header" id="research-topics">
        <div className="container">
          <h2>Research topics</h2>
          <p>Frameworks and deep dives from our lab—human–agent interaction, cognition, ethics, security, and long-term impact.</p>
        </div>
      </div>

      {/* Research Cards */}
      <div className="research-cards">
        <div className="container">
          <Link href="/research/foundational-principles" className="research-card">
            <div className="research-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/foundational-principles.png')} alt="Foundational Principles" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/foundational-principles-dark.png')} alt="Foundational Principles" />
            </div>
            <div className="research-card-text">
              <h3>Foundational Principles</h3>
              <p>We build foundational design principles and frameworks for AI-human interaction. Our research lab translates high level insights into practical patterns and solutions that prioritize user control, clarity, and effective collaboration between humans and AI agents.</p>
              <span className="read-more">Read more</span>
            </div>
          </Link>

          <Link href="/research/cognitive-frameworks" className="research-card research-card--right">
            <div className="research-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/cognitive-framework.png')} alt="Cognitive Frameworks" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/cognitive-framework-dark.png')} alt="Cognitive Frameworks" />
            </div>
            <div className="research-card-text">
              <h3>Cognitive Frameworks</h3>
              <p>Our research relies on and develops theoretical models that explain how humans and AI agents process information and make decisions together. We explore cognitive load, mental models, and collaborative reasoning to create frameworks that inform better system design.</p>
              <span className="read-more">Read more</span>
            </div>
          </Link>

          <Link href="/research/societal-impact" className="research-card">
            <div className="research-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/societal-impact.png')} alt="Societal Impact" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/societal-impact-dark.png')} alt="Societal Impact" />
            </div>
            <div className="research-card-text">
              <h3>Societal Impact</h3>
              <p>Agentic systems reshape how we work, access knowledge, and distribute power. Because these systems fundamentally alter society, impact is a design responsibility, not an afterthought. We must look beyond &apos;what works&apos; to ask: Who does this serve? Who is excluded? What are the long term consequences of scaling?</p>
              <span className="read-more">Read more</span>
            </div>
          </Link>

          <Link href="/research/security-privacy" className="research-card research-card--right">
            <div className="research-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/security-privacy.png')} alt="Security &amp; Privacy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/security-privacy-dark.png')} alt="Security &amp; Privacy" />
            </div>
            <div className="research-card-text">
              <h3>Security &amp; Privacy</h3>
              <p>As AI agents grow more capable and autonomous, they open the door to new ways of working and building. This progress also gives us a chance to evolve our security and privacy models to support safer, more resilient agent ecosystems.</p>
              <span className="read-more">Read more</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
