import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Custom Repositories',
  description: 'Extend HAX with custom component repositories to share artifacts, composers, and UI components across teams and organizations.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Custom Repositories</h1>
      <p>Extend HAX with custom component repositories to share artifacts, composers, and UI components across teams and organizations.</p>
      <h2>Overview</h2>
      <ul>
        <li>Share components internally across teams and projects</li>
        <li>Create private component libraries for your organization</li>
        <li>Fork and customize existing HAX components</li>
        <li>Distribute specialized components for specific domains</li>
        <li>Maintain version control over component updates</li>
      </ul>
      <h2>Repository Structure</h2>
      <pre><code>{`your-hax-repo/
├── cli/src/registry/github-registry/
│   ├── artifacts.json
│   ├── ui.json
│   └── composers.json
├── hax/
│   ├── artifacts/
│   ├── components/ui/
│   └── composers/
├── templates/
└── docs/`}</code></pre>
      <h2>Setting Up a Custom Repository</h2>
      <pre><code>{`# Initialize a new HAX registry repository
hax admin init-registry --github=your-org/your-hax-components

# Or initialize locally and push manually
mkdir my-hax-components
cd my-hax-components
hax admin init-registry --local`}</code></pre>
      <h2>Validate Registry</h2>
      <pre><code>{`hax admin validate-registry`}</code></pre>
    </main>
  )
}
