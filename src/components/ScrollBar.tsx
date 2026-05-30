'use client'
import { useEffect, useRef } from 'react'

export default function ScrollBar() {
  const fillRef  = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const pctRef   = useRef<HTMLDivElement>(null)
  const barRef   = useRef<HTMLDivElement>(null)
  const rafRef   = useRef(false)

  useEffect(() => {
    const update = () => {
      if (rafRef.current) return
      rafRef.current = true
      requestAnimationFrame(() => {
        const docH = document.documentElement.scrollHeight - window.innerHeight
        const p = docH > 0 ? Math.round(window.scrollY / docH * 100) : 0
        const ps = p + '%'
        if (fillRef.current)  fillRef.current.style.height = ps
        if (thumbRef.current) thumbRef.current.style.top   = ps
        if (pctRef.current)   { pctRef.current.style.top = ps; pctRef.current.textContent = ps }
        rafRef.current = false
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientY - r.top) / r.height
    window.scrollTo({ top: ratio * (document.documentElement.scrollHeight - window.innerHeight), behavior: 'smooth' })
  }

  return (
    <div id="scroll-bar" ref={barRef} onClick={handleClick}>
      <div id="scroll-track" />
      <div id="scroll-fill" ref={fillRef} />
      <div id="scroll-thumb" ref={thumbRef} />
      <div id="scroll-pct" ref={pctRef}>0%</div>
    </div>
  )
}
