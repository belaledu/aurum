'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-h1 span', { y: 40, opacity: 0, stagger: 0.2, duration: 0.8 }, '-=0.3')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-trust', { opacity: 0, duration: 1 }, '-=0.2');

      gsap.fromTo(personRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 0.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/cars?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-gradient-to-b from-forest to-green-dk">
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-right">
          
          <div className="hero-eyebrow mb-6 px-4 py-1 border border-green/30 bg-green/10 text-green text-[10px] tracking-[4px] uppercase">
            تأجير السيارات الفاخرة — المملكة العربية السعودية
          </div>

          <h1 className="hero-h1 text-6xl md:text-8xl font-display leading-[1.1] mb-8">
            <span className="block italic font-light text-snow">اكتشف</span>
            <span className="block font-bold text-green">الفخامة الحقيقية</span>
            <span className="block italic font-light text-muted text-4xl md:text-6xl mt-2">
              على طرق المملكة
            </span>
          </h1>

          <p className="hero-subtitle text-soft text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            استمتع بتجربة قيادة استثنائية مع أسطولنا الحصري من السيارات الفاخرة.
          </p>

          <form onSubmit={handleSearch} className="hero-ctas flex gap-6 mb-12 w-full max-w-md">
            <input
              type="text"
              placeholder="ابحث عن سيارة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-green/5 border border-green/30 text-snow outline-none"
            />
            <button className="px-8 py-4 bg-green text-white font-bold">
              بحث
            </button>
          </form>

          <div className="hero-trust flex gap-6 text-sm text-muted">
            <span>+٢٠٠ سيارة</span>
            <span>توصيل سريع</span>
            <span>دعم ٢٤/٧</span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:col-span-5 hidden lg:block">
          <div ref={personRef}>

            <svg viewBox="0 0 400 500" className="w-full h-auto">

              {/* Head */}
              <circle cx="200" cy="100" r="40" fill="#F1F5F9" />

              {/* Ghutra */}
              <path d="M150 90 Q200 40 250 90 L240 120 Q200 90 160 120 Z" fill="white" />

              {/* Body (Thobe) */}
              <rect x="140" y="140" width="120" height="220" rx="20" fill="white" />

              {/* Arms */}
              <rect x="110" y="160" width="40" height="140" rx="20" fill="white" />
              <rect x="250" y="160" width="40" height="140" rx="20" fill="white" />

              {/* Phone */}
              <rect x="255" y="200" width="30" height="50" rx="6" fill="#1F8A5B" />

              {/* Car Icon on Phone */}
              <rect x="260" y="215" width="20" height="10" rx="2" fill="white" />

              {/* Floating Car */}
              <g transform="translate(80,350)">
                <rect x="0" y="0" width="120" height="40" rx="10" fill="var(--green)" opacity="0.2" />
                <circle cx="30" cy="45" r="10" fill="var(--green)" />
                <circle cx="90" cy="45" r="10" fill="var(--green)" />
              </g>

            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}
