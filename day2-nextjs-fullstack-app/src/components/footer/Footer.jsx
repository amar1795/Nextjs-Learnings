import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className={styles.container}>
     <div>
     @2023 BLOGTASTIC .ALL RIGHTS RESERVED.
     </div>

      {/* can also use this and set the size of the image ,the size needs to be added when not importing */}
      {/* <div className={styles.container}></div> */}
     <div className={styles.social}>
      <Image src="/1.png" width={25} height={25} className={styles.icon} alt="fb"></Image>
      <Image src="/2.png" width={25} height={25} className={styles.icon} alt="insta"></Image>
      <Image src="/3.png" width={25} height={25} className={styles.icon} alt="twitter"></Image>
      <Image src="/4.png" width={25} height={25} className={styles.icon} alt="youtube"></Image>
      
     </div>
    </div>
    </>
  )
}

export default Footer
