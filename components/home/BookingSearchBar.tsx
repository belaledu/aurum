'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BookingSearchBar() {
  const router = useRouter();
  const [city, setCity] = useState('الكل');
  const [category, setCategory] = useState('الكل');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city !== 'الكل') params.append('city', city);
    if (category !== 'الكل') params.append('category', category);
    if (pickupDate) params.append('pickup', pickupDate);
    if (returnDate) params.append('return', returnDate);
    
    router.push(`/cars?${params.toString()}`);
  };

  return (
    <section className="container mx-auto px-6 -mt-12 relative z-20">
      <div className="bg-[#0B1D14] p-2 shadow-dark grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="flex flex-col p-4 border-l border-[#1F4D38]">
          <label className="text-[10px] text-green-light uppercase tracking-widest mb-1">المدينة</label>
          <select 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent text-white font-medium outline-none cursor-pointer"
          >
            <option value="الكل" className="text-forest">الكل</option>
            <option value="Riyadh" className="text-forest">الرياض</option>
            <option value="Jeddah" className="text-forest">جدة</option>
            <option value="Dammam" className="text-forest">الدمام</option>
          </select>
        </div>
        
        <div className="flex flex-col p-4 border-l border-[#1F4D38]">
          <label className="text-[10px] text-green-light uppercase tracking-widest mb-1">تاريخ الاستلام</label>
          <input 
            type="date" 
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="bg-transparent text-white font-medium outline-none cursor-pointer [color-scheme:dark]" 
          />
        </div>

        <div className="flex flex-col p-4 border-l border-[#1F4D38]">
          <label className="text-[10px] text-green-light uppercase tracking-widest mb-1">تاريخ الإعادة</label>
          <input 
            type="date" 
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="bg-transparent text-white font-medium outline-none cursor-pointer [color-scheme:dark]" 
          />
        </div>

        <div className="flex flex-col p-4 border-l border-[#1F4D38]">
          <label className="text-[10px] text-green-light uppercase tracking-widest mb-1">نوع السيارة</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent text-white font-medium outline-none cursor-pointer"
          >
            <option value="الكل" className="text-forest">الكل</option>
            <option value="sedan" className="text-forest">سيدان</option>
            <option value="SUV" className="text-forest">SUV</option>
            <option value="sport" className="text-forest">سبورت</option>
          </select>
        </div>

        <button 
          onClick={handleSearch}
          className="green-gradient-btn text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity h-full min-h-[60px]"
        >
          <Search size={20} />
          <span>ابحث الآن</span>
        </button>
      </div>
    </section>
  );
}
