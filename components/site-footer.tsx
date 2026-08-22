import { ArrowRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Let&apos;s turn your reach into a real business.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
          Your content is already good enough. It just needs to be everywhere. Let us handle the
          distribution.
        </p>
        <a
          href="#booking"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Call
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-md border border-emerald-bright/40 bg-emerald/20 font-display text-xs font-bold text-foreground">
              CF
            </span>
            <span className="font-display font-semibold text-foreground">ClipFlow</span>
          </div>
          <p>© {new Date().getFullYear()} ClipFlow. Distribute like the top 1%.</p>
        </div>
      </div>
    </footer>
  )
}
