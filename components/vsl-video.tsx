'use client'

import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { SITE_CONFIG, driveEmbedUrl, driveViewUrl } from '@/lib/site-config'

/**
 * VSL / Explainer video, connected to a shared Google Drive file.
 *
 * Configure the video by setting `vslGoogleDriveFileId` in `lib/site-config.ts`.
 * The Drive file must be shared publicly ("Anyone with the link") so visitors
 * can watch without signing into your Google account. No private credentials
 * are used here — only a public embed URL built from the file ID.
 */
export function VslVideo() {
  const fileId = SITE_CONFIG.vslGoogleDriveFileId
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <section id="vsl" className="mx-auto w-full max-w-4xl scroll-mt-24 px-5 py-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-balance font-display text-2xl font-semibold tracking-tight md:text-3xl">
          You don&apos;t need more content. You need more distribution.
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          A 5–6 minute walkthrough of the entire distribution engine — from a single long video to
          hundreds of shorts live across every platform.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card glow-emerald">
        <div className="relative aspect-video w-full">
          {fileId ? (
            <>
              <iframe
                title="ClipFlow explainer video"
                src={driveEmbedUrl(fileId)}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                onLoad={() => setLoaded(true)}
                onError={() => setErrored(true)}
                className="absolute inset-0 h-full w-full"
              />

              {/* Loading state — matches ClipFlow's navy visual language */}
              {!loaded && !errored && (
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-navy-elevated to-navy-deep">
                  <span className="flex size-12 items-center justify-center rounded-full border border-emerald-bright/30">
                    <span className="size-5 animate-spin rounded-full border-2 border-emerald-bright/30 border-t-emerald-bright" />
                  </span>
                  <p className="text-sm text-muted-foreground">Loading ClipFlow VSL…</p>
                </div>
              )}

              {/* Error / fallback state — never a broken iframe */}
              {errored && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-navy-elevated to-navy-deep px-6 text-center">
                  <p className="text-sm text-foreground">The VSL couldn&apos;t be loaded.</p>
                  <a
                    href={driveViewUrl(fileId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-bright/50 bg-emerald/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-emerald-bright"
                  >
                    Open video in Google Drive
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              )}
            </>
          ) : (
            /* Clean premium placeholder until a real file ID is provided */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-navy-elevated to-navy-deep px-6 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-6 translate-x-0.5" fill="currentColor" />
              </span>
              <p className="text-sm font-medium text-foreground">VSL Video</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Connect your Google Drive video file to display the ClipFlow walkthrough. Once the file ID
                is provided, the real video loads automatically.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
