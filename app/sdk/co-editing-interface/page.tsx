import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Co-Editing Interface',
  description: "A shared space where the agent's work is visible and open to revision, letting the user review changes, add comments, and adjust the output in place.",
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Co-Editing Interface</h1>
      <p>A shared space where the agent&apos;s work is visible and open to revision, letting the user review changes, add comments, and adjust the output in place.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://hax-design-prod-s3.s3.us-east-2.amazonaws.com/co_editing_a154972dd5.png" alt="Co-Editing Interface Preview" />
      </div>
      <div className="coming-soon">Coming Soon</div>
    </main>
  )
}
