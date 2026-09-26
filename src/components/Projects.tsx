import { projects } from '../data/portfolio'
import { Icon } from './Icon'
import { MessageFlow } from './ProjectVisual'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Projects.module.css'

/** The first project takes the full stage; the rest are set smaller below it. */
const [lead, ...rest] = projects

function TagList({ tech }: { tech: string[] }) {
  return (
    <ul className={styles.tags}>
      {tech.map((item) => (
        <li key={item}>
          <span className="tag">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SourceLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="textLink"
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.label}
          <Icon name="chevronRight" size={15} />
        </a>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading lede="Messaging, CRUD services and the layer patterns underneath them.">
        Things I&rsquo;ve built.
      </SectionHeading>

      {/* The first project gets the full stage; the rest are set smaller below. */}
      <Reveal className={styles.featured}>
        <div className={styles.featuredText}>
          <h3 className={styles.leadName}>{lead.name}</h3>
          <p className={styles.leadDescription}>{lead.description}</p>

          <TagList tech={lead.tech} />
          <SourceLinks links={lead.links} />
        </div>

        <div className={styles.featuredVisual}>
          <MessageFlow />
        </div>
      </Reveal>

      <div className={styles.rest}>
        {rest.map((project, index) => (
          <Reveal key={project.name} delay={index * 80} className={styles.item}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>

            <TagList tech={project.tech} />
            <SourceLinks links={project.links} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
