import { projects } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Things I have built" tone="alt">
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80} className={styles.item}>
            <article className={styles.card}>
              <div className={styles.head}>
                <h3 className={styles.name}>{project.name}</h3>
                {project.featured && <span className={styles.badge}>Featured</span>}
              </div>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.tech}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className={styles.links}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.label}
                    <Icon name="arrowUpRight" size={15} />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
