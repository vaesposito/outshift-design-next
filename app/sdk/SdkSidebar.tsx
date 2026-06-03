'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { label: string; href: string }
type NavSection = { title: string; items: NavItem[] }

const SECTIONS: NavSection[] = [
  {
    title: 'SDK',
    items: [
      { label: 'Introduction', href: '/sdk' },
      { label: 'Installation', href: '/sdk/installation' },
      { label: 'Custom Repositories', href: '/sdk/custom-repositories' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Source Attribution', href: '/sdk/source-attribution' },
      { label: 'Timeline', href: '/sdk/timeline' },
      { label: 'Details Dashboard', href: '/sdk/details-dashboard' },
      { label: 'Data Visualizer', href: '/sdk/data-visualizer' },
      { label: 'Mindmap', href: '/sdk/mindmap' },
      { label: 'Form Builder', href: '/sdk/form-builder' },
      { label: 'Code Editor', href: '/sdk/code-editor' },
      { label: 'Inline Rationale', href: '/sdk/inline-rationale' },
      { label: 'Capability Manifest', href: '/sdk/capability-manifest' },
      { label: 'Workshop Card', href: '/sdk/workshop-card' },
      { label: 'Contextual Explanation', href: '/sdk/contextual-explanation' },
      { label: 'Findings', href: '/sdk/findings' },
      { label: 'Diagnostic Report', href: '/sdk/diagnostic-report' },
      { label: 'Rich Text Editor', href: '/sdk/rich-text-editor' },
      { label: 'Co-Editing Interface', href: '/sdk/co-editing-interface' },
      { label: 'Thinking Process', href: '/sdk/thinking-process' },
    ],
  },
  {
    title: 'Add Ons',
    items: [
      { label: 'Chat Commands', href: '/sdk/chat-commands' },
      { label: 'File Upload', href: '/sdk/file-upload' },
      { label: 'Rules Context', href: '/sdk/rules-context' },
    ],
  },
]

export default function SdkSidebar() {
  const pathname = usePathname()
  const normalized = pathname?.replace(/\/$/, '') || '/sdk'

  return (
    <aside className="sdk-sidebar">
      {SECTIONS.map((section) => (
        <div className="sdk-sidebar-section" key={section.title}>
          <div className="sdk-sidebar-title">{section.title}</div>
          {section.items.map((item) => {
            const isActive = normalized === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sdk-sidebar-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      ))}
    </aside>
  )
}
