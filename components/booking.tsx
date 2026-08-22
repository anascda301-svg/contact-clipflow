// Replace CALENDLY_URL with the agency's own Calendly scheduling link.
const CALENDLY_URL = 'https://calendly.com/d/cn2-hdw-vkey/30-minute-meeting'

export function Booking() {
  return (
    <section id="booking" className="mx-auto w-full max-w-4xl scroll-mt-24 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-bright">
          Book Your First Meeting
        </p>
        <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Pick a time that works for you.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Choose a day and time below. We&apos;ll hop on a quick call, map out your distribution plan, and
          show you exactly what your first month looks like.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card glow-emerald">
        <iframe
          title="Book a meeting with ClipFlow"
          src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1b2942&text_color=ffffff&primary_color=1f7a54`}
          className="h-[720px] w-full"
          loading="lazy"
        />
      </div>
    </section>
  )
}
