/**
 * Single source of truth for external integrations on the ClipFlow site.
 *
 * To connect the VSL: paste the Google Drive file ID of VSL26.mp4 into
 * `vslGoogleDriveFileId` below. Nothing else needs to change.
 *
 * IMPORTANT — Google Drive sharing:
 * The Drive video file must be shared with "Anyone with the link" (Viewer)
 * so website visitors can watch it WITHOUT logging into your personal Google
 * account. No Google credentials, passwords, or private tokens are used or
 * stored anywhere in this client-side code.
 */
export const SITE_CONFIG = {
  /** Google Drive file ID for the ClipFlow VSL (e.g. "1AbCdEfGhIjKlMnOpQrStUv"). Leave "" to show the placeholder. */
  vslGoogleDriveFileId: '',
  /** Public Calendly scheduling link used in the booking section and CTAs. */
  calendlyUrl: 'https://calendly.com/meet101/vip',
} as const

/** Build the public embed URL for a shared Google Drive video file. */
export function driveEmbedUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`
}

/** Build the "open in Google Drive" fallback URL for a shared file. */
export function driveViewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view`
}
