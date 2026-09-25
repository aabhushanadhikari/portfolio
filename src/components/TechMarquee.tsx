import { profile } from '../data/portfolio'
import styles from './TechMarquee.module.css'

export function TechMarquee() {
  const items = profile.marquee

  if (items.length === 0) return null

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* Two identical runs make the -50% loop seamless. */}
        {[0, 1].map((copy) => (
          <ul key={copy} className={styles.group} aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
