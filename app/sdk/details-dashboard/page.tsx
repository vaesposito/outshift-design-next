import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Details Dashboard',
  description: 'A comprehensive information display component for presenting detailed data about entities, topics, or processes.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Details Dashboard</h1>
      <p>A comprehensive information display component for presenting detailed data about entities, topics, or processes. Perfect for dashboards, profile pages, and report summaries.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_details_dashboard_835145a3e7.png" alt="Details Dashboard Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact details`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXDetails, useDetailsAction } from "@/hax/artifacts/details";

export function ProfileDashboard() {
  const [artifacts, setArtifacts] = useState([]);

  useDetailsAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle details updates
    }
  });

  return (
    <HAXDetails
      title="User Profile"
      stats={topLevelStats}
      table={activityTable}
    />
  );
}`}</code></pre>
    </main>
  )
}
