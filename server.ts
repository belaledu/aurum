import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock Data for initial development
const mockCars = [
  { id: '1', brand: 'ROLLS ROYCE', model: 'Ghost', year: 2024, category: 'sedan', dailyPrice: 2500, status: 'available', city: 'Riyadh', hp: 563, seats: 4, engine: 'V12', image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '2', brand: 'BENTLEY', model: 'Bentayga S', year: 2023, category: 'SUV', dailyPrice: 1800, status: 'available', city: 'Jeddah', hp: 542, seats: 5, engine: 'V8', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '3', brand: 'FERRARI', model: 'F8 Tributo', year: 2024, category: 'sport', dailyPrice: 3200, status: 'available', city: 'Riyadh', hp: 710, seats: 2, engine: 'V8 Turbo', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '4', brand: 'LAMBORGHINI', model: 'Urus Performante', year: 2023, category: 'SUV', dailyPrice: 2800, status: 'available', city: 'Dammam', hp: 666, seats: 5, engine: 'V8', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '5', brand: 'PORSCHE', model: '911 GT3', year: 2024, category: 'sport', dailyPrice: 2200, status: 'available', city: 'Riyadh', hp: 502, seats: 2, engine: 'Flat-6', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '6', brand: 'MERCEDES-MAYBACH', model: 'S-Class', year: 2024, category: 'sedan', dailyPrice: 2100, status: 'available', city: 'Jeddah', hp: 496, seats: 4, engine: 'V8', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '7', brand: 'ASTON MARTIN', model: 'DBX 707', year: 2023, category: 'SUV', dailyPrice: 2400, status: 'available', city: 'Riyadh', hp: 697, seats: 5, engine: 'V8', image: 'https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '8', brand: 'MCLAREN', model: '720S', year: 2023, category: 'sport', dailyPrice: 3500, status: 'available', city: 'Jeddah', hp: 710, seats: 2, engine: 'V8', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '9', brand: 'RANGE ROVER', model: 'Autobiography', year: 2024, category: 'SUV', dailyPrice: 1500, status: 'available', city: 'Dammam', hp: 523, seats: 5, engine: 'V8', image: 'https://images.unsplash.com/photo-1606148664066-2959e99533a8?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '10', brand: 'AUDI', model: 'R8 V10 Performance', year: 2023, category: 'sport', dailyPrice: 1900, status: 'available', city: 'Riyadh', hp: 602, seats: 2, engine: 'V10', image: 'https://images.unsplash.com/photo-1603553329474-99f95f35394f?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '11', brand: 'BMW', model: 'M8 Competition', year: 2024, category: 'sport', dailyPrice: 1600, status: 'available', city: 'Jeddah', hp: 617, seats: 4, engine: 'V8', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '12', brand: 'CADILLAC', model: 'Escalade V', year: 2024, category: 'SUV', dailyPrice: 1700, status: 'available', city: 'Riyadh', hp: 682, seats: 7, engine: 'V8 Supercharged', image: 'https://images.unsplash.com/photo-1632245889029-e406fbdd30e6?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '13', brand: 'MASERATI', model: 'MC20', year: 2023, category: 'sport', dailyPrice: 2600, status: 'available', city: 'Jeddah', hp: 621, seats: 2, engine: 'V6', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '14', brand: 'ROLLS ROYCE', model: 'Cullinan', year: 2024, category: 'SUV', dailyPrice: 3000, status: 'available', city: 'Riyadh', hp: 563, seats: 5, engine: 'V12', image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '15', brand: 'BENTLEY', model: 'Continental GT', year: 2024, category: 'sport', dailyPrice: 2300, status: 'available', city: 'Jeddah', hp: 650, seats: 4, engine: 'W12', image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '16', brand: 'LAMBORGHINI', model: 'Huracan STO', year: 2023, category: 'sport', dailyPrice: 3800, status: 'available', city: 'Riyadh', hp: 631, seats: 2, engine: 'V10', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '17', brand: 'PORSCHE', model: 'Taycan Turbo S', year: 2024, category: 'sedan', dailyPrice: 1800, status: 'available', city: 'Jeddah', hp: 750, seats: 4, engine: 'Electric', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '18', brand: 'FERRARI', model: 'SF90 Stradale', year: 2024, category: 'sport', dailyPrice: 4500, status: 'available', city: 'Riyadh', hp: 986, seats: 2, engine: 'V8 Hybrid', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop', isFeatured: true },
  { id: '19', brand: 'MERCEDES-AMG', model: 'G 63', year: 2024, category: 'SUV', dailyPrice: 1900, status: 'available', city: 'Dammam', hp: 577, seats: 5, engine: 'V8', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
  { id: '20', brand: 'LEXUS', model: 'LX 600', year: 2024, category: 'SUV', dailyPrice: 1400, status: 'available', city: 'Riyadh', hp: 409, seats: 7, engine: 'V6 Twin-Turbo', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1000&auto=format&fit=crop', isFeatured: false },
];

// Google Sheets Auth Helper
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
  });
  return google.sheets({ version: 'v4', auth });
}

// API Routes
app.get('/api/cars', (req, res) => {
  const { city, category, search } = req.query;
  let filtered = [...mockCars];

  if (city && city !== 'الكل') {
    filtered = filtered.filter(c => c.city === city || (city === 'Riyadh' && c.city === 'الرياض') || (city === 'Jeddah' && c.city === 'جدة') || (city === 'Dammam' && c.city === 'الدمام'));
  }

  if (category && category !== 'الكل') {
    filtered = filtered.filter(c => c.category.toLowerCase() === (category as string).toLowerCase());
  }

  if (search) {
    const s = (search as string).toLowerCase();
    filtered = filtered.filter(c => 
      c.brand.toLowerCase().includes(s) || 
      c.model.toLowerCase().includes(s)
    );
  }

  res.json(filtered);
});

app.get('/api/cars/:id', (req, res) => {
  const car = mockCars.find(c => c.id === req.params.id);
  if (car) res.json(car);
  else res.status(404).json({ error: 'Car not found' });
});

app.post('/api/bookings', (req, res) => {
  const bookingData = req.body;
  console.log('New Booking Request:', bookingData);
  // Logic to save to Google Sheets would go here
  res.status(201).json({ message: 'Booking request submitted successfully', bookingId: 'BK-' + Date.now() });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(port, () => {
  console.log(`AURUM Backend listening at http://localhost:${port}`);
});
