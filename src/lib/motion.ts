/**
 * Plain function (not a hook) so it can be called during render — including
 * inside a useState initialiser, which is how the animated components decide
 * their first frame.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
