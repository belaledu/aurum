import Link from 'next/link';
import { Twitter, Instagram, Send, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0B1D14"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-3xl font-bold tracking-wider font-logo text-snow">AURUM</span>
              <span className="text-xs tracking-[6px] text-green uppercase">Luxury Cars</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              نقدم لك تجربة قيادة لا تُنسى في قلب المملكة العربية السعودية. أسطولنا يضم أرقى السيارات العالمية لتناسب ذوقك الرفيع.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-soft hover:bg-green hover:text-snow transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-soft hover:bg-green hover:text-snow transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-soft hover:bg-green hover:text-snow transition-all">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-soft hover:bg-green hover:text-snow transition-all">
                <Music2 size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-snow font-bold mb-6">روابط سريعة</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-soft hover:text-green transition-colors text-sm">الرئيسية</Link></li>
              <li><Link href="/cars" className="text-soft hover:text-green transition-colors text-sm">أسطولنا</Link></li>
              <li><Link href="/about" className="text-soft hover:text-green transition-colors text-sm">من نحن</Link></li>
              <li><Link href="/contact" className="text-soft hover:text-green transition-colors text-sm">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-snow font-bold mb-6">خدماتنا</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services#daily" className="text-soft hover:text-green transition-colors text-sm">تأجير يومي</Link></li>
              <li><Link href="/services#chauffeur" className="text-soft hover:text-green transition-colors text-sm">تأجير مع سائق</Link></li>
              <li><Link href="/services#vip" className="text-soft hover:text-green transition-colors text-sm">خدمات كبار الشخصيات</Link></li>
              <li><Link href="/services#airport" className="text-soft hover:text-green transition-colors text-sm">توصيل للمطار</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-snow font-bold mb-6">تواصل معنا</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-soft text-sm">الرياض، المملكة العربية السعودية</li>
              <li className="text-soft text-sm" dir="ltr">+966 50 000 0000</li>
              <li className="text-soft text-sm">info@aurum.sa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">© ٢٠٢٥ AURUM. جميع الحقوق محفوظة</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted hover:text-green text-xs transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="text-muted hover:text-green text-xs transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
