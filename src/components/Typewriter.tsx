import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'
import styles from './Typewriter.module.css'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
  gapMs?: number
}

const EMPTY: string[] = []

export function Typewriter({
  words,
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseMs = 1700,
  gapMs = 320,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(() => (prefersReducedMotion() ? (words[0] ?? '') : ''))
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const list = words.length ? words : EMPTY

    // Reduced motion: the initial state already holds a full phrase.
    if (prefersReducedMotion()) return

    const current = list[index % list.length]
    const finishedTyping = !deleting && text === current
    const finishedDeleting = deleting && text === ''

    // Every branch schedules a timer, so this effect never calls setState itself.
    if (finishedTyping) {
      const timer = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(timer)
    }

    if (finishedDeleting) {
      const timer = setTimeout(() => {
        setDeleting(false)
        setIndex((value) => (value + 1) % list.length)
      }, gapMs)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(
      () => {
        setText((value) => (deleting ? value.slice(0, -1) : current[value.length]))
      },
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs, gapMs])

  return (
    <span className={styles.typewriter}>
      {/* Screen readers get the full list once, not a character-by-character stream. */}
      <span className={styles.srOnly}>{words.join(', ')}</span>
      <span aria-hidden="true">
        {text}
        <span className={styles.caret} />
      </span>
    </span>
  )
}
