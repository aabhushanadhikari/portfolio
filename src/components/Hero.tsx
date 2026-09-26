import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { Reveal } from './Reveal'
import { Typewriter } from './Typewriter'
import styles from './Hero.module.css'

const codeLines: { text: string; accent?: boolean }[] = [
  { text: 'public class Developer {' },
  { text: '  private final String stack = "Java · Spring Boot";' },
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
      <div className={styles.inner}>
        <div className={styles.content}>
          <Reveal>
            <p className={styles.eyebrow}>
              <span className={styles.dot} />
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={styles.name}>{profile.name}</h1>
          </Reveal>

          <Reveal delay={160}>
            <p className={styles.role}>
              <Typewriter words={profile.rotatingRoles} />
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className={styles.tagline}>{profile.tagline}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className={styles.buttons}>
              <a href="#contact" className={`${styles.button} buttonPrimary`}>
                Get in touch
              </a>
              <a href="#projects" className={`${styles.button} buttonSecondary`}>
                View projects
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className={styles.location}>
              <Icon name="location" size={15} />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={460}>
            <ul className={styles.socials}>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                    title={social.label}
                    {...(social.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <Icon name={social.icon as IconName} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

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
                <span key={index} className={line.accent ? styles.codeAccent : styles.codeLine}>
                  {line.text || ' '}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </Reveal>
    </section>
  )
}
