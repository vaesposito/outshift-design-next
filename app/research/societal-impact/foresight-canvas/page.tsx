import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './foresight-canvas.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Foresight Canvas',
  description:
    'A speculative design process to anticipate the long-term, unintended consequences of an agent—identifying second-order effects, potential for misuse, and systemic risks.',
  openGraph: {
    type: 'website',
    title: 'Foresight Canvas — Outshift Design',
    description:
      'A speculative design process to anticipate the long-term, unintended consequences of an agent—identifying second-order effects, potential for misuse, and systemic risks.',
    url: 'https://vaesposito.github.io/outshift-design/foresight-canvas.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foresight Canvas — Outshift Design',
    description:
      'A speculative design process to anticipate the long-term, unintended consequences of an agent—identifying second-order effects, potential for misuse, and systemic risks.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function ForesightCanvasPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> <Link href="/research/societal-impact">Societal Impact</Link> <span>/</span> Foresight Canvas
          </div>
          <div className="page-hero-title">
            <h1>Foresight Canvas</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>A speculative design process to anticipate the long-term, unintended consequences of our agent. This audit focuses on identifying second-order effects, potential for misuse, and systemic risks.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/foresight-canvas/hero.png')} alt="Foresight Canvas" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/foresight-canvas/hero-dark.png')} alt="Foresight Canvas" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#template" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Foresight Canvas Template */}
      <div className="template-section" id="template">
        <div className="container">
          <div className="template-header">
            <h2>Foresight Canvas</h2>
          </div>
          <p className="template-subtitle">Applying the Foresight &amp; Feedback Loop to your agent helps to stress-test against future scenarios, surface unintended consequences, and ensure long-term viability and trust in an evolving world.</p>

          {/* Step 1: Futures Wheel */}
          <div className="template-content">
            <div className="template-text-col">
              <div className="template-block">
                <h3>Instructions</h3>
                <ol>
                  <li>Define the core innovation or capability your agent introduces at the center of the wheel.</li>
                  <li>Identify first-order consequences: direct, immediate effects on users, workflows, and stakeholders.</li>
                  <li>Map second-order consequences: ripple effects that emerge from those direct impacts, especially on organizations, markets, and society.</li>
                  <li>Continue mapping higher-order effects as they branch outward, paying attention to unintended or non-obvious outcomes.</li>
                  <li>For each consequence, assess whether it is positive, neutral, or negative and consider who is affected.</li>
                  <li>Highlight areas of uncertainty or risk that require deeper investigation, monitoring, or design intervention.</li>
                </ol>
              </div>
              <div className="template-block">
                <h3>Methodology</h3>
                <p>The Futures Wheel is a structured brainstorming tool originally developed by Jerome Glenn. It starts with a central event or change and maps outward in concentric rings of consequences. In the context of agent design, it helps teams move beyond immediate functionality to explore the broader systemic effects of deploying autonomous agents. By systematically tracing cause-and-effect chains, designers can surface hidden risks, anticipate unintended behaviors, and identify opportunities for proactive safeguards. This method is especially valuable in speculative design settings where the goal is to stress-test agent capabilities against plausible future scenarios before they reach production.</p>
                <p style={{ marginTop: 16 }}>Result: A Futures Wheel artifact documenting all orders of consequences related to the agent&rsquo;s core innovation, usable as a living reference for design decisions, risk assessments, and stakeholder communication.</p>
              </div>
            </div>
            <div className="template-diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/foresight-canvas/step1.svg')} alt="Futures Wheel" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/foresight-canvas/step1-dark.svg')} alt="Futures Wheel" />
            </div>
          </div>

          {/* Step 2: Futures Types */}
          <div className="template-content">
            <div className="template-text-col">
              <div className="template-block">
                <h3>Instructions</h3>
                <ol>
                  <li>Start from the consequences identified in the Futures Wheel.</li>
                  <li>Classify each scenario into one of four futures types: Positive, Negative, Plausible, or Dystopian.</li>
                  <li>For each classification, describe the scenario and its implications for users, systems, and society.</li>
                  <li>Identify design responses: what guardrails, fallback mechanisms, or ethical boundaries can be embedded to steer toward positive futures and mitigate negative ones?</li>
                  <li>Use the resulting map to prioritize design interventions based on likelihood and severity of impact.</li>
                </ol>
              </div>
              <div className="template-block">
                <h3>Methodology</h3>
                <p>The Futures Types framework draws on established futures studies methodology, particularly the work of Jim Dator and Sohail Inayatullah. It categorizes possible futures into archetypes, helping designers move from abstract speculation to actionable design priorities. By placing agent-related scenarios into Positive, Negative, Plausible, and Dystopian quadrants, teams gain a structured way to evaluate not just what could happen, but how desirable or dangerous each outcome might be. This approach bridges the gap between speculative foresight and practical design decisions, ensuring that autonomous systems are built with resilience, accountability, and ethical awareness from the start.</p>
                <p style={{ marginTop: 16 }}>Result: A Futures Types map that classifies agent-related scenarios into four quadrants, providing a clear framework for prioritizing design interventions and embedding safeguards against the most impactful negative outcomes.</p>
              </div>
            </div>
            <div className="template-diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/foresight-canvas/step2.svg')} alt="Futures Types" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/foresight-canvas/step2-dark.svg')} alt="Futures Types" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
