'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function FeaturedCars() {
  const [activeTab, setActiveTab] = useState('الكل');
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const tabs = [
    { label: 'الكل', value: 'الكل' },
    { label: 'سيدان', value: 'sedan' },
    { label: 'SUV', value: 'SUV' },
    { label: 'سبورت', value: 'sport' }
  ];

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/cars');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setCars(data.filter((car: any) => car.isFeatured));
      } catch (error) {
        console.error('Error fetching featured cars:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const filteredCars = activeTab === 'الكل' ? cars : cars.filter(c => c.category === activeTab);

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="reveal">
          <h2 className="text-5xl md:text-6xl font-display mb-4">سيارات تستحق الملوك</h2>
          <p className="text-soft font-light max-w-md">اختر من بين مجموعتنا المختارة بعناية لأرقى السيارات في العالم.</p>
        </div>

        <div className="flex gap-4 border-b border-white/10 pb-2 reveal">
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 text-sm transition-all relative ${activeTab === tab.value ? 'text-green' : 'text-muted hover:text-soft'}`}
            >
              {tab.label}
              {activeTab === tab.value && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-green" />
              )}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[450px] bg-green-lt/20 animate-pulse border border-green/10"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

function CarCard({ car, index }: { car: any, index: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-green-lt relative overflow-hidden border-t border-green/10 hover:border-green/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-green"
    >
      {/* Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-green scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>

      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green/15 text-green text-[10px] font-bold tracking-widest uppercase">
        {car.category}
      </div>
      {car.isFeatured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-green text-white text-[10px] font-bold tracking-widest">
          الأكثر طلباً
        </div>
      )}

      {/* Image Area */}
      <div className="relative h-60 overflow-hidden bg-forest">
        <div className="absolute inset-0 bg-hero-radial opacity-50"></div>
        <Image
          src={car.image}
          alt={car.model}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-lt to-transparent"></div>
      </div>

      {/* Info Area */}
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
          
          <Link href={`/cars/${car.id}`} className="px-4 py-2 border border-green text-green text-xs font-bold hover:bg-green hover:text-white transition-all">
            احجز الآن
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
