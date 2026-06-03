'use client'

import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  label: string
}

export default function ArticleToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120
      let current = items[0]?.id ?? ''
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollY) current = item.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <nav className="article-toc">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? 'active' : undefined}
          onClick={() => setActive(item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
