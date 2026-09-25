import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Contact.module.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)

    setSent(true)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact" tone="dark">
      <div className={styles.grid}>
        <Reveal className={styles.info}>
          <p className={styles.lead}>
            I am currently open to backend and full-stack Java roles. If you have an
            opening, a project in mind, or just want to say hello, my inbox is open.
          </p>

          <ul className={styles.channels}>
            <li>
              <a href={`mailto:${profile.email}`} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon name="mail" size={18} />
                </span>
                <span>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>{profile.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <span className={styles.channelLabel}>Phone</span>
                  <span className={styles.channelValue}>{profile.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <span className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon name="location" size={18} />
                </span>
                <span>
                  <span className={styles.channelLabel}>Location</span>
                  <span className={styles.channelValue}>{profile.location}</span>
                </span>
              </span>
            </li>
            <li>
              <span className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon name="briefcase" size={18} />
                </span>
                <span>
                  <span className={styles.channelLabel}>Availability</span>
                  <span className={styles.channelValue}>{profile.availability}</span>
                </span>
              </span>
            </li>
          </ul>

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
                  <Icon name={social.icon as IconName} size={17} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className={styles.formWrap}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role or project..."
              />
            </div>

            <button type="submit" className={styles.submit}>
              Send message
            </button>

            {sent && (
              <p className={styles.note} role="status">
                Opening your email client — if nothing happens, write to{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
