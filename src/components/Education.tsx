import { educations } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Education.module.css'

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Background" tone="alt">
      <Reveal className={styles.column}>
        <h3 className={styles.subheading}>
          <Icon name="graduation" size={22} />
          Degrees & qualifications
        </h3>
        <ul className={styles.list}>
          {educations.map((education) => (
            <li key={education.institution}>
              <p className={styles.itemTitle}>
                {education.degree}
                {education.field ? `, ${education.field}` : ''}
              </p>
              <p className={styles.itemMeta}>
                {[
                  education.institution,
                  [education.startYear, education.endYear].filter(Boolean).join(' — '),
                ]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
              {education.description && (
                <p className={styles.itemBody}>{education.description}</p>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
