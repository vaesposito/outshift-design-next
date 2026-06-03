import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './agent-impact-map.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Agent Impact Map',
  description:
    "Mapping the agent's complete socio-technical context—from stakeholders and decision-making roles to intentional boundaries—to ensure responsible design from day one.",
  openGraph: {
    type: 'website',
    title: 'Agent Impact Map — Outshift Design',
    description:
      "Mapping the agent's complete socio-technical context—from stakeholders and decision-making roles to intentional boundaries—to ensure responsible design from day one.",
    url: 'https://vaesposito.github.io/outshift-design/agent-impact-map.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Impact Map — Outshift Design',
    description:
      "Mapping the agent's complete socio-technical context—from stakeholders and decision-making roles to intentional boundaries—to ensure responsible design from day one.",
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function AgentImpactMapPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> <Link href="/research/societal-impact">Societal Impact</Link> <span>/</span> Agent Impact Map
          </div>
          <div className="page-hero-title">
            <h1>Agent Impact Map</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>Mapping the agent&apos;s complete socio-technical context, from stakeholders and decision-making roles to intentional boundaries, to ensure a responsible design from day one.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/agent-impact-map/hero.png')} alt="Agent Impact Map" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/agent-impact-map/hero-dark.png')} alt="Agent Impact Map" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#template" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Agent Impact Map Template */}
      <div className="template-section" id="template">
        <div className="container">
          <div className="template-header">
            <h2>Agent Impact Map</h2>
          </div>
          <p className="template-subtitle">A mapping of the full socio-technical system of agent interactions to better understand the implications on user workflows.</p>

          <div className="template-content">
            <div className="template-text-col">
              <div className="template-block">
                <h3>Instructions</h3>
                <ol>
                  <li>Identify all human and non-human actors involved in the agent ecosystem (users, agents, databases, data sources, organizational stakeholders).</li>
                  <li>Map the interactions, data flows, and dependencies between these actors across the full workflow.</li>
                  <li>Highlight friction points, risks, and unintended consequences that may emerge within the system.</li>
                </ol>
              </div>
              <div className="template-block">
                <h3>Methodology</h3>
                <p>This methodology uses socio-technical systems mapping to analyze how human, organizational, and technical components interact across an agent-supported workflow. Designers begin by identifying all relevant actors, data flows, and contextual constraints, then visualize their interdependencies to reveal how agent behaviors shape user actions and decision points. Through these mappings, friction points, risks, and opportunities are surfaced, allowing designers to understand the broader implications of agent integration. The resulting richer priorities and shared foundation for making informed design decisions and aligning emerging agent technologies with real user needs and operational realities.</p>
              </div>
            </div>
            <div className="template-diagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/agent-impact-map/chart.svg')} alt="Agent Impact Map Diagram" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/agent-impact-map/chart-dark.svg')} alt="Agent Impact Map Diagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
