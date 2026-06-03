import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Rules Context',
  description: 'A powerful rule management system that allows users to create, configure, and apply behavioral rules that govern how AI agents respond in different scenarios.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Rules Context</h1>
      <p>A powerful rule management system that allows users to create, configure, and apply behavioral rules that govern how AI agents respond in different scenarios.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-rulescontext.png" alt="Rules Context Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add composer rules-context`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { RulesProvider, useRules, RulesModal } from "@/hax/composer/rules-context";

export function ChatWithRules() {
  const [showRulesModal, setShowRulesModal] = useState(false);

  return (
    <RulesProvider>
      <button onClick={() => setShowRulesModal(true)}>Manage Rules</button>
      <RulesModal open={showRulesModal} onOpenChange={setShowRulesModal} />
    </RulesProvider>
  );
}`}</code></pre>
    </main>
  )
}
