'use client'

import { useState } from 'react'
import { asset } from '@/lib/asset'

interface PatternImage {
  light: string
  dark: string
  alt: string
}

interface Pattern {
  id: string
  label: string
  title: string
  desc: string
  images: PatternImage[]
}

function img(base: string, alt: string): PatternImage {
  return {
    light: `/images/patterns/${base}.svg`,
    dark: `/images/patterns/${base}-dark.svg`,
    alt,
  }
}

const PATTERNS: Pattern[] = [
  {
    id: 'control',
    label: 'Control',
    title: 'Control',
    desc: 'Humans guide how agents operate by setting boundaries, preferences, and intent. Control aligns autonomy with human goals.',
    images: [
      img('scope-boundaries', 'Scope & Boundaries'),
      img('permission-gates', 'Permission Gates'),
      img('customization-autonomy', 'Customization of Autonomy'),
    ],
  },
  {
    id: 'clarity',
    label: 'Clarity',
    title: 'Clarity',
    desc: 'Agents should make their reasoning, context, and confidence visible. Instead of acting like black boxes, they show how decisions are made so users can understand, question, or adjust them.',
    images: [
      img('clarity-1', 'Clarity pattern 1'),
      img('clarity-2', 'Clarity pattern 2'),
      img('clarity-3', 'Clarity pattern 3'),
      img('clarity-4', 'Clarity pattern 4'),
    ],
  },
  {
    id: 'recovery',
    label: 'Recovery',
    title: 'Recovery',
    desc: 'Agents will make mistakes, what matters is how fixable they are. Recovery means giving users clear, safe ways to undo actions, correct errors, and guide future behavior. It makes systems feel less brittle and more collaborative.',
    images: [
      img('recovery-1', 'Recovery pattern 1'),
      img('recovery-2', 'Recovery pattern 2'),
      img('recovery-3', 'Recovery pattern 3'),
      img('recovery-4', 'Recovery pattern 4'),
    ],
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    title: 'Collaboration',
    desc: 'Autonomous agents should act as capable partners, not just tools waiting for commands. Collaboration means shared context, back-and-forth interaction, and joint ownership of outcomes. The agent contributes ideas, takes input, and improves the work in progress.',
    images: [
      img('collaboration-1', 'Collaboration pattern 1'),
      img('collaboration-2', 'Collaboration pattern 2'),
      img('collaboration-3', 'Collaboration pattern 3'),
    ],
  },
  {
    id: 'traceability',
    label: 'Traceability',
    title: 'Traceability',
    desc: 'Traceability ensures agent decisions can be reviewed, understood, and improved over time. It makes behavior accountable across sessions, users, and workflows supporting debugging, learning, and workflow improvements.',
    images: [
      img('traceability-1', 'Traceability pattern 1'),
      img('traceability-2', 'Traceability pattern 2'),
      img('traceability-3', 'Traceability pattern 3'),
    ],
  },
]

export default function PatternTabs() {
  const [active, setActive] = useState('control')

  return (
    <>
      <div className="patterns-filters">
        {PATTERNS.map((p) => (
          <button
            key={p.id}
            className={`pattern-filter${active === p.id ? ' is-active' : ''}`}
            onClick={() => setActive(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {PATTERNS.map((p) => (
        <div
          key={p.id}
          className={`pattern-panel${active === p.id ? ' is-active' : ''}`}
        >
          <h3 className="pattern-title">{p.title}</h3>
          <p className="pattern-desc">{p.desc}</p>
          <div className="pattern-divider" />
          <h4 className="pattern-examples-label">Examples</h4>
          <div className="pattern-visuals">
            {p.images.map((image) => (
              <span key={image.light} style={{ display: 'contents' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-light" src={asset(image.light)} alt={image.alt} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-dark" src={asset(image.dark)} alt={image.alt} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
