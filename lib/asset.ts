// Single source of truth for the GitHub Pages basePath.
// Must match `basePath` in next.config.ts and the repo name.
export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/outshift-design-next' : ''

/**
 * Prefix a public asset path with the basePath.
 *
 * Use this for raw <img src>, <video>/<source src>, and any inline-style or
 * JS-referenced asset under /public. <Link href> and next/image already apply
 * basePath automatically and should NOT be wrapped with this helper.
 *
 *   asset('/images/logo.svg')  ->  '/outshift-design-next/images/logo.svg' (prod)
 *   asset('/images/logo.svg')  ->  '/images/logo.svg'                       (dev)
 */
export function asset(p: string): string {
  const path = p.startsWith('/') ? p : `/${p}`
  return `${BASE_PATH}${path}`
}
