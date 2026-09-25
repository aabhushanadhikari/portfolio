import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
  /**
   * default — page background
   * alt    — the light grey band Apple alternates between sections
   * dark   — forced black band, even in the light theme
   */
  tone?: 'default' | 'alt' | 'dark'
}

export function Section({ id, title, eyebrow, children, tone = 'default' }: SectionProps) {
  return (
    <section id={id} className={styles[tone]}>
      <div className={styles.inner}>
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
