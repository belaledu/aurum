'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { value: 200, label: 'سيارة فاخرة', prefix: '+' },
    { value: 15, label: 'عاماً من الخبرة', prefix: '+' },
    { value: 5000, label: 'عميل سعيد', prefix: '+' },
    { value: 4.9, label: 'تقييم العملاء', suffix: '' }
  ];

  return (
    <section ref={ref} className="py-20 green-gradient-btn">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center text-white">
            <div className="text-4xl md:text-6xl font-display font-bold mb-2">
              {stat.prefix}
              {inView ? (
                <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              ) : '0'}
              {stat.suffix}
            </div>
            <div className="text-[10px] tracking-[4px] uppercase opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
