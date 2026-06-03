import type { Metadata } from 'next'
import Link from 'next/link'
import { asset } from '@/lib/asset'
import PipelineStepper from './PipelineStepper'
import './foundational-principles.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Foundational Principles',
  description:
    'Core principles guiding the design of human-centered AI systems built on trust, transparency, and agency.',
  openGraph: {
    type: 'website',
    title: 'Foundational Principles — Outshift Design',
    description:
      'Core principles guiding the design of human-centered AI systems built on trust, transparency, and agency.',
    url: 'https://vaesposito.github.io/outshift-design/foundational-principles.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/og-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundational Principles — Outshift Design',
    description:
      'Core principles guiding the design of human-centered AI systems built on trust, transparency, and agency.',
    images: ['https://vaesposito.github.io/outshift-design/images/og-preview.png'],
  },
}

function DeliverableIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  )
}

function ProblemIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export default function FoundationalPrinciplesPage() {
  return (
    <>
      <PipelineStepper />

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
            <Link href="/">Home</Link> <span>/</span> <Link href="/research">Research</Link> <span>/</span> Foundational Principles
          </div>
          <div className="page-hero-title">
            <h1>Foundational Principles</h1>
          </div>
          <div className="page-hero-inner">
            <div className="page-hero-text">
              <p>We build foundational design principles and frameworks for AI-human interaction. Our research lab translates high-level insights into practical patterns and solutions that prioritize user control, clarity, and effective collaboration between humans and AI agents.</p>
            </div>
            <div className="page-hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/research/foundational-principles-hero.png')} alt="Foundational Principles" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/research/foundational-principles-hero-dark.png')} alt="Foundational Principles" />
            </div>
          </div>
        </div>
        <a className="hero-scroll-arrow" href="#pipeline" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      {/* Research to Design Pipeline */}
      <div className="pipeline-section" id="pipeline">
        <div className="container">
          <div className="pipeline-header">
            <h2>Research to Design Pipeline</h2>
            <p>A collaborative design process that transforms raw research into practical design guidance and reusable patterns.</p>
          </div>

          <div className="pipeline-body">
            <nav className="pipeline-stepper" aria-label="Pipeline steps">
              <ol>
                <li><a href="#pipeline-step-1"><span className="pipeline-stepper-num">01</span> Framing the inquiry</a></li>
                <li><a href="#pipeline-step-2"><span className="pipeline-stepper-num">02</span> Mapping signals</a></li>
                <li><a href="#pipeline-step-3"><span className="pipeline-stepper-num">03</span> Synthesis</a></li>
                <li><a href="#pipeline-step-4"><span className="pipeline-stepper-num">04</span> Test the bridge</a></li>
                <li><a href="#pipeline-step-5"><span className="pipeline-stepper-num">05</span> Prototype &amp; iterate</a></li>
                <li><a href="#pipeline-step-6"><span className="pipeline-stepper-num">06</span> Document &amp; contribute</a></li>
              </ol>
            </nav>

            <div className="pipeline-steps pipeline-steps--timeline">
              <div className="pipeline-step" id="pipeline-step-1">
                <div className="step-number">01</div>
                <div className="step-title">Framing the inquiry</div>
                <div className="step-subtitle">Research Framing</div>
                <p className="step-desc">Define the phenomenon that you want to explore, not the feature or product.</p>
                <div className="step-quote">
                  &quot;How might X change the way people Y in a world where Z is true?&quot;<br />
                  &quot;How do operators build trust in agent decisions during incident response?&quot;
                </div>
                <ul className="step-list">
                  <li>Capture context: who, where, when, stakes.</li>
                  <li>Define time horizon (e.g. 5, 10, 20, years)</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Research brief (scope, goals, assumptions)</li>
                    <li>A short intent statement: &quot;This inquiry explores... in order to inform design decisions about... in tomorrow&apos;s world.&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="pipeline-step" id="pipeline-step-2">
                <div className="step-number">02</div>
                <div className="step-title">Research: Mapping the Present &amp; Emerging Signals</div>
                <div className="step-subtitle">Field input / Ground truth</div>
                <p className="step-desc">Build a grounded understanding of what&apos;s already happening and what&apos;s starting to happen.</p>
                <ul className="step-list">
                  <li>Desk research: academic papers, industry reports, patents, standards, policy, expert interviews.</li>
                  <li>Foresight inputs: horizon scanning, weak signals, trends, wildcards, tensions</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Evidence map:
                      <ul>
                        <li>Current practices &amp; pain points</li>
                        <li>Emerging technologies / norms</li>
                      </ul>
                    </li>
                    <li>Insight clusters: 5-8 thematic clusters (e.g., &quot;delegated decisions,&quot; &quot;opacity of automation,&quot; &quot;new forms of social risk&quot;)</li>
                  </ul>
                </div>
              </div>

              <div className="pipeline-step" id="pipeline-step-3">
                <div className="step-number">03</div>
                <div className="step-title">Synthesis: From Signals to Principles</div>
                <div className="step-subtitle">Conceptual modeling</div>
                <p className="step-desc">Transform raw findings into conceptual frameworks and actionable design principles.</p>
                <ul className="step-list">
                  <li>Identify recurring tensions and design trade-offs</li>
                  <li>Draft principle statements grounded in evidence</li>
                  <li>Map principles to interaction patterns and heuristics</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Principle cards with rationale, applicability, and known limitations</li>
                    <li>Pattern mapping matrix (principle &rarr; pattern &rarr; component)</li>
                  </ul>
                </div>
              </div>

              <div className="pipeline-step" id="pipeline-step-4">
                <div className="step-number">04</div>
                <div className="step-title">Test the Bridge: Design Heuristics &amp; applicable methods</div>
                <div className="step-subtitle">Validation</div>
                <p className="step-desc">Validate each pattern through heuristic evaluation, usability testing, and expert review to ensure the bridge between research and design guidance is sound.</p>
                <ul className="step-list">
                  <li>Heuristic walkthroughs against real agent workflows</li>
                  <li>Expert panel review with domain specialists</li>
                  <li>Gap analysis: does the pattern address the original insight?</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Evaluation report with findings and recommendations</li>
                    <li>Refined patterns with annotated revisions</li>
                  </ul>
                </div>
              </div>

              <div className="pipeline-step" id="pipeline-step-5">
                <div className="step-number">05</div>
                <div className="step-title">Prototype &amp; Iterate the validation</div>
                <div className="step-subtitle">Implementation testing</div>
                <p className="step-desc">Patterns are implemented in interactive prototypes and tested with real users, iterating until they meet our quality bar for clarity, effectiveness, and adoptability.</p>
                <ul className="step-list">
                  <li>Build interactive prototypes embodying the pattern</li>
                  <li>Run usability sessions with target users</li>
                  <li>Iterate on both design and documentation</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Validated prototype with test findings</li>
                    <li>Final pattern specification ready for documentation</li>
                  </ul>
                </div>
              </div>

              <div className="pipeline-step" id="pipeline-step-6">
                <div className="step-number">06</div>
                <div className="step-title">Update Documentation &amp; Contribute</div>
                <div className="step-subtitle">Publication</div>
                <p className="step-desc">Validated patterns are published to the Hax pattern library with full documentation, code examples, and usage guidelines. The library evolves as new research emerges.</p>
                <ul className="step-list">
                  <li>Write pattern documentation with rationale and examples</li>
                  <li>Publish to the Hax pattern library</li>
                  <li>Tag with relevant themes for discoverability</li>
                </ul>
                <div className="step-deliverable">
                  <div className="step-deliverable-title"><DeliverableIcon /> Deliverable</div>
                  <ul className="step-list">
                    <li>Published pattern with code samples and usage guidelines</li>
                    <li>Changelog entry and contribution record</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="case-studies">
        <div className="container">
          <div className="case-studies-header">
            <h2>Case Studies</h2>
            <p>Real-world applications of our foundational principles in enterprise and research contexts.</p>
          </div>

          <div className="case-study-card">
            <p className="case-study-label">Case Study 01</p>
            <h3>Agent Transparency in Change Impact Assessment, Verification and Testing</h3>
            <div className="case-study-tags">
              <span>Infrastructure</span>
              <span>Change management</span>
            </div>
            <p className="case-study-desc">Building transparent AI systems that assess infrastructure changes, verify modifications, conduct automated testing, and manage approval workflows &mdash; all while maintaining clear visibility into agent decision-making and human oversight.</p>
            <div className="case-study-problem">
              <p className="case-study-problem-title"><ProblemIcon /> Problem</p>
              <p>Infrastructure changes carry high risk, but manual impact assessment, testing, and approval processes create bottlenecks. Organizations struggle to balance automation speed with safety and accountability, often lacking visibility into what AI agents are actually evaluating and why certain changes get flagged.</p>
            </div>
            <p className="case-study-principles-label">Design principles applied</p>
            <div className="case-study-themes">
              <span>Traceability</span>
              <span>Control</span>
              <span>Clarity</span>
            </div>
          </div>

          <div className="case-study-card">
            <p className="case-study-label">Case Study 02</p>
            <h3>Designing for AI Transparency in Enterprise Agentic Composites</h3>
            <div className="case-study-tags">
              <span>Multi-Agent</span>
              <span>Enterprise</span>
            </div>
            <p className="case-study-desc">When multiple agents collaborate within a composite system, understanding who did what &mdash; and why &mdash; becomes critical. This case study explores transparency design patterns for multi-agent workflows in enterprise settings.</p>
            <div className="case-study-problem">
              <p className="case-study-problem-title"><ProblemIcon /> Problem</p>
              <p>Multi-agent systems create opaque decision chains where audit trails, decision attribution, and user-facing explanations must maintain clarity without overwhelming cognitive load. Users lose trust when they can&apos;t trace outcomes to specific agents.</p>
            </div>
            <p className="case-study-principles-label">Design principles applied</p>
            <div className="case-study-themes">
              <span>Transparency</span>
              <span>Explainability</span>
              <span>Audit</span>
            </div>
          </div>

          <div className="case-study-card">
            <p className="case-study-label">Case Study 03</p>
            <h3>Multi-Agent Cascades: Guardrails for Chain Reactions</h3>
            <div className="case-study-tags">
              <span>Cascades</span>
              <span>Safety</span>
            </div>
            <p className="case-study-desc">When agents trigger other agents, cascading effects can quickly move beyond human oversight. This study maps the interaction patterns of multi-agent cascades and proposes design guardrails to keep humans meaningfully in the loop.</p>
            <div className="case-study-problem">
              <p className="case-study-problem-title"><ProblemIcon /> Problem</p>
              <p>Cascading agent actions can amplify errors, create unintended consequences, and move beyond human oversight. Without circuit breakers, approval gates, and progressive disclosure, organizations risk losing control over automated workflows.</p>
            </div>
            <p className="case-study-principles-label">Design principles applied</p>
            <div className="case-study-themes">
              <span>Human-in-the-Loop</span>
              <span>Guardrails</span>
              <span>Control</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
