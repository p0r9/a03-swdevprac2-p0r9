import styles from "./banner.module.css"

export default function Banner() {
  return (
    <div className={styles.banner}>
      
      <img 
        src="/banner.jpg"
        alt="banner"
        className={styles.image}
      />

      <div className={styles.textContainer}>
        <h1>where every event finds its venue</h1>
        <p>
          Discover the perfect venue for weddings, parties,
          meetings and special celebrations.
        </p>
      </div>

    </div>
  )
}