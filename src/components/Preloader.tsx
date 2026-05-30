'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 2000)
    const t2 = setTimeout(() => setRemoved(true), 2650)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (removed) return null

  return (
    <div id="preloader" className={hidden ? 'hide' : ''}>
      <Image src="/logo.PNG" alt="Heat Garage" width={120} height={120} style={{ objectFit: 'contain' }} priority />
      <div className="pre-bar" />
      <div className="pre-dots"><span /><span /><span /></div>
    </div>
  )
}
