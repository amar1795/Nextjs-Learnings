import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> let's Keep in touch</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          src="/contact.png"
          alt=""
          fill={true}
          className={styles.image}
          >
          </Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea
          
          className={styles.textarea}
          placeholder='message'
          cols="30"
          rows="10"
          >
          </textarea>
          <Button url="#" text="send">  </Button>
        </form>
      </div>
    </div>
  )
}

export default page
