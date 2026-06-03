import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Timeline',
  description: 'A chronological activity tracker with status indicators and AI agent integration.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Timeline</h1>
      <p>A chronological activity tracker with status indicators and AI agent integration. Perfect for project tracking, process workflows, and real-time status updates.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_timeline_8570b08804.png" alt="Timeline Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact timeline`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXTimeline, useTimelineAction } from "@/hax/artifacts/timeline";

export function ProjectTracker() {
  const [artifacts, setArtifacts] = useState([]);

  useTimelineAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle timeline updates
    }
  });

  return (
    <HAXTimeline
      title="Project Activity"
      items={timelineActivities}
    />
  );
}`}</code></pre>
    </main>
  )
}
