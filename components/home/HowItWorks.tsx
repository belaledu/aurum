export default function HowItWorks() {
  const steps = [
    { number: '①', title: 'اختر سيارتك', desc: 'تصفح أسطولنا المتنوع واختر السيارة التي تناسب ذوقك واحتياجك.' },
    { number: '②', title: 'أكمل الحجز', desc: 'حدد التواريخ والمدينة، وأدخل بياناتك بسهولة عبر منصتنا.' },
    { number: '③', title: 'استلم وانطلق', desc: 'سنقوم بتوصيل السيارة إليك أو يمكنك استلامها من أقرب فرع.' }
  ];

  return (
    <section className="py-24 bg-green-md relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl font-display mb-4">كيف تعمل AURUM؟</h2>
          <p className="text-soft font-light">ثلاث خطوات بسيطة تفصلك عن تجربة الفخامة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-2/3 h-[1px] border-t border-dashed border-green/30 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center reveal">
              <div className="w-20 h-20 rounded-full bg-green-dk border border-green/20 flex items-center justify-center text-3xl text-green mb-6 shadow-green-sm">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-snow mb-4">{step.title}</h4>
              <p className="text-muted text-sm max-w-[250px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
