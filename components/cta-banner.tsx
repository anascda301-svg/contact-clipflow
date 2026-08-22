import { ArrowRight, Coffee } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-8">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-bright/40 bg-gradient-to-br from-emerald/25 via-card to-navy-deep px-7 py-14 text-center md:px-16 md:py-20">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Coffee className="size-6" />
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Let&apos;s grab a coffee and build your engine.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          We only onboard 5 new clients a month so every account gets our full attention. Claim your spot
          before someone else in your niche does.
        </p>
        <a
          href="#booking"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Call Now
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
