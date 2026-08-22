import Image from 'next/image'

/**
 * ClipFlow glass logo intro — sits at the very top, before the hero headline.
 *
 * NOTE ON THE FLAMES:
 * The supplied logo is a flattened raster image (JPEG), so the three internal
 * flames are NOT individually addressable vector paths. Per brand rules we do
 * NOT split or move sections of the raster to fake independent flame motion.
 * Instead the logo is preserved exactly, and three soft glow accents are laid
 * over the flame positions and pulsed on independent, non-synchronized timings
 * (see .flame-glow-a/b/c in globals.css) so the flames read as "alive" without
 * distorting the artwork. If a layered SVG with separate flame paths becomes
 * available later, those paths can be animated directly in place of the glows.
 */
export function BrandIntro() {
  return (
    <section aria-label="ClipFlow" className="mx-auto flex w-full max-w-5xl justify-center px-5 pt-6 md:pt-8">
      <div className="group logo-glass relative">
        {/* Glass surface */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-md shadow-[0_20px_60px_-24px_oklch(0.5_0.13_160/0.5)] transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/[0.07] sm:p-6">
          {/* soft top highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent"
          />

          <div className="relative">
            <Image
              src="/brand/clipflow-logo.jpeg"
              alt="ClipFlow logo — three flames"
              width={640}
              height={560}
              priority
              className="logo-img h-auto w-32 select-none rounded-2xl transition-transform duration-500 group-hover:scale-[1.015] sm:w-40 md:w-48"
            />

            {/* Independent breathing glow accents over the three flame heads */}
            <span
              aria-hidden="true"
              className="flame-glow-c pointer-events-none absolute left-[26%] top-[30%] size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-bright/70 blur-md sm:size-8"
            />
            <span
              aria-hidden="true"
              className="flame-glow-a pointer-events-none absolute left-1/2 top-[22%] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-md sm:size-11"
            />
            <span
              aria-hidden="true"
              className="flame-glow-b pointer-events-none absolute left-[74%] top-[30%] size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-bright/70 blur-md sm:size-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
