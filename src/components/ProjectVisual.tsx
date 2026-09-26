import styles from './ProjectVisual.module.css'

const nodes = [
  { label: 'Client', detail: 'WebSocket' },
  { label: 'RabbitMQ broker', detail: 'STOMP plugin' },
  { label: 'Spring Boot app', detail: 'publish / subscribe' },
]

/**
 * The featured project's own architecture, drawn as three connected nodes:
 * a client on a WebSocket, the broker, and the app that publishes to it.
 * Labels are the stack from the project description — nothing invented.
 */
export function MessageFlow() {
  return (
    <figure className={styles.figure}>
      <div className={styles.flow} aria-hidden="true">
        {nodes.map((node) => (
          <div key={node.label} className={styles.node}>
            <span className={styles.nodeLabel}>{node.label}</span>
            <span className={styles.nodeDetail}>{node.detail}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>
        Messages reach connected clients as they arrive, instead of being polled.
      </figcaption>
    </figure>
  )
}
