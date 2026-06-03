'use client'

import { useState } from 'react'
import ImageLightbox from '@/components/ImageLightbox'

interface LightboxImageProps {
  src: string
  alt: string
  className?: string
}

// Clickable article image that opens the shared ImageLightbox modal.
// `src` should already be wrapped with asset() by the caller.
export default function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
      />
      <ImageLightbox src={src} alt={alt} isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
