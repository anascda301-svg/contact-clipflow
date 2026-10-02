import { ExternalLink } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

// The Calendly link lives in lib/site-config.ts (SITE_CONFIG.calendlyUrl).
const CALENDLY_URL = SITE_CONFIG.calendlyUrl

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
          title="Book a meeting with Reachify"
          src={`${CALENDLY_URL}&hide_gdpr_banner=1&background_color=21070d&text_color=ffffff&primary_color=000000`}
          className="h-[720px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Scheduler not loading?{' '}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-emerald-bright underline-offset-4 hover:underline"
        >
          Open the booking page
          <ExternalLink className="size-3.5" />
        </a>
      </p>
    </section>
  )
}
