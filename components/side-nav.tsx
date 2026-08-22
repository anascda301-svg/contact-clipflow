'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Layers, BarChart3, CalendarCheck } from 'lucide-react'

const ITEMS = [
  { id: 'transformation', label: 'The Transformation', Icon: Sparkles },
  { id: 'system', label: 'The System', Icon: Layers },
  { id: 'case-studies', label: 'Our Case Studies', Icon: BarChart3 },
  { id: 'booking', label: 'Book Your First Meeting', Icon: CalendarCheck },
]

export function SideNav() {
  const [active, setActive] = useState<string>('transformation')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    for (const item of ITEMS) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {ITEMS.map(({ id, label, Icon }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center justify-end"
            aria-label={label}
          >
            <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
            <span
              className={[
                'flex size-11 items-center justify-center rounded-xl border transition-all duration-300',
                isActive
                  ? 'border-emerald-bright bg-emerald text-accent-foreground glow-emerald'
                  : 'border-border bg-card/70 text-muted-foreground backdrop-blur hover:border-emerald-bright/60 hover:text-foreground',
              ].join(' ')}
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
          </a>
        )
      })}
    </nav>
  )
}
