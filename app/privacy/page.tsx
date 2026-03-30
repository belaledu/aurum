'use client';

import AppLayout from '@/components/AppLayout';

export default function PrivacyPage() {
  return (
    <AppLayout>
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-display mb-12">سياسة الخصوصية</h1>
          <div className="space-y-8 text-soft leading-relaxed">
            <p>في AURUM، نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتك عند استخدام خدماتنا.</p>
            
            <h3 className="text-2xl font-display text-snow">١. المعلومات التي نجمعها</h3>
            <p>نجمع المعلومات التي تقدمها لنا عند التسجيل أو الحجز، بما في ذلك اسمك، بريدك الإلكتروني، رقم هاتفك، وتفاصيل رخصة القيادة.</p>

            <h3 className="text-2xl font-display text-snow">٢. كيف نستخدم معلوماتك</h3>
            <p>نستخدم معلوماتك لمعالجة حجوزاتك، والتواصل معك بشأن خدماتنا، وتحسين تجربة المستخدم الخاصة بك.</p>

            <h3 className="text-2xl font-display text-snow">٣. حماية البيانات</h3>
            <p>نحن نستخدم إجراءات أمنية متقدمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.</p>

            <h3 className="text-2xl font-display text-snow">٤. مشاركة المعلومات</h3>
            <p>نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع شركاء موثوقين لمساعدتنا في تقديم خدماتنا.</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
