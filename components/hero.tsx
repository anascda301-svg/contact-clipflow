import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto w-full max-w-5xl px-5 pt-4 pb-16 text-center md:pt-6">
      {/* Banner placeholder — drop the agency banner behind the hero here (/brand/banner.jpg) */}
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-bright/40 bg-emerald/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80">
        Content Distribution Agency
      </span>

      <h1 className="mx-auto mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
        Are you an entrepreneur stuck at the same reach — and the same monthly ceiling?
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        The creators who dominate their field aren&apos;t louder — they&apos;re{' '}
        <span className="text-foreground">everywhere</span>. ClipFlow makes you impossible to scroll past,
        flooding every platform with your content until you own your niche. That&apos;s exactly what our
        content distribution service is built to do.
      </p>

      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#booking"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Call Now
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#vsl"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-emerald-bright/60"
        >
          <Play className="size-4" />
          Watch how it works
        </a>
      </div>
    </section>
  )
}
