import styles from "./card.module.css"

export default function Card() {
  return (
    <div className={styles.card}>
      <img src="/venue.jpg" className={styles.image} />

      <div className={styles.content}>
        <h2>Grand Celebration Hall</h2>
        <p>
          A luxurious venue perfect for weddings, corporate events,
          and grand celebrations with modern facilities.
        </p>
      </div>
    </div>
  )
}