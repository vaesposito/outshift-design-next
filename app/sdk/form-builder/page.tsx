import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Form Builder',
  description: 'A dynamic form component with validation, multiple field types, and user-friendly interfaces.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Form Builder</h1>
      <p>A dynamic form component with validation, multiple field types, and user-friendly interfaces. Perfect for registration, settings, surveys, and structured data entry.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_form_builder_3c605a1fae.png" alt="Form Builder Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact form`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXForm, useFormAction } from "@/hax/artifacts/form";

export function RegistrationPage() {
  const [artifacts, setArtifacts] = useState([]);

  useFormAction({
    addOrUpdateArtifact: (type, data) => {
      // Handle form updates
    }
  });

  return (
    <HAXForm
      title="User Registration"
      fields={formFields}
      onFormSubmit={handleFormSubmit}
    />
  );
}`}</code></pre>
    </main>
  )
}
