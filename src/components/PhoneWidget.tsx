'use client'
import { useEffect, useRef, useState } from 'react'

export default function PhoneWidget() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div id="phone-widget" className={open ? 'open' : ''} ref={ref}>
      <div className="phone-numbers">
        <div className="phone-card">
          <span className="phone-card-label">Coding &amp; Diagnostics</span>
          <a className="phone-card-number" href="tel:+353852021268">+353 85 202 1268</a>
        </div>
        <div className="phone-card">
          <span className="phone-card-label">Service &amp; Repairs</span>
          <a className="phone-card-number" href="tel:+353852003994">+353 85 200 3994</a>
        </div>
      </div>
      <button
        className="phone-btn"
        aria-label="Call us"
        onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </button>
    </div>
  )
}
