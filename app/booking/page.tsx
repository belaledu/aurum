'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AppLayout from '@/components/AppLayout';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Check, CreditCard, User, Calendar, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const carId = searchParams.get('carId');
  const [car, setCar] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    paymentMethod: 'bank_transfer',
  });

  useEffect(() => {
    if (carId) {
      fetch(`/api/cars/${carId}`)
        .then(res => res.json())
        .then(data => setCar(data));
    }
  }, [carId]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, carId }),
      });
      if (res.ok) {
        setStep(4); // Success step
      }
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  if (!car && step < 4) return <div className="min-h-screen bg-green-dk flex items-center justify-center text-green">جاري التحميل...</div>;

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green/10 -translate-y-1/2 z-0"></div>
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                step >= i ? 'bg-green border-green text-snow' : 'bg-green-dk border-green/20 text-muted'
              }`}
            >
              {step > i ? <Check size={18} /> : i}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest whitespace-nowrap">
                {i === 1 ? 'التفاصيل' : i === 2 ? 'المعلومات' : 'الدفع'}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Area */}
          <div className="lg:col-span-7">
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-display mb-8">تفاصيل الحجز</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted uppercase">تاريخ الاستلام</label>
                      <input 
                        type="date" 
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                        className="bg-green-md border border-green/10 text-snow p-4 outline-none focus:border-green" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted uppercase">تاريخ الإعادة</label>
                      <input 
                        type="date" 
                        value={formData.returnDate}
                        onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                        className="bg-green-md border border-green/10 text-snow p-4 outline-none focus:border-green" 
                      />
                    </div>
                  </div>
                  <button onClick={handleNext} className="w-full py-4 green-gradient-btn text-white font-bold flex items-center justify-center gap-2">
                    التالي <ArrowLeft size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-display mb-8">المعلومات الشخصية</h2>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-muted uppercase">الاسم الكامل</label>
                    <input 
                      type="text" 
                      placeholder="أدخل اسمك كما في الهوية"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="bg-green-md border border-green/10 text-snow p-4 outline-none focus:border-green" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted uppercase">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-green-md border border-green/10 text-snow p-4 outline-none focus:border-green" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-muted uppercase">رقم الجوال</label>
                      <input 
                        type="tel" 
                        placeholder="+966 5x xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-green-md border border-green/10 text-snow p-4 outline-none focus:border-green" 
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={handleBack} className="flex-1 py-4 border border-green/20 text-snow font-bold flex items-center justify-center gap-2">
                      <ArrowRight size={18} /> السابق
                    </button>
                    <button onClick={handleNext} className="flex-[2] py-4 green-gradient-btn text-white font-bold flex items-center justify-center gap-2">
                      التالي <ArrowLeft size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-display mb-8">تأكيد الحجز والدفع</h2>
                <div className="space-y-8">
                  <div className="p-6 bg-green-md border border-green/10">
                    <h4 className="text-sm font-bold mb-4">اختر طريقة الدفع</h4>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 p-4 border border-green/10 cursor-pointer hover:bg-green/5 transition-colors">
                        <input 
                          type="radio" 
                          name="payment" 
                          checked={formData.paymentMethod === 'bank_transfer'}
                          onChange={() => setFormData({...formData, paymentMethod: 'bank_transfer'})}
                          className="accent-green" 
                        />
                        <div className="flex-1">
                          <div className="font-bold">تحويل بنكي</div>
                          <div className="text-xs text-muted">سيتم إرسال تفاصيل الحساب بعد التأكيد</div>
                        </div>
                        <CreditCard size={20} className="text-green" />
                      </label>
                      <label className="flex items-center gap-4 p-4 border border-green/10 cursor-pointer hover:bg-green/5 transition-colors">
                        <input 
                          type="radio" 
                          name="payment" 
                          checked={formData.paymentMethod === 'stc_pay'}
                          onChange={() => setFormData({...formData, paymentMethod: 'stc_pay'})}
                          className="accent-green" 
                        />
                        <div className="flex-1">
                          <div className="font-bold">STC Pay</div>
                          <div className="text-xs text-muted">دفع سريع وآمن عبر تطبيق STC Pay</div>
                        </div>
                        <div className="text-green font-bold text-xs">STC</div>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green/5 border border-green/20">
                    <ShieldCheck size={20} className="text-green shrink-0" />
                    <p className="text-xs text-soft">بضغطك على تأكيد الحجز، أنت توافق على شروط وأحكام AURUM وسياسة الخصوصية. سيتم مراجعة طلبك والتواصل معك خلال أقل من ساعة.</p>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={handleBack} className="flex-1 py-4 border border-green/20 text-snow font-bold flex items-center justify-center gap-2">
                      <ArrowRight size={18} /> السابق
                    </button>
                    <button onClick={handleSubmit} className="flex-[2] py-4 green-gradient-btn text-white font-bold">
                      تأكيد الحجز النهائي
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <div className="w-24 h-24 bg-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-green">
                  <Check size={48} className="text-white" />
                </div>
                <h2 className="text-4xl font-display mb-4">تم استلام طلبك بنجاح!</h2>
                <p className="text-soft mb-10 max-w-md mx-auto">شكراً لاختيارك AURUM. سيقوم فريقنا بمراجعة طلبك والتواصل معك عبر الواتساب أو الجوال لتأكيد الحجز وإكمال عملية الدفع.</p>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <Link href="/" className="py-4 green-gradient-btn text-white font-bold">العودة للرئيسية</Link>
                  <Link href="/cars" className="py-4 border border-green/20 text-snow font-bold">تصفح المزيد من السيارات</Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Summary Area */}
          {step < 4 && (
            <div className="lg:col-span-5">
              <div className="bg-green-lt p-8 border border-green/20 sticky top-32">
                <h3 className="text-xl font-display mb-6">ملخص الحجز</h3>
                <div className="flex gap-4 mb-6 pb-6 border-b border-green/10">
                  <div className="relative w-24 h-16 bg-forest rounded overflow-hidden">
                    <Image src={car.image} alt={car.model} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-[10px] text-green tracking-widest uppercase">{car.brand}</div>
                    <div className="font-bold text-snow">{car.model}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">سعر الإيجار اليومي</span>
                    <span className="text-snow">{car.dailyPrice} ريال</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">المدة</span>
                    <span className="text-snow">٣ أيام</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">ضريبة القيمة المضافة (١٥٪)</span>
                    <span className="text-snow">{(car.dailyPrice * 3 * 0.15).toFixed(0)} ريال</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-green/20">
                  <span className="text-lg font-display">الإجمالي</span>
                  <div className="text-3xl font-mono font-bold text-green">
                    {(car.dailyPrice * 3 * 1.15).toFixed(0)} <span className="text-xs font-normal text-muted">ريال</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function BookingPage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="min-h-screen bg-green-dk flex items-center justify-center text-green">جاري التحميل...</div>}>
        <BookingContent />
      </Suspense>
    </AppLayout>
  );
}
