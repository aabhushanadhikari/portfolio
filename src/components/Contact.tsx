import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
import styles from './Contact.module.css'

const channels = [
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { label: 'Location', value: profile.location },
  { label: 'Availability', value: profile.availability },
]

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
    <Section id="contact" className={styles.section}>
      {/* A full-width statement, then the details and the form beneath it. */}
      <SectionHeading>
        Let&rsquo;s build something that holds up.
      </SectionHeading>

      <div className={styles.split}>
        <Reveal delay={80} className={styles.left}>
          <p className={styles.lead}>
            I am open to backend and full-stack Java roles. If you have an opening or a
            project in mind, my inbox is open.
          </p>

          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>

          <dl className={styles.channels}>
            {channels.map((channel) => (
              <div key={channel.label} className={styles.channel}>
                <dt className="label">{channel.label}</dt>
                <dd>
                  {channel.href ? (
                    <a href={channel.href} className={styles.channelLink}>
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

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

        <Reveal delay={160} className={styles.formWrap}>
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
                rows={4}
                required
                placeholder="Tell me about the role or project…"
              />
            </div>

            <button type="submit" className="button">
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
