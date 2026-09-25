import { navItems, profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'
import styles from './Nav.module.css'

const sectionIds = navItems.map((item) => item.id)

export function Nav() {
  const activeSection = useScrollSpy(sectionIds)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>{profile.initials}</span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <nav className={styles.links} aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? `${styles.link} ${styles.linkActive}`
                  : styles.link
              }
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <a href={profile.resumeUrl} className={styles.resume} download>
            <Icon name="download" size={15} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  )
}
