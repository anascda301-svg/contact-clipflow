'use client'

import { useEffect, useRef, useState } from 'react'

function buildPath(w: number, h: number) {
  if (!w || !h) return ''
  const cx = w * 0.5
  const amp = Math.min(w * 0.2, 240)
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const period = Math.max(520, Math.min(820, vh * 0.9))
  const step = 16
  let d = ''
  for (let y = 0; y <= h; y += step) {
    const x = cx + amp * Math.sin((y / period) * Math.PI * 2)
    d += y === 0 ? `M ${x.toFixed(1)} ${y}` : ` L ${x.toFixed(1)} ${y}`
  }
  return d
}

export function ScrollSnake() {
  const pathRef = useRef<SVGPathElement>(null)
  const litRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)
  const glowRef = useRef<SVGCircleElement>(null)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const measure = () => {
      setDims({ w: window.innerWidth, h: document.documentElement.scrollHeight })
    }
    measure()
    window.addEventListener('resize', measure, { passive: true })
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    return () => {
      window.removeEventListener('resize', measure)
      ro.disconnect()
    }
  }, [])

  const d = buildPath(dims.w, dims.h)

  useEffect(() => {
    const path = pathRef.current
    const lit = litRef.current
    if (!path || !lit || !d) return
    const len = path.getTotalLength()
    lit.style.strokeDasharray = `${len}`

    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      lit.style.strokeDashoffset = `${len * (1 - progress)}`
      const pt = path.getPointAtLength(len * progress)
      dotRef.current?.setAttribute('cx', `${pt.x}`)
      dotRef.current?.setAttribute('cy', `${pt.y}`)
      glowRef.current?.setAttribute('cx', `${pt.x}`)
      glowRef.current?.setAttribute('cy', `${pt.y}`)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [d])

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <filter id="snake-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faint full track */}
      <path ref={pathRef} d={d} stroke="oklch(1 0 0 / 0.07)" strokeWidth={1.5} />
      {/* lit, revealed portion */}
      <path
        ref={litRef}
        d={d}
        stroke="oklch(1 0 0 / 0.55)"
        strokeWidth={2}
        strokeLinecap="round"
        filter="url(#snake-glow)"
      />
      {/* traveling dot */}
      <circle ref={glowRef} r={11} fill="oklch(1 0 0 / 0.18)" filter="url(#snake-glow)" />
      <circle ref={dotRef} r={4.5} fill="oklch(1 0 0)" filter="url(#snake-glow)" />
    </svg>
  )
}
