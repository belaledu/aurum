'use client';

import AppLayout from '@/components/AppLayout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <AppLayout>
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs text-green tracking-[6px] uppercase mb-4">تواصل معنا</div>
            <h1 className="text-5xl md:text-6xl font-display mb-4">نحن هنا لخدمتك</h1>
            <p className="text-soft font-light max-w-2xl mx-auto">فريقنا متاح على مدار الساعة للإجابة على استفساراتك وتلبية احتياجاتك.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-8">
              {[
                { icon: Phone, label: 'اتصل بنا', value: '+966 50 000 0000' },
                { icon: Mail, label: 'البريد الإلكتروني', value: 'info@aurum.sa' },
                { icon: MapPin, label: 'الموقع', value: 'الرياض، المملكة العربية السعودية' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-green-md border border-green/10 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-snow font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-8">
              <form className="p-10 bg-green-lt border border-green/20 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted uppercase">الاسم الكامل</label>
                    <input type="text" className="bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted uppercase">البريد الإلكتروني</label>
                    <input type="email" className="bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-muted uppercase">الموضوع</label>
                  <input type="text" className="bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-muted uppercase">الرسالة</label>
                  <textarea rows={6} className="bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green"></textarea>
                </div>
                <button className="w-full py-5 green-gradient-btn text-white font-bold text-lg flex items-center justify-center gap-3">
                  إرسال الرسالة <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
