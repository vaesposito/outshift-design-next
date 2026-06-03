import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Findings',
  description: 'A component for displaying key insights, recommendations, or discoveries with source attribution chips.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Findings</h1>
      <p>A component for displaying key insights, recommendations, or discoveries with source attribution chips for credibility and verification.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_findings_2b1f14920b.png" alt="Findings Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact findings`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXFindings, useFindingsAction } from "@/hax/artifacts/findings";

export function ResearchPage() {
  const [artifacts, setArtifacts] = useState([]);

  useFindingsAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXFindings
      title="Security Audit Results"
      findings={auditFindings}
    />
  );
}`}</code></pre>
    </main>
  )
}
