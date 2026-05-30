'use client'
import { useEffect, useRef } from 'react'
import { STEPS } from '@/lib/data'

export default function StepsGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    gridRef.current?.querySelectorAll('.step').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="steps-grid" ref={gridRef}>
      {STEPS.map(s => (
        <div key={s.num} className="step">
          <div className="step-num">{s.num}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
