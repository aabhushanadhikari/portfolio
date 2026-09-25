import { profile } from '../data/portfolio'
import { CountUp } from './CountUp'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './About.module.css'

const facts = [
  { value: 2, suffix: '+', label: 'Years of experience' },
  { value: 5, suffix: '', label: 'Spring Cloud services' },
  { value: 2, suffix: '', label: 'Production platforms' },
  { value: 3, suffix: '', label: 'Open-source projects' },
]

export function About() {
  return (
    <Section id="about" title="About me" eyebrow="Who I am">
      <div className={styles.grid}>
        <Reveal className={styles.prose}>
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className={styles.facts}>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt className={styles.factValue}>
                  <CountUp value={fact.value} suffix={fact.suffix} />
                </dt>
                <dd className={styles.factLabel}>{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
