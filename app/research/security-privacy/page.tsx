import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './security-privacy.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Security & Privacy',
  description:
    "We're building the future of secure, autonomous multi-agent systems. As AI agents grow more capable and autonomous, we evolve our security and privacy models to support safer, more resilient agent ecosystems.",
  openGraph: {
    type: 'website',
    title: 'Security & Privacy — Outshift Design',
    description:
      "We're building the future of secure, autonomous multi-agent systems. As AI agents grow more capable and autonomous, we evolve our security and privacy models to support safer, more resilient agent ecosystems.",
    url: 'https://vaesposito.github.io/outshift-design/security-privacy.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Privacy — Outshift Design',
    description:
      "We're building the future of secure, autonomous multi-agent systems. As AI agents grow more capable and autonomous, we evolve our security and privacy models to support safer, more resilient agent ecosystems.",
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function SecurityPrivacyPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> Security &amp; Privacy
          </div>
          <div className="page-hero-title">
            <h1>Security &amp; Privacy</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>We&rsquo;re building the future of secure, autonomous multi-agent systems. As AI agents grow more capable and autonomous, they open the door to new ways of working and building. This progress also gives us a chance to evolve our security and privacy models to support safer, more resilient agent ecosystems.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/security-privacy/hero.png')} alt="Security & Privacy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/security-privacy/hero-dark.png')} alt="Security & Privacy" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#secure-systems" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Building Secure Systems */}
      <div className="secure-systems-section" id="secure-systems">
        <div className="container">
          <div className="secure-systems-header">
            <h2>Building Secure Systems</h2>
          </div>

          <div className="secure-cards-grid">
            <div className="secure-card">
              <h3>Enabling Safe Innovation</h3>
              <p>Strong security and privacy foundations support confident experimentation with autonomous agents while maintaining safety and trust.</p>
            </div>
            <div className="secure-card">
              <h3>Scaling Systems Responsibly</h3>
              <p>Adaptive protections keep pace with growing agent capabilities and increasingly complex environments.</p>
            </div>
            <div className="secure-card">
              <h3>Strengthening Trust</h3>
              <p>Clear safeguards and transparent data boundaries build confidence among users, developers, and stakeholders.</p>
            </div>
            <div className="secure-card">
              <h3>Supporting Global Interoperability</h3>
              <p>Unified, flexible frameworks help agent systems operate consistently across diverse regulatory and cultural contexts.</p>
            </div>
          </div>

          <div className="key-questions">
            <h3>Key Questions</h3>
            <ul>
              <li>How do we design security systems that adapt as agents become more autonomous and capable?</li>
              <li>What privacy guarantees can we provide when agents require rich contextual information to function effectively?</li>
              <li>What privacy guarantees can we provide when agents require rich contextual information to function effectively?</li>
              <li>How do traditional security models need to evolve for systems that reason, plan, and act independently?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research Approach */}
      <div className="research-approach-section">
        <div className="container">
          <div className="research-approach-header">
            <h2>Research Approach</h2>
            <p>Our research focuses on defining how autonomous agents can operate safely and responsibly as they take on more decision-making and contextual reasoning. We examine two foundational dimensions &mdash; security and privacy &mdash; to develop adaptive models that evolve alongside increasing agent capability.</p>
          </div>

          <div className="research-item reversed">
            <div className="research-item-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/security-privacy/adaptive-security.png')} alt="Adaptive Security for Autonomous Agents" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/security-privacy/adaptive-security-dark.png')} alt="Adaptive Security for Autonomous Agents" />
            </div>
            <div className="research-item-text">
              <h3>Adaptive Security for Autonomous Agents</h3>
              <p>The environments agents operate in are dynamic and unpredictable, calling for security models that can respond with similar agility. We focus on creating mechanisms that adapt to context, behavioral signals, and evolving system states.</p>
              <p><strong>We Explore</strong></p>
              <ul>
                <li>Dynamic policies that shift based on context and risk signals.</li>
                <li>Behavioral guardrails that set clear boundaries for safe operation.</li>
                <li>Continuous monitoring that flags anomalies and triggers fallback actions.</li>
              </ul>
            </div>
          </div>

          <div className="research-item">
            <div className="research-item-text">
              <h3>Privacy-Preserving Context for Intelligent Agents</h3>
              <p>Agents work with a wide range of context&mdash;identity signals, system state, historical patterns, and environmental cues&mdash;to operate effectively. Ensuring this context is handled in a safe, responsible, and transparent way is essential for building systems that remain both capable and trustworthy.</p>
              <p><strong>We Explore</strong></p>
              <ul>
                <li>Scoped access that provides only the context needed for each task.</li>
                <li>Privacy techniques that protect data while keeping agents functional.</li>
                <li>Clear data boundaries that show what is used, how, and why.</li>
              </ul>
            </div>
            <div className="research-item-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/security-privacy/privacy-context.png')} alt="Privacy-Preserving Context for Intelligent Agents" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/security-privacy/privacy-context-dark.png')} alt="Privacy-Preserving Context for Intelligent Agents" />
            </div>
          </div>

          {/* Use Cases */}
          <div className="use-cases">
            <p className="use-cases-label">Use Cases</p>
            <div className="blog-cards">
              <div className="blog-card">
                <div>
                  <div className="blog-meta">
                    <span>Automation</span>
                    <span>Security</span>
                  </div>
                  <h4>Self Automation of Routine Tasks</h4>
                  <p className="blog-desc">Agents autonomously handle repetitive workflows while maintaining secure access boundaries and audit trails.</p>
                </div>
                <div />
              </div>
              <div className="blog-card">
                <div>
                  <div className="blog-meta">
                    <span>Risk</span>
                    <span>Multi-Agent</span>
                  </div>
                  <h4>Risk Analysis &amp; Agentic Decisions</h4>
                  <p className="blog-desc">Multi-agent systems that assess risk factors collaboratively while preserving data isolation between organizational boundaries.</p>
                </div>
                <div />
              </div>
              <div className="blog-card">
                <div>
                  <div className="blog-meta">
                    <span>Detection</span>
                    <span>Privacy</span>
                  </div>
                  <h4>Adaptive Risk Detection</h4>
                  <p className="blog-desc">Agents that evolve their threat detection capabilities over time using privacy-preserving learning techniques.</p>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
