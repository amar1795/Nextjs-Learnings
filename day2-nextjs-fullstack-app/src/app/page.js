import Image from 'next/image'
import styles from './page.module.css'
import hero from "public/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better Design for your digital products</h1>
      <p className={styles.desc}>Turning your ideas into reality. We bring togerther the teams from the global tech industry</p>
      <button className={styles.button}>
        See our Works
      </button>
    </div>

    <div className={styles.item}>
    <Image src={hero} className={styles.img}></Image>
    </div>


    </div>
  )
}
