'use client'

import { useEffect, useState } from 'react'

// Rainbow reading-progress bar fixed to the top of the viewport.
// Used on article pages. Tracks vertical scroll through the document.
export default function ReadingProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: `${width}%`,
        background:
          'linear-gradient(90deg, #FF0000, #FF8800, #FFDD00, #00CC44, #00BCEB, #187ADC, #8B5CF6)',
        zIndex: 9999,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  )
}
