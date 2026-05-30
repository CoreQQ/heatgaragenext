'use client'
import { useEffect, useRef } from 'react'

export default function FadeUpGrid({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.animationPlayState = 'running'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}
