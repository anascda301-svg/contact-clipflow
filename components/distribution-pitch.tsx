const PLATFORMS = ['TikTok', 'Instagram', 'YouTube Shorts']

export function DistributionPitch() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-16 text-center md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-bright">Stop the leak</p>
      <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        Stop burning money on paid ads.
        <br className="hidden md:block" />
        <span className="text-muted-foreground"> Start distributing like the top 1%.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
        We put your content everywhere your audience already scrolls — organically, on repeat, across
        the three platforms that matter most.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        {PLATFORMS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  )
}
