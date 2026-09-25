import { profile } from '../data/portfolio'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>{profile.initials}</span>
          {profile.name}
        </a>

        <p>
          © {year} {profile.name}. All rights reserved.
        </p>

        <p className={styles.builtWith}>Built with React, TypeScript and Vite</p>
      </div>
    </footer>
  )
}
