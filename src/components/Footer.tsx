import { navItems, profile } from '../data/portfolio'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {year} {profile.name}
        </p>

        <nav className={styles.links} aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className={styles.builtWith}>Built with React, TypeScript and Vite</p>
      </div>
    </footer>
  )
}
