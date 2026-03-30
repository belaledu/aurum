<div align="center">
<img width="1200" height="475" alt="AURUM Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

<h1>AURUM — Luxury Car Rental</h1>

<p><strong>Premium luxury car rental platform for Saudi Arabia.</strong></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock" alt="GSAP" />
</p>
</div>

---

## Description

**AURUM** is a high-end luxury car rental web application targeting the Saudi Arabian market. Built with Next.js 15 App Router and a fully Arabic (RTL) interface, it delivers an immersive, premium experience for customers looking to rent iconic vehicles — from Rolls-Royce and Ferrari to Lamborghini and Bugatti. The platform bridges a polished front-end with a Google Sheets-powered backend, enabling real-time booking management without a dedicated database server.

---

## Problem It Solves

Traditional car rental platforms in the region lack the visual sophistication and UX polish expected by luxury clientele. AURUM addresses this by:

- Providing a **curated, cinematic browsing experience** for high-net-worth customers.
- Offering **instant fleet visibility** filtered by city, vehicle category, and brand — all in Arabic.
- Replacing expensive database infrastructure with **Google Sheets as a lightweight backend**, lowering operational costs for small luxury fleet operators.
- Enabling **WhatsApp-first booking confirmations**, matching the dominant communication channel in Saudi Arabia.

---

## Features

- 🚗 **Fleet of 20+ luxury vehicles** — Rolls-Royce, Bentley, Ferrari, Lamborghini, McLaren, Bugatti, Maybach, and more; priced from 1,400 to 15,000 SAR/day.
- 🔍 **Advanced filtering** — filter by city (Riyadh, Jeddah, Dammam), vehicle category (Sedan, SUV, Sport), and free-text search.
- 📋 **Multi-step booking flow** — 3-step wizard (dates → personal info → payment method) with animated progress indicator and summary sidebar.
- 💬 **WhatsApp booking integration** — one-click redirect to WhatsApp with pre-filled booking message.
- 🌙 **Dark / Light theme toggle** — smooth theme switching powered by `next-themes`.
- ✨ **Cinematic animations** — entrance animations with GSAP timelines, scroll-triggered parallax effects, and Motion (Framer Motion) layout transitions.
- 📊 **Animated statistics** — scroll-triggered counter animations (200+ cars, 15+ years, 5,000+ clients, 4.9★) via `react-countup`.
- 🎠 **Featured cars carousel** — tabbed filter (All / Sedan / SUV / Sport) with animated tab indicator.
- 🖱️ **Custom animated cursor** — branded custom cursor for desktop visitors.
- 📱 **Fully responsive** — mobile-first layout with animated full-screen mobile navigation.
- 🌐 **Arabic RTL interface** — complete right-to-left layout with IBM Plex font family.
- 📊 **Google Sheets backend** — bookings are persisted to a Google Sheet via the Sheets API v4.
- 🖼️ **Google Drive image storage** — car images managed through Google Drive.
- 🔐 **JWT authentication** — signed tokens for secure API calls.
- 💰 **Saudi VAT (15%) calculation** — automatic VAT inclusion in all pricing summaries.
- 📍 **Geolocation support** — location-aware features for city detection.
- 🤖 **Gemini AI integration** — Google Gemini API included for AI-powered features.
- 🚀 **Standalone deployment** — Next.js `output: 'standalone'` for containerized/serverless deployments.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4, tailwindcss-animate, tailwindcss-rtl |
| **Animations** | GSAP 3 (ScrollTrigger, timelines), Motion / Framer Motion 12 |
| **Fonts** | IBM Plex Sans, IBM Plex Serif, IBM Plex Mono (Google Fonts) |
| **Icons** | Lucide React |
| **Theme** | next-themes (dark / light) |
| **Carousels** | Swiper 12 |
| **Counters** | react-countup, react-intersection-observer |
| **Forms** | React Hook Form, @hookform/resolvers, Zod 4 |
| **Backend Server** | Express.js 5 |
| **Database** | Google Sheets API v4 |
| **File Storage** | Google Drive API |
| **Auth** | Google Auth Library, JWT (jsonwebtoken) |
| **AI** | Google Gemini AI (@google/genai) |
| **Deployment** | Firebase (firebase-tools), Next.js standalone |

---

## Installation

### Prerequisites

- **Node.js** ≥ 18
- A **Google Cloud project** with the Sheets API and Drive API enabled
- A **Google Service Account** with access to your target spreadsheet and Drive folder
- A **Gemini API key** from [Google AI Studio](https://aistudio.google.com)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/belaledu/aurum.git
   cd aurum
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and fill in your credentials:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   |---|---|
   | `GEMINI_API_KEY` | Google Gemini AI API key |
   | `APP_URL` | Deployed app URL (e.g. `https://aurum.sa`) |
   | `GOOGLE_SPREADSHEET_ID` | ID of the Google Sheet acting as the database |
   | `GOOGLE_CREDENTIALS` | JSON string of the service account credentials |
   | `GOOGLE_DRIVE_ROOT_FOLDER_ID` | Root folder ID for car image uploads |
   | `JWT_SECRET` | Secret string for signing JWT tokens |
   | `VAT_RATE` | Saudi VAT rate (default: `0.15`) |

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

### Development

```bash
npm run dev       # Start Next.js development server
```

### Production

```bash
npm run build     # Build for production
npm start         # Start the production server (node server.ts)
```

### Linting

```bash
npm run lint      # Run ESLint
```

### Cleaning

```bash
npm run clean     # Remove the .next build cache
```

---

## Project Structure

```
aurum/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage (Hero, Featured Cars, Stats, etc.)
│   ├── layout.tsx              # Root layout (fonts, ThemeProvider)
│   ├── globals.css             # Global styles & CSS custom properties
│   ├── cars/
│   │   ├── page.tsx            # Fleet listing with filtering
│   │   └── [id]/page.tsx       # Car detail page with booking widget
│   ├── booking/page.tsx        # 3-step booking wizard
│   ├── about/page.tsx          # About AURUM page
│   ├── services/page.tsx       # Services page (daily, chauffeur, VIP, airport)
│   ├── contact/page.tsx        # Contact form page
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms & conditions
│   └── api/
│       └── cars/[id]/route.ts  # REST API: GET /api/cars/:id
├── components/
│   ├── AppLayout.tsx           # Shared layout wrapper (Navbar + Footer)
│   ├── Navbar.tsx              # Responsive navbar with theme toggle
│   ├── Footer.tsx              # Site footer
│   ├── CustomCursor.tsx        # Branded custom cursor
│   └── home/
│       ├── Hero.tsx            # GSAP-animated hero with SVG car silhouette
│       ├── BookingSearchBar.tsx # Quick search / date picker bar
│       ├── MarqueeStrip.tsx    # Scrolling brand marquee
│       ├── FeaturedCars.tsx    # Tabbed featured cars grid
│       ├── AboutStrip.tsx      # Brand identity strip
│       ├── HowItWorks.tsx      # 3-step explainer section
│       ├── StatsSection.tsx    # Animated statistics counters
│       ├── Testimonials.tsx    # Customer reviews section
│       └── CTABanner.tsx       # Call-to-action banner
├── lib/
│   ├── cars-data.ts            # Static car inventory data (20 vehicles)
│   └── utils.ts                # Shared utility helpers
├── hooks/
│   └── use-mobile.ts           # Mobile breakpoint detection hook
├── server.ts                   # Express.js backend (bookings, Google Sheets)
├── metadata.json               # App metadata (name, description, permissions)
├── next.config.ts              # Next.js configuration
├── tailwind.config / postcss   # Tailwind & PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── .env.example                # Environment variable template
```

---

## Screenshots

> 📸 _Screenshots will be added here. Replace the placeholder paths below with actual images once the app is running. The sections correspond to the main views of the application._

| View | Description |
|---|---|
| _(add `home.png` to `.github/screenshots/`)_ | Hero section with GSAP-animated SVG car silhouette and booking search bar |
| _(add `cars.png` to `.github/screenshots/`)_ | Full fleet listing with city/category/search filters |
| _(add `car-detail.png` to `.github/screenshots/`)_ | Car spec sheet, feature list, rental terms, and sticky booking widget |
| _(add `booking.png` to `.github/screenshots/`)_ | 3-step booking wizard with real-time price summary |
| _(add `dark-mode.png` to `.github/screenshots/`)_ | Dark theme variant |

---

## Challenges & Solutions

| Challenge | Solution |
|---|---|
| **No dedicated database** | Used Google Sheets API v4 as a zero-cost, spreadsheet-based backend for storing bookings. Service account auth keeps credentials out of the client. |
| **RTL layout with Tailwind** | Added `tailwindcss-rtl` plugin and set `lang="ar" dir="rtl"` at the HTML root. All spacing and layout utilities respect the logical RTL direction. |
| **Smooth entrance animations in Next.js** | Combined GSAP `context()` (for cleanup on unmount) with `ScrollTrigger` for scroll-linked parallax, while using Motion for React state-driven transitions. |
| **Next.js 15 dynamic route params** | In Next.js 15, `params` in API route handlers is typed as `Promise<{ id: string }>` and must be awaited before use. |
| **Large luxury images with no CDN** | Used Next.js `<Image>` with `remotePatterns` whitelisting Unsplash and Picsum, enabling automatic WebP conversion and lazy loading. |
| **Server-side backend in a Next.js project** | Maintained a standalone `server.ts` (Express) alongside the Next.js app, allowing the backend to be deployed independently or via `npm start`. |

---

## Future Improvements

- [ ] **Real payment gateway** — integrate Moyasar or HyperPay for direct online payments (MADA, Visa, Apple Pay).
- [ ] **Admin dashboard** — a secured `/admin` panel for fleet management, booking approvals, and revenue analytics.
- [ ] **User accounts & booking history** — allow customers to register, log in, and track their bookings.
- [ ] **Real-time availability calendar** — prevent double-bookings by displaying per-car availability in real time.
- [ ] **Gemini AI assistant** — surface the existing `@google/genai` integration as a chatbot to answer customer queries and suggest vehicles.
- [ ] **SMS / email notifications** — send automated confirmations via Twilio or SendGrid when a booking is received.
- [ ] **i18n** — add English language support alongside Arabic using `next-intl`.
- [ ] **Progressive Web App (PWA)** — add a service worker and web manifest for offline browsing and home-screen installation.
- [ ] **End-to-end tests** — add Playwright tests for critical user flows (search → detail → booking).

---

## 🚀 CV / Portfolio Highlights

- **Built a full-stack luxury car rental platform** from scratch using Next.js 15 (App Router), React 19, and TypeScript, targeting the Saudi Arabian market with a fully Arabic RTL interface.
- **Designed and implemented a multi-step booking wizard** with animated progress tracking, real-time price calculation (including 15% Saudi VAT), and payment method selection.
- **Engineered a serverless-style backend** using Google Sheets API v4 as a zero-cost database for booking persistence, eliminating infrastructure overhead while maintaining full CRUD capability.
- **Implemented advanced animations** using GSAP 3 with `ScrollTrigger` for scroll-linked parallax effects and timeline-based entrance sequences, alongside Motion (Framer Motion) for React layout transitions.
- **Integrated Google Drive API** for cloud-based car image management, and **Google Auth Library** with service account credentials for secure server-side API access.
- **Achieved RTL-first design** using Tailwind CSS 4 with `tailwindcss-rtl`, supporting the Arabic reading direction across all layouts, spacing, and component orientations.
- **Optimized image delivery** using Next.js `<Image>` with remote pattern whitelisting and automatic WebP conversion, reducing page load times for high-resolution luxury car photography.
- **Implemented dark/light theming** using `next-themes` with a `data-theme` attribute strategy, enabling flicker-free SSR-compatible theme persistence.
- **Designed a WhatsApp-first conversion flow**, allowing users to initiate bookings with pre-filled messages, aligning with dominant regional communication patterns.
- **Applied modular component architecture** — separating page-level concerns, reusable UI components, shared hooks, and data utilities — following Next.js App Router best practices.
