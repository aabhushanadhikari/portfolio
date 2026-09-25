import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades content in the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
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
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
