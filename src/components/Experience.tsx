import { experiences } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section id="experience" title="Work experience" eyebrow="Where I have worked">
      <ol className={styles.timeline}>
        {experiences.map((job, index) => (
          <Reveal key={`${job.company}-${job.role}`} delay={index * 100} className={styles.entry}>
            <div className={styles.marker} aria-hidden="true" />
            <div className={styles.card}>
              <div className={styles.top}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                  {job.focus && <p className={styles.focus}>{job.focus}</p>}
                </div>
                <p className={styles.dates}>
                  {job.startDate} — {job.endDate}
                  {job.current && <span className={styles.current}>Current</span>}
                </p>
              </div>

              <p className={styles.location}>{job.location}</p>

              <ul className={styles.highlights}>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <ul className={styles.stack}>
                {job.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
