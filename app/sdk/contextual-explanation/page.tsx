import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Contextual Explanation',
  description: 'A structured explanation component for presenting system changes, agent decisions, or automated actions.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Contextual Explanation</h1>
      <p>A structured explanation component for presenting system changes, agent decisions, or automated actions with supporting details and action buttons.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_contextual_explanation_bacc3b8c92.png" alt="Contextual Explanation Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact contextual-explanation`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXContextualExplanation, useContextualExplanationAction } from "@/hax/artifacts/contextual-explanation";

export function SystemEventsPage() {
  const [artifacts, setArtifacts] = useState([]);

  useContextualExplanationAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXContextualExplanation
      title="Network Routing Update"
      alertTitle="Why this happened"
      alertDescription="Agent detected high latency"
      details={details}
    />
  );
}`}</code></pre>
    </main>
  )
}
