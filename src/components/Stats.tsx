import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Stats.module.css'

/**
 * A stat moment set as type, not as four boxed cards: one sentence you can read
 * across, with the numbers doing the shouting. Full labels stay available to
 * screen readers.
 */
const stats = [
  { value: '2+', word: 'years.', label: 'Years of experience' },
  { value: '5', word: 'services.', label: 'Spring Cloud services' },
  { value: '2', word: 'platforms.', label: 'Production platforms' },
  { value: '3', word: 'projects.', label: 'Open-source projects' },
]

export function Stats() {
  return (
    <Section id="stats" tone="band" className={styles.band}>
      <Reveal>
        {/* One sentence you can read straight across: "2+ years. 5 services." */}
        <p className={styles.sentence}>
          {stats.map((stat) => (
            <span key={stat.label} className={styles.item}>
              <span className="srOnly">{stat.label}. </span>
              <span aria-hidden="true" className={styles.value}>
                {stat.value}
              </span>
              {/* Under the figure, so the grey never sits on the number's line. */}
              <span aria-hidden="true" className={styles.word}>
                {stat.word}
              </span>
            </span>
          ))}
        </p>
      </Reveal>
    </Section>
  )
}
