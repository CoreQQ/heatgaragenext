'use client'
import { useState } from 'react'
import { BMW_MODELS, SERVICE_TYPES } from '@/lib/data'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    const name    = (document.getElementById('fname')    as HTMLInputElement).value.trim()
    const phone   = (document.getElementById('fphone')   as HTMLInputElement).value.trim()
    const model   = (document.getElementById('fmodel')   as HTMLSelectElement).value
    const service = (document.getElementById('fservice') as HTMLSelectElement).value
    const time    = (document.getElementById('ftime')    as HTMLInputElement).value
    const desc    = (document.getElementById('fdesc')    as HTMLTextAreaElement).value.trim()

    if (!name || !phone) { alert('Please fill in your name and phone number.'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, model, service, time, desc }),
      })
      const data = await res.json()
      if (data.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please call us directly.')
      }
    } catch {
      alert('Network error. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success show">
        <svg viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <path d="M22 4L12 14.01l-3-3" fill="none" stroke="#FA029C" strokeWidth="2"/>
        </svg>
        <h3>REQUEST RECEIVED!</h3>
        <p>We&apos;ll be in touch shortly to confirm your booking.</p>
      </div>
    )
  }

  return (
    <div className="booking-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">Your Name</label>
          <input type="text" id="fname" placeholder="John Murphy" />
        </div>
        <div className="form-group">
          <label htmlFor="fphone">Phone</label>
          <input type="tel" id="fphone" placeholder="+353 8X XXX XXXX" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fmodel">BMW Model</label>
          <select id="fmodel">
            <option value="">Select model</option>
            {BMW_MODELS.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fservice">Service Type</label>
          <select id="fservice">
            <option value="">Select service</option>
            {SERVICE_TYPES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ftime">Preferred Date &amp; Time</label>
        <input type="datetime-local" id="ftime" style={{colorScheme:'dark'}} />
      </div>
      <div className="form-group">
        <label htmlFor="fdesc">Describe the Issue</label>
        <textarea id="fdesc" placeholder="Describe your symptoms or what needs doing..." />
      </div>
      <button className="form-submit" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Sending…' : 'Send Booking Request →'}
      </button>
    </div>
  )
}
