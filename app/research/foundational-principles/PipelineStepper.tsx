'use client'

import { useEffect } from 'react'

// Attaches scroll-spy + smooth-scroll behavior to the (server-rendered)
// pipeline stepper nav. Renders nothing itself.
export default function PipelineStepper() {
  useEffect(() => {
    const links = Array.prototype.slice.call(
      document.querySelectorAll('.pipeline-stepper a[href^="#pipeline-step-"]')
    ) as HTMLAnchorElement[]
    if (!links.length) return

    const idToLink: Record<string, HTMLAnchorElement> = {}
    const targets: HTMLElement[] = []
    links.forEach((link) => {
      const id = (link.getAttribute('href') || '').slice(1)
      const el = document.getElementById(id)
      if (el) {
        idToLink[id] = link
        targets.push(el)
      }
    })
    if (!targets.length) return

    const nav = links[0].closest('.pipeline-stepper') as HTMLElement | null

    function setActive(id: string) {
      links.forEach((a) => a.classList.remove('is-active'))
      const active = idToLink[id]
      if (active) {
        active.classList.add('is-active')
        // Only keep the active nav item in view when the stepper is the
        // sticky desktop sidebar. On mobile it becomes a static, full-width
        // pill bar at the top of the section — scrolling it into view there
        // would yank the page back up and cancel the scroll-to-step, making
        // the pills appear non-functional.
        const isSticky = nav ? getComputedStyle(nav).position === 'sticky' : true
        if (isSticky) {
          try {
            active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
          } catch {
            /* noop */
          }
        }
      }
    }

    let observer: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive((entry.target as HTMLElement).id)
          })
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      )
      targets.forEach((t) => observer!.observe(t))
    }

    const clickHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = []
    links.forEach((link) => {
      const handler = (e: Event) => {
        const id = (link.getAttribute('href') || '').slice(1)
        const el = document.getElementById(id)
        if (!el) return
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', '#' + id)
        setActive(id)
      }
      link.addEventListener('click', handler)
      clickHandlers.push([link, handler])
    })

    return () => {
      observer?.disconnect()
      clickHandlers.forEach(([link, handler]) => link.removeEventListener('click', handler))
    }
  }, [])

  return null
}
