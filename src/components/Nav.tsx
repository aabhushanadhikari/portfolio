import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { navItems, profile, socials } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import styles from './Nav.module.css'

const sectionIds = navItems.map((item) => item.id)
/** Above this width the inline links come back, so the sheet must close. */
const DESKTOP_QUERY = '(min-width: 1069px)'

export function Nav() {
  const activeSection = useScrollSpy(sectionIds)
  const scrolled = useScrolled(12)
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  /** Set when a sheet link is chosen, so the jump to it can be timed. */
  const pendingScroll = useRef<string | null>(null)
  /** Set when the sheet closes because a link was chosen: do not pull focus back. */
  const skipFocusRestore = useRef(false)

  // Lock the page behind the sheet, and hold the layout still as the scrollbar goes.
  useEffect(() => {
    if (!menuOpen) return

    const root = document.documentElement
    const { body } = document
    const gutter = window.innerWidth - root.clientWidth

    root.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    if (gutter > 0) body.style.paddingRight = `${gutter}px`

    return () => {
      root.style.overflow = ''
      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }, [menuOpen])

  /*
   * Runs after the lock above has been lifted — React flushes every cleanup
   * before any effect body — so the jump to a section cannot be swallowed by
   * the scroll lock, which is what made a tapped link land nowhere.
   */
  useEffect(() => {
    if (menuOpen || !pendingScroll.current) return

    const target = document.getElementById(pendingScroll.current)
    pendingScroll.current = null
    if (!target) return

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Send focus with the scroll, so keyboard users continue from the section.
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true })
  }, [menuOpen])

  // Move focus into the sheet, keep Tab inside it, and Escape closes.
  useEffect(() => {
    if (!menuOpen) return

    const sheet = sheetRef.current
    // Captured here, not read in the cleanup, so focus returns to the button
    // that opened the sheet. Not to whatever was focused before: tapping a
    // button does not focus it on iOS.
    const menuButton = menuButtonRef.current
    sheet?.querySelector<HTMLAnchorElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !sheet) return

      const focusable = sheet.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      // A link chosen in the sheet moves focus to that section instead.
      if (skipFocusRestore.current) {
        skipFocusRestore.current = false
        return
      }
      menuButton?.focus()
    }
  }, [menuOpen])

  // Rotating or resizing up to desktop reveals the inline links again.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const closeSheet = () => setMenuOpen(false)

  /**
   * The browser's own jump to the fragment is unreliable while the scroll lock
   * is on, so the sheet hands the target over and the effect above does it.
   */
  const goToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    skipFocusRestore.current = true
    pendingScroll.current = id
    setMenuOpen(false)
  }

  const headerClass = [
    styles.header,
    scrolled ? styles.headerScrolled : '',
    // The bar goes opaque and fixed so it sits on top of the sheet.
    menuOpen ? styles.headerMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={headerClass}>
        <div className={styles.inner}>
          <a href="#top" className={styles.brand} onClick={closeSheet}>
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
              ref={menuButtonRef}
              type="button"
              className={
                menuOpen ? `${styles.menuButton} ${styles.menuButtonOpen}` : styles.menuButton
              }
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              {menuOpen ? 'Close' : 'Menu'}
              <Icon name="chevronRight" size={12} />
            </button>
          </div>
        </div>
      </header>

      {/*
        A sibling of the header, not a child: the bar uses backdrop-filter, and
        a filtered ancestor becomes the containing block for fixed descendants,
        which would collapse this sheet to the height of the bar.
      */}
      {menuOpen && (
        <div
          id="site-menu"
          ref={sheetRef}
          className={styles.sheet}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav aria-label="Main">
            <ul className={styles.sheetList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      activeSection === item.id
                        ? `${styles.sheetLink} ${styles.sheetLinkActive}`
                        : styles.sheetLink
                    }
                    onClick={(event) => goToSection(event, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.sheetFoot}>
            <a
              href={profile.resumeUrl}
              className="button"
              download
              onClick={closeSheet}
            >
              {profile.resumeNote}
            </a>

            <ul className={styles.sheetSocials}>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={styles.sheetSocial}
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
          </div>
        </div>
      )}
    </>
  )
}
