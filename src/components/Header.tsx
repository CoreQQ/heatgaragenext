'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#advantages', label: 'About' },
  { href: '#services',   label: 'Services' },
  { href: '#how',        label: 'Process' },
  { href: '#gallery',    label: 'Gallery' },
  { href: '#reviews',    label: 'Reviews' },
  { href: '#contacts',   label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <>
      <header ref={headerRef} className={scrolled ? 'scrolled' : ''}>
        <div className="logo-spacer" />
        <a href="#hero" className="logo" onClick={e => smoothScroll(e, '#hero')}>
          <Image src="/logo.PNG" alt="Heat Garage" className="logo-img" width={46} height={46} />
        </a>
        <nav aria-label="Main navigation">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label}</a>
          ))}
        </nav>
        <a href="#booking" className="header-cta" onClick={e => smoothScroll(e, '#booking')}>Book Now</a>
        <button
          className="burger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
        </button>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={e => smoothScroll(e, l.href)}>{l.label.toUpperCase()}</a>
        ))}
        <a href="#booking" className="m-cta" onClick={e => smoothScroll(e, '#booking')}>BOOK NOW</a>
      </nav>
    </>
  )
}
