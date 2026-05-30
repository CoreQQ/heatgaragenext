# Heat Garage — Next.js

BMW specialist website converted from vanilla HTML/CSS/JS to **Next.js 14** (App Router, TypeScript).

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **CSS Modules** → global CSS (same design tokens, zero refactor of visuals)
- **next/font** — Bebas Neue + Manrope loaded server-side (no FOUC)
- **next/image** — logo optimised
- **API Route** `/api/booking` → Telegram Bot sendMessage

## Quick start

```bash
npm install
# Add your Telegram credentials:
cp .env.local.example .env.local   # then edit
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment variables

| Variable     | Description                    |
|--------------|-------------------------------|
| `TG_TOKEN`   | Telegram Bot API token        |
| `TG_CHAT_ID` | Target chat / group ID        |

Set them in `.env.local` (never commit this file).

## Deploy to Vercel

```bash
npx vercel
```

Add `TG_TOKEN` and `TG_CHAT_ID` in **Vercel → Settings → Environment Variables**.

## Project structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Full single-page site
    globals.css         # All styles (ported from style.css)
    api/
      booking/
        route.ts        # POST → Telegram
  components/
    Header.tsx          # Sticky header + mobile nav
    Preloader.tsx       # Animated preloader
    ScrollBar.tsx       # Right-side scroll progress
    PhoneWidget.tsx     # Floating phone button
    ServicesTabs.tsx    # Interactive service tabs
    StepsGrid.tsx       # How-we-work steps with IntersectionObserver
    FadeUpGrid.tsx      # Scroll-triggered fade-up wrapper
    BookingForm.tsx     # Booking form → /api/booking
  lib/
    data.ts             # All content (services, reviews, steps…)
```
