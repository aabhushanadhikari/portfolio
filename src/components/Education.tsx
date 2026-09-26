import { educations } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Education.module.css'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading>Where I studied.</SectionHeading>

      <Reveal>
        <ul className={styles.list}>
          {educations.map((education) => (
            <li key={education.institution} className={styles.item}>
              <p className={styles.years}>
                {[education.startYear, education.endYear].filter(Boolean).join(' — ') ||
                  '—'}
              </p>
              <div className={styles.body}>
                <h3 className={styles.degree}>
                  {education.degree}
                  {education.field ? `, ${education.field}` : ''}
                </h3>
                <p className={styles.institution}>{education.institution}</p>
                {education.description && (
                  <p className={styles.description}>{education.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
