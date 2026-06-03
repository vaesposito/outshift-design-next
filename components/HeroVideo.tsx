'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { asset } from '@/lib/asset'

interface HeroVideoProps {
  lightSrc: string
  darkSrc: string
  className?: string
}

export default function HeroVideo({ lightSrc, darkSrc, className }: HeroVideoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      <video
        className={`video-light${className ? ' ' + className : ''}`}
        style={{ display: isDark ? 'none' : 'block' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={asset(lightSrc)} type="video/mp4" />
      </video>
      <video
        className={`video-dark${className ? ' ' + className : ''}`}
        style={{ display: isDark ? 'block' : 'none' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={asset(darkSrc)} type="video/mp4" />
      </video>
    </>
  )
}
