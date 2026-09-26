import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './Reveal.module.css'

/** Elements the wrapper is allowed to become, so list items stay list items. */
type RevealTag = 'div' | 'li' | 'article' | 'section' | 'span'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Render as something other than a div — e.g. `li` inside an `ol`. */
  as?: RevealTag
}

/** Fades content up 20px the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Typed as 'div' so the ref and props stay honest; the tag itself is dynamic.
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
