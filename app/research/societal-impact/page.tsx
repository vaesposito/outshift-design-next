import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './societal-impact.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Societal Impact',
  description:
    'Treating societal impact as a design responsibility: a practical framework for building responsible agentic systems that consider who they serve, exclude, and affect at scale.',
  openGraph: {
    type: 'website',
    title: 'Societal Impact — Outshift Design',
    description:
      'Treating societal impact as a design responsibility: a practical framework for building responsible agentic systems that consider who they serve, exclude, and affect at scale.',
    url: 'https://vaesposito.github.io/outshift-design/societal-impact.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Societal Impact — Outshift Design',
    description:
      'Treating societal impact as a design responsibility: a practical framework for building responsible agentic systems that consider who they serve, exclude, and affect at scale.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function SocietalImpactPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> Societal Impact
          </div>
          <div className="page-hero-title">
            <h1>Societal Impact</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>Agentic systems have profound ripple effects: they influence how we work, what knowledge is accessible, how power is distributed, and how we make decisions at scale. That&apos;s why we treat societal impact as a design responsibility, not a byproduct. We ask not just What works? but:</p>
              <ul>
                <li>Who does this serve?</li>
                <li>Who might it exclude or harm?</li>
                <li>What are the long-term consequences of deploying this system at scale?</li>
              </ul>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/societal-impact/hero.png')} alt="Societal Impact" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/societal-impact/hero-dark.png')} alt="Societal Impact" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#framework" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* A Framework for Responsible Agent Design */}
      <div className="framework-section" id="framework">
        <div className="container">
          <div className="framework-section-header">
            <h2>A Framework for Responsible Agent Design</h2>
            <p>To support teams building agentic systems, we developed a practical, five-part framework—adaptable across roles, from UX designers to backend engineers.</p>
          </div>

          <nav className="framework-recap" aria-label="Framework subsections">
            <a className="framework-recap-card" href="#contextual-inquiry">
              <span className="framework-recap-num">01</span>
              <span className="framework-recap-label">Contextual Inquiry</span>
              <p className="framework-recap-title">Design Begins with Understanding</p>
            </a>
            <a className="framework-recap-card" href="#intentional-scope">
              <span className="framework-recap-num">02</span>
              <span className="framework-recap-label">Intentional Scope</span>
              <p className="framework-recap-title">What Should This Agent Do</p>
            </a>
            <a className="framework-recap-card" href="#inclusive-cognitive-design">
              <span className="framework-recap-num">03</span>
              <span className="framework-recap-label">Inclusive Cognitive Design</span>
              <p className="framework-recap-title">Respect Diverse Ways of Thinking &amp; Working</p>
            </a>
            <a className="framework-recap-card" href="#foresight-feedback-loops">
              <span className="framework-recap-num">04</span>
              <span className="framework-recap-label">Foresight &amp; Feedback Loops</span>
              <p className="framework-recap-title">Built for Change. Expect the Unexpected</p>
            </a>
          </nav>

          <div className="responsible-steps">
            <div className="responsible-step" id="contextual-inquiry">
              <div className="responsible-step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset('/images/research/societal-impact/contextual-inquiry.png')} alt="Design Begins with Understanding" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset('/images/research/societal-impact/contextual-inquiry-dark.png')} alt="Design Begins with Understanding" />
              </div>
              <div className="responsible-step-content">
                <p className="responsible-step-label">Contextual Inquiry</p>
                <h3>Design Begins with Understanding</h3>
                <ul>
                  <li>Map the full socio-technical system: who are the stakeholders, what are the workflows, where does agency shift?</li>
                  <li>Identify power dynamics: What decisions is the AI making or influencing? Who has override authority?</li>
                  <li>Conduct interviews, not just with users, but with those impacted by system outcomes (e.g., moderators, QA testers, policy teams).</li>
                </ul>
                <div className="responsible-step-template">
                  <strong>Templates</strong>
                  <Link href="/research/societal-impact/agent-impact-map">Agent Impact Map</Link>
                </div>
              </div>
            </div>

            <div className="responsible-step" id="intentional-scope">
              <div className="responsible-step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset('/images/research/societal-impact/intentional-scope.png')} alt="What Should This Agent Do" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset('/images/research/societal-impact/intentional-scope-dark.png')} alt="What Should This Agent Do" />
              </div>
              <div className="responsible-step-content">
                <p className="responsible-step-label">Intentional Scope</p>
                <h3>What Should This Agent Do</h3>
                <ul>
                  <li>Define clear boundaries: Where should the agent intervene, suggest, defer, or stay silent?</li>
                  <li>Prioritize augmentation over automation: Ask how the agent can make users more capable, not redundant.</li>
                </ul>
                <div className="responsible-step-template">
                  <strong>Templates</strong>
                  <Link href="/research/societal-impact/agent-impact-map">Agent Impact Map</Link>
                </div>
              </div>
            </div>

            <div className="responsible-step" id="inclusive-cognitive-design">
              <div className="responsible-step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset('/images/research/societal-impact/inclusive-design.png')} alt="Respect Diverse Ways of Thinking & Working" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset('/images/research/societal-impact/inclusive-design-dark.png')} alt="Respect Diverse Ways of Thinking & Working" />
              </div>
              <div className="responsible-step-content">
                <p className="responsible-step-label">Inclusive Cognitive Design</p>
                <h3>Respect Diverse Ways of Thinking &amp; Working</h3>
                <ul>
                  <li>Design for neurodiversity and multilingualism.</li>
                  <li>Support different expertise levels—novices, experts, non-coders, etc.</li>
                  <li>Minimize cognitive overload: surface what&apos;s necessary, when it&apos;s needed.</li>
                </ul>
                <div className="responsible-step-template">
                  <strong>Templates</strong>
                  <Link href="/research/societal-impact/cognitive-load-audit">Cognitive Load Audit</Link>
                </div>
              </div>
            </div>

            <div className="responsible-step" id="foresight-feedback-loops">
              <div className="responsible-step-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset('/images/research/societal-impact/foresight.png')} alt="Built for Change. Expect the Unexpected" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset('/images/research/societal-impact/foresight-dark.png')} alt="Built for Change. Expect the Unexpected" />
              </div>
              <div className="responsible-step-content">
                <p className="responsible-step-label">Foresight &amp; Feedback Loops</p>
                <h3>Built for Change. Expect the Unexpected</h3>
                <ul>
                  <li>Use speculative scenarios to anticipate unintended consequences.</li>
                  <li>Include continuous user feedback mechanisms (not just surveys—embedded nudges, annotations, corrections).</li>
                </ul>
                <div className="responsible-step-template">
                  <strong>Templates</strong>
                  <Link href="/research/societal-impact/foresight-canvas">Foresight Canvas</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
