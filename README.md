# AURUM — Luxury Car Rental

## Description
AURUM is a premium luxury car rental platform specifically designed for the Kingdom of Saudi Arabia. It offers an exclusive fleet of high-end vehicles, ranging from the elegance of Rolls-Royce to the raw power of Ferrari and Lamborghini. The platform provides a seamless, high-end user experience that reflects the luxury of the vehicles it represents, featuring an emerald-forest green aesthetic, smooth animations, and a refined interface.

## Problem It Solves
Renting a luxury vehicle often involves fragmented processes, lack of real-time availability, and uninspiring digital interfaces. AURUM solves this by:
*   **Centralizing Luxury Inventory:** Providing a curated list of the most prestigious cars in Riyadh, Jeddah, and Dammam.
*   **Streamlining the Booking Process:** A multi-step, intuitive booking flow that captures all necessary information efficiently.
*   **Elevating the User Experience:** Using modern web technologies to create a digital environment that matches the premium nature of the service.
*   **Providing Real-time Filtering:** Allowing users to find the perfect car based on city, category, and specific model features.

## Features
*   **Exclusive Fleet Showcase:** High-resolution imagery and detailed specifications for every vehicle (HP, seats, engine type).
*   **Advanced Filtering System:** Filter by city (Riyadh, Jeddah, Dammam), category (Sedan, SUV, Sport), and keyword search.
*   **Multi-step Booking Flow:** A guided 3-step booking process (Details, Information, Payment) with real-time summary and price calculation.
*   **Dynamic API Integration:** Custom Express.js backend for handling car data and booking requests.
*   **Immersive UI/UX:**
    *   Custom cursor for a unique browsing feel.
    *   Smooth scroll animations using GSAP and Framer Motion.
    *   Responsive design optimized for all devices.
    *   Emerald-Forest luxury theme with subtle glassmorphism effects.
*   **Google Sheets Integration:** Backend capability to sync booking requests directly to Google Sheets for administrative management.

## Tech Stack
*   **Frontend:** Next.js 15 (App Router), React 19, TypeScript.
*   **Backend:** Node.js, Express.js.
*   **Styling:** Tailwind CSS 4.
*   **Animations:** Framer Motion (`motion/react`), GSAP.
*   **Icons:** Lucide React.
*   **Data Validation:** Zod.
*   **Components:** Swiper (for carousels), Lucide React (for iconography).
*   **Deployment:** Vercel (Frontend), Standalone Node.js (Backend).

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/aurum.git
    cd aurum
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    # For Google Sheets Integration (Optional)
    GOOGLE_CREDENTIALS='{"type": "service_account", ...}'
    ```

4.  **Run the development server:**
    ```bash
    # Start the Express backend
    npm run start

    # In a separate terminal, start the Next.js frontend
    npm run dev
    ```

## Usage
*   **Browse Cars:** Navigate to the `/cars` page to explore the full fleet.
*   **Filter & Search:** Use the sticky filter bar to narrow down your choices by city or category.
*   **View Details:** Click "View Details" on any car card to see full specs and high-quality images.
*   **Book a Car:** Click "Book Now" to enter the multi-step booking process.

## Project Structure
```text
├── app/                  # Next.js App Router (Pages & API Routes)
│   ├── api/              # Next.js API endpoints
│   ├── booking/          # Multi-step booking page
│   ├── cars/             # Car listing and details
│   └── layout.tsx        # Root layout with fonts and providers
├── components/           # Reusable UI Components
│   ├── home/             # Home page specific sections (Hero, Stats, etc.)
│   ├── AppLayout.tsx     # Main wrapper with Navbar and Footer
│   └── CustomCursor.tsx  # Interactive cursor component
├── lib/                  # Utilities and Static Data
│   ├── cars-data.ts      # Centralized car inventory
│   └── utils.ts          # Tailwind merge and utility functions
├── server.ts             # Express.js backend server
├── next.config.ts        # Next.js configuration
└── package.json          # Project dependencies and scripts
```

## Challenges & Solutions
*   **Next.js 15 Prerendering:** Encountered issues with `useSearchParams` during static generation. **Solution:** Wrapped client-side components in `Suspense` boundaries to allow for proper CSR bailout during build.
*   **TypeScript Type Safety:** Missing type declarations for Express and CORS in a hybrid Next.js/Express environment. **Solution:** Integrated `@types/express` and `@types/cors` to ensure full type safety across the stack.
*   **Dynamic API Routes:** Next.js 15 requires `params` to be awaited in dynamic routes. **Solution:** Refactored API handlers to correctly handle the `Promise` based `params` object.

## Future Improvements
*   **Real-time Availability:** Integrate a real-time calendar system to show car availability dates.
*   **User Dashboard:** Allow users to track their booking history and manage profiles.
*   **Payment Gateway Integration:** Implement Stripe or local Saudi payment methods (Mada, STC Pay) for real-time transactions.
*   **Admin Panel:** A dedicated dashboard for managing car inventory and booking requests without manual Google Sheets entry.

## Screenshots
*(Placeholders for future screenshots)*
![Home Page Hero](https://picsum.photos/seed/aurum-hero/1200/600)
![Car Listing](https://picsum.photos/seed/aurum-cars/1200/600)
![Booking Process](https://picsum.photos/seed/aurum-booking/1200/600)

---

# 🚀 CV / Portfolio Highlights

*   **Engineered a Full-Stack Luxury Rental Platform:** Developed a high-performance car rental application using **Next.js 15** and **Express.js**, featuring a curated fleet of 20+ luxury vehicles.
*   **Optimized Build Performance:** Resolved critical Next.js 15 prerendering errors by implementing **Suspense boundaries** and correctly handling asynchronous dynamic route parameters, ensuring 100% build success on Vercel.
*   **Implemented Advanced UI/UX Patterns:** Designed an immersive user experience using **Framer Motion** and **GSAP** for fluid animations, including a custom interactive cursor and responsive bento-grid layouts.
*   **Architected Hybrid Backend Logic:** Built a custom Express server to handle complex API requests and integrated **Google Sheets API** for automated booking management.
*   **Ensured Type Safety & Scalability:** Leveraged **TypeScript** across the entire stack, including custom type definitions for Express middleware, to reduce runtime errors and improve developer productivity.
*   **Responsive Design Excellence:** Utilized **Tailwind CSS 4** to create a mobile-first, luxury-themed interface that maintains visual integrity across all screen sizes.
