import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { Reveal } from './Reveal'
import styles from './Hero.module.css'

const codeLines: { text: string; accent?: boolean }[] = [
  { text: 'public class Developer {' },
  { text: '  private final String stack = "Java · Spring Boot";' },
  { text: '' },
  { text: '  public Developer(String stack) {' },
  { text: '    this.stack = requireText(stack, "Java · Spring Boot");', accent: true },
  { text: '  }' },
  { text: '' },
  { text: '  public void build() {' },
  { text: '    writeCleanCode();', accent: true },
  { text: '    shipReliably();', accent: true },
  { text: '    keepLearning();', accent: true },
  { text: '  }' },
  { text: '}' },
]

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* The one place the page centres: a short headline and a subhead. */}
      <div className={styles.inner}>
        <Reveal>
          <h1 className={styles.headline}>{profile.name}</h1>
        </Reveal>

        <Reveal delay={90}>
          <p className={styles.subhead}>{profile.tagline}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className={styles.actions}>
            <a href="#contact" className="button">
              Get in touch
            </a>
            <a href="#projects" className="textLink">
              View projects
              <Icon name="chevronRight" size={15} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Product shot: one large object, floating on the page. */}
      <Reveal delay={260} className={styles.shotWrap}>
        <div className={styles.codeCard} aria-hidden="true">
          <div className={styles.codeHeader}>
            <span className={styles.codeDot} />
            <span className={styles.codeDot} />
            <span className={styles.codeDot} />
            <span className={styles.codeFile}>Developer.java</span>
          </div>
          <pre className={styles.codeBody}>
            <code>
              {codeLines.map((line, index) => (
                <span
                  key={index}
                  className={line.accent ? styles.codeAccent : styles.codeLine}
                >
                  {line.text || ' '}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </Reveal>

      <Reveal delay={360} className={styles.meta}>
        <p className={styles.availability}>{profile.availability}</p>
        <p className={styles.location}>
          <Icon name="location" size={15} />
          {profile.location}
        </p>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className={styles.socialLink}
                {...(social.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <Icon name={social.icon as IconName} size={16} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
