import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'عبدالله محمد',
      car: 'Rolls Royce Ghost',
      text: 'تجربة استثنائية بكل المقاييس. السيارة كانت في حالة ممتازة والتسليم كان في الموعد تماماً. فريق العمل محترف جداً.',
      rating: 5
    },
    {
      name: 'سارة القحطاني',
      car: 'Bentley Bentayga',
      text: 'أفضل خدمة تأجير سيارات فاخرة في الرياض. الاهتمام بالتفاصيل مذهل، والسيارة كانت نظيفة جداً ومعطرة.',
      rating: 5
    },
    {
      name: 'فهد العتيبي',
      car: 'Ferrari F8',
      text: 'استأجرت الفيراري لمناسبة خاصة وكانت ليلة لا تُنسى. الإجراءات كانت سريعة وسهلة جداً. شكراً AURUM.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Decorative Quote Mark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[300px] font-serif text-green/5 leading-none pointer-events-none">❝</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl font-display mb-4">ماذا يقول عملاؤنا؟</h2>
          <p className="text-soft font-light">آراء من وثقوا بنا لتجربة الفخامة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-green-dk p-8 border border-green/10 reveal">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-green fill-green" />
                ))}
              </div>
              <p className="text-soft italic mb-8 leading-relaxed">&quot;{review.text}&quot;</p>
              <div>
                <h4 className="text-snow font-bold">{review.name}</h4>
                <p className="text-green text-xs font-mono mt-1">{review.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
