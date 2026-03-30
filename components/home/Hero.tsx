'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-h1 span', { y: 40, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-trust', { opacity: 0, duration: 1 }, '-=0.2');

      gsap.fromTo(carRef.current, 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
      );

      // Parallax effect
      gsap.to(carRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
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
    <section ref={heroRef} className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-gradient-to-b from-forest to-green-dk hero-radial-bg">
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-green/10 transform -rotate-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-green/10 transform rotate-6"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1F8A5B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-right">
          <div className="hero-eyebrow mb-6 px-4 py-1 border border-green/30 bg-green/10 text-green text-[10px] tracking-[4px] uppercase">
            تأجير السيارات الفاخرة — المملكة العربية السعودية
          </div>

          <h1 className="hero-h1 text-6xl md:text-8xl font-display leading-[1.1] mb-8">
            <span className="block italic font-light text-snow">اكتشف</span>
            <span className="block font-bold text-green">الفخامة الحقيقية</span>
            <span className="block italic font-light text-muted text-4xl md:text-6xl mt-2">على طرق المملكة</span>
          </h1>

          <p className="hero-subtitle text-soft text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            استمتع بتجربة قيادة استثنائية مع أسطولنا الحصري من السيارات الفاخرة. نوفر لك الرقي والراحة التي تستحقها في كل رحلة.
          </p>

          <form onSubmit={handleSearch} className="hero-ctas flex flex-wrap gap-6 mb-12 w-full max-w-md">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="ابحث عن سيارة أحلامك..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-green/5 border border-green/30 text-snow outline-none focus:border-green transition-colors placeholder:text-muted/60"
              />
            </div>
            <button type="submit" className="px-10 py-4 green-gradient-btn text-white font-bold text-lg shadow-green hover:scale-105 transition-transform">
              تصفح أسطولنا
            </button>
          </form>

          <div className="hero-trust flex flex-wrap gap-x-8 gap-y-4 text-[10px] tracking-[2px] text-muted uppercase border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <span className="text-green font-bold">١٥</span> عاماً خبرة
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green font-bold">+٢٠٠</span> سيارة
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green font-bold">٢</span> ساعة تسليم
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green font-bold">٢٤/٧</span> دعم
            </div>
          </div>
        </div>

        {/* Right Car Illustration - Ferrari Silhouette */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div ref={carRef} className="relative z-10">
            <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--green)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--green-light)" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Ferrari F8 Tributo Detailed Silhouette */}
              <g className="car-body">
                {/* Main Body */}
                <path 
                  d="M50,310 L80,305 C120,295 160,260 220,220 C280,180 380,145 500,145 C620,145 700,180 740,220 C770,250 790,290 795,310 L780,335 L50,335 Z" 
                  fill="url(#carGradient)" 
                  stroke="var(--green)" 
                  strokeWidth="1.5" 
                />
                
                {/* Roof and Window Line */}
                <path 
                  d="M280,185 C350,155 480,155 550,185 L530,220 L300,220 Z" 
                  fill="rgba(255,255,255,0.05)" 
                  stroke="var(--green)" 
                  strokeWidth="1" 
                  opacity="0.6"
                />
                
                {/* Side Vent */}
                <path 
                  d="M580,230 L640,230 L630,270 L590,270 Z" 
                  fill="rgba(0,0,0,0.2)" 
                  stroke="var(--green)" 
                  strokeWidth="0.5"
                />
                
                {/* Front Headlight Detail */}
                <path 
                  d="M720,210 C740,220 760,240 770,260" 
                  stroke="var(--green-light)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  filter="url(#glow)"
                  opacity="0.8"
                />
                
                {/* Rear Spoiler Lip */}
                <path 
                  d="M50,310 L40,300 L60,305" 
                  stroke="var(--green)" 
                  strokeWidth="2" 
                  fill="none"
                />
              </g>

              {/* Wheels */}
              <g className="wheels">
                {/* Rear Wheel */}
                <g transform="translate(180, 320)">
                  <circle r="48" fill="var(--green-dk)" stroke="var(--green)" strokeWidth="2" />
                  <circle r="38" fill="none" stroke="var(--green)" strokeWidth="1" strokeDasharray="10,5" />
                  <circle r="10" fill="var(--green)" opacity="0.3" />
                </g>
                
                {/* Front Wheel */}
                <g transform="translate(620, 320)">
                  <circle r="48" fill="var(--green-dk)" stroke="var(--green)" strokeWidth="2" />
                  <circle r="38" fill="none" stroke="var(--green)" strokeWidth="1" strokeDasharray="10,5" />
                  <circle r="10" fill="var(--green)" opacity="0.3" />
                </g>
              </g>
              
              {/* Bottom Shadow Line */}
              <path d="M60,345 L740,345" stroke="var(--green)" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
            </svg>

            {/* Floating Stat Cards */}
            <div className="absolute -top-10 -right-10 p-6 bg-green-dk/40 backdrop-blur-md border border-green/20 shadow-dark reveal">
              <div className="text-[10px] text-green tracking-[4px] uppercase mb-1">Ferrari F8 Tributo</div>
              <div className="text-2xl font-mono font-bold text-snow">٣٫٢٠٠ ريال <span className="text-xs font-normal text-muted">/ يوم</span></div>
            </div>

            <div className="absolute -bottom-10 -left-10 p-6 bg-green-dk/40 backdrop-blur-md border border-green/20 shadow-dark reveal">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <div className="text-sm font-medium text-snow">متاح الآن في الرياض</div>
              </div>
            </div>
          </div>
          
          {/* Ground Reflection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-green/10 blur-3xl rounded-[100%] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
