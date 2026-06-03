import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Inline Rationale',
  description: 'A component for displaying AI-driven assessments, decisions, and explanations with intent-based visual theming.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Inline Rationale</h1>
      <p>A component for displaying AI-driven assessments, decisions, and explanations with intent-based visual theming. Ideal for security assessments, code reviews, and policy decisions.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_inline_rationale_c95093e87a.png" alt="Inline Rationale Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact inline-rationale`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXInlineRationale, useInlineRationaleAction } from "@/hax/artifacts/inline-rationale";

export function AssessmentPage() {
  const [artifacts, setArtifacts] = useState([]);

  useInlineRationaleAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXInlineRationale
      assessmentType="security_assessment"
      intent="block"
      title="SQL Injection Vulnerability Detected"
      confidence={95}
    />
  );
}`}</code></pre>
    </main>
  )
}
