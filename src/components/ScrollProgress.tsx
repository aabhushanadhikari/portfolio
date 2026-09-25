import styles from './ScrollProgress.module.css'

interface ScrollProgressProps {
  /** 0 → 1, supplied by useScrollProgress. */
  progress: number
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
