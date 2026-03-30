'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AppLayout from '@/components/AppLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Check, Calendar, MapPin, Users, Fuel, Gauge, Zap, ShieldCheck, MessageCircle, ArrowLeft } from 'lucide-react';

export default function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState<any>(null);
  const [relatedCars, setRelatedCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`/api/cars/${id}`);
        const data = await res.json();
        setCar(data);
        
        // Fetch related cars (same category)
        if (data.category) {
          const relatedRes = await fetch(`/api/cars?category=${data.category}`);
          const relatedData = await relatedRes.json();
          setRelatedCars(relatedData.filter((c: any) => c.id !== id).slice(0, 3));
        }
      } catch (error) {
        console.error('Failed to fetch car:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-green-dk flex items-center justify-center text-green">جاري التحميل...</div>;
  if (!car) return <div className="min-h-screen bg-green-dk flex items-center justify-center text-white">السيارة غير موجودة</div>;

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={car.image}
          alt={car.model}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-dk via-green-dk/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex flex-col items-start"
            >
              <div className="inline-block px-3 py-1 bg-green/20 border border-green/30 text-green tracking-[4px] uppercase text-[10px] mb-4 font-mono backdrop-blur-sm">
                {car.brand}
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-snow mb-6 leading-tight">
                {car.model} <span className="text-green/50">{car.year}</span>
              </h1>
              <div className="flex flex-wrap gap-8 text-soft text-sm">
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <MapPin size={16} className="text-green" /> {car.city}
                </span>
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <Users size={16} className="text-green" /> {car.seats} مقاعد
                </span>
                <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <Zap size={16} className="text-green" /> {car.category}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Details */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {[
                { label: 'المحرك', value: car.engine, icon: Fuel },
                { label: 'القوة', value: `${car.hp} HP`, icon: Gauge },
                { label: 'ناقل الحركة', value: 'أوتوماتيك', icon: Zap },
                { label: 'الوقود', value: 'بنزين ٩٨', icon: Fuel },
              ].map((spec, i) => (
                <div key={i} className="p-8 bg-green-md border border-green/5 flex flex-col items-center text-center group hover:border-green/20 transition-all">
                  <spec.icon className="text-green mb-6 group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-[10px] text-muted uppercase tracking-widest mb-2">{spec.label}</span>
                  <span className="text-snow font-bold text-lg">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-20">
              <h3 className="text-3xl font-display mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-green"></span>
                نظرة عامة
              </h3>
              <p className="text-soft font-light leading-relaxed text-xl mb-8">
                تعتبر {car.brand} {car.model} واحدة من أرقى السيارات في فئتها، حيث تجمع بين الأداء القوي والراحة المتناهية. صُممت هذه السيارة لتلبي تطلعات عشاق الفخامة والتميز، مع مقصورة داخلية فاخرة مجهزة بأحدث التقنيات العالمية.
              </p>
              <p className="text-soft font-light leading-relaxed text-xl">
                سواء كنت في رحلة عمل أو مناسبة خاصة، ستضمن لك هذه السيارة حضوراً لافتاً وتجربة قيادة لا تُنسى في شوارع {car.city}. نحن في AURUM نضمن لك استلام السيارة في أفضل حالة مع خدمة عملاء متميزة على مدار الساعة.
              </p>
            </div>

            <div className="mb-20">
              <h3 className="text-3xl font-display mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-green"></span>
                الميزات والتجهيزات
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  'نظام ملاحة متطور مع خرائط ثلاثية الأبعاد', 
                  'كاميرا ٣٦٠ درجة مع رؤية ليلية', 
                  'نظام صوتي محيطي عالي الدقة',
                  'مقاعد جلدية فاخرة مع خاصية التدليك', 
                  'سقف بانورامي مع تحكم كهربائي', 
                  'نظام ترفيه خلفي مع شاشات مستقلة',
                  'دخول ذكي وتشغيل بدون مفتاح', 
                  'نظام المساعدة على الركن التلقائي', 
                  'إضاءة داخلية محيطية متعددة الألوان'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-soft text-base">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-green" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-green-md border border-green/10">
              <h3 className="text-2xl font-display mb-8">شروط الإيجار</h3>
              <div className="space-y-6">
                {[
                  'يجب أن يكون عمر المستأجر ٢٥ عاماً على الأقل.',
                  'رخصة قيادة سارية المفعول (سعودية أو دولية).',
                  'مبلغ التأمين المسترد: ٥٠٠٠ ريال سعودي يتم إعادته بعد الفحص.',
                  'الحد الأقصى للمسافة المقطوعة: ٢٥٠ كم في اليوم.'
                ].map((term, i) => (
                  <div key={i} className="flex items-start gap-4 text-soft/80 text-sm">
                    <ShieldCheck size={20} className="text-green shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Card (Sticky) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-green-lt p-10 border border-green/20 shadow-2xl">
              <div className="mb-10">
                <div className="text-muted text-[10px] uppercase tracking-[4px] mb-3">السعر اليومي</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-mono font-bold text-green">{car.dailyPrice}</span>
                  <span className="text-soft text-sm">ريال سعودي / يوم</span>
                </div>
              </div>

              <div className="space-y-8 mb-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] text-muted uppercase tracking-widest">تاريخ الاستلام</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-green" size={18} />
                    <input type="date" className="w-full bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] text-muted uppercase tracking-widest">تاريخ الإعادة</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-green" size={18} />
                    <input type="date" className="w-full bg-green-dk border border-green/10 text-snow p-4 outline-none focus:border-green transition-colors" />
                  </div>
                </div>
              </div>

              <Link 
                href={`/booking?carId=${car.id}`}
                className="block w-full py-6 green-gradient-btn text-white font-bold text-center text-xl shadow-green hover:scale-[1.02] transition-all mb-6"
              >
                احجز هذه السيارة
              </Link>

              <a 
                href={`https://wa.me/966500000000?text=أرغب في حجز ${car.brand} ${car.model}`}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full py-5 border border-green/30 text-green font-bold hover:bg-green/5 transition-all text-lg"
              >
                <MessageCircle size={22} />
                تواصل عبر واتساب
              </a>

              <div className="mt-10 pt-10 border-t border-green/10 text-center">
                <p className="text-muted text-[10px] leading-relaxed">
                  الأسعار تشمل ضريبة القيمة المضافة والتأمين الشامل. تطبق الشروط والأحكام.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <section className="py-24 bg-green-dk/50 border-t border-green/5">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-snow mb-4">سيارات مشابهة</h2>
                <p className="text-muted">قد يعجبك أيضاً هذه السيارات من نفس الفئة</p>
              </div>
              <Link href="/cars" className="text-green hover:underline flex items-center gap-2 text-sm">
                عرض الكل <ArrowLeft size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <Link 
                  key={relatedCar.id} 
                  href={`/cars/${relatedCar.id}`}
                  className="group bg-green-md border border-green/5 overflow-hidden hover:border-green/20 transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={relatedCar.image} 
                      alt={relatedCar.model} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-green-dk/80 backdrop-blur-md px-3 py-1 text-[10px] text-green font-mono">
                      {relatedCar.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] text-muted uppercase tracking-widest mb-2">{relatedCar.brand}</div>
                    <h4 className="text-xl font-bold text-snow mb-4">{relatedCar.model}</h4>
                    <div className="flex justify-between items-center">
                      <div className="text-green font-mono font-bold">{relatedCar.dailyPrice} ريال</div>
                      <div className="text-muted text-xs">يومياً</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </AppLayout>
  );
}
