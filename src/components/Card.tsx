import styles from "./card.module.css"
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}> 
        <Image src={'/img/venue.jpg'} 
        alt='Product pics' 
        fill={true}
        objectFit='cover'/>
      </div>
      <div className={styles.cardtext}>
        <h3>Grand Celebration Hall</h3>
        <p>
          A luxurious venue perfect for weddings, corporate events.
        </p>
      </div>
    </div>
  )
}