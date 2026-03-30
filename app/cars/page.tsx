'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AppLayout from '@/components/AppLayout';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function CarsPage() {
  const searchParams = useSearchParams();
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || 'الكل',
    category: searchParams.get('category') || 'الكل',
    search: searchParams.get('search') || '',
  });

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.city !== 'الكل') params.append('city', filters.city);
      if (filters.category !== 'الكل') params.append('category', filters.category);
      if (filters.search) params.append('search', filters.search);

      try {
        const res = await fetch(`/api/cars?${params.toString()}`);
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [filters]);

  return (
    <AppLayout>
      {/* Header Hero */}
      <section className="bg-forest py-20 border-b border-green/10">
        <div className="container mx-auto px-6">
          <div className="text-xs text-green tracking-[4px] uppercase mb-4">الرئيسية / السيارات</div>
          <h1 className="text-5xl md:text-6xl font-display mb-4">أسطولنا الحصري</h1>
          <p className="text-soft font-light max-w-2xl">استعرض مجموعتنا الواسعة من السيارات الفاخرة المتاحة للإيجار في جميع أنحاء المملكة.</p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-green-md shadow-dark border-b border-green/10 py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-6">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              placeholder="ابحث عن ماركة أو موديل..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full bg-green-dk border border-green/20 text-snow px-12 py-3 outline-none focus:border-green transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="bg-green-dk border border-green/20 text-snow px-6 py-3 outline-none focus:border-green transition-colors"
            >
              <option value="الكل">كل المدن</option>
              <option value="Riyadh">الرياض</option>
              <option value="Jeddah">جدة</option>
              <option value="Dammam">الدمام</option>
            </select>

            <select 
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="bg-green-dk border border-green/20 text-snow px-6 py-3 outline-none focus:border-green transition-colors"
            >
              <option value="الكل">كل الفئات</option>
              <option value="sedan">سيدان</option>
              <option value="SUV">SUV</option>
              <option value="sport">سبورت</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Area */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div className="text-soft text-sm">عرض {cars.length} سيارة</div>
          <button className="flex items-center gap-2 text-green text-sm font-bold">
            <SlidersHorizontal size={16} />
            <span>تصفية متقدمة</span>
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[450px] bg-green-lt/20 animate-pulse"></div>
            ))}
          </div>
        ) : cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <div className="text-6xl mb-6">🚗</div>
            <h3 className="text-2xl font-display mb-4">لا توجد سيارات متاحة</h3>
            <p className="text-soft mb-8">جرب تغيير معايير البحث أو اختيار تواريخ أخرى.</p>
            <button 
              onClick={() => setFilters({ city: 'الكل', category: 'الكل', search: '' })}
              className="px-8 py-3 border border-green text-green font-bold hover:bg-green hover:text-white transition-all"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}
      </section>
    </AppLayout>
  );
}

function CarCard({ car, index }: { car: any, index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group bg-green-lt relative overflow-hidden border-t border-green/10 hover:border-green/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-green"
    >
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green/15 text-green text-[10px] font-bold tracking-widest uppercase">
        {car.category}
      </div>
      
      <div className="relative h-64 overflow-hidden bg-forest">
        <Image
          src={car.image}
          alt={car.name || `${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-lt to-transparent"></div>
      </div>

      <div className="p-7">
        <div className="text-[10px] text-green tracking-[4px] uppercase mb-1 font-mono">{car.brand}</div>
        <h3 className="text-2xl font-display text-snow mb-4">{car.model} {car.year}</h3>

        <div className="flex justify-between text-[10px] text-soft font-mono mb-6 border-b border-green/10 pb-4">
          <span>{car.hp} HP</span>
          <span className="w-[1px] h-3 bg-green/20"></span>
          <span>{car.seats} مقاعد</span>
          <span className="w-[1px] h-3 bg-green/20"></span>
          <span>{car.engine}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted uppercase">من</span>
            <div className="text-2xl font-mono font-bold text-green">
              {car.dailyPrice} <span className="text-xs font-normal text-muted">ريال / يوم</span>
            </div>
          </div>
          
          <Link href={`/cars/${car.id}`} className="px-6 py-2 border border-green text-green text-xs font-bold hover:bg-green hover:text-white transition-all">
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
