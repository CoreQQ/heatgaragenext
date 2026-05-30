import Image from 'next/image'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import ScrollBar from '@/components/ScrollBar'
import PhoneWidget from '@/components/PhoneWidget'
import ServicesTabs from '@/components/ServicesTabs'
import StepsGrid from '@/components/StepsGrid'
import FadeUpGrid from '@/components/FadeUpGrid'
import BookingForm from '@/components/BookingForm'
import { ADVANTAGES, GALLERY, REVIEWS } from '@/lib/data'

const StarIcon = () => (
  <svg className="star" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const AdvIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    grid:   <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>,
    star:   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
    users:  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>,
    dollar: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>,
    clock:  <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  }
  return <svg viewBox="0 0 24 24">{icons[type]}</svg>
}

const GalleryIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>
)

export default function Home() {
  return (
    <>
      <a href="#hero" className="skip-link">Skip to content</a>
      <Preloader />
      <ScrollBar />
      <PhoneWidget />
      <Header />

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <svg className="hero-headlight" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="400" cy="300" rx="380" ry="280" fill="#FA029C" opacity="0.03"/>
            <path d="M80 160 C130 110, 620 100, 690 155 L730 250 C745 295, 730 370, 680 410 L630 435 C580 455, 120 450, 75 415 L45 335 C28 290, 35 215, 80 160 Z" fill="#0c0c0c" stroke="#FA029C" strokeWidth="1.8" opacity="0.95"/>
            <path d="M100 175 C145 130, 605 120, 665 168 L702 255 C715 296, 703 364, 657 400 L612 423 C569 441, 130 438, 90 405 L63 330 C48 289, 55 223, 100 175 Z" fill="#111" stroke="#FA029C" strokeWidth="0.6" opacity="0.5"/>
            <circle cx="390" cy="295" r="130" fill="none" stroke="#FA029C" strokeWidth="20" opacity="0.05"/>
            <circle cx="390" cy="295" r="128" fill="none" stroke="#FA029C" strokeWidth="3.5" opacity="0.9" strokeDasharray="5 2.5"/>
            <circle cx="390" cy="295" r="122" fill="none" stroke="#FA029C" strokeWidth="1.2" opacity="0.45"/>
            <circle cx="390" cy="295" r="115" fill="none" stroke="#FA029C" strokeWidth="0.8" opacity="0.25" strokeDasharray="8 4"/>
            <circle cx="390" cy="295" r="93"  fill="none" stroke="#FA029C" strokeWidth="1.2" opacity="0.35" strokeDasharray="6 3"/>
            <circle cx="390" cy="295" r="78"  fill="#0a0a0a" stroke="#2a2a2a" strokeWidth="1.5"/>
            <circle cx="390" cy="295" r="72"  fill="#0d0d0d" stroke="#FA029C" strokeWidth="0.9" opacity="0.35"/>
            <circle cx="390" cy="295" r="64"  fill="#101010" stroke="#222" strokeWidth="1"/>
            <ellipse cx="375" cy="278" rx="20" ry="15" fill="#FA029C" opacity="0.06"/>
            <ellipse cx="370" cy="272" rx="11" ry="7"  fill="white"  opacity="0.04" transform="rotate(-15,370,272)"/>
            <path d="M165 162 Q390 142 620 165" fill="none" stroke="#FA029C" strokeWidth="3.5" opacity="0.75" strokeLinecap="round"/>
            <path d="M165 162 Q390 142 620 165" fill="none" stroke="#FA029C" strokeWidth="9" opacity="0.14" strokeLinecap="round"/>
            <path d="M140 420 Q390 438 645 418" fill="none" stroke="#FA029C" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
            <path d="M54 230 L54 360" fill="none" stroke="#FA029C" strokeWidth="5" opacity="0.6" strokeLinecap="round"/>
            <path d="M54 230 L54 360" fill="none" stroke="#FA029C" strokeWidth="13" opacity="0.1" strokeLinecap="round"/>
            <line x1="682" y1="162" x2="740" y2="138" stroke="#FA029C" strokeWidth="1" opacity="0.3"/>
            <line x1="695" y1="400" x2="748" y2="425" stroke="#FA029C" strokeWidth="1" opacity="0.3"/>
            <text x="390" y="520" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#FA029C" opacity="0.3" letterSpacing="7">BMW F30 · ANGEL EYE</text>
          </svg>
          <div className="hero-gradient" />
        </div>
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-content">
            <div className="hero-badge">Dublin&apos;s BMW Specialists</div>
            <h1 className="hero-title">
              BMW REPAIR<br />
              <span className="accent">ANY</span><br />
              COMPLEXITY
            </h1>
            <p className="hero-sub">Dublin&apos;s dedicated BMW service centre. Official diagnostic equipment. Technicians with 10+ years of BMW-only experience.</p>
            <div className="hero-actions">
              <a href="#booking" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book a Service
              </a>
              <a href="#services" className="btn-secondary">
                View Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>100+</strong><span>Cars Serviced</span></div>
            <div className="hero-stat"><strong>8 Yrs</strong><span>In Business</span></div>
            <div className="hero-stat"><strong>24/7</strong><span>Available</span></div>
          </div>
        </div>
      </section>

      {/* ═══════ ADVANTAGES ═══════ */}
      <section id="advantages" className="advantages">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">OUR ADVANTAGES</h2>
          <p className="section-desc">We work exclusively with BMW. That&apos;s not just a specialisation — it&apos;s a way of life.</p>
          <FadeUpGrid>
            <div className="adv-grid">
              {ADVANTAGES.map(adv => (
                <div key={adv.title} className="adv-card fade-up">
                  <div className="adv-icon"><AdvIcon type={adv.icon} /></div>
                  <h3>{adv.title}</h3>
                  <p>{adv.desc}</p>
                </div>
              ))}
            </div>
          </FadeUpGrid>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-desc">Full range of BMW work — from routine servicing to complex repairs, coding and detailing</p>
          <ServicesTabs />
        </div>
      </section>

      {/* ═══════ HOW WE WORK ═══════ */}
      <section id="how" className="how">
        <div className="container">
          <div className="section-label">Our Process</div>
          <h2 className="section-title">HOW WE WORK</h2>
          <p className="section-desc">A transparent process from first contact to key hand-back</p>
          <StepsGrid />
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section id="gallery">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">GALLERY</h2>
          <p className="section-desc">Real jobs from our Dublin workshop — before and after</p>
          <div className="gallery-grid">
            {GALLERY.map(item => (
              <div key={item.label} className="gal-item">
                <div className="gal-placeholder">
                  <GalleryIcon />
                  <span>{item.label}</span>
                </div>
                <div className="gal-overlay"><span>{item.overlay}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ REVIEWS ═══════ */}
      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-label">What Clients Say</div>
          <h2 className="section-title">REVIEWS</h2>
          <p className="section-desc">Dublin BMW owners trust us with their cars</p>
          <div className="reviews-track">
            {REVIEWS.map(r => (
              <div key={r.author} className="review-card">
                <div className="review-stars">{[0,1,2,3,4].map(i => <StarIcon key={i} />)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="author-avatar">{r.initials}</div>
                  <div>
                    <div className="author-name">{r.author}</div>
                    <div className="author-car">{r.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING ═══════ */}
      <section id="booking" className="booking">
        <div className="container">
          <div className="booking-inner">
            <div className="booking-info">
              <div className="section-label">Online Booking</div>
              <h2 className="section-title">BOOK A SERVICE</h2>
              <p className="section-desc">Fill in the form and we&apos;ll confirm your booking as soon as possible</p>
              <ul className="info-list">
                <li>
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div>
                    <strong>Coding &amp; Diagnostics</strong>
                    <a href="tel:+353852021268">+353 85 202 1268</a>
                    <strong>Service &amp; Repairs</strong>
                    <a href="tel:+353852003994">+353 85 200 3994</a>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <div><strong>Opening Hours</strong><span>24/7 — Always available</span></div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div><strong>Address</strong><span>Greenogue Business Park, Rathcoole, Dublin</span></div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  <div><strong>Email</strong><a href="mailto:heatgarage.dublin@gmail.com">heatgarage.dublin@gmail.com</a></div>
                </li>
              </ul>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ═══════ CONTACTS ═══════ */}
      <section id="contacts" className="contacts">
        <div className="container">
          <div className="section-label">Find Us</div>
          <h2 className="section-title">CONTACT</h2>
          <div className="contacts-grid">
            <div>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                  <div><strong>Address</strong><p>Greenogue Business Park, Rathcoole, Dublin, Ireland</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                  <div>
                    <strong>Coding &amp; Diagnostics</strong><a href="tel:+353852021268">+353 85 202 1268</a>
                    <strong>Service &amp; Repairs</strong><a href="tel:+353852003994">+353 85 200 3994</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
                  <div><strong>Email</strong><a href="mailto:heatgarage.dublin@gmail.com">heatgarage.dublin@gmail.com</a></div>
                </div>
              </div>
              <div className="work-hours">
                <h4>Opening Hours</h4>
                <div className="hours-row"><span>Monday – Sunday</span><span>24 / 7</span></div>
                <div className="hours-row"><span>Phone &amp; WhatsApp</span><span>Always open</span></div>
                <div className="hours-row"><span>On-site appointments</span><span>By arrangement</span></div>
              </div>
              <div className="socials">
                <a href="#" className="social-btn" title="Instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href="#" className="social-btn" title="Facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://wa.me/353852021268" className="social-btn" title="WhatsApp" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.078 5.078 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.849L.064 23.5l5.79-1.516A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 0 1-4.993-1.367l-.358-.213-3.714.972.991-3.624-.233-.372A9.794 9.794 0 0 1 2.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
                </a>
                <a href="#" className="social-btn" title="TikTok" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <div className="map-placeholder">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Greenogue Business Park<br />Rathcoole, Dublin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#hero" className="logo">
                <Image src="/logo.PNG" alt="Heat Garage" className="logo-img" width={46} height={46} />
              </a>
              <p>Dublin&apos;s dedicated BMW service centre. Repairs, diagnostics, coding and detailing.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {['Servicing','Diagnostics','Coding','Engine Repair','Detailing','Japan to EU'].map(s => (
                  <li key={s}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li><a href="#how">How We Work</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#advantages">About Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+353852021268">+353 85 202 1268</a></li>
                <li><a href="tel:+353852003994">+353 85 200 3994</a></li>
                <li><a href="mailto:heatgarage.dublin@gmail.com">heatgarage.dublin@gmail.com</a></li>
                <li><a href="#contacts">Rathcoole, Dublin</a></li>
                <li><a href="#booking">Book Online</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 <span>Heat Garage</span>. All rights reserved. Dublin, Ireland.</div>
            <div className="footer-copy">BMW Specialist Service Centre</div>
          </div>
        </div>
      </footer>
    </>
  )
}
