import { useState } from 'react'
import { navItems, profile } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'
import styles from './Nav.module.css'

const sectionIds = navItems.map((item) => item.id)

export function Nav() {
  const activeSection = useScrollSpy(sectionIds)
  const scrolled = useScrolled(12)
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={scrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} onClick={() => setMenuOpen(false)}>
          {profile.name}
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
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>

          <a href={profile.resumeUrl} className={styles.resume} download>
            Resume
          </a>

          <button
            type="button"
            className={menuOpen ? `${styles.menuButton} ${styles.menuButtonOpen}` : styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            Menu
            <Icon name="chevronRight" size={12} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.menu} aria-label="Main">
          <ul className={styles.menuList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} download onClick={() => setMenuOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
