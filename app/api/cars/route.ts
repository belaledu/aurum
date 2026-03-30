import { NextResponse } from 'next/server';
import { cars } from '@/lib/cars-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const category = searchParams.get('category');
  const search = searchParams.get('search')?.toLowerCase();

  let filteredCars = [...cars];

  if (city && city !== 'الكل') {
    filteredCars = filteredCars.filter(car => car.city === city);
  }

  if (category && category !== 'الكل') {
    filteredCars = filteredCars.filter(car => car.category === category);
  }

  if (search) {
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase().includes(search) || 
      car.model.toLowerCase().includes(search)
    );
  }

  return NextResponse.json(filteredCars);
}
