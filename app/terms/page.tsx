'use client';

import AppLayout from '@/components/AppLayout';

export default function TermsPage() {
  return (
    <AppLayout>
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-display mb-12">الشروط والأحكام</h1>
          <div className="space-y-8 text-soft leading-relaxed">
            <p>باستخدامك لخدمات AURUM، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية قبل إجراء أي حجز.</p>
            
            <h3 className="text-2xl font-display text-snow">١. متطلبات المستأجر</h3>
            <p>يجب أن يكون عمر المستأجر ٢٥ عاماً على الأقل، وأن يحمل رخصة قيادة سارية المفعول (سعودية أو دولية معترف بها).</p>

            <h3 className="text-2xl font-display text-snow">٢. الحجز والإلغاء</h3>
            <p>يتم تأكيد الحجز بعد دفع العربون أو كامل المبلغ. يمكن إلغاء الحجز قبل ٤٨ ساعة من موعد الاستلام لاسترداد المبلغ بالكامل.</p>

            <h3 className="text-2xl font-display text-snow">٣. التأمين والمسؤولية</h3>
            <p>جميع سياراتنا مؤمنة تأميناً شاملاً. المستأجر مسؤول عن أي أضرار ناتجة عن سوء الاستخدام أو الإهمال أو خرق قوانين المرور.</p>

            <h3 className="text-2xl font-display text-snow">٤. تسليم وإعادة السيارة</h3>
            <p>يجب إعادة السيارة في الوقت والمكان المحددين في عقد الإيجار. قد تفرض رسوم إضافية في حالة التأخير أو إعادة السيارة في مكان مختلف.</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
