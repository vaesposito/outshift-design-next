'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { asset } from '@/lib/asset'

interface BlogCard {
  href: string
  external: boolean
  image?: string
  gradient?: string
  imageAlt: string
  tags: string[]
  tagLabels: string[]
  title: string
  desc: string
  author: string
  date: string
  readLabel: string
}

const FILTERS: { tag: string; label: string }[] = [
  { tag: 'research', label: 'Research' },
  { tag: 'ai', label: 'AI' },
  { tag: 'ai-ethics', label: 'AI Ethics' },
  { tag: 'product-design', label: 'Product Design' },
  { tag: 'design', label: 'Design' },
  { tag: 'workflow', label: 'Workflow' },
  { tag: 'agents', label: 'Agents' },
  { tag: 'case-study', label: 'Case Study' },
]

const CARDS: BlogCard[] = [
  {
    href: 'https://outshift-headless-cms-s3.s3.us-east-2.amazonaws.com/Navigating_The_Multi-Agent_Future.pdf',
    external: true,
    image: asset('/images/blog/navigating-multi-agent-future.png'),
    imageAlt: 'Navigating the Multi-Agent Future',
    tags: ['research', 'ai', 'product-design'],
    tagLabels: ['Research', 'AI', 'Product Design'],
    title: 'Navigating the Multi-Agent Future: Expert Perspectives on Human-Agent Interaction',
    desc: 'The shifting landscape of work and interaction. This report presents key findings and actionable insights drawn from leading industry and academic experts on the future of human agent interaction.',
    author: 'Krystelle Gonzalez Papaux',
    date: 'April 2026',
    readLabel: 'Whitepaper',
  },
  {
    href: asset('/files/ai-ethics-and-design.pdf'),
    external: true,
    image: asset('/images/blog/ai-ethics-cover.png'),
    imageAlt: 'AI Ethics and Design cover',
    tags: ['research', 'ai', 'ai-ethics'],
    tagLabels: ['Research', 'AI Ethics', 'Product Design'],
    title: 'The Strategic Role of Design in Shaping Ethical AI Systems',
    desc: 'As AI systems evolve toward agentic and autonomous architectures, ethics can no longer be governed purely through policy and model training. This report explores how interface design becomes the primary control layer for responsible human–AI interaction — and what that means for designers building the next generation of AI products.',
    author: 'Krystelle Gonzalez Papaux',
    date: 'May 2026',
    readLabel: 'Whitepaper',
  },
  {
    href: '/blog/making-room-for-agents',
    external: false,
    image: asset('/images/blog/making-room-agents/hero.png'),
    imageAlt: 'Making Room for Agents in Expert Tools',
    tags: ['design', 'ai', 'product-design'],
    tagLabels: ['Design', 'AI', 'Product Design'],
    title: 'Making Room for Agents in Expert Tools',
    desc: 'How agents need to map onto the grammar of expert tools — not just add a chat panel, but participate in the work without displacing the structure that makes expert fluency possible.',
    author: 'Marc Scibelli',
    date: 'May 2026',
    readLabel: 'Article',
  },
  {
    href: '/blog/augmented-designer',
    external: false,
    image: asset('/images/blog/augmented-designer/hero.svg'),
    imageAlt: 'The Augmented Designer',
    tags: ['design', 'ai', 'workflow', 'case-study', 'agents'],
    tagLabels: ['Design', 'AI', 'Workflow', 'Case Study', 'Agents'],
    title: 'The Augmented Designer: How Agents are Reshaping the Design Workflow',
    desc: 'Reflections on AI-augmented design at Outshift — from the dangers of plausible noise to the CASA project case study and a week of record-breaking fidelity.',
    author: 'Valentina Esposito',
    date: 'June 2026',
    readLabel: '8 min read',
  },
]

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
)

const MAX_VISIBLE_TAGS = 2

function CardInner({ card }: { card: BlogCard }) {
  const visibleTags = card.tagLabels.slice(0, MAX_VISIBLE_TAGS)
  const hiddenTags = card.tagLabels.slice(MAX_VISIBLE_TAGS)
  return (
    <>
      <div className="blog-card-cover">
        {card.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.image} alt={card.imageAlt} />
        ) : (
          <div
            role="img"
            aria-label={card.imageAlt}
            style={{ width: '100%', height: '100%', background: card.gradient }}
          />
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-card-tags">
          {visibleTags.map((label) => (
            <span className="blog-card-tag" key={label}>{label}</span>
          ))}
          {hiddenTags.length > 0 && (
            <span
              className="blog-card-tag blog-card-tag--more"
              tabIndex={0}
              title={hiddenTags.join(', ')}
              aria-label={`${hiddenTags.length} more tags: ${hiddenTags.join(', ')}`}
            >
              +{hiddenTags.length}
              <span className="blog-card-tag-tooltip" role="tooltip">
                {hiddenTags.join(', ')}
              </span>
            </span>
          )}
        </div>
        <h3>{card.title}</h3>
        <p className="blog-card-desc">{card.desc}</p>
        <div className="blog-card-meta">
          <span><PersonIcon /> {card.author}</span>
          <span><CalendarIcon /> {card.date}</span>
        </div>
        <div className="blog-card-footer">
          <span className="blog-read-time">{card.readLabel}</span>
          <span className="blog-read-more">Read more &rarr;</span>
        </div>
      </div>
    </>
  )
}

export default function BlogFilters() {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [query, setQuery] = useState('')

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CARDS.filter((card) => {
      const matchesFilter =
        activeTags.length === 0 || activeTags.some((t) => card.tags.includes(t))
      const haystack = (
        card.title +
        ' ' +
        card.desc +
        ' ' +
        card.author +
        ' ' +
        card.tagLabels.join(' ')
      ).toLowerCase()
      const matchesSearch = !q || haystack.includes(q)
      return matchesFilter && matchesSearch
    })
  }, [activeTags, query])

  return (
    <>
      <div className="blog-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search articles"
        />
      </div>

      <div className="blog-filters">
        {FILTERS.map((f) => (
          <button
            key={f.tag}
            type="button"
            className={`blog-filter${activeTags.includes(f.tag) ? ' is-active' : ''}`}
            onClick={() => toggleTag(f.tag)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="blog-grid">
          {visibleCards.map((card) =>
            card.external ? (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card-item"
              >
                <CardInner card={card} />
              </a>
            ) : (
              <Link key={card.href} href={card.href} className="blog-card-item">
                <CardInner card={card} />
              </Link>
            )
          )}
        </div>
        {visibleCards.length === 0 && (
          <p className="blog-empty">No articles match your search.</p>
        )}
      </div>
    </>
  )
}
