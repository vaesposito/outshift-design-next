import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Outshift Design — HAX SDK',
  description: 'A high-performance, customizable React component library for building modern web apps with advanced human-agent behavior patterns.',
}

const COMPONENT_CARDS = [
  { slug: 'timeline', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_timeline_8570b08804.png', title: 'Timeline', desc: 'Dynamic timeline component with interactive action points' },
  { slug: 'mindmap', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_mindmap_357455c6f9.png', title: 'Mindmap', desc: 'Interactive mind mapping component for visual brainstorming and organization' },
  { slug: 'details-dashboard', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_details_dashboard_835145a3e7.png', title: 'Details Dashboard', desc: 'Comprehensive data display for entities, topics, and processes' },
  { slug: 'data-visualizer', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_data_visualizer_ea095ad957.png', title: 'Charts', desc: 'Create and edit interactive charts collaboratively within your app' },
  { slug: 'code-editor', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_code_editor_c829ba648c.png', title: 'Code Editor', desc: 'Collaborative code editing with syntax highlighting and real-time feedback' },
  { slug: 'form-builder', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_form_builder_3c605a1fae.png', title: 'Forms', desc: 'Compare versions of forms or UI visually to highlight changes' },
  { slug: 'source-attribution', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_source_attribution_df5cc12f96.png', title: 'Source Attribution', desc: 'Transparent citations with verifiable sources for research findings' },
  { slug: 'inline-rationale', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_inline_rationale_c95093e87a.png', title: 'Inline Rationale', desc: 'AI-driven assessments with intent-based visual theming' },
  { slug: 'capability-manifest', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_capability_manifest_6dca181fbd.png', title: 'Capability Manifest', desc: 'Display agent capabilities, constraints, and connection status' },
  { slug: 'workshop-card', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_workshop_card_bcfbb0fc52.png', title: 'Workshop Card', desc: 'Rich event display with attendees, RSVP, and status indicators' },
  { slug: 'contextual-explanation', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_contextual_explanation_bacc3b8c92.png', title: 'Contextual Explanation', desc: 'Structured explanations for system changes and agent decisions' },
  { slug: 'findings', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_findings_2b1f14920b.png', title: 'Findings', desc: 'Key insights and recommendations with source attribution' },
  { slug: 'diagnostic-report', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_diagnostic_report_7b255baa32.png', title: 'Diagnostic Report', desc: 'Diagnostic findings with confidence levels and recommendations' },
  { slug: 'thinking-process', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_thinking_process_a40f14a67e.png', title: 'Thinking Process', desc: 'Visualize AI reasoning, decision-making steps, and workflow progress' },
  { slug: 'co-editing-interface', img: 'https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/co_editing_a154972dd5.png', title: 'Co-Editing Interface', desc: 'Shared revision space for reviewing and adjusting agent output' },
  { slug: 'rich-text-editor', img: 'https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-wysiwygeditor.jpg', title: 'Rich Text Editor', desc: 'Rich text editing with live formatting and collaborative features' },
]

export default function SdkPage() {
  return (
    <main className="sdk-main" id="introduction">
      <h1>What is the Hax SDK</h1>
      <p>A high-performance, customizable React component library for building modern web apps with advanced human-agent behavior patterns.</p>
      <p>HAX SDK gives you ready-to-use, flexible React components designed for seamless integration of human-like agent interactions. Easily connect your app&apos;s state, logic, and context to interactive UI elements that support human workflows across interfaces.</p>
      <p>With the SDK, you can rapidly build, deploy, and monitor features that feel intuitive and deeply integrated. Its model-agnostic architecture lets you adopt your agent framework over time without reworking your app&apos;s core experience.</p>
      <a href="https://github.com/outshift-open/hax" target="_blank" rel="noopener noreferrer" className="sdk-github-btn">Github Repo</a>

      <h2 id="components">Components</h2>
      <div className="components-grid">
        {COMPONENT_CARDS.map((c) => (
          <Link key={c.slug} className="component-card" id={c.slug} href={`/sdk/${c.slug}`}>
            <div className="component-card-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} />
            </div>
            <div className="component-card-body"><h3>{c.title}</h3><p>{c.desc}</p></div>
          </Link>
        ))}
      </div>
    </main>
  )
}
