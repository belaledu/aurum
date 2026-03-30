'use client';

import AppLayout from '@/components/AppLayout';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <AppLayout>
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[600px]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Car" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 p-10 bg-green-dk border border-green/20 hidden md:block">
                <div className="text-5xl font-display font-bold text-green mb-2">١٥+</div>
                <div className="text-xs tracking-[4px] uppercase text-soft">عاماً من التميز</div>
              </div>
            </motion.div>

            <div>
              <div className="text-xs text-green tracking-[6px] uppercase mb-6">من نحن</div>
              <h1 className="text-5xl md:text-6xl font-display mb-8">نحن نرسم معالم <span className="text-green italic">الفخامة</span> في المملكة</h1>
              <p className="text-soft text-lg font-light leading-relaxed mb-8">
                تأسست AURUM لتكون الوجهة الأولى لعشاق الفخامة والتميز في المملكة العربية السعودية. نحن لا نقدم مجرد خدمة تأجير سيارات، بل نقدم تجربة متكاملة تعكس الرقي والرفاهية التي تليق بنخبة المجتمع.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-snow font-bold mb-4">رؤيتنا</h4>
                  <p className="text-muted text-sm">أن نكون الشركة الرائدة عالمياً في تقديم خدمات النقل الفاخرة، مع الحفاظ على هويتنا السعودية الأصيلة.</p>
                </div>
                <div>
                  <h4 className="text-snow font-bold mb-4">مهمتنا</h4>
                  <p className="text-muted text-sm">توفير أسطول حصري من أحدث السيارات العالمية مع خدمة عملاء استثنائية تضمن الراحة والأمان.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
