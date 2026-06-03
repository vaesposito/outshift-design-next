import type { Metadata } from 'next'
import Link from 'next/link'
import './sdk.css'

export const metadata: Metadata = {
  title: 'Outshift Design — HAX SDK',
  description: 'A high-performance, customizable React component library for building modern web apps with advanced human-agent behavior patterns.',
}

// The SDK component detail pages (sdk-pages/*.html) are static-only and are not
// part of this Next.js migration. They remain reachable on the original static
// deployment, so we link out to them there.
const STATIC_BASE = 'https://vaesposito.github.io/outshift-design'
const sdkPage = (file: string) => `${STATIC_BASE}/sdk-pages/${file}`

const COMPONENT_LINKS = [
  ['Source Attribution', 'source-attribution.html'],
  ['Timeline', 'timeline.html'],
  ['Details Dashboard', 'details-dashboard.html'],
  ['Data Visualizer', 'data-visualizer.html'],
  ['Mindmap', 'mindmap.html'],
  ['Form Builder', 'form-builder.html'],
  ['Code Editor', 'code-editor.html'],
  ['Inline Rationale', 'inline-rationale.html'],
  ['Capability Manifest', 'capability-manifest.html'],
  ['Workshop Card', 'workshop-card.html'],
  ['Contextual Explanation', 'contextual-explanation.html'],
  ['Findings', 'findings.html'],
  ['Diagnostic Report', 'diagnostic-report.html'],
  ['Rich Text Editor', 'rich-text-editor.html'],
  ['Co-Editing Interface', 'co-editing-interface.html'],
  ['Thinking Process', 'thinking-process.html'],
]

const ADDON_LINKS = [
  ['Chat Commands', 'chat-commands.html'],
  ['File Upload', 'file-upload.html'],
  ['Rules Context', 'rules-context.html'],
]

const COMPONENT_CARDS = [
  { id: 'timeline', file: 'timeline.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_timeline_8570b08804.png', title: 'Timeline', desc: 'Dynamic timeline component with interactive action points' },
  { id: 'mindmap', file: 'mindmap.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_mindmap_357455c6f9.png', title: 'Mindmap', desc: 'Interactive mind mapping component for visual brainstorming and organization' },
  { id: 'details-dashboard', file: 'details-dashboard.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_details_dashboard_835145a3e7.png', title: 'Details Dashboard', desc: 'Comprehensive data display for entities, topics, and processes' },
  { id: 'data-visualizer', file: 'data-visualizer.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_data_visualizer_ea095ad957.png', title: 'Charts', desc: 'Create and edit interactive charts collaboratively within your app' },
  { id: 'code-editor', file: 'code-editor.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_code_editor_c829ba648c.png', title: 'Code Editor', desc: 'Collaborative code editing with syntax highlighting and real-time feedback' },
  { id: 'form-builder', file: 'form-builder.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_form_builder_3c605a1fae.png', title: 'Forms', desc: 'Compare versions of forms or UI visually to highlight changes' },
  { id: 'source-attribution', file: 'source-attribution.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_source_attribution_df5cc12f96.png', title: 'Source Attribution', desc: 'Transparent citations with verifiable sources for research findings' },
  { id: 'inline-rationale', file: 'inline-rationale.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_inline_rationale_c95093e87a.png', title: 'Inline Rationale', desc: 'AI-driven assessments with intent-based visual theming' },
  { id: 'capability-manifest', file: 'capability-manifest.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_capability_manifest_6dca181fbd.png', title: 'Capability Manifest', desc: 'Display agent capabilities, constraints, and connection status' },
  { id: 'workshop-card', file: 'workshop-card.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_workshop_card_bcfbb0fc52.png', title: 'Workshop Card', desc: 'Rich event display with attendees, RSVP, and status indicators' },
  { id: 'contextual-explanation', file: 'contextual-explanation.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_contextual_explanation_bacc3b8c92.png', title: 'Contextual Explanation', desc: 'Structured explanations for system changes and agent decisions' },
  { id: 'findings', file: 'findings.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_findings_2b1f14920b.png', title: 'Findings', desc: 'Key insights and recommendations with source attribution' },
  { id: 'diagnostic-report', file: 'diagnostic-report.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_diagnostic_report_7b255baa32.png', title: 'Diagnostic Report', desc: 'Diagnostic findings with confidence levels and recommendations' },
  { id: 'thinking-process', file: 'thinking-process.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_thinking_process_a40f14a67e.png', title: 'Thinking Process', desc: 'Visualize AI reasoning, decision-making steps, and workflow progress' },
  { id: 'co-editing-interface', file: 'co-editing-interface.html', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/co_editing_a154972dd5.png', title: 'Co-Editing Interface', desc: 'Shared revision space for reviewing and adjusting agent output' },
  { id: 'rich-text-editor', file: 'rich-text-editor.html', img: 'https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-wysiwygeditor.jpg', title: 'Rich Text Editor', desc: 'Rich text editing with live formatting and collaborative features' },
]

export default function SdkPage() {
  return (
    <div className="sdk-layout">
      {/* Sidebar */}
      <aside className="sdk-sidebar">
        <div className="sdk-sidebar-section">
          <div className="sdk-sidebar-title">SDK</div>
          <Link href="/sdk" className="sdk-sidebar-link is-active">Introduction</Link>
          <a href={sdkPage('installation.html')} target="_blank" rel="noopener noreferrer" className="sdk-sidebar-link">Installation</a>
          <a href={sdkPage('custom-repositories.html')} target="_blank" rel="noopener noreferrer" className="sdk-sidebar-link">Custom Repositories</a>
        </div>
        <div className="sdk-sidebar-section">
          <div className="sdk-sidebar-title">Components</div>
          {COMPONENT_LINKS.map(([label, file]) => (
            <a key={file} href={sdkPage(file)} target="_blank" rel="noopener noreferrer" className="sdk-sidebar-link">{label}</a>
          ))}
        </div>
        <div className="sdk-sidebar-section">
          <div className="sdk-sidebar-title">Add Ons</div>
          {ADDON_LINKS.map(([label, file]) => (
            <a key={file} href={sdkPage(file)} target="_blank" rel="noopener noreferrer" className="sdk-sidebar-link">{label}</a>
          ))}
        </div>
        <div className="sdk-sidebar-section">
          <div className="sdk-sidebar-title">Resources</div>
          <Link href="/styleguide" className="sdk-sidebar-link">Style Guide</Link>
          <Link href="/components" className="sdk-sidebar-link">Strapi Components</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="sdk-main" id="introduction">
        <h1>What is the Hax SDK</h1>
        <p>A high-performance, customizable React component library for building modern web apps with advanced human-agent behavior patterns.</p>
        <p>HAX SDK gives you ready-to-use, flexible React components designed for seamless integration of human-like agent interactions. Easily connect your app&apos;s state, logic, and context to interactive UI elements that support human workflows across interfaces.</p>
        <p>With the SDK, you can rapidly build, deploy, and monitor features that feel intuitive and deeply integrated. Its model-agnostic architecture lets you adopt your agent framework over time without reworking your app&apos;s core experience.</p>
        <a href="https://github.com/outshift-open/hax" target="_blank" rel="noopener noreferrer" className="sdk-github-btn">Github Repo</a>

        <h2 id="components">Components</h2>
        <div className="components-grid">
          {COMPONENT_CARDS.map((c) => (
            <a key={c.id} className="component-card" id={c.id} href={sdkPage(c.file)} target="_blank" rel="noopener noreferrer">
              <div className="component-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} />
              </div>
              <div className="component-card-body"><h3>{c.title}</h3><p>{c.desc}</p></div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
