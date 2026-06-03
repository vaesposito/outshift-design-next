import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Mindmap',
  description: 'An interactive mindmap component for visualizing hierarchical relationships and branching concepts.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Mindmap</h1>
      <p>An interactive mindmap component for visualizing hierarchical relationships and branching concepts. Perfect for brainstorming sessions, project planning, and knowledge organization.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_mindmap_357455c6f9.png" alt="Mindmap Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact mindmap`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXMindmap, useMindmapAction } from "@/hax/artifacts/mindmap";

export function BrainstormingSession() {
  const [artifacts, setArtifacts] = useState([]);

  useMindmapAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle mindmap updates
    }
  });

  return (
    <HAXMindmap
      title="Project Planning"
      nodes={mindmapNodes}
      connections={mindmapConnections}
    />
  );
}`}</code></pre>
    </main>
  )
}
