import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — Rich Text Editor',
  description: 'Rich text editing with live formatting and collaborative features.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>Rich Text Editor</h1>
      <p>Rich text editing with live formatting and collaborative features.</p>
      <div className="preview-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://cisco-outshift.s3.ap-south-1.amazonaws.com/agntcy/v4-sdk-wysiwygeditor.jpg" alt="Rich Text Editor Preview" />
      </div>
      <div className="coming-soon">Coming Soon</div>
    </main>
  )
}
