import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Source Attribution',
  description: 'A transparent citation component for displaying claims with their supporting sources as clickable badges.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Source Attribution</h1>
      <p>A transparent citation component for displaying claims with their supporting sources as clickable badges. Perfect for research findings, recommendations, and fact-checking.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_source_attribution_df5cc12f96.png" alt="Source Attribution Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact source-attribution`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXSourceAttribution, useSourceAttributionAction } from "@/hax/artifacts/source-attribution";

export function ResearchPage() {
  const [artifacts, setArtifacts] = useState([]);

  useSourceAttributionAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle source attribution updates
    }
  });

  return (
    <HAXSourceAttribution
      title="Market Research Findings"
      claim="The global AI market is expected to reach $1.8 trillion by 2030"
      sources={researchSources}
    />
  );
}`}</code></pre>
    </main>
  )
}
