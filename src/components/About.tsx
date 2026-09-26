import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './About.module.css'

/**
 * The summary is stored as two long paragraphs. Split on sentence boundaries
 * so the page can set them as short blocks instead of a wall of text —
 * no words are added or dropped.
 */
const blocks = profile.summary.flatMap((paragraph) =>
  paragraph.split(/(?<=[.!?])\s+(?=[A-Z])/),
)
const half = Math.ceil(blocks.length / 2)
const columns = [blocks.slice(0, half), blocks.slice(half)]

const details = [
  { label: 'Based in', value: profile.location },
  { label: 'Role', value: profile.role },
  { label: 'Availability', value: profile.availability },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

export function About() {
  return (
    <Section id="about">
      <div className={styles.split}>
        <SectionHeading className={styles.heading}>
          I build backend systems that <span className={styles.accent}>don&rsquo;t fall over.</span>
        </SectionHeading>

        <Reveal delay={120}>
          <dl className={styles.details}>
            {details.map((detail) => (
              <div key={detail.label} className={styles.detail}>
                <dt className="label">{detail.label}</dt>
                <dd className={styles.detailValue}>
                  {detail.href ? (
                    <a href={detail.href} className={styles.detailLink}>
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Two text columns that each flow top to bottom, so no row leaves a gap. */}
        <Reveal className={styles.prose}>
          {columns.map((column, index) => (
            <div key={index} className={styles.proseColumn}>
              {column.map((block) => (
                <p key={block.slice(0, 32)}>{block}</p>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
