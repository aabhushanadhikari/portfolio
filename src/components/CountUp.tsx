import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

interface CountUpProps {
  value: number
  suffix?: string
  duration?: number
}

/** Counts from 0 to `value` the first time it scrolls into view. */
export function CountUp({ value, suffix = '', duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? value : 0))

  useEffect(() => {
    // Already showing the final value; nothing to animate.
    if (prefersReducedMotion()) return

    const el = ref.current
    if (!el) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // easeOutExpo: fast start, gentle settle.
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          setDisplay(Math.round(value * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
