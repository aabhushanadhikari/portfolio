import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  children: ReactNode
  /**
   * black — the page surface
   * band — the near-black alternate band (#0a0a0a)
   */
  tone?: 'black' | 'band'
  /** Width of the inner container. wide lets imagery run to the edges. */
  width?: 'default' | 'wide'
  className?: string
  innerClassName?: string
}

const tones = {
  black: '',
  band: styles.toneBand,
} as const

/** A full-bleed band. Separation between sections comes from space, not rules. */
export function Section({
  id,
  children,
  tone = 'black',
  width = 'default',
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, tones[tone], className ?? ''].filter(Boolean).join(' ')}
    >
      <div
        className={[styles.inner, width === 'wide' ? styles.innerWide : '', innerClassName ?? '']
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  /** The section's single large headline. Nothing sits above it. */
  children: ReactNode
  /** One or two short sentences, set below the headline. */
  lede?: ReactNode
  size?: 'display' | 'title'
  align?: 'left' | 'center'
  className?: string
  headingClassName?: string
}

export function SectionHeading({
  children,
  lede,
  size = 'display',
  align = 'left',
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <header
      className={[
        styles.heading,
        align === 'center' ? styles.headingCenter : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2
        className={[
          size === 'title' ? styles.headlineTitle : styles.headline,
          headingClassName ?? '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </header>
  )
}
