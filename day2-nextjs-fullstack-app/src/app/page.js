import Image from 'next/image'
import styles from './page.module.css'
import hero from "public/hero.png"
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better Design for your digital products</h1>
      <p className={styles.desc}>Turning your ideas into reality. We bring togerther the teams from the global tech industry</p>
      <Button text=" See our Works" url="/portfolio"/>
    </div>

    <div className={styles.item}>
      {/* if importing the image then in that case no need to specify position realtive to the parent container  */}
    <Image src={hero} className={styles.img}></Image>
    </div>


    </div>
  )
}
