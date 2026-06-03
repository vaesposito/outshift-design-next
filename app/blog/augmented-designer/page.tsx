import type { Metadata } from 'next'
import Link from 'next/link'
import './article.css'
import { asset } from '@/lib/asset'
import ReadingProgress from '@/components/ReadingProgress'
import LightboxImage from '../LightboxImage'

export const metadata: Metadata = {
  title: 'The Augmented Designer: How Agents are Reshaping the Design Workflow — Outshift Design',
  description:
    'Reflections on AI-augmented design: plausible noise, the engineer pal effect, and a case study of the CASA project at Outshift.',
  openGraph: {
    type: 'website',
    title: 'The Augmented Designer: How Agents are Reshaping the Design Workflow — Outshift Design',
    description:
      'Reflections on AI-augmented design: plausible noise, the engineer pal effect, and a case study of the CASA project at Outshift.',
    url: 'https://vaesposito.github.io/outshift-design/augmented-designer.html',
    siteName: 'Outshift Design',
    images: [{ url: 'https://vaesposito.github.io/outshift-design/images/blog/augmented-designer/hero.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Augmented Designer: How Agents are Reshaping the Design Workflow — Outshift Design',
    description:
      'Reflections on AI-augmented design: plausible noise, the engineer pal effect, and a case study of the CASA project at Outshift.',
    images: ['https://vaesposito.github.io/outshift-design/images/blog/augmented-designer/hero.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Augmented Designer: How Agents are Reshaping the Design Workflow',
  description:
    'Reflections on AI-augmented design: plausible noise, the engineer pal effect, and a case study of the CASA project at Outshift.',
  author: { '@type': 'Person', name: 'Valentina Esposito' },
  publisher: { '@type': 'Organization', name: 'Outshift Design' },
  datePublished: '2026-06-01',
  url: 'https://vaesposito.github.io/outshift-design/blog/augmented-designer',
  image: 'https://vaesposito.github.io/outshift-design/images/blog/augmented-designer/hero.png',
  keywords: ['AI design', 'augmented design', 'design workflow', 'coding assistants', 'CASA', 'Outshift', 'human-in-the-loop'],
}

export default function AugmentedDesignerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <main>
        <div className="article-wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            The Augmented Designer
          </div>

          <div className="article-meta">
            <span className="article-tag">Design</span>
            <span className="article-tag">AI</span>
            <span className="article-tag">Workflow</span>
            <span className="article-tag">Case Study</span>
            <span className="article-tag">Agents</span>
            <span className="article-tag">HITL</span>
            <span className="article-date">June 1, 2026</span>
            <span className="article-read-time">8 min read</span>
          </div>

          <h1 className="article-title">The Augmented Designer: How Agents are Reshaping the Design Workflow</h1>

          <div className="article-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/images/blog/augmented-designer/hero.png')} alt="The Augmented Designer" />
          </div>

          <div className="author-row">
            <div>
              <div className="author-name">Valentina Esposito</div>
              <div className="author-title">Product Designer, Outshift by Cisco</div>
            </div>
          </div>

          <div className="article-body">
            <p>As part of an emerging tech group, our mission is to explore the &quot;what&apos;s next&quot; for Cisco and the broader industry. This requires more than just curiosity; it demands that we actively step outside the comfort zones of known processes. We are living in an incredibly stimulating historical moment where previous knowledge barriers are being lowered, thanks to agent assistants that translate natural language intents into something tangible — from writing and design to complex development.</p>

            <p>However, all that glitters is not gold, at least not yet. So, how do we take the best and leave the rest? Here are some reflections on the current state of AI-augmented design.</p>

            <hr />

            <h2>The Problem of &quot;Plausible Noise&quot;</h2>

            <p>The multiplication of interface generation tools has made it possible to create nice-looking UIs that serve as excellent conversation starters. The problem arises when we go deeper into the content. Very often, these tools take the liberty of adding unrequested content to fill the space.</p>

            <p>Replacing the classic &quot;lorem ipsum&quot; with plausible-looking, consistent content can be dangerous; it distracts from the core design goal and confuses our audiences. When content hierarchy is sacrificed for visual &quot;noise,&quot; the interface becomes a generic, unbranded shell.</p>

            <p>It is a dangerous mix: pleasant to the eye, but fundamentally hollow. AI tools are precious, but <strong>Human-in-the-Loop (HITL) guidance is as critical as mentoring a junior designer</strong>. Sometimes, the effort required to instruct an AI to achieve a specific vision is greater than simply sketching the idea ourselves.</p>

            <div className="usage-box">
              <div className="usage-item do">
                <div className="usage-label">✓ Appropriate usage</div>
                <p>Starting a conversation, guiding team discussions, and exploring initial ideas and styles.</p>
              </div>
              <div className="usage-item dont">
                <div className="usage-label">✗ Not appropriate at this stage</div>
                <p>High-fidelity production-ready assets or final prototypes without rigorous review.</p>
              </div>
            </div>

            <hr />

            <h2>The &quot;Engineer Pal&quot;</h2>

            <p>One shift we have found extremely useful in our roles is the <strong>reduction of technical barriers</strong>, which speeds up our process of using and reviewing the technical solutions we produce. At Cisco Outshift, we have been exploring the <a href="https://outshift.cisco.com/the-internet-of-agents" target="_blank" rel="noopener noreferrer">Internet of Agents</a> and the <a href="https://outshift.cisco.com/internet-of-cognition" target="_blank" rel="noopener noreferrer">Internet of Cognition</a>. Rather than traditional SaaS interfaces, these solutions live primarily in GitHub repositories, sometimes using UIs to facilitate usage and demo their features.</p>

            <p>Previously, an AI-unaugmented design team would have had to ask an engineer for a demo, wait for assistance with installation, or spend a significant amount of time figuring out how to run the software locally. Today, coding assistants allow us to bridge that gap.</p>

            <p>For projects like the <strong><a href="https://docs.agntcy.org/dir/directory-gui/#directory-connection" target="_blank" rel="noopener noreferrer">AGNTCY directory GUI</a></strong>, we were able to collaborate with the team to impact the look and feel, aligning it with our branding and refining the content for a smoother experience. We bypassed static mockups entirely, relying on assisted frontend development.</p>

            <p>Similarly, on the <strong><a href="https://outshift.cisco.com/internet-of-cognition" target="_blank" rel="noopener noreferrer">Internet of Cognition</a> <a href="https://github.com/outshift-open/CASA" target="_blank" rel="noopener noreferrer">CASA</a> project</strong>, we were able to review the first draft of the UI, propose information architecture and flow improvements, and share an updated look and feel directly in code. No mockups — just sketching and sharing a working version with the frontend team, complete with interaction details, avoiding the tedious work of documenting every state.</p>

            <div className="callout">
              Is this a new way of collaborating? Most probably. However, just as with design tools, code assistants should support competent engineers and not replace their judgment. They bring potential security, scalability, and quality issues to the table that must be guided by responsible humans.
            </div>

            <hr />

            <h2>Case Study: The CASA Project</h2>

            <p>At Outshift, we are actively exploring and shaping the <strong><a href="https://outshift.cisco.com/internet-of-cognition" target="_blank" rel="noopener noreferrer">Internet of Cognition</a></strong> — a paradigm where agents collaborate by sharing context, intent, and memory. Building on our previous work with AGNTCY regarding <a href="https://agent-identity.outshift.com/welcome" target="_blank" rel="noopener noreferrer">agent identities</a>, our team has begun exploring Zero Trust principles in multi-agentic environments. This led to the development of <strong><a href="https://github.com/outshift-open/CASA" target="_blank" rel="noopener noreferrer">CASA (Continuous Agent Semantic Authorization)</a></strong>, an intent-scoped authorization system for Kubernetes multi-agent systems, enforced at the network layer.</p>

            <p>Our projects are ambitious, fast-paced, and currently live primarily in GitHub repositories. In the context of <a href="https://github.com/outshift-open/CASA" target="_blank" rel="noopener noreferrer">CASA</a>, we needed to design a UI that allows users to monitor and manage authorizations at a granular level. As remote designers working with sometimes local engineering teams, we needed to catch up quickly and contribute meaningfully, despite tight deadlines.</p>

            <h3>The Workflow Shift</h3>

            <ul className="principles-list">
              <li><strong>Local Environment Independence.</strong> We asked the AI coding assistant to run the application locally using demo data. This allowed us to navigate and review the first draft of the interface independently, removing the logistics bottleneck entirely.</li>
              <li><strong>Content Inventory &amp; Architecture.</strong> We conducted a thorough content inventory to understand the underlying intentions of the interface. We proposed a new information architecture and navigation flow, ensuring that the most relevant content was accessible in a single click.</li>
            </ul>

            <figure className="article-figure">
              <LightboxImage src={asset('/images/blog/augmented-designer/content-inventory.png')} alt="Content inventory diagram for the CASA project" />
              <figcaption>Content inventory mapping the underlying intentions and structure of the CASA interface.</figcaption>
            </figure>

            <figure className="article-figure">
              <LightboxImage src={asset('/images/blog/augmented-designer/casa-navigation.png')} alt="CASA navigation architecture proposal" />
              <figcaption>Proposed navigation architecture — key content accessible in a single click.</figcaption>
            </figure>

            <ul className="principles-list">
              <li><strong>Branding &amp; Visual Refinement.</strong> When the look and feel felt too generic, we asked the agent to develop a color theme for our framework, providing visual and code references to ensure consistency.</li>
              <li><strong>Iterative Development.</strong> With the architecture and branding defined, we asked the agent to update the UI. After a few hundred iterations, we reached a version that aligned perfectly with our design principles.</li>
            </ul>

            <figure className="article-figure">
              <LightboxImage src={asset('/images/blog/augmented-designer/casa-dashboard-v1.png')} alt="CASA dashboard — ZTA Explorer view" />
              <figcaption>Early iteration — ZTA Explorer dashboard showing Multi-Agent Systems, Agentic Services, and Deny Reasons.</figcaption>
            </figure>

            <figure className="article-figure">
              <LightboxImage src={asset('/images/blog/augmented-designer/casa-dashboard-v2.png')} alt="CASA dashboard — final branded view" />
              <figcaption>Final iteration — CASA (Continuous Agent Semantic Authorization) dashboard with refined branding, layout, and data visualization.</figcaption>
            </figure>

            <hr />

            <h2>Results: Record-Breaking Fidelity</h2>

            <p>We documented the recommendations, recorded a short demo video to illustrate the new navigation and interactions, and pushed the updates to our GitHub repository.</p>

            <p>We are currently at a &quot;0–1&quot; prototype stage. We don&apos;t expect this to function as a final product yet, but we are working with educated hypotheses that we plan to test through user interviews. The team reviewed the proposal, and the frontend engineer was able to implement the updates immediately. The result was a high-fidelity experience where interactions could be tested in real-time. There were no &quot;blurred lines&quot; — everything was clearly defined in the code.</p>

            <h3>The Timeline</h3>

            <ol className="timeline-steps">
              <li><span className="timeline-num">1</span><span>Local review of the existing interface</span></li>
              <li><span className="timeline-num">2</span><span>Suggested architecture and branding updates</span></li>
              <li><span className="timeline-num">3</span><span>Implementation for collaboration</span></li>
              <li><span className="timeline-num">4</span><span>Team review</span></li>
              <li><span className="timeline-num">5</span><span>Final implementation</span></li>
              <li><span className="timeline-num">6</span><span>One final round of review</span></li>
            </ol>

            <p>All of this occurred <strong>within a single week</strong>. In my experience, this is record time. The level of fine-tuning achieved is unprecedented, which is extremely satisfying from a designer&apos;s perspective.</p>

            <hr />

            <h2>The Augmented Designer</h2>

            <p>AI tools are appearing in all areas and contexts. From content generation — which still requires competent HITL judgment — to image generation and the expansion of design systems, the applications in our field are vast. A solid design system can be used as a base for any new UI project if fed into a code assistant. New themes can be generated, and beautiful, consistent designs can be produced for future projects.</p>

            <p>We are using fewer traditional design tools, and we look forward to the day the &quot;design-to-code&quot; issue is completely solved. The technology is so fresh and evolving that finding a durable process that isn&apos;t linked to version control isn&apos;t a possibility yet. In the meantime, watching, testing, playing, and participating in hackathons helps us test these possibilities in safe spaces.</p>

            <hr />

            <h2>Reflections on the Future of Design</h2>

            <p>As product designers, we cover the full spectrum of product creation — from ideation to iteration. However, final details like micro-interactions are often pushed back because they are seen as time-consuming. This is contrary to good design principles, as every detail helps convey the message of an interface and makes complex technical products more understandable.</p>

            <div className="callout">
              Will I go back to designing mockups in Figma? Probably. But I look forward to the day when the control and fidelity of these tools match what can be achieved with a human-guided code assistant.
            </div>

            <Link href="/blog" className="back-to-blog">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8H4M4 8l4-4M4 8l4 4" /></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
