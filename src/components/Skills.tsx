import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="skills" title="What I work with" eyebrow="Skills" tone="alt">
      <div className={styles.grid}>
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 70} className={styles.card}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.tag}>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
