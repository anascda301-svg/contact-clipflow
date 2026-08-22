const STATS = [
  { value: '3–30', label: 'Accounts opened per client' },
  { value: '90–900', label: 'Videos published every month' },
  { value: '3', label: 'Platforms covered end-to-end' },
  { value: '0', label: 'Dollars spent on ads' },
]

export function CapacityBar() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-card px-6 py-8 text-center">
            <div className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
