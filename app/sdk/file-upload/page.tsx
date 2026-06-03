import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — File Upload',
  description: 'A file sharing system that integrates with chat interfaces to provide seamless file upload capabilities with AI agents.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>File Upload</h1>
      <p>A file sharing system that integrates with chat interfaces to provide seamless file upload capabilities with AI agents. Supports drag-and-drop, file picker, and inline file management.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-fileupload.png" alt="File Upload Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add composer file-upload`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { useFileUploadAction, FilePickerInput } from "@/hax/composer/file-upload";

export function ChatWithFileUpload() {
  const [artifacts, setArtifacts] = useState([]);

  useFileUploadAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data }]);
    }
  });

  return (
    <FilePickerInput onFileSelection={handleFiles} dragAndDropEnabled={true} />
  );
}`}</code></pre>
    </main>
  )
}
