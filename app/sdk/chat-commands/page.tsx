import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Chat Commands',
  description: 'An enhanced chat interface system that transforms traditional text conversations into structured, command-driven interactions.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Chat Commands</h1>
      <p>An enhanced chat interface system that transforms traditional text conversations into structured, command-driven interactions. Enables precise agent delegation and tool execution.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-chatcommands.png" alt="Chat Commands Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add composer chat-commands`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { CommandRegistryProvider, useChatCommands, CommandSuggestions } from "@/hax/composer/chat-commands";

export function EnhancedChat() {
  const { commandType, showSuggestions, detectCommand } = useChatCommands();

  return (
    <CommandRegistryProvider>
      <div className="chat-interface">
        <textarea onChange={(e) => detectCommand(e.target.value, e.target.selectionStart)} />
        <CommandSuggestions showSuggestions={showSuggestions} commandType={commandType} />
      </div>
    </CommandRegistryProvider>
  );
}`}</code></pre>
    </main>
  )
}
