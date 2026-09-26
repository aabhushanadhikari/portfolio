import { skills } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading lede="Spring Boot and PostgreSQL do most of the work. Everything else is there when the problem calls for it.">
        The stack I reach for.
      </SectionHeading>

      {/*
        A wrapping grid, not a scrolling strip: the column count follows the
        available width, and every tag stays on the page with no sideways
        scrolling and nothing to tap open.
      */}
      <Reveal>
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
