'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
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

      if (illustrationRef.current) {
        gsap.fromTo(
          illustrationRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
        );
      }

      gsap.to(illustrationRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
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
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-gradient-to-b from-forest to-green-dk hero-radial-bg"
    >
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-green/10 transform -rotate-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-green/10 transform rotate-6"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1F8A5B 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
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
            <button
              type="submit"
              className="px-10 py-4 green-gradient-btn text-white font-bold text-lg shadow-green hover:scale-105 transition-transform"
            >
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

        {/* Right Illustration */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div ref={illustrationRef} className="relative z-10">
            <svg viewBox="0 0 900 620" className="w-full h-auto drop-shadow-2xl" aria-hidden="true">
              <defs>
                <linearGradient id="heroBgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                </linearGradient>

                <linearGradient id="personSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4d1b8" />
                  <stop offset="100%" stopColor="#d8a98b" />
                </linearGradient>

                <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f5132" />
                  <stop offset="100%" stopColor="#1f8a5b" />
                </linearGradient>

                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fffb" />
                  <stop offset="100%" stopColor="#dcfce7" />
                </linearGradient>

                <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1f8a5b" />
                  <stop offset="100%" stopColor="#a7f3d0" />
                </linearGradient>

                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background glow */}
              <ellipse cx="470" cy="310" rx="290" ry="220" fill="url(#heroBgGlow)" filter="url(#softGlow)" />

              {/* Tablet/booking card behind */}
              <g opacity="0.9">
                <rect x="560" y="135" rx="26" ry="26" width="220" height="320" fill="#0b1220" opacity="0.65" />
                <rect x="578" y="155" rx="18" ry="18" width="184" height="42" fill="#10263a" />
                <rect x="578" y="210" rx="16" ry="16" width="184" height="52" fill="#13293d" />
                <rect x="578" y="273" rx="16" ry="16" width="184" height="52" fill="#13293d" />
                <rect x="578" y="336" rx="16" ry="16" width="184" height="52" fill="#13293d" />
                <circle cx="612" cy="176" r="9" fill="#22c55e" />
                <rect x="631" y="170" width="92" height="12" rx="6" fill="#e2e8f0" opacity="0.85" />
                <rect x="598" y="227" width="124" height="10" rx="5" fill="#94a3b8" />
                <rect x="598" y="240" width="78" height="10" rx="5" fill="#475569" />
                <rect x="598" y="290" width="114" height="10" rx="5" fill="#94a3b8" />
                <rect x="598" y="303" width="92" height="10" rx="5" fill="#475569" />
                <rect x="598" y="353" width="101" height="10" rx="5" fill="#94a3b8" />
                <rect x="598" y="366" width="82" height="10" rx="5" fill="#475569" />
              </g>

              {/* Car booking card in front */}
              <g transform="translate(500 410)">
                <rect x="0" y="0" width="250" height="118" rx="24" fill="#08111b" opacity="0.82" />
                <rect x="18" y="18" width="82" height="82" rx="18" fill="#0f1f16" />
                <path
                  d="M31 67 C36 55, 48 47, 63 47 C74 47, 84 52, 90 60 L96 69 C97 72, 95 76, 91 76 L33 76 C29 76, 27 71, 31 67 Z"
                  fill="url(#carBodyGradient)"
                  opacity="0.9"
                />
                <circle cx="49" cy="77" r="6" fill="#0b1220" />
                <circle cx="79" cy="77" r="6" fill="#0b1220" />
                <rect x="114" y="22" width="116" height="14" rx="7" fill="#e2e8f0" opacity="0.9" />
                <rect x="114" y="44" width="92" height="10" rx="5" fill="#94a3b8" />
                <rect x="114" y="60" width="124" height="10" rx="5" fill="#94a3b8" />
                <rect x="114" y="80" width="66" height="22" rx="11" fill="#22c55e" />
                <rect x="186" y="80" width="52" height="22" rx="11" fill="#13293d" />
              </g>

              {/* Person */}
              <g transform="translate(155 110)">
                {/* shadow */}
                <ellipse cx="175" cy="430" rx="150" ry="28" fill="#000" opacity="0.16" />

                {/* legs */}
                <path d="M170 292 L148 410 Q146 430 165 430 L198 430 Q205 430 206 422 L214 315 Z" fill="url(#shirtGradient)" />
                <path d="M228 292 L262 408 Q267 430 247 430 L214 430 Q205 430 204 421 L204 315 Z" fill="url(#shirtGradient)" />
                <path d="M150 405 L120 470 Q115 485 128 490 L165 490 Q177 490 180 480 L198 430 Z" fill="#111827" />
                <path d="M248 405 L282 470 Q288 485 274 490 L238 490 Q226 490 223 480 L206 430 Z" fill="#111827" />

                {/* shoes */}
                <path d="M112 484 H173 Q184 484 184 495 Q184 505 173 505 H127 Q108 505 104 496 Q102 489 112 484 Z" fill="#0f172a" />
                <path d="M230 484 H291 Q302 484 302 495 Q302 505 291 505 H245 Q226 505 222 496 Q220 489 230 484 Z" fill="#0f172a" />

                {/* torso */}
                <path
                  d="M126 154
                     C126 121, 153 98, 186 98
                     H220
                     C255 98, 279 121, 281 154
                     L291 272
                     C293 289, 281 302, 265 302
                     H143
                     C127 302, 115 289, 117 272
                     Z"
                  fill="url(#shirtGradient)"
                />

                {/* arm holding phone */}
                <path d="M260 174 C298 183, 316 206, 325 230 C330 243, 323 255, 310 259 C297 262, 287 254, 282 244 C275 229, 267 218, 252 213 Z" fill="url(#shirtGradient)" />
                <path d="M272 202 C284 200, 298 208, 305 221 C310 231, 307 240, 299 243 C291 246, 283 241, 279 233 C275 225, 271 217, 267 210 Z" fill="url(#personSkin)" />

                {/* other arm */}
                <path d="M125 180 C97 192, 78 215, 73 241 C70 257, 79 268, 93 270 C107 272, 117 264, 121 250 C125 235, 132 220, 146 213 Z" fill="url(#shirtGradient)" />
                <path d="M86 236 C92 226, 106 222, 118 226 C126 229, 130 237, 127 244 C123 252, 113 256, 103 252 C94 248, 83 245, 80 241 Z" fill="url(#personSkin)" />

                {/* neck */}
                <rect x="176" y="84" width="29" height="26" rx="12" fill="url(#personSkin)" />

                {/* head */}
                <circle cx="191" cy="55" r="45" fill="url(#personSkin)" />
                <path d="M155 54 C159 28, 182 10, 208 10 C235 10, 256 30, 257 57 C238 43, 221 39, 191 39 C173 39, 163 45, 155 54 Z" fill="#1f2937" />
                <path d="M160 59 C166 45, 182 36, 200 36 C218 36, 233 42, 243 54 C241 76, 222 93, 197 94 C173 94, 158 77, 160 59 Z" fill="#111827" />
                <circle cx="176" cy="60" r="4" fill="#0f172a" />
                <circle cx="205" cy="60" r="4" fill="#0f172a" />
                <path d="M177 75 C184 81, 196 82, 204 75" fill="none" stroke="#7c4a2f" strokeWidth="3" strokeLinecap="round" />
                <path d="M160 55 C170 48, 181 44, 194 44 C212 44, 227 49, 240 59" fill="none" stroke="#111827" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

                {/* phone */}
                <g transform="translate(285 160) rotate(12)">
                  <rect x="0" y="0" width="56" height="96" rx="14" fill="url(#phoneGradient)" />
                  <rect x="7" y="14" width="42" height="58" rx="8" fill="url(#screenGradient)" />
                  <rect x="14" y="24" width="28" height="6" rx="3" fill="#22c55e" />
                  <rect x="14" y="36" width="19" height="5" rx="2.5" fill="#94a3b8" />
                  <rect x="14" y="48" width="24" height="5" rx="2.5" fill="#94a3b8" />
                  <circle cx="28" cy="82" r="6" fill="#334155" />
                </g>

                {/* left hand on phone */}
                <path d="M266 176 C278 168, 293 170, 303 180 C309 186, 309 194, 303 199 C296 204, 287 201, 281 196 C274 190, 266 185, 260 182 Z" fill="url(#personSkin)" />

                {/* subtle highlight */}
                <path d="M145 160 C150 140, 169 126, 192 126 H223 C237 126, 250 132, 258 142" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Floating booking tags */}
              <g>
                <g transform="translate(92 166)">
                  <rect x="0" y="0" width="190" height="74" rx="22" fill="#08111b" opacity="0.82" />
                  <circle cx="32" cy="37" r="16" fill="#22c55e" opacity="0.9" />
                  <path d="M26 37 L30 41 L40 30" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="58" y="22" width="92" height="10" rx="5" fill="#e2e8f0" opacity="0.9" />
                  <rect x="58" y="40" width="72" height="8" rx="4" fill="#94a3b8" />
                </g>

                <g transform="translate(602 78)">
                  <rect x="0" y="0" width="170" height="64" rx="20" fill="#08111b" opacity="0.78" />
                  <rect x="18" y="18" width="46" height="28" rx="10" fill="#1f8a5b" opacity="0.95" />
                  <rect x="76" y="19" width="74" height="10" rx="5" fill="#e2e8f0" opacity="0.9" />
                  <rect x="76" y="36" width="54" height="8" rx="4" fill="#94a3b8" />
                </g>
              </g>

              {/* Ground reflection */}
              <ellipse cx="430" cy="545" rx="310" ry="34" fill="#22c55e" opacity="0.08" filter="url(#softGlow)" />
            </svg>

            {/* Floating Stat Cards */}
            <div className="absolute -top-10 -right-10 p-6 bg-green-dk/40 backdrop-blur-md border border-green/20 shadow-dark reveal">
              <div className="text-[10px] text-green tracking-[4px] uppercase mb-1">حجز سريع من الموبايل</div>
              <div className="text-2xl font-mono font-bold text-snow">٣ دقائق <span className="text-xs font-normal text-muted">متوسط الحجز</span></div>
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
