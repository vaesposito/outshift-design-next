import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Diagnostic Report',
  description: 'A structured table component for presenting diagnostic findings with confidence levels, rationale, and actionable recommendations.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Diagnostic Report</h1>
      <p>A structured table component for presenting diagnostic findings with confidence levels, rationale, and actionable recommendations. Ideal for troubleshooting and root cause analysis.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_diagnostic_report_7b255baa32.png" alt="Diagnostic Report Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact diagnostic-report`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXDiagnosticReport, useDiagnosticReportAction } from "@/hax/artifacts/diagnostic-report";

export function TroubleshootingPage() {
  const [artifacts, setArtifacts] = useState([]);

  useDiagnosticReportAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXDiagnosticReport
      title="Service Degradation Analysis"
      items={diagnosticItems}
    />
  );
}`}</code></pre>
    </main>
  )
}
