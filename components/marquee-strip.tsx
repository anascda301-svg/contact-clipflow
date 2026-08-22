const WORDS = [
  'Godfather of the Game',
  'Clips Built to Go Viral',
  'Zero Hassle',
  'Zero Ad Spend',
  'Growth Without a Ceiling',
  'A First for the MENA Region',
]

export function MarqueeStrip() {
  const items = [...WORDS, ...WORDS]
  return (
    <section aria-hidden="true" className="relative w-full overflow-hidden border-y border-border py-5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap will-change-transform">
        {items.map((w, i) => (
          <div key={`${w}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground/90 md:text-2xl">
              {w}
            </span>
            <span className="text-emerald-bright">✦</span>
          </div>
        ))}
      </div>
    </section>
  )
}
