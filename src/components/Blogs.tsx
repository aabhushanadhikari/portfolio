import { blogs } from '../data/portfolio'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { Section, SectionHeading } from './Section'
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
    <Section id="blogs" tone="band">
      <SectionHeading>Writing.</SectionHeading>

      <Reveal>
        <div className={styles.list}>
          {blogs.map((post) => (
            <article key={post.url} className={styles.item}>
              <div className={styles.meta}>
                <p className="label">{formatDate(post.publishedAt)}</p>
                <p className={styles.readTime}>
                  <Icon name="clock" size={14} />
                  {post.readMinutes} min read
                </p>
              </div>

              <a
                href={post.url}
                className={styles.main}
                target="_blank"
                rel="noreferrer noopener"
              >
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>

                <ul className={styles.tags}>
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>

                <span className="textLink">
                  Read on Medium
                  <Icon name="chevronRight" size={15} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
