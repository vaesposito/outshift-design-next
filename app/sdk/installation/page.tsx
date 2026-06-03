import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Installation',
  description: 'Complete setup guide for installing and configuring HAX in your project.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Installation</h1>
      <p>Complete setup guide for installing and configuring HAX in your project.</p>
      <h2>Overview</h2>
      <p>HAX (Human-Agent eXperience) is a modular system that enhances chat interfaces with structured commands, behavioral rules, and external agent integration.</p>
      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js 18+ and npm</li>
        <li>An existing React/Next.js project</li>
        <li>CopilotKit already installed in your project</li>
      </ul>
      <h2>Install HAX</h2>
      <pre><code>{`npm install @outshift-open/hax
npm install -g @outshift-open/hax-cli`}</code></pre>
      <p>Initialize HAX in your project:</p>
      <pre><code>{`hax init`}</code></pre>
      <p>This creates:</p>
      <ul>
        <li><code>hax/</code> directory in your project root</li>
        <li>Base configuration files</li>
        <li>TypeScript definitions</li>
        <li>Initial project structure</li>
      </ul>
      <h2>Configure HAX</h2>
      <p>The <code>hax init</code> command creates a base configuration file at <code>hax/config.ts</code>:</p>
      <pre><code>{`export const haxConfig = {
  version: "1.0.0",
  components: [],
  chat: {
    enableCommands: false,
    enableFileUpload: false,
    enableRules: false,
  },
  adapter: {
    enabled: false,
    protocol: "REST",
    baseURL: "",
  }
};`}</code></pre>
      <h2>Add Components</h2>
      <p>Use the HAX CLI to add specific components to your project:</p>
      <pre><code>{`# Add an artifact component
hax add artifact source-attribution

# Add a composer
hax add composer chat-commands

# Add a UI component
hax add ui button`}</code></pre>
      <p>Each component is self-contained with its own types, actions, and rendering logic.</p>
    </main>
  )
}
