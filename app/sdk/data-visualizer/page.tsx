import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Data Visualizer',
  description: 'A powerful chart and graph component built on Chart.js for displaying quantitative data and trends.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Data Visualizer</h1>
      <p>A powerful chart and graph component built on Chart.js for displaying quantitative data and trends. Perfect for dashboards, analytics, and data-driven insights.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_data_visualizer_ea095ad957.png" alt="Data Visualizer Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact data-visualizer`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXDataVisualizer, useDataVisualizerAction } from "@/hax/artifacts/data-visualizer";

export function AnalyticsDashboard() {
  const [artifacts, setArtifacts] = useState([]);

  useDataVisualizerAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle chart updates
    }
  });

  return (
    <HAXDataVisualizer
      type="line"
      data={chartData}
      options={chartOptions}
    />
  );
}`}</code></pre>
    </main>
  )
}
