import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './cognitive-load-audit.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Cognitive Load Audit',
  description:
    "Evaluating the agent's impact on a user's mental effort to ensure its design is intuitive, clear, and respects diverse cognitive styles.",
  openGraph: {
    type: 'website',
    title: 'Cognitive Load Audit — Outshift Design',
    description:
      "Evaluating the agent's impact on a user's mental effort to ensure its design is intuitive, clear, and respects diverse cognitive styles.",
    url: 'https://vaesposito.github.io/outshift-design/cognitive-load-audit.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitive Load Audit — Outshift Design',
    description:
      "Evaluating the agent's impact on a user's mental effort to ensure its design is intuitive, clear, and respects diverse cognitive styles.",
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function CognitiveLoadAuditPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> <Link href="/research/societal-impact">Societal Impact</Link> <span>/</span> Cognitive Load Audit
          </div>
          <div className="page-hero-title">
            <h1>Cognitive Load Audit</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>Evaluating the agent&rsquo;s impact on a user&rsquo;s mental effort to ensure its design is intuitive, clear, and respects diverse cognitive styles.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/cognitive-load-audit/hero.png')} alt="Cognitive Load Audit" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/cognitive-load-audit/hero-dark.png')} alt="Cognitive Load Audit" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#template" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Cognitive Load Audit Template */}
      <div className="template-section" id="template">
        <div className="container">
          <div className="template-header">
            <h2>Cognitive Load Audit</h2>
          </div>
          <p className="template-subtitle">Auditing the total mental effort (Cognitive Load) your agent demands is paramount to ensure diverse ways of thinking and acting are respected.</p>

          {/* Step 1: List */}
          <div className="template-content">
            <div className="template-text-col">
              <div className="template-block">
                <h3>Instructions</h3>
                <ol>
                  <li>Identify all tasks, decisions, and information a user must process when interacting with the agent.</li>
                  <li>For each item, list the type (e.g. recall, decision, search) and the context in which it occurs.</li>
                  <li>Then rate the cognitive effort on a simple scale (e.g. Low, Medium, High).</li>
                  <li>Plot those on the matrix.</li>
                  <li>Finally, combine tasks with high load: can we simplify, automate, defer or restructure to reduce the overall mental effort and shift the balance toward more intuitive user performance?</li>
                </ol>
              </div>
              <div className="template-block">
                <h3>Methodology</h3>
                <p>This methodology profiles how cognitive load auditing reveals the real cost of the agent&rsquo;s UX. It helps designers characterize how the agent&rsquo;s information architecture, conversational patterns, and decision-making demands affect a user&rsquo;s ability to think clearly, act confidently, and maintain an appropriate level of control. Identifying when, the agent overloads users with choices, context switches, ambiguous cues, or high-frequency interactions leads to a cognitive overhead or low readability of the interface and its ability to support efficient and intuitive user performance.</p>
              </div>
            </div>
            <div className="template-diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/cognitive-load-audit/step1.svg')} alt="First Step: List" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/cognitive-load-audit/step1-dark.svg')} alt="First Step: List" />
            </div>
          </div>

          {/* Step 2: Plot */}
          <div className="template-content">
            <div className="template-text-col">
              <div className="template-block">
                <h3>Instructions</h3>
                <ol>
                  <li>For each item listed in the first step, plot the corresponding data point in the matrix.</li>
                  <li>Place each item according to whether it is &ldquo;primary or secondary information&rdquo; and whether it is &ldquo;mandatory or optional&rdquo;.</li>
                  <li>Then rate each one by its importance and impact.</li>
                  <li>Plot those on the matrix.</li>
                  <li>Finally, combine tasks with high load: can we simplify, automate, defer or restructure to reduce the overall mental effort and shift the balance toward more intuitive user performance?</li>
                </ol>
              </div>
              <div className="template-block">
                <h3>Methodology</h3>
                <p>This step moves from the cognitive load inventory to a strategic prioritization. After cataloging the information the user processes, the matrix maps each item by its nature (primary vs. secondary) and its role in the workflow (mandatory vs. optional). Plotting items into these quadrants lets designers visually identify what is essential to the core experience, what supports efficiency, and what may be safely deferred, hidden, or removed. The goal is to build an information architecture that reduces cognitive friction by surfacing only what matters most at each moment, respecting the user&rsquo;s limited cognitive bandwidth and ensuring that the agent&rsquo;s design does not overwhelm but instead supports efficient and intuitive user performance.</p>
              </div>
            </div>
            <div className="template-diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/cognitive-load-audit/step2.svg')} alt="Second Step: Plot" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/cognitive-load-audit/step2-dark.svg')} alt="Second Step: Plot" />
            </div>
          </div>

          {/* Importance Note */}
          <div className="template-block importance-note">
            <p><strong>Importance:</strong> How essential the information is in accomplishing task or decision? <strong>Impact:</strong> How information affects overall user workflows?</p>
          </div>
        </div>
      </div>
    </>
  )
}
