import Image from 'next/image';

export default function AboutStrip() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Photos */}
        <div className="relative reveal-right">
          <div className="relative w-full aspect-[4/5] overflow-hidden border border-green/20">
            <Image
              src="https://picsum.photos/seed/interior/800/1000"
              alt="Car Interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square overflow-hidden border-4 border-green-dk shadow-dark">
            <Image
              src="https://picsum.photos/seed/exterior/600/600"
              alt="Car Exterior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute top-10 -left-10 bg-green px-8 py-4 shadow-green transform -rotate-90 origin-bottom-left">
            <span className="text-white font-bold tracking-[4px] text-sm uppercase">١٥ عاماً من التميز</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="reveal-left">
          <h2 className="text-5xl md:text-6xl font-display mb-8 leading-tight">
            نحن لا نؤجر سيارات، <br />
            <span className="text-green">نحن نصنع تجارب.</span>
          </h2>
          <p className="text-soft font-light leading-relaxed mb-12 text-lg">
            في AURUM، نؤمن بأن الفخامة ليست مجرد مظهر، بل هي شعور بالتميز والراحة. منذ ١٥ عاماً ونحن نسعى لتقديم أرقى خدمات تأجير السيارات في المملكة، مع التركيز على أدق التفاصيل التي تضمن رضا عملائنا المميزين.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'أسطول حصري', desc: 'أحدث الموديلات من أفخم الماركات العالمية.' },
              { title: 'خدمة VIP', desc: 'فريق متخصص لخدمتك على مدار الساعة.' },
              { title: 'توصيل سريع', desc: 'نصل إليك أينما كنت في غضون ساعتين.' },
              { title: 'شفافية كاملة', desc: 'أسعار واضحة بدون رسوم خفية.' }
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-green/10 hover:border-green/30 transition-colors relative group">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="text-snow font-bold mb-2">{feature.title}</h4>
                <p className="text-muted text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
