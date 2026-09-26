import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="skills" width="wide">
      <SectionHeading lede="Spring Boot and PostgreSQL do most of the work. Everything else is there when the problem calls for it.">
        The stack I reach for.
      </SectionHeading>

      {/* One horizontal strip that snaps, rather than a grid of six boxes. */}
      <Reveal className={styles.viewport}>
        <ul className={styles.strip}>
          {skills.map((group) => (
            <li key={group.title} className={styles.column}>
              <h3 className="label">{group.title}</h3>
              <ul className={styles.tags}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="tag">{skill}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
