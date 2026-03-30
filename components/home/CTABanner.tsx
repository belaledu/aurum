import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Green Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-green/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 text-center reveal">
        <h2 className="text-5xl md:text-7xl font-display mb-10 leading-tight">
          هل أنت مستعد لتجربة <br />
          <span className="text-green">الفخامة الحقيقية؟</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/booking" className="px-12 py-5 green-gradient-btn text-white font-bold text-xl shadow-green hover:scale-105 transition-transform">
            احجز الآن
          </Link>
          <a 
            href="https://wa.me/966500000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 border border-green text-green font-bold text-xl flex items-center gap-3 hover:bg-green/5 transition-colors"
          >
            <MessageCircle size={24} />
            تواصل واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
