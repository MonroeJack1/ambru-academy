/**
 * Returns the NEXT_PUBLIC_BASE_PATH env var (e.g. "/ambru-academy" on GitHub Pages)
 * or an empty string on custom domains / local dev.
 * Use this to prefix all public asset paths manually.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

/**
 * Prepend the basePath to a public asset path.
 * e.g. asset("/images/hero.png") → "/ambru-academy/images/hero.png"
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`
}
