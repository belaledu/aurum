'use client';

import AppLayout from '@/components/AppLayout';
import { Clock, UserCheck, Star, Plane } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServicesPage() {
  const services = [
    { id: 'daily', icon: Clock, title: 'تأجير يومي', description: 'استمتع بقيادة أرقى السيارات العالمية ليوم واحد أو أكثر مع خيارات مرنة للتسليم والاستلام.' },
    { id: 'chauffeur', icon: UserCheck, title: 'تأجير مع سائق', description: 'استرخِ ودع سائقينا المحترفين والمدربين يتولون القيادة، لتصل إلى وجهتك براحة وأمان.' },
    { id: 'vip', icon: Star, title: 'خدمات كبار الشخصيات', description: 'باقات مخصصة للمناسبات الخاصة والوفود الرسمية، مع اهتمام فائق بأدق التفاصيل.' },
    { id: 'airport', icon: Plane, title: 'توصيل للمطار', description: 'استقبال وتوديع فاخر في جميع مطارات المملكة، لنضمن لك بداية ونهاية مثالية لرحلتك.' },
  ];

  return (
    <AppLayout>
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-xs text-green tracking-[6px] uppercase mb-4">خدماتنا</div>
            <h1 className="text-5xl md:text-6xl font-display mb-4">تجربة استثنائية <span className="text-green italic">متكاملة</span></h1>
            <p className="text-soft font-light max-w-2xl mx-auto">نحن في AURUM نتجاوز مجرد تأجير السيارات لنقدم لك خدمات راقية تليق بأسلوب حياتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-green-md border border-green/10 hover:border-green/40 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center text-green mb-8 group-hover:bg-green group-hover:text-white transition-all">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-display mb-6">{service.title}</h3>
                <p className="text-soft text-lg font-light leading-relaxed mb-8">{service.description}</p>
                <button className="text-green font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  اكتشف المزيد <span>←</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
