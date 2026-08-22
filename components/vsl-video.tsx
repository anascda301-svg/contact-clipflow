import { Play } from 'lucide-react'

// Paste the Google Drive file ID for VSL26.mp4 here to embed the 5–6 minute explainer.
// e.g. const DRIVE_FILE_ID = '1AbCdEfGhIjKlMnOpQrStUv'
const DRIVE_FILE_ID = ''

export function VslVideo() {
  return (
    <section id="vsl" className="mx-auto w-full max-w-4xl scroll-mt-24 px-5 py-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-balance font-display text-2xl font-semibold tracking-tight md:text-3xl">
          See exactly how it works
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          A 5–6 minute walkthrough of the entire distribution engine — from a single long video to
          hundreds of shorts live across every platform.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card glow-emerald">
        <div className="relative aspect-video w-full">
          {DRIVE_FILE_ID ? (
            <iframe
              title="ClipFlow explainer video"
              src={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-navy-elevated to-navy-deep">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
              <p className="px-6 text-center text-sm text-muted-foreground">
                Explainer video — <span className="text-foreground">VSL26.mp4</span> (connect Google Drive
                to embed)
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
