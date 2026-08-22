import { Check, X } from 'lucide-react'

const ADS_TRAP = [
  'You pay again for every single click.',
  'Stop paying and your reach dies overnight.',
  'The algorithm owns your audience — you just rent it.',
  'You collect impressions, not real relationships.',
  'Your income is capped by your ad budget.',
]

const DISTRIBUTION = [
  'Your content keeps working for you, 24/7.',
  'Your reach compounds month after month.',
  'You own your audience — not the algorithm.',
  'You build genuine trust and authority.',
  'Your income grows from creativity, not budget.',
]

const STEPS = [
  {
    n: '01',
    title: 'Repurpose what you already own',
    body: 'One long-form video, podcast, or talk becomes the raw material. We mine it for every hook, moment, and idea worth clipping.',
  },
  {
    n: '02',
    title: 'Expand across 5–50 accounts',
    body: 'We spin up and manage a network of accounts per platform so your best ideas hit the feed from every angle at once.',
  },
  {
    n: '03',
    title: 'Publish thousands of videos a month',
    body: 'From one source we ship hundreds — even thousands — of short videos monthly, engineered to travel and compound.',
  },
]

function CenterHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-8 py-12 text-center glow-emerald">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-bright">{eyebrow}</p>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
        {children}
      </h2>
    </div>
  )
}

export function SystemSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
      {/* The Transformation */}
      <div id="transformation" className="scroll-mt-24">
        <CenterHeading eyebrow="The Transformation">
          Your distribution engine saves you from spending a single dollar on ads.
        </CenterHeading>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Ads trap */}
        <div className="rounded-2xl border border-destructive/40 bg-destructive/[0.08] p-7 md:col-span-5">
          <h3 className="font-display text-xl font-semibold text-foreground">The Ads Trap</h3>
          <ul className="mt-6 space-y-4">
            {ADS_TRAP.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                  <X className="size-3.5" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Distribution — offset lower and to the right */}
        <div className="rounded-2xl border border-emerald-bright/50 bg-emerald/[0.12] p-7 glow-emerald md:col-span-5 md:col-start-8 md:mt-24">
          <h3 className="font-display text-xl font-semibold text-foreground">Content Distribution</h3>
          <ul className="mt-6 space-y-4">
            {DISTRIBUTION.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald text-accent-foreground">
                  <Check className="size-3.5" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The System */}
      <div id="system" className="mt-24 scroll-mt-24 md:mt-32">
        <CenterHeading eyebrow="The System">
          One long video becomes hundreds — even thousands — of short ones.
        </CenterHeading>
      </div>

      <div className="mt-14 space-y-6">
        {STEPS.map((step, i) => (
          <div
            key={step.n}
            className={[
              'flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 md:flex-row md:items-center md:gap-8',
              i % 2 === 1 ? 'md:ml-auto md:max-w-3xl md:flex-row-reverse md:text-right' : 'md:max-w-3xl',
            ].join(' ')}
          >
            <span className="font-display text-5xl font-bold text-emerald-bright/70 md:text-6xl">
              {step.n}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{step.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
