import type { Metadata } from 'next'
import { asset } from '@/lib/asset'
import './components.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Component Library',
  description: 'Visual reference of every Strapi component used across the Outshift Design site, with rendered previews and field schemas.',
}

const JUMP_NAV: [string, string][] = [
  ['comp-hero-block', 'HeroBlock'],
  ['comp-cta-block', 'CtaBlock'],
  ['comp-section-header', 'SectionHeader'],
  ['comp-simple-card', 'SimpleCard'],
  ['comp-pipeline-step', 'PipelineStep'],
  ['comp-case-study-card', 'CaseStudyCard'],
  ['comp-research-approach-item', 'ResearchApproachItem'],
  ['comp-use-case-entry', 'UseCaseEntry'],
  ['comp-pattern-panel', 'PatternPanel'],
  ['comp-responsible-step', 'ResponsibleStep'],
  ['comp-media-block', 'MediaBlock'],
  ['comp-tag', 'Tag'],
  ['comp-nav-item', 'NavItem'],
  ['comp-arrow-link', 'ArrowLink'],
  ['comp-social-link', 'SocialLink'],
  ['comp-seo-meta', 'SeoMeta'],
]

export default function ComponentsPage() {
  return (
    <div className="components-page">
      <div className="container">

        <div className="comp-header">
          <p className="comp-label">Strapi CMS</p>
          <h1>Component Library</h1>
          <p className="comp-desc">Visual reference of every Strapi component. Each preview shows the actual rendered look &amp; feel, followed by its schema.</p>
          <div className="comp-jump-nav">
            {JUMP_NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>
        </div>

        {/* HeroBlock */}
        <section className="comp-showcase" id="comp-hero-block">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">HeroBlock</span>
            <span className="comp-showcase-usage">Used by: all research pages</span>
          </div>
          <div className="comp-preview">
            <div className="page-hero" style={{ padding: '40px 0 20px' }}>
              <div className="page-hero-title" style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: '2.2em' }}>Page Title Goes Here</h1>
              </div>
              <div className="page-hero-inner">
                <div className="page-hero-text" style={{ flex: 5, paddingRight: 40 }}>
                  <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>A paragraph describing the page content. This text is stored in the <code>description</code> field and rendered below the hero title.</p>
                </div>
                <div className="page-hero-image" style={{ flex: 7 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset('/images/research/sdk-hero.png')} alt="Hero image" style={{ width: '100%', height: 200, borderRadius: 16, objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>image</code></td><td>media (images)</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CtaBlock */}
        <section className="comp-showcase" id="comp-cta-block">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">CtaBlock</span>
            <span className="comp-showcase-usage">Used as the &quot;Build with SDK&quot; section on all research pages</span>
          </div>
          <div className="comp-preview" style={{ background: 'linear-gradient(132deg, rgba(210,194,255,0.15) 26%, rgba(255,255,255,0) 88%)', border: '1px solid rgba(77,99,128,0.21)', borderRadius: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 40, padding: 40 }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '1.8em', fontWeight: 200, margin: '0 0 12px' }}>Build with the Hax SDK</h2>
                <p style={{ fontSize: '0.95em', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 0 20px' }}>The HAX SDK gives developers everything they need to integrate agents into their apps.</p>
                <span className="sdk-cta" style={{ fontSize: '0.9em', padding: '10px 20px' }}>Explore the SDK <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></span>
              </div>
              <div style={{ flex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset('/images/research/sdk-hero.png')} alt="Hax SDK" style={{ width: '100%', height: 160, borderRadius: 16, objectFit: 'cover', display: 'block' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset('/images/research/sdk-hero-dark.png')} alt="Hax SDK" style={{ width: '100%', height: 160, borderRadius: 16, objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>buttonLabel</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>buttonUrl</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>image</code></td><td>media (images)</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SectionHeader */}
        <section className="comp-showcase" id="comp-section-header">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">SectionHeader</span>
            <span className="comp-showcase-usage">Used by: ResearchPage</span>
          </div>
          <div className="comp-preview" style={{ textAlign: 'center', padding: 40 }}>
            <h2 style={{ fontSize: '2.2em', fontWeight: 200, margin: '0 0 12px' }}>Section Title</h2>
            <p style={{ fontSize: '1em', color: 'var(--color-text-muted)', margin: '0 auto', lineHeight: 1.6, maxWidth: 500 }}>An optional subtitle that provides additional context below the section heading.</p>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>subtitle</code></td><td>string</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SimpleCard */}
        <section className="comp-showcase" id="comp-simple-card">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">SimpleCard</span>
            <span className="comp-showcase-usage">Used by: SecurityPrivacyPage (&quot;Building Secure Systems&quot; cards)</span>
          </div>
          <div className="comp-preview">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div className="secure-card">
                <h3>Enabling Safe Innovation</h3>
                <p>Our security research ensures that as agents become more capable, they remain trustworthy and aligned with user intentions.</p>
              </div>
              <div className="secure-card">
                <h3>Protecting User Privacy</h3>
                <p>We investigate privacy-preserving architectures that keep sensitive data secure while enabling powerful agent capabilities.</p>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PipelineStep */}
        <section className="comp-showcase" id="comp-pipeline-step">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">PipelineStep</span>
            <span className="comp-showcase-usage">Used by: FoundationalPrinciplesPage</span>
          </div>
          <div className="comp-preview">
            <div style={{ width: '100%', position: 'relative' }}>
              <div className="step-number">01</div>
              <h3 className="step-title">Step Title</h3>
              <p className="step-subtitle">An optional italic subtitle</p>
              <p className="step-desc">A description paragraph explaining the purpose and methodology of this pipeline step.</p>
              <div className="step-quote">A notable quote or key insight displayed in a bordered box.</div>
              <ul className="step-list">
                <li>First bullet point</li>
                <li>Second bullet point</li>
              </ul>
              <div className="step-deliverable">
                <p className="step-deliverable-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg> Deliverables</p>
                <ul className="step-list">
                  <li>Deliverable item</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>stepNumber</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>subtitle</code></td><td>string</td><td></td></tr>
                <tr><td><code>description</code></td><td>text</td><td></td></tr>
                <tr><td><code>quote</code></td><td>text</td><td></td></tr>
                <tr><td><code>bullets</code></td><td>text</td><td></td></tr>
                <tr><td><code>deliverables</code></td><td>text</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CaseStudyCard */}
        <section className="comp-showcase" id="comp-case-study-card">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">CaseStudyCard</span>
            <span className="comp-showcase-usage">Used by: FoundationalPrinciplesPage</span>
          </div>
          <div className="comp-preview">
            <div className="case-study-card" style={{ marginBottom: 0 }}>
              <p className="case-study-label">Case Study</p>
              <h3>Smart Home Energy Management</h3>
              <div className="case-study-tags">
                <span>IoT</span>
                <span>Sustainability</span>
              </div>
              <p className="case-study-desc">An AI-powered home energy system that learns usage patterns and automatically optimizes consumption while maintaining comfort levels.</p>
              <div className="case-study-problem">
                <p className="case-study-problem-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg> Problem</p>
                <p>Homeowners struggle to reduce energy costs without sacrificing comfort or convenience.</p>
              </div>
              <p className="case-study-principles-label">Applied Principles</p>
              <div className="case-study-themes">
                <span>Transparency</span>
                <span>User Control</span>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>problem</code></td><td>text</td><td></td></tr>
                <tr><td><code>tags</code></td><td>Tag[] (component)</td><td></td></tr>
                <tr><td><code>principles</code></td><td>text</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ResearchApproachItem */}
        <section className="comp-showcase" id="comp-research-approach-item">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">ResearchApproachItem</span>
            <span className="comp-showcase-usage">Used by: SecurityPrivacyPage (alternating image/text rows)</span>
          </div>
          <div className="comp-preview">
            <div className="research-item" style={{ padding: '24px 0', borderBottom: 'none' }}>
              <div className="research-item-text">
                <h3 style={{ fontSize: '1.3em' }}>Adaptive Security Policies</h3>
                <p>How agents dynamically adjust their security posture based on context, risk assessment, and user behavior patterns.</p>
                <ul>
                  <li>Dynamic policy adjustment</li>
                  <li>Context-aware guardrails</li>
                  <li>Real-time monitoring</li>
                </ul>
              </div>
              <div className="research-item-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset('/images/research/sdk-hero.png')} alt="Research image" style={{ height: 180 }} />
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>exploreBullets</code></td><td>text (newline-separated)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>image</code></td><td>media (images)</td><td></td></tr>
                <tr><td><code>imageAlt</code></td><td>string</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* UseCaseEntry */}
        <section className="comp-showcase" id="comp-use-case-entry">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">UseCaseEntry</span>
            <span className="comp-showcase-usage">Used by: SecurityPrivacyPage (rendered as blog-card style)</span>
          </div>
          <div className="comp-preview">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div className="blog-card" style={{ height: 'auto', minHeight: 200 }}>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 500, margin: '0 0 12px' }}>Healthcare Data Agent</h4>
                  <p className="blog-desc" style={{ fontSize: '0.88em' }}>An agent that processes patient data while maintaining HIPAA compliance and data minimization principles.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  <span className="use-case-tag">Privacy</span>
                  <span className="use-case-tag">Healthcare</span>
                </div>
              </div>
              <div className="blog-card" style={{ height: 'auto', minHeight: 200 }}>
                <div>
                  <h4 style={{ fontSize: 20, fontWeight: 500, margin: '0 0 12px' }}>Financial Advisory Agent</h4>
                  <p className="blog-desc" style={{ fontSize: '0.88em' }}>An autonomous agent providing personalized financial advice while ensuring transparency in its reasoning.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  <span className="use-case-tag">Trust</span>
                  <span className="use-case-tag">Finance</span>
                </div>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>tags</code></td><td>Tag[] (component)</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PatternPanel */}
        <section className="comp-showcase" id="comp-pattern-panel">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">PatternPanel</span>
            <span className="comp-showcase-usage">Used by: HaxPage (interaction pattern tabs)</span>
          </div>
          <div className="comp-preview" style={{ textAlign: 'center', padding: 32 }}>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <button className="pattern-filter is-active" style={{ fontSize: '0.85em', padding: '8px 18px' }}>Delegation</button>
              <button className="pattern-filter" style={{ fontSize: '0.85em', padding: '8px 18px' }}>Transparency</button>
              <button className="pattern-filter" style={{ fontSize: '0.85em', padding: '8px 18px' }}>Feedback</button>
            </div>
            <h3 className="pattern-title" style={{ fontSize: '1.5em' }}>Delegation</h3>
            <p className="pattern-desc" style={{ margin: '0 auto 24px', maxWidth: 480, fontSize: '0.95em' }}>How users hand off tasks to agents and maintain appropriate levels of control and oversight.</p>
            <p className="pattern-examples-label" style={{ fontSize: '1.2em', margin: '0 0 16px' }}>Examples</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1, height: 100, background: 'var(--color-hover)', borderRadius: 12, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.85em' }}>Example image 1</div>
              <div style={{ flex: 1, height: 100, background: 'var(--color-hover)', borderRadius: 12, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.85em' }}>Example image 2</div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>key</code></td><td>string (filter button id)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>description</code></td><td>text</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>exampleImages</code></td><td>media[] (multiple)</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ResponsibleStep */}
        <section className="comp-showcase" id="comp-responsible-step">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">ResponsibleStep</span>
            <span className="comp-showcase-usage">Used by: SocietalImpactPage (framework steps)</span>
          </div>
          <div className="comp-preview">
            <div className="responsible-step" style={{ padding: '24px 0', borderBottom: 'none' }}>
              <div className="responsible-step-image">
                <div style={{ width: 140, height: 140, background: 'var(--color-hover)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)', fontSize: '0.75em' }}>Image</div>
              </div>
              <div className="responsible-step-content">
                <p className="responsible-step-label">Step 1</p>
                <h3 style={{ fontSize: '1.3em' }}>Stakeholder Mapping</h3>
                <ul>
                  <li>Identify all affected parties</li>
                  <li>Map power dynamics and dependencies</li>
                  <li>Assess vulnerability of each group</li>
                </ul>
                <div className="responsible-step-template">
                  <strong>Template:</strong>
                  <a href="#" style={{ color: 'var(--color-accent)' }}>Agent Impact Map &rarr;</a>
                </div>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>label</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>title</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>image</code></td><td>media (images)</td><td></td></tr>
                <tr><td><code>imageAlt</code></td><td>string</td><td></td></tr>
                <tr><td><code>bullets</code></td><td>text (newline-separated)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>templateLabel</code></td><td>string</td><td></td></tr>
                <tr><td><code>templateLink</code></td><td>string</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MediaBlock */}
        <section className="comp-showcase" id="comp-media-block">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">MediaBlock</span>
            <span className="comp-showcase-usage">Used by: ResearchCard, Initiative</span>
          </div>
          <div className="comp-preview">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <p style={{ fontSize: '0.75em', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-subtle)', margin: '0 0 8px' }}>Image type</p>
                <div style={{ height: 160, borderRadius: 12, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset('/images/research/sdk-hero.png')} alt="Image media" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <p style={{ fontSize: '0.8em', color: 'var(--color-text-muted)', margin: '8px 0 0' }}>Caption text appears here</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75em', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-subtle)', margin: '0 0 8px' }}>Video type</p>
                <div style={{ height: 160, borderRadius: 12, background: 'var(--color-hover)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <p style={{ fontSize: '0.8em', color: 'var(--color-text-muted)', margin: '8px 0 0' }}>Video loaded via URL</p>
              </div>
            </div>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>mediaType</code></td><td>enum (image | video)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>image</code></td><td>media (images)</td><td></td></tr>
                <tr><td><code>videoUrl</code></td><td>string</td><td></td></tr>
                <tr><td><code>altText</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>caption</code></td><td>string</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tag */}
        <section className="comp-showcase" id="comp-tag">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">Tag</span>
            <span className="comp-showcase-usage">Used by: CaseStudyCard, UseCaseEntry, BlogPost, ResearchCard</span>
          </div>
          <div className="comp-preview" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <span className="innovation-tags"><a style={{ pointerEvents: 'none' }}>Default Tag</a></span>
            <span className="use-case-tag">Category Tag</span>
            <span className="case-study-tags" style={{ margin: 0 }}><span>Research Tag</span></span>
            <span className="blog-hub-tag">Blog Tag</span>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>label</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>url</code></td><td>string</td><td></td></tr>
                <tr><td><code>color</code></td><td>enum (cyan | violet | green | orange | default)</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* NavItem */}
        <section className="comp-showcase" id="comp-nav-item">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">NavItem</span>
            <span className="comp-showcase-usage">Used by: Homepage (navigation)</span>
          </div>
          <div className="comp-preview" style={{ display: 'flex', gap: 24, alignItems: 'center', fontSize: '0.95em' }}>
            <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Initiatives {/* eslint-disable-next-line @next/next/no-img-element */}<img src={asset('/images/keyboard-arrow-down-icon.svg')} alt="" style={{ width: 12, verticalAlign: 'middle', marginLeft: 4, opacity: 0.5 }} /></span>
            <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Research {/* eslint-disable-next-line @next/next/no-img-element */}<img src={asset('/images/keyboard-arrow-down-icon.svg')} alt="" style={{ width: 12, verticalAlign: 'middle', marginLeft: 4, opacity: 0.5 }} /></span>
            <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>Blog</span>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>label</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>href</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>hasDropdown</code></td><td>boolean</td><td></td></tr>
                <tr><td><code>order</code></td><td>integer</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ArrowLink */}
        <section className="comp-showcase" id="comp-arrow-link">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">ArrowLink</span>
            <span className="comp-showcase-usage">Used by: Homepage, ResearchCard, HaxPage</span>
          </div>
          <div className="comp-preview" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a className="arrow-link" href="#comp-arrow-link" aria-label="Arrow link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <span className="read-more" style={{ cursor: 'default' }}>Explore &rarr;</span>
            <span style={{ fontSize: '0.85em', color: 'var(--color-text-muted)' }}>Rendered as arrow button or text link depending on context</span>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>label</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>url</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>isExternal</code></td><td>boolean</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SocialLink */}
        <section className="comp-showcase" id="comp-social-link">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">SocialLink</span>
            <span className="comp-showcase-usage">Used by: Homepage (footer)</span>
          </div>
          <div className="comp-preview">
            <div className="footer-social-icons">
              <a href="#comp-social-link" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#comp-social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href="#comp-social-link" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
            <p style={{ fontSize: '0.82em', color: 'var(--color-text-muted)', margin: '12px 0 0' }}>Platforms: x, linkedin, youtube, github, dribbble</p>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>platform</code></td><td>enum (x | linkedin | youtube | github | dribbble)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>url</code></td><td>string</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>ariaLabel</code></td><td>string</td><td className="comp-field-req">required</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SeoMeta */}
        <section className="comp-showcase" id="comp-seo-meta">
          <div className="comp-showcase-label">
            <span className="comp-showcase-name">SeoMeta</span>
            <span className="comp-showcase-usage">Used by: all content types (no visual output &mdash; populates &lt;head&gt;)</span>
          </div>
          <div className="comp-preview" style={{ fontFamily: "'SF Mono','Fira Code',monospace", fontSize: '0.82em', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            <span style={{ color: 'var(--color-text-subtle)' }}>&lt;head&gt;</span><br />
            &nbsp;&nbsp;&lt;title&gt;<span style={{ color: 'var(--color-text)' }}>Page Title (max 60 chars)</span>&lt;/title&gt;<br />
            &nbsp;&nbsp;&lt;meta name=&quot;description&quot; content=&quot;<span style={{ color: 'var(--color-text)' }}>Description (max 160 chars)</span>&quot;&gt;<br />
            &nbsp;&nbsp;&lt;meta property=&quot;og:image&quot; content=&quot;<span style={{ color: 'var(--color-accent)' }}>image-url</span>&quot;&gt;<br />
            &nbsp;&nbsp;&lt;link rel=&quot;canonical&quot; href=&quot;<span style={{ color: 'var(--color-accent)' }}>canonical-url</span>&quot;&gt;<br />
            <span style={{ color: 'var(--color-text-subtle)' }}>&lt;/head&gt;</span>
          </div>
          <div className="comp-schema">
            <table className="comp-schema-table">
              <thead><tr><th>Field</th><th>Type</th><th></th></tr></thead>
              <tbody>
                <tr><td><code>metaTitle</code></td><td>string (max 60)</td><td className="comp-field-req">required</td></tr>
                <tr><td><code>metaDescription</code></td><td>text (max 160)</td><td></td></tr>
                <tr><td><code>ogImage</code></td><td>media (images)</td><td></td></tr>
                <tr><td><code>canonicalUrl</code></td><td>string</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  )
}
