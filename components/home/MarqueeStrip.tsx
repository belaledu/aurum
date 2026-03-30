export default function MarqueeStrip() {
  const brands = [
    'ROLLS ROYCE', 'BENTLEY', 'FERRARI', 'LAMBORGHINI', 'PORSCHE', 'MAYBACH', 'MCLAREN', 'ASTON MARTIN'
  ];

  return (
    <section className="bg-green-dk border-y border-green/10 py-6 overflow-hidden mt-20">
      <div className="marquee-track">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="text-green/60 font-mono text-sm tracking-[6px] whitespace-nowrap">{brand}</span>
            <span className="w-2 h-2 rounded-full bg-green/20 mx-12"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
