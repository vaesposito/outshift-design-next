import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import './cognitive-frameworks.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Cognitive Frameworks',
  description:
    'Theoretical models—distributed cognition, situated action, and embodiment—that explain how humans and AI agents process information and act meaningfully together.',
  openGraph: {
    type: 'website',
    title: 'Cognitive Frameworks — Outshift Design',
    description:
      'Theoretical models—distributed cognition, situated action, and embodiment—that explain how humans and AI agents process information and act meaningfully together.',
    url: 'https://vaesposito.github.io/outshift-design/cognitive-frameworks.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognitive Frameworks — Outshift Design',
    description:
      'Theoretical models—distributed cognition, situated action, and embodiment—that explain how humans and AI agents process information and act meaningfully together.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

export default function CognitiveFrameworksPage() {
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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> Cognitive Frameworks
          </div>
          <div className="page-hero-title">
            <h1>Cognitive Frameworks</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>Physical and cognitive designs are key to understanding how people and AI systems share understanding, adapt to situations, and act meaningfully together. Grounded in embodied cognition, distributed cognition, and situated action, our research bridges theory and design to shape interactions that are intuitive, contextual, and genuinely collaborative.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/cognitive-frameworks-hero.png')} alt="Cognitive Frameworks" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/cognitive-frameworks-hero-dark.png')} alt="Cognitive Frameworks" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#foundations" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Theoretical Foundations */}
      <div className="pipeline-section" id="foundations">
        <div className="container">
          <div className="pipeline-header">
            <h2>Theoretical Foundations</h2>
            <p>Grounding HAX design in established cognitive science</p>
          </div>

          <div className="pipeline-steps">
            <div className="pipeline-step" id="cf-step-1">
              <div className="framework-content">
                <div className="framework-left">
                  <div className="step-number">01</div>
                  <div className="step-title">Distributed Cognition</div>
                  <p className="step-desc">What if intelligence isn&apos;t just in our heads? Distributed cognition argues that thinking happens across people, tools, environments, and artifacts — not in any single mind.</p>
                  <div className="framework-concepts">
                    <p className="framework-concepts-title">Key Concepts</p>
                    <ul className="step-list" style={{ marginBottom: 0 }}>
                      <li>Cognition extends beyond individual brains</li>
                      <li>Knowledge lives in systems, tools, and social structures</li>
                      <li>Coordination happens through shared representations</li>
                    </ul>
                  </div>
                  <div className="framework-why">
                    <p className="framework-why-title">Why this matters</p>
                    <p>In AI-augmented systems, cognition isn&apos;t just human or machine — it&apos;s distributed across both. Understanding this helps us design interfaces that support shared awareness, coordination, and collective intelligence.</p>
                  </div>
                </div>
                <div className="framework-right">
                  <div className="framework-collab-box">
                    <h4 className="framework-collab-title">Framework for Human-AI Collaboration</h4>
                    <p className="framework-collab-desc">In Designing agentic systems we consider cognitive processes to be distributed across human and AI agents working within the unified system. This helps us to conceptualize experiences that allow agents to seamlessly integrate into user workflows and interfaces that act as spaces of mutual sense-making and collaboration.</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/human-ai-diagram.svg')} alt="Human-AI collaboration diagram" className="framework-diagram img-light" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/human-ai-diagram-dark.svg')} alt="Human-AI collaboration diagram" className="framework-diagram img-dark" />
                    <h5 className="framework-core-title">Core functionalities</h5>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/core-functionalities.svg')} alt="Core functionalities: Summarizing, Remembering, Suggesting, Contextualizing" className="framework-core-svg img-light" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/core-functionalities-dark.svg')} alt="Core functionalities: Summarizing, Remembering, Suggesting, Contextualizing" className="framework-core-svg img-dark" />
                  </div>
                </div>
              </div>
              <p className="use-cases-label">USE CASES</p>
              <div className="use-cases-grid">
                <a href="#" className="use-case-card">
                  <div>
                    <span className="use-case-tag">Scalability</span>
                    <h4>Sead Graph Exploration: Turning Complexity into Comprehension</h4>
                    <p className="use-case-desc">How distributed cognition principles helped transform complex graph data into intuitive, navigable interfaces.</p>
                  </div>
                  <div className="use-case-footer">
                    <span>Case Study</span>
                    <span className="read-more">Read more</span>
                  </div>
                </a>
                <a href="#" className="use-case-card">
                  <div>
                    <span className="use-case-tag">Security</span>
                    <h4>Cognitive Load in Security Workflows: Reducing Alert Fatigue</h4>
                    <p className="use-case-desc">Applying cognitive frameworks to simplify threat analysis and help analysts focus on what matters most.</p>
                  </div>
                  <div className="use-case-footer">
                    <span>Case Study</span>
                    <span className="read-more">Read more</span>
                  </div>
                </a>
                <a href="#" className="use-case-card">
                  <div>
                    <span className="use-case-tag">Collaboration</span>
                    <h4>Multi-Agent Orchestration: Coordinating Intelligence at Scale</h4>
                    <p className="use-case-desc">How distributed cognition informs the design of collaborative multi-agent systems that work alongside human teams.</p>
                  </div>
                  <div className="use-case-footer">
                    <span>Case Study</span>
                    <span className="read-more">Read more</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pipeline-step" id="cf-step-2">
              <div className="framework-content">
                <div className="framework-left">
                  <div className="step-number">02</div>
                  <div className="step-title">Situated Action</div>
                  <p className="step-desc">Cognition is shaped by context. Users rarely execute fixed plans all of the time—they adapt in real time to their surroundings, constraints, and evolving goals. Our agents are built to thrive in these fluid, unpredictable settings—sensing timing and environmental cues to provide assistance that feels natural, situationally aware, and attuned to the moment.</p>
                  <div className="framework-concepts">
                    <p className="framework-concepts-title">Key Concepts</p>
                    <ul className="step-list" style={{ marginBottom: 0 }}>
                      <li>Dynamic environmental adaptation.</li>
                      <li>Temporal awareness for timely interventions.</li>
                      <li>Cue recognition and response.</li>
                      <li>Improvisational support over rigid planning.</li>
                    </ul>
                  </div>
                </div>
                <div className="framework-right">
                  <div className="framework-collab-box">
                    <h4 className="framework-collab-title">Approaches</h4>
                    <p className="framework-collab-desc">Agents that improvise and adapt based on environment, timing, and social context—not rigid plans.</p>
                    <div className="framework-approaches-cards">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset('/images/research/abstract-planning.svg')} alt="Abstract Planning — Traditional approach" className="framework-approach-svg img-light" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset('/images/research/abstract-planning-dark.svg')} alt="Abstract Planning — Traditional approach" className="framework-approach-svg img-dark" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset('/images/research/situated-action-card.svg')} alt="Situated Action — Our approach" className="framework-approach-svg img-light" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset('/images/research/situated-action-card-dark.svg')} alt="Situated Action — Our approach" className="framework-approach-svg img-dark" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="framework-why">
                <p className="framework-why-title">Why this matters</p>
                <p>Intelligence emerges from ongoing interaction with dynamic contexts, not from executing predetermined plans. For designers, this means creating systems that remain open, adaptive, and responsive—shaping intelligence through interaction rather than instruction.</p>
              </div>
            </div>

            <div className="pipeline-step" id="cf-step-3">
              <div className="framework-content">
                <div className="framework-left">
                  <div className="step-number">03</div>
                  <div className="step-title">Embodiment</div>
                  <p className="step-desc">Thinking does not reside solely in the brain—it unfolds through movement, rhythm, and our engagement with space and tools. Cognition is embodied: it happens as we gesture, coordinate, and attune to the world around us. We design agentic systems that recognize these sensorimotor dimensions of thought—systems that seek to pick up on subtle cues of motion, rhythm, and spatial context to collaborate more intuitively with humans. Our current work explores agents capable of perceiving and responding to these embodied signals in real time, bridging the gap between mind, body, and machine.</p>
                  <div className="framework-concepts">
                    <p className="framework-concepts-title">Key Concepts</p>
                    <ul className="step-list" style={{ marginBottom: 0 }}>
                      <li>Gesture and physical movement recognition.</li>
                      <li>Rhythm and temporal patterns in interaction.</li>
                      <li>Spatial layout and environmental awareness.</li>
                      <li>Real-time sensorimotor feedback loops.</li>
                    </ul>
                  </div>
                </div>
                <div className="framework-right">
                  <div className="framework-collab-box">
                    <h4 className="framework-collab-title">How the Body Shapes Thinking: An Embodied Cognition Model</h4>
                    <p className="framework-collab-desc">Thinking happens through the body—agents can respond to physical, spatial, and temporal cues.</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/embodiment-diagram.svg')} alt="Embodied Cognition Model" className="framework-diagram img-light" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset('/images/research/embodiment-diagram-dark.svg')} alt="Embodied Cognition Model" className="framework-diagram img-dark" />
                  </div>
                </div>
              </div>
              <div className="framework-why">
                <p className="framework-why-title">Why this matters</p>
                <p>Cognition extends beyond the brain into physical gestures, spatial arrangements, and temporal rhythms of interaction. When designing agents that interact with users in the real world, we must consider how these embodied and environmental dynamics shape meaning, attention, and action—ensuring that agents respond not just to words, but to movement, rhythm, and context as part of the cognitive process itself.</p>
              </div>
              <p className="use-cases-label">Use cases</p>
              <div className="use-cases-grid">
                <a href="#" className="use-case-card">
                  <div>
                    <span className="use-case-tag">Research</span>
                    <h4>Beyond Visual and Auditory Interaction: Investigating Tactile Perception</h4>
                    <p className="use-case-desc">TMEET is a research initiative aiming to develop a framework for embodied digital communication.</p>
                  </div>
                  <div className="use-case-meta">
                    <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> Sarah Chen&nbsp;&nbsp;&nbsp;<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> March 1, 2026</span>
                  </div>
                  <div className="use-case-footer">
                    <span>5 min read</span>
                    <span className="read-more">Read more</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
