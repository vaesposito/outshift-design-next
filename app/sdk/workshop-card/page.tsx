import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Workshop Card',
  description: 'A rich event display component for presenting scheduled workshops, webinars, meetings, and conferences.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Workshop Card</h1>
      <p>A rich event display component for presenting scheduled workshops, webinars, meetings, and conferences with attendee information, RSVP options, and status indicators.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/v4_sdk_workshop_card_bcfbb0fc52.png" alt="Workshop Card Preview" />
      </div>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact workshop-card`}</code></pre>
      <h2>Component Setup</h2>
      <pre><code>{`import { HAXWorkshopCard, useWorkshopCardAction } from "@/hax/artifacts/workshop-card";

export function EventsPage() {
  const [artifacts, setArtifacts] = useState([]);

  useWorkshopCardAction({
    addOrUpdateArtifact: (type, data) => {
      setArtifacts(prev => [...prev, { type, data, id: Date.now() }]);
    }
  });

  return (
    <HAXWorkshopCard
      title="AI Development Workshop"
      eventType="Workshop"
      status="confirmed"
      date="Tuesday, January 15, 2025"
      attendeeCount={25}
    />
  );
}`}</code></pre>
    </main>
  )
}
