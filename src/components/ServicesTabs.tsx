'use client'
import { useEffect, useState } from 'react'
import { SERVICES, ServiceTab } from '@/lib/data'

function addRipple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget
  const r = btn.getBoundingClientRect()
  const s = Math.max(r.width, r.height)
  const el = document.createElement('span')
  el.className = 'ripple'
  el.style.width = el.style.height = s + 'px'
  el.style.left = (e.clientX - r.left - s / 2) + 'px'
  el.style.top  = (e.clientY - r.top  - s / 2) + 'px'
  btn.appendChild(el)
  el.addEventListener('animationend', () => el.remove())
}

export default function ServicesTabs() {
  const [active, setActive]   = useState<ServiceTab>('service')
  const [visible, setVisible] = useState<ServiceTab>('service')

  const activate = (id: ServiceTab) => {
    setActive(id)
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(id)))
  }

  useEffect(() => { activate('service') }, [])

  const tabs = Object.entries(SERVICES) as [ServiceTab, typeof SERVICES[ServiceTab]][]

  return (
    <>
      <div className="services-tabs">
        {tabs.map(([id, data]) => (
          <button
            key={id}
            className={`tab-btn${active === id ? ' active' : ''}`}
            data-tab={id}
            onClick={e => { addRipple(e); activate(id) }}
          >
            {data.label}
          </button>
        ))}
      </div>
      <div className="tab-panels">
        {tabs.map(([id, data]) => (
          <div
            key={id}
            className={`tab-panel${active === id ? ' active' : ''}${visible === id ? ' visible' : ''}`}
            id={`tab-${id}`}
          >
            {data.items.map(item => (
              <div key={item.title} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
