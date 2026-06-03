import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Capability Manifest',
  description: 'A component for displaying AI agent capabilities, constraints, alerts, and connection status.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Capability Manifest</h1>
      <p>A component for displaying AI agent capabilities, constraints, alerts, and connection status. Essential for setting user expectations during agent initialization.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_capability_manifest_6dca181fbd.png" alt="Capability Manifest Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact capability-manifest`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXCapabilityManifest, useCapabilityManifestAction } from "@/hax/artifacts/capability-manifest";

export function AgentHandshake() {
  const [artifacts, setArtifacts] = useState([]);

  useCapabilityManifestAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXCapabilityManifest
      data={{
        agentName: "Data Analyst",
        capabilities: [
          { id: "1", name: "SQL Query", status: "enabled" }
        ],
        connectionStatus: "connected"
      }}
    />
  );
}`}</code></pre>
    </main>
  )
}
