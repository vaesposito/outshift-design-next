import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Thinking Process',
  description: 'A component for visualizing AI reasoning, decision-making steps, and workflow progress with collapsible sections and status indicators.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Thinking Process</h1>
      <p>A component for visualizing AI reasoning, decision-making steps, and workflow progress with collapsible sections and status indicators.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_thinking_process_a40f14a67e.png" alt="Thinking Process Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact thinking-process`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXThinkingProcess, useThinkingProcessAction } from "@/hax/artifacts/thinking-process";

export function AnalysisPage() {
  const [artifacts, setArtifacts] = useState([]);

  useThinkingProcessAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXThinkingProcess
      title="AI Reasoning"
      steps={reasoningSteps}
      metrics={metrics}
    />
  );
}`}</code></pre>
    </main>
  )
}
