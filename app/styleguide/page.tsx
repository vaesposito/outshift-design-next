import type { Metadata } from 'next'
import { asset } from '@/lib/asset'
import './styleguide.css'

export const metadata: Metadata = {
  title: 'Outshift Design — Style Guide',
  description: 'The Outshift Design style guide: color palette, typography, components, spacing, and usage patterns.',
}

export default function StyleguidePage() {
  return (
    <div className="sg-container">

      {/* COLOR PALETTE */}
      <div className="sg-section">
        <p className="sg-section-title">Foundation</p>
        <h2 className="sg-section-heading">Color Palette</h2>
        <p className="sg-section-desc">The Outshift Design color system is built on a neutral, professional base with strategic accent colors for emphasis and interaction.</p>

        <p className="sg-component-label" style={{ marginTop: 32 }}>Light Mode — Primary Colors</p>
        <div className="sg-colors">
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#293247' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Ink</p>
              <p className="sg-color-hex">#293247</p>
              <p className="sg-color-usage">Primary text, headings, logo</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#67707F' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Slate</p>
              <p className="sg-color-hex">#67707F</p>
              <p className="sg-color-usage">Body text, descriptions</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#59616B' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Stone</p>
              <p className="sg-color-hex">#59616B</p>
              <p className="sg-color-usage">Captions, metadata, labels</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(41,50,71,0.08)' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">White</p>
              <p className="sg-color-hex">#FFFFFF</p>
              <p className="sg-color-usage">Page background, cards</p>
            </div>
          </div>
        </div>

        <p className="sg-component-label" style={{ marginTop: 40 }}>Dark Mode — Primary Colors</p>
        <div className="sg-colors">
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#0f1117' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Void</p>
              <p className="sg-color-hex">#0f1117</p>
              <p className="sg-color-usage">Page background</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#e0e4ec' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Snow</p>
              <p className="sg-color-hex">#e0e4ec</p>
              <p className="sg-color-usage">Primary text, headings</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#9ca3b0' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Fog</p>
              <p className="sg-color-hex">#9ca3b0</p>
              <p className="sg-color-usage">Body text, descriptions</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#8a919c' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Ash</p>
              <p className="sg-color-hex">#8a919c</p>
              <p className="sg-color-usage">Captions, metadata, labels</p>
            </div>
          </div>
        </div>

        <p className="sg-component-label" style={{ marginTop: 40 }}>Accent Colors</p>
        <div className="sg-colors">
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#00BCEB' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Cyan</p>
              <p className="sg-color-hex">#00BCEB</p>
              <p className="sg-color-usage">Links, CTAs, interactive</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#187ADC' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Blue</p>
              <p className="sg-color-hex">#187ADC</p>
              <p className="sg-color-usage">Hover states, active links</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#9345E1' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Violet</p>
              <p className="sg-color-hex">#9345E1</p>
              <p className="sg-color-usage">Gradient accent</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#D2C2FF' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Lavender</p>
              <p className="sg-color-hex">#D2C2FF</p>
              <p className="sg-color-usage">Section backgrounds (15% alpha)</p>
            </div>
          </div>
        </div>

        <p className="sg-component-label" style={{ marginTop: 40 }}>Brand Gradient</p>
        <div className="sg-colors">
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#74BF4B' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Green</p>
              <p className="sg-color-hex">#74BF4B</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#F5B35C' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Amber</p>
              <p className="sg-color-hex">#F5B35C</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#F09256' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Orange</p>
              <p className="sg-color-hex">#F09256</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: '#EB7251' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Coral</p>
              <p className="sg-color-hex">#EB7251</p>
            </div>
          </div>
        </div>

        <p className="sg-component-label" style={{ marginTop: 40 }}>Gradients</p>
        <p className="sg-gradient-label">Brand Gradient (button borders)</p>
        <div className="sg-gradient-bar" style={{ background: 'linear-gradient(294deg, #9345E1, #187ADC, #00BCEB, #74BF4B, #F5B35C, #F09256, #EB7251)' }} />

        <p className="sg-gradient-label" style={{ marginTop: 24 }}>Card Stroke Gradient (research cards)</p>
        <div className="sg-gradient-bar" style={{ background: 'linear-gradient(to right, rgba(77, 99, 128, 0.21), #2268BE)' }} />

        <p className="sg-gradient-label" style={{ marginTop: 24 }}>Section Background</p>
        <div className="sg-gradient-bar" style={{ background: 'var(--color-preview-bg)', border: '1px solid var(--color-border)' }} />

        <p className="sg-component-label" style={{ marginTop: 40 }}>Borders &amp; Overlays</p>
        <div className="sg-colors" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: 'rgba(41, 50, 71, 0.08)', borderBottom: '1px solid rgba(41,50,71,0.08)' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Border Light</p>
              <p className="sg-color-hex">rgba(41, 50, 71, 0.08)</p>
              <p className="sg-color-usage">Dividers, card borders</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: 'rgba(41, 50, 71, 0.15)' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Border Medium</p>
              <p className="sg-color-hex">rgba(41, 50, 71, 0.15)</p>
              <p className="sg-color-usage">Buttons, tags, arrow links</p>
            </div>
          </div>
          <div className="sg-color-card">
            <div className="sg-color-swatch" style={{ background: 'rgba(41, 50, 71, 0.7)' }} />
            <div className="sg-color-info">
              <p className="sg-color-name">Overlay Dark</p>
              <p className="sg-color-hex">rgba(41, 50, 71, 0.7)</p>
              <p className="sg-color-usage">Badges, overlays</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="sg-divider" />

      {/* TYPOGRAPHY */}
      <div className="sg-section">
        <p className="sg-section-title">Foundation</p>
        <h2 className="sg-section-heading">Typography</h2>
        <p className="sg-section-desc">Inter Variable is used across all weights. The type scale pairs light display headings with semibold emphasis for visual hierarchy.</p>

        <p className="sg-component-label">Typeface</p>
        <div style={{ fontSize: '3em', fontWeight: 200, marginBottom: 4 }}>Inter Variable</div>
        <div style={{ fontSize: '1em', color: 'var(--color-text-subtle)', marginBottom: 40, fontFamily: "'SF Mono', 'Fira Code', monospace" }}>font-family: InterVariable, sans-serif</div>

        <p className="sg-component-label">Font Weights</p>
        <div className="sg-weights">
          <div className="sg-weight-card">
            <div className="sg-weight-sample" style={{ fontWeight: 200 }}>Aa</div>
            <div className="sg-weight-label">Extra Light</div>
            <div className="sg-weight-value">200</div>
          </div>
          <div className="sg-weight-card">
            <div className="sg-weight-sample" style={{ fontWeight: 400 }}>Aa</div>
            <div className="sg-weight-label">Regular</div>
            <div className="sg-weight-value">400</div>
          </div>
          <div className="sg-weight-card">
            <div className="sg-weight-sample" style={{ fontWeight: 500 }}>Aa</div>
            <div className="sg-weight-label">Medium</div>
            <div className="sg-weight-value">500</div>
          </div>
          <div className="sg-weight-card">
            <div className="sg-weight-sample" style={{ fontWeight: 600 }}>Aa</div>
            <div className="sg-weight-label">Semibold</div>
            <div className="sg-weight-value">600</div>
          </div>
        </div>

        <p className="sg-component-label" style={{ marginTop: 48 }}>Type Scale</p>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h1&gt;</div>
            <div className="sg-type-specs">4em / 64px<br />Weight 200</div>
          </div>
          <div className="sg-type-sample">
            <h1 className="demo-h1">Display Light</h1>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h2&gt;</div>
            <div className="sg-type-specs">4em / 64px<br />Weight 600</div>
          </div>
          <div className="sg-type-sample">
            <h2 className="demo-h2">Display Bold</h2>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h3&gt;</div>
            <div className="sg-type-specs">3em / 48px<br />Weight 200</div>
          </div>
          <div className="sg-type-sample">
            <h3 className="demo-h3">Section Heading</h3>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h4&gt;</div>
            <div className="sg-type-specs">1.2em / 19px<br />Weight 600</div>
          </div>
          <div className="sg-type-sample">
            <h4 className="demo-h4">Subtitle — used for section descriptions and supporting text beneath headings</h4>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h5&gt;</div>
            <div className="sg-type-specs">1.5em / 24px<br />Weight 200<br />Line-height: 1.6</div>
          </div>
          <div className="sg-type-sample">
            <h5 className="demo-h5">Lead paragraph — used for hero introductions and prominent body copy that requires extra emphasis.</h5>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;h6&gt;</div>
            <div className="sg-type-specs">0.8em / 13px<br />Weight 600<br />Uppercase<br />Tracking: 1.8px</div>
          </div>
          <div className="sg-type-sample">
            <h6 className="demo-h6">Overline Label</h6>
          </div>
        </div>

        <div className="sg-type-row">
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;p&gt; body</div>
            <div className="sg-type-specs">1.05em / 17px<br />Weight 400<br />Line-height: 1.6</div>
          </div>
          <div className="sg-type-sample">
            <p className="demo-body">Body text is used for descriptions, card content, and general reading. It provides comfortable readability with generous line-height.</p>
          </div>
        </div>

        <div className="sg-type-row" style={{ borderBottom: 'none' }}>
          <div className="sg-type-meta">
            <div className="sg-type-tag">&lt;small&gt; caption</div>
            <div className="sg-type-specs">0.85em / 14px<br />Weight 400</div>
          </div>
          <div className="sg-type-sample">
            <p className="demo-caption">Caption and metadata text — timestamps, reading time, copyright notices.</p>
          </div>
        </div>
      </div>

      <hr className="sg-divider" />

      {/* COMPONENTS */}
      <div className="sg-section">
        <p className="sg-section-title">Components</p>
        <h2 className="sg-section-heading">UI Elements</h2>
        <p className="sg-section-desc">Reusable components used across the Outshift Design site, from buttons and badges to interactive link elements.</p>

        <div className="sg-component-grid">
          <div className="sg-component-card">
            <p className="sg-component-label">Buttons</p>
            <div className="sg-component-demo" style={{ gap: 20 }}>
              <button className="demo-btn">See Our Work</button>
              <button className="demo-btn demo-btn-sm">View All Articles</button>
            </div>
            <p className="demo-caption" style={{ marginTop: 16 }}>Gradient border via mask composite. Padding: 18px 24px. Radius: 40px.</p>
          </div>

          <div className="sg-component-card">
            <p className="sg-component-label">Badges</p>
            <div className="sg-component-demo">
              <span className="demo-badge">SDK</span>
              <span className="demo-badge">AI/ML</span>
              <span className="demo-badge">Research</span>
            </div>
            <p className="demo-caption" style={{ marginTop: 16 }}>Overlay dark bg, white text, uppercase. Radius: 6px. Backdrop blur: 8px.</p>
          </div>

          <div className="sg-component-card">
            <p className="sg-component-label">Tags</p>
            <div className="sg-component-demo">
              <a href="#" className="demo-tag">AI Agents</a>
              <a href="#" className="demo-tag">Design Systems</a>
              <a href="#" className="demo-tag">Connectivity</a>
            </div>
            <p className="demo-caption" style={{ marginTop: 16 }}>Pill-shaped, border medium. Radius: 20px. Padding: 4px 12px.</p>
          </div>

          <div className="sg-component-card">
            <p className="sg-component-label">Arrow Links</p>
            <div className="sg-component-demo" style={{ gap: 20 }}>
              <a href="#" className="demo-arrow-link">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M12 4H5M12 4V11"/></svg>
              </a>
              <a href="#" className="demo-read-more">Read more</a>
            </div>
            <p className="demo-caption" style={{ marginTop: 16 }}>40x40px icon button (radius 10px) and inline text link.</p>
          </div>
        </div>
      </div>

      <hr className="sg-divider" />

      {/* RESEARCH CARD */}
      <div className="sg-section">
        <p className="sg-section-title">Components</p>
        <h2 className="sg-section-heading">Research Card</h2>
        <p className="sg-section-desc">Cards used on the Research page. 7/12 width, gradient stroke border, alternating left/right alignment, with hover lift and image zoom.</p>

        <div className="sg-research-card-demo">
          <div className="sg-demo-rcard">
            <div className="sg-demo-rcard-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset('/images/research/foundational-principles.png')} alt="Foundational Principles" />
            </div>
            <div className="sg-demo-rcard-text">
              <h3>Foundational Principles</h3>
              <p>We build foundational design principles and frameworks for AI-human interaction.</p>
              <a href="#" className="demo-read-more">Read more</a>
            </div>
          </div>
        </div>
        <p className="demo-caption" style={{ marginTop: 16 }}>Width: 7/12 (58.333%). Padding: 32px. Radius: 20px. Stroke: gradient border via mask composite (4D6380 21% &rarr; 2268BE 100%). Title: 21px/600. Text: 14px/600. Hover: translateY(-4px) + shadow + image scale(1.05).</p>
      </div>

      <hr className="sg-divider" />

      {/* CUSTOM CURSOR */}
      <div className="sg-section">
        <p className="sg-section-title">Components</p>
        <h2 className="sg-section-heading">Custom Cursor</h2>
        <p className="sg-section-desc">A mix-blend-mode: difference cursor that inverts against the background. Scales 2x on interactive elements with a gray border ring.</p>

        <div style={{ padding: 32, borderRadius: 16, border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 24 }}>
            <div style={{ width: 20, height: 20, borderRadius: 9999, background: '#fff', mixBlendMode: 'difference' }} />
            <span className="demo-caption">Default (20px)</span>
            <div style={{ width: 40, height: 40, borderRadius: 9999, background: '#fff', mixBlendMode: 'difference', border: '5px solid #b4b4b4' }} />
            <span className="demo-caption">Hover (scale 2x + border)</span>
          </div>
        </div>
        <p className="demo-caption" style={{ marginTop: 16 }}>Size: 20px. Blend: difference. Transition: 0.25s cubic-bezier(0.78, 0, 0.22, 1). Border on hover: solid #b4b4b4. Hides on mouseout (scale 0). Pointer: fine only.</p>
      </div>

      <hr className="sg-divider" />

      {/* SPACING */}
      <div className="sg-section">
        <p className="sg-section-title">Foundation</p>
        <h2 className="sg-section-heading">Spacing &amp; Radius</h2>
        <p className="sg-section-desc">Consistent spacing and border radius values create rhythm and cohesion across the interface.</p>

        <p className="sg-component-label">Spacing Scale</p>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">xs</span>
          <div className="sg-spacing-bar" style={{ width: 8 }} />
          <span className="sg-spacing-value">8px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">sm</span>
          <div className="sg-spacing-bar" style={{ width: 16 }} />
          <span className="sg-spacing-value">16px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">md</span>
          <div className="sg-spacing-bar" style={{ width: 24 }} />
          <span className="sg-spacing-value">24px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">lg</span>
          <div className="sg-spacing-bar" style={{ width: 32 }} />
          <span className="sg-spacing-value">32px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">xl</span>
          <div className="sg-spacing-bar" style={{ width: 40 }} />
          <span className="sg-spacing-value">40px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">2xl</span>
          <div className="sg-spacing-bar" style={{ width: 60 }} />
          <span className="sg-spacing-value">60px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">3xl</span>
          <div className="sg-spacing-bar" style={{ width: 80 }} />
          <span className="sg-spacing-value">80px</span>
        </div>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">4xl</span>
          <div className="sg-spacing-bar" style={{ width: 110 }} />
          <span className="sg-spacing-value">110px</span>
        </div>

        <p className="sg-component-label" style={{ marginTop: 48 }}>Container</p>
        <div className="sg-spacing-row">
          <span className="sg-spacing-label">padding</span>
          <div className="sg-spacing-bar" style={{ width: 100, position: 'relative' }}><span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', fontSize: '0.7em', color: 'var(--color-text-subtle)', whiteSpace: 'nowrap' }}>0 10%</span></div>
          <span className="sg-spacing-value">0 10%</span>
        </div>
        <p className="demo-caption" style={{ marginTop: 4 }}>Content container uses percentage-based horizontal padding for responsive scaling.</p>

        <p className="sg-component-label" style={{ marginTop: 48 }}>Border Radius</p>
        <div className="sg-radius-grid">
          <div className="sg-radius-card" style={{ borderRadius: 6 }}>6px</div>
          <div className="sg-radius-card" style={{ borderRadius: 8 }}>8px</div>
          <div className="sg-radius-card" style={{ borderRadius: 10 }}>10px</div>
          <div className="sg-radius-card" style={{ borderRadius: 12 }}>12px</div>
          <div className="sg-radius-card" style={{ borderRadius: 16 }}>16px</div>
          <div className="sg-radius-card" style={{ borderRadius: 20 }}>20px</div>
          <div className="sg-radius-card" style={{ borderRadius: 40 }}>40px</div>
        </div>
      </div>

      <hr className="sg-divider" />

      {/* USAGE EXAMPLES */}
      <div className="sg-section">
        <p className="sg-section-title">Patterns</p>
        <h2 className="sg-section-heading">Usage Examples</h2>
        <p className="sg-section-desc">How typography and color combine in context across the site.</p>

        <p className="sg-component-label">Hero Pairing</p>
        <div style={{ padding: '40px 0 48px' }}>
          <h1 className="demo-h1" style={{ margin: 0 }}>Design evolves fast</h1>
          <h2 className="demo-h2" style={{ margin: '4px 0 0' }}>We evolve faster</h2>
        </div>

        <p className="sg-component-label">Section Header Pattern</p>
        <div style={{ textAlign: 'center', padding: '32px 0 48px' }}>
          <h6 className="demo-h6">Initiatives</h6>
          <h3 className="demo-h3" style={{ margin: '8px 0 12px' }}>Featured Initiatives</h3>
          <h4 className="demo-h4" style={{ maxWidth: 500, margin: '0 auto' }}>Explore our recent projects and see how we&apos;re shaping the future of enterprise software.</h4>
        </div>

        <p className="sg-component-label">Card on Gradient Background</p>
        <div className="sg-dark-preview">
          <div className="sg-example-card" style={{ background: 'var(--color-bg)', borderRadius: 16, border: '1px solid var(--color-border)', padding: 40, maxWidth: 380 }}>
            <h4 style={{ fontSize: 24, fontWeight: 500, color: 'var(--color-text)', margin: '0 0 20px', lineHeight: 1.3 }}>The Future of Design Systems</h4>
            <p className="demo-body" style={{ margin: '0 0 24px' }}>How we built a scalable design system that powers hundreds of products.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="demo-caption">5 min read</span>
              <a href="#" className="demo-read-more">Read more</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
