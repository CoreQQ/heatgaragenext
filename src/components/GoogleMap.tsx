'use client'
import { useEffect, useRef } from 'react'

const LAT = 53.2719
const LNG = -6.4689

export default function GoogleMap() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GMAPS_KEY
    if (!apiKey || typeof window === 'undefined') return

    const scriptId = 'gmaps-script'
    if (document.getElementById(scriptId)) {
      initMap()
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)

    function initMap() {
      if (!ref.current || !(window as any).google) return
      const map = new (window as any).google.maps.Map(ref.current, {
        center: { lat: LAT, lng: LNG },
        zoom: 15,
        styles: [
          { elementType: 'geometry',        stylers: [{ color: '#111111' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#a0a0a0' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#111111' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a2a2a' }] },
          { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1a1a1a' }] },
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0a0a0a' }] },
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        ],
        disableDefaultUI: true,
        zoomControl: true,
      })

      new (window as any).google.maps.Marker({
        position: { lat: LAT, lng: LNG },
        map,
        title: 'Heat Garage',
        icon: {
          path: (window as any).google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#FA029C',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
      })
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ width: '100%', height: '340px', border: '1px solid #2A2A2A' }}
    />
  )
}
