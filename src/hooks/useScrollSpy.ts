import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * A string key is used as the effect dependency to keep the observer stable
 * when callers pass a freshly built array on every render.
 */
export function useScrollSpy(ids: readonly string[]): string {
  const [active, setActive] = useState('')
  const idsKey = ids.join('|')

  useEffect(() => {
    const targets = idsKey
      .split('|')
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey])

  return active
}
