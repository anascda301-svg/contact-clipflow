export function SiteHeader() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
      <a href="#top" className="flex items-center gap-2.5" aria-label="ClipFlow home">
        {/* Agency logo placeholder — replace /brand/logo.svg with the ClipFlow logo */}
        <span className="flex size-9 items-center justify-center rounded-lg border border-emerald-bright/40 bg-emerald/20 font-display text-sm font-bold text-foreground">
          CF
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">ClipFlow</span>
      </a>
      <a
        href="#booking"
        className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
      >
        Book a Call
      </a>
    </header>
  )
}
