"use client"

import { useEffect, useRef, useState } from "react"

type LazyVideoProps = {
  src: string
  poster?: string
  className?: string
  priority?: boolean
}

export function LazyVideo({ src, poster, className = "", priority = false }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(priority)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (priority) {
      video.play().catch(() => undefined)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          requestAnimationFrame(() => video.play().catch(() => undefined))
        } else {
          video.pause()
        }
      },
      { rootMargin: "240px 0px", threshold: 0.08 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [priority])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return
    video.load()
  }, [shouldLoad])

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={priority}
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      poster={poster}
      aria-hidden="true"
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  )
}

