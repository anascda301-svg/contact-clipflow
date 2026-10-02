const CASES = [
  { src: '/case-studies/cs-4.jpeg', caption: 'Instagram — 1.8M followers · 401 posts', tall: true },
  { src: '/case-studies/cs-6.jpeg', caption: 'TikTok — 591K followers · 6.8M likes', tall: true },
  { src: '/case-studies/cs-7.jpeg', caption: 'YouTube — 768K subscribers · millions of views', tall: false },
  { src: '/case-studies/cs-3.jpeg', caption: 'YouTube — 603K subscribers · 26.5M+ views', tall: true },
  { src: '/case-studies/cs-5.jpeg', caption: 'Instagram profile — powered by Reachify', tall: false },
  { src: '/case-studies/cs-1.jpeg', caption: 'YouTube — 13.7K subscribers · 904K+ views', tall: true },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-bright">Our Case Studies</p>
        <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Real accounts. Real numbers.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Every screenshot below is a live account we grew through pure distribution — no ad budget,
          just the right content in the right place, on repeat.
        </p>
      </div>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {CASES.map((c) => (
          <figure
            key={c.src}
            className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.src || '/placeholder.svg'}
              alt={c.caption}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="flex items-center gap-2 border-t border-border px-4 py-3 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-bright" />
              {c.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
