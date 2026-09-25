import { blogs } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import styles from './Blogs.module.css'

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
})

function formatDate(iso: string) {
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? iso : dateFormatter.format(date)
}

export function Blogs() {
  return (
    <Section id="blogs" title="Writing" eyebrow="Blogs">
      <div className={styles.list}>
        {blogs.map((post, index) => (
          <Reveal key={post.url} delay={index * 90}>
            <a
              href={post.url}
              className={styles.card}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.main}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>

                <ul className={styles.tags}>
                  {post.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.meta}>
                <span className={styles.date}>{formatDate(post.publishedAt)}</span>
                <span className={styles.readTime}>
                  <Icon name="clock" size={14} />
                  {post.readMinutes} min read
                </span>
                <span className={styles.readMore}>
                  Read on Medium
                  <Icon name="arrowUpRight" size={15} className={styles.arrow} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
