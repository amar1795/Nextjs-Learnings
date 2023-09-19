import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        // either can use fill or can specify the height and width
        // width={500}
        // height={500}
        alt=''
        className={styles.img}
        />
        <div className={styles.imgText}>
          <div className={styles.imgTitle}>
          Digital Storytellers
          </div>
          <div className={styles.imgDesc}>
          Handcrafting award winning digital experiences
            </div>
        </div>

      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Who are we ?
          </h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis.
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>

        </div>

      

        <div className={styles.item}>
          <h1 className={styles.title}>
            What do we Do?

          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat unde expedita eaque amet cupiditate dolorum ea nihil impedit architecto quisquam at voluptates quos debitis, obcaecati sunt blanditiis commodi, voluptas aut porro a beatae repudiandae?
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          <Button url="/contact" text="Contact"/>

        </div>
      </div>
      
    </div>
  )
}

export default page
