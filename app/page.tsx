import Link from 'next/link'
import HeroVideo from '@/components/HeroVideo'
import { asset } from '@/lib/asset'

export default function HomePage() {
  return (
    <>
      {/* Animated Blobs */}
      <div className="blobs-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Hero */}
      <div className="hero-section">
        <div className="container">
          <div className="content">
            <h1>Design evolves fast</h1>
            <h2>We evolve faster</h2>
            <h5>
              Meet the Outshift product design team, Cisco&apos;s innovative force for incubation.<br />
              We specialize in driving ideation and fostering alignment across cross-functional teams.
            </h5>
            <p />
            <Link href="#initiatives" className="cta-button">See Our Work</Link>
          </div>
        </div>
        <div className="hero-scroll-wrap">
          <a
            className="hero-scroll-arrow"
            href="#initiatives"
            aria-label="Scroll to content"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Featured Initiatives */}
      <div className="initiatives-section" id="initiatives">
        <div className="container">
          <div className="section-header">
            <h3>Featured Initiatives</h3>
            <p>Explore our recent projects and see how we&apos;re shaping the future of enterprise software.</p>
          </div>
        </div>
      </div>

      <div className="timeline">
        {/* HAX Initiative */}
        <div className="initiative-card initiative-card--linked">
          <Link href="/hax" className="initiative-card-link" aria-label="View initiative: HAX, The Human-Agent Experience" />
          <div className="card-text">
            <h3>HAX, The Human-Agent Experience</h3>
            <p>Designing for the Internet of Agents</p>
            <div className="card-text-actions">
              <Link href="/hax" className="text-link-cta">Learn about HAX</Link>
              <Link
                href="/sdk#introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link arrow-link--labeled"
                aria-label="Explore the SDK documentation"
              >
                <span>Explore the SDK</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5M12 4V11"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="card-image">
            <HeroVideo lightSrc="/videos/agents.mp4" darkSrc="/videos/agents-dark.mp4" />
          </div>
        </div>

        {/* Internet of Cognition Initiative */}
        <div className="initiative-card reversed initiative-card--linked">
          <a
            href="https://outshift.cisco.com/internet-of-cognition/explore"
            className="initiative-card-link"
            aria-label="View initiative: Internet of Cognition"
            target="_blank"
            rel="noopener noreferrer"
          />
          <div className="card-text">
            <h3>Internet of Cognition</h3>
            <p>Enabling agents and humans to scale intelligence collectively.</p>
            <div className="card-text-actions">
              <a
                href="https://outshift.cisco.com/internet-of-cognition/explore"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link arrow-link--labeled"
                aria-label="Learn about Internet of Cognition"
              >
                <span>Learn about IoC</span>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5M12 4V11"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="card-image">
            <HeroVideo lightSrc="/videos/cognition.mp4" darkSrc="/videos/cognition-2.mp4" />
          </div>
        </div>
      </div>

      {/* Innovation & Research */}
      <div className="innovation-section" id="about">
        <div className="container">
          <div className="innovation-inner">
            <div className="innovation-text">
              <h2>Innovation &amp; Research</h2>
              <p>Discover our research explorations across the intersection of design, AI, and human-centered technology.</p>
              <Link href="/research" className="innovation-cta">Explore the research</Link>
            </div>
            <div className="innovation-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-light" src={asset('/images/hax-research.png')} alt="Outshift research visualization" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-dark" src={asset('/images/hax-research-dark.png')} alt="Outshift research visualization" />
            </div>
          </div>
        </div>
      </div>

      {/* Latest from Our Blog */}
      <div className="blog-section" id="blog">
        <div className="container">
          <div className="section-header">
            <h3>Latest from Our Blog</h3>
            <p>Insights, learnings, and stories from our design team.</p>
          </div>
          <div className="blog-cards">
            <a
              href={asset('/files/ai-ethics-and-design.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div>
                <h4>The Strategic Role of Design in Shaping Ethical AI Systems</h4>
                <p className="blog-desc">How interface design becomes the primary control layer for responsible human–AI interaction — and what that means for designers building the next generation of AI products.</p>
              </div>
              <div>
                <div className="blog-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Krystelle Gonzalez Papaux
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    May 2026
                  </span>
                </div>
                <div className="blog-footer">
                  <span>Whitepaper</span>
                  <span className="read-more">Read more</span>
                </div>
              </div>
            </a>

            <Link href="/blog/making-room-for-agents" className="blog-card">
              <div>
                <h4>Making Room for Agents in Expert Tools</h4>
                <p className="blog-desc">How agents need to map onto the grammar of expert tools — participating in work without displacing the structure that makes expert fluency possible.</p>
              </div>
              <div>
                <div className="blog-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Marc Scibelli
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    May 2026
                  </span>
                </div>
                <div className="blog-footer">
                  <span>Article</span>
                  <span className="read-more">Read more</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/augmented-designer" className="blog-card">
              <div>
                <h4>The Augmented Designer: How Agents are Reshaping the Design Workflow</h4>
                <p className="blog-desc">Reflections on AI-augmented design at Outshift — from the dangers of plausible noise to a week of record-breaking fidelity on the CASA project.</p>
              </div>
              <div>
                <div className="blog-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Valentina Esposito
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    June 2026
                  </span>
                </div>
                <div className="blog-footer">
                  <span>8 min read</span>
                  <span className="read-more">Read more</span>
                </div>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/blog" className="view-all-btn">View All Articles</Link>
          </div>
        </div>
      </div>
    </>
  )
}
