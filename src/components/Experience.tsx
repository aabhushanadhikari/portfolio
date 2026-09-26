import { experiences } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section id="experience" tone="band">
      <SectionHeading lede="Two production platforms, both on the JVM. Features owned from schema to endpoint.">
        Where I&rsquo;ve shipped code.
      </SectionHeading>

      {/* A vertical editorial timeline: dates in a rail, a hairline, a dot. */}
      <ol className={styles.timeline}>
        {experiences.map((job, index) => (
          <Reveal
            as="li"
            key={`${job.company}-${job.role}`}
            delay={index * 80}
            className={styles.entry}
          >
            {/* Dates sit in the rail, clear of the hairline. */}
            <div className={styles.dates}>
              <p className={styles.datesLine}>
                <span>{job.startDate}</span>
                <span className={styles.dash} aria-hidden="true">
                  &mdash;
                </span>
                <span className={job.current ? styles.current : undefined}>{job.endDate}</span>
              </p>
            </div>

            <div className={styles.body}>
              <span className={styles.dot} aria-hidden="true" />

              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.role}>{job.role}</p>
              {job.focus && <p className={styles.focus}>{job.focus}</p>}

              <ul className={styles.highlights}>
                {job.highlights.map((highlight, position) => (
                  <li key={highlight} className={position === 0 ? styles.lead : undefined}>
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className={styles.stack}>
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <span className="tag">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
