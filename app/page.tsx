'use client';

import AppLayout from '@/components/AppLayout';
import Hero from '@/components/home/Hero';
import BookingSearchBar from '@/components/home/BookingSearchBar';
import MarqueeStrip from '@/components/home/MarqueeStrip';
import FeaturedCars from '@/components/home/FeaturedCars';
import AboutStrip from '@/components/home/AboutStrip';
import HowItWorks from '@/components/home/HowItWorks';
import StatsSection from '@/components/home/StatsSection';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <BookingSearchBar />
      <MarqueeStrip />
      <FeaturedCars />
      <AboutStrip />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <CTABanner />
    </AppLayout>
  );
}
