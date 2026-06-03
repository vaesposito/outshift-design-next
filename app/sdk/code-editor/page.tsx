import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Code Editor',
  description: 'A powerful code editing component with syntax highlighting, multiple language support, and AI-assisted code generation.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Code Editor</h1>
      <p>A powerful code editing component with syntax highlighting, multiple language support, and AI-assisted code generation. Perfect for documentation, tutorials, and collaborative coding.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_code_editor_c829ba648c.png" alt="Code Editor Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact code-editor`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXCodeEditor, useCodeEditorAction } from "@/hax/artifacts/code-editor";

export function DocumentationPage() {
  const [artifacts, setArtifacts] = useState([]);

  useCodeEditorAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle code editor updates
    }
  });

  return (
    <HAXCodeEditor
      language="javascript"
      value={codeContent}
    />
  );
}`}</code></pre>
    </main>
  )
}
